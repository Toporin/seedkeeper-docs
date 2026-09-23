---
title: "WebAuthn Quickstart"
description: "Ajoutez la prise en charge des passkeys avec WebAuthn standard. Enregistrement, authentification, les paramètres qui comptent et les erreurs qui cassent tout."
keywords: [WebAuthn quickstart, ajouter prise en charge passkey, navigator.credentials.create, enregistrement WebAuthn, intégration clé de sécurité, pubKeyCredParams]
sidebar_position: 3
sidebar_label: "WebAuthn Quickstart"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ai-je besoin d'un SDK particulier pour prendre en charge les clés de sécurité matérielles ?", a: "Non. WebAuthn standard suffit pour tout authentificateur certifié FIDO2. Utilisez une bibliothèque serveur éprouvée pour la vérification plutôt que de l'implémenter vous-même."},
  {q: "Pourquoi mon site ne détecte-t-il pas une clé de sécurité externe ?", a: "Le plus souvent à cause d'authenticatorAttachment: platform dans authenticatorSelection, qui restreint l'enregistrement à l'authentificateur intégré de l'appareil et exclut les clés itinérantes. Laissez le champ non défini."},
  {q: "Quels algorithmes lister dans pubKeyCredParams ?", a: "Au minimum ES256 (-7), idéalement suivi de RS256 (-257). ES256 est le seul algorithme que prennent en charge beaucoup d'authentificateurs matériels, dont la Seedkeeper PRO."},
  {q: "Dois-je demander une attestation ?", a: "Uniquement si vous imposez une politique matérielle. Pour la plupart des services grand public, none est le bon choix : cela évite une charge de vérification et une question de vie privée pour une information sur laquelle vous n'agirez pas."},
  {q: "Combien de passkeys autoriser par utilisateur ?", a: "Plusieurs. Les passkeys liées au matériel ne peuvent pas être copiées : un utilisateur disposant d'un appareil de secours a besoin d'un second enregistrement. Limiter un compte à une seule passkey impose un point de défaillance unique."},
  {q: "Puis-je tester WebAuthn sans clé physique ?", a: "Oui, avec l'authentificateur virtuel des DevTools de Chrome. Configurez-le en CTAP2 avec resident keys pour approcher un authentificateur matériel, puis confirmez contre du matériel réel avant la mise en production."},
]} />

<p class="doc-subtitle">Accepter les passkeys en un quart d'heure</p>

<div class="tldr">

Il n'y a aucun code spécifique à Seedkeeper. Implémentez WebAuthn, réglez correctement quatre paramètres, et tout authentificateur certifié - Seedkeeper PRO comprise - fonctionne. Cette page couvre le flux, les réglages qui cassent spécifiquement les clés matérielles, et la façon de tester.

</div>

## Les deux opérations

WebAuthn compte exactement deux appels. Tout le reste n'est que paramètres.

**Enregistrement** - `navigator.credentials.create()`. Votre serveur émet un challenge, l'authentificateur génère une paire de clés, et vous stockez la clé publique et le credential ID renvoyés pour cet utilisateur.

**Authentification** - `navigator.credentials.get()`. Votre serveur émet un nouveau challenge, l'authentificateur le signe, et vous vérifiez la signature avec la clé publique stockée.

[Comment fonctionnent les passkeys](/docs/security-academy/passkeys/how-passkeys-work) détaille ce qui se passe entre ces appels. Le reste de cette page porte sur ce que les implémenteurs ratent.

## Utilisez une bibliothèque

N'implémentez pas la vérification vous-même. Analyser les objets d'attestation, valider les compteurs de signature et contrôler correctement les origines sont autant de points faciles à rater subtilement - et subtilement raté signifie ici non sécurisé.

Des options éprouvées existent pour chaque pile : SimpleWebAuthn pour Node, py_webauthn pour Python, webauthn4j pour Java, go-webauthn pour Go. Toutes traitent correctement par défaut les points ci-dessous.

## Les paramètres d'enregistrement qui comptent

### `pubKeyCredParams` - autorisez ES256

```json
"pubKeyCredParams": [
  { "type": "public-key", "alg": -7 },
  { "type": "public-key", "alg": -257 }
]
```

`-7` est ES256, et c'est le **seul** algorithme que prend en charge la Seedkeeper PRO - voir [Device Capabilities](/docs/developers/device-capabilities#cryptography). Un service qui ne liste que `-257` (RS256) échouera à enregistrer tout authentificateur exclusivement ECDSA, c'est-à-dire la plupart d'entre eux.

Incluez les deux, ES256 en premier.

### `authenticatorSelection` - n'excluez pas les clés itinérantes

```json
"authenticatorSelection": {
  "residentKey": "preferred",
  "userVerification": "preferred"
}
```

L'erreur la plus fréquente de toutes est de définir `authenticatorAttachment: "platform"`. Cela restreint l'enregistrement à Touch ID, Windows Hello et au matériel intégré de l'appareil, et exclut silencieusement toute clé de sécurité externe.

Laissez `authenticatorAttachment` non défini, sauf si vous voulez spécifiquement exclure les authentificateurs itinérants - auquel cas vous excluez aussi le cas d'usage où quelqu'un se connecte depuis une machine qui ne lui appartient pas.

Ne définissez `residentKey: "required"` que si vous avez besoin d'une connexion sans identifiant. Cela consomme l'un des 90 emplacements de credentials par enregistrement, là où les non-discoverable credentials n'en consomment aucun.

### `attestation` - `none` sauf nécessité

```json
"attestation": "none"
```

La plupart des services grand public devraient demander `none`. Vous n'avez pas besoin de savoir quel matériel a été utilisé, et demander une attestation ajoute une charge de vérification et une question de vie privée sans bénéfice.

