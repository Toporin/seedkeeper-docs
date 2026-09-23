---
title: "Comment sécuriser Binance avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey sur Binance et connectez-vous sans mot de passe. Guide application mobile, différences iOS et Android."
keywords: [passkey binance, clé de sécurité binance, 2FA matérielle binance, binance sans mot de passe, sécurité plateforme crypto]
sidebar_position: 2
sidebar_label: "Sécuriser Binance avec une passkey"
tags: [binance, passkey, financial]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ce guide vaut-il aussi pour le site web Binance ?", a: "Le principe est le même, mais les étapes exactes diffèrent de celles de l'application. Consultez la ressource officielle pour le parcours sur ordinateur."},
  {q: "Ajouter une passkey supprime-t-il mon mot de passe Binance ?", a: "Non. Votre mot de passe reste disponible comme méthode de connexion aux côtés de votre passkey."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui. Voir la stratégie de sauvegarde des passkeys pour la configuration recommandée."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Les deux résistent au phishing : la question porte donc sur ce dont dépendent vos identifiants. Une passkey synchronisée dépend d'une entreprise et d'un compte que vous détenez chez elle. Une passkey matérielle dépend d'un objet dans votre poche, et de rien d'autre. Comme Binance protège vos avoirs et vos retraits, retirer le tiers de la chaîne est généralement tout l'intérêt."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à Binance sans mot de passe</p>

<p class="platform-note">Mobile et Web</p>

<div class="tldr">

Depuis les paramètres de sécurité de l'application Binance, ajoutez une clé d'accès, choisissez une clé de sécurité plutôt que la biométrie intégrée de votre appareil, puis connectez votre Seedkeeper PRO pour l'enregistrer.

</div>

## Vue d'ensemble

Binance prend en charge les [passkeys](/docs/glossary/passkey) pour vérifier votre identité sur la plupart des fonctions du compte, y compris la [2FA](/docs/glossary/2fa), offrant une connexion plus rapide et plus sûre qu'un mot de passe seul. Binance le propose à la fois dans son application mobile et sur le site web - **ce guide couvre spécifiquement l'application mobile**, car c'est elle que suivent les étapes et les captures ci-dessous. Le parcours web suit le même esprit (Sécurité → Clés d'accès → Ajouter une clé d'accès), mais les écrans diffèrent - consultez la ressource officielle ci-dessous si vous configurez cela depuis un navigateur.

:::note[Prérequis]
Les clés d'accès nécessitent l'application Binance 2.60 ou ultérieure, avec iOS 16+ ou Android 9+.
:::

<WhyHardware />

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : ouvrir l'application Binance et aller dans l'espace compte

Touchez la section profil en haut, puis rendez-vous dans **Sécurité**.

### Étape 2 : ajouter une clé d'accès

Touchez **Clés d'accès (biométrie)**, puis **Ajouter une clé d'accès**. Il peut vous être demandé de vous vérifier au préalable avec une passkey existante ou une méthode 2FA.

### Étape 3 : confirmer votre compte

Vérifiez que la fenêtre affiche bien l'adresse e-mail de votre compte Binance, touchez **Continuer**, puis choisissez une méthode de vérification.

### Étape 4 : choisir une clé de sécurité plutôt que votre appareil

La biométrie de votre appareil ou un gestionnaire d'identifiants synchronisé vous sont proposés par défaut.

- **Sur iOS** : touchez **Autres options**, puis sélectionnez **Clé de sécurité**.
- **Sur Android** : choisissez l'option NFC ou USB, selon le type de connexion de votre Seedkeeper PRO.

### Étape 5 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou maintenez-la près du haut de votre téléphone pour le NFC.

### Étape 6 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

Binance confirme que la passkey a bien été ajoutée à votre compte.

</div>

<div class="step-image">

<img src="/img/gifs/binance-passkey-iphone-mockup.gif" alt="Ajout d'une passkey à Binance avec une Seedkeeper PRO" className="mockup-image" />

</div>

</div>

## Gérer vos passkeys

Dans l'application Binance, touchez l'icône **Modifier** à côté d'une passkey pour la renommer, ou l'icône **Supprimer** pour la retirer - il vous faudra vous vérifier avec une passkey ou une méthode 2FA pour confirmer la suppression.

## Ressources officielles Binance

- [Comment créer une clé d'accès pour mon compte Binance ?](https://www.binance.com/fr/support/faq/detail/2aec8fe0437242f2a5fbef9cdb71d4c2)

## FAQ

<details>
<summary>Ce guide vaut-il aussi pour le site web Binance ?</summary>

Le principe est le même, mais les étapes exactes diffèrent de celles de l'application. Voir la [Vue d'ensemble](#vue-densemble) ci-dessus, ou la ressource officielle pour le parcours sur ordinateur.

</details>

<details>
<summary>Ajouter une passkey supprime-t-il mon mot de passe Binance ?</summary>

Non. Votre mot de passe reste disponible comme méthode de connexion aux côtés de votre passkey.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Les deux résistent au phishing : la question porte donc sur ce dont dépendent vos identifiants. Une passkey synchronisée dépend d'une entreprise et d'un compte que vous détenez chez elle. Une passkey matérielle dépend d'un objet dans votre poche, et de rien d'autre. Comme Binance protège vos avoirs et vos retraits, retirer le tiers de la chaîne est généralement tout l'intérêt. Voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Comment sécuriser Kraken avec une passkey](/docs/tutorials/financial/secure-kraken-with-a-passkey)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
