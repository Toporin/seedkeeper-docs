---
title: "Sécurité et conformité pour les organisations"
description: "Ce que signifient réellement les certifications, ce que NIS2 attend de l'authentification, et comment prouver un contrôle plutôt que de l'affirmer."
keywords: [authentification NIS2, contrôle d'accès ISO 27001, certification FIDO2, EAL6+, MFA cyberassurance, preuve de conformité, audit attestation]
sidebar_position: 5
sidebar_label: "Sécurité et conformité"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "NIS2 impose-t-elle les passkeys ?", a: "Non. L'article 21(2)(j) exige une authentification multifacteur ou continue « lorsque cela est approprié », et la directive ne nomme aucune technologie. Ce que les orientations attendent de plus en plus est une authentification multifacteur résistante au phishing sur les comptes à privilèges et les accès distants, que les passkeys FIDO2 sont la façon standard de fournir."},
  {q: "Quelle différence entre FIDO2 Level 1 et EAL6+ ?", a: "Les deux évaluent des choses différentes. Le FIDO2 Level 1 certifie l'implémentation du protocole face aux attaques logicielles ; l'EAL6+ certifie le matériel du secure element face aux attaques physiques et par canaux auxiliaires. Ils sont complémentaires plutôt qu'alternatifs."},
  {q: "Comment prouver à un auditeur que seuls des appareils approuvés sont utilisés ?", a: "Par l'attestation et une allowlist d'AAGUID dans votre fournisseur d'identité. L'enregistrement avec un authentificateur non approuvé échoue alors au lieu d'être détecté après coup, ce qui transforme une politique écrite en contrôle effectif."},
  {q: "Pouvons-nous lier un credential à un appareil physique précis ?", a: "Pas par la seule attestation : un AAGUID identifie un modèle. L'enterprise attestation le permettrait mais elle est actuellement désactivée : votre inventaire au moment de la remise constitue donc le registre pratique."},
  {q: "Utiliser Seedkeeper introduit-il un sous-traitant au sens du RGPD ?", a: "Non. Il n'y a ni service cloud, ni compte, ni synchronisation : aucun élément d'identification ne transite par nous. Cela retire un fournisseur de l'évaluation que vous mèneriez autrement pour une alternative cloud."},
  {q: "Cela satisfera-t-il les exigences de notre cyberassurance ?", a: "Cela dépend de la rédaction de votre police, qu'il vaut la peine de lire plutôt que de supposer. Là où un assureur distingue la MFA résistante au phishing, des credentials FIDO2 liés au matériel avec attestation imposée constituent une réponse nettement plus solide qu'une MFA générique."},
]} />

<p class="doc-subtitle">Certifications, obligations, et ce que vous pouvez prouver</p>

<div class="tldr">

Les cadres de conformité nomment rarement une technologie - ils décrivent un résultat et attendent que vous le prouviez. Des credentials liés au matériel avec attestation vous permettent de **démontrer** quels appareils ont été utilisés plutôt que d'affirmer qu'une politique a été suivie, et c'est la différence qui intéresse un auditeur.

</div>

## Les certifications, et ce que chacune couvre

Deux certifications indépendantes, évaluant des choses différentes. Les confondre est courant et affaiblit votre propre argumentaire devant quiconque est technique.

**FIDO2 Level 1**, certificat `FA001202600016`, délivré par la FIDO Alliance. Il évalue l'**implémentation du protocole** : l'interopérabilité, et la résistance aux attaques logicielles à grande échelle. Il atteste que l'implémentation FIDO2 est correcte et testée de façon indépendante plutôt qu'auto-déclarée.

**Common Criteria EAL6+**, sur le secure element lui-même. Il évalue le **matériel** : la résistance aux attaques physiques et par canaux auxiliaires sur la puce qui protège les clés.

