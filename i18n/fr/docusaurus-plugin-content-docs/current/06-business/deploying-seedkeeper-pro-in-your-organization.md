---
title: "Déployer Seedkeeper PRO dans votre organisation"
description: "Un plan de déploiement qui survit au contact des utilisateurs : groupe pilote, comptes prioritaires, les deux décisions à prendre tôt, et ce qui casse sinon."
keywords: [déployer clés de sécurité, déploiement clés matérielles, déploiement sans mot de passe, groupe pilote, déploiement passkey entreprise, sécurité PME]
sidebar_position: 2
sidebar_label: "Déployer dans votre organisation"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Combien de temps prend un déploiement pour une entreprise de cinquante personnes ?", a: "Typiquement un pilote de deux semaines, puis deux à quatre semaines pour les comptes à privilèges, puis le reste par équipe. La contrainte tient généralement à la disponibilité des lecteurs et au calendrier plutôt qu'au travail technique."},
  {q: "Chaque collaborateur doit-il recevoir deux appareils ?", a: "Toute personne disposant d'un accès à privilèges, oui : une passkey matérielle ne peut pas être copiée, un appareil unique est donc un point de défaillance unique. Pour les autres, cela dépend du coût d'un verrouillage de compte pour ce poste."},
  {q: "Pouvons-nous imposer les clés matérielles de façon centralisée ?", a: "Oui, là où votre fournisseur d'identité le permet. Microsoft Entra ID peut exiger des méthodes résistantes au phishing et restreindre l'enregistrement au matériel approuvé par AAGUID."},
  {q: "Que faire si certains ordinateurs n'ont pas de lecteur de carte ?", a: "L'appareil exige un lecteur NFC ou un lecteur de cartes à puce à contact, et il n'existe aucune voie USB. Confirmez la couverture de votre parc pendant le pilote, avant de commander à grande échelle."},
  {q: "Faut-il conserver le SMS comme méthode de secours ?", a: "Non, dès qu'une méthode plus solide fonctionne. Un compte est protégé par sa méthode active la plus faible : laisser le SMS actif préserve la voie qu'emprunterait un attaquant."},
]} />

<p class="doc-subtitle">Du pilote à tout le monde, sans les douleurs habituelles</p>

<div class="tldr">

Déployez en trois phases : un pilote de cinq à dix personnes, puis les comptes à privilèges, puis tout le monde. Deux décisions prises tôt déterminent la réussite du projet - **combien d'appareils chaque personne reçoit**, et **ce qui se passe quand l'un est perdu**. Ratez-les et le déploiement s'enlise au premier incident.

</div>

## Les deux décisions à prendre d'abord

Tout le reste est de la logistique. Ces deux-là sont structurelles, et les changer en cours de déploiement impose de reprendre chaque compte déjà enregistré.

### Un appareil par personne, ou deux ?

Une passkey liée au matériel ne peut pas être copiée. Un utilisateur doté d'un seul appareil constitue un point de défaillance unique, et le jour où il le perd, quelqu'un dans votre organisation passe des heures sur la récupération de compte.

**Fournissez deux appareils par personne** pour quiconque dispose d'un accès à privilèges. Une carte dans le portefeuille et une bague, ou une carte en service et une carte dans un tiroir. Les deux sont enregistrés sur chaque compte en même temps - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

L'écart de coût est faible. L'alternative consiste à découvrir le problème pendant un incident.

### Qui détient l'appareil de secours ?

Deux modèles praticables, et il faut choisir délibérément.

**L'utilisateur détient les deux.** Le plus simple, et l'utilisateur est responsable de ranger le second quelque part de sensé. Fonctionne bien quand les gens sont raisonnablement soigneux.

**L'organisation détient le second.** Un appareil enregistré conservé dans un coffre, récupéré au besoin. Meilleur contrôle, et cela évite qu'un collaborateur qui part reparte avec les deux. Exige une procédure de récupération qui ne dépende pas de la disponibilité d'une seule personne.

Il n'existe pas de troisième option où personne ne détient de secours. Cela revient à un seul appareil.

## Phase 1 : le pilote

Cinq à dix personnes, choisies pour leur tolérance plutôt que pour leur ancienneté. Vous voulez celles qui vous diront ce qui a mal tourné, pas celles qui contourneront discrètement.

Incluez au moins une personne en télétravail, une sur Mac, et une non technique. Ces trois-là feront remonter l'essentiel de ce qu'il faut corriger.

**Ce qu'il faut faire pendant le pilote :**

- Provisionner les appareils - voir [Gestion de flotte et provisionnement en volume](/docs/business/fleet-management-and-bulk-provisioning)
- Enregistrer chaque personne sur sa messagerie et un autre service
- Les laisser travailler normalement pendant deux semaines
- Tester délibérément une perte d'appareil, avec la procédure que vous comptez utiliser en production

**Ce que vous mesurez :** combien de questions de support par personne, où les gens ont bloqué, et si la situation des lecteurs fonctionne sur chaque machine réellement utilisée.

