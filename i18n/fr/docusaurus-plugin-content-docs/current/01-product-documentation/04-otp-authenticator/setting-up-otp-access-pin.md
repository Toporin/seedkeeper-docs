---
title: "Définir un PIN d'accès OTP"
description: "Par défaut, aucun PIN ne protège vos codes OTP sur une Seedkeeper PRO. Comment ajouter un PIN d'accès, le changer, ou le retirer."
keywords: [PIN OTP, protéger codes 2FA, PIN authentificateur, mot de passe OTP Seedkeeper PRO, sécuriser accès OTP]
sidebar_position: 2
sidebar_label: "Définir un PIN d'accès OTP"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Un PIN est-il requis par défaut pour consulter les codes OTP ?", a: "Non. Sans en définir un, quiconque scanne votre appareil peut voir vos codes OTP."},
  {q: "Comment changer mon PIN OTP existant ?", a: "Suivez les mêmes étapes que pour la première configuration : vous arriverez simplement sur une option différente puisqu'un PIN existe déjà."},
  {q: "Comment retirer mon PIN OTP ?", a: "Suivez les mêmes étapes, mais touchez Remove password au lieu de Set password."},
  {q: "Est-ce le même PIN que celui du gestionnaire de mots de passe ou des passkeys ?", a: "Non. Seedkeeper PRO utilise trois PIN indépendants : celui du gestionnaire de mots de passe, le PIN FIDO pour les passkeys, et celui-ci pour l'accès OTP."},
  {q: "Que se passe-t-il si j'oublie mon PIN d'accès OTP ?", a: "Il n'existe aucune récupération. Retrouver l'accès impose de réinitialiser l'applet, ce qui efface les identifiants OTP enregistrés sur l'appareil - d'où l'importance de conserver le QR code ou le secret d'origine."},
]} />

<p class="doc-subtitle">Ajoutez un PIN avant que quiconque puisse voir vos codes OTP</p>

<div class="tldr">

Par défaut, scanner votre Seedkeeper PRO affiche vos codes OTP sans aucun PIN. Vous pouvez en ajouter un depuis Configuration → Manage Password, sous 2FA Accounts.

</div>

## Vue d'ensemble

Tel qu'il sort de sa boîte, l'appareil laisse quiconque le scanne consulter votre liste de [codes OTP](/docs/security-academy/authentication/what-is-otp) - sans aucun PIN. Définir un PIN d'accès comble cette faille : une fois en place, l'application le réclame chaque fois que quelqu'un tente de lire ou de générer vos codes OTP.

Cela transforme aussi l'appareil d'un facteur unique en deux : [quelque chose que vous possédez](/docs/security-academy/authentication/authentication-factors-explained) et quelque chose que vous savez.

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : ouvrir le menu

Depuis la Seedkeeper PRO App, touchez le menu à 3 points, puis **Configuration**.

### Étape 2 : aller dans Manage Password

Sous **2FA Accounts**, touchez **Manage password**.

### Étape 3 : scanner votre carte

Cela permet à l'application de vérifier si un PIN est déjà défini. Si ce n'est pas le cas, touchez **Set password**.

### Étape 4 : définir votre mot de passe

Saisissez et confirmez votre PIN personnel, puis scannez de nouveau votre carte pour valider.

### Étape 5 : revenir à l'écran d'accueil

Actualisez l'application et scannez votre carte. Désormais, vous devrez saisir ce PIN chaque fois que vous voudrez consulter ou générer vos codes OTP. Vous pouvez éventuellement demander à l'application de mémoriser le PIN pour qu'elle ne le redemande pas à chaque fois.

:::tip[Vous avez déjà un PIN ?]
Suivez les mêmes étapes pour le changer - vous arriverez simplement sur une option différente puisqu'un PIN existe déjà.
:::

:::tip[Vous préférez le retirer ?]
Suivez les mêmes étapes, mais touchez **Remove password** sous Manage Password au lieu de Set password.
:::

</div>

<div class="step-image">

<img src="/img/gifs/otp-pin-setup-iphone-mockup.gif" alt="Définition d'un PIN d'accès OTP dans la Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

## FAQ

<details>
<summary>Un PIN est-il requis par défaut pour consulter les codes OTP ?</summary>

Non. Sans en définir un, quiconque scanne votre appareil peut voir vos codes OTP. Voir la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Comment changer mon PIN OTP existant ?</summary>

Suivez les mêmes étapes que ci-dessus - voir [Vous avez déjà un PIN ?](#étape-5--revenir-à-lécran-daccueil) ci-dessus.

</details>

<details>
<summary>Comment retirer mon PIN OTP ?</summary>

Suivez les mêmes étapes, mais touchez **Remove password** au lieu de Set password. Voir [Vous préférez le retirer ?](#étape-5--revenir-à-lécran-daccueil) ci-dessus.

</details>

<details>
<summary>Est-ce le même PIN que celui du gestionnaire de mots de passe ou des passkeys ?</summary>

Non. Seedkeeper PRO utilise trois PIN indépendants : celui du gestionnaire de mots de passe, le PIN FIDO pour les passkeys, et celui-ci pour l'accès OTP. Voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour le détail complet.

</details>

<details>
<summary>Que se passe-t-il si j'oublie mon PIN d'accès OTP ?</summary>

Il n'existe aucune récupération. Retrouver l'accès impose de réinitialiser l'applet, ce qui efface les identifiants OTP enregistrés sur l'appareil - d'où l'importance de conserver le QR code ou le secret d'origine. Voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

</details>

## Articles liés

- [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Gérer vos comptes OTP](/docs/product-documentation/otp-authenticator/managing-otp-entries)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Qu'est-ce que l'OTP ?](/docs/security-academy/authentication/what-is-otp)
- [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained)
- [Accès OTP perdu](/docs/troubleshooting/lost-otp-access)
- [Problèmes de PIN et verrouillages](/docs/troubleshooting/pin-problems-and-lockouts)
