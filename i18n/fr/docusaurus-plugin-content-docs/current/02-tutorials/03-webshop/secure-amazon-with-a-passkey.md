---
title: "Comment sécuriser Amazon avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey sur Amazon et connectez-vous sans mot de passe. Guide pas à pas et gestion de plusieurs appareils."
keywords: [passkey amazon, clé de sécurité amazon, se connecter à amazon sans mot de passe, amazon FIDO2, amazon sans mot de passe]
sidebar_position: 1
sidebar_label: "Sécuriser Amazon avec une passkey"
tags: [amazon, passkey, webshop]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ajouter une passkey supprime-t-il mon mot de passe Amazon ?", a: "Non. Amazon vous laisse continuer à vous connecter avec votre mot de passe si vous le préférez : une passkey est une option supplémentaire, pas un remplacement par défaut."},
  {q: "Puis-je configurer une passkey depuis l'application Amazon Shopping ?", a: "Pas pour en créer une nouvelle actuellement : utilisez un navigateur à la place."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui, depuis la même page Connexion et sécurité."},
  {q: "Quels autres services prennent en charge les passkeys avec ma Seedkeeper PRO ?", a: "Beaucoup : PayPal, eBay et Shopify en sont quelques-uns."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Les deux mettent le phishing en échec : la réponse honnête est que cela dépend de ce que vaut le compte. Une passkey synchronisée est recopiée sur tous les appareils de votre compte cloud, et ce compte devient la nouvelle cible. Une passkey Seedkeeper PRO existe sur une seule puce certifiée qui ne peut pas l'exporter, sans aucun fournisseur dans la chaîne - ce qui compte quand le compte protège vos commandes, vos cartes enregistrées et votre adresse de livraison."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à Amazon sans mot de passe</p>

<p class="platform-note">Mobile et Web</p>

<div class="tldr">

Depuis la page Connexion et sécurité de votre compte Amazon, configurez une passkey, choisissez d'enregistrer une clé de sécurité plutôt que la biométrie intégrée de votre appareil, puis connectez votre Seedkeeper PRO et saisissez votre PIN.

</div>

## Vue d'ensemble

Amazon prend en charge les [passkeys](/docs/glossary/passkey) comme alternative plus rapide et résistante au phishing à votre mot de passe. Ce guide détaille l'enregistrement de votre Seedkeeper PRO comme passkey, plutôt que de vous en remettre à la biométrie intégrée de votre téléphone ou de votre ordinateur.

:::note[La configuration d'une passkey nécessite actuellement un navigateur]
Amazon ne permet aujourd'hui de créer une nouvelle passkey que depuis un navigateur web, sur ordinateur ou mobile - pas directement depuis l'application Amazon Shopping. Une fois créée, la passkey fonctionne partout pour la connexion, y compris dans l'application.
:::

Voici à quoi ressemble le parcours complet :

<img src="/img/gifs/amazon-passkey-browser-mockup.gif" alt="Sécurisation d'Amazon avec une passkey et une Seedkeeper PRO" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

<WhyHardware />

## Instructions pas à pas

### Étape 1 : se connecter à Amazon

Ouvrez [amazon.fr](https://www.amazon.fr/) dans un navigateur et connectez-vous avec votre adresse e-mail et votre mot de passe habituels.

### Étape 2 : ouvrir votre profil de compte

Depuis **Votre compte**, sélectionnez **Connexion et sécurité**.

### Étape 3 : configurer votre passkey

Repérez l'entrée **Clés d'accès** et sélectionnez **Configurer**. Amazon affiche un court écran explicatif - sélectionnez de nouveau **Configurer** pour continuer.

### Étape 4 : choisir une clé de sécurité plutôt que votre appareil

Votre navigateur vous propose de créer la passkey, en privilégiant généralement la biométrie de votre appareil ou un gestionnaire d'identifiants synchronisé (comme Apple iCloud Keychain ou Google Password Manager). Cherchez plutôt une option du type **Utiliser un autre appareil** ou **Clé de sécurité**, afin d'enregistrer votre Seedkeeper PRO.

### Étape 5 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC.

### Étape 6 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

Amazon confirme la création de la passkey, et vous pouvez désormais vous connecter avec votre Seedkeeper PRO plutôt qu'avec votre mot de passe.

## Gérer vos passkeys

Depuis la même page **Connexion et sécurité**, sélectionnez **Modifier** à côté de Clés d'accès pour consulter vos passkeys enregistrées, en ajouter une autre (par exemple une Seedkeeper PRO de secours), ou en retirer une dont vous ne vous servez plus.

:::note
Vous ne pouvez enregistrer qu'une seule passkey par fournisseur de passkeys. Comme votre Seedkeeper PRO est une clé de sécurité matérielle distincte plutôt qu'un fournisseur synchronisé comme iCloud Keychain, vous pouvez en ajouter une par appareil physique.
:::

## Ressources officielles Amazon

- [À propos des clés d'accès](https://www.amazon.fr/gp/help/customer/display.html?nodeId=TPphmhSWBgcI9Ak87p)
- [Utiliser une clé d'accès sur plusieurs appareils](https://www.amazon.fr/gp/help/customer/display.html?nodeId=TsfzMlkp9pNh0GzriE)

## FAQ

<details>
<summary>Ajouter une passkey supprime-t-il mon mot de passe Amazon ?</summary>

Non. Amazon vous laisse continuer à vous connecter avec votre mot de passe si vous le préférez - une passkey est une option supplémentaire, pas un remplacement par défaut.

</details>

<details>
<summary>Puis-je configurer une passkey depuis l'application Amazon Shopping ?</summary>

Pas pour en créer une nouvelle actuellement - utilisez un navigateur à la place. Voir la note dans la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Oui - voir [Gérer vos passkeys](#gérer-vos-passkeys) ci-dessus, et [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Quels autres services prennent en charge les passkeys avec ma Seedkeeper PRO ?</summary>

Beaucoup - voir [PayPal](/docs/tutorials/financial/secure-paypal-with-a-passkey), [eBay](/docs/tutorials/webshop/secure-ebay-with-a-passkey) et [Shopify](/docs/tutorials/webshop/secure-shopify-with-a-passkey) pour quelques exemples.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Les deux mettent le phishing en échec : la réponse honnête est que cela dépend de ce que vaut le compte. Une passkey synchronisée est recopiée sur tous les appareils de votre compte cloud, et ce compte devient la nouvelle cible. Une passkey Seedkeeper PRO existe sur une seule puce certifiée qui ne peut pas l'exporter, sans aucun fournisseur dans la chaîne - ce qui compte quand le compte protège vos commandes, vos cartes enregistrées et votre adresse de livraison. Voir [Toutes les passkeys ne sont pas stockées de la même façon](/docs/security-academy/passkeys/passkey-vs-password#toutes-les-passkeys-ne-sont-pas-stockées-de-la-même-façon).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Comment sécuriser PayPal avec une passkey](/docs/tutorials/financial/secure-paypal-with-a-passkey)
- [Comment sécuriser eBay avec une passkey](/docs/tutorials/webshop/secure-ebay-with-a-passkey)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
