---
title: "Comment remplacer les mots de passe par des passkeys sur Outlook"
description: "Supprimez entièrement le mot de passe de votre compte Microsoft avec l'option Compte sans mot de passe, ne laissant que votre passkey Seedkeeper PRO."
keywords: [compte microsoft sans mot de passe, supprimer mot de passe microsoft, outlook sans mot de passe, retirer mot de passe]
sidebar_position: 4
sidebar_label: "Remplacer les mots de passe par des passkeys sur Outlook"
tags: [microsoft, outlook, passkey]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je réactiver mon mot de passe plus tard ?", a: "Le réglage sans mot de passe de Microsoft peut généralement être annulé depuis la même section Sécurité supplémentaire si nécessaire."},
  {q: "Est-ce différent de ce que propose Google ?", a: "Oui. Google ne propose pas aujourd'hui la suppression complète du mot de passe."},
  {q: "Que se passe-t-il si je perds ma Seedkeeper PRO après être passé sans mot de passe ?", a: "Assurez-vous d'avoir d'abord enregistré un équipement secondaire."},
  {q: "Passer sans mot de passe est-il réellement plus sûr ?", a: "Oui, sur toutes les attaques qui compromettent réellement les comptes : phishing, credential stuffing, exposition par fuite et réutilisation cessent toutes de s'appliquer. La seule chose à anticiper est la récupération : enregistrez un second appareil avant de dépendre d'un seul."},
]} />

<p class="doc-subtitle">Supprimer votre mot de passe, pas seulement le contourner</p>

<p class="platform-note">Web</p>

<div class="tldr">

Contrairement à certains services, Microsoft permet de supprimer entièrement le mot de passe de votre compte. Activez « Compte sans mot de passe » dans vos paramètres de sécurité, et votre passkey Seedkeeper PRO devient le seul moyen d'entrer.

</div>

## Vue d'ensemble

Une fois une [passkey](/docs/glossary/passkey) Seedkeeper PRO configurée sur votre compte Microsoft, vous pouvez aller plus loin que ne le permettent la plupart des services : l'option **Compte sans mot de passe** de Microsoft retire entièrement le mot de passe du compte, au lieu de se contenter de faire de la passkey la méthode par défaut.

:::note[Il vous faut d'abord une passkey]
Ce guide suppose que vous avez déjà configuré une passkey avec votre Seedkeeper PRO. Si ce n'est pas le cas, commencez par [Comment activer les passkeys sur Outlook](/docs/tutorials/microsoft/enable-passkeys-on-outlook).
:::

Avant de changer quoi que ce soit, il vaut la peine de comprendre ce que cela vous apporte réellement : une passkey ne peut être ni hameçonnée, ni divulguée lors d'une fuite, ni réutilisée d'un site à l'autre, car il n'existe aucun secret partagé à aucun moment. Voir [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password) pour la comparaison complète, et [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer) pour les réserves à connaître au préalable.

## Instructions pas à pas

### Étape 1 : ouvrir les options de sécurité avancées

Rendez-vous sur les [options de sécurité avancées du compte Microsoft](https://account.live.com/proofs/manage).

### Étape 2 : se connecter

Connectez-vous avec le compte Microsoft que vous utilisez pour Outlook.

### Étape 3 : trouver Sécurité supplémentaire

Sous vos méthodes de connexion ou de sécurité, repérez la section **Sécurité supplémentaire**.

### Étape 4 : activer Compte sans mot de passe

À côté de **Compte sans mot de passe** (affiché sur **Désactivé**), cliquez sur **Activer**.

<img src="/img/screenshots/outlook-passwordless-account-toggle.png" alt="Interrupteur Compte sans mot de passe dans les paramètres de sécurité du compte Microsoft" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

Votre compte Microsoft n'a plus de mot de passe - votre passkey Seedkeeper PRO est désormais votre moyen de connexion.

## Ressources officielles Microsoft

- [Comment passer sans mot de passe avec votre compte Microsoft](https://support.microsoft.com/fr-fr/accounts-billing/security/how-to-go-passwordless-with-your-microsoft-account)

## FAQ

<details>
<summary>Puis-je réactiver mon mot de passe plus tard ?</summary>

Le réglage sans mot de passe de Microsoft peut généralement être annulé depuis la même section **Sécurité supplémentaire** si nécessaire.

</details>

<details>
<summary>Est-ce différent de ce que propose Google ?</summary>

Oui. Google ne propose pas aujourd'hui la suppression complète du mot de passe - voir [Comment remplacer les mots de passe par des passkeys sur Google](/docs/tutorials/google/replace-passwords-with-passkeys-on-google) pour la comparaison.

</details>

<details>
<summary>Que se passe-t-il si je perds ma Seedkeeper PRO après être passé sans mot de passe ?</summary>

Assurez-vous d'avoir d'abord enregistré un équipement secondaire - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

</details>

<details>
<summary>Passer sans mot de passe est-il réellement plus sûr ?</summary>

Oui, sur toutes les attaques qui compromettent réellement les comptes - phishing, credential stuffing, exposition par fuite et réutilisation cessent toutes de s'appliquer. La seule chose à anticiper est la récupération : enregistrez un second appareil avant de dépendre d'un seul. Voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Articles liés

- [Comment activer les passkeys sur Outlook](/docs/tutorials/microsoft/enable-passkeys-on-outlook)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Comment remplacer les mots de passe par des passkeys sur Google](/docs/tutorials/google/replace-passwords-with-passkeys-on-google)
- [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password)
- [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer)
