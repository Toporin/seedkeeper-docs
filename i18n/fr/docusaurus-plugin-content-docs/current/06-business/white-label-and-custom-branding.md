---
title: "Marque blanche et personnalisation"
description: "Cartes et bagues personnalisées pour revendeurs, MSP et organisations qui équipent à leur nom. Ce qui se personnalise, et ce qui ne se personnalise pas."
keywords: [clé de sécurité marque blanche, FIDO2 personnalisé, clé de sécurité OEM, clé matérielle MSP, carte à puce personnalisée, matériel sécurité revendeur]
sidebar_position: 7
sidebar_label: "Marque blanche et personnalisation"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Pouvons-nous vendre du matériel Seedkeeper sous notre propre marque ?", a: "Oui. Cartes, bagues et emballages peuvent porter votre marque, sous réserve de quantités minimales et de délais. L'identité de l'appareil au niveau du protocole reste inchangée."},
  {q: "Un appareil personnalisé a-t-il un AAGUID différent ?", a: "Non. L'AAGUID identifie la marque et le modèle certifiés : une unité personnalisée rapporte donc la même valeur et fonctionne à l'identique avec toute allowlist ou politique d'attestation."},
  {q: "La personnalisation affecte-t-elle la certification FIDO2 ?", a: "Non. Le certificat couvre l'implémentation certifiée, que la personnalisation ne modifie pas. Le même numéro de certificat s'applique."},
  {q: "Les applications compagnons peuvent-elles être en marque blanche ?", a: "Pas dans le cadre d'une commande de personnalisation standard. Les utilisateurs installent les applications Seedkeeper : prévoyez votre matériel d'accueil en conséquence."},
  {q: "Les appareils personnalisés arrivent-ils préconfigurés ?", a: "Non, ils arrivent dans le même état que n'importe quelle autre unité. Configurer les appareils avant distribution est une étape de provisionnement de votre côté."},
]} />

<p class="doc-subtitle">Votre nom sur le matériel</p>

<div class="tldr">

Cartes et bagues peuvent être produites à votre propre marque, pour les revendeurs, les prestataires de services managés et les organisations qui remettent des appareils sous leur propre identité. La surface physique est personnalisable ; l'identité FIDO2 en dessous ne l'est pas, et cette distinction a des conséquences qu'il vaut la peine de comprendre avant de s'engager.

</div>

## À qui cela s'adresse

Trois situations, aux exigences différentes.

**Les revendeurs et distributeurs** vendant sous leur propre marque, où l'emballage et la face de la carte portent votre identité plutôt que la nôtre.

**Les prestataires de services managés** qui remettent du matériel à des organisations clientes dans le cadre d'une offre de sécurité, où un appareil à votre marque renforce l'idée que le service est le vôtre.

**Les grandes organisations** qui remettent des appareils à leurs équipes, où une carte aux couleurs de l'entreprise s'insère plus naturellement à côté d'un badge d'accès qu'un produit tiers.

## Ce qui peut être personnalisé

**La face de la carte.** Logo, couleurs, mise en page, et texte dans les limites du procédé d'impression et de l'espace occupé par la puce et l'antenne.

**La finition de la bague**, dans les limites du matériau.

**L'emballage et les encarts**, y compris des instructions d'accueil portant votre propre contact de support plutôt que le nôtre - généralement la partie la plus précieuse pour un MSP, puisqu'elle détermine qui l'utilisateur appelle.

## Ce qui ne peut pas être changé

Être explicite là-dessus tôt évite une conversation plus tard.

