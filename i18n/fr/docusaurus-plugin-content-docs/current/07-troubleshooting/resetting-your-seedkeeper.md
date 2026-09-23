---
title: "Réinitialiser votre Seedkeeper"
description: "Trois applets, trois réinitialisations indépendantes. Comment remettre à zéro le gestionnaire, les passkeys FIDO et les comptes OTP - et ce que chacune détruit."
keywords: [réinitialiser Seedkeeper, remise à zéro clé de sécurité, PIN verrouillé, reset applet FIDO, reset comptes 2FA, PIN oublié, effacer clé de sécurité]
sidebar_position: 2
sidebar_label: "Réinitialiser votre Seedkeeper"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "La réinitialisation récupère-t-elle mon PIN oublié ?", a: "Non. Une réinitialisation ne récupère rien : elle ramène l'applet à son état d'usine. Un PIN ne peut être ni récupéré ni contourné, par personne, et c'est précisément cette propriété qui rend l'appareil sûr."},
  {q: "Réinitialiser un applet efface-t-il les autres ?", a: "Non. Les applets gestionnaire de mots de passe, FIDO et OTP sont indépendants, chacun avec son propre PIN et ses propres données. En réinitialiser un laisse les deux autres intacts."},
  {q: "Puis-je récupérer mes mots de passe après une réinitialisation ?", a: "Uniquement depuis un équipement secondaire. Sans lui, les secrets de l'appareil réinitialisé sont définitivement perdus : il n'existe aucune copie cloud."},
  {q: "Puis-je récupérer mes passkeys après une réinitialisation FIDO ?", a: "Non. Une passkey liée au matériel n'existe que sur cet appareil : une réinitialisation la détruit. Vous enregistrez ensuite une nouvelle passkey auprès de chaque service, et retirez les entrées obsolètes de leurs paramètres."},
  {q: "Puis-je récupérer mes codes OTP après une réinitialisation ?", a: "Uniquement si vous avez conservé les QR codes ou les secrets d'origine. Les secrets OTP sont en écriture seule sur le secure element et ne peuvent pas être relus : il n'y a donc rien à restaurer depuis l'appareil lui-même."},
  {q: "Combien de tentatives de PIN incorrectes déclenchent un verrouillage ?", a: "Quatre pour le gestionnaire de mots de passe, huit pour l'applet FIDO. Les compteurs sont indépendants : les échecs sur l'un n'affectent pas l'autre."},
  {q: "Puis-je réinitialiser depuis un ordinateur plutôt que depuis mon téléphone ?", a: "Oui. Les applications de bureau effectuent les trois réinitialisations avec la carte dans un lecteur à contact ou sur un lecteur NFC, et l'applet FIDO peut également être réinitialisé depuis Windows ou un navigateur Chromium."},
]} />

import BuyBackupDevice from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-backup-device.mdx';
import GetSupport from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_get-support.mdx';

<p class="doc-subtitle">Repartir de zéro quand vous êtes verrouillé dehors</p>

<p class="platform-note">Mobile et Desktop</p>

<div class="tldr">

Votre appareil contient **trois applets indépendants** - gestionnaire de mots de passe, passkeys FIDO et comptes OTP - chacun avec son propre PIN et sa propre réinitialisation. En réinitialiser un efface tout son contenu et ne touche à rien dans les autres. Aucun ne récupère un PIN oublié : une réinitialisation ramène l'applet à son état d'usine, et seule une sauvegarde ramène les données.

</div>

## De quelle réinitialisation avez-vous besoin ?

Déterminez de quel applet vous êtes verrouillé dehors avant d'agir. Réinitialiser le mauvais détruit des données que vous n'aviez pas besoin de perdre.

