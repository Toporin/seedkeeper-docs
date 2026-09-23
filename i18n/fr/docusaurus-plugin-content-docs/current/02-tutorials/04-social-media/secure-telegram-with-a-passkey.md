---
title: "Comment sécuriser Telegram avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey sur Telegram Desktop. Inclut la règle d'attente de 24 heures et pourquoi le mobile n'est pas pris en charge."
keywords: [passkey telegram, clé de sécurité telegram, passkey telegram desktop, telegram sans mot de passe]
sidebar_position: 5
sidebar_label: "Sécuriser Telegram avec une passkey"
tags: [telegram, passkey, social-media]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Pourquoi ne puis-je pas créer une clé d'accès juste après m'être connecté ?", a: "Telegram impose une attente de 24 heures sur les appareils nouvellement connectés, par précaution de sécurité."},
  {q: "Puis-je configurer cela depuis l'application mobile Telegram ?", a: "Pas actuellement pour une clé de sécurité matérielle : utilisez Telegram Desktop à la place."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui. Voir la stratégie de sauvegarde des passkeys pour la configuration recommandée."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "La passkey de votre téléphone est une vraie amélioration par rapport à un mot de passe, et elle ne coûte rien. La différence tient à l'endroit où réside la clé : synchronisée sur un compte cloud que vous devez sécuriser, ou sur un unique secure element sans voie d'export et sans personne d'autre dans la chaîne. Pour Telegram, qui protège vos messages et vos contacts, cette distinction vaut généralement l'étape supplémentaire."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à Telegram sans mot de passe</p>

<p class="platform-note">Desktop</p>

<div class="tldr">

Depuis les paramètres Confidentialité et sécurité de Telegram Desktop, ajoutez une clé d'accès et enregistrez votre Seedkeeper PRO comme clé de sécurité matérielle - mais seulement après avoir attendu 24 heures depuis votre dernière connexion sur cet appareil.

</div>

## Vue d'ensemble

Telegram permet d'enregistrer une clé de sécurité matérielle comme votre Seedkeeper PRO en tant que [passkey](/docs/glossary/passkey) - mais uniquement via **Telegram Desktop** (et probablement la version web). Sur mobile, les jetons matériels externes ne peuvent actuellement pas être enregistrés du tout.

Voici à quoi ressemble le parcours complet :

:::warning[Attente de 24 heures après connexion]
Par mesure de sécurité contre les prises de contrôle de comptes, Telegram exige que vous attendiez **24 heures** après vous être connecté sur un appareil avant de pouvoir y créer une clé d'accès. Si vous venez de vous connecter, revenez le lendemain pour terminer.
:::

:::note[Imperfections connues]
À l'heure où ces lignes sont écrites, certains utilisateurs rapportent que l'entrée de la clé d'accès s'affiche sans nom dans l'interface et ne peut pas être renommée - cela n'affecte pas son fonctionnement, seulement son libellé dans votre liste.
:::

<WhyHardware />

## Instructions pas à pas

### Étape 1 : ouvrir Telegram Desktop

### Étape 2 : ouvrir le menu

Cliquez sur l'icône de menu (☰) en haut à gauche.

### Étape 3 : aller dans Paramètres

### Étape 4 : aller dans Confidentialité et sécurité

### Étape 5 : ouvrir Clés d'accès

### Étape 6 : ajouter une clé d'accès

Sélectionnez **Ajouter une clé d'accès**.

### Étape 7 : choisir une clé de sécurité

Votre navigateur ou votre système vous propose de créer la passkey, en privilégiant généralement un gestionnaire d'identifiants synchronisé. Cherchez plutôt une option du type **Clé de sécurité** ou **Utiliser un autre appareil**, afin d'enregistrer votre Seedkeeper PRO.

### Étape 8 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC.

### Étape 9 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

Telegram confirme la création de la passkey, et vous pouvez désormais vous connecter avec votre Seedkeeper PRO plutôt qu'avec un code SMS.

## Ressources officielles Telegram

- [Activer les clés d'accès sur Telegram Desktop](https://telegram.org/blog/passkeys-and-gift-offers?ln=r)

## FAQ

<details>
<summary>Pourquoi ne puis-je pas créer une clé d'accès juste après m'être connecté ?</summary>

Telegram impose une attente de 24 heures sur les appareils nouvellement connectés, par précaution de sécurité. Voir l'avertissement dans la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Puis-je configurer cela depuis l'application mobile Telegram ?</summary>

Pas actuellement pour une clé de sécurité matérielle - utilisez Telegram Desktop à la place. Voir la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

La passkey de votre téléphone est une vraie amélioration par rapport à un mot de passe, et elle ne coûte rien. La différence tient à l'endroit où réside la clé : synchronisée sur un compte cloud que vous devez sécuriser, ou sur un unique secure element sans voie d'export et sans personne d'autre dans la chaîne. Pour Telegram, qui protège vos messages et vos contacts, cette distinction vaut généralement l'étape supplémentaire. Voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
