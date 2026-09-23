---
title: "Les gestionnaires de mots de passe expliqués"
description: "Comparaison lucide de toutes les façons de gérer ses mots de passe - de la mémoire aux gestionnaires cloud et au matériel dédié - et comment les combiner."
keywords: [gestionnaire de mots de passe, meilleur gestionnaire, cloud ou hors ligne, KeePass, gestionnaire matériel, stockage mot de passe, NIS2]
sidebar_position: 4
sidebar_label: "Les gestionnaires de mots de passe expliqués"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Faut-il n'en choisir qu'un seul ?", a: "Non. Combiner deux ou trois outils, chacun couvrant ce qu'il fait le mieux, constitue généralement l'approche la plus solide."},
  {q: "Un gestionnaire cloud n'est-il pas préférable à rien ?", a: "Très certainement. Cette comparaison porte sur les arbitrages entre bonnes options, et non sur un procès des gestionnaires cloud. Utiliser un gestionnaire dédié, quel qu'il soit, est une amélioration majeure par rapport à la mémoire ou à la réutilisation."},
  {q: "Pourquoi vouloir un appareil au stockage aussi limité ?", a: "Ce n'est pas aussi limité qu'il y paraît : les 8 Ko d'une Seedkeeper contiennent environ 100 mots de passe, selon la longueur des libellés et des détails associés à chacun. C'est largement suffisant pour les comptes que l'on souhaite réellement protéger de cette façon."},
  {q: "Ai-je encore besoin d'un gestionnaire de mots de passe si j'utilise des passkeys ?", a: "Oui, pour des années encore. La prise en charge des passkeys reste partielle : la plupart de vos comptes continueront d'utiliser des mots de passe, qui doivent rester longs, uniques et générés."},
  {q: "Un gestionnaire matériel est-il excessif pour un usage personnel ?", a: "Cela dépend de ce que valent les comptes. Pour des comptes ordinaires, un gestionnaire cloud est déjà une nette amélioration. Le matériel prend tout son sens lorsqu'une fuite chez un fournisseur serait réellement dommageable, ou lorsque vous ne voulez aucun tiers dans la chaîne."},
  {q: "Que se passe-t-il si je perds ma Seedkeeper ?", a: "Tout dépend de la préparation : un équipement secondaire enregistré à l'avance permet de restaurer vos secrets sur un nouvel appareil."},
]} />

import BuySeedkeeperPro from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-seedkeeper-pro.mdx';

<p class="doc-subtitle">Il n'y a pas une bonne réponse, seulement la bonne combinaison</p>

<div class="tldr">

Aucun gestionnaire de mots de passe ne convient à tous les pans de votre vie. Les gestionnaires cloud sont pratiques mais placent votre confiance dans un tiers ; les outils locaux comme KeePass ou une Seedkeeper vous laissent le contrôle total mais exigent davantage de vous. Les meilleures configurations en combinent généralement deux ou trois, chacun sur le terrain où il excelle.

</div>

## Ce que vous faites probablement déjà

Avant de comparer des outils dédiés, autant être honnête sur le point de départ réel de la plupart des gens.

**La mémoire, des variations réutilisées, ou « j'ajoute un chiffre à la fin ».** Gratuit, aucune installation - et, comme expliqué dans [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous), l'une des habitudes les plus risquées en sécurité numérique.

**Un tableur, une application de notes, ou un carnet papier.** Mieux que la mémoire seule, puisque cela permet des mots de passe réellement uniques - mais non chiffré, facile à perdre, et à un seul coup d'œil (ou à une sauvegarde synchronisée) de tout exposer d'un coup.

Ni l'un ni l'autre n'est vraiment une « solution », plutôt un point de départ. Ils sont mentionnés ici parce que la plupart des gens migrent *depuis* l'un d'eux, et non depuis rien.

## La solution qu'on veut vous vendre : les gestionnaires cloud

Des services comme Bitwarden, 1Password ou Dashlane stockent votre coffre-fort chiffré sur leurs serveurs et le synchronisent sur tous vos appareils.

**Avantages :**
- Remplissage automatique dans les navigateurs et les applications - réellement sans effort au quotidien
- Synchronisation automatique entre téléphone, ordinateur portable et tablette
- Récupération de compte facilitée en cas d'oubli du mot de passe maître (variable selon le fournisseur)
- Fonctions de partage pour les familles ou les équipes

