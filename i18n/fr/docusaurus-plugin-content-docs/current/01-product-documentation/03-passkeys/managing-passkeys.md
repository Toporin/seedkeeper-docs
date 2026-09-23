---
title: "Gérer vos passkeys"
description: "Listez toutes les passkeys enregistrées sur votre Seedkeeper PRO et supprimez celles dont vous n'avez plus besoin, depuis le menu Configuration."
keywords: [lister passkeys, supprimer passkey, gérer passkeys matérielles, credentials résidents, passkeys Seedkeeper PRO]
sidebar_position: 5
sidebar_label: "Gérer vos passkeys"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Ai-je besoin de mon PIN de passkey pour consulter mes passkeys ?", a: "Oui. Voir Définir votre PIN de passkey si ce n'est pas encore fait."},
  {q: "Puis-je gérer mes passkeys sans la Seedkeeper PRO App ?", a: "Oui. Windows et les navigateurs Chromium peuvent les lister et les supprimer, car l'appareil implémente la gestion standard des credentials CTAP2."},
  {q: "Puis-je annuler la suppression d'une passkey ?", a: "Non. Une fois supprimée, une passkey est définitivement retirée de votre appareil. Il faudrait en configurer une nouvelle auprès de ce service."},
  {q: "Supprimer une passkey ici la retire-t-elle aussi du site web ?", a: "La supprimer ici retire l'identifiant de votre appareil, il ne peut donc plus servir à se connecter où que ce soit - cette partie est immédiate. Le service peut toutefois continuer d'afficher une entrée obsolète dans sa propre liste : retirez-la également là-bas pour garder des réglages de compte propres et éviter toute confusion ultérieure."},
]} />

<p class="doc-subtitle">Consulter et retirer les passkeys de votre appareil</p>

<div class="tldr">

Listez toutes les passkeys enregistrées sur votre Seedkeeper PRO depuis Configuration → FIDO → List Resident Passkeys, et supprimez celles de votre choix directement depuis cette même liste.

</div>

## Vue d'ensemble

Votre Seedkeeper PRO conserve chaque passkey que vous avez créée directement sur son secure element.<br />
Cet article traite de la consultation de cette liste et de la suppression d'une passkey dont vous n'avez plus besoin.

## Lister vos passkeys

<div class="step-layout">

<div class="step-text">

### Étape 1 : préparer le nécessaire

Il vous faut votre carte ou votre bague Seedkeeper PRO et la Seedkeeper PRO App installée.

### Étape 2 : ouvrir l'application et scanner votre appareil

Ouvrez la Seedkeeper PRO App, puis tirez vers le bas (iOS) ou touchez l'icône d'actualisation (Android) pour activer le NFC et scanner votre appareil. Vous arrivez sur la liste des codes OTP enregistrés sur votre appareil.

### Étape 3 : ouvrir le menu

Touchez le menu à 3 points en **haut à droite**.

### Étape 4 : aller dans Configuration → FIDO → List Resident Passkeys

### Étape 5 : scanner votre appareil

### Étape 6 : saisir votre PIN de passkey

L'application demande votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour accéder aux passkeys enregistrées sur votre appareil.

### Étape 7 : scanner de nouveau votre appareil

Votre liste de passkeys s'affiche.

</div>

<div class="step-image">

<img src="/img/gifs/list-passkeys-iphone-mockup.gif" alt="Liste des passkeys dans la Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

## Gérer vos passkeys depuis Windows ou Chrome

La Seedkeeper PRO App n'est pas la seule façon de procéder. Windows et les navigateurs Chromium peuvent lister et supprimer nativement les passkeys de votre appareil, et définir le PIN FIDO également - voir [Gérer vos passkeys depuis votre ordinateur](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer).

## Supprimer une passkey

<div class="step-layout">

<div class="step-text">

### Étape 1 : toucher l'icône à côté de la passkey

Depuis votre liste de passkeys, touchez l'icône située à côté de celle que vous souhaitez retirer.

### Étape 2 : toucher Delete Passkey

### Étape 3 : confirmer

Touchez de nouveau **Delete Passkey** pour confirmer.

### Étape 4 : scanner votre appareil

Scannez votre Seedkeeper PRO pour finaliser la suppression.

</div>

<div class="step-image">

<img src="/img/gifs/delete-passkey-iphone-mockup.gif" alt="Suppression d'une passkey dans la Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

## FAQ

<details>
<summary>Ai-je besoin de mon PIN de passkey pour consulter mes passkeys ?</summary>

Oui - voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) si ce n'est pas encore fait.

</details>

<details>
<summary>Puis-je gérer mes passkeys sans la Seedkeeper PRO App ?</summary>

Oui. Windows et les navigateurs Chromium peuvent les lister et les supprimer, car l'appareil implémente la gestion standard des credentials CTAP2. Voir [Gérer vos passkeys depuis votre ordinateur](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer).

</details>

<details>
<summary>Puis-je annuler la suppression d'une passkey ?</summary>

Non. Une fois supprimée, une passkey est définitivement retirée de votre appareil. Il faudrait en configurer une nouvelle auprès de ce service - voir [Ajouter une nouvelle passkey](/docs/product-documentation/passkeys/importing-passkeys).

</details>

<details>
<summary>Supprimer une passkey ici la retire-t-elle aussi du site web ?</summary>

La supprimer ici retire l'identifiant de votre appareil, il ne peut donc plus servir à se connecter où que ce soit - cette partie est immédiate. Le service peut toutefois continuer d'afficher une entrée obsolète dans sa propre liste de passkeys enregistrées : retirez-la également là-bas pour garder des réglages de compte propres et éviter toute confusion ultérieure.

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Créer votre première passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
- [Ajouter une nouvelle passkey](/docs/product-documentation/passkeys/importing-passkeys)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Gérer vos passkeys depuis votre ordinateur](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer)
- [Comment fonctionnent les passkeys](/docs/security-academy/passkeys/how-passkeys-work)
