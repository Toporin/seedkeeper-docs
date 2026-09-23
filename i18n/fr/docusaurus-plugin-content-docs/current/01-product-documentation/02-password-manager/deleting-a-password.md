---
title: "Supprimer un mot de passe"
description: "Retirez définitivement un secret du secure element de votre Seedkeeper. La suppression est irréversible, sans copie cloud ni annulation possible."
keywords: [supprimer mot de passe, retirer secret, effacer entrée Seedkeeper, suppression irréversible]
sidebar_position: 4
sidebar_label: "Supprimer un mot de passe"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je annuler une suppression ?", a: "Non. La suppression est définitive : il n'existe ni copie cloud ni annulation. Si vous disposez d'un équipement secondaire, l'entrée supprimée peut encore s'y trouver si la sauvegarde a été faite avant la suppression."},
  {q: "Je veux mettre à jour un mot de passe : dois-je le supprimer d'abord ?", a: "Recopiez d'abord ses informations actuelles, puis supprimez-le, puis recréez-le avec vos modifications."},
]} />

<p class="doc-subtitle">Retirer définitivement un secret de votre Seedkeeper</p>

<div class="tldr">

Sélectionnez le secret, touchez Delete, cochez la case de confirmation et scannez votre carte - la suppression est définitive et irréversible.

</div>

## Vue d'ensemble

La suppression retire définitivement un secret du secure element de votre Seedkeeper - il n'y a ni annulation, ni copie cloud à restaurer. Si vous supprimez un mot de passe pour le mettre à jour, recopiez d'abord ses informations - voir [Modifier un mot de passe](/docs/product-documentation/password-manager/editing-a-password).

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : sélectionner le secret

Ouvrez l'entrée que vous souhaitez retirer de votre liste de secrets.

### Étape 2 : toucher Delete

Vous pouvez éventuellement révéler le secret pour vous assurer que vous supprimez le bon.
Si c'est bien celui-là, touchez le bouton **Delete**.

### Étape 3 : confirmer

Cochez la case de confirmation - cette opération est irréversible.

### Étape 4 : scanner votre carte

La suppression est effective une fois le scan terminé.

</div>

<div class="step-image">

<img src="/img/gifs/delete-password-iphone-mockup.gif" alt="Suppression d'un mot de passe dans la Seedkeeper App" className="mockup-image" />

</div>

</div>

## FAQ

<details>
<summary>Puis-je annuler une suppression ?</summary>

Non. La suppression est définitive - il n'existe ni copie cloud ni annulation. Si vous disposez d'un [équipement secondaire](/docs/product-documentation/getting-started/backup-and-recovery), l'entrée supprimée peut encore s'y trouver si la sauvegarde a été faite avant la suppression.

</details>

<details>
<summary>Je veux mettre à jour un mot de passe : dois-je le supprimer d'abord ?</summary>

Recopiez d'abord ses informations actuelles, puis supprimez-le, puis recréez-le avec vos modifications. Voir [Modifier un mot de passe](/docs/product-documentation/password-manager/editing-a-password) pour l'explication complète.

</details>

## Articles liés

- [Modifier un mot de passe](/docs/product-documentation/password-manager/editing-a-password)
- [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password)
- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
