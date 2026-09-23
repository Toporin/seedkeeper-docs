---
title: "Comment remplacer les mots de passe par des passkeys sur Google"
description: "Faites de votre passkey Seedkeeper PRO la méthode de connexion par défaut à Google, avant votre mot de passe."
keywords: [remplacer mot de passe google, passkey par défaut google, ignorer mot de passe, connexion sans mot de passe google, Seedkeeper PRO]
sidebar_position: 3
sidebar_label: "Remplacer les mots de passe par des passkeys sur Google"
tags: [google, passkey]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je supprimer complètement mon mot de passe Google ?", a: "Non. Google ne propose pas aujourd'hui de moyen de retirer entièrement le mot de passe une fois qu'il existe sur votre compte. Activer l'option Ignorer le mot de passe si possible fait de votre passkey la méthode par défaut, mais le mot de passe demeure en repli."},
  {q: "Dois-je faire cela si je viens de créer ma passkey ?", a: "Probablement pas. Google a déployé ce réglage par défaut pour les comptes personnels. Vérifiez simplement qu'il est bien activé."},
  {q: "Cela affecte-t-il la validation en deux étapes ?", a: "Non. Votre passkey prouve déjà que vous avez accès à votre appareil, elle peut donc également couvrir la seconde étape de vérification lorsque celle-ci s'applique."},
]} />

<p class="doc-subtitle">Faire de votre passkey la méthode par défaut, pas une simple option</p>

<div class="tldr">

Une fois une [passkey](/docs/glossary/passkey) Seedkeeper PRO configurée sur Google, assurez-vous que l'option « Ignorer le mot de passe si possible » est activée - c'est elle qui fait de votre passkey la méthode de connexion par défaut à la place de votre mot de passe.

</div>

## Vue d'ensemble

« Remplacer » un mot de passe par une passkey chez Google ne signifie pas le supprimer : Google ne propose pas aujourd'hui de moyen de le retirer entièrement une fois qu'il existe sur votre compte. Ce que vous *pouvez* faire, c'est vous assurer que Google demande d'abord votre passkey, en sautant l'invite de mot de passe chaque fois que c'est possible. Depuis mars 2026, Google déploie ce réglage par défaut sur les comptes personnels, mais il vaut la peine de confirmer qu'il est bien activé.

:::note[Il vous faut d'abord une passkey]
Ce guide suppose que vous avez déjà configuré une passkey avec votre Seedkeeper PRO. Si ce n'est pas le cas, commencez par [Comment activer une passkey sur Google](/docs/tutorials/google/enable-passkey-on-google).
:::

## Instructions pas à pas

### Étape 1 : ouvrir votre compte Google

Rendez-vous sur [myaccount.google.com](https://myaccount.google.com/) et connectez-vous.

### Étape 2 : aller dans Sécurité et connexion

Dans le panneau de gauche, cliquez sur **Sécurité et connexion**.

### Étape 3 : trouver « Comment vous connecter à Google »

Faites défiler jusqu'à la section **Comment vous connecter à Google**.

### Étape 4 : vérifier « Ignorer le mot de passe si possible »

Assurez-vous que cet interrupteur est **activé**. Si vous avez configuré votre passkey récemment, il l'est probablement déjà par défaut - cette étape n'est qu'une confirmation.

<img src="/img/screenshots/skip-password-toggle-on.png" alt="Interrupteur Ignorer le mot de passe si possible, activé" className="doc-diagram" style={{maxWidth: '400px'}} />

Désormais, Google vous demandera d'abord votre passkey Seedkeeper PRO à la connexion, plutôt que votre mot de passe.

## Ressources officielles Google

- [Se connecter avec une clé d'accès au lieu d'un mot de passe](https://support.google.com/accounts/answer/13548313?hl=fr)

## FAQ

<details>
<summary>Puis-je supprimer complètement mon mot de passe Google ?</summary>

Non - Google ne propose pas aujourd'hui de moyen de retirer entièrement le mot de passe une fois qu'il existe sur votre compte. Activer « Ignorer le mot de passe si possible » fait de votre passkey la méthode par défaut, mais le mot de passe demeure en repli.

</details>

<details>
<summary>Dois-je faire cela si je viens de créer ma passkey ?</summary>

Probablement pas - Google a déployé ce réglage par défaut pour les comptes personnels. Vérifiez l'[Étape 4](#étape-4--vérifier--ignorer-le-mot-de-passe-si-possible-) ci-dessus pour confirmer.

</details>

<details>
<summary>Cela affecte-t-il la validation en deux étapes ?</summary>

Non - votre passkey prouve déjà que vous avez accès à votre appareil, elle peut donc également couvrir la seconde étape de vérification lorsque celle-ci s'applique.

</details>

## Articles liés

- [Comment activer une passkey sur Google](/docs/tutorials/google/enable-passkey-on-google)
- [Comment activer la 2FA (TOTP) sur Google](/docs/tutorials/google/enable-2fa-totp-on-google)
- [Utiliser vos passkeys sur plusieurs appareils](/docs/product-documentation/passkeys/using-passkeys-across-devices)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
