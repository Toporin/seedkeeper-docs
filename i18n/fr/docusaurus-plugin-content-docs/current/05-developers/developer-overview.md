---
title: "Aperçu pour les développeurs"
description: "Ce dont vous avez besoin dépend de ce que vous construisez. La plupart des intégrations n'exigent aucun code Seedkeeper - voici comment savoir où vous en êtes."
keywords: [développeur Seedkeeper, intégration FIDO2, intégration WebAuthn, SDK clé de sécurité matérielle, guide développeur passkey]
sidebar_position: 1
sidebar_label: "Aperçu pour les développeurs"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ai-je besoin d'un SDK pour prendre en charge la Seedkeeper PRO dans mon service ?", a: "Non. La Seedkeeper PRO est un authentificateur FIDO2 CTAP2.1 : implémenter WebAuthn de façon standard suffit. Le navigateur gère toute la communication avec l'appareil ; votre code ne le touche jamais directement."},
  {q: "Ai-je besoin d'un partenariat ou d'un accord avec Satochip ?", a: "Non. FIDO2 est un standard ouvert, sans redevance ni gardien. Tout service implémentant correctement WebAuthn fonctionne avec l'appareil sans aucune intervention de notre part."},
  {q: "Quand utiliserais-je les bibliothèques Seedkeeper ?", a: "Uniquement pour piloter l'appareil directement plutôt que pour s'authentifier auprès de lui : provisionner des appareils, définir des PIN, charger des identifiants OTP, scripter des déploiements, ou construire une application mobile qui dialogue avec l'appareil en NFC."},
  {q: "Le code source est-il disponible ?", a: "Oui, tout est publié sous AGPLv3 : firmware, applications mobiles et de bureau, et l'outillage Python. Voir Repositories pour la liste complète."},
]} />

<p class="doc-subtitle">Commencez ici pour savoir ce dont vous avez réellement besoin</p>

<div class="tldr">

La Seedkeeper PRO est un authentificateur FIDO2 CTAP2.1. Si vous construisez un service qui accepte les passkeys, vous n'avez besoin d'**aucun code spécifique à Seedkeeper** - implémentez WebAuthn et l'appareil fonctionne, exactement comme n'importe quel authentificateur certifié. Les bibliothèques Seedkeeper ne comptent que si vous pilotez l'appareil directement : provisionnement, outillage, ou application sur mesure.

</div>

## Dans quel cas êtes-vous ?

| Ce que vous construisez | Ce dont vous avez besoin |
|---|---|
| Un site ou un service qui accepte les passkeys | WebAuthn standard. Voir [WebAuthn Quickstart](/docs/developers/webauthn-quickstart) |
| Un déploiement en entreprise restreignant le matériel accepté | AAGUID et attestation. Voir [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide) |
| Le provisionnement d'appareils en volume, ou de l'outillage interne | [Python Library and CLI](/docs/developers/python-library-and-cli) |
| Une application mobile qui dialogue avec l'appareil en NFC | [Mobile SDKs](/docs/developers/mobile-sdks) |
| L'évaluation de l'adéquation du matériel à vos exigences | [Device Capabilities](/docs/developers/device-capabilities) |

## Pourquoi la plupart des intégrations n'ont besoin d'aucun SDK

Cela vaut la peine d'être dit clairement, car la documentation des fournisseurs laisse généralement entendre le contraire.

FIDO2 est un standard ouvert en deux moitiés. **WebAuthn** est une API navigateur : votre service appelle `navigator.credentials.create()` et `get()`, et le navigateur s'occupe du reste. **CTAP2** est le protocole entre le navigateur et l'authentificateur, et c'est l'affaire du navigateur, pas la vôtre.

Votre code ne touche jamais l'appareil. Il n'apprend jamais quel authentificateur a répondu, sauf s'il demande une attestation. Il n'y a aucune bibliothèque Seedkeeper à installer, aucun partenariat à signer, et rien qui cesserait de fonctionner si nous disparaissions demain.

C'est le résultat recherché d'un standard ouvert, et cela signifie que le chemin le plus rapide pour prendre en charge la Seedkeeper PRO est de prendre correctement en charge WebAuthn. Voir [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2) pour le contexte.

## Quand vous avez besoin de notre code

Trois cas, tous liés au pilotage de l'appareil plutôt qu'à l'authentification auprès de lui.

**Provisionnement et outillage.** Définir un PIN FIDO, charger des identifiants OTP, réinitialiser des applets, ou scripter tout cela sur de nombreux appareils. [`seedkeeper-manager`](/docs/developers/python-library-and-cli) est une bibliothèque Python et un CLI conçus précisément pour cela.

**Applications mobiles.** Dialoguer avec l'appareil en NFC depuis iOS ou Android exige une couche de transport. Nous maintenons des forks des SDK mobiles Yubico - voir [Mobile SDKs](/docs/developers/mobile-sdks).

**Implémentations de référence.** Les applications iOS et Flutter sont open source et montrent une intégration complète et fonctionnelle de bout en bout. Voir [Repositories](/docs/developers/repositories).

## Tout est sous AGPLv3

Firmware, applications, bibliothèques. Vous pouvez lire l'implémentation, vérifier ce qu'elle fait, et compiler depuis les sources.

Cela a une conséquence pratique pour les intégrateurs : si une affirmation de cette documentation compte dans votre évaluation, vous pouvez la vérifier dans le code plutôt que de nous croire sur parole.

## Où aller ensuite

- **Vous évaluez le matériel ?** [Device Capabilities](/docs/developers/device-capabilities) contient les métadonnées brutes : algorithmes, extensions, limites, transports.
- **Vous ajoutez la prise en charge des passkeys ?** [WebAuthn Quickstart](/docs/developers/webauthn-quickstart).
- **Vous cherchez un dépôt précis ?** [Repositories](/docs/developers/repositories).

## FAQ

<details>
<summary>Ai-je besoin d'un SDK pour prendre en charge la Seedkeeper PRO dans mon service ?</summary>

Non. La Seedkeeper PRO est un authentificateur FIDO2 CTAP2.1 : implémenter WebAuthn de façon standard suffit. Le navigateur gère toute la communication avec l'appareil ; votre code ne le touche jamais directement.

</details>

<details>
<summary>Ai-je besoin d'un partenariat ou d'un accord avec Satochip ?</summary>

Non. FIDO2 est un standard ouvert, sans redevance ni gardien. Tout service implémentant correctement WebAuthn fonctionne avec l'appareil sans aucune intervention de notre part.

</details>

<details>
<summary>Quand utiliserais-je les bibliothèques Seedkeeper ?</summary>

Uniquement pour piloter l'appareil directement plutôt que pour s'authentifier auprès de lui : provisionner des appareils, définir des PIN, charger des identifiants OTP, scripter des déploiements, ou construire une application mobile qui dialogue avec l'appareil en NFC.

</details>

<details>
<summary>Le code source est-il disponible ?</summary>

Oui, tout est publié sous AGPLv3 - firmware, applications mobiles et de bureau, et l'outillage Python. Voir [Repositories](/docs/developers/repositories) pour la liste complète.

</details>

## Articles liés

- [Device Capabilities](/docs/developers/device-capabilities)
- [WebAuthn Quickstart](/docs/developers/webauthn-quickstart)
- [Repositories](/docs/developers/repositories)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
