---
title: "Réglages de l'appareil"
description: "Renommer l'appareil, vérifier la mémoire, contrôler son authenticité, changer le PIN et consulter les journaux - tout le menu Card's Information."
keywords: [réglages Seedkeeper, vérifier authenticité, changer PIN, mémoire appareil, Card's Information, renommer Seedkeeper]
sidebar_position: 6
sidebar_label: "Réglages de l'appareil"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je renommer mon appareil plus tard ?", a: "Oui, à tout moment depuis Card's Information."},
  {q: "Que se passe-t-il quand la mémoire de mon appareil est pleine ?", a: "Si vous tentez d'ajouter un secret alors que les 8 Ko de mémoire sont saturés, la notification NFC affiche un point d'exclamation rouge accompagné d'un message d'erreur."},
  {q: "Comment savoir si mon appareil est authentique ?", a: "Card's Information puis Verify Authenticity compare le certificat de votre appareil au certificat officiel de Satochip."},
  {q: "J'ai oublié mon PIN : puis-je quand même le changer ?", a: "Non. Changer votre PIN exige de connaître le PIN actuel. Si vous l'avez oublié, la seule option est de réinitialiser l'appareil, ce qui l'efface entièrement."},
]} />

<p class="doc-subtitle">Tout ce que le menu de l'application permet de gérer</p>

<div class="tldr">

Au-delà des mots de passe, des passkeys et de l'OTP, le menu de l'application - icône à 3 points, en haut à droite - permet de nommer votre appareil, de vérifier l'occupation mémoire, de contrôler son authenticité, de changer votre PIN et de consulter les journaux, le tout sous **Card's Information**.

</div>

## Vue d'ensemble

Ouvrez le menu à 3 points (en haut à droite) pour accéder au menu principal de l'application. De là :

- **Card's Information** - renommer l'appareil, changer le PIN, vérifier l'authenticité, consulter les journaux
- **Make a Backup** - sauvegarder un appareil vers un autre (entrée de premier niveau, hors Settings)
- **Settings** - relancer les écrans d'introduction, activer le mode debug, ou réinitialiser l'appareil en état d'usine

<img src="/img/screenshots/overview-menu-mockup.png" alt="Menu principal de la Seedkeeper App" className="mockup-image" />

### Nommer votre appareil

Si vous possédez plusieurs cartes ou bagues, vous pouvez donner un nom à chacune pour les distinguer - utile dès que vous avez un équipement maître et un équipement secondaire, ou un mélange de Classic et de PRO. Rendez-vous dans **Card's Information** et modifiez le libellé.

<img src="/img/screenshots/naming-device-mockup.png" alt="Modification du libellé de la carte dans Card's Information" className="mockup-image" />

### Vérifier l'occupation mémoire

Votre appareil dispose de 8 Ko de mémoire, partagés entre tous les secrets qu'il contient. Vous pouvez consulter l'espace utilisé et le nombre de secrets stockés en haut de **Card's Information**, sous Seedkeeper status.

<img src="/img/screenshots/memory-status-mockup.png" alt="État Seedkeeper affichant l'occupation mémoire dans Card's Information" className="mockup-image" />

:::warning[Quand la mémoire est pleine]
Si vous tentez d'ajouter un secret alors que la mémoire est saturée, la notification NFC affiche un point d'exclamation rouge accompagné d'un message indiquant qu'il ne reste plus d'espace.
:::

### Vérifier l'authenticité

Rendez-vous dans **Card's Information** → **Verify Authenticity** pour confirmer que votre appareil provient bien de Satochip S.R.L. L'application compare le certificat qui a signé votre appareil au certificat officiel de Satochip.

<div class="download-row">

<div>
<img src="/img/screenshots/auth-success-mockup.png" alt="Authentification réussie" className="mockup-image" />
<p style={{textAlign: 'center', color: '#2eb872', fontWeight: 600}}>Authentification réussie</p>
</div>

<div>
<img src="/img/screenshots/auth-failed-mockup.png" alt="Authentification échouée" className="mockup-image" />
<p style={{textAlign: 'center', color: '#c43c3c', fontWeight: 600}}>Authentification échouée</p>
</div>

</div>

### Changer votre PIN

Rendez-vous dans **Card's Information** → **Change PIN**. Si vous connaissez encore votre PIN actuel, le changer n'affecte aucun de vos secrets enregistrés. Si vous ne le connaissez plus, voir [Problèmes de PIN et verrouillages](/docs/troubleshooting/pin-problems-and-lockouts). C'est différent de [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper), qui n'est nécessaire qu'en cas d'oubli complet du PIN et qui efface l'appareil.

<img src="/img/screenshots/changing-pin-mockup.png" alt="Changement du PIN dans Card's Information" className="mockup-image" />

### Consulter les journaux

Rendez-vous dans **Card's Information** → **View Logs** pour consulter le journal d'activité de votre appareil.

### Sauvegarder votre appareil

Touchez **Make a Backup** depuis le menu principal. Voir [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery) pour la procédure complète.

## FAQ

<details>
<summary>Puis-je renommer mon appareil plus tard ?</summary>

Oui, à tout moment depuis **Card's Information**. Voir [Nommer votre appareil](#nommer-votre-appareil) ci-dessus.

</details>

<details>
<summary>Que se passe-t-il quand la mémoire de mon appareil est pleine ?</summary>

Si vous tentez d'ajouter un secret alors que les 8 Ko de mémoire sont saturés, la notification NFC affiche un point d'exclamation rouge accompagné d'un message d'erreur - voir [Vérifier l'occupation mémoire](#vérifier-loccupation-mémoire) ci-dessus.

</details>

<details>
<summary>Comment savoir si mon appareil est authentique ?</summary>

**Card's Information** → **Verify Authenticity** compare le certificat de votre appareil au certificat officiel de Satochip. Voir [Vérifier l'authenticité](#vérifier-lauthenticité) ci-dessus.

</details>

<details>
<summary>J'ai oublié mon PIN : puis-je quand même le changer ?</summary>

Non. Changer votre PIN exige de connaître le PIN actuel. Si vous l'avez oublié, la seule option est [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper), ce qui efface l'appareil.

</details>

## Articles liés

- [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide)
- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
- [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
- [Qu'est-ce qu'un mot de passe ?](/docs/security-academy/password-security/what-is-a-password)
