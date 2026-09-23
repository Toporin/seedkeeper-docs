---
title: "Guide de cybersécurité pour petites entreprises"
description: "Sécurité pratique pour les organisations sans équipe dédiée : comptes, accès, sauvegardes, personnes, et ce qu'attend NIS2 si vous entrez dans son champ."
keywords: [cybersécurité petite entreprise, sécurité PME, sécurité comptes professionnels, conformité NIS2, MFA résistante au phishing, sensibilisation des collaborateurs]
sidebar_position: 7
sidebar_label: "Guide de cybersécurité pour petites entreprises"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quelle est la mesure de sécurité la plus importante pour une petite entreprise ?", a: "Maîtriser l'identité et les accès : un compte par personne, une authentification multifacteur sur tout ce qui est à privilèges, et un processus de départ qui fonctionne réellement. À cette échelle, la plupart des incidents commencent par un identifiant plutôt que par une faille."},
  {q: "Les petites entreprises sont-elles vraiment attaquées ?", a: "Oui, principalement par des outils automatisés qui ne choisissent pas leurs cibles selon la taille. Les organisations plus petites sont souvent plus faciles parce que ce n'est le travail de personne de s'en apercevoir, ce qui les rend attrayantes plutôt qu'indignes d'attention."},
  {q: "Qu'est-ce qu'une MFA résistante au phishing et pourquoi cela compte-t-il ?", a: "Une authentification qui ne peut pas être relayée à un attaquant, parce que rien ne s'affiche que vous puissiez recopier et que l'identifiant vérifie lui-même le domaine du site. En pratique, cela signifie des passkeys FIDO2 ou des clés de sécurité matérielles, plutôt que des codes à usage unique."},
  {q: "NIS2 s'applique-t-elle à mon entreprise ?", a: "Cela dépend de votre secteur, de votre taille et de la transposition de la directive par votre pays. Si vous opérez dans l'un des secteurs couverts et dépassez les seuils de taille, c'est probable, et c'est une question pour votre conseiller en conformité plutôt que pour une liste de contrôle."},
  {q: "Comment prévenir la fraude à la facture ?", a: "Une seule procédure : tout changement de coordonnées bancaires ou toute demande de virement inhabituelle est confirmé par un appel à un numéro connu, jamais à un numéro fourni dans le message. Cela arrête la grande majorité des tentatives de fraude au président et assimilées."},
  {q: "À quelle fréquence tester nos sauvegardes ?", a: "Au moins deux fois par an, en restaurant réellement quelque chose. Les sauvegardes non testées échouent dans une proportion non négligeable, et s'en apercevoir pendant un incident est le pire moment possible."},
]} />

import BuySeedkeeperPro from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-seedkeeper-pro.mdx';

<p class="doc-subtitle">Pour les organisations sans équipe sécurité</p>

<div class="tldr">

Les petites organisations sont attaquées par les mêmes outils automatisés que les grandes, et n'ont généralement personne dont le travail consiste à s'en apercevoir. La bonne nouvelle est que les mesures les plus efficaces sont peu coûteuses et ponctuelles : maîtriser qui a accès à quoi, rendre les identifiants résistants au phishing, conserver des sauvegardes réellement testées, et donner aux gens une règle dont ils se souviennent.

</div>

## D'où viennent réellement les attaques

Pas d'intrusions sophistiquées. Très majoritairement, trois voies :

**Un identifiant volé ou réutilisé.** Un collaborateur utilise le même mot de passe au travail et sur un site grand public ; ce site subit une fuite ; les identifiants sont testés automatiquement contre vos services. Aucune faille exploitée, aucun logiciel malveillant. Voir [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous).

**Un e-mail convaincant.** Une facture à régler, un fournisseur dont les coordonnées bancaires ont changé, un message du dirigeant demandant quelque chose d'urgent et de confidentiel. C'est celle qui coûte le plus d'argent aux entreprises.

**Un compte qui aurait dû être fermé.** Quelqu'un est parti il y a des mois et son accès est toujours actif.

Aucune des trois n'exige un attaquant compétent. Les trois sont peu coûteuses à fermer. S'il vous faut porter l'argument en interne plutôt que simplement agir, [Pourquoi des clés matérielles pour votre entreprise](/docs/business/why-hardware-keys-for-your-business) développe le même raisonnement avec le volet financier.

## Commencez par l'identité et les accès

### Un compte par personne

Les identifiants partagés rendent impossible de savoir qui a fait quoi, et impossible de révoquer un accès au départ de quelqu'un. C'est la faiblesse structurelle la plus courante dans les petites organisations, et la plus lourde de conséquences.

