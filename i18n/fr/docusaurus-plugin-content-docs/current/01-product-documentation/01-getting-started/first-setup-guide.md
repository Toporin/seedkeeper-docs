---
title: "Guide de première configuration"
description: "Configurez votre Seedkeeper Classic ou PRO en quelques minutes : installez l'application, scannez la carte ou la bague en NFC, et choisissez votre PIN."
keywords: [configuration Seedkeeper, première utilisation, scanner carte NFC, PIN Seedkeeper, installer Seedkeeper App, Satochip-Utils]
sidebar_position: 2
sidebar_label: "Guide de première configuration"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Dois-je installer deux applications ?", a: "Uniquement si vous utilisez à la fois la gestion des mots de passe et les passkeys ou l'OTP. Mots de passe seuls : la Seedkeeper App, ou la Satochip-Utils App sur ordinateur. Passkeys ou OTP en plus : ajoutez la Seedkeeper PRO App."},
  {q: "J'ai un appareil Classic et je viens d'acheter un appareil PRO. Me faut-il une nouvelle application de gestion des mots de passe ?", a: "Non. La même Seedkeeper App, ou la Satochip-Utils App sur ordinateur, gère les mots de passe de vos appareils Classic et PRO. Vous n'ajoutez la Seedkeeper PRO App que pour les nouvelles fonctions de passkeys et d'OTP."},
  {q: "Où se trouve exactement le lecteur NFC sur mon téléphone ?", a: "Sur iPhone, il se situe en haut de l'appareil, au dos. Sur Android, cela varie selon le modèle : consultez la documentation de votre téléphone."},
  {q: "Que se passe-t-il si j'oublie mon PIN ?", a: "Après 4 tentatives incorrectes, l'appareil se verrouille. Vous pouvez le réinitialiser depuis l'application, mais cela efface tous les secrets et rétablit l'état d'usine. Assurez-vous d'avoir une sauvegarde en place."},
  {q: "Seedkeeper stocke-t-il mes données dans le cloud ?", a: "Non. Seedkeeper ne dépend d'aucun cloud et ne collecte aucune donnée : tout reste sur votre appareil, qui communique directement avec l'application en NFC ou via un lecteur à contact."},
]} />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p class="doc-subtitle">Votre Seedkeeper opérationnelle en 5 minutes</p>

<div class="tldr">
Configurer votre Seedkeeper prend environ une minute sur mobile.<br />
Téléchargez l'application, touchez Click & Scan, approchez l'appareil de votre téléphone, et choisissez un PIN.<br />
Les possesseurs d'une PRO peuvent ensuite ajouter les passkeys et l'OTP, et chacun peut aussi gérer sa Seedkeeper depuis un ordinateur.
</div>

## Télécharger l'application mobile

