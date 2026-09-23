---
title: "Importer un mot de passe existant"
description: "Enregistrez sur votre Seedkeeper un mot de passe que vous utilisez déjà : libellé, login et URL facultatifs, puis sauvegarde sur le secure element en NFC."
keywords: [importer mot de passe, enregistrer mot de passe existant, gestionnaire Seedkeeper, stockage mot de passe hors ligne]
sidebar_position: 2
sidebar_label: "Importer un mot de passe existant"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Les champs Login et URL sont-ils obligatoires ?", a: "Non, les deux sont facultatifs."},
  {q: "Vaut-il mieux importer un mot de passe ou en générer un nouveau ?", a: "Importez si vous possédez déjà un mot de passe que vous souhaitez continuer à utiliser. Si vous créez un compte ou voulez un mot de passe plus solide, générez-en un nouveau à la place."},
  {q: "Où mon mot de passe est-il stocké ?", a: "Directement sur votre appareil Seedkeeper, à l'intérieur du secure element certifié EAL6+. Aucun cloud n'intervient."},
]} />

<p class="doc-subtitle">Faire entrer dans Seedkeeper un mot de passe que vous avez déjà</p>

<div class="tldr">

Scannez votre Seedkeeper, touchez Import a Secret puis Password, donnez-lui un libellé, saisissez le mot de passe que vous possédez déjà, puis enregistrez-le sur votre appareil.

</div>

## Vue d'ensemble

Vous avez déjà un mot de passe que vous souhaitez conserver sur votre Seedkeeper plutôt que d'en générer un nouveau ? La Seedkeeper App vous permet de le saisir manuellement et de l'enregistrer directement sur votre appareil - rien n'est envoyé ailleurs.

Une vérification à faire avant d'importer : un mot de passe réutilisé sur un autre site ne vaut que ce que vaut le service le moins sûr qui le détient - voir [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous).

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : lancer l'application et scanner votre Seedkeeper

Ouvrez la Seedkeeper App, scannez votre carte ou votre bague, puis saisissez votre PIN personnel.<br />
Voir le [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide) si vous n'avez pas encore défini votre PIN.

### Étape 2 : lancer l'import d'un secret

Touchez **Import a Secret**, puis **Password**.

### Étape 3 : donner un libellé au mot de passe

Indiquez un **label** - c'est ce qui distinguera ce secret de tous les autres dans votre liste.

### Étape 4 : ajouter des détails facultatifs

- **Login** (facultatif) - une adresse e-mail, un identifiant ou un surnom
- **URL** (facultatif) - le site auquel ce mot de passe correspond

### Étape 5 : saisir votre mot de passe

Saisissez le mot de passe que vous souhaitez enregistrer.

### Étape 6 : l'enregistrer sur votre appareil

Touchez **Import**, puis scannez de nouveau votre carte ou votre bague pour enregistrer le mot de passe.

Votre mot de passe est désormais conservé sur votre Seedkeeper.

</div>

<div class="step-image">

<img src="/img/gifs/import-existing-password-iphone-mockup.gif" alt="Import d'un mot de passe existant dans la Seedkeeper App" className="mockup-image" />

</div>

</div>

## FAQ

<details>
<summary>Les champs Login et URL sont-ils obligatoires ?</summary>

Non, les deux sont facultatifs. Voir [Ajouter des détails facultatifs](#étape-4--ajouter-des-détails-facultatifs) ci-dessus.

</details>

<details>
<summary>Vaut-il mieux importer un mot de passe ou en générer un nouveau ?</summary>

Importez si vous possédez déjà un mot de passe que vous souhaitez continuer à utiliser. Si vous créez un compte ou voulez un mot de passe plus solide, voir plutôt [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password).

</details>

<details>
<summary>Où mon mot de passe est-il stocké ?</summary>

Directement sur votre appareil Seedkeeper, à l'intérieur du secure element certifié EAL6+ - aucun cloud n'intervient.<br />
Voir [Introduction](/docs/product-documentation/getting-started/intro) pour en savoir plus sur le fonctionnement de Seedkeeper.

</details>

## Articles liés

- [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password)
- [Modifier un mot de passe](/docs/product-documentation/password-manager/editing-a-password)
- [Organiser vos mots de passe](/docs/product-documentation/password-manager/organizing-passwords)
- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
- [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous)