### Imposez une MFA résistante au phishing sur tout ce qui est à privilèges

L'authentification multifacteur bloque les identifiants volés. L'authentification multifacteur résistante au phishing bloque en plus la fausse page de connexion, c'est-à-dire ce qui vise réellement vos équipes.

Un code à usage unique peut être relayé vers le vrai site par un attaquant à l'intérieur de sa fenêtre de validité. Une passkey non, car l'identifiant lui-même vérifie le domaine avant de répondre. Voir [Pourquoi l'OTP reste hameçonnable](/docs/security-academy/passkeys/passkey-vs-otp#pourquoi-lotp-reste-hameçonnable).

Priorisez les comptes d'administration, les accès distants, et tout ce qui touche à l'argent.

Si vous utilisez Microsoft Entra ID, vous pouvez l'exiger de façon centralisée et restreindre le matériel accepté - voir [Comment configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id) et [Déployer les passkeys FIDO2 via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id).

Si vous développez ou exploitez le service vous-même plutôt que de l'acheter, [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide) traite de l'attestation et des listes blanches d'AAGUID côté implémentation.

<BuySeedkeeperPro />

### Le moindre privilège, revu de temps à autre

Les gens accumulent des accès et les perdent rarement. Deux fois par an, listez qui peut atteindre quoi et retirez ce qui n'est plus nécessaire. Cela prend un après-midi et ferme durablement une catégorie de risque.

### Ayez un processus de départ

Une liste de contrôle écrite : comptes désactivés, appareils restitués, identifiants partagés renouvelés, accès révoqués. Le jour même, à chaque fois. Sans elle, cela se retrouve systématiquement oublié.

L'ordre compte plus qu'on ne l'imagine : révoquez d'abord les identifiants, récupérez le matériel ensuite. Voir [Arrivées et départs des collaborateurs](/docs/business/employee-onboarding-and-offboarding) pour la liste complète.

## Protégez les identifiants eux-mêmes

Mots de passe d'administration, comptes de secours, codes de récupération, clés d'API et certificats sont le matériel que convoite le plus un attaquant.

Un gestionnaire de mots de passe cloud est un choix par défaut raisonnable pour les identifiants du quotidien, et il introduit un sous-traitant qui les détient - un élément à évaluer et à documenter. Pour le matériel le plus sensible, un support matériel hors ligne le tient entièrement hors de cette chaîne : aucun cloud, aucun compte fournisseur, rien de synchronisé. Voir [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained).

Le compte de secours mérite une réflexion particulière. Il existe précisément pour le jour où vos systèmes habituels sont indisponibles, ce qui exclut de conserver ses identifiants à l'intérieur de ces systèmes.

## Des sauvegardes que vous avez réellement testées

Un rançongiciel ne transforme une intrusion en événement existentiel que lorsque les sauvegardes échouent.

- **Gardez une copie hors ligne ou immuable.** Une sauvegarde joignable depuis le réseau est une sauvegarde que le rançongiciel chiffre aussi.
- **Restaurez quelque chose, délibérément, deux fois par an.** Les sauvegardes non testées échouent à peu près dans la proportion que vous redoutez.
- **Connaissez votre délai de restauration.** « Nous avons des sauvegardes » n'est pas un plan si la restauration prend une semaine que vous ne pouvez pas vous permettre.

## Les personnes

La sensibilisation ne rend personne immunisé, et prétendre le contraire explique pourquoi tant de formations sont gâchées. Ce qui fonctionne, c'est un petit nombre de règles qui survivent à la pression.

**Une règle avant tout : personne de légitime ne demande un mot de passe ou un code à usage unique.** Ni l'informatique, ni un fournisseur, ni le dirigeant.

**Une étape de vérification pour l'argent.** Tout changement de coordonnées bancaires, ou toute demande de virement inhabituelle, est confirmé par un rappel sur un numéro connu. Pas une réponse à l'e-mail, et pas un numéro qu'il contient. Cette seule procédure prévient la plupart des fraudes à la facture.

**Rendez le signalement simple et sans reproche.** Le dénouement coûteux n'est pas que quelqu'un clique sur un lien ; c'est que quelqu'un le cache pendant une journée. Dites-le explicitement, et pensez-le.

## Si vous entrez dans le champ de NIS2

La directive européenne NIS2 étend les obligations de cybersécurité à un éventail d'organisations bien plus large que la précédente, y compris de nombreuses entreprises de taille intermédiaire dans des secteurs qui ne s'étaient jamais considérés comme réglementés.

Deux points comptent le plus en pratique.

**L'article 21(2)** énumère les mesures de gestion des risques que les entités concernées doivent adopter - couvrant le contrôle d'accès, la sécurité de la chaîne d'approvisionnement, les sauvegardes et la continuité d'activité, et au point (j) l'authentification multifacteur ou continue. Les orientations lisent de plus en plus « approprié » comme signifiant résistant au phishing sur les comptes à privilèges et les accès distants. Voir [Les passkeys et NIS2](/docs/security-academy/passkeys/passkey-vs-password#les-passkeys-et-nis2).

**Les délais de notification sont courts.** Une alerte précoce est due dans les 24 heures suivant la prise de connaissance d'un incident important. Cela change ce que signifie se préparer : savoir qui décide, qui notifie, et où se trouvent les coordonnées, avant d'en avoir besoin.

[Sécurité et conformité pour les organisations](/docs/business/security-compliance-for-organizations) traite de ce qu'un auditeur a tendance à demander, et de la façon dont l'attestation transforme une politique écrite en contrôle effectif.

:::note[Ceci est un éclairage, pas un avis juridique]
NIS2 est une directive : ce qui s'applique à vous relève de la transposition de votre pays et des obligations propres à votre secteur. En Belgique, le cadre est administré par le Centre pour la Cybersécurité Belgique. Considérez ceci comme un point de départ pour une conversation avec la personne en charge de votre conformité.
:::

## Un premier trimestre réaliste

Si vous partez de rien, dans cet ordre :

1. **Inventoriez les comptes.** Qui a accès à quoi, et lesquelles de ces personnes travaillent encore ici.
2. **MFA partout, résistante au phishing sur l'administration et les accès distants.**
3. **Une liste de contrôle de départ**, écrite.
4. **Une sauvegarde hors ligne**, et un test de restauration.
5. **Les deux règles humaines** : personne ne demande d'identifiants, et un changement de coordonnées bancaires donne lieu à un rappel.
6. **Une liste de contacts d'incident** : qui appeler, dans quel ordre, y compris en dehors des heures ouvrables.

Rien de tout cela n'exige une équipe sécurité. Tout cela supprime plus de risque que n'importe quel outil que vous pourriez acheter à la place.

## FAQ

<details>
<summary>Quelle est la mesure de sécurité la plus importante pour une petite entreprise ?</summary>

Maîtriser l'identité et les accès : un compte par personne, une authentification multifacteur sur tout ce qui est à privilèges, et un processus de départ qui fonctionne réellement. À cette échelle, la plupart des incidents commencent par un identifiant plutôt que par une faille.

</details>

<details>
<summary>Les petites entreprises sont-elles vraiment attaquées ?</summary>

Oui, principalement par des outils automatisés qui ne choisissent pas leurs cibles selon la taille. Les organisations plus petites sont souvent plus faciles parce que ce n'est le travail de personne de s'en apercevoir, ce qui les rend attrayantes plutôt qu'indignes d'attention.

</details>

<details>
<summary>Qu'est-ce qu'une MFA résistante au phishing et pourquoi cela compte-t-il ?</summary>

Une authentification qui ne peut pas être relayée à un attaquant, parce que rien ne s'affiche que vous puissiez recopier et que l'identifiant vérifie lui-même le domaine du site. En pratique, cela signifie des passkeys FIDO2 ou des clés de sécurité matérielles, plutôt que des codes à usage unique.

</details>

<details>
<summary>NIS2 s'applique-t-elle à mon entreprise ?</summary>

Cela dépend de votre secteur, de votre taille et de la transposition de la directive par votre pays. Si vous opérez dans l'un des secteurs couverts et dépassez les seuils de taille, c'est probable - et c'est une question pour votre conseiller en conformité plutôt que pour une liste de contrôle.

</details>

<details>
<summary>Comment prévenir la fraude à la facture ?</summary>

Une seule procédure : tout changement de coordonnées bancaires ou toute demande de virement inhabituelle est confirmé par un appel à un numéro connu, jamais à un numéro fourni dans le message. Cela arrête la grande majorité des tentatives de fraude au président et assimilées.

</details>

<details>
<summary>À quelle fréquence tester nos sauvegardes ?</summary>

Au moins deux fois par an, en restaurant réellement quelque chose. Les sauvegardes non testées échouent dans une proportion non négligeable, et s'en apercevoir pendant un incident est le pire moment possible.

</details>

## Articles liés

- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained)
- [Comment configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id)
- [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer)
- [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked)
- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
- [Pourquoi des clés matérielles pour votre entreprise](/docs/business/why-hardware-keys-for-your-business)
- [Déployer Seedkeeper PRO dans votre organisation](/docs/business/deploying-seedkeeper-pro-in-your-organization)
