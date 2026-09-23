---
title: "Créer un nouveau mot de passe"
description: "Générez un mot de passe solide sur votre Seedkeeper et stockez-le sur le secure element. Choisissez la longueur et le style, dont le mode Easy to read."
keywords: [générer mot de passe matériel, générateur Seedkeeper, créer mot de passe, générateur hors ligne, stockage secure element]
sidebar_position: 1
sidebar_label: "Créer un nouveau mot de passe"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Les champs Login et URL sont-ils obligatoires ?", a: "Non, les deux sont facultatifs."},
  {q: "Puis-je changer le mot de passe après l'avoir généré ?", a: "Oui, régénérez autant de fois que vous le souhaitez avant de toucher Import."},
  {q: "Où mon mot de passe est-il stocké ?", a: "Directement sur votre appareil Seedkeeper, à l'intérieur du secure element certifié EAL6+. Aucun cloud n'intervient."},
  {q: "Quelle différence entre Easy to read et les mots de passe aléatoires ?", a: "Les mots de passe Easy to read sont construits à partir de mots du dictionnaire anglais : ils sont donc à la fois faciles à lire et faciles à retenir. Les mots de passe aléatoires utilisent le jeu de caractères que vous précisez - majuscules, minuscules, symboles - ce qui est moins mémorisable mais sans lien avec des mots réels."},
]} />

<p class="doc-subtitle">Générer et enregistrer un mot de passe en quelques secondes</p>

<div class="tldr">

Scannez votre Seedkeeper, touchez Generate a Secret puis Password, donnez-lui un libellé, ajustez la longueur et le style, puis générez et enregistrez-le sur votre appareil.

</div>

## Vue d'ensemble

La Seedkeeper App génère les mots de passe directement sur votre appareil et les y conserve - rien n'est envoyé ailleurs. Vous contrôlez la longueur et le style de chaque mot de passe que vous créez.

Si vous hésitez sur les réglages, retenez que la longueur compte davantage que les règles de complexité, et qu'un mot de passe généré par une machine vaut mieux que tout ce que vous pourriez inventer - voir [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password).

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : lancer l'application et scanner votre Seedkeeper

Ouvrez la Seedkeeper App, scannez votre carte ou votre bague, puis saisissez votre PIN personnel.<br />
Voir le [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide) si vous n'avez pas encore défini votre PIN.

### Étape 2 : lancer la génération d'un secret

Touchez **Generate a Secret**, puis **Password**.

### Étape 3 : donner un libellé au mot de passe

Indiquez un **label** - c'est ce qui distinguera ce secret de tous les autres dans votre liste.

### Étape 4 : ajouter des détails facultatifs

- **Login** (facultatif) - une adresse e-mail, un identifiant ou un surnom
- **URL** (facultatif) - le site auquel ce mot de passe correspond

### Étape 5 : choisir la longueur et le style

Sélectionnez la longueur et le style qui vous conviennent :
- **Upper case, lower case, symbols** - une chaîne entièrement aléatoire tirée des jeux de caractères que vous activez
- **Easy-to-read** - un mot de passe composé de mots du dictionnaire anglais, plus facile à retenir

### Étape 6 : générer

Touchez **Generate** pour afficher votre mot de passe.<br />
Vous pouvez régénérer autant de fois que nécessaire jusqu'à obtenir celui qui vous convient.

### Étape 7 : l'enregistrer sur votre appareil

Touchez **Import**, puis scannez de nouveau votre carte ou votre bague pour enregistrer le mot de passe.

Votre nouveau mot de passe est désormais conservé sur votre Seedkeeper.

</div>

<div class="step-image">

<img src="/img/gifs/create-new-password-iphone-mockup.gif" alt="Création d'un nouveau mot de passe dans la Seedkeeper App" className="mockup-image" />

</div>

</div>

## FAQ

<details>
<summary>Les champs Login et URL sont-ils obligatoires ?</summary>

Non, les deux sont facultatifs. Voir [Ajouter des détails facultatifs](#étape-4--ajouter-des-détails-facultatifs) ci-dessus.

</details>

<details>
<summary>Puis-je changer le mot de passe après l'avoir généré ?</summary>

Oui - régénérez autant de fois que vous le souhaitez avant de toucher Import. Voir [Générer](#étape-6--générer) ci-dessus.

</details>

<details>
<summary>Où mon mot de passe est-il stocké ?</summary>

Directement sur votre appareil Seedkeeper, à l'intérieur du secure element certifié EAL6+ - aucun cloud n'intervient.<br />
Voir [Introduction](/docs/product-documentation/getting-started/intro) pour en savoir plus sur le fonctionnement de Seedkeeper.

</details>

<details>
<summary>Quelle différence entre Easy to read et les mots de passe aléatoires ?</summary>

Les mots de passe **Easy to read** sont construits à partir de mots du dictionnaire anglais : ils sont donc à la fois faciles à lire et faciles à retenir.<br />
Les mots de passe aléatoires utilisent le jeu de caractères que vous précisez - majuscules, minuscules, symboles - ce qui est moins mémorisable mais sans lien avec des mots réels.<br />
Voir [Choisir la longueur et le style](#étape-5--choisir-la-longueur-et-le-style) ci-dessus.

</details>

## Articles liés

- [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password)
- [Modifier un mot de passe](/docs/product-documentation/password-manager/editing-a-password)
- [Organiser vos mots de passe](/docs/product-documentation/password-manager/organizing-passwords)
- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
