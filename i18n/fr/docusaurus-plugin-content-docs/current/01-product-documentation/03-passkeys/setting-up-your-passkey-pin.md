---
title: "Définir votre PIN de passkey"
description: "Seedkeeper PRO utilise trois PIN indépendants, aux formats et règles de verrouillage différents. Comment définir le PIN FIDO qui protège vos passkeys."
keywords: [PIN FIDO, configuration PIN passkey, PIN Seedkeeper PRO, changer PIN FIDO, PIN applet FIDO2]
sidebar_position: 1
sidebar_label: "Définir votre PIN de passkey"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "J'ai déjà un PIN défini : comment le changer ?", a: "Suivez les mêmes étapes. Le bouton affiche Change PIN au lieu de Set PIN, et vous devrez saisir votre PIN actuel avant le nouveau."},
  {q: "Combien de PIN une Seedkeeper PRO comporte-t-elle ?", a: "Trois, et ils sont indépendants : le PIN du gestionnaire de mots de passe, le PIN FIDO qui protège vos passkeys, et un PIN d'accès OTP facultatif. Changer l'un n'affecte pas les autres, et chacun possède son propre compteur de tentatives."},
  {q: "Quelle longueur peut avoir un PIN FIDO, et peut-il contenir des lettres ?", a: "Le PIN FIDO est numérique, avec un minimum de quatre chiffres. C'est différent du PIN du gestionnaire de mots de passe, qui accepte 4 à 16 caractères. Les deux se définissent séparément et n'ont pas à être identiques."},
  {q: "Combien de tentatives incorrectes verrouillent l'appareil ?", a: "Huit échecs consécutifs verrouillent l'applet FIDO. Le PIN du gestionnaire de mots de passe est plus strict et verrouille après quatre. Chaque compteur est indépendant : les échecs sur l'un n'affectent pas l'autre."},
  {q: "Puis-je définir le PIN FIDO sans la Seedkeeper PRO App ?", a: "Oui. Windows et les navigateurs Chromium peuvent tous deux le définir et le changer nativement, car l'appareil implémente la gestion standard des credentials CTAP2."},
  {q: "Dois-je définir ce PIN avant de créer une passkey ?", a: "Oui, le PIN FIDO doit être défini au préalable."},
  {q: "Que se passe-t-il si j'oublie ce PIN ?", a: "Il n'existe aucune récupération. Perdre le PIN FIDO impose de réinitialiser l'applet FIDO, ce qui efface définitivement toutes les passkeys enregistrées sur l'appareil. Vos mots de passe et vos notes sécurisées ne sont pas touchés, car ils sont protégés par un PIN distinct."},
]} />

<p class="doc-subtitle">Protégez vos passkeys avec leur propre PIN dédié</p>

<div class="tldr">

Seedkeeper PRO utilise trois PIN indépendants : un pour le gestionnaire de mots de passe, un pour les passkeys (le PIN FIDO, traité ici), et un facultatif pour l'accès OTP. Définissez le PIN FIDO une fois, depuis le menu Configuration de la Seedkeeper PRO App, avant de créer votre première passkey.

</div>

## Vue d'ensemble

Seedkeeper PRO utilise **trois PIN indépendants**, et il vaut la peine de savoir lequel est lequel avant de commencer :

| PIN | Ce qu'il protège | Format | Tentatives avant verrouillage |
|---|---|---|---|
| **PIN du gestionnaire de mots de passe** | Mots de passe, notes sécurisées, seed phrases | 4 à 16 caractères | 4 |
| **PIN FIDO** | Vos passkeys | 4 chiffres minimum, numérique uniquement | 8 |
| **PIN d'accès OTP** *(facultatif)* | Consulter et générer les codes OTP | Défini par vous | - |

Le PIN du gestionnaire de mots de passe se définit pendant le [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide), le PIN FIDO ici, et le PIN d'accès OTP facultatif dans [Définir un PIN d'accès OTP](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin).

Ils sont entièrement distincts : changer l'un n'affecte pas les autres, et connaître l'un ne donne aucun accès aux autres. Cet article traite du deuxième - le PIN utilisé par l'applet [FIDO2](/docs/glossary/fido2) qui fait fonctionner vos [passkeys](/docs/glossary/passkey).

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : préparer le nécessaire

Il vous faut votre carte ou votre bague Seedkeeper PRO et la Seedkeeper PRO App installée.

### Étape 2 : ouvrir l'application et scanner votre appareil

Ouvrez la Seedkeeper PRO App, puis tirez vers le bas (iOS) ou touchez l'icône d'actualisation (Android) pour activer le NFC et scanner votre appareil. Vous arrivez sur la liste des codes OTP enregistrés sur votre appareil - vide s'il est neuf.

### Étape 3 : ouvrir le menu

Touchez le menu à 3 points en **haut à droite**.

### Étape 4 : aller dans le menu Configuration

Cliquez sur **Configuration** → **FIDO**, puis sur **Manage PIN**.

### Étape 5 : scanner votre appareil

Scannez à nouveau pour vérifier si un PIN FIDO existe déjà sur votre appareil.

