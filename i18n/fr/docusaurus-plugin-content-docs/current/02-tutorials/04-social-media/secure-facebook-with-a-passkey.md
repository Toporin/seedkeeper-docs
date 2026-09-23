---
title: "Comment sécuriser Facebook avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey sur Facebook et Messenger, sur mobile ou ordinateur. Jusqu'à 5 passkeys par compte Meta."
keywords: [passkey facebook, passkey meta, passkey messenger, clé de sécurité facebook, facebook sans mot de passe]
sidebar_position: 2
sidebar_label: "Sécuriser Facebook avec une passkey"
tags: [facebook, passkey, social-media]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ajouter une passkey supprime-t-il mon mot de passe Facebook ?", a: "Non. Votre mot de passe existe toujours et sert à vous connecter sur les appareils qui ne disposent pas de votre passkey."},
  {q: "La même passkey fonctionne-t-elle pour Messenger ?", a: "Oui. Facebook et Messenger partagent la même passkey une fois celle-ci configurée."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui, jusqu'à 5 passkeys par compte Meta."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Les deux résistent au phishing : la question porte donc sur ce dont dépendent vos identifiants. Une passkey synchronisée dépend d'une entreprise et d'un compte que vous détenez chez elle. Une passkey matérielle dépend d'un objet dans votre poche, et de rien d'autre. Comme Facebook protège votre compte Meta sur Facebook, Messenger et Instagram, retirer le tiers de la chaîne est généralement tout l'intérêt."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à Facebook sans mot de passe</p>

<p class="platform-note">Mobile et Web</p>

<div class="tldr">

Depuis l'Espace Comptes de Facebook - sur mobile ou sur ordinateur - créez une clé d'accès, choisissez une clé de sécurité matérielle, puis connectez votre Seedkeeper PRO pour l'enregistrer.

</div>

## Vue d'ensemble

Facebook prend en charge les [passkeys](/docs/glossary/passkey) dans ses applications comme sur le web, y compris les clés de sécurité matérielles comme votre Seedkeeper PRO. Vous pouvez créer jusqu'à 5 passkeys par compte Meta, ce qui laisse la place à un appareil principal et à deux secours. La même passkey fonctionne également pour Messenger.

Voici à quoi ressemble le parcours complet :

<img src="/img/gifs/facebook-passkey-browser-mockup.gif" alt="Connexion à Facebook avec une passkey" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

:::note[Prérequis sur ordinateur]
Pour configurer une passkey sur un ordinateur, il vous faut Windows 10, macOS Ventura, ChromeOS 109 ou une version ultérieure - ou, quelle que soit la version du système, une clé de sécurité matérielle compatible FIDO2 comme votre Seedkeeper PRO.
:::

<WhyHardware />

## Instructions pas à pas

### Étape 1 : ouvrir les paramètres de votre compte

Ouvrez Facebook (application ou web) et rendez-vous dans **Paramètres et confidentialité**, puis **Paramètres du compte Meta**.

### Étape 2 : ouvrir l'Espace Comptes

### Étape 3 : aller dans Mot de passe et sécurité

### Étape 4 : ouvrir Clé d'accès

### Étape 5 : créer une clé d'accès

Sélectionnez **Créer une clé d'accès**, puis confirmez avec votre mot de passe Facebook.

### Étape 6 : choisir une clé de sécurité plutôt que votre appareil

On vous propose de créer la passkey, en privilégiant généralement la biométrie de votre appareil ou un gestionnaire d'identifiants synchronisé. Cherchez plutôt une option du type **Autres options** ou **Clé de sécurité**, afin d'enregistrer votre Seedkeeper PRO.

### Étape 7 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC.

### Étape 8 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

Facebook confirme la création de la passkey, et vous pouvez désormais vous connecter avec votre Seedkeeper PRO plutôt qu'avec votre mot de passe.

## Ressources officielles Meta

- [À propos des clés d'accès Meta](https://www.facebook.com/help/401566786855239)

## Supprimer une passkey

Retournez dans **Clé d'accès** depuis l'Espace Comptes, puis sélectionnez **Supprimer** à côté de la passkey à retirer. Vous devrez ressaisir votre mot de passe pour confirmer.

## FAQ

<details>
<summary>Ajouter une passkey supprime-t-il mon mot de passe Facebook ?</summary>

Non. Votre mot de passe existe toujours et sert à vous connecter sur les appareils qui ne disposent pas de votre passkey.

</details>

<details>
<summary>La même passkey fonctionne-t-elle pour Messenger ?</summary>

Oui - Facebook et Messenger partagent la même passkey une fois celle-ci configurée.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Oui, jusqu'à 5 passkeys par compte Meta - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Les deux résistent au phishing : la question porte donc sur ce dont dépendent vos identifiants. Une passkey synchronisée dépend d'une entreprise et d'un compte que vous détenez chez elle. Une passkey matérielle dépend d'un objet dans votre poche, et de rien d'autre. Comme Facebook protège votre compte Meta sur Facebook, Messenger et Instagram, retirer le tiers de la chaîne est généralement tout l'intérêt. Voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
