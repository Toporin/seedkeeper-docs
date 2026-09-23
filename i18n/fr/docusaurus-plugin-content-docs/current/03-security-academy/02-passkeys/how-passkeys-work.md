---
title: "Comment fonctionnent les passkeys"
description: "Le déroulement réel de l'enregistrement et de la connexion, étape par étape : paires de clés, défis, signatures, et la vérification de domaine."
keywords: [fonctionnement passkey, enregistrement passkey, authentification passkey, flux WebAuthn, discoverable credentials, clés résidentes, AAGUID]
sidebar_position: 2
sidebar_label: "Comment fonctionnent les passkeys"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Si la clé privée ne sort jamais, comment une passkey peut-elle fonctionner sur deux appareils ?", a: "Elle ne le peut pas, du moins pas la même. Chaque appareil détient sa propre paire de clés : utiliser une seconde Seedkeeper PRO implique d'enregistrer une passkey supplémentaire auprès du service. La plupart des services en acceptent plusieurs."},
  {q: "Quelqu'un pourrait-il intercepter la signature et la réutiliser ?", a: "Non. Le défi est aléatoire et à usage unique : une signature capturée répond à une question qui ne sera plus jamais posée."},
  {q: "Mon PIN FIDO est-il transmis au service ?", a: "Jamais. Il est vérifié localement par le secure element et ne va pas plus loin. Le service apprend seulement que la vérification de l'utilisateur a réussi, pas comment."},
  {q: "Qu'est-ce qui empêche un site de demander une passkey qu'il n'a pas créée ?", a: "Le lien au domaine. Un identifiant ne répond qu'à l'identifiant de relying party avec lequel il a été enregistré, et le navigateur impose cette correspondance avant que la demande n'atteigne votre appareil."},
  {q: "Combien de passkeys une Seedkeeper PRO peut-elle contenir ?", a: "Jusqu'à 90 discoverable credentials. En pratique, cela couvre largement tous les services qu'une personne ou une équipe protégera de façon réaliste avec une passkey matérielle."},
  {q: "Le service sait-il quel appareil j'ai utilisé ?", a: "Uniquement s'il demande une attestation et que l'authentificateur la fournit. Sans cela, le service voit une clé publique et rien du matériel qui se trouve derrière."},
]} />

<p class="doc-subtitle">Ce qui se passe entre le geste et la connexion</p>

<div class="tldr">

Une [passkey](/docs/glossary/passkey) fonctionne en deux phases. À l'enregistrement, votre authentificateur génère une paire de clés neuve pour ce seul service et n'envoie que la clé publique. À chaque connexion, le service émet un défi aléatoire, votre authentificateur le signe avec la clé privée, et le service vérifie la signature. La clé privée ne bouge jamais, et l'authentificateur refuse de signer pour tout domaine autre que celui pour lequel l'identifiant a été créé.

</div>

## Les deux phases

Tout ce que fait une passkey relève de l'un de ces deux moments : **l'enregistrement**, qui a lieu une fois par service, et **l'authentification**, qui a lieu à chaque connexion.

La distinction compte parce que les garanties de sécurité viennent d'endroits différents. C'est à l'enregistrement que l'identifiant est lié à un domaine précis. C'est à l'authentification que ce lien est vérifié. Supprimez l'un ou l'autre et vous retombez sur quelque chose qui ressemble à un mot de passe.

[Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey) présente ces deux phases sous forme de schémas. Cet article détaille ce que fait réellement chaque étape.

## Phase 1 : l'enregistrement

Quand vous ajoutez une passkey à un compte, cinq choses se produisent dans l'ordre.

**1. Le service émet une demande de création.** Il envoie à votre navigateur un ensemble de paramètres : son propre identifiant de domaine, un défi aléatoire, la référence de votre compte utilisateur, et les algorithmes qu'il accepte. Le navigateur expose cela par l'appel WebAuthn `navigator.credentials.create()`.

**2. Votre authentificateur demande votre consentement.** Rien n'est généré tant que vous n'avez pas prouvé votre présence et votre autorisation. Sur une Seedkeeper PRO, cela signifie saisir votre PIN FIDO et présenter physiquement l'appareil. Cette étape est délibérée : elle empêche une page de créer silencieusement des identifiants en arrière-plan.

