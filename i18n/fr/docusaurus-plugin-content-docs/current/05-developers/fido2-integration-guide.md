---
title: "FIDO2 Integration Guide"
description: "Attestation, allowlists d'AAGUID, credProtect, hmac-secret et politique d'entreprise. Ce qui va au-delà d'une intégration WebAuthn de base."
keywords: [intégration FIDO2, vérification attestation, allowlist AAGUID, politique de restriction de clés, credProtect, hmac-secret PRF, politique passkey entreprise]
sidebar_position: 4
sidebar_label: "FIDO2 Integration Guide"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quand un service doit-il demander une attestation ?", a: "Uniquement quand la politique dépend de savoir quel matériel a été utilisé : imposer des credentials liés au matériel, prouver les modèles d'appareils, ou satisfaire une exigence réglementaire. Un service grand public devrait demander none."},
  {q: "Comment restreindre l'enregistrement à un matériel précis ?", a: "Demandez une attestation, extrayez l'AAGUID des authenticator data, et comparez-le à une allowlist. Pour la Seedkeeper PRO, la valeur est 328dec20-698f-5d33-aed3-97daba53b1b0."},
  {q: "Un AAGUID identifie-t-il un appareil individuel ?", a: "Non. Il identifie une marque et un modèle. Identifier une unité précise exige l'enterprise attestation, implémentée mais actuellement désactivée sur la Seedkeeper PRO."},
  {q: "Puis-je utiliser une passkey pour dériver une clé de chiffrement ?", a: "Oui, via hmac-secret au niveau CTAP2 et prf au niveau WebAuthn. La Seedkeeper PRO le prend en charge, vérifié de bout en bout dans les navigateurs fondés sur Chromium : Bitwarden emprunte cette voie pour déchiffrer un coffre-fort avec la passkey matérielle. La prise en charge hors Chromium est inégale : concevez-la comme une amélioration assortie d'un repli."},
  {q: "Comment imposer une longueur minimale de PIN ?", a: "Via l'extension minPinLength et authenticatorConfig. La Seedkeeper PRO permet de relever le minimum au-delà des 4 chiffres par défaut, appliqué par appareil lors du provisionnement."},
]} />

<p class="doc-subtitle">Attestation, politique et extensions à connaître</p>

<div class="tldr">

Une fois WebAuthn de base fonctionnel, trois choses séparent une intégration grand public d'une intégration d'entreprise : vérifier l'**attestation** pour savoir quel matériel a été utilisé, restreindre l'enregistrement par **AAGUID**, et utiliser des extensions comme `credProtect` et `hmac-secret`. Cette page traite les trois pour la Seedkeeper PRO spécifiquement.

</div>

## Quand avez-vous réellement besoin de l'attestation

L'attestation permet de savoir quel type d'authentificateur a créé un credential. La plupart des services ne devraient pas la demander.

**Passez outre** si vous êtes un service grand public. Vous gagnez une charge de vérification et une question de vie privée, en échange d'une information sur laquelle vous n'agirez pas.

**Demandez-la** quand votre politique dépend de la réponse : vous avez besoin de credentials liés au matériel plutôt que synchronisés sur un compte cloud personnel, vous devez prouver quels appareils ont été utilisés, ou un régulateur ou un assureur vous le demande.

