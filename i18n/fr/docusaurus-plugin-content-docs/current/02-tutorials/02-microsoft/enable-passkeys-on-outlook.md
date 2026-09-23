---
title: "Comment activer les passkeys sur Outlook"
description: "Enregistrez votre Seedkeeper PRO comme passkey sur votre compte Microsoft et connectez-vous à Outlook sans mot de passe. Guide pas à pas."
keywords: [passkey outlook, passkey compte microsoft, clé de sécurité microsoft, FIDO2 microsoft, connexion sans mot de passe outlook]
sidebar_position: 1
sidebar_label: "Activer les passkeys sur Outlook"
tags: [microsoft, outlook, passkey]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Dois-je avoir un PIN avant de commencer ?", a: "Non. Vous en définirez un pendant cette procédure si vous n'en avez pas déjà un."},
  {q: "Cela supprime-t-il le mot de passe de mon compte Microsoft ?", a: "Non. Ajouter une passkey ne supprime ni ne modifie aucune méthode de connexion ou de récupération existante sur votre compte. Pour le retirer entièrement par la suite, voir l'article dédié."},
  {q: "Comment supprimer une passkey par la suite ?", a: "Depuis les options de sécurité avancées de votre compte Microsoft, ouvrez la passkey concernée et cliquez sur Supprimer."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Les deux résistent au phishing : la question porte donc sur ce dont dépendent vos identifiants. Une passkey synchronisée dépend d'une entreprise et d'un compte que vous détenez chez elle. Une passkey matérielle dépend d'un objet dans votre poche, et de rien d'autre. Comme Outlook protège votre boîte mail, qui est la voie de réinitialisation de presque tout le reste, retirer le tiers de la chaîne est généralement tout l'intérêt."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à Outlook sans mot de passe</p>

<p class="platform-note">Mobile et Web</p>

<div class="tldr">

Depuis les options de sécurité avancées de votre compte Microsoft, ajoutez une nouvelle méthode de connexion, choisissez Clé de sécurité, puis enregistrez votre Seedkeeper PRO comme passkey.

</div>

## Vue d'ensemble

Les comptes Microsoft - utilisés par Outlook, Microsoft 365 et les autres services Microsoft - prennent en charge les [passkeys](/docs/glossary/passkey) comme remplacement du mot de passe. Ce guide détaille l'enregistrement de votre Seedkeeper PRO comme passkey. Voici à quoi ressemble le parcours complet :

<img src="/img/gifs/outlook-passkey-browser-mockup.gif" alt="Activation d'une passkey sur Outlook avec une Seedkeeper PRO" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

<WhyHardware />

## Instructions pas à pas

### Étape 1 : ouvrir les options de sécurité avancées

Rendez-vous sur les [options de sécurité avancées du compte Microsoft](https://account.live.com/proofs/manage).

### Étape 2 : se connecter

Connectez-vous avec le compte Microsoft que vous utilisez pour Outlook.

### Étape 3 : ajouter une nouvelle méthode de connexion

Sous vos méthodes de connexion ou de sécurité, cliquez sur **Ajouter une nouvelle méthode de connexion à votre compte**.

### Étape 4 : choisir Visage, empreinte digitale, code PIN ou clé de sécurité

Cliquez sur cette option.

### Étape 5 : choisir Clé de sécurité

Votre système vous demande où enregistrer votre passkey. Sélectionnez **Clé de sécurité**.

### Étape 6 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC.

### Étape 7 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

Votre compte Microsoft est désormais protégé par une passkey conservée sur votre Seedkeeper PRO.

## Gérer votre passkey

Cliquez sur une passkey enregistrée pour voir ses détails : date d'ajout, date de dernière utilisation, et usage.

<img src="/img/screenshots/outlook-passkey-details.png" alt="Détails d'une passkey dans un compte Microsoft : nom, date d'ajout, dernière utilisation, usage" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

Vous pouvez aussi lui donner un nom plus parlant en cliquant sur **Renommer** - pratique si vous utilisez plusieurs Seedkeeper PRO, pour les distinguer d'un coup d'œil (par exemple « Seedkeeper PRO - Principal », « Bague secours », « Carte secours »).<br />
Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) si vous configurez plusieurs appareils.

### Supprimer une passkey

Pour retirer ou révoquer une passkey, cliquez sur **Supprimer**.

## Ressources officielles Microsoft

- [Créer et enregistrer une clé d'accès](https://support.microsoft.com/fr-fr/account-billing/create-and-save-a-passkey-e92cd3e0-11fa-4630-a5ea-3ccc0396b3d9)
- [Se connecter à votre compte avec une clé de sécurité](https://support.microsoft.com/fr-fr/security/sign-in-to-your-account-with-a-security-key)

## FAQ

<details>
<summary>Dois-je avoir un PIN avant de commencer ?</summary>

Non - vous en définirez un pendant cette procédure si vous n'en avez pas déjà un. Voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour le détail de ce PIN.

</details>

<details>
<summary>Cela supprime-t-il le mot de passe de mon compte Microsoft ?</summary>

Non. Ajouter une passkey ne supprime ni ne modifie aucune méthode de connexion ou de récupération existante sur votre compte. Pour le retirer entièrement par la suite, voir [Comment remplacer les mots de passe par des passkeys sur Outlook](/docs/tutorials/microsoft/replace-passwords-with-passkeys-on-outlook).

</details>

<details>
<summary>Comment supprimer une passkey par la suite ?</summary>

Voir [Supprimer une passkey](#supprimer-une-passkey) ci-dessus.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Les deux résistent au phishing : la question porte donc sur ce dont dépendent vos identifiants. Une passkey synchronisée dépend d'une entreprise et d'un compte que vous détenez chez elle. Une passkey matérielle dépend d'un objet dans votre poche, et de rien d'autre. Comme Outlook protège votre boîte mail, qui est la voie de réinitialisation de presque tout le reste, retirer le tiers de la chaîne est généralement tout l'intérêt. Voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Créer votre première passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
- [Comment remplacer les mots de passe par des passkeys sur Outlook](/docs/tutorials/microsoft/replace-passwords-with-passkeys-on-outlook)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
