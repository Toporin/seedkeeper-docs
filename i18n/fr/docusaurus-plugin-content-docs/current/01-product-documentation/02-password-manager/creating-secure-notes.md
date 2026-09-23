---
title: "Créer des notes sécurisées"
description: "Stockez n'importe quel texte libre sur votre Seedkeeper - codes de récupération, PIN, informations privées - sous forme de note chiffrée sur le secure element."
keywords: [notes sécurisées, stocker codes de récupération, notes chiffrées matériel, Free Data Seedkeeper, stockage note hors ligne]
sidebar_position: 6
sidebar_label: "Créer des notes sécurisées"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Que puis-je enregistrer dans une note sécurisée ?", a: "N'importe quel texte libre : codes de récupération, PIN d'autres services, informations privées, ou tout ce que vous souhaitez garder hors du cloud."},
  {q: "Y a-t-il une limite de taille pour une note sécurisée ?", a: "Il n'existe pas de limite fixe par note - elle peut contenir 256, 512 caractères ou davantage, tant que les 8 Ko de mémoire totale de votre appareil ne sont pas dépassés par l'ensemble de vos secrets."},
  {q: "Où ma note est-elle stockée ?", a: "Directement sur votre appareil Seedkeeper. Aucun cloud n'intervient."},
]} />

<p class="doc-subtitle">Conserver n'importe quel texte en sécurité sur votre Seedkeeper</p>

<div class="tldr">

Scannez votre Seedkeeper, touchez Import a Secret puis Free Data, donnez-lui un libellé, saisissez vos données, puis enregistrez-les sur votre appareil.

</div>

## Vue d'ensemble

Les notes sécurisées vous permettent de conserver n'importe quel texte libre sur votre Seedkeeper, et pas seulement des mots de passe. Codes de récupération, PIN d'autres services, informations privées - tout ce que vous souhaitez garder hors du cloud.

Un usage mérite d'être souligné : si vous utilisez également un gestionnaire de mots de passe cloud, enregistrer ici son mot de passe maître vous donne une copie hors ligne, adossée au matériel, du seul identifiant que vous ne pouvez pas vous permettre d'oublier - voir [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained).

C'est aussi ici que va tout élément de récupération non conforme à BIP39. L'option Mnemonic Phrase valide la somme de contrôle [BIP39](/docs/security-academy/seed-phrases/what-is-bip39) et refuse tout ce qui échoue : une graine Electrum, une phrase Monero de 25 mots ou une clé privée brute se rangent donc ici - même secure element, même PIN, sans le contrôle de format.

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : lancer l'application et scanner votre Seedkeeper

Ouvrez la Seedkeeper App, scannez votre carte ou votre bague, puis saisissez votre PIN personnel.<br />
Voir le [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide) si vous n'avez pas encore défini votre PIN.

### Étape 2 : lancer l'import d'un secret

Touchez **Import a Secret**, puis **Free Data**.

### Étape 3 : donner un libellé à votre note

Indiquez un **label** - c'est ce qui distinguera ce secret de tous les autres dans votre liste.

### Étape 4 : saisir vos données

Saisissez vos données brutes - n'importe quel texte que vous souhaitez conserver.

### Étape 5 : l'enregistrer sur votre appareil

Touchez **Import**, puis scannez de nouveau votre carte ou votre bague pour enregistrer la note.

Votre note sécurisée est désormais conservée sur votre Seedkeeper.

</div>

<div class="step-image">

<img src="/img/gifs/creating-secure-notes-iphone-mockup.gif" alt="Création d'une note sécurisée dans la Seedkeeper App" className="mockup-image" />

</div>

</div>

## FAQ

<details>
<summary>Que puis-je enregistrer dans une note sécurisée ?</summary>

N'importe quel texte libre - codes de récupération, PIN d'autres services, informations privées, ou tout ce que vous souhaitez garder hors du cloud.

</details>

<details>
<summary>Y a-t-il une limite de taille pour une note sécurisée ?</summary>

Il n'existe pas de limite fixe par note - elle peut contenir 256, 512 caractères ou davantage, tant que les 8 Ko de mémoire totale de votre appareil ne sont pas dépassés par l'ensemble de vos secrets.

</details>

<details>
<summary>Où ma note est-elle stockée ?</summary>

Directement sur votre appareil Seedkeeper - aucun cloud n'intervient. Voir [Introduction](/docs/product-documentation/getting-started/intro) pour en savoir plus sur le fonctionnement de Seedkeeper.

</details>

## Articles liés

- [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password)
- [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Organiser vos mots de passe](/docs/product-documentation/password-manager/organizing-passwords)
- [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained)
- [Qu'est-ce que BIP39 ?](/docs/security-academy/seed-phrases/what-is-bip39)