**3. Une paire de clés est générée sur-le-champ.** Votre authentificateur crée une clé privée et une clé publique entièrement neuves, propres à ce seul service. Elles ne sont jamais dérivées de quoi que ce soit d'utilisé ailleurs, et c'est pourquoi deux comptes ne peuvent jamais être rapprochés par leurs passkeys.

**4. La clé privée est inscrite dans le matériel.** Sur une Seedkeeper PRO, elle rejoint le [secure element](/docs/glossary/secure-element), où elle est créée et où elle reste. Il n'existe aucune fonction d'export ni aucune API pour la relire - ni pour vous, ni pour l'application, ni pour un attaquant qui aurait l'appareil en main.

**5. Seule la clé publique sort.** L'authentificateur renvoie la clé publique, un identifiant de credential et une déclaration signée le concernant. Le service enregistre le tout sur votre compte. Si cette base de données fuite demain, ce qui fuite est une clé publique, sans valeur en elle-même.

## Phase 2 : l'authentification

La connexion inverse le flux.

**1. Le service envoie un défi.** Un nouveau bloc de données aléatoires, différent à chaque fois. C'est ce qui rend inutile la capture d'une tentative de connexion : la signature d'hier ne répond pas au défi d'aujourd'hui.

**2. Le navigateur vérifie le domaine.** Avant que quoi que ce soit n'atteigne votre authentificateur, le navigateur confirme que la page qui demande la signature est bien servie depuis le domaine auquel appartient l'identifiant. Cette vérification est faite par le navigateur lui-même, et non par vous en regardant la barre d'adresse.

**3. Votre authentificateur vous vérifie.** Saisie du PIN, plus la présence physique de l'appareil. Ce n'est qu'alors qu'il débloque la clé privée pour l'utiliser.

**4. Le défi est signé.** L'authentificateur signe le défi accompagné de l'identifiant de domaine et de ses propres données, puis renvoie la signature. La clé privée est utilisée, jamais révélée.

**5. Le service vérifie la signature.** À l'aide de la clé publique enregistrée lors de l'enregistrement. Si le calcul est bon, la signature ne peut provenir que de la clé privée correspondante, laquelle existe en un seul endroit au monde. Vous êtes connecté.

## La vérification de domaine, c'est tout le secret

C'est la partie qu'il vaut la peine de bien comprendre, car c'est là que les passkeys surpassent toutes les méthodes d'authentification antérieures.

À l'enregistrement, l'identifiant est lié définitivement à un **identifiant de relying party** - en pratique, le domaine du service. Cet identifiant est inscrit dans le credential et ne peut plus être modifié.

À l'authentification, le navigateur ne proposera qu'un identifiant dont l'identifiant correspond au domaine actuellement affiché dans la barre d'adresse. Un domaine sosie, aussi convaincante que soit la page, ne produit aucune correspondance. Votre authentificateur n'est même jamais sollicité. Il n'y a ni boîte de dialogue, ni avertissement, ni bouton « continuer quand même », parce qu'il n'y a rien à décider.

