---
title: "Comment activer la 2FA (TOTP) sur Google"
description: "Configurez l'authentification à deux facteurs TOTP sur votre compte Google avec votre Seedkeeper PRO plutôt qu'une application d'authentification."
keywords: [2FA google, TOTP google, alternative google authenticator, validation en deux étapes google, TOTP matériel]
sidebar_position: 2
sidebar_label: "Activer la 2FA (TOTP) sur Google"
tags: [google, 2fa, totp]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ai-je besoin de la Seedkeeper PRO App pour cela, ou seulement de ma Seedkeeper PRO ?", a: "Vous avez besoin de la Seedkeeper PRO App pour scanner le QR code et générer le code OTP. Contrairement aux passkeys, les codes OTP passent toujours par l'application."},
  {q: "Que faire si mon code expire avant que je le saisisse ?", a: "Recalculez-le depuis l'application."},
  {q: "Puis-je utiliser à la fois une passkey et le TOTP sur le même compte Google ?", a: "Oui, les deux peuvent coexister sur le même compte."},
  {q: "Un code à usage unique résiste-t-il au phishing ?", a: "Non. Un code TOTP peut être relayé vers le vrai site par un attaquant en temps réel, ce que font précisément les kits de phishing commerciaux. Il compte comme authentification multifacteur, mais pas comme authentification multifacteur résistante au phishing : seule une passkey y parvient."},
]} />

<p class="doc-subtitle">Ajouter l'authentification à deux facteurs TOTP à votre compte Google</p>

<p class="platform-note">Web</p>

<div class="tldr">

Activez la validation en deux étapes par application d'authentification chez Google, scannez le QR code avec votre Seedkeeper PRO App, puis saisissez le code généré dans Google pour confirmer.

</div>

## Vue d'ensemble

Google prend en charge les applications d'authentification comme méthode de validation en deux étapes. Ce guide détaille la configuration avec votre Seedkeeper PRO plutôt qu'avec une application de téléphone. Voici à quoi ressemble le parcours complet :

<img src="/img/gifs/google-2fa-totp-browser-mockup.gif" alt="Activation de la 2FA (TOTP) sur Google avec une Seedkeeper PRO" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

:::note[Un code à usage unique est un second facteur, pas un remplacement]
Le TOTP est une nette amélioration par rapport au mot de passe seul, mais il ne résiste pas au phishing : un code est une information que vous lisez et saisissez, une fausse page convaincante peut donc le recueillir et le relayer vers le vrai site à l'intérieur de la même fenêtre de trente secondes. Là où Google prend aussi en charge les passkeys, celles-ci comblent entièrement cet écart. Voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp).
:::

## Instructions pas à pas

### Étape 1 : ouvrir votre compte Google

Rendez-vous sur [myaccount.google.com](https://myaccount.google.com/) et connectez-vous avec votre adresse e-mail et votre mot de passe.

### Étape 2 : aller dans Sécurité et connexion

Dans le panneau de gauche, cliquez sur **Sécurité et connexion**.

### Étape 3 : ouvrir la validation en deux étapes

Cliquez sur **Validation en deux étapes**.

### Étape 4 : cliquer sur Authentificateur

### Étape 5 : cliquer sur Configurer l'authentificateur

### Étape 6 : scanner le QR code

Google affiche un QR code. Scannez-le avec la Seedkeeper PRO App - voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account) pour la procédure complète. L'application vous invitera à scanner votre appareil Seedkeeper PRO pour y enregistrer le nouveau code.

### Étape 7 : saisir le code généré

Votre Seedkeeper PRO App affiche désormais un code OTP frais. Saisissez-le dans l'écran de configuration de Google.

### Étape 8 : cliquer sur Vérifier

:::note[Activer la validation en deux étapes]
Pour activer le code OTP sur votre compte, vous devez cliquer sur **Activer**.

<img src="/img/screenshots/google-2fa-turnon-lens-mockup.png" alt="Bandeau d'activation de la validation en deux étapes, mis en évidence" className="mockup-image" style={{width: '60%', maxWidth: 'none'}} />
:::

Votre compte Google est désormais protégé par une couche d'authentification supplémentaire via un code OTP, généré par votre Seedkeeper PRO.

## Ressources officielles Google

- [Activer la validation en deux étapes](https://support.google.com/accounts/answer/185839?hl=fr)

## FAQ

<details>
<summary>Ai-je besoin de la Seedkeeper PRO App pour cela, ou seulement de ma Seedkeeper PRO ?</summary>

Vous avez besoin de la Seedkeeper PRO App pour scanner le QR code et générer le code OTP - contrairement aux passkeys, les codes OTP passent toujours par l'application.<br />
Voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account).

</details>

<details>
<summary>Que faire si mon code expire avant que je le saisisse ?</summary>

Recalculez-le - voir [Gérer vos comptes OTP](/docs/product-documentation/otp-authenticator/managing-otp-entries).

</details>

<details>
<summary>Puis-je utiliser à la fois une passkey et le TOTP sur le même compte Google ?</summary>

Oui - voir [Comment activer une passkey sur Google](/docs/tutorials/google/enable-passkey-on-google) si vous souhaitez configurer cela également.

</details>

<details>
<summary>Un code à usage unique résiste-t-il au phishing ?</summary>

Non. Un code TOTP peut être relayé vers le vrai site par un attaquant en temps réel, ce que font précisément les kits de phishing commerciaux. Il compte comme authentification multifacteur, mais pas comme authentification multifacteur résistante au phishing - seule une passkey y parvient. Voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp).

</details>

## Articles liés

- [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Gérer vos comptes OTP](/docs/product-documentation/otp-authenticator/managing-otp-entries)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Comment activer une passkey sur Google](/docs/tutorials/google/enable-passkey-on-google)
