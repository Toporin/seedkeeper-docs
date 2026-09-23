---
title: "Comment sécuriser TikTok avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey dans l'application mobile TikTok et connectez-vous sans mot de passe. Guide pas à pas en NFC."
keywords: [passkey tiktok, clé de sécurité tiktok, tiktok sans mot de passe, clé de sécurité NFC tiktok]
sidebar_position: 1
sidebar_label: "Sécuriser TikTok avec une passkey"
tags: [tiktok, passkey, social-media]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ajouter une passkey supprime-t-il mon mot de passe TikTok ?", a: "Non. TikTok vous laisse conserver un mot de passe sur votre compte en parallèle d'une passkey."},
  {q: "Puis-je configurer une passkey TikTok depuis un ordinateur ?", a: "Non. La configuration d'une passkey n'est disponible que depuis l'application mobile TikTok."},
  {q: "Est-ce la même chose que la vérification en deux étapes de TikTok ?", a: "Non, il s'agit d'une fonctionnalité distincte, accessible sous Sécurité et autorisations puis Vérification en deux étapes, qui utilise une application d'authentification plutôt qu'une passkey."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui. Voir la stratégie de sauvegarde des passkeys pour la configuration recommandée."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Les deux mettent le phishing en échec : la réponse honnête est que cela dépend de ce que vaut le compte. Une passkey synchronisée est recopiée sur tous les appareils de votre compte cloud, et ce compte devient la nouvelle cible. Une passkey Seedkeeper PRO existe sur une seule puce certifiée qui ne peut pas l'exporter, sans aucun fournisseur dans la chaîne - ce qui compte quand le compte protège votre présence et votre audience."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à TikTok sans mot de passe</p>

<p class="platform-note">Mobile</p>

<div class="tldr">

Depuis les paramètres de compte de l'application TikTok, configurez une clé d'accès, choisissez une clé de sécurité plutôt que Face ID ou l'empreinte digitale, puis connectez votre Seedkeeper PRO pour l'enregistrer.

</div>

## Vue d'ensemble

TikTok prend en charge les [passkeys](/docs/glossary/passkey), mais uniquement via son application mobile - il n'existe actuellement aucun moyen d'en créer une depuis un navigateur d'ordinateur. Ce guide détaille l'enregistrement de votre Seedkeeper PRO comme passkey.

:::note[Application mobile uniquement]
La configuration d'une passkey n'est disponible que dans l'application mobile TikTok (iOS ou Android), pas sur ordinateur ni sur la version web de TikTok.
:::

<WhyHardware />

## Instructions pas à pas

### Étape 1 : ouvrir l'application TikTok et aller sur votre profil

### Étape 2 : ouvrir le menu

Touchez l'icône de menu (trois lignes) en haut à droite.

### Étape 3 : aller dans Paramètres et confidentialité

### Étape 4 : aller dans Compte

### Étape 5 : toucher Clé d'accès

### Étape 6 : configurer votre clé d'accès

Touchez **Configurer** (ou **Créer une clé d'accès**).

### Étape 7 : choisir une clé de sécurité plutôt que Face ID ou Touch ID

Votre téléphone vous propose de créer la passkey, en privilégiant généralement Face ID, Touch ID ou votre empreinte digitale. Cherchez plutôt une option du type **Autres options** ou **Clé de sécurité**, afin d'enregistrer votre Seedkeeper PRO.

### Étape 8 : connecter votre Seedkeeper PRO

Approchez votre Seedkeeper PRO du lecteur NFC de votre téléphone.

### Étape 9 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

TikTok confirme la création de la passkey, et vous pouvez désormais vous connecter avec votre Seedkeeper PRO plutôt qu'avec votre mot de passe.

## Ressources officielles TikTok

- [À propos des clés d'accès sur TikTok](https://www.tiktok.com/support/faq_detail?id=7581816994987776523)

## FAQ

<details>
<summary>Ajouter une passkey supprime-t-il mon mot de passe TikTok ?</summary>

Non. TikTok vous laisse conserver un mot de passe sur votre compte en parallèle d'une passkey.

</details>

<details>
<summary>Puis-je configurer une passkey TikTok depuis un ordinateur ?</summary>

Non - la configuration d'une passkey n'est disponible que depuis l'application mobile TikTok. Voir la note dans la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Est-ce la même chose que la vérification en deux étapes de TikTok ?</summary>

Non, il s'agit d'une fonctionnalité distincte (sous **Sécurité et autorisations** → **Vérification en deux étapes**), qui utilise une application d'authentification plutôt qu'une passkey.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Les deux mettent le phishing en échec : la réponse honnête est que cela dépend de ce que vaut le compte. Une passkey synchronisée est recopiée sur tous les appareils de votre compte cloud, et ce compte devient la nouvelle cible. Une passkey Seedkeeper PRO existe sur une seule puce certifiée qui ne peut pas l'exporter, sans aucun fournisseur dans la chaîne - ce qui compte quand le compte protège votre présence et votre audience. Voir [Toutes les passkeys ne sont pas stockées de la même façon](/docs/security-academy/passkeys/passkey-vs-password#toutes-les-passkeys-ne-sont-pas-stockées-de-la-même-façon).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
