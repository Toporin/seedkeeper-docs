---
title: "Mobile SDKs"
description: "SDK iOS et Android pour dialoguer avec une Seedkeeper PRO en NFC, et les applications de référence qui les utilisent. Forks des SDK mobiles Yubico."
keywords: [SDK FIDO2 iOS, clé de sécurité NFC Android, fork yubikit, CTAP2 mobile, carte à puce NFC iOS, SDK mobile Seedkeeper]
sidebar_position: 6
sidebar_label: "Mobile SDKs"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ai-je besoin d'un SDK pour la connexion par passkey dans mon application mobile ?", a: "Non. iOS et Android exposent WebAuthn nativement et communiquent eux-mêmes avec l'appareil en NFC. Les SDK ne servent qu'aux applications qui gèrent l'appareil."},
  {q: "Ces SDK sont-ils liés à ceux de Yubico ?", a: "Ce sont des forks des Yubico Mobile SDKs, adaptés aux applets et aux transports de cet appareil. La familiarité avec les SDK Yubico se transpose directement."},
  {q: "Ai-je besoin de la certification Apple MFi pour développer une application iOS pour cet appareil ?", a: "Non. MFi couvre les accessoires se connectant en Lightning ou en Bluetooth. Cet appareil est uniquement NFC : il vous suffit de l'entitlement Core NFC tag reading et de vos identifiants d'application ISO 7816 déclarés dans Info.plist, tous deux gratuits et inclus dans le compte développeur standard."},
  {q: "Pourquoi ma session NFC échoue-t-elle en cours de route ?", a: "Presque toujours parce que la carte a bougé. Les sessions NFC se rompent à la perte du champ : les opérations doivent donc être courtes et les échecs traités comme une situation attendue plutôt que comme une exception."},
  {q: "Où se trouve l'antenne NFC sur un téléphone Android ?", a: "Cela varie selon le modèle : zone de l'appareil photo, centre, ou tiers inférieur. Les utilisateurs le savent rarement : afficher un schéma dans votre interface évite la plupart des demandes de support."},
  {q: "Existe-t-il une application d'exemple à lire ?", a: "Deux applications complètes, toutes deux sous AGPLv3 : Seedkeeper-Manager-iOS pour iOS natif, et Seedkeeper-flutter pour Android et le bureau."},
]} />

<p class="doc-subtitle">Dialoguer avec l'appareil depuis iOS et Android</p>

<div class="tldr">

