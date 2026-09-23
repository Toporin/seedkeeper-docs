---
title: "Comment activer une passkey sur Google"
description: "Enregistrez votre Seedkeeper PRO comme passkey matérielle sur votre compte Google et connectez-vous sans mot de passe. Guide pas à pas avec captures."
keywords: [passkey google, clé de sécurité google, clé d'accès compte google, FIDO2 google, connexion sans mot de passe google, Seedkeeper PRO]
sidebar_position: 1
sidebar_label: "Activer une passkey sur Google"
tags: [google, passkey]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Et si je configure cela depuis mon téléphone plutôt qu'un ordinateur ?", a: "Google peut vous proposer de créer la clé d'accès directement sur votre téléphone plutôt que d'afficher l'option Utiliser un autre appareil. Suivez les invites à l'écran : vous pourrez malgré tout scanner votre Seedkeeper PRO pour terminer."},
  {q: "Dois-je avoir un PIN avant de commencer ?", a: "Non. Si vous n'en avez pas encore, il vous sera proposé d'en créer un pendant la configuration."},
  {q: "Cela supprime-t-il mon mot de passe Google ?", a: "Non. Ajouter une passkey ne supprime ni ne modifie aucune méthode de connexion ou de récupération existante sur votre compte. Pour en faire votre méthode de connexion principale par la suite, voir l'article dédié."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Parce que la clé ne quitte jamais l'appareil et n'est recopiée nulle part. Une passkey synchronisée réside dans le cloud d'un fournisseur et ne vaut que ce que vaut votre compte chez lui ; une passkey Seedkeeper PRO est générée dans un secure element EAL6+ et ne peut physiquement pas en être extraite. Elle fonctionne aussi sur des ordinateurs qui ne sont pas les vôtres, ce qu'une passkey liée à un téléphone ne permet pas."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à Google sans mot de passe</p>

<p class="platform-note">Mobile et Web</p>

<div class="tldr">

Rendez-vous dans les paramètres de sécurité de votre compte Google, créez une clé d'accès, choisissez « Utiliser un autre appareil » pour enregistrer votre Seedkeeper PRO comme clé de sécurité matérielle, puis scannez-la et saisissez votre PIN.

</div>

## Vue d'ensemble

Google prend en charge les [passkeys](/docs/glossary/passkey) comme remplacement du mot de passe sur l'ensemble du compte. Ce guide détaille l'enregistrement de votre Seedkeeper PRO comme passkey. Voici à quoi ressemble le parcours complet :

<img src="/img/gifs/google-passkey-browser-mockup.gif" alt="Création d'une clé d'accès de compte Google avec une Seedkeeper PRO" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

<WhyHardware />

## Instructions pas à pas

### Étape 1 : ouvrir votre compte Google

Rendez-vous sur [myaccount.google.com](https://myaccount.google.com/) et connectez-vous avec votre adresse e-mail et votre mot de passe.

### Étape 2 : aller dans Sécurité et connexion

Dans le panneau de gauche, cliquez sur **Sécurité et connexion**.

### Étape 3 : ouvrir Clés d'accès et clés de sécurité

Cliquez sur **Clés d'accès et clés de sécurité**.

### Étape 4 : créer une clé d'accès

Cliquez sur **Créer une clé d'accès**.

### Étape 5 : choisir « Utiliser un autre appareil »

L'option affichée dépend de l'appareil que vous utilisez. Sur un téléphone, Google peut vous proposer directement de créer une clé d'accès sur cet appareil. Sur un ordinateur, choisissez **Utiliser un autre appareil** pour enregistrer votre Seedkeeper PRO comme clé de sécurité matérielle.

### Étape 6 : connecter votre Seedkeeper PRO

Votre système (Windows, macOS, etc.) vous invite à insérer ou à scanner votre Seedkeeper PRO.

### Étape 7 : saisir votre PIN

Si vous n'avez pas encore défini de [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin), il vous sera demandé d'en créer un maintenant. Sinon, saisissez simplement votre PIN existant.

### Étape 8 : approuver la clé d'accès

Cliquez sur **Approuver** pour confirmer la clé d'accès nouvellement créée.

Votre compte Google est désormais protégé par une passkey conservée sur votre Seedkeeper PRO.

## Ressources officielles Google

- [Le moyen le plus simple et le plus sûr de vous connecter à vos comptes sans mot de passe](https://safety.google/safety/authentication/passkey/)
- [Se connecter avec une clé d'accès au lieu d'un mot de passe](https://support.google.com/accounts/answer/13548313?hl=fr)
- [Utiliser des mots de passe et des clés d'accès sur tous vos appareils](https://support.google.com/accounts/answer/6197437?hl=fr)

## FAQ

<details>
<summary>Et si je configure cela depuis mon téléphone plutôt qu'un ordinateur ?</summary>

Google peut vous proposer de créer la clé d'accès directement sur votre téléphone plutôt que d'afficher l'option « Utiliser un autre appareil ». Suivez les invites à l'écran : vous pourrez malgré tout scanner votre Seedkeeper PRO pour terminer.

</details>

<details>
<summary>Dois-je avoir un PIN avant de commencer ?</summary>

Non - si vous n'en avez pas encore, il vous sera proposé d'en créer un pendant la configuration. Voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour le détail de ce PIN.

</details>

<details>
<summary>Cela supprime-t-il mon mot de passe Google ?</summary>

Non. Ajouter une passkey ne supprime ni ne modifie aucune méthode de connexion ou de récupération existante sur votre compte. Pour en faire votre méthode de connexion principale par la suite, voir [Comment remplacer les mots de passe par des passkeys sur Google](/docs/tutorials/google/replace-passwords-with-passkeys-on-google).

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Parce que la clé ne quitte jamais l'appareil et n'est recopiée nulle part. Une passkey synchronisée réside dans le cloud d'un fournisseur et ne vaut que ce que vaut votre compte chez lui ; une passkey Seedkeeper PRO est générée dans un secure element EAL6+ et ne peut physiquement pas en être extraite. Elle fonctionne aussi sur des ordinateurs qui ne sont pas les vôtres, ce qu'une passkey liée à un téléphone ne permet pas. Voir [Toutes les passkeys ne sont pas stockées de la même façon](/docs/security-academy/passkeys/passkey-vs-password#toutes-les-passkeys-ne-sont-pas-stockées-de-la-même-façon).

</details>

## Articles liés

- [Créer votre première passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Comment remplacer les mots de passe par des passkeys sur Google](/docs/tutorials/google/replace-passwords-with-passkeys-on-google)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
