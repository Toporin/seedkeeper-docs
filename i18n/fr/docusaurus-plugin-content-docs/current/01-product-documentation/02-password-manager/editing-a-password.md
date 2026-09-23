---
title: "Modifier un mot de passe"
description: "Seedkeeper n'a pas de bouton Modifier, par conception : le secure element ne peut pas altérer des données enregistrées. Voici la marche à suivre."
keywords: [modifier mot de passe Seedkeeper, mettre à jour mot de passe, pas de fonction édition, secure element écriture unique]
sidebar_position: 3
sidebar_label: "Modifier un mot de passe"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Pourquoi ne puis-je pas modifier un mot de passe directement ?", a: "La mémoire du secure element ne peut que créer de nouvelles entrées ou en supprimer d'existantes : elle ne peut pas altérer des données déjà enregistrées."},
  {q: "Vais-je perdre mon mot de passe si je supprime l'entrée d'abord ?", a: "Uniquement si vous ne l'avez pas recopié au préalable. Notez toujours les détails que vous souhaitez conserver."},
  {q: "Cela vaut-il aussi pour les notes sécurisées et les seed phrases ?", a: "Oui. La même méthode - copier, supprimer, recréer - s'applique à tous les secrets enregistrés sur votre Seedkeeper."},
]} />

<p class="doc-subtitle">Pourquoi il n'y a pas de bouton « Modifier », et que faire à la place</p>

<div class="tldr">

Le secure element de Seedkeeper ne peut pas altérer des données en place - il peut seulement créer de nouvelles entrées ou en supprimer d'existantes. Pour mettre à jour un mot de passe, recopiez ses informations actuelles, supprimez l'ancienne entrée, puis créez-en une nouvelle avec les données à jour.

</div>

## Vue d'ensemble

Contrairement aux gestionnaires de mots de passe habituels, Seedkeeper ne propose pas de fonction « Modifier ». Cela tient au fonctionnement du secure element : sa mémoire ne peut qu'enregistrer de nouvelles entrées ou en effacer d'existantes - elle ne peut pas modifier des données déjà écrites. C'est un aspect de la même conception sécurisée qui rend l'appareil résistant à la manipulation.

En pratique, « modifier » un mot de passe se déroule donc en trois temps : copier, supprimer, recréer.

## Instructions pas à pas

### Étape 1 : copier les informations actuelles

Ouvrez l'entrée et notez son libellé, son login, son URL et son mot de passe - tout ce dont vous aurez besoin pour la recréer avec vos modifications.

### Étape 2 : supprimer l'ancienne entrée

Voir [Supprimer un mot de passe](/docs/product-documentation/password-manager/deleting-a-password) pour la marche à suivre.

### Étape 3 : créer la nouvelle entrée

Suivez [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password) ou [Importer un mot de passe existant](/docs/product-documentation/password-manager/importing-existing-passwords), selon que vous souhaitez générer un nouveau mot de passe ou conserver celui que vous avez déjà en ne changeant que les autres informations.

## FAQ

<details>
<summary>Pourquoi ne puis-je pas modifier un mot de passe directement ?</summary>

La mémoire du secure element ne peut que créer de nouvelles entrées ou en supprimer d'existantes - elle ne peut pas altérer des données déjà enregistrées. Voir la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Vais-je perdre mon mot de passe si je supprime l'entrée d'abord ?</summary>

Uniquement si vous ne l'avez pas recopié au préalable. Notez toujours les détails que vous souhaitez conserver - voir [Étape 1](#étape-1--copier-les-informations-actuelles) ci-dessus.

</details>

<details>
<summary>Cela vaut-il aussi pour les notes sécurisées et les seed phrases ?</summary>

Oui - la même méthode, copier, supprimer, recréer, s'applique à tous les secrets enregistrés sur votre Seedkeeper.

</details>

## Articles liés

- [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password)
- [Importer un mot de passe existant](/docs/product-documentation/password-manager/importing-existing-passwords)
- [Supprimer un mot de passe](/docs/product-documentation/password-manager/deleting-a-password)
- [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password)
