---
title: "Déployer les passkeys FIDO2 via Microsoft Entra ID"
description: "Activez les passkeys sur tout le tenant, restreignez l'enregistrement au matériel approuvé par AAGUID, et déployez sans verrouiller personne dehors."
keywords: [Entra ID FIDO2, déployer passkeys Entra, restriction de clés AAGUID, stratégie de méthodes d'authentification, imposer attestation, Entra ID sans mot de passe]
sidebar_position: 6
sidebar_label: "Déployer FIDO2 via Entra ID"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quel rôle faut-il pour configurer cela ?", a: "Administrateur de stratégie d'authentification, ou Administrateur général. Le paramètre se trouve sous Protection, Méthodes d'authentification, Stratégies dans le centre d'administration Entra."},
  {q: "Comment n'autoriser que les clés de sécurité fournies par l'entreprise ?", a: "Activez l'attestation, puis réglez la stratégie de restriction de clés sur Autoriser et ajoutez les AAGUID que vous approuvez. L'enregistrement avec tout autre authentificateur échoue alors. L'AAGUID de la Seedkeeper PRO est 328dec20-698f-5d33-aed3-97daba53b1b0."},
  {q: "Un AAGUID identifie-t-il un appareil précis ?", a: "Non, il identifie une marque et un modèle. Lier un credential à une unité physique exigerait l'enterprise attestation : votre propre inventaire au moment de la remise constitue donc le registre pratique."},
  {q: "Puis-je provisionner des passkeys pour les utilisateurs à l'avance ?", a: "Non. Une passkey est créée par le service lors de l'enregistrement, sur l'appareil présent à cet instant : les utilisateurs doivent donc enrôler la leur. Les PIN et les identifiants OTP peuvent, eux, être provisionnés au préalable."},
  {q: "Dois-je désactiver le SMS une fois les passkeys fonctionnelles ?", a: "Oui, groupe par groupe à mesure de leur enrôlement. Un compte est protégé par sa méthode active la plus faible : laisser le SMS actif préserve la voie qu'emprunterait un attaquant."},
  {q: "Que se passe-t-il si j'active les restrictions de clés après que des gens se sont enregistrés ?", a: "Les credentials existants continuent de fonctionner, y compris non conformes : la stratégie est donc contournée pour tous ceux déjà enrôlés. Restreignez avant d'annoncer l'enrôlement."},
]} />

<p class="doc-subtitle">Configuration à l'échelle du tenant, pour les administrateurs</p>

<p class="platform-note">Web</p>

<div class="tldr">

Activez la méthode **Clé d'accès (FIDO2)** dans le centre d'administration Entra, autorisez l'enregistrement en libre-service, et restreignez le matériel accepté par AAGUID. La valeur de la Seedkeeper PRO est `328dec20-698f-5d33-aed3-97daba53b1b0`. Mettez la restriction de clés en place **avant** de demander aux gens de s'enrôler, et gardez un compte de secours hors de la stratégie.

</div>

## Ce que couvre cet article

Il s'agit du versant administrateur. Si vous êtes un individu enregistrant votre propre appareil sur un compte professionnel, c'est plutôt [Comment configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id) qu'il vous faut.

Vous aurez besoin du rôle **Administrateur de stratégie d'authentification**, ou Administrateur général.

:::note[Microsoft renomme régulièrement]
Les libellés de menu du centre d'administration Entra changent régulièrement, et les paramètres de passkey ont été déplacés plus d'une fois. La structure ci-dessous est stable ; si un libellé diffère, cherchez l'équivalent le plus proche sous Méthodes d'authentification.
:::

## Étape 1 : activer la méthode

