---
title: "Comment sécuriser Dropbox avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey sur Dropbox, sur le web ou dans l'application mobile. Y compris les prérequis des comptes Business et Team."
keywords: [passkey dropbox, clé de sécurité dropbox, dropbox sans mot de passe, passkey dropbox business, dropbox FIDO2]
sidebar_position: 1
sidebar_label: "Sécuriser Dropbox avec une passkey"
tags: [dropbox, passkey, productivity]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Une passkey remplace-t-elle l'authentification à deux facteurs ?", a: "Se connecter avec une passkey satisfait l'étape 2FA pour cette connexion, mais Dropbox recommande de configurer la 2FA séparément également."},
  {q: "Toute mon équipe peut-elle utiliser les passkeys ?", a: "Uniquement si votre administrateur a activé la connexion par clé d'accès dans la console d'administration, et si votre équipe n'impose pas l'authentification unique."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui. Voir la stratégie de sauvegarde des passkeys pour la configuration recommandée."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "La passkey de votre téléphone est une vraie amélioration par rapport à un mot de passe, et elle ne coûte rien. La différence tient à l'endroit où réside la clé : synchronisée sur un compte cloud que vous devez sécuriser, ou sur un unique secure element sans voie d'export et sans personne d'autre dans la chaîne. Pour Dropbox, qui protège tous les fichiers que vous y stockez, cette distinction vaut généralement l'étape supplémentaire."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à Dropbox sans mot de passe</p>

<p class="platform-note">Mobile et Web</p>

<div class="tldr">

Depuis les paramètres de sécurité de Dropbox - sur le web ou dans l'application mobile - ajoutez une clé d'accès, choisissez une clé de sécurité plutôt que la biométrie intégrée de votre appareil, puis connectez votre Seedkeeper PRO pour l'enregistrer.

</div>

## Vue d'ensemble

Dropbox prend en charge les [passkeys](/docs/glossary/passkey) comme moyen de connexion plus rapide et plus sûr, disponible sur les formules Basic, Plus, Professional, Essentials, Family, et certaines formules Standard, Advanced, Business et Business Plus. Ce guide détaille l'enregistrement de votre Seedkeeper PRO comme passkey.

:::warning[Configurez aussi la 2FA, pour une protection complète]
Ajouter une passkey seule ne sécurise pas entièrement votre compte - Dropbox avertit toujours que sans [authentification à deux facteurs](https://help.dropbox.com/fr-fr/account-access/enable-2-factor-authentication) activée, quelqu'un pourrait encore se connecter avec votre seul mot de passe. Se connecter avec une passkey satisfait bien l'exigence de 2FA lorsque vous l'utilisez, mais configurez également la 2FA pour que votre compte reste protégé les fois où vous vous connectez avec un mot de passe.
:::

:::note[Comptes Business et Team]
Si votre équipe utilise Dropbox Business, un administrateur doit d'abord activer la **connexion par clé d'accès** depuis la console d'administration (Paramètres → Sécurité → Authentification) avant que les membres puissent créer ou utiliser des passkeys. Si votre équipe impose l'authentification unique (SSO) pour se connecter, les passkeys ne sont pas disponibles.
:::

<WhyHardware />

## Instructions pas à pas

## Sur dropbox.com

<div class="step-layout">

<div class="step-text">

### Étape 1 : se connecter et ouvrir les paramètres

Connectez-vous sur [dropbox.com](https://www.dropbox.com/login), cliquez sur votre avatar, puis sur **Paramètres**.

### Étape 2 : aller dans Sécurité

Cliquez sur l'onglet **Sécurité**.

### Étape 3 : ajouter une clé d'accès

Sous **Clés d'accès**, cliquez sur **Ajouter une clé d'accès** (ou **Gérer les clés d'accès** → **Ajouter une nouvelle clé d'accès** si vous en avez déjà une).

### Étape 4 : confirmer votre mot de passe

Saisissez le mot de passe de votre compte Dropbox et cliquez sur **Suivant**.

### Étape 5 : choisir une clé de sécurité plutôt que votre appareil

Votre navigateur vous propose de créer la passkey, en privilégiant généralement la biométrie de votre appareil ou un gestionnaire d'identifiants synchronisé. Cherchez plutôt une option du type **Utiliser un autre appareil** ou **Clé de sécurité**, afin d'enregistrer votre Seedkeeper PRO.

### Étape 6 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC.

### Étape 7 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

### Étape 8 : la nommer et enregistrer

Saisissez ou modifiez un nom pour votre clé d'accès, puis cliquez sur **Enregistrer**.

</div>

<div class="step-image">

</div>

</div>

## Dans l'application mobile Dropbox

1. Ouvrez l'application Dropbox et touchez l'icône de compte en bas à droite.
2. Touchez **Clés d'accès** (ou **Ajouter une nouvelle clé** si vous en avez déjà une).
3. Saisissez le mot de passe de votre compte Dropbox et touchez **Suivant**.
4. Cherchez **Autres options** ou **Clé de sécurité** plutôt que la biométrie proposée par défaut, puis connectez votre Seedkeeper PRO et saisissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).
5. Saisissez ou modifiez un nom, puis touchez **Terminé**.

Vous pouvez désormais utiliser votre Seedkeeper PRO pour vous connecter à Dropbox plutôt que votre mot de passe.

## Supprimer une passkey

Rendez-vous dans **Paramètres** → **Sécurité** → **Gérer les clés d'accès**, touchez l'icône de suppression à côté de la passkey à retirer, confirmez avec votre mot de passe, puis touchez **Supprimer**.

## Ressources officielles Dropbox

- [Utiliser une clé d'accès pour se connecter à votre compte](https://help.dropbox.com/fr-fr/account-access/passkey-log-in)

## FAQ

<details>
<summary>Une passkey remplace-t-elle l'authentification à deux facteurs ?</summary>

Se connecter avec une passkey satisfait l'étape 2FA pour cette connexion, mais Dropbox recommande de configurer la 2FA séparément également - voir l'avertissement dans la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Toute mon équipe peut-elle utiliser les passkeys ?</summary>

Uniquement si votre administrateur a activé la connexion par clé d'accès dans la console d'administration, et si votre équipe n'impose pas l'authentification unique. Voir [Comptes Business et Team](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

La passkey de votre téléphone est une vraie amélioration par rapport à un mot de passe, et elle ne coûte rien. La différence tient à l'endroit où réside la clé : synchronisée sur un compte cloud que vous devez sécuriser, ou sur un unique secure element sans voie d'export et sans personne d'autre dans la chaîne. Pour Dropbox, qui protège tous les fichiers que vous y stockez, cette distinction vaut généralement l'étape supplémentaire. Voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Comment sécuriser GitHub avec une passkey](/docs/tutorials/productivity/secure-github-with-a-passkey)
- [Comment sécuriser OpenAI et ChatGPT avec une passkey](/docs/tutorials/productivity/secure-openai-with-a-passkey)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