1. Téléchargez la Seedkeeper App pour [iOS ou Android](/docs/product-documentation/getting-started/download#seedkeeper-app)

<div class="download-row">

<a href="https://apps.apple.com/us/app/seedkeeper/id6502836060"><img src="/img/badges/app-store-badge.svg" alt="Télécharger dans l'App Store" className="store-badge" /></a>
<a href="https://play.google.com/store/apps/details?id=org.satochip.seedkeeper"><img src="/img/badges/google-play-badge.png" alt="Disponible sur Google Play" className="store-badge" /></a>

</div>

## Scanner votre Seedkeeper

2. Ouvrez l'application
3. Touchez **Click & Scan**
4. Approchez votre carte ou votre bague Seedkeeper du dos de votre téléphone
5. Maintenez-la en place jusqu'à ce que l'application confirme la connexion

:::note[Trouver le lecteur NFC de votre téléphone]

<Tabs>
  <TabItem value="iphone" label="iPhone">

Le lecteur NFC se situe en haut du téléphone, au dos.

<img src="/img/diagrams/iphone_nfc-clear.png" alt="Emplacement du lecteur NFC sur un iPhone" className="doc-diagram" />

  </TabItem>
  <TabItem value="android" label="Android">

La position du lecteur NFC varie selon le téléphone. Quelques exemples courants :

<img src="/img/diagrams/android-nfc-clear.png" alt="Emplacement du lecteur NFC sur un Android" className="doc-diagram" />

Si aucun de ces cas ne correspond, consultez la documentation de votre téléphone pour connaître l'emplacement exact. Si l'appareil n'est toujours pas détecté, voir [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues).

Pour activer le NFC sur la plupart des Android récents : ouvrez **Paramètres**, touchez **Appareils connectés** (ou **Connexions**), sélectionnez **Préférences de connexion**, et activez **NFC**. Vous pouvez aussi balayer l'écran vers le bas pour ouvrir le panneau de réglages rapides et toucher la vignette **NFC**.

  </TabItem>
</Tabs>

:::

## Définir votre code PIN

<div class="step-layout">

<div class="step-text">

La première fois que vous connectez un appareil neuf, l'application vous propose de l'initialiser :

6. Choisissez un code PIN (4 à 16 caractères)
7. Confirmez le PIN

**Votre gestionnaire de mots de passe est prêt.**

Rendez-vous dans [Gestionnaire de mots de passe](/docs/category/password-manager) pour commencer à ajouter des identifiants et des notes sécurisées, ou configurez d'abord votre [sauvegarde](/docs/product-documentation/getting-started/backup-and-recovery) - recommandé avant d'enregistrer de vrais identifiants.

:::warning[Conservez votre PIN en lieu sûr]
Après 4 tentatives incorrectes, votre appareil se verrouille.<br />
Ce compteur ne concerne que le PIN du gestionnaire de mots de passe. Le PIN FIDO qui protège vos passkeys est distinct, numérique, et autorise 8 tentatives - voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).<br />
Vous pouvez le réinitialiser depuis l'application, mais la réinitialisation efface tous les secrets et rétablit l'état d'origine de l'appareil - elle ne récupère pas vos données.<br /><br />
Voir [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper) pour la procédure complète. Assurez-vous que votre [sauvegarde](/docs/product-documentation/getting-started/backup-and-recovery) est en place avant que cela n'arrive.
:::

</div>

<div class="step-image">
<img src="/img/gifs/setup-first-pin-iphone-mockup.gif" alt="Définition du premier PIN dans la Seedkeeper App" className="mockup-image" />
</div>

</div>

## Gérer les passkeys et l'OTP

Vous possédez une carte ou une bague Seedkeeper PRO et souhaitez gérer aussi les passkeys et les codes OTP ?

### Télécharger l'application

1. Téléchargez la Seedkeeper PRO App

<div class="download-row">

<a href="https://apps.apple.com/us/app/seedkeeper-authenticator/id6791186520"><img src="/img/badges/app-store-badge.svg" alt="Télécharger dans l'App Store" className="store-badge" /></a>
<a href="https://play.google.com/store/apps/details?id=io.seedkeeper.pro"><img src="/img/badges/google-play-badge.png" alt="Disponible sur Google Play" className="store-badge" /></a>

</div>

2. Suivez les guides dédiés :
   - [Passkeys](/docs/category/passkeys) - créer, importer et gérer vos passkeys
   - [Authentificateur OTP](/docs/category/otp-authenticator) - ajouter et gérer vos codes OTP/TOTP

### Définir votre code PIN

Les fonctions de passkeys de la Seedkeeper PRO utilisent leur propre PIN, distinct de celui du gestionnaire de mots de passe - numérique plutôt qu'alphanumérique, et doté de son propre compteur de tentatives.<br />
Voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour la procédure complète.

## Tout gérer depuis votre ordinateur

Vous préférez travailler depuis un ordinateur ? La même logique s'applique, avec les applications de bureau.

1. Téléchargez l'application de bureau

L'équivalent de la Seedkeeper App sur ordinateur. Compatible avec les appareils Seedkeeper Classic et Seedkeeper PRO.

<div class="download-row">

