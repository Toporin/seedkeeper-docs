---
title: "Comment sécuriser eBay avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey matérielle sur eBay et connectez-vous sans mot de passe. Guide pas à pas et conseils de gestion."
keywords: [passkey ebay, clé de sécurité ebay, connexion ebay sans mot de passe, ebay FIDO2]
sidebar_position: 3
sidebar_label: "Sécuriser eBay avec une passkey"
tags: [ebay, passkey, webshop]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ajouter une passkey supprime-t-il mon mot de passe eBay ?", a: "Non. Vous pouvez continuer à vous connecter avec votre mot de passe quand vous le souhaitez."},
  {q: "Dois-je aussi activer la vérification en deux étapes ?", a: "eBay la recommande comme couche de sécurité supplémentaire. Elle fonctionne en parallèle des passkeys et couvre les cas où une passkey n'est pas utilisée pour se connecter."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui. Voir la stratégie de sauvegarde des passkeys pour la configuration recommandée."},
  {q: "Quels autres services prennent en charge les passkeys avec ma Seedkeeper PRO ?", a: "Beaucoup : Amazon, PayPal et Shopify en sont quelques-uns."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "La passkey de votre téléphone est une vraie amélioration par rapport à un mot de passe, et elle ne coûte rien. La différence tient à l'endroit où réside la clé : synchronisée sur un compte cloud que vous devez sécuriser, ou sur un unique secure element sans voie d'export et sans personne d'autre dans la chaîne. Pour eBay, qui protège votre historique d'achats et de ventes, cette distinction vaut généralement l'étape supplémentaire."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à eBay sans mot de passe</p>

<p class="platform-note">Web</p>

<div class="tldr">

Depuis les paramètres Connexion et sécurité de votre compte eBay, activez les clés d'accès, choisissez une clé de sécurité matérielle plutôt que la biométrie intégrée de votre appareil, puis connectez votre Seedkeeper PRO pour l'enregistrer.

</div>

## Vue d'ensemble

eBay prend en charge les [passkeys](/docs/glossary/passkey) comme alternative à votre mot de passe, en vous permettant de vous connecter par biométrie, schéma, code PIN, ou clé de sécurité matérielle comme votre Seedkeeper PRO. Ce guide détaille cette configuration.

<WhyHardware />

## Instructions pas à pas

### Étape 1 : se connecter à eBay

Ouvrez [ebay.fr](https://www.ebay.fr/) et connectez-vous avec votre adresse e-mail et votre mot de passe habituels.

### Étape 2 : ouvrir Connexion et sécurité

Rendez-vous dans **Mon compte** et sélectionnez **Connexion et sécurité**.

### Étape 3 : activer les clés d'accès

Repérez **Clés d'accès** et sélectionnez **Activer**.

### Étape 4 : ajouter une clé d'accès

Sur l'écran **Connectez-vous plus rapidement avec les clés d'accès**, sélectionnez **Ajouter une clé d'accès**.

### Étape 5 : choisir Autres options

Votre navigateur vous propose de créer la passkey, en privilégiant généralement la biométrie de votre appareil. Cherchez **Autres options** (ou une invite équivalente) pour enregistrer une clé de sécurité matérielle à la place.

### Étape 6 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC.

### Étape 7 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

eBay confirme la création de la passkey, et vous pouvez désormais vous connecter avec votre Seedkeeper PRO plutôt qu'avec votre mot de passe.

## Désactiver une passkey

Depuis la même page **Connexion et sécurité**, repérez l'entrée de la passkey et désactivez-la. eBay confirme par un message vous indiquant que la passkey a bien été retirée.

## Ressources officielles eBay

- [Se connecter à votre compte avec une clé d'accès](https://www.ebay.fr/help/account/signing-account/signing-account?id=4189)
- [Conseils pour sécuriser votre compte eBay](https://www.ebay.fr/help/account/protecting-account/tips-keeping-ebay-account-secure?id=4872)

## FAQ

<details>
<summary>Ajouter une passkey supprime-t-il mon mot de passe eBay ?</summary>

Non. Vous pouvez continuer à vous connecter avec votre mot de passe quand vous le souhaitez.

</details>

<details>
<summary>Dois-je aussi activer la vérification en deux étapes ?</summary>

eBay la recommande comme couche de sécurité supplémentaire. Elle fonctionne en parallèle des passkeys et couvre les cas où une passkey n'est pas utilisée pour se connecter.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Quels autres services prennent en charge les passkeys avec ma Seedkeeper PRO ?</summary>

Beaucoup - voir [Amazon](/docs/tutorials/webshop/secure-amazon-with-a-passkey), [PayPal](/docs/tutorials/financial/secure-paypal-with-a-passkey) et [Shopify](/docs/tutorials/webshop/secure-shopify-with-a-passkey) pour quelques exemples.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

La passkey de votre téléphone est une vraie amélioration par rapport à un mot de passe, et elle ne coûte rien. La différence tient à l'endroit où réside la clé : synchronisée sur un compte cloud que vous devez sécuriser, ou sur un unique secure element sans voie d'export et sans personne d'autre dans la chaîne. Pour eBay, qui protège votre historique d'achats et de ventes, cette distinction vaut généralement l'étape supplémentaire. Voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Comment sécuriser Amazon avec une passkey](/docs/tutorials/webshop/secure-amazon-with-a-passkey)
- [Comment sécuriser PayPal avec une passkey](/docs/tutorials/financial/secure-paypal-with-a-passkey)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