| Vous ne pouvez plus accéder à | Réinitialisez | Récupérable ensuite ? |
|---|---|---|
| Mots de passe, notes sécurisées, seed phrases | [Le gestionnaire de mots de passe](#réinitialiser-le-gestionnaire-de-mots-de-passe) | ✅ Depuis un équipement secondaire |
| Passkeys | [L'applet FIDO](#réinitialiser-lapplet-fido) | ❌ À réenregistrer auprès de chaque service |
| Codes OTP / 2FA | [Les comptes OTP](#réinitialiser-les-comptes-otp) | ⚠️ Uniquement si vous avez conservé les QR codes d'origine |

**Les trois sont indépendants.** Réinitialiser l'applet FIDO ne touche pas à un seul mot de passe. Réinitialiser le gestionnaire de mots de passe ne retire aucune passkey. Chacun a son propre PIN et son propre compteur de tentatives - voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

## Ce qu'une réinitialisation fait et ne fait pas

**Elle ne récupère pas votre PIN.** Il n'existe ni contournement, ni code maître, ni procédure de récupération. Le secure element est conçu précisément pour que personne - nous compris - ne puisse extraire ou réinitialiser un PIN tout en conservant les données.

**Elle efface tout le contenu de cet applet**, définitivement. Ce qui revient ensuite dépend entièrement de ce que vous avez préparé à l'avance.

**Elle rend l'appareil de nouveau utilisable.** Après une réinitialisation, l'applet est revenu à son état d'usine, prêt pour un nouveau PIN et de nouvelles données.

---

## Réinitialiser le gestionnaire de mots de passe

Efface tous les mots de passe, notes sécurisées et seed phrases. Restaurable depuis un [équipement secondaire](/docs/product-documentation/getting-started/backup-and-recovery).

Le gestionnaire de mots de passe se verrouille après **4 tentatives de PIN incorrectes**.

<div class="step-layout">

<div class="step-text">

### Étape 1 : ouvrir la Seedkeeper App et aller dans le menu

Touchez le menu à 3 points en **haut à droite**.

### Étape 2 : toucher Settings

### Étape 3 : faire défiler jusqu'en bas et toucher « Factory reset my card »

### Étape 4 : lire l'avertissement et cocher la case

L'écran explique que l'opération est irréversible. Cochez la case pour continuer.

### Étape 5 : toucher Start

### Étape 6 : toucher « Send reset command »

### Étape 7 : scanner votre carte ou votre bague

### Étape 8 : répéter le scan 5 fois

Scannez le même appareil cinq fois au total pour achever la réinitialisation.

### Étape 9 : toucher Home

De retour sur l'écran d'accueil, définissez votre nouveau PIN.

</div>

<div class="step-image">

<img src="/img/gifs/reset-password-manager-iphone-mockup.gif" alt="Réinitialisation d'usine du gestionnaire de mots de passe dans la Seedkeeper App" className="mockup-image" />

</div>

</div>

:::note[Pourquoi cinq scans ?]
Cinq scans, une case à cocher et deux écrans de confirmation constituent une protection délibérée. Une réinitialisation ne peut pas survenir par accident, ce qui compte pour une opération sans annulation possible.
:::

---

## Réinitialiser l'applet FIDO

Efface toutes les passkeys stockées sur l'appareil, ainsi que le PIN FIDO. **Les passkeys ne peuvent pas être restaurées** - une passkey liée au matériel n'existe nulle part ailleurs, vous en enregistrez donc une nouvelle auprès de chaque service ensuite.

L'applet FIDO se verrouille après **8 tentatives de PIN incorrectes**.

<div class="step-layout">

<div class="step-text">

### Étape 1 : ouvrir la Seedkeeper PRO App

### Étape 2 : ouvrir le menu et toucher Configuration

Touchez le menu à 3 points en **haut à droite**, puis **Configuration**.

### Étape 3 : toucher « Reset FIDO application »

### Étape 4 : lire l'avertissement et toucher « Reset FIDO »

L'écran explique que l'opération est irréversible.

### Étape 5 : confirmer

Un dernier avertissement apparaît. Touchez **Reset**.

### Étape 6 : scanner votre carte ou votre bague

L'applet FIDO est désormais revenu à son état d'usine.

</div>

<div class="step-image">

<img src="/img/gifs/reset-fido-iphone-mockup.gif" alt="Réinitialisation de l'application FIDO dans la Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

:::warning[Révoquez avant d'oublier]
Chaque service liste encore une passkey qui n'existe plus. Connectez-vous autrement et retirez les entrées obsolètes, puis enregistrez vos nouvelles passkeys - voir [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy).

Si vous avez enregistré un second appareil, servez-vous-en pour vous connecter plutôt que de vous rabattre sur la récupération par mot de passe.
:::

---

## Réinitialiser les comptes OTP

Efface tous les identifiants TOTP de l'appareil. **Ceux-ci ne peuvent pas être récupérés depuis l'appareil**, les secrets OTP étant en écriture seule sur le secure element - voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

Vous ne pouvez les reconfigurer que si vous avez conservé les QR codes ou les secrets d'origine.

<div class="step-layout">

<div class="step-text">

### Étape 1 : ouvrir la Seedkeeper PRO App

### Étape 2 : ouvrir le menu et toucher Configuration

Touchez le menu à 3 points en **haut à droite**, puis **Configuration**.

### Étape 3 : toucher « Reset 2FA accounts »

### Étape 4 : lire l'avertissement et toucher « Reset 2FA accounts »

L'écran explique que l'opération est irréversible.

### Étape 5 : confirmer

Un dernier avertissement apparaît. Touchez **Reset**.

### Étape 6 : scanner votre carte ou votre bague

Vos comptes OTP sont désormais effacés.

</div>

<div class="step-image">

<img src="/img/gifs/reset-otp-iphone-mockup.gif" alt="Réinitialisation des comptes 2FA dans la Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

:::warning[Retrouvez l'accès avant de réinitialiser]
Si vous réinitialisez les comptes OTP sans QR code conservé, vous perdez le second facteur sur ces services. Assurez-vous de pouvoir encore vous connecter - par des codes de récupération, un second appareil, ou une autre méthode enregistrée - avant de les effacer.
:::

---

## Depuis un ordinateur

Les trois réinitialisations peuvent aussi être effectuées depuis les applications de bureau, avec la carte dans un lecteur à contact ou sur un lecteur NFC : la [Satochip-Utils App](/docs/product-documentation/getting-started/download) pour le gestionnaire de mots de passe, et la Seedkeeper PRO App pour FIDO et OTP. Les étapes et les libellés sont identiques.

L'applet FIDO peut en outre être réinitialisé depuis Windows ou un navigateur Chromium, ce qu'il vaut la peine de savoir et à quoi il vaut la peine de faire attention - le bouton se trouve à côté des options de PIN. Voir [Gérer vos passkeys depuis votre ordinateur](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer).

## Après une réinitialisation

**Gestionnaire de mots de passe :** définissez un nouveau PIN, puis restaurez depuis votre équipement secondaire - voir [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery).

**FIDO :** définissez un nouveau PIN FIDO, puis enregistrez une nouvelle passkey auprès de chaque service, en retirant les entrées obsolètes au passage - voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

**OTP :** rajoutez chaque compte depuis son QR code d'origine, ou générez de nouveaux identifiants depuis chaque service - voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account).

Et quel que soit l'applet que vous venez de reconstruire, c'est le moment de mettre en place la redondance qui aurait évité la réinitialisation : un équipement secondaire pour le gestionnaire de mots de passe, un second appareil enregistré pour les passkeys, et des QR codes conservés pour l'OTP.

<BuyBackupDevice />

## FAQ

<details>
<summary>La réinitialisation récupère-t-elle mon PIN oublié ?</summary>

Non. Une réinitialisation ne récupère rien - elle ramène l'applet à son état d'usine. Un PIN ne peut être ni récupéré ni contourné, par personne, et c'est précisément cette propriété qui rend l'appareil sûr.

</details>

<details>
<summary>Réinitialiser un applet efface-t-il les autres ?</summary>

Non. Les applets gestionnaire de mots de passe, FIDO et OTP sont indépendants, chacun avec son propre PIN et ses propres données. En réinitialiser un laisse les deux autres intacts.

</details>

<details>
<summary>Puis-je récupérer mes mots de passe après une réinitialisation ?</summary>

Uniquement depuis un équipement secondaire. Sans lui, les secrets de l'appareil réinitialisé sont définitivement perdus - il n'existe aucune copie cloud.

</details>

<details>
<summary>Puis-je récupérer mes passkeys après une réinitialisation FIDO ?</summary>

Non. Une passkey liée au matériel n'existe que sur cet appareil : une réinitialisation la détruit. Vous enregistrez ensuite une nouvelle passkey auprès de chaque service, et retirez les entrées obsolètes de leurs paramètres.

</details>

<details>
<summary>Puis-je récupérer mes codes OTP après une réinitialisation ?</summary>

Uniquement si vous avez conservé les QR codes ou les secrets d'origine. Les secrets OTP sont en écriture seule sur le secure element et ne peuvent pas être relus : il n'y a donc rien à restaurer depuis l'appareil lui-même.

</details>

<details>
<summary>Combien de tentatives de PIN incorrectes déclenchent un verrouillage ?</summary>

Quatre pour le gestionnaire de mots de passe, huit pour l'applet FIDO. Les compteurs sont indépendants : les échecs sur l'un n'affectent pas l'autre.

</details>

<details>
<summary>Puis-je réinitialiser depuis un ordinateur plutôt que depuis mon téléphone ?</summary>

Oui. Les applications de bureau effectuent les trois réinitialisations avec la carte dans un lecteur à contact ou sur un lecteur NFC, et l'applet FIDO peut également être réinitialisé depuis Windows ou un navigateur Chromium.

</details>

## Articles liés

- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Gérer vos passkeys depuis votre ordinateur](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer)

<GetSupport />
