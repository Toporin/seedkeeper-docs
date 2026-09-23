---
title: "Arrivées et départs des collaborateurs"
description: "Le cycle de vie des appareils qui garde un déploiement honnête : remise le premier jour, révocation le dernier, et l'appareil qui ne revient jamais."
keywords: [départ collaborateur sécurité, révoquer accès partant, remise clé de sécurité, cycle de vie appareil, arrivée mobilité départ, déprovisionnement]
sidebar_position: 3
sidebar_label: "Arrivées et départs"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quelle est la première chose à faire au départ d'un collaborateur ?", a: "Révoquer ses credentials enregistrés sur chaque service, et fermer les sessions actives. Récupérez le matériel ensuite : ce n'est pas la récupération de l'appareil qui protège les comptes."},
  {q: "Que faire si un partant ne rend pas sa clé de sécurité ?", a: "À condition d'avoir révoqué ses enregistrements, l'appareil est inerte : les passkeys qu'il contient pointent vers des comptes qui ne les acceptent plus. Vérifiez s'il détenait des mots de passe ou des identifiants OTP dans les autres applets, et consignez-le comme non rendu."},
  {q: "Récupérer l'appareil révoque-t-il les accès ?", a: "Non. La révocation s'opère côté service. Détenir le matériel empêche son usage futur, mais les enregistrements restent actifs jusqu'à leur retrait de chaque compte ou de votre fournisseur d'identité."},
  {q: "Les collaborateurs doivent-ils définir leur propre PIN ?", a: "Oui, à la première utilisation. Un PIN connu de celui qui a provisionné l'appareil n'est pas un second facteur, puisque la possession et la connaissance se trouveraient alors chez la même personne."},
  {q: "Que faire quand quelqu'un change de poste ?", a: "Traitez-le comme un départ partiel : passez en revue les systèmes sur lesquels la personne est enregistrée et retirez ceux dont le nouveau poste n'a pas besoin. L'appareil lui-même n'a pas à être réémis."},
]} />

<p class="doc-subtitle">Le premier jour, le dernier jour, et l'appareil qui ne revient jamais</p>

<div class="tldr">

Un déploiement ne reste sûr que si le cycle de vie est appliqué. Deux listes de contrôle - une pour les arrivées, une pour les départs - plus une règle claire pour l'appareil non rendu. La révocation s'opère **côté service**, pas sur le matériel, et c'est le point que les gens ratent.

</div>

## Pourquoi cela compte plus qu'il n'y paraît

Un compte qui aurait dû être fermé fait partie des trois façons les plus courantes dont les organisations se font compromettre, et elle est entièrement auto-infligée.

Le matériel change la forme du problème sans le supprimer. Vous avez désormais un objet physique à remettre et à récupérer, et un ensemble de credentials enregistrés sur des services qu'il faut révoquer, que l'objet revienne ou non.

Les deux sont indépendants. **Récupérer l'appareil ne révoque pas les accès, et révoquer les accès n'exige pas l'appareil.** Confondre les deux est ce qui laisse des credentials actifs derrière soi.

## Liste de contrôle des arrivées

### Avant le premier jour

- Provisionner les appareils - voir [Gestion de flotte et provisionnement en volume](/docs/business/fleet-management-and-bulk-provisioning)
- Définir un PIN FIDO, ou prévoir que l'utilisateur définisse le sien à la première utilisation
- Consigner le numéro de série ou l'étiquette d'inventaire au nom de la personne
- Confirmer que le poste de travail dispose d'un lecteur

### Le premier jour

- Remettre les deux appareils - principal et secours
- L'utilisateur définit ou change son PIN, pour que personne d'autre ne le connaisse
- Enregistrer les deux appareils d'abord sur son compte e-mail, puis sur le reste
- Confirmer que le secours fonctionne réellement en s'y connectant une fois

Cette dernière étape prend deux minutes et c'est la seule chose qui transforme un secours en secours. Un appareil de rechange que personne n'a testé est une hypothèse.

### Ce qu'il faut expliquer

Trois choses, pas davantage :

1. Cela remplace votre mot de passe sur ces comptes
2. Prévenez-nous immédiatement en cas de perte - c'est attendu, pas problématique
3. Le PIN ne peut pas être récupéré : choisissez-en un dont vous vous souviendrez

## Liste de contrôle des départs

Déroulez-la le jour même, à chaque fois. Une liste écrite est ce qui le rend possible.

### Révoquer d'abord, récupérer ensuite

**Retirez les credentials enregistrés sur chaque service** où les appareils de la personne étaient enregistrés. Cela se fait dans les paramètres de compte de chaque service, ou de façon centralisée dans votre fournisseur d'identité. Cela fonctionne que vous ayez le matériel en main ou non.

