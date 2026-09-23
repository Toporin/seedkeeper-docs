---
title: "Ajouter un compte TOTP"
description: "Ajoutez un compte TOTP à double facteur sur votre Seedkeeper PRO en scannant le QR code du service, ou en saisissant le secret à la main."
keywords: [ajouter compte TOTP, scanner QR code 2FA, configuration authentificateur matériel, TOTP secure element, saisie manuelle OTP]
sidebar_position: 1
sidebar_label: "Ajouter un compte TOTP"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Que faire si je ne peux pas scanner le QR code ?", a: "Saisissez les informations du compte manuellement."},
  {q: "Ai-je besoin d'un PIN pour ajouter un compte OTP ?", a: "Pas pour en ajouter un, mais vous pouvez définir ensuite un PIN pour protéger l'accès."},
  {q: "Dois-je conserver le QR code quelque part avant de l'ajouter ?", a: "Oui, si vous voulez qu'un équipement secondaire fonctionne également avec ce compte."},
]} />

<p class="doc-subtitle">Ajouter un nouveau code 2FA en quelques secondes</p>

<div class="tldr">

Ouvrez la Seedkeeper PRO App, touchez Add account, scannez le QR code fourni par votre service, vérifiez les informations, puis enregistrez et scannez votre Seedkeeper PRO.

</div>

## Vue d'ensemble

Tout service proposant [l'authentification à deux facteurs](/docs/security-academy/authentication/what-is-2fa) par application d'authentification (Gmail, Microsoft 365, et la plupart des autres) peut être configuré directement sur votre Seedkeeper PRO plutôt que dans une application de téléphone. Les codes générés suivent le standard [TOTP](/docs/security-academy/authentication/what-is-totp), ils sont donc acceptés par n'importe quel service conforme. Lorsque le service prend également en charge les passkeys, celles-ci restent l'option la plus solide, puisqu'un code à usage unique demeure hameçonnable - voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp).

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : ouvrir l'application et aller dans le menu

Touchez le menu à 3 points en haut à droite.

### Étape 2 : toucher Add account

Cliquez sur **Add account**.

### Étape 3 : scanner le QR code

Scannez le QR code fourni par votre service (Gmail, Microsoft 365, ou tout autre fournisseur).<br/>
Une coche confirme la réussite du scan.

### Étape 4 : vérifier les informations

Si vous le souhaitez, vous pouvez modifier le nom de l'émetteur ou celui du compte pour plus de clarté.

### Étape 5 : enregistrer

Touchez **Save**. L'application vous invite à scanner votre Seedkeeper PRO.<br/>
Votre compte OTP est désormais enregistré et prêt à l'emploi.

</div>

<div class="step-image">

<img src="/img/gifs/adding-totp-account-iphone-mockup.gif" alt="Ajout d'un compte TOTP dans la Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

## Pas de QR code disponible ?

Si vous ne pouvez pas scanner le QR code, ou si votre service n'en propose pas, touchez **No QR code? Enter manually** pour saisir les informations du compte à la main.

<div class="download-row">

<img src="/img/screenshots/otp-manual-entry-callout-mockup.png" alt="Option No QR code? Enter manually, mise en évidence" className="mockup-image" style={{maxHeight: '480px', maxWidth: 'none', width: 'auto'}} />
<img src="/img/screenshots/otp-manual-entry-mockup.png" alt="Saisie manuelle d'un compte OTP dans la Seedkeeper PRO App" className="mockup-image" style={{maxHeight: '480px', maxWidth: 'none', width: 'auto'}} />

</div>

## FAQ

<details>
<summary>Que faire si je ne peux pas scanner le QR code ?</summary>

Saisissez les informations du compte manuellement - voir [Pas de QR code disponible ?](#pas-de-qr-code-disponible-) ci-dessus.

</details>

<details>
<summary>Ai-je besoin d'un PIN pour ajouter un compte OTP ?</summary>

Pas pour en ajouter un, mais vous pouvez définir ensuite un PIN pour protéger l'accès - voir [Définir un PIN d'accès OTP](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin).

</details>

<details>
<summary>Dois-je conserver le QR code quelque part avant de l'ajouter ?</summary>

Oui, si vous voulez qu'un équipement secondaire fonctionne également avec ce compte - voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

</details>

## Articles liés

- [Définir un PIN d'accès OTP](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin)
- [Gérer vos comptes OTP](/docs/product-documentation/otp-authenticator/managing-otp-entries)
- [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Qu'est-ce que le TOTP ?](/docs/security-academy/authentication/what-is-totp)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