**L'AAGUID.** Il identifie la marque et le modèle au niveau du protocole, et un appareil personnalisé rapporte la même valeur qu'un appareil standard. C'est une propriété délibérée de FIDO2 : les relying parties reconnaissent le matériel, et une allowlist fonctionne à l'identique pour une unité personnalisée - voir [Sécurité et conformité](/docs/business/security-compliance-for-organizations#prouver-plutôt-quaffirmer).

**La certification FIDO.** Le certificat couvre l'implémentation certifiée. Personnaliser la surface ne modifie pas ce qui a été certifié, et le même numéro de certificat s'applique.

**Le firmware et les applets.** Publiés sous AGPLv3, identiques d'une unité à l'autre. Une modification fonctionnelle relève d'une conversation de développement, pas de personnalisation.

**Les applications compagnons.** Les applications Seedkeeper sont ce que les utilisateurs installent, et elles ne sont pas mises en marque blanche dans le cadre d'une commande de personnalisation standard.

Ce dernier point compte pour un MSP : votre logo sur la carte, nos applications sur le téléphone. Il vaut la peine de construire votre matériel d'accueil autour de cela.

## Les contraintes pratiques

**Des quantités minimales et des délais** s'appliquent, et les deux augmentent avec la complexité de votre demande.

**Les exigences graphiques.** Imprimer sur une carte à puce n'est pas imprimer sur du papier. Fichiers vectoriels, zones de sécurité définies autour de la puce et de l'antenne, et une gamme de couleurs que le procédé peut réellement reproduire. Prévoyez une étape de bon à tirer.

**Le provisionnement est distinct.** Un appareil personnalisé arrive dans le même état que n'importe quel autre. Si vous voulez des appareils configurés avant qu'ils n'atteignent l'utilisateur final, c'est un flux de provisionnement de votre côté - voir [Gestion de flotte et provisionnement en volume](/docs/business/fleet-management-and-bulk-provisioning).

## Si vous êtes un MSP

Deux points à trancher avant de commander.

**Qui détient l'appareil de secours.** Si vous équipez des organisations clientes, le second appareil fait partie de la conception de votre service, pas d'une réflexion ultérieure - voir [Déployer Seedkeeper PRO dans votre organisation](/docs/business/deploying-seedkeeper-pro-in-your-organization).

**Qui répond au téléphone.** Un appareil à votre marque envoie les utilisateurs vers vous. Assurez-vous que votre équipe sait répondre aux questions courantes - le PIN ne peut pas être récupéré, les passkeys ne se copient pas d'un appareil à l'autre, et des lecteurs sont nécessaires sur poste fixe - avant l'expédition du premier lot.

## Pour commencer

La personnalisation relève d'une conversation commerciale plutôt que d'une configuration en libre-service, les quantités, les fichiers graphiques et les délais dépendant tous de ce que vous cherchez à obtenir.

Ayez sous la main : les volumes attendus, si vous avez besoin de cartes, de bagues ou des deux, vos fichiers graphiques au format vectoriel, et si vous souhaitez également un emballage ou des encarts personnalisés.

## FAQ

<details>
<summary>Pouvons-nous vendre du matériel Seedkeeper sous notre propre marque ?</summary>

Oui. Cartes, bagues et emballages peuvent porter votre marque, sous réserve de quantités minimales et de délais. L'identité de l'appareil au niveau du protocole reste inchangée.

</details>

<details>
<summary>Un appareil personnalisé a-t-il un AAGUID différent ?</summary>

Non. L'AAGUID identifie la marque et le modèle certifiés : une unité personnalisée rapporte donc la même valeur et fonctionne à l'identique avec toute allowlist ou politique d'attestation.

</details>

<details>
<summary>La personnalisation affecte-t-elle la certification FIDO2 ?</summary>

Non. Le certificat couvre l'implémentation certifiée, que la personnalisation ne modifie pas. Le même numéro de certificat s'applique.

</details>

<details>
<summary>Les applications compagnons peuvent-elles être en marque blanche ?</summary>

Pas dans le cadre d'une commande de personnalisation standard. Les utilisateurs installent les applications Seedkeeper : prévoyez votre matériel d'accueil en conséquence.

</details>

<details>
<summary>Les appareils personnalisés arrivent-ils préconfigurés ?</summary>

Non, ils arrivent dans le même état que n'importe quelle autre unité. Configurer les appareils avant distribution est une étape de provisionnement de votre côté.

</details>

## Articles liés

- [Gestion de flotte et provisionnement en volume](/docs/business/fleet-management-and-bulk-provisioning)
- [Déployer Seedkeeper PRO dans votre organisation](/docs/business/deploying-seedkeeper-pro-in-your-organization)
- [Sécurité et conformité pour les organisations](/docs/business/security-compliance-for-organizations)
