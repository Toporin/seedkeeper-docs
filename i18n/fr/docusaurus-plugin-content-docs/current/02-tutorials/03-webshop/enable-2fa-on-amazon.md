---
title: "Comment activer la 2FA sur Amazon"
description: "Ajoutez l'authentification à deux facteurs TOTP à votre compte Amazon avec votre Seedkeeper PRO."
keywords: [2FA amazon, TOTP amazon, vérification en deux étapes amazon, application authentification amazon, TOTP matériel]
sidebar_position: 2
sidebar_label: "Activer la 2FA sur Amazon"
tags: [amazon, 2fa, totp, webshop]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ai-je besoin de la Seedkeeper PRO App pour cela, ou seulement de ma Seedkeeper PRO ?", a: "Vous avez besoin de la Seedkeeper PRO App pour scanner le QR code et générer le code OTP. Contrairement aux passkeys, les codes OTP passent toujours par l'application."},
  {q: "Que faire si mon code expire avant que je le saisisse ?", a: "Recalculez-le depuis l'application."},
  {q: "Puis-je utiliser à la fois une passkey et le TOTP sur le même compte Amazon ?", a: "Oui, les deux peuvent coexister sur le même compte."},
  {q: "Une application d'authentification est-elle plus sûre que les codes SMS ?", a: "Oui. Les codes SMS peuvent être interceptés par des attaques de SIM swapping, alors qu'une application d'authentification lie vos codes à un appareil physique que vous seul contrôlez."},
]} />

<p class="doc-subtitle">Ajouter l'authentification à deux facteurs TOTP à votre compte Amazon</p>

<div class="tldr">

Activez la vérification en deux étapes d'Amazon, choisissez l'application d'authentification comme méthode, scannez le QR code avec votre Seedkeeper PRO App, puis saisissez le code généré dans Amazon pour confirmer.

</div>

## Vue d'ensemble

La vérification en deux étapes d'Amazon accepte soit les codes SMS, soit une application d'authentification - cette seconde option est la plus sûre des deux, le SMS pouvant être intercepté par des attaques de SIM swapping. Ce guide détaille la configuration de la méthode par application d'authentification avec votre Seedkeeper PRO. Voici à quoi ressemble le parcours complet :

<img src="/img/gifs/amazon-2fa-browser-mockup.gif" alt="Activation de la 2FA sur Amazon avec une Seedkeeper PRO" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

## Instructions pas à pas

### Étape 1 : se connecter à Amazon

Ouvrez [amazon.fr](https://www.amazon.fr/) dans un navigateur et connectez-vous avec votre adresse e-mail et votre mot de passe habituels.

### Étape 2 : ouvrir Connexion et sécurité

Depuis **Votre compte**, sélectionnez **Connexion et sécurité**.

### Étape 3 : activer la vérification en deux étapes

Repérez **Vérification en deux étapes** et sélectionnez **Activer** (ou **Modifier** / **Gérer** si vous avez déjà commencé).

### Étape 4 : choisir l'application d'authentification

Lorsqu'on vous demande comment recevoir vos codes, choisissez **Application d'authentification** plutôt que Numéro de téléphone.

### Étape 5 : scanner le QR code

Amazon affiche un QR code. Scannez-le avec la Seedkeeper PRO App - voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account) pour la procédure complète.

### Étape 6 : saisir le code généré

Votre Seedkeeper PRO App affiche désormais un code OTP frais. Saisissez-le dans le champ de confirmation d'Amazon et sélectionnez **Vérifier le code et continuer**.

### Étape 7 : confirmer

Sélectionnez **Activer la vérification en deux étapes** pour terminer.

Votre compte Amazon est désormais protégé par une couche d'authentification supplémentaire via un code OTP, généré par votre Seedkeeper PRO.

## Désactiver la vérification en deux étapes

Depuis la même page **Connexion et sécurité**, sélectionnez **Désactiver** à côté de Vérification en deux étapes.

## Ressources officielles Amazon

- [Qu'est-ce que la vérification en deux étapes ?](https://www.amazon.fr/gp/help/customer/display.html?nodeId=G3PWZPU52FKN7PW4)

## FAQ

<details>
<summary>Ai-je besoin de la Seedkeeper PRO App pour cela, ou seulement de ma Seedkeeper PRO ?</summary>

Vous avez besoin de la Seedkeeper PRO App pour scanner le QR code et générer le code OTP - contrairement aux passkeys, les codes OTP passent toujours par l'application. Voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account).

</details>

<details>
<summary>Que faire si mon code expire avant que je le saisisse ?</summary>

Recalculez-le - voir [Gérer vos comptes OTP](/docs/product-documentation/otp-authenticator/managing-otp-entries).

</details>

<details>
<summary>Puis-je utiliser à la fois une passkey et le TOTP sur le même compte Amazon ?</summary>

Oui - voir [Comment sécuriser Amazon avec une passkey](/docs/tutorials/webshop/secure-amazon-with-a-passkey) si vous souhaitez configurer cela également.

</details>

<details>
<summary>Une application d'authentification est-elle plus sûre que les codes SMS ?</summary>

Oui. Les codes SMS peuvent être interceptés par des attaques de SIM swapping, alors qu'une application d'authentification lie vos codes à un appareil physique que vous seul contrôlez. Voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

</details>

## Articles liés

- [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Gérer vos comptes OTP](/docs/product-documentation/otp-authenticator/managing-otp-entries)
- [Comment sécuriser Amazon avec une passkey](/docs/tutorials/webshop/secure-amazon-with-a-passkey)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