**Récupérez ensuite les appareils.** Ce sont des biens de l'entreprise et ils peuvent contenir d'autres secrets, mais les récupérer n'est pas ce qui protège les comptes.

L'ordre compte parce qu'il supprime la tentation d'attendre. Si quelqu'un part un vendredi et que l'appareil revient le lundi, l'accès devrait déjà avoir disparu le vendredi soir.

### La liste complète

- Passkeys enregistrées retirées, sur chaque service
- Identifiants OTP retirés là où l'appareil les détenait
- Sessions actives fermées - une session en cours survit à la révocation d'un credential
- Identifiants partagés renouvelés, si la personne en connaissait
- Appareils récupérés, ou consignés comme non rendus
- Inventaire mis à jour

La fermeture des sessions est l'étape la plus souvent oubliée. Révoquer un credential empêche de nouvelles connexions ; cela ne met pas toujours fin à une session déjà en cours.

## Quand l'appareil ne revient pas

Cela arrive : un départ conflictuel, un appareil perdu, quelqu'un qui ne répond simplement pas.

**Ce n'est pas une urgence, à condition d'avoir révoqué correctement.** Une Seedkeeper PRO sans credential enregistré restant est un objet inerte. Les passkeys qu'elle contient pointent vers des comptes qui ne les acceptent plus.

Ce qui compte encore :

- **Le PIN FIDO la protège dans l'intervalle.** Huit tentatives incorrectes verrouillent l'applet - voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- **Vérifiez si elle détenait autre chose.** Les mots de passe, notes sécurisées et identifiants OTP vivent dans des applets distincts dotés de PIN distincts, et ceux-là ne sont pas révoqués en retirant une passkey d'un service
- **Consignez-la comme non rendue** plutôt que de l'amortir discrètement, pour qu'elle ne soit pas réémise plus tard ni supposée dormir dans un tiroir

## Les changements de poste

Le cas intermédiaire oublié. Quelqu'un passe de la finance aux opérations, ou perd ses droits d'administration.

Son appareil va bien. Ses **enregistrements**, non : la personne peut rester enrôlée sur des systèmes dont son nouveau poste n'a pas besoin. Traitez un changement de poste comme un départ partiel - passez en revue ce sur quoi la personne est enregistrée, retirez ce qui ne s'applique plus.

## Tenez un inventaire

Rien d'élaboré. Une ligne par appareil : numéro de série ou étiquette d'inventaire, qui le détient, principal ou secours, date de remise, statut.

Sans lui, deux questions deviennent sans réponse au pire moment : *qui détient l'appareil X*, et *quels appareils détient la personne Y*. Les deux surgissent pendant un incident, et les deux se répondent facilement si vous l'avez noté au moment de la remise.

## FAQ

<details>
<summary>Quelle est la première chose à faire au départ d'un collaborateur ?</summary>

Révoquer ses credentials enregistrés sur chaque service, et fermer les sessions actives. Récupérez le matériel ensuite - ce n'est pas la récupération de l'appareil qui protège les comptes.

</details>

<details>
<summary>Que faire si un partant ne rend pas sa clé de sécurité ?</summary>

À condition d'avoir révoqué ses enregistrements, l'appareil est inerte - les passkeys qu'il contient pointent vers des comptes qui ne les acceptent plus. Vérifiez s'il détenait des mots de passe ou des identifiants OTP dans les autres applets, et consignez-le comme non rendu.

</details>

<details>
<summary>Récupérer l'appareil révoque-t-il les accès ?</summary>

Non. La révocation s'opère côté service. Détenir le matériel empêche son usage futur, mais les enregistrements restent actifs jusqu'à leur retrait de chaque compte ou de votre fournisseur d'identité.

</details>

<details>
<summary>Les collaborateurs doivent-ils définir leur propre PIN ?</summary>

Oui, à la première utilisation. Un PIN connu de celui qui a provisionné l'appareil n'est pas un second facteur, puisque la possession et la connaissance se trouveraient alors chez la même personne.

</details>

<details>
<summary>Que faire quand quelqu'un change de poste ?</summary>

Traitez-le comme un départ partiel : passez en revue les systèmes sur lesquels la personne est enregistrée et retirez ceux dont le nouveau poste n'a pas besoin. L'appareil lui-même n'a pas à être réémis.

</details>

## Articles liés

- [Déployer Seedkeeper PRO dans votre organisation](/docs/business/deploying-seedkeeper-pro-in-your-organization)
- [Gestion de flotte et provisionnement en volume](/docs/business/fleet-management-and-bulk-provisioning)
- [Sécurité et conformité pour les organisations](/docs/business/security-compliance-for-organizations)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