Ne demandez `direct` que si vous imposez une politique matérielle - voir [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide).

### `timeout` - soyez généreux

Le NFC est plus lent que l'USB. Quelqu'un qui localise le lecteur au dos d'un téléphone, présente la carte, saisit un PIN et la présente à nouveau a besoin de plus que les 30 secondes de certaines implémentations par défaut.

Utilisez 120 secondes. Il n'y a aucun inconvénient.

## Les paramètres d'authentification

```json
{
  "challenge": "<octets aléatoires frais>",
  "allowCredentials": [ { "type": "public-key", "id": "<credential id stocké>" } ],
  "userVerification": "preferred",
  "timeout": 120000
}
```

Envoyez `allowCredentials` rempli des credentials enregistrés de l'utilisateur, sauf si vous faites de la connexion sans identifiant - auquel cas envoyez-le vide et laissez l'authentificateur proposer ses discoverable credentials.

## Les règles côté serveur

Votre bibliothèque s'en charge ; vérifiez qu'elle le fait.

- **Le challenge est aléatoire, à usage unique, et généré par le serveur.** Ne le réutilisez jamais.
- **`origin` doit correspondre exactement**, schéma et port compris.
- **`rpId` doit être votre domaine enregistrable**, ou un suffixe de celui-ci. Se tromper ici est la cause la plus fréquente du « ça marchait en développement et pas en production ».
- **Compteur de signature** : si l'authentificateur rapporte un compteur, une diminution indique un clonage. Beaucoup d'authentificateurs modernes rapportent zéro en permanence : ne traitez donc pas zéro comme une erreur.

## Prenez en charge plusieurs credentials par utilisateur

Ce point compte plus qu'il n'y paraît.

Une passkey liée au matériel ne peut pas être copiée entre appareils. Un utilisateur disposant d'un appareil principal et d'un appareil de secours enregistre **deux passkeys distinctes** auprès de votre service - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

Si votre implémentation n'autorise qu'une passkey par compte, vous imposez à tout utilisateur de clé matérielle un point de défaillance unique. Autorisez-en plusieurs, affichez-les dans les paramètres de compte avec un nom et une date de dernière utilisation, et laissez les utilisateurs en retirer une sans toutes les retirer.

## Conservez une voie de récupération

Les utilisateurs perdent des appareils. Décidez délibérément de ce qui se passe alors : un second credential enregistré, des codes de récupération, ou une méthode de repli.

Un compte doté d'une passkey et sans voie de récupération génère des tickets de support. Un compte doté d'une passkey et d'une voie de récupération faible est protégé par cette voie de récupération, pas par la passkey - voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

## Tester

**Sans matériel**, utilisez un authentificateur virtuel. Les DevTools de Chrome en proposent un sous `More tools → WebAuthn`, où vous pouvez régler CTAP2, les resident keys et la user verification pour correspondre au profil décrit dans [Device Capabilities](/docs/developers/device-capabilities).

**Avec du matériel**, il vous faut un lecteur NFC ou un lecteur de cartes à puce à contact. Il n'existe aucune voie USB : une clé de sécurité USB ne remplace donc pas le test de cet appareil.

À tester spécifiquement : un enregistrement avec `residentKey: "required"`, une authentification avec un `allowCredentials` vide, un second credential enregistré sur le même compte, et une tentative avec un mauvais PIN.

## FAQ

<details>
<summary>Ai-je besoin d'un SDK particulier pour prendre en charge les clés de sécurité matérielles ?</summary>

Non. WebAuthn standard suffit pour tout authentificateur certifié FIDO2. Utilisez une bibliothèque serveur éprouvée pour la vérification plutôt que de l'implémenter vous-même.

</details>

<details>
<summary>Pourquoi mon site ne détecte-t-il pas une clé de sécurité externe ?</summary>

Le plus souvent à cause d'`authenticatorAttachment: "platform"` dans `authenticatorSelection`, qui restreint l'enregistrement à l'authentificateur intégré de l'appareil et exclut les clés itinérantes. Laissez le champ non défini.

</details>

<details>
<summary>Quels algorithmes lister dans pubKeyCredParams ?</summary>

Au minimum ES256 (`-7`), idéalement suivi de RS256 (`-257`). ES256 est le seul algorithme que prennent en charge beaucoup d'authentificateurs matériels, dont la Seedkeeper PRO.

</details>

<details>
<summary>Dois-je demander une attestation ?</summary>

Uniquement si vous imposez une politique matérielle. Pour la plupart des services grand public, `none` est le bon choix : cela évite une charge de vérification et une question de vie privée pour une information sur laquelle vous n'agirez pas.

</details>

<details>
<summary>Combien de passkeys autoriser par utilisateur ?</summary>

Plusieurs. Les passkeys liées au matériel ne peuvent pas être copiées : un utilisateur disposant d'un appareil de secours a besoin d'un second enregistrement. Limiter un compte à une seule passkey impose un point de défaillance unique.

</details>

<details>
<summary>Puis-je tester WebAuthn sans clé physique ?</summary>

Oui, avec l'authentificateur virtuel des DevTools de Chrome. Configurez-le en CTAP2 avec resident keys pour approcher un authentificateur matériel, puis confirmez contre du matériel réel avant la mise en production.

</details>

## Articles liés

- [Device Capabilities](/docs/developers/device-capabilities)
- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
- [Comment fonctionnent les passkeys](/docs/security-academy/passkeys/how-passkeys-work)
- [Qu'est-ce que WebAuthn ?](/docs/security-academy/passkeys/what-is-webauthn)