Lus ensemble : l'un dit que le protocole est correctement implémenté, l'autre que le matériel détenant les clés est difficile à attaquer physiquement. Voir [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2#seedkeeper-pro--certifiée-fido2-level-1).

Les deux sont vérifiables sans nous croire sur parole - le certificat FIDO via l'[annuaire public](https://app.fido.cyber-pass.org/certificates/search), le firmware via son code source AGPLv3.

## NIS2

La directive européenne NIS2 étend les obligations de cybersécurité à un éventail d'organisations bien plus large que la précédente, y compris de nombreuses entreprises de taille intermédiaire dans des secteurs qui ne s'étaient jamais considérés comme réglementés.

**L'article 21(2)** énumère les mesures de gestion des risques que les entités concernées doivent adopter. L'authentification y figure au point **(j)**, couvrant l'authentification multifacteur ou continue, assortie de la formule « lorsque cela est approprié ». La directive est délibérément neutre technologiquement et ne nomme ni produit ni standard.

Ce qui a évolué, c'est la lecture d'« approprié ». Les orientations des autorités de contrôle et les référentiels sectoriels distinguent de plus en plus l'authentification multifacteur **résistante au phishing** du reste, et la traitent comme le standard attendu pour les comptes à privilèges et les accès distants. Un code à usage unique satisfait une exigence de MFA ; il ne satisfait pas la résistance au phishing - voir [Pourquoi l'OTP reste hameçonnable](/docs/security-academy/passkeys/passkey-vs-otp#pourquoi-lotp-reste-hameçonnable).

Notez également que l'article 21(2) comporte dix catégories. L'authentification en est une, et aucune décision d'authentification ne couvre les autres.

**Les délais de notification sont courts.** Une alerte précoce est due dans les 24 heures suivant la prise de connaissance d'un incident important, ce qui change ce que signifie se préparer : savoir qui décide, qui notifie, et où se trouvent les coordonnées, avant d'en avoir besoin.

:::note[Ceci est un éclairage, pas un avis juridique]
NIS2 est une directive : ce qui s'applique à vous relève de la transposition de votre pays et des obligations propres à votre secteur. En Belgique, le cadre est administré par le Centre pour la Cybersécurité Belgique. Considérez ceci comme un point de départ pour une conversation avec la personne en charge de votre conformité, non comme un substitut à celle-ci.
:::

Voir [Les passkeys et NIS2](/docs/security-academy/passkeys/passkey-vs-password#les-passkeys-et-nis2) pour le même terrain vu du côté technologique.

## ISO 27001 et cadres similaires

Le contrôle d'accès est un domaine de contrôle dans tout cadre sérieux, et aucun ne nomme davantage de produit.

Ce qu'un auditeur a tendance à demander : qui dispose d'un accès à privilèges, comment il est authentifié, comment il est revu, et comment il est retiré au départ de quelqu'un. Les clés matérielles aident sur la deuxième et la quatrième question, à condition d'avoir le processus qui va avec - voir [Arrivées et départs des collaborateurs](/docs/business/employee-onboarding-and-offboarding).

L'appareil n'est pas un produit de conformité. C'est un contrôle qui rend une partie d'une obligation existante plus facile à satisfaire et plus facile à prouver.

## Prouver plutôt qu'affirmer

C'est la partie qu'il vaut la peine de bien comprendre, car c'est là que le matériel se distingue d'une politique.

Une règle écrite disant « le personnel doit utiliser une authentification approuvée » est une affirmation. Rien dans vos journaux ne distingue un appareil approuvé d'une passkey synchronisée sur le compte cloud personnel de quelqu'un.

**L'attestation change cela.** À l'enregistrement, l'authentificateur peut présenter une déclaration signée identifiant sa marque et son modèle via un AAGUID. Votre fournisseur d'identité peut l'exiger et n'autoriser que les valeurs approuvées : un enregistrement correspond alors à la politique, ou n'a pas lieu.

L'AAGUID de la Seedkeeper PRO :

```
328dec20-698f-5d33-aed3-97daba53b1b0
```

En pratique, cela vous donne trois choses exploitables lors d'un audit : une politique exprimée en configuration plutôt qu'en document, un registre d'enregistrement montrant quel modèle a été utilisé, et un contrôle technique qui empêche les enregistrements non conformes au lieu de les détecter après coup.

Voir [Comment configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id) et, pour la vue d'implémentation, [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide).

Notez qu'un AAGUID identifie un **modèle**, non une unité individuelle. Lier un credential à un appareil précis exige l'enterprise attestation, implémentée dans le firmware mais actuellement désactivée - votre propre inventaire est la réponse pratique.

## La cyberassurance

Les assureurs interrogent de plus en plus sur l'authentification multifacteur dans leurs questionnaires, et certains distinguent désormais spécifiquement les méthodes résistantes au phishing, en particulier pour les accès à privilèges et distants.

Il vaut la peine de vérifier la rédaction de votre police plutôt que de supposer. Là où la distinction existe, pouvoir déclarer que les comptes à privilèges utilisent des credentials FIDO2 liés au matériel, avec attestation imposée, est une réponse plus solide que « nous utilisons la MFA ».

## La protection des données

Un argument souvent négligé et qui compte au regard du RGPD : **aucun tiers ne détient vos identifiants.**

Il n'y a ni coffre-fort cloud, ni compte fournisseur, ni synchronisation. Rien de votre authentification ne transite par Satochip, ce qui signifie un sous-traitant de moins à évaluer, documenter et surveiller dans votre chaîne d'approvisionnement - elle-même une considération NIS2 au titre de l'article 21(2).

À comparer avec un gestionnaire de mots de passe cloud ou un fournisseur de passkeys synchronisées, qui introduisent tous deux un sous-traitant détenant des éléments d'identification pour votre compte. Aucun des deux n'est fautif ; les deux représentent du travail.

## FAQ

<details>
<summary>NIS2 impose-t-elle les passkeys ?</summary>

Non. L'article 21(2)(j) exige une authentification multifacteur ou continue « lorsque cela est approprié », et la directive ne nomme aucune technologie. Ce que les orientations attendent de plus en plus est une authentification multifacteur résistante au phishing sur les comptes à privilèges et les accès distants, que les passkeys FIDO2 sont la façon standard de fournir.

</details>

<details>
<summary>Quelle différence entre FIDO2 Level 1 et EAL6+ ?</summary>

Les deux évaluent des choses différentes. Le FIDO2 Level 1 certifie l'implémentation du protocole face aux attaques logicielles ; l'EAL6+ certifie le matériel du secure element face aux attaques physiques et par canaux auxiliaires. Ils sont complémentaires plutôt qu'alternatifs.

</details>

<details>
<summary>Comment prouver à un auditeur que seuls des appareils approuvés sont utilisés ?</summary>

Par l'attestation et une allowlist d'AAGUID dans votre fournisseur d'identité. L'enregistrement avec un authentificateur non approuvé échoue alors au lieu d'être détecté après coup, ce qui transforme une politique écrite en contrôle effectif.

</details>

<details>
<summary>Pouvons-nous lier un credential à un appareil physique précis ?</summary>

Pas par la seule attestation - un AAGUID identifie un modèle. L'enterprise attestation le permettrait mais elle est actuellement désactivée : votre inventaire au moment de la remise constitue donc le registre pratique.

</details>

<details>
<summary>Utiliser Seedkeeper introduit-il un sous-traitant au sens du RGPD ?</summary>

Non. Il n'y a ni service cloud, ni compte, ni synchronisation : aucun élément d'identification ne transite par nous. Cela retire un fournisseur de l'évaluation que vous mèneriez autrement pour une alternative cloud.

</details>

<details>
<summary>Cela satisfera-t-il les exigences de notre cyberassurance ?</summary>

Cela dépend de la rédaction de votre police, qu'il vaut la peine de lire plutôt que de supposer. Là où un assureur distingue la MFA résistante au phishing, des credentials FIDO2 liés au matériel avec attestation imposée constituent une réponse nettement plus solide qu'une MFA générique.

</details>

## Articles liés

- [Pourquoi des clés matérielles pour votre entreprise](/docs/business/why-hardware-keys-for-your-business)
- [Déployer les passkeys FIDO2 via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id)
- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
