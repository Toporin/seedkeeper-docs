---
title: "Comment sécuriser OpenAI et ChatGPT avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey sur votre compte OpenAI et connectez-vous à ChatGPT sans mot de passe. Y compris l'éligibilité des comptes."
keywords: [passkey openai, passkey chatgpt, clé de sécurité chatgpt, openai sans mot de passe, sécurité compte chatgpt]
sidebar_position: 3
sidebar_label: "Sécuriser OpenAI avec une passkey"
tags: [openai, chatgpt, passkey, productivity]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Pourquoi l'option d'ajout de clé d'accès n'apparaît-elle pas ?", a: "La disponibilité dépend de la configuration de votre compte : les comptes sans adresse e-mail, ou gérés par l'authentification unique d'une organisation, n'affichent pas cette option de la même façon."},
  {q: "Ajouter une passkey supprime-t-il mon mot de passe ?", a: "Non. Si vous préférez vous connecter avec votre mot de passe, sélectionnez Essayer une autre méthode lors de la connexion."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui. Voir la stratégie de sauvegarde des passkeys pour la configuration recommandée."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Les deux résistent au phishing : la question porte donc sur ce dont dépendent vos identifiants. Une passkey synchronisée dépend d'une entreprise et d'un compte que vous détenez chez elle. Une passkey matérielle dépend d'un objet dans votre poche, et de rien d'autre. Comme OpenAI protège votre historique de conversations et votre accès à l'API, retirer le tiers de la chaîne est généralement tout l'intérêt."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à ChatGPT sans mot de passe</p>

<p class="platform-note">Web</p>

<div class="tldr">

Depuis les paramètres de sécurité de ChatGPT, ajoutez une clé d'accès, choisissez une clé de sécurité plutôt que la biométrie intégrée de votre appareil, puis connectez votre Seedkeeper PRO pour l'enregistrer.

</div>

## Vue d'ensemble

OpenAI prend en charge les [passkeys](/docs/glossary/passkey) - y compris les clés de sécurité matérielles - comme moyen sûr et pratique de vous connecter à votre compte OpenAI sans mot de passe. Ce guide détaille l'enregistrement de votre Seedkeeper PRO comme passkey.

:::note[Pas disponible sur tous les comptes]
La disponibilité des clés d'accès dépend de la façon dont votre compte a été créé. Si votre compte n'a pas d'adresse e-mail, ou s'il est géré par une organisation utilisant l'authentification unique (SSO), l'option Clés d'accès n'apparaîtra pas de la même façon dans les paramètres de sécurité - voir la FAQ ci-dessous.
:::

<WhyHardware />

## Instructions pas à pas

### Étape 1 : se connecter à ChatGPT sur le web

### Étape 2 : ouvrir les paramètres

### Étape 3 : aller dans Sécurité

### Étape 4 : ajouter une clé d'accès

Sous **Clés d'accès**, sélectionnez **Ajouter une clé d'accès** et suivez les instructions à l'écran.

### Étape 5 : choisir une clé de sécurité plutôt que votre appareil

La biométrie de votre appareil ou un gestionnaire d'identifiants synchronisé vous sont proposés par défaut. Cherchez plutôt une option du type **Utiliser un autre appareil** ou **Clé de sécurité**, afin d'enregistrer votre Seedkeeper PRO.

### Étape 6 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC.

### Étape 7 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

Une fois configurée, votre Seedkeeper PRO devient la méthode de connexion par défaut après la saisie de votre adresse e-mail - sans mot de passe ni code MFA distinct.

## Gérer vos passkeys

Rendez-vous dans **Paramètres** → **Sécurité** → **Clés d'accès** pour ajouter une autre passkey ou en retirer une existante.

:::note[Sécurité avancée du compte]
Si vous activez la sécurité avancée du compte, OpenAI exige au moins deux méthodes de connexion sécurisées, dont une qui fonctionne sur plusieurs appareils (comme une passkey synchronisée ou une clé de sécurité). Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour une configuration recommandée avec plusieurs Seedkeeper PRO.
:::

## Ressources officielles OpenAI

- [Passkeys to secure your OpenAI account](https://help.openai.com/en/articles/20001039-passkeys-to-secure-your-openai-account)

## FAQ

<details>
<summary>Pourquoi l'option d'ajout de clé d'accès n'apparaît-elle pas ?</summary>

La disponibilité dépend de la configuration de votre compte - les comptes sans adresse e-mail, ou gérés par l'authentification unique d'une organisation, n'affichent pas cette option de la même façon. Voir la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Ajouter une passkey supprime-t-il mon mot de passe ?</summary>

Non. Si vous préférez vous connecter avec votre mot de passe, sélectionnez **Essayer une autre méthode** lors de la connexion.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Oui - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Les deux résistent au phishing : la question porte donc sur ce dont dépendent vos identifiants. Une passkey synchronisée dépend d'une entreprise et d'un compte que vous détenez chez elle. Une passkey matérielle dépend d'un objet dans votre poche, et de rien d'autre. Comme OpenAI protège votre historique de conversations et votre accès à l'API, retirer le tiers de la chaîne est généralement tout l'intérêt. Voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
