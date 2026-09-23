---
title: "Comment sécuriser GitHub avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey sur GitHub et connectez-vous sans mot de passe ni étape 2FA distincte. Guide pas à pas."
keywords: [passkey github, clé de sécurité github, github sans mot de passe, github FIDO2, clé matérielle 2FA github]
sidebar_position: 2
sidebar_label: "Sécuriser GitHub avec une passkey"
tags: [github, passkey, productivity]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Une passkey remplace-t-elle ma 2FA GitHub ?", a: "Oui. Se connecter avec une passkey couvre le mot de passe et la 2FA en une seule étape."},
  {q: "Puis-je convertir une clé de sécurité existante en passkey ?", a: "Oui. Si vous aviez déjà enregistré votre Seedkeeper PRO comme clé de sécurité 2FA, GitHub peut proposer une option de conversion dans le même parcours Add a passkey."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui, et c'est recommandé."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Parce que la clé ne quitte jamais l'appareil et n'est recopiée nulle part. Une passkey synchronisée réside dans le cloud d'un fournisseur et ne vaut que ce que vaut votre compte chez lui ; une passkey Seedkeeper PRO est générée dans un secure element EAL6+ et ne peut physiquement pas en être extraite. Elle fonctionne aussi sur des ordinateurs qui ne sont pas les vôtres, ce qu'une passkey liée à un téléphone ne permet pas."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à GitHub sans mot de passe ni 2FA</p>

<p class="platform-note">Web</p>

<div class="tldr">

Depuis les paramètres **Password and authentication** de GitHub, ajoutez une passkey, choisissez une clé de sécurité plutôt que la biométrie intégrée de votre appareil, puis connectez votre Seedkeeper PRO pour l'enregistrer.

</div>

## Vue d'ensemble

GitHub prend en charge les [passkeys](/docs/glossary/passkey) comme moyen de se connecter simplement et en sécurité, sans mot de passe ni étape 2FA distincte - votre Seedkeeper PRO couvre les deux à la fois. Cette étape unique résiste en outre au phishing, ce que ne fait pas un mot de passe assorti d'un code à usage unique - voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp).

:::note[Interface en anglais]
GitHub ne propose pas d'interface en français. Les libellés de boutons et de menus ci-dessous sont donc donnés tels qu'ils apparaissent à l'écran.
:::

<WhyHardware />

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : ouvrir les paramètres

En haut à droite de n'importe quelle page GitHub, cliquez sur votre photo de profil, puis sur **Settings**.

### Étape 2 : aller dans Password and authentication

Dans la section **Access** de la barre latérale, cliquez sur **Password and authentication**.

### Étape 3 : ajouter une passkey

Sous **Passkeys**, cliquez sur **Add a passkey**.

### Étape 4 : s'authentifier

Si on vous le demande, authentifiez-vous avec votre mot de passe ou une autre méthode existante.

### Étape 5 : confirmer

Sous **Configure passwordless authentication**, examinez l'invite, puis cliquez sur **Add passkey**.

### Étape 6 : choisir une clé de sécurité plutôt que votre appareil

La biométrie de votre appareil ou un gestionnaire d'identifiants synchronisé vous sont proposés par défaut. Cherchez plutôt une option du type **Utiliser un autre appareil** ou **Clé de sécurité**, afin d'enregistrer votre Seedkeeper PRO.

### Étape 7 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC.

### Étape 8 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

### Étape 9 : confirmer

Vérifiez la confirmation d'enregistrement de votre passkey, puis cliquez sur **Done**.

Vous pouvez désormais vous connecter à GitHub avec votre Seedkeeper PRO plutôt qu'avec votre mot de passe et votre 2FA.

</div>

<div class="step-image step-image--wide">

<img src="/img/gifs/github-passkey-browser-mockup.gif" alt="Connexion à GitHub avec une passkey" className="mockup-image" style={{maxWidth: '460px'}} />

</div>

</div>

## Supprimer une passkey

Rendez-vous dans **Settings** → **Password and authentication**, cliquez sur l'icône à côté de la passkey à retirer, examinez la confirmation, puis cliquez sur **Delete**.

:::warning[Gardez au moins un appareil de secours enregistré]
Si votre Seedkeeper PRO est liée au matériel (et non synchronisée avec un fournisseur cloud), la perdre signifie perdre définitivement cette passkey. GitHub recommande d'enregistrer des passkeys sur au moins deux appareils - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).
:::

## Ressources officielles GitHub

- [About passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey)
- [Managing your passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/managing-your-passkeys)
- [Signing in with a passkey](https://docs.github.com/en/authentication/authenticating-with-a-passkey/signing-in-with-a-passkey)

## FAQ

<details>
<summary>Une passkey remplace-t-elle ma 2FA GitHub ?</summary>

Oui - se connecter avec une passkey couvre le mot de passe et la 2FA en une seule étape.

</details>

<details>
<summary>Puis-je convertir une clé de sécurité existante en passkey ?</summary>

Oui. Si vous aviez déjà enregistré votre Seedkeeper PRO comme clé de sécurité 2FA, GitHub peut proposer une option de conversion dans le même parcours **Add a passkey**. Voir [Managing your passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/managing-your-passkeys) pour le détail.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Oui, et c'est recommandé - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Parce que la clé ne quitte jamais l'appareil et n'est recopiée nulle part. Une passkey synchronisée réside dans le cloud d'un fournisseur et ne vaut que ce que vaut votre compte chez lui ; une passkey Seedkeeper PRO est générée dans un secure element EAL6+ et ne peut physiquement pas en être extraite. Elle fonctionne aussi sur des ordinateurs qui ne sont pas les vôtres, ce qu'une passkey liée à un téléphone ne permet pas. Voir [Toutes les passkeys ne sont pas stockées de la même façon](/docs/security-academy/passkeys/passkey-vs-password#toutes-les-passkeys-ne-sont-pas-stockées-de-la-même-façon).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Comment sécuriser Dropbox avec une passkey](/docs/tutorials/productivity/secure-dropbox-with-a-passkey)
- [Comment sécuriser OpenAI et ChatGPT avec une passkey](/docs/tutorials/productivity/secure-openai-with-a-passkey)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