Comparez avec un mot de passe, qui se laisse volontiers taper dans n'importe quel champ de texte. L'article [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked#phishing--e-mails-et-faux-sites-web) contient une fausse page Microsoft que vous pouvez essayer de repérer - la preuve que l'œil humain est le mauvais outil pour cette tâche.

## Discoverable et non-discoverable credentials

Toutes les passkeys ne sont pas stockées de la même façon, et la différence se voit dans la manière dont vous vous connectez.

- **Les discoverable credentials** (aussi appelés clés résidentes) sont stockés intégralement sur l'authentificateur, y compris le compte auquel ils appartiennent. L'appareil peut les lister sur demande. C'est ce qui rend possible la connexion sans identifiant : vous présentez l'appareil, et le service apprend qui vous êtes à partir du credential lui-même.
- **Les non-discoverable credentials** ne stockent rien sur l'appareil. La clé privée est encapsulée dans l'identifiant de credential détenu par le service, et ne peut être reconstituée que par l'authentificateur qui l'a créée. Vous devez d'abord vous identifier, afin que le service sache quel credential demander.

La Seedkeeper PRO stocke des discoverable credentials, ce qui explique que vous puissiez les énumérer depuis la Seedkeeper PRO App - voir [Gérer vos passkeys](/docs/product-documentation/passkeys/managing-passkeys). Cela signifie aussi que chacun occupe un emplacement sur l'appareil, et la Seedkeeper PRO en contient **jusqu'à 90** - bien plus que la poignée de services que la plupart des gens protégeront ainsi. Les non-discoverable credentials, à l'inverse, ne consomment aucun stockage, puisque rien à leur sujet n'est conservé sur l'appareil.

## L'attestation : prouver ce qu'est l'authentificateur

À l'enregistrement, un authentificateur peut éventuellement joindre une déclaration signée sur sa propre marque et son modèle, identifiés par une valeur appelée **AAGUID**. Cela permet à une organisation de vérifier qu'une passkey a été créée sur du matériel approuvé plutôt que dans un coffre-fort logiciel.

La plupart des services grand public ignorent complètement ce mécanisme. Les déploiements en entreprise, souvent non : un administrateur peut exiger l'attestation et n'autoriser que certains AAGUID, ce qui permet d'imposer une politique exclusivement matérielle. L'AAGUID de la Seedkeeper PRO est `328dec20-698f-5d33-aed3-97daba53b1b0` - voir [Configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id) pour la mise en pratique, et [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide) si vous implémentez la vérification vous-même.

## Deux standards, deux rôles

Les mécanismes décrits ci-dessus se répartissent entre deux spécifications qui fonctionnent en binôme :

- **WebAuthn** gère la conversation entre le site web et le navigateur - les appels `create()` et `get()`, ainsi que la vérification de domaine.
- **CTAP2** gère la conversation entre le navigateur et l'authentificateur - en NFC, USB ou Bluetooth.

Ensemble, ils forment [FIDO2](/docs/glossary/fido2). Aucun des deux n'est propriétaire, et c'est pourquoi une passkey Seedkeeper PRO fonctionne sur n'importe quel service conforme sans l'autorisation de qui que ce soit. Voir [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2).

## FAQ

<details>
<summary>Si la clé privée ne sort jamais, comment une passkey peut-elle fonctionner sur deux appareils ?</summary>

Elle ne le peut pas - du moins pas la même. Chaque appareil détient sa propre paire de clés : utiliser une seconde Seedkeeper PRO implique d'enregistrer une passkey supplémentaire auprès du service. La plupart des services en acceptent plusieurs. Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

</details>

<details>
<summary>Quelqu'un pourrait-il intercepter la signature et la réutiliser ?</summary>

Non. Le défi est aléatoire et à usage unique : une signature capturée répond à une question qui ne sera plus jamais posée.

</details>

<details>
<summary>Mon PIN FIDO est-il transmis au service ?</summary>

Jamais. Il est vérifié localement par le secure element et ne va pas plus loin. Le service apprend seulement que la vérification de l'utilisateur a réussi, pas comment.

</details>

<details>
<summary>Qu'est-ce qui empêche un site de demander une passkey qu'il n'a pas créée ?</summary>

Le lien au domaine. Un identifiant ne répond qu'à l'identifiant de relying party avec lequel il a été enregistré, et le navigateur impose cette correspondance avant que la demande n'atteigne votre appareil. Voir [La vérification de domaine, c'est tout le secret](#la-vérification-de-domaine-cest-tout-le-secret) ci-dessus.

</details>

<details>
<summary>Combien de passkeys une Seedkeeper PRO peut-elle contenir ?</summary>

Jusqu'à 90 discoverable credentials. En pratique, cela couvre largement tous les services qu'une personne ou une équipe protégera de façon réaliste avec une passkey matérielle. Voir [Discoverable et non-discoverable credentials](#discoverable-et-non-discoverable-credentials) ci-dessus.

</details>

<details>
<summary>Le service sait-il quel appareil j'ai utilisé ?</summary>

Uniquement s'il demande une attestation et que l'authentificateur la fournit. Sans cela, le service voit une clé publique et rien du matériel qui se trouve derrière.

</details>

## Articles liés

- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
- [Qu'est-ce que WebAuthn ?](/docs/security-academy/passkeys/what-is-webauthn)
- [Gérer vos passkeys](/docs/product-documentation/passkeys/managing-passkeys)
- [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained)
- [Device Capabilities](/docs/developers/device-capabilities)