**Inconvénients :**
- Votre coffre-fort réside sur l'infrastructure de quelqu'un d'autre : vous faites confiance à sa sécurité, pas seulement à la vôtre
- Un abonnement, dans la plupart des cas, pour l'ensemble des fonctionnalités
- Une cible unique et particulièrement attirante : les éditeurs de gestionnaires de mots de passe sont des cibles de choix précisément à cause de ce qu'ils détiennent
- Une connexion internet est nécessaire pour l'essentiel de ce qui fait leur commodité

:::warning[Ce n'est pas une hypothèse]
En 2022, LastPass a subi une intrusion au cours de laquelle des attaquants ont exfiltré des coffres-forts clients chiffrés. C'est exactement le risque décrit ci-dessus, survenu dans la réalité : plus un gestionnaire de mots de passe devient volumineux et populaire, plus il concentre de valeur en un seul endroit - et plus il attire des attaquants qui ont tout à gagner à n'y pénétrer qu'une fois.
:::

## Les solutions que vous gérez vous-même

### KeePass (et les applications compatibles)

Un gestionnaire de mots de passe gratuit et open source qui conserve une base de données chiffrée sous la forme d'un fichier unique - sur votre appareil, et non dans le cloud de quelqu'un d'autre.

**Avantages :**
- Vous contrôlez entièrement le fichier : aucune entreprise, aucun serveur, aucun abonnement
- Open source, donc sa sécurité est examinée publiquement depuis des décennies
- Fonctionne totalement hors ligne

**Inconvénients :**
- Aucune synchronisation automatique : déplacer la base entre appareils vous incombe (clé USB, votre propre stockage cloud, etc.)
- Remplissage automatique moins abouti que chez les gestionnaires cloud commerciaux
- Si vous perdez le fichier *et* que vous n'avez pas de sauvegarde, aucune entreprise ne peut vous aider

### Seedkeeper

Un appareil matériel qui génère et conserve vos mots de passe directement sur un secure element certifié - jamais sur votre téléphone, votre ordinateur ni aucun serveur.

**Avantages :**
- Les mots de passe ne touchent jamais internet, à aucun moment
- Aucun abonnement, aucun compte, aucune entreprise dont la compromission exposerait votre coffre-fort
- Un objet physique que vous pouvez transmettre, sauvegarder d'appareil à appareil, ou simplement tenir en main
- Contient plus que des mots de passe : les notes sécurisées et les [seed phrases](/docs/security-academy/seed-phrases/what-is-a-seed-phrase) résident sur le même secure element

**Inconvénients :**
- Pas de remplissage automatique au sens du navigateur : vous scannez l'appareil pour récupérer un mot de passe
- Vous devez avoir l'appareil sur vous pour accéder à ce qu'il contient

<BuySeedkeeperPro />

## Choisir la configuration adaptée à votre vie

C'est la partie que la plupart des comparatifs escamotent : **ces outils ne s'excluent pas mutuellement.** Voici comment envisager de les combiner selon les usages.

### Protéger votre mot de passe maître : Bitwarden + Seedkeeper

Si vous utilisez Bitwarden (ou un gestionnaire cloud équivalent) au quotidien pour sa commodité, votre mot de passe maître devient le mot de passe le plus important que vous possédiez : le perdre, c'est potentiellement tout perdre. Stockez-le comme note sécurisée sur votre Seedkeeper : une copie hors ligne, adossée au matériel, du seul mot de passe que vous ne pouvez jamais vous permettre d'oublier. Voir [Créer des notes sécurisées](/docs/product-documentation/password-manager/creating-secure-notes).

### Transmettre vos mots de passe à vos proches : Seedkeeper

L'héritage numérique est un problème réel et croissant : la plupart des services cloud rendent délibérément difficile l'accès d'un proche à vos comptes après votre disparition, même avec une fonction de « contact légataire ». Une Seedkeeper contourne entièrement le problème, puisque c'est un objet physique. La remettre à quelqu'un, avec le PIN, lui remet tout ce qu'elle contient - sans ticket de support, sans formalités successorales, sans attente.

### Les mots de passe que vous voulez toujours sur vous : KeePass + Seedkeeper en voyage

Pour les comptes auxquels vous devez pouvoir accéder de façon fiable en déplacement - surtout dans un endroit à la connexion incertaine - une base KeePass synchronisée sur votre appareil avant le départ, accompagnée d'une bague ou d'une carte Seedkeeper qui ne vous quitte pas, vous couvre avec ou sans réseau. Ni l'une ni l'autre ne dépend d'un fournisseur cloud joignable depuis l'endroit où vous vous trouvez.

## Ce que cela donne en entreprise

La même comparaison se joue différemment dès qu'une organisation est concernée, car deux questions supplémentaires apparaissent : qui d'autre se trouve dans la chaîne, et pouvez-vous en apporter la preuve.

Un gestionnaire de mots de passe cloud introduit un sous-traitant détenant vos identifiants, qu'il faut évaluer, documenter et surveiller. Ce n'est pas une raison de l'écarter - ce sont d'excellents outils - mais c'est du travail, et la directive européenne **NIS2** le place explicitement dans le périmètre : l'article 21(2) couvre le contrôle d'accès et la sécurité de la chaîne d'approvisionnement parmi les mesures de gestion des risques que les entités concernées doivent adopter.

Un appareil hors ligne conserve les identifiants sur du matériel qui vous appartient, sans tiers dans la chaîne et sans rien de synchronisé où que ce soit. Pour les comptes qui comptent le plus - identifiants d'administration, comptes de secours, éléments de récupération - cette différence rend souvent la décision évidente.

[Sécurité et conformité pour les organisations](/docs/business/security-compliance-for-organizations) détaille à quoi ressemble cette évaluation en pratique.

Notez que rien de tout cela ne remplace l'authentification elle-même. Un gestionnaire de mots de passe protège les secrets au repos ; il ne fait rien contre un identifiant hameçonné au moment de son usage. C'est un contrôle distinct, et celui que les orientations des autorités attendent de plus en plus comme résistant au phishing sur les accès à privilèges et distants - voir [Les passkeys et NIS2](/docs/security-academy/passkeys/passkey-vs-password#les-passkeys-et-nis2).

## Comparatif en un coup d'œil

| | Commodité | Hors ligne | Sans abonnement | Transmissible | Menace principale |
|---|---|---|---|---|---|
| Mémoire / réutilisation | Élevée | ✅ | ✅ | ❌ | Une fuite ouvre tous les comptes réutilisés |
| Tableur / notes | Moyenne | ✅ | ✅ | Partiel | Fichier non chiffré, exposé si l'appareil est perdu ou compromis |
| Gestionnaire cloud | Très élevée | ❌ | Rarement | Limité | Une fuite chez le fournisseur expose tous les coffres à la fois |
| KeePass | Moyenne | ✅ | ✅ | Partiel | Fichier perdu ou corrompu sans sauvegarde, aucun recours |
| Seedkeeper | Moyenne | ✅ | ✅ | ✅ | Perte physique sans équipement secondaire enregistré |

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Faut-il n'en choisir qu'un seul ?</summary>

Non - comme expliqué dans [Choisir la configuration adaptée à votre vie](#choisir-la-configuration-adaptée-à-votre-vie) ci-dessus, combiner deux ou trois outils, chacun couvrant ce qu'il fait le mieux, constitue généralement l'approche la plus solide.

</details>

<details>
<summary>Un gestionnaire cloud n'est-il pas préférable à rien ?</summary>

Très certainement - cette comparaison porte sur les arbitrages entre bonnes options, et non sur un procès des gestionnaires cloud. Utiliser un gestionnaire dédié, quel qu'il soit, est une amélioration majeure par rapport à la mémoire ou à la réutilisation.

</details>

<details>
<summary>Pourquoi vouloir un appareil au stockage aussi limité ?</summary>

Ce n'est pas aussi limité qu'il y paraît : les 8 Ko d'une Seedkeeper contiennent environ 100 mots de passe, selon la longueur des libellés et des détails associés à chacun. C'est largement suffisant pour les comptes que l'on souhaite réellement protéger de cette façon.

</details>

<details>
<summary>Ai-je encore besoin d'un gestionnaire de mots de passe si j'utilise des passkeys ?</summary>

Oui, pour des années encore. La prise en charge des passkeys reste partielle : la plupart de vos comptes continueront d'utiliser des mots de passe, qui doivent rester longs, uniques et générés. Voir [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password).

</details>

<details>
<summary>Un gestionnaire matériel est-il excessif pour un usage personnel ?</summary>

Cela dépend de ce que valent les comptes. Pour des comptes ordinaires, un gestionnaire cloud est déjà une nette amélioration par rapport à la mémoire ou à la réutilisation. Le matériel prend tout son sens lorsqu'une fuite chez un fournisseur serait réellement dommageable, ou lorsque vous ne voulez aucun tiers dans la chaîne.

</details>

<details>
<summary>Que se passe-t-il si je perds ma Seedkeeper ?</summary>

Voir [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery) pour configurer un équipement secondaire à l'avance.

</details>

## Articles liés

- [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password)
- [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password)
- [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer)
- [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password)
- [Créer des notes sécurisées](/docs/product-documentation/password-manager/creating-secure-notes)
- [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [Qu'est-ce que la MFA ?](/docs/security-academy/authentication/what-is-mfa)
- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
