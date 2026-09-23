---
title: "Comment sécuriser Shopify avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey sur votre interface Shopify et connectez-vous sans mot de passe. Guide pour marchands et collaborateurs."
keywords: [passkey shopify, clé de sécurité admin shopify, shopify sans mot de passe, shopify FIDO2, sécurité compte collaborateur shopify]
sidebar_position: 4
sidebar_label: "Sécuriser Shopify avec une passkey"
tags: [shopify, passkey, webshop]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ajouter une passkey supprime-t-il mon mot de passe Shopify ?", a: "Non. Ajouter une passkey ne supprime ni ne modifie aucune méthode de connexion existante sur votre compte."},
  {q: "Puis-je ajouter une passkey pour plusieurs comptes collaborateurs ?", a: "Oui. Chaque personne ayant accès à l'interface Shopify peut enregistrer sa propre passkey de la même façon, sur son propre compte."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui. Voir la stratégie de sauvegarde des passkeys pour la configuration recommandée."},
  {q: "Quels autres services prennent en charge les passkeys avec ma Seedkeeper PRO ?", a: "Beaucoup : Amazon, PayPal et eBay en sont quelques-uns."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Parce que la clé ne quitte jamais l'appareil et n'est recopiée nulle part. Une passkey synchronisée réside dans le cloud d'un fournisseur et ne vaut que ce que vaut votre compte chez lui ; une passkey Seedkeeper PRO est générée dans un secure element EAL6+ et ne peut physiquement pas en être extraite. Elle fonctionne aussi sur des ordinateurs qui ne sont pas les vôtres, ce qu'une passkey liée à un téléphone ne permet pas."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à votre interface Shopify sans mot de passe</p>

<p class="platform-note">Web</p>

<div class="tldr">

Depuis les paramètres de sécurité de votre interface Shopify, créez une clé d'accès, choisissez une clé de sécurité matérielle plutôt que la biométrie intégrée de votre appareil, puis connectez votre Seedkeeper PRO pour l'enregistrer.

</div>

## Vue d'ensemble

Shopify prend en charge nativement les [passkeys](/docs/glossary/passkey) depuis fin 2022, permettant aux marchands et à leurs collaborateurs de se connecter à l'interface Shopify sans mot de passe. Ce guide détaille l'enregistrement de votre Seedkeeper PRO comme passkey.

:::note[Une passkey par plateforme]
Shopify n'autorise qu'une seule passkey par plateforme - si vous êtes connecté au même compte sur plusieurs appareils partageant un gestionnaire d'identifiants (le même identifiant Apple, par exemple), ils utiliseront tous cette même passkey. Enregistrer votre Seedkeeper PRO vous donne à la place une passkey liée à l'appareil physique.
:::

<WhyHardware />

## Instructions pas à pas

### Étape 1 : se connecter à votre interface Shopify

Ouvrez votre interface Shopify et connectez-vous avec votre adresse e-mail et votre mot de passe habituels.

### Étape 2 : ouvrir votre profil

Cliquez sur le nom de votre boutique dans la barre supérieure, puis sur votre profil.

### Étape 3 : ouvrir Sécurité

Cliquez sur **Sécurité**.

### Étape 4 : créer une clé d'accès

Dans la section **Clés d'accès**, cliquez sur **Créer une clé d'accès**.

### Étape 5 : vérifier votre mot de passe

Confirmez le mot de passe de votre compte, puis cliquez sur **Suivant**.

### Étape 6 : choisir une clé de sécurité matérielle

Votre navigateur vous propose de créer la passkey, en privilégiant généralement la biométrie de votre appareil ou un gestionnaire d'identifiants synchronisé. Cherchez plutôt une option du type **Utiliser un autre appareil** ou **Clé de sécurité**, afin d'enregistrer votre Seedkeeper PRO.

### Étape 7 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC.

### Étape 8 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

Shopify confirme la création de la passkey, et vous pouvez désormais vous connecter à votre interface avec votre Seedkeeper PRO plutôt qu'avec votre mot de passe.

## Gérer vos passkeys

Depuis la même page **Sécurité**, ouvrez la section **Clés d'accès** pour consulter vos passkeys enregistrées ou en retirer une dont vous ne vous servez plus.

## Ressources officielles Shopify

- [Utiliser les clés d'accès](https://help.shopify.com/fr/manual/your-account/logging-in/passkeys)
- [Résoudre les problèmes de connexion](https://help.shopify.com/fr/manual/your-account/logging-in/troubleshooting-login)

## FAQ

<details>
<summary>Ajouter une passkey supprime-t-il mon mot de passe Shopify ?</summary>

Non. Ajouter une passkey ne supprime ni ne modifie aucune méthode de connexion existante sur votre compte.

</details>

<details>
<summary>Puis-je ajouter une passkey pour plusieurs comptes collaborateurs ?</summary>

Oui - chaque personne ayant accès à l'interface Shopify peut enregistrer sa propre passkey de la même façon, sur son propre compte.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Quels autres services prennent en charge les passkeys avec ma Seedkeeper PRO ?</summary>

Beaucoup - voir [Amazon](/docs/tutorials/webshop/secure-amazon-with-a-passkey), [PayPal](/docs/tutorials/financial/secure-paypal-with-a-passkey) et [eBay](/docs/tutorials/webshop/secure-ebay-with-a-passkey) pour quelques exemples.

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
- [Comment sécuriser PayPal avec une passkey](/docs/tutorials/financial/secure-paypal-with-a-passkey)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