C'est ce dernier point qui fait échouer le plus de déploiements. L'appareil exige un lecteur NFC ou un lecteur de cartes à puce à contact, et il n'existe aucune voie USB - voir [Device Capabilities](/docs/developers/device-capabilities#transports). Confirmez que votre parc peut le lire avant de commander pour tout le monde.

## Phase 2 : les comptes à privilèges

Administrateurs, accès distants, finance. C'est là que se situe l'essentiel de la réduction de risque, et il vaut la peine de la terminer avant d'aller plus loin.

**Imposez-le de façon centralisée plutôt que de le demander.** Si vous utilisez Microsoft Entra ID, vous pouvez exiger des méthodes résistantes au phishing et restreindre le matériel accepté par AAGUID - voir [Déployer les passkeys FIDO2 via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id).

**Conservez un compte de secours.** Un compte d'urgence avec ses propres identifiants, conservés hors ligne et en dehors des systèmes auxquels il donne accès. Il existe précisément pour le jour où votre voie habituelle est indisponible, ce qui exclut de garder ses identifiants à l'intérieur de cette voie.

**Retirez les méthodes plus faibles dès que la plus forte fonctionne.** Un compte est protégé par sa méthode active la plus faible. Laisser le SMS actif en repli maintient cette voie ouverte pour un attaquant - voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## Phase 3 : tous les autres

À ce stade, la procédure est connue et les surprises sont derrière vous. Étendez par équipe plutôt que d'un coup, et gardez le groupe pilote disponible comme support informel - les gens demandent à un collègue avant d'ouvrir un ticket.

## Ce qu'il faut dire aux gens

Tenez-vous-en à trois points. Plus long ne sera pas lu.

1. **Ce que cela remplace.** Plus de mot de passe pour les comptes concernés, plus de codes à taper avant qu'ils n'expirent.
2. **Quoi faire en cas de perte.** Qui prévenir, et ce qui se passe ensuite. Dites clairement que signaler rapidement une perte est attendu, pas gênant.
3. **Que le PIN ne peut pas être récupéré.** Huit tentatives incorrectes verrouillent l'applet FIDO, et la récupération implique d'effacer toutes les passkeys de l'appareil - voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

Passez la cryptographie. Personne n'en a besoin, et l'expliquer fait paraître le changement plus compliqué qu'il ne l'est.

## Ce qui tourne mal d'habitude

**Pas de lecteurs sur les postes fixes.** Le blocage le plus fréquent de tous. Réglez-le avant de commander les appareils.

**Un seul appareil par personne.** Le déploiement se passe bien jusqu'à la première perte, puis s'enlise pendant que tout le monde reconsidère la question.

**Anciennes méthodes laissées actives.** Le déploiement est terminé sur le papier et la voie faible est toujours ouverte.

**Pas de processus de départ.** Les appareils s'accumulent dans les tiroirs et les accès restent enregistrés. Voir [Arrivées et départs des collaborateurs](/docs/business/employee-onboarding-and-offboarding).

**Annoncer cela comme un projet de sécurité.** Cela passe mieux comme une amélioration de confort qui se trouve être plus sûre, parce que pour l'utilisateur c'est exactement ce que c'est.

## FAQ

<details>
<summary>Combien de temps prend un déploiement pour une entreprise de cinquante personnes ?</summary>

Typiquement un pilote de deux semaines, puis deux à quatre semaines pour les comptes à privilèges, puis le reste par équipe. La contrainte tient généralement à la disponibilité des lecteurs et au calendrier plutôt qu'au travail technique.

</details>

<details>
<summary>Chaque collaborateur doit-il recevoir deux appareils ?</summary>

Toute personne disposant d'un accès à privilèges, oui - une passkey matérielle ne peut pas être copiée, un appareil unique est donc un point de défaillance unique. Pour les autres, cela dépend du coût d'un verrouillage de compte pour ce poste.

</details>

<details>
<summary>Pouvons-nous imposer les clés matérielles de façon centralisée ?</summary>

Oui, là où votre fournisseur d'identité le permet. Microsoft Entra ID peut exiger des méthodes résistantes au phishing et restreindre l'enregistrement au matériel approuvé par AAGUID.

</details>

<details>
<summary>Que faire si certains ordinateurs n'ont pas de lecteur de carte ?</summary>

L'appareil exige un lecteur NFC ou un lecteur de cartes à puce à contact, et il n'existe aucune voie USB. Confirmez la couverture de votre parc pendant le pilote, avant de commander à grande échelle.

</details>

<details>
<summary>Faut-il conserver le SMS comme méthode de secours ?</summary>

Non, dès qu'une méthode plus solide fonctionne. Un compte est protégé par sa méthode active la plus faible : laisser le SMS actif préserve la voie qu'emprunterait un attaquant.

</details>

## Articles liés

- [Gestion de flotte et provisionnement en volume](/docs/business/fleet-management-and-bulk-provisioning)
- [Arrivées et départs des collaborateurs](/docs/business/employee-onboarding-and-offboarding)
- [Déployer les passkeys FIDO2 via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
