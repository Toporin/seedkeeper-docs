---
title: "Comment activer la 2FA (TOTP) sur Outlook"
description: "Ajoutez l'authentification à deux facteurs TOTP à votre compte Microsoft ou Outlook avec votre Seedkeeper PRO."
keywords: [2FA outlook, TOTP microsoft, alternative microsoft authenticator, vérification en deux étapes, TOTP matériel]
sidebar_position: 2
sidebar_label: "Activer la 2FA (TOTP) sur Outlook"
tags: [microsoft, outlook, 2fa, totp]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ai-je besoin de la Seedkeeper PRO App pour cela ?", a: "Oui. Contrairement aux passkeys, les codes OTP passent toujours par l'application."},
  {q: "Que faire si mon code expire avant que je le saisisse ?", a: "Recalculez-le depuis l'application."},
  {q: "Puis-je utiliser à la fois une passkey et le TOTP sur le même compte Outlook ?", a: "Oui, les deux peuvent coexister sur le même compte."},
]} />

<p class="doc-subtitle">Ajouter l'authentification à deux facteurs TOTP à votre compte Outlook</p>

<div class="tldr">

Ajoutez une application d'authentification comme méthode de connexion sur votre compte Microsoft, scannez le QR code avec votre Seedkeeper PRO App, puis saisissez le code généré dans Microsoft pour confirmer.

</div>

## Vue d'ensemble

Les comptes Microsoft prennent en charge les applications d'authentification comme méthode d'authentification à deux facteurs. Ce guide détaille la configuration avec votre Seedkeeper PRO plutôt qu'avec une application de téléphone. Voici à quoi ressemble le parcours complet :

<img src="/img/gifs/outlook-otp-browser-mockup.gif" alt="Activation de la 2FA (TOTP) sur Outlook avec une Seedkeeper PRO" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

## Instructions pas à pas

### Étape 1 : ouvrir les options de sécurité avancées

Rendez-vous sur les [options de sécurité avancées du compte Microsoft](https://account.live.com/proofs/manage).

### Étape 2 : se connecter

Connectez-vous avec le compte Microsoft que vous utilisez pour Outlook.

### Étape 3 : ajouter une nouvelle méthode de connexion

Sous vos méthodes de connexion ou de sécurité, cliquez sur **Ajouter une nouvelle méthode de connexion à votre compte**.

### Étape 4 : utiliser une application

Cliquez sur **Utiliser une application**.

### Étape 5 : configurer une autre application d'authentification

Puisque c'est votre Seedkeeper PRO App - et non Microsoft Authenticator - qui affichera vos codes OTP, sélectionnez **Configurer une autre application Authenticator**.

### Étape 6 : scanner le QR code

Microsoft affiche un QR code. Scannez-le avec la Seedkeeper PRO App - voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account) pour la procédure complète.

### Étape 7 : saisir le code généré

Saisissez le code OTP généré par votre Seedkeeper PRO dans l'écran de configuration de Microsoft, puis cliquez sur **Suivant**.

Votre compte Microsoft est désormais protégé par une couche d'authentification supplémentaire via un code OTP, généré par votre Seedkeeper PRO.

## Supprimer une méthode OTP

Suivez les mêmes premières étapes : sous vos méthodes de connexion ou de sécurité, trouvez l'entrée OTP, puis cliquez sur **Supprimer**.

## Ressources officielles Microsoft

- [Configurer une application d'authentification comme méthode de vérification en deux étapes](https://support.microsoft.com/fr-fr/account-billing/set-up-an-authenticator-app-as-a-two-step-verification-method-2db39828-15e1-4614-b825-6e2b524e7c95)

## FAQ

<details>
<summary>Ai-je besoin de la Seedkeeper PRO App pour cela ?</summary>

Oui - contrairement aux passkeys, les codes OTP passent toujours par l'application. Voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account).

</details>

<details>
<summary>Que faire si mon code expire avant que je le saisisse ?</summary>

Recalculez-le - voir [Gérer vos comptes OTP](/docs/product-documentation/otp-authenticator/managing-otp-entries).

</details>

<details>
<summary>Puis-je utiliser à la fois une passkey et le TOTP sur le même compte Outlook ?</summary>

Oui - voir [Comment activer les passkeys sur Outlook](/docs/tutorials/microsoft/enable-passkeys-on-outlook) si vous souhaitez configurer cela également.

</details>

## Articles liés

- [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Gérer vos comptes OTP](/docs/product-documentation/otp-authenticator/managing-otp-entries)
- [Comment activer les passkeys sur Outlook](/docs/tutorials/microsoft/enable-passkeys-on-outlook)