<a href="https://github.com/Toporin/Satochip-Utils/releases/download/v0.3.0-beta/Satochip-Utils-win-amd64-0.3.0-beta-signed.exe" className="download-button"><img src="/img/icons/windows-generic.svg" alt="" /> Windows</a>
<a href="https://github.com/Toporin/Satochip-Utils/releases/download/v0.3.0-beta/Satochip-Utils-macos-arm64-0.3.0-signed.dmg" className="download-button"><img src="/img/icons/mac-generic.svg" alt="" /> macOS</a>
<a href="https://github.com/Toporin/Satochip-Utils/releases/download/v0.3.0-beta/Satochip-Utils-linux-x86_64-0.3.0-beta" className="download-button"><img src="/img/icons/linux-generic.svg" alt="" /> Linux</a>

</div>

2. Insérez votre carte dans un lecteur de cartes à puce, ou posez votre bague sur un lecteur NFC
3. Lancez l'application
4. Définissez un code PIN
5. Gérez vos secrets

Pour les fonctions PRO, téléchargez également la Seedkeeper PRO App et suivez les guides [Passkeys](/docs/category/passkeys) et [Authentificateur OTP](/docs/category/otp-authenticator) mentionnés plus haut.

<div class="download-row">

<a href="https://github.com/Toporin/Seedkeeper-flutter/releases/download/v4.7.1-sk2/seedkeeper-pro-windows.msi" className="download-button"><img src="/img/icons/windows-generic.svg" alt="" /> Windows</a>
<a href="https://github.com/Toporin/Seedkeeper-flutter/releases/download/v4.7.1-sk2/seedkeeper-pro-macos.dmg" className="download-button"><img src="/img/icons/mac-generic.svg" alt="" /> macOS</a>
<a href="https://github.com/Toporin/Seedkeeper-flutter/releases/download/v4.7.1-sk2/seedkeeper-pro-linux.tar.gz" className="download-button"><img src="/img/icons/linux-generic.svg" alt="" /> Linux</a>

</div>

## FAQ

<details>
<summary>Dois-je installer deux applications ?</summary>

Uniquement si vous utilisez à la fois la gestion des mots de passe et les passkeys ou l'OTP. Mots de passe seuls : la Seedkeeper App, ou la Satochip-Utils App sur ordinateur. Passkeys ou OTP en plus : ajoutez la Seedkeeper PRO App. Voir [Gérer les passkeys et l'OTP](#gérer-les-passkeys-et-lotp) ci-dessus.

</details>

<details>
<summary>J'ai un appareil Classic et je viens d'acheter un appareil PRO. Me faut-il une nouvelle application de gestion des mots de passe ?</summary>

Non. La même Seedkeeper App, ou la Satochip-Utils App sur ordinateur, gère les mots de passe de vos appareils Classic et PRO - vous n'ajoutez la Seedkeeper PRO App que pour les nouvelles fonctions de passkeys et d'OTP.

</details>

<details>
<summary>Où se trouve exactement le lecteur NFC sur mon téléphone ?</summary>

Sur iPhone, il se situe en haut de l'appareil - voir le schéma ci-dessus. Sur Android, cela varie selon le modèle ; consultez la documentation de votre téléphone. Les deux cas sont traités dans [Scanner votre Seedkeeper](#scanner-votre-seedkeeper) ci-dessus.

</details>

<details>
<summary>Que se passe-t-il si j'oublie mon PIN ?</summary>

Après 4 tentatives incorrectes, l'appareil se verrouille. Vous pouvez le réinitialiser depuis l'application, mais cela efface tous les secrets et rétablit l'état d'usine. Voir [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper) pour la procédure complète, et assurez-vous d'avoir une [sauvegarde](/docs/product-documentation/getting-started/backup-and-recovery) en place.

</details>

<details>
<summary>Seedkeeper stocke-t-il mes données dans le cloud ?</summary>

Non. Seedkeeper ne dépend d'aucun cloud et ne collecte aucune donnée - tout reste sur votre appareil, qui communique directement avec l'application en NFC ou via un lecteur à contact.

</details>

## Articles liés

- [Téléchargements](/docs/product-documentation/getting-started/download)
- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
- [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
- [Réglages de l'appareil](/docs/product-documentation/getting-started/device-settings)
- [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues)