Ce dernier cas devient de plus en plus fréquent - voir [Les passkeys et NIS2](/docs/security-academy/passkeys/passkey-vs-password#les-passkeys-et-nis2) et [Sécurité et conformité pour les organisations](/docs/business/security-compliance-for-organizations).

## La demander et la vérifier

```json
{ "attestation": "direct" }
```

La Seedkeeper PRO renvoie une attestation **`basic_full`** : une déclaration packed signée par un certificat de lot identifiant la marque et le modèle, non l'unité individuelle. Cette distinction est délibérée et empêche l'attestation de devenir un identifiant de traçage au niveau de l'appareil.

Étapes de vérification, dans l'ordre :

1. Analysez l'objet d'attestation et confirmez le format
2. Validez la chaîne de certificats contre le FIDO Metadata Service
3. Extrayez l'AAGUID des authenticator data
4. Comparez-le à votre politique

Utilisez une bibliothèque pour les étapes 1 et 2. La FIDO Alliance publie le [Metadata Service](https://fidoalliance.org/metadata/), que la plupart des bibliothèques serveur WebAuthn consomment directement.

## Restreindre par AAGUID

L'AAGUID est un identifiant de 16 octets désignant une marque et un modèle. Pour la Seedkeeper PRO :

```
328dec20-698f-5d33-aed3-97daba53b1b0
```

Une allowlist d'AAGUID est la façon d'imposer « uniquement du matériel fourni par l'entreprise » et d'exclure les passkeys synchronisées dans des comptes iCloud ou Google personnels.

Appliquez-la à deux endroits. **À l'enregistrement**, rejetez un credential dont l'AAGUID n'est pas dans la liste, avec un message expliquant pourquoi plutôt qu'un échec générique. **Dans votre fournisseur d'identité**, s'il prend en charge nativement la restriction de clés - Microsoft Entra ID le fait, voir [Comment configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id).

Deux avertissements pratiques. Une allowlist demande d'être maintenue à mesure que vous approuvez de nouveaux modèles. Et un AAGUID identifie un modèle, jamais une unité précise - servez-vous de vos propres registres d'enregistrement pour cela.

## Enterprise Attestation

L'enterprise attestation renvoie une attestation identifiant de façon unique, liant un credential à un appareil physique plutôt qu'à un modèle.

Sur la Seedkeeper PRO, elle est **implémentée dans le firmware et actuellement désactivée** : les demandes ne renverront donc pas de données identifiant de façon unique.

Cela bloque rarement quoi que ce soit. La restriction de clés fondée sur l'AAGUID, qu'utilisent réellement la plupart des politiques d'entreprise, repose sur l'attestation standard et fonctionne dès aujourd'hui.

## Extensions à connaître

Liste complète dans [Device Capabilities](/docs/developers/device-capabilities#ctap2-extensions).

### `credProtect`

Définit une politique de protection sur un credential, contrôlant s'il peut être découvert ou utilisé sans user verification.

```json
"extensions": { "credentialProtectionPolicy": "userVerificationRequired" }
```

Utile quand un credential ne doit jamais être utilisable par quelqu'un qui se contente de détenir l'appareil. Notez que cela change l'expérience : un PIN sera exigé à chaque fois.

### `hmac-secret` et WebAuthn PRF

`hmac-secret` permet à une relying party de dériver un secret symétrique stable depuis un credential. La même entrée produit toujours la même sortie pour ce credential, et le secret n'existe jamais hors de l'authentificateur.

L'application évidente est un **chiffrement de bout en bout adossé à une passkey** : dérivez une clé, chiffrez côté client, et les données deviennent illisibles sans l'appareil physique.

La Seedkeeper PRO prend en charge `hmac-secret`, et tout le parcours a été vérifié : les navigateurs fondés sur Chromium le projettent sur `prf`, et Bitwarden s'en sert pour dériver une clé de déchiffrement de coffre-fort, de sorte qu'un utilisateur déverrouille le coffre avec la passkey matérielle au lieu d'un mot de passe maître.

La prise en charge de `prf` reste inégale hors Chromium. Traitez-la comme une amélioration plutôt que comme une exigence : dérivez la clé quand l'extension est disponible, repliez-vous sur votre mécanisme existant sinon, et ne faites jamais de la passkey la seule voie vers les données à moins que l'utilisateur n'ait un second appareil enregistré.

### `minPinLength`

Permet à une relying party de lire la longueur minimale de PIN imposée, et à un administrateur de la relever via `authenticatorConfig`. La Seedkeeper PRO rapporte `setMinPINLength: true`.

Utile quand une politique exige plus que les 4 chiffres minimum. Le relèvement s'applique à l'appareil : prévoyez donc comment il est appliqué lors du provisionnement - voir [Python Library and CLI](/docs/developers/python-library-and-cli).

### `largeBlobs`

Stockage attaché à un credential, pour des données qui doivent voyager avec la clé plutôt qu'avec le compte. Pris en charge, avec la réserve que le stockage sur l'appareil est fini - voir les limites dans [Device Capabilities](/docs/developers/device-capabilities#storage-limits).

## Concevoir pour des credentials liés au matériel

Deux conséquences de conception qu'un monde de passkeys synchronisées permet d'ignorer.

**Plusieurs credentials par compte sont obligatoires, pas optionnels.** Une passkey matérielle ne peut pas être copiée : la redondance passe donc par un second enregistrement. Si votre modèle suppose un credential par utilisateur, les utilisateurs de clés matérielles n'ont aucune sauvegarde - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

**La suppression a deux faces.** Retirer un credential de l'appareil ne retire pas l'enregistrement que vous en conservez, et retirer votre enregistrement ne libère pas l'emplacement sur l'appareil. Exposez la gestion des credentials dans les paramètres de compte, avec des noms et des dates de dernière utilisation pour que les utilisateurs identifient quel appareil est lequel.

## Tester contre du matériel réel

Un authentificateur virtuel ne vous dira pas ce que donne une présentation NFC.

Ce qu'il vaut la peine d'éprouver contre un appareil physique : l'enregistrement en NFC sur iOS et sur Android, une tentative avec un mauvais PIN et l'erreur qui en résulte, un second credential sur le même compte, l'énumération des credentials via `credMgmt`, et le comportement quand la carte est retirée en cours d'opération.

C'est ce dernier point qui révèle le plus de bugs.

## FAQ

<details>
<summary>Quand un service doit-il demander une attestation ?</summary>

Uniquement quand la politique dépend de savoir quel matériel a été utilisé - imposer des credentials liés au matériel, prouver les modèles d'appareils, ou satisfaire une exigence réglementaire. Un service grand public devrait demander `none`.

</details>

<details>
<summary>Comment restreindre l'enregistrement à un matériel précis ?</summary>

Demandez une attestation, extrayez l'AAGUID des authenticator data, et comparez-le à une allowlist. Pour la Seedkeeper PRO, la valeur est `328dec20-698f-5d33-aed3-97daba53b1b0`.

</details>

<details>
<summary>Un AAGUID identifie-t-il un appareil individuel ?</summary>

Non. Il identifie une marque et un modèle. Identifier une unité précise exige l'enterprise attestation, implémentée mais actuellement désactivée sur la Seedkeeper PRO.

</details>

<details>
<summary>Puis-je utiliser une passkey pour dériver une clé de chiffrement ?</summary>

Oui, via `hmac-secret` au niveau CTAP2 et `prf` au niveau WebAuthn. La Seedkeeper PRO le prend en charge, vérifié de bout en bout dans les navigateurs fondés sur Chromium - Bitwarden emprunte cette voie pour déchiffrer un coffre-fort avec la passkey matérielle. La prise en charge hors Chromium est inégale : concevez-la comme une amélioration assortie d'un repli.

</details>

<details>
<summary>Comment imposer une longueur minimale de PIN ?</summary>

Via l'extension `minPinLength` et `authenticatorConfig`. La Seedkeeper PRO permet de relever le minimum au-delà des 4 chiffres par défaut, appliqué par appareil lors du provisionnement.

</details>

## Articles liés

- [Device Capabilities](/docs/developers/device-capabilities)
- [WebAuthn Quickstart](/docs/developers/webauthn-quickstart)
- [Python Library and CLI](/docs/developers/python-library-and-cli)
- [Comment configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id)
- [Sécurité et conformité pour les organisations](/docs/business/security-compliance-for-organizations)
