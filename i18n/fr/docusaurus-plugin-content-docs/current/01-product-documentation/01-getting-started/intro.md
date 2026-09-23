---
title: "Seedkeeper : gestionnaire de mots de passe matériel et appareil à passkeys"
description: "Seedkeeper est un appareil open source - carte ou bague - qui stocke mots de passe, passkeys et codes OTP sur un secure element EAL6+, sans aucun cloud."
keywords: [Seedkeeper, gestionnaire de mots de passe matériel, clé de sécurité NFC, appareil passkey, Seedkeeper Classic ou PRO, stockage hors ligne]
sidebar_position: 1
sidebar_label: "Introduction"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ai-je besoin d'une connexion internet pour utiliser Seedkeeper ?", a: "Non. Seedkeeper ne dépend d'aucun cloud : l'appareil fonctionne entièrement hors ligne et ne communique qu'avec l'application compagnon, en NFC ou via un lecteur à contact."},
  {q: "Quelle est la différence entre Seedkeeper Classic et PRO ?", a: "La PRO reprend tout ce que fait la Classic, en y ajoutant les passkeys et la prise en charge de l'OTP/TOTP."},
  {q: "Par où commencer ?", a: "Le Guide de première configuration vous accompagne pour télécharger la bonne application et connecter votre appareil."},
]} />

<p class="doc-subtitle">Vos secrets, sur un appareil que vous tenez en main</p>

<div class="tldr">

Seedkeeper est un appareil de sécurité matériel open source - disponible en carte ou en bague - qui conserve vos mots de passe et, sur les modèles PRO, vos passkeys et vos codes OTP. Tout se passe sur l'appareil, à l'intérieur d'un secure element certifié EAL6+, sans aucune dépendance au cloud et sans collecte de données.

</div>

## Vue d'ensemble

Seedkeeper transforme un petit secure element certifié FIDO2 en appareil de sécurité autonome :

- **Gestionnaire de mots de passe** - conservez identifiants et notes sécurisées
- **Authentificateur de passkeys** (PRO uniquement) - connexion sans mot de passe via [FIDO2](/docs/glossary/fido2)
- **Générateur d'OTP** (PRO uniquement) - codes à deux facteurs hors ligne

Il n'y a ni compte applicatif, ni synchronisation cloud, ni collecte de données : vos secrets restent sur l'appareil physique et ne dialoguent avec les applications compagnons qu'en NFC ou via un lecteur à contact.

## Quelle Seedkeeper possédez-vous ?

| | Seedkeeper Classic | Seedkeeper PRO |
|---|---|---|
| Gestionnaire de mots de passe | Oui | Oui |
| Passkeys (FIDO2) | - | Oui |
| Codes OTP / TOTP | - | Oui |
| Formats | Carte, bague | Carte, bague |

Vous ne savez pas laquelle vous avez, ou vous vous demandez quoi télécharger ? Commencez par le [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide).

## Ce que contient cette documentation

- **Documentation produit** - configuration, gestionnaire de mots de passe, passkeys, OTP
- **Tutoriels** - guides service par service (Google, Microsoft et bien d'autres)
- **Security Academy** - ce que sont réellement les passkeys, FIDO2, l'OTP et les seed phrases
- **Guides de sécurité** - listes de contrôle et plans d'action concrets
- **Développeurs** - SDK et intégration
- **Entreprises** - déployer Seedkeeper à l'échelle d'une organisation
- **Dépannage** - appareils perdus, réinitialisations, récupération
- **Glossaire** - définitions rapides de chaque terme technique employé ici

## FAQ

<details>
<summary>Ai-je besoin d'une connexion internet pour utiliser Seedkeeper ?</summary>

Non. Seedkeeper ne dépend d'aucun cloud : l'appareil fonctionne entièrement hors ligne et ne communique qu'avec l'application compagnon, en NFC ou via un lecteur à contact.

</details>

<details>
<summary>Quelle est la différence entre Seedkeeper Classic et PRO ?</summary>

La PRO reprend tout ce que fait la Classic, en y ajoutant les passkeys et la prise en charge de l'OTP/TOTP. Voir [Quelle Seedkeeper possédez-vous ?](#quelle-seedkeeper-possédez-vous-) ci-dessus.

</details>

<details>
<summary>Par où commencer ?</summary>

Le [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide) vous accompagne pour télécharger la bonne application et connecter votre appareil.

</details>

## Articles liés

- [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide)
- [Téléchargements](/docs/product-documentation/getting-started/download)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password)
