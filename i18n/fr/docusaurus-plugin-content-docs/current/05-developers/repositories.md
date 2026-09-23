---
title: "Repositories"
description: "Tous les dépôts Seedkeeper, ce qu'ils contiennent, et lequel consulter pour un problème donné. Le tout sous AGPLv3."
keywords: [github Seedkeeper, clé de sécurité open source, firmware AGPLv3, seedkeeper-manager, fork yubikit, code source Seedkeeper]
sidebar_position: 7
sidebar_label: "Repositories"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Seedkeeper est-il open source ?", a: "Oui, tout est publié sous AGPLv3 : les applications, les SDK mobiles et l'outillage Python."},
  {q: "De quel dépôt ai-je besoin pour accepter les passkeys sur mon site ?", a: "D'aucun. WebAuthn standard suffit, et votre code ne communique jamais directement avec l'appareil."},
  {q: "Les SDK mobiles sont-ils des forks de ceux de Yubico ?", a: "Oui, adaptés aux applets et aux transports de cet appareil. L'expérience des Yubico Mobile SDKs se transpose directement."},
  {q: "Puis-je forker du code Seedkeeper pour un produit commercial ?", a: "L'AGPL le permet, à condition de publier vos modifications sous la même licence, y compris lorsque l'œuvre dérivée est proposée comme service en réseau. Faites-vous conseiller si votre cas n'est pas clair."},
  {q: "Comment vérifier une affirmation de cette documentation ?", a: "Lisez le code source, ou lisez authenticatorGetInfo depuis un appareil que vous détenez. Les deux font autorité d'une façon qu'une documentation n'a pas."},
]} />

<p class="doc-subtitle">Tout est public - voici où regarder</p>

<div class="tldr">

Applications, SDK et outillage sont publiés sur GitHub sous **AGPLv3**. Cette page associe chaque dépôt au problème qu'il résout, pour que vous alliez directement à celui dont vous avez besoin plutôt que de parcourir une organisation.

</div>

## Applications

Des applications complètes et en production. Généralement le moyen le plus rapide de comprendre comment quelque chose est fait, car elles montrent un usage réel plutôt qu'un extrait isolé.

### [Seedkeeper-Manager-iOS](https://github.com/Toporin/Seedkeeper-Manager-iOS)

L'application de gestion iOS native pour Seedkeeper PRO.

**À lire pour :** le cycle de vie d'une session NFC sur iOS, les parcours de saisie du PIN, l'énumération des credentials, la gestion de l'OTP, et la façon dont les entitlements Apple et les déclarations `Info.plist` sont configurés.

### [Seedkeeper-flutter](https://github.com/Toporin/Seedkeeper-flutter)

L'application Flutter couvrant Android, Windows, macOS et Linux depuis une seule base de code.

**À lire pour :** la structure multiplateforme, la façon dont les mêmes opérations s'expriment en NFC et via un lecteur à contact, et la gestion des cartes à puce sur bureau.

## Outillage

### [seedkeeper-manager](https://github.com/Toporin/seedkeeper-manager)

Bibliothèque Python et outil en ligne de commande pour configurer les applets FIDO2 et OTP.

**À lire pour :** le provisionnement, l'automatisation, la gestion scriptée des PIN et des credentials, et la lecture d'`authenticatorGetInfo` depuis un appareil que vous détenez. Contexte complet dans [Python Library and CLI](/docs/developers/python-library-and-cli).

## SDK mobiles

Forks des Yubico Mobile SDKs, adaptés aux applets et aux transports de cet appareil.

### [yubikit-ios](https://github.com/Toporin/yubikit-ios)

SDK iOS : transport NFC, gestion de la connexion carte à puce, couche CTAP2.

### [yubikit-android](https://github.com/Toporin/yubikit-android)

SDK Android, même périmètre.

Les deux sont traités dans [Mobile SDKs](/docs/developers/mobile-sdks). Si vous avez utilisé les SDK Yubico, l'API vous sera familière.

## Lequel me faut-il ?

| Problème | Dépôt |
|---|---|
| Accepter les passkeys sur mon site | **Aucun** - voir [WebAuthn Quickstart](/docs/developers/webauthn-quickstart) |
| Provisionner des appareils avant distribution | `seedkeeper-manager` |
| Scripter la configuration des PIN ou des credentials | `seedkeeper-manager` |
| Développer une application iOS qui gère l'appareil | `yubikit-ios` + `Seedkeeper-Manager-iOS` |
| Développer une application Android qui gère l'appareil | `yubikit-android` + `Seedkeeper-flutter` |
| Couvrir le bureau en plus du mobile | `Seedkeeper-flutter` |
| Vérifier une affirmation de capacité | N'importe lequel - tout est lisible |

## À propos de la licence

Tout est sous **AGPLv3**. Deux conséquences qu'il vaut la peine de comprendre avant de construire dessus.

**Vous pouvez tout lire et tout vérifier.** Toute affirmation de cette documentation - les extensions prises en charge, les limites de stockage, ce qui se passe lors d'une réinitialisation - peut être contrôlée dans le code source plutôt que crue sur parole. C'est tout l'argument de la sécurité open source, et il ne tient que si le code est réellement là.

**L'AGPL est un copyleft, y compris en réseau.** Si vous distribuez une œuvre dérivée, ou la mettez à disposition comme service en réseau, l'AGPL vous impose de publier vos modifications sous la même licence. Tenez-en compte avant de forker pour un produit commercial, et faites-vous conseiller si votre situation n'est pas évidente.

Utiliser l'appareil, ou s'y intégrer via WebAuthn standard, n'entraîne aucune obligation de licence. WebAuthn est un standard, pas notre code.

## Signaler un problème de sécurité

Ouvrez une issue pour un bug. Pour une vulnérabilité de sécurité, utilisez le canal de signalement privé du dépôt plutôt qu'une issue publique, afin qu'un correctif puisse être publié avant les détails.

## FAQ

<details>
<summary>Seedkeeper est-il open source ?</summary>

Oui, tout est publié sous AGPLv3 - les applications, les SDK mobiles et l'outillage Python.

</details>

<details>
<summary>De quel dépôt ai-je besoin pour accepter les passkeys sur mon site ?</summary>

D'aucun. WebAuthn standard suffit, et votre code ne communique jamais directement avec l'appareil.

</details>

<details>
<summary>Les SDK mobiles sont-ils des forks de ceux de Yubico ?</summary>

Oui, adaptés aux applets et aux transports de cet appareil. L'expérience des Yubico Mobile SDKs se transpose directement.

</details>

<details>
<summary>Puis-je forker du code Seedkeeper pour un produit commercial ?</summary>

L'AGPL le permet, à condition de publier vos modifications sous la même licence - y compris lorsque l'œuvre dérivée est proposée comme service en réseau. Faites-vous conseiller si votre cas n'est pas clair.

</details>

<details>
<summary>Comment vérifier une affirmation de cette documentation ?</summary>

Lisez le code source, ou lisez `authenticatorGetInfo` depuis un appareil que vous détenez. Les deux font autorité d'une façon qu'une documentation n'a pas.

</details>

## Articles liés

- [Aperçu pour les développeurs](/docs/developers/developer-overview)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Python Library and CLI](/docs/developers/python-library-and-cli)
- [Mobile SDKs](/docs/developers/mobile-sdks)
