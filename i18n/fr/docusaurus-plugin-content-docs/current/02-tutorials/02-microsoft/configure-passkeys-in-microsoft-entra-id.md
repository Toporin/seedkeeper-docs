---
title: "Comment configurer les passkeys dans Microsoft Entra ID"
description: "Enregistrez votre Seedkeeper PRO comme clé de sécurité FIDO2 sur un compte professionnel ou scolaire Microsoft Entra ID. Prérequis et guide pas à pas."
keywords: [passkey entra ID, clé de sécurité azure AD, FIDO2 entra, clé de sécurité FIDO2 entra ID, passkey compte professionnel, NIS2]
sidebar_position: 3
sidebar_label: "Configurer les passkeys dans Microsoft Entra ID"
tags: [microsoft, entra, passkey]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Que faire si je ne vois pas l'option Clé de sécurité ?", a: "Votre administrateur n'a peut-être pas encore activé la méthode Passkey (FIDO2), ou l'enregistrement en libre-service est désactivé."},
  {q: "Est-ce la même chose qu'une passkey de compte Microsoft ou Outlook personnel ?", a: "Non. Entra ID concerne les comptes professionnels ou scolaires, gérés par votre organisation."},
  {q: "Je suis administrateur : comment déployer cela à l'échelle de mon organisation ?", a: "Voir l'article consacré au déploiement de FIDO2 via Microsoft Entra ID."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Les deux mettent le phishing en échec : la réponse honnête est que cela dépend de ce que vaut le compte. Une passkey synchronisée est recopiée sur tous les appareils de votre compte cloud, et ce compte devient la nouvelle cible. Une passkey Seedkeeper PRO existe sur une seule puce certifiée qui ne peut pas l'exporter, sans aucun fournisseur dans la chaîne - ce qui compte quand le compte protège les systèmes de votre organisation."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Ajouter votre Seedkeeper PRO comme clé de sécurité à votre compte professionnel ou scolaire</p>

<p class="platform-note">Mobile et Web</p>

<div class="tldr">

Depuis votre page Informations de sécurité Microsoft Entra, ajoutez une nouvelle méthode de connexion, choisissez Clé de sécurité, puis enregistrez votre Seedkeeper PRO comme passkey FIDO2.

</div>

## Vue d'ensemble

**Microsoft Entra ID** (anciennement Azure AD) est la plateforme d'identité de Microsoft pour les comptes professionnels et scolaires - distincte d'un [compte Microsoft ou Outlook personnel](/docs/tutorials/microsoft/enable-passkeys-on-outlook). Les organisations s'en servent pour gérer les politiques de connexion et de sécurité de leurs utilisateurs. Si votre employeur ou votre établissement utilise Entra ID, vous pouvez y enregistrer votre Seedkeeper PRO comme clé de sécurité FIDO2, exactement comme une [passkey](/docs/glossary/passkey) sur un compte personnel.

:::note[Ce guide concerne votre propre compte]
Il traite de l'ajout d'une clé de sécurité à votre propre compte Entra ID. Si vous êtes administrateur informatique et cherchez à déployer des clés de sécurité FIDO2 à l'échelle d'une organisation, voir plutôt [Déployer les passkeys FIDO2 via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id).
:::

## Prérequis

- L'administrateur de votre organisation doit avoir activé la [méthode d'authentification Passkey (FIDO2)](https://learn.microsoft.com/fr-fr/entra/identity/authentication/how-to-authentication-passkeys-fido2) dans le centre d'administration Microsoft Entra.
- L'enregistrement en libre-service doit être autorisé pour votre compte.

Si l'un de ces deux points n'est pas rempli, adressez-vous à votre administrateur informatique - voir [Déployer les passkeys FIDO2 via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id) pour ce à quoi ressemble cette configuration de son côté.

<WhyHardware />

## Instructions pas à pas

### Étape 1 : ouvrir votre page Informations de sécurité

Rendez-vous sur votre page **Informations de sécurité** Microsoft Entra dans un navigateur web.

### Étape 2 : se connecter

Connectez-vous avec votre méthode d'authentification actuelle (mot de passe, MFA, etc.).

### Étape 3 : ajouter une méthode de connexion

Cliquez sur **Ajouter une méthode** (ou **Ajouter une méthode de connexion**).

### Étape 4 : choisir Clé de sécurité

Sélectionnez **Clé de sécurité** (ou **Passkey**) dans la liste déroulante.

### Étape 5 : continuer

Cliquez sur **Ajouter** ou **Suivant**.

### Étape 6 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO si vous utilisez un lecteur à contact, ou approchez-la d'un lecteur NFC.

### Étape 7 : définir ou saisir votre PIN

Suivez les invites à l'écran pour définir (ou saisir) votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin), puis confirmez par un contact physique avec votre appareil.

### Étape 8 : nommer votre clé

Donnez à votre clé un nom parlant pour la reconnaître plus tard, puis terminez l'enregistrement.

Votre Seedkeeper PRO est désormais enregistrée comme clé de sécurité sur votre compte Microsoft Entra ID.

## Ressources officielles Microsoft

- [Enregistrer une passkey avec une clé de sécurité](https://learn.microsoft.com/fr-fr/entra/identity/authentication/how-to-register-passkey-with-security-key)
- [Configurer une clé de sécurité comme méthode de vérification](https://support.microsoft.com/fr-fr/accounts-billing/work-school/set-up-a-security-key-as-your-verification-method)
- [Se connecter à votre compte avec une clé de sécurité](https://learn.microsoft.com/fr-fr/entra/identity/authentication/how-to-security-key-sign-in)

## FAQ

<details>
<summary>Que faire si je ne vois pas l'option Clé de sécurité ?</summary>

Votre administrateur n'a peut-être pas encore activé la méthode Passkey (FIDO2), ou l'enregistrement en libre-service est désactivé. Voir [Prérequis](#prérequis) ci-dessus.

</details>

<details>
<summary>Est-ce la même chose qu'une passkey de compte Microsoft ou Outlook personnel ?</summary>

Non - Entra ID concerne les comptes professionnels ou scolaires, gérés par votre organisation. Voir la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Je suis administrateur : comment déployer cela à l'échelle de mon organisation ?</summary>

Voir [Déployer les passkeys FIDO2 via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id).

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Les deux mettent le phishing en échec : la réponse honnête est que cela dépend de ce que vaut le compte. Une passkey synchronisée est recopiée sur tous les appareils de votre compte cloud, et ce compte devient la nouvelle cible. Une passkey Seedkeeper PRO existe sur une seule puce certifiée qui ne peut pas l'exporter, sans aucun fournisseur dans la chaîne - ce qui compte quand le compte protège les systèmes de votre organisation. Voir [Toutes les passkeys ne sont pas stockées de la même façon](/docs/security-academy/passkeys/passkey-vs-password#toutes-les-passkeys-ne-sont-pas-stockées-de-la-même-façon).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Déployer les passkeys FIDO2 via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
- [Les passkeys et NIS2](/docs/security-academy/passkeys/passkey-vs-password#les-passkeys-et-nis2)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Déployer Seedkeeper PRO dans votre organisation](/docs/business/deploying-seedkeeper-pro-in-your-organization)
- [Sécurité et conformité pour les organisations](/docs/business/security-compliance-for-organizations)
- [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer)