Deux SDK prennent en charge le transport NFC et la couche CTAP2 sur mobile : [yubikit-ios](https://github.com/Toporin/yubikit-ios) et [yubikit-android](https://github.com/Toporin/yubikit-android), tous deux forks des SDK mobiles de Yubico. Vous en avez besoin pour une application qui gère l'appareil. Vous n'en avez pas besoin pour la connexion par passkey, que le système d'exploitation gère nativement.

</div>

## Quand vous en avez besoin

Uniquement pour **gérer** l'appareil : définir un PIN, lister ou supprimer des credentials, charger des secrets OTP, lire l'état de l'appareil.

**La connexion par passkey n'a besoin de rien de tout cela.** iOS et Android exposent WebAuthn nativement, et le système dialogue directement avec l'appareil en NFC. Votre application appelle l'API de la plateforme et le matériel fonctionne - voir [Utiliser vos passkeys sur plusieurs appareils](/docs/product-documentation/passkeys/using-passkeys-across-devices).

## Les SDK

| Plateforme | Dépôt |
|---|---|
| iOS | [Toporin/yubikit-ios](https://github.com/Toporin/yubikit-ios) |
| Android | [Toporin/yubikit-android](https://github.com/Toporin/yubikit-android) |

Les deux sont des forks des Yubico Mobile SDKs. Si vous avez travaillé avec eux, la surface d'API vous sera familière et l'essentiel de ce que vous savez se transpose directement.

Le fork existe pour traiter ce qui est propre à cet appareil : la sélection d'applet, les commandes spécifiques à Seedkeeper, et le fait que le transport soit NFC et carte à puce à contact plutôt qu'USB HID.

## Implémentations de référence

Les deux sont des applications complètes, non des échantillons, et elles apportent généralement une réponse plus rapide que la documentation des SDK.

**[Seedkeeper-Manager-iOS](https://github.com/Toporin/Seedkeeper-Manager-iOS)** - l'application de gestion iOS native. Montre le cycle de vie complet d'une session NFC, la gestion du PIN, l'énumération des credentials et la gestion de l'OTP contre l'appareil réel.

**[Seedkeeper-flutter](https://github.com/Toporin/Seedkeeper-flutter)** - l'application Flutter couvrant Android, Windows, macOS et Linux depuis une seule base de code. Utile pour voir comment les mêmes opérations sont structurées selon les transports.

Quand le comportement d'un SDK n'est pas clair, lisez comment ces applications procèdent. Elles sont sous AGPLv3 : rien n'est caché.

## Le NFC sur mobile : ce qui compte vraiment

Le protocole est la partie facile. C'est sur l'expérience utilisateur que les intégrations mobiles échouent.

**iOS exige une session explicite.** Votre application démarre une session NFC, le système affiche sa propre feuille, et l'utilisateur présente l'appareil. Il n'y a pas de lecture en arrière-plan. Les sessions expirent également : les opérations longues doivent donc être structurées en conséquence plutôt que de supposer une connexion stable.

**La position du lecteur Android varie énormément selon le combiné.** L'antenne peut se trouver près de l'appareil photo, au centre, ou dans le tiers inférieur. Les utilisateurs ignorent réellement où elle est sur leur propre téléphone. Un schéma dans votre interface supprime la plupart des demandes de support - le [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide) montre l'approche.

**Les sessions se rompent quand la carte bouge.** Une présentation qui dure assez longtemps pour une commande peut ne pas durer pour cinq. Concevez pour l'interruption : gardez les opérations courtes, rendez les états d'échec explicites, et ne laissez jamais l'appareil à moitié configuré quand une session tombe.

**Cartes et bagues se comportent différemment.** Une bague se place plus près de l'antenne mais a une bobine plus petite, et les utilisateurs la tiennent autrement. Testez les deux formats.

## Autorisations et capacités

**iOS** exige la capacité Near Field Communication Tag Reading, un entitlement délivré par Apple, et les identifiants d'application ISO 7816 déclarés dans `Info.plist`. Omettre ce dernier point produit un échec silencieux difficile à diagnostiquer : la session s'ouvre et ne voit jamais la carte.

Rien de tout cela ne relève du programme **MFi**. Parce que l'appareil est uniquement NFC, il sort entièrement de la licence d'accessoires d'Apple : aucune adhésion, aucune certification matérielle, aucune licence d'accessoire. C'est une différence notable avec une clé de sécurité Lightning ou Bluetooth, et cela signifie que l'entitlement ci-dessus constitue la totalité de vos formalités Apple. Voir [Device Capabilities](/docs/developers/device-capabilities#pas-de-programme-mfi-pour-ios).

**Android** exige la permission `NFC` et des filtres d'intention appropriés. Le foreground dispatch est généralement le bon modèle pour une application de gestion, afin que le système ne remette pas le tag à une autre application en cours d'opération.

## FAQ

<details>
<summary>Ai-je besoin d'un SDK pour la connexion par passkey dans mon application mobile ?</summary>

Non. iOS et Android exposent WebAuthn nativement et communiquent eux-mêmes avec l'appareil en NFC. Les SDK ne servent qu'aux applications qui gèrent l'appareil.

</details>

<details>
<summary>Ces SDK sont-ils liés à ceux de Yubico ?</summary>

Ce sont des forks des Yubico Mobile SDKs, adaptés aux applets et aux transports de cet appareil. La familiarité avec les SDK Yubico se transpose directement.

</details>

<details>
<summary>Ai-je besoin de la certification Apple MFi pour développer une application iOS pour cet appareil ?</summary>

Non. MFi couvre les accessoires se connectant en Lightning ou en Bluetooth. Cet appareil est uniquement NFC : il vous suffit de l'entitlement Core NFC tag reading et de vos identifiants d'application ISO 7816 déclarés dans `Info.plist` - tous deux gratuits et inclus dans le compte développeur standard.

</details>

<details>
<summary>Pourquoi ma session NFC échoue-t-elle en cours de route ?</summary>

Presque toujours parce que la carte a bougé. Les sessions NFC se rompent à la perte du champ : les opérations doivent donc être courtes et les échecs traités comme une situation attendue plutôt que comme une exception.

</details>

<details>
<summary>Où se trouve l'antenne NFC sur un téléphone Android ?</summary>

Cela varie selon le modèle - zone de l'appareil photo, centre, ou tiers inférieur. Les utilisateurs le savent rarement : afficher un schéma dans votre interface évite la plupart des demandes de support.

</details>

<details>
<summary>Existe-t-il une application d'exemple à lire ?</summary>

Deux applications complètes, toutes deux sous AGPLv3 : Seedkeeper-Manager-iOS pour iOS natif, et Seedkeeper-flutter pour Android et le bureau.

</details>

## Articles liés

- [Repositories](/docs/developers/repositories)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Python Library and CLI](/docs/developers/python-library-and-cli)
- [Utiliser vos passkeys sur plusieurs appareils](/docs/product-documentation/passkeys/using-passkeys-across-devices)