Dans le [centre d'administration Microsoft Entra](https://entra.microsoft.com) :

**Protection** → **Méthodes d'authentification** → **Stratégies** → **Clé d'accès (FIDO2)**

Réglez **Activer** sur **Oui**, et choisissez à qui cela s'applique. Cibler d'abord un groupe pilote plutôt que Tous les utilisateurs fait la différence entre un déploiement fluide et une file de tickets - voir [Déployer Seedkeeper PRO dans votre organisation](/docs/business/deploying-seedkeeper-pro-in-your-organization).

## Étape 2 : configurer la méthode

Dans l'onglet **Configurer** :

**Autoriser la configuration en libre-service** → **Oui**. Les utilisateurs enregistrent leur propre appareil depuis leur page Informations de sécurité. L'alternative consiste à provisionner chaque credential de façon centralisée, ce qui représente bien plus de travail et, pour les passkeys, n'est pas possible à l'avance - une passkey est créée par le service au moment de l'enregistrement.

**Imposer l'attestation** → **Oui**, si vous voulez savoir quel matériel a été utilisé. L'authentificateur présente alors une déclaration signée de sa marque et de son modèle, qu'Entra valide contre le FIDO Metadata Service.

La Seedkeeper PRO fournit une attestation standard : elle satisfait donc ce paramètre. Notez qu'elle identifie un **modèle**, non une unité individuelle - voir [Attestation](/docs/glossary/attestation).

:::warning[Imposer l'attestation exclut certains authentificateurs]
Plusieurs fournisseurs de passkeys logicielles ne fournissent pas d'attestation qu'Entra puisse valider. Activer ce réglage peut bloquer des credentials que vos utilisateurs possèdent déjà. Annoncez-le avant d'activer, pas après.
:::

## Étape 3 : restreindre au matériel approuvé

C'est le paramètre qui transforme une politique écrite en contrôle effectif.

Sous **Stratégie de restriction de clés** :

- **Imposer des restrictions de clés** → **Oui**
- **Restreindre des clés spécifiques** → **Autoriser**
- **Ajouter un AAGUID**, puis saisissez les valeurs que vous approuvez

Seedkeeper PRO :

```
328dec20-698f-5d33-aed3-97daba53b1b0
```

Avec une allowlist en place, l'enregistrement avec autre chose échoue simplement. Cela exclut les passkeys synchronisées sur un compte iCloud ou Google personnel, ce qui est généralement l'objectif : ces credentials vivent dans le cloud personnel d'un collaborateur, hors de votre contrôle et hors de votre capacité de révocation.

Deux remarques pratiques. **Les restrictions de clés exigent l'attestation** : l'étape 2 doit donc être activée pour que cela fonctionne. Et **la liste demande d'être maintenue** à mesure que vous approuvez de nouveaux modèles - c'est une petite tâche récurrente, pas une opération unique.

## Étape 4 : tester avant d'annoncer

Enregistrez un appareil vous-même, sur un vrai compte, avant que la stratégie n'atteigne qui que ce soit d'autre.

À vérifier : que l'enregistrement réussit avec un AAGUID approuvé, qu'il **échoue** avec un authentificateur non approuvé, et que la connexion fonctionne depuis une machine autre que celle d'enregistrement. Ce dernier cas est celui où le NFC et la disponibilité des lecteurs se révèlent - voir [Device Capabilities](/docs/developers/device-capabilities#transports).

## Étape 5 : conserver un compte de secours

Un compte d'accès d'urgence, exclu de la stratégie, avec des identifiants conservés hors ligne et en dehors des systèmes qu'il peut atteindre.

Il existe pour le jour où votre voie d'authentification habituelle est indisponible : une stratégie mal configurée, un certificat expiré, une panne Microsoft. Conserver ses identifiants à l'intérieur du tenant qu'il est censé sauver en annule entièrement l'intérêt.

Les recommandations de Microsoft préconisent au moins deux comptes de ce type, exclus des stratégies d'accès conditionnel et surveillés en cas d'usage.

## Étape 6 : retirer les méthodes plus faibles

Un compte est protégé par sa **méthode active la plus faible**, non par la plus forte.

Une fois les passkeys fonctionnelles pour un groupe, désactivez le SMS et l'appel vocal pour ce groupe dans la même stratégie de méthodes d'authentification. Les laisser actifs en repli préserve exactement la voie qu'emprunterait un attaquant - voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

Faites-le groupe par groupe, après l'enrôlement du groupe. Le faire d'emblée sur tout le tenant verrouille les gens dehors.

## L'accès conditionnel

La stratégie de méthodes d'authentification décide ce que les utilisateurs *peuvent* enregistrer. L'accès conditionnel décide ce qu'ils *doivent* utiliser.

Exiger une MFA résistante au phishing pour les rôles d'administration et pour les accès distants est là où se situe l'essentiel de la réduction de risque. Créez d'abord la stratégie en mode rapport uniquement, examinez l'impact pendant une semaine, puis appliquez-la.

C'est aussi la combinaison qu'attendent de plus en plus les orientations des autorités de contrôle - voir [Les passkeys et NIS2](/docs/security-academy/passkeys/passkey-vs-password#les-passkeys-et-nis2) et [Sécurité et conformité pour les organisations](/docs/business/security-compliance-for-organizations).

## Ce qui tourne mal

**Restrictions de clés activées après l'enrôlement.** Les credentials non conformes existants continuent de fonctionner et contournent discrètement la stratégie. Restreignez d'abord.

**Attestation imposée sans prévenir.** Les utilisateurs de passkeys logicielles trouvent l'enregistrement cassé et ouvrent des tickets.

**Pas de compte de secours.** Découvert le jour où il aurait fallu l'avoir.

**Anciennes méthodes laissées actives.** Le déploiement est terminé sur le papier alors que le SMS reste opérationnel.

**Pas de lecteurs sur les postes fixes.** La Seedkeeper PRO parle NFC et contact ISO 7816, sans voie USB. Confirmez la couverture avant de commander à grande échelle - voir [Gestion de flotte et provisionnement en volume](/docs/business/fleet-management-and-bulk-provisioning).

## Ressources officielles Microsoft

- [Activer les clés d'accès dans Microsoft Entra ID](https://learn.microsoft.com/fr-fr/entra/identity/authentication/how-to-enable-passkey-fido2)
- [Stratégie de méthodes d'authentification](https://learn.microsoft.com/fr-fr/entra/identity/authentication/concept-authentication-methods-manage)
- [Gérer les comptes d'accès d'urgence](https://learn.microsoft.com/fr-fr/entra/identity/role-based-access-control/security-emergency-access)

## FAQ

<details>
<summary>Quel rôle faut-il pour configurer cela ?</summary>

Administrateur de stratégie d'authentification, ou Administrateur général. Le paramètre se trouve sous Protection, Méthodes d'authentification, Stratégies dans le centre d'administration Entra.

</details>

<details>
<summary>Comment n'autoriser que les clés de sécurité fournies par l'entreprise ?</summary>

Activez l'attestation, puis réglez la stratégie de restriction de clés sur Autoriser et ajoutez les AAGUID que vous approuvez. L'enregistrement avec tout autre authentificateur échoue alors. L'AAGUID de la Seedkeeper PRO est `328dec20-698f-5d33-aed3-97daba53b1b0`.

</details>

<details>
<summary>Un AAGUID identifie-t-il un appareil précis ?</summary>

Non, il identifie une marque et un modèle. Lier un credential à une unité physique exigerait l'enterprise attestation : votre propre inventaire au moment de la remise constitue donc le registre pratique.

</details>

<details>
<summary>Puis-je provisionner des passkeys pour les utilisateurs à l'avance ?</summary>

Non. Une passkey est créée par le service lors de l'enregistrement, sur l'appareil présent à cet instant : les utilisateurs doivent donc enrôler la leur. Les PIN et les identifiants OTP peuvent, eux, être provisionnés au préalable.

</details>

<details>
<summary>Dois-je désactiver le SMS une fois les passkeys fonctionnelles ?</summary>

Oui, groupe par groupe à mesure de leur enrôlement. Un compte est protégé par sa méthode active la plus faible : laisser le SMS actif préserve la voie qu'emprunterait un attaquant.

</details>

<details>
<summary>Que se passe-t-il si j'active les restrictions de clés après que des gens se sont enregistrés ?</summary>

Les credentials existants continuent de fonctionner, y compris non conformes : la stratégie est donc contournée pour tous ceux déjà enrôlés. Restreignez avant d'annoncer l'enrôlement.

</details>

## Articles liés

- [Comment configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id)
- [Déployer Seedkeeper PRO dans votre organisation](/docs/business/deploying-seedkeeper-pro-in-your-organization)
- [Sécurité et conformité pour les organisations](/docs/business/security-compliance-for-organizations)
- [Device Capabilities](/docs/developers/device-capabilities)
- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
