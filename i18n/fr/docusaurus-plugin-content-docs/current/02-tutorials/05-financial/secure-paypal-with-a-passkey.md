---
title: "Comment sécuriser PayPal avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey matérielle sur PayPal et connectez-vous sans mot de passe. Y compris ce qui change avec la DSP2 en Europe."
keywords: [passkey paypal, clé de sécurité paypal, paypal sans mot de passe, paypal FIDO2, DSP2 authentification forte]
sidebar_position: 1
sidebar_label: "Sécuriser PayPal avec une passkey"
tags: [paypal, passkey, financial]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ajouter une passkey supprime-t-il mon mot de passe PayPal ?", a: "Non. Vous pouvez toujours vous connecter avec votre mot de passe si vous le préférez : cherchez lors de la connexion une option du type Essayer une autre méthode pour voir toutes les possibilités."},
  {q: "Me demandera-t-on encore un code 2FA après avoir configuré une passkey ?", a: "En Europe, c'est possible. Il s'agit d'une exigence réglementaire liée à la DSP2 et à l'authentification forte, et non d'une particularité de votre Seedkeeper PRO."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui. Voir la stratégie de sauvegarde des passkeys pour la configuration recommandée."},
  {q: "Quels autres services prennent en charge les passkeys avec ma Seedkeeper PRO ?", a: "Beaucoup : Amazon, eBay et Shopify en sont quelques-uns."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Parce que la clé ne quitte jamais l'appareil et n'est recopiée nulle part. Une passkey synchronisée réside dans le cloud d'un fournisseur et ne vaut que ce que vaut votre compte chez lui ; une passkey Seedkeeper PRO est générée dans un secure element EAL6+ et ne peut physiquement pas en être extraite. Elle fonctionne aussi sur des ordinateurs qui ne sont pas les vôtres, ce qu'une passkey liée à un téléphone ne permet pas."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à PayPal sans mot de passe</p>

<p class="platform-note">Web</p>

<div class="tldr">

Depuis les paramètres de sécurité de votre compte PayPal, créez une clé d'accès, choisissez une clé de sécurité matérielle plutôt que la biométrie intégrée de votre appareil, puis connectez votre Seedkeeper PRO pour l'enregistrer.

</div>

## Vue d'ensemble

PayPal prend en charge les [passkeys](/docs/glossary/passkey), y compris les clés de sécurité matérielles comme la YubiKey - enregistrées de la même façon que le serait votre Seedkeeper PRO. Ce guide détaille cette configuration.

:::note[Un code peut encore vous être demandé en Europe]
Au titre de la DSP2 et de l'authentification forte du client en Europe, PayPal peut encore réclamer un code à usage unique supplémentaire même après une connexion réussie par passkey - généralement uniquement sur un appareil nouveau ou non reconnu. Une fois cet appareil mémorisé, les connexions ultérieures par passkey sautent habituellement cette étape.
:::

<WhyHardware />

## Instructions pas à pas

### Étape 1 : se connecter à PayPal

Ouvrez [paypal.com](https://www.paypal.com/) et connectez-vous avec votre adresse e-mail et votre mot de passe habituels.

### Étape 2 : ouvrir les paramètres de sécurité

Cliquez sur l'icône des paramètres (sur le web) en haut à droite, puis sélectionnez **Sécurité**.

### Étape 3 : créer une clé d'accès

Repérez la section **Clés d'accès** et sélectionnez **Créer une clé d'accès**.

### Étape 4 : choisir une clé de sécurité matérielle

Votre navigateur vous propose de créer la passkey, en privilégiant généralement la biométrie de votre appareil ou un gestionnaire d'identifiants synchronisé. Cherchez plutôt une option du type **Utiliser un autre appareil** ou **Clé de sécurité**, afin d'enregistrer votre Seedkeeper PRO.

### Étape 5 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC.

### Étape 6 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

PayPal confirme la création de la passkey, et vous pouvez désormais vous connecter avec votre Seedkeeper PRO plutôt qu'avec votre mot de passe.

## Gérer vos passkeys

Depuis les paramètres de votre compte, ouvrez **Gestion des clés d'accès** pour consulter, désactiver ou retirer n'importe quelle passkey enregistrée sur votre compte.

## Ressources officielles PayPal

- [Qu'est-ce qu'une clé d'accès et comment l'utiliser pour me connecter à mon compte PayPal ?](https://www.paypal.com/fr/cshelp/article/what-is-a-passkey-and-how-do-i-use-it-to-log-in-to-my-paypal-account-help997)
- [Qu'est-ce que l'authentification multifacteur et un appareil mémorisé ?](https://www.paypal.com/fr/cshelp/article/what-is-multi-factor-authentication-and-a-remembered-device-help1156)

## FAQ

<details>
<summary>Ajouter une passkey supprime-t-il mon mot de passe PayPal ?</summary>

Non. Vous pouvez toujours vous connecter avec votre mot de passe si vous le préférez - cherchez lors de la connexion une option du type **Essayer une autre méthode** pour voir toutes les possibilités.

</details>

<details>
<summary>Me demandera-t-on encore un code 2FA après avoir configuré une passkey ?</summary>

En Europe, c'est possible - voir la note dans la [Vue d'ensemble](#vue-densemble) ci-dessus. Il s'agit d'une exigence réglementaire (DSP2 et authentification forte du client), et non d'une particularité de votre Seedkeeper PRO.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Quels autres services prennent en charge les passkeys avec ma Seedkeeper PRO ?</summary>

Beaucoup - voir [Amazon](/docs/tutorials/webshop/secure-amazon-with-a-passkey), [eBay](/docs/tutorials/webshop/secure-ebay-with-a-passkey) et [Shopify](/docs/tutorials/webshop/secure-shopify-with-a-passkey) pour quelques exemples.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Parce que la clé ne quitte jamais l'appareil et n'est recopiée nulle part. Une passkey synchronisée réside dans le cloud d'un fournisseur et ne vaut que ce que vaut votre compte chez lui ; une passkey Seedkeeper PRO est générée dans un secure element EAL6+ et ne peut physiquement pas en être extraite. Elle fonctionne aussi sur des ordinateurs qui ne sont pas les vôtres, ce qu'une passkey liée à un téléphone ne permet pas. Voir [Toutes les passkeys ne sont pas stockées de la même façon](/docs/security-academy/passkeys/passkey-vs-password#toutes-les-passkeys-ne-sont-pas-stockées-de-la-même-façon).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Comment sécuriser Amazon avec une passkey](/docs/tutorials/webshop/secure-amazon-with-a-passkey)
- [Comment sécuriser eBay avec une passkey](/docs/tutorials/webshop/secure-ebay-with-a-passkey)
- [Comment sécuriser Kraken avec une passkey](/docs/tutorials/financial/secure-kraken-with-a-passkey)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