### Étape 6 : définir (ou changer) votre PIN

Si aucun PIN n'est encore défini, touchez **Set PIN** et saisissez votre nouveau PIN deux fois (New et Verify).

Le PIN FIDO est **numérique**, avec un minimum de quatre chiffres. Plus long vaut mieux : quatre chiffres représentent dix mille possibilités, six chiffres un million, et l'appareil autorise huit tentatives avant de se verrouiller.

### Étape 7 : confirmer

Scannez votre Seedkeeper PRO une dernière fois pour enregistrer le PIN.

Une fois défini, vous pouvez passer à [Créer votre première passkey](/docs/product-documentation/passkeys/creating-your-first-passkey).

</div>

<div class="step-image">

<img src="/img/gifs/setting-up-passkey-pin-iphone-mockup.gif" alt="Définition du PIN de passkey dans la Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

## Définir le PIN depuis Windows

La Seedkeeper PRO App est une façon de définir le PIN FIDO, pas la seule. Parce que l'appareil implémente la gestion standard des credentials CTAP2, Windows et les navigateurs Chromium peuvent le faire nativement, sans rien installer - voir [Gérer vos passkeys depuis votre ordinateur](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer) pour la procédure complète, y compris le bouton de réinitialisation à éviter.

## Modifier votre PIN

Si vous avez déjà un PIN défini pour vos passkeys et vos codes OTP, la procédure pour le changer est très proche de celle de la première configuration. Vous passez par le même menu (**Configuration** → **FIDO** → **Manage PIN**), mais au lieu de **Set PIN**, le bouton affiche **Change PIN**. Avant de pouvoir saisir un nouveau PIN, on vous demande d'abord de taper votre PIN existant pour confirmer que c'est bien vous - ce n'est qu'ensuite que vous pouvez définir et vérifier un nouveau PIN.

<img src="/img/screenshots/change-pin-screen-mockup.png" alt="Écran de changement de PIN dans la Seedkeeper PRO App" className="mockup-image" />

:::note[PIN perdu ou oublié ?]
L'applet FIDO se verrouille après **8 tentatives incorrectes consécutives**, et il n'existe aucun moyen de récupérer un PIN oublié. La seule option est de réinitialiser l'applet à son état d'origine, ce qui efface définitivement toutes les passkeys enregistrées sur l'appareil - voir [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper). Vos mots de passe et vos notes sécurisées ne sont pas affectés, car ils sont protégés par un PIN distinct doté de son propre compteur de tentatives.
:::

## FAQ

<details>
<summary>J'ai déjà un PIN défini : comment le changer ?</summary>

Suivez les mêmes étapes - le bouton affiche **Change PIN** au lieu de Set PIN, et vous devrez saisir votre PIN actuel avant le nouveau.

</details>

<details>
<summary>Combien de PIN une Seedkeeper PRO comporte-t-elle ?</summary>

Trois, et ils sont indépendants : le PIN du gestionnaire de mots de passe, le PIN FIDO qui protège vos passkeys, et un PIN d'accès OTP facultatif. Changer l'un n'affecte pas les autres, et chacun possède son propre compteur de tentatives. Voir la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Quelle longueur peut avoir un PIN FIDO, et peut-il contenir des lettres ?</summary>

Le PIN FIDO est numérique, avec un minimum de quatre chiffres. C'est différent du PIN du gestionnaire de mots de passe, qui accepte 4 à 16 caractères. Les deux se définissent séparément et n'ont pas à être identiques.

</details>

<details>
<summary>Combien de tentatives incorrectes verrouillent l'appareil ?</summary>

Huit échecs consécutifs verrouillent l'applet FIDO. Le PIN du gestionnaire de mots de passe est plus strict et verrouille après quatre. Chaque compteur est indépendant : les échecs sur l'un n'affectent pas l'autre.

</details>

<details>
<summary>Puis-je définir le PIN FIDO sans la Seedkeeper PRO App ?</summary>

Oui. Windows et les navigateurs Chromium peuvent tous deux le définir et le changer nativement, car l'appareil implémente la gestion standard des credentials CTAP2. Voir [Gérer vos passkeys depuis votre ordinateur](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer).

</details>

<details>
<summary>Dois-je définir ce PIN avant de créer une passkey ?</summary>

Oui, le PIN FIDO doit être défini au préalable. Voir les étapes ci-dessus.

</details>

<details>
<summary>Que se passe-t-il si j'oublie ce PIN ?</summary>

Il n'existe aucune récupération. Perdre le PIN FIDO impose de réinitialiser l'applet FIDO, ce qui efface définitivement toutes les passkeys enregistrées sur l'appareil - voir [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper). Vos mots de passe et vos notes sécurisées ne sont pas touchés, car ils sont protégés par un PIN distinct. C'est exactement pourquoi un second appareil enregistré compte autant - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

</details>

## Articles liés

- [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide)
- [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Créer votre première passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
- [Gérer vos passkeys depuis votre ordinateur](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer)
- [Problèmes de PIN et verrouillages](/docs/troubleshooting/pin-problems-and-lockouts)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
