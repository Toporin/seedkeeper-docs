---
title: "Stratégie de sauvegarde des passkeys"
description: "Les passkeys ne se copient pas d'un appareil à l'autre. Enregistrez un équipement principal et un ou plusieurs secondaires sur chaque compte, dès le départ."
keywords: [sauvegarde passkey, seconde clé de sécurité, redondance passkey, clé FIDO2 de secours, enregistrer deux passkeys]
sidebar_position: 7
sidebar_label: "Stratégie de sauvegarde des passkeys"
---

import BuyBackupDevice from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-backup-device.mdx';
import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Cela fonctionne-t-il comme la sauvegarde de mes mots de passe ?", a: "Non. Les mots de passe sont copiés d'un appareil à l'autre par la procédure de sauvegarde. Les passkeys, elles, sont enregistrées indépendamment sur chaque appareil."},
  {q: "Combien d'équipements secondaires faut-il ?", a: "Au moins un équipement secondaire en plus de votre équipement principal constitue une base solide. Un second secondaire ajoute de la redondance si vous le souhaitez."},
  {q: "Que faire si je perds mon équipement principal mais que j'ai encore un secondaire ?", a: "Vous pouvez continuer à vous connecter avec votre équipement secondaire. Pensez à enregistrer un nouvel appareil pour remplacer celui que vous avez perdu, afin de ne pas vous retrouver avec un seul appareil."},
]} />

<p class="doc-subtitle">De la redondance, sans bouton de sauvegarde</p>

<div class="tldr">

Les passkeys ne peuvent pas être sauvegardées d'un appareil à l'autre comme le sont les mots de passe. Protégez-vous en enregistrant plusieurs appareils Seedkeeper PRO - un principal et un ou plusieurs secondaires - comme autant de passkeys distinctes sur chaque compte, dès le départ.

</div>

## Vue d'ensemble

C'est différent de votre gestionnaire de mots de passe, que vous sauvegardez d'appareil à appareil (voir [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)). Les passkeys ne fonctionnent pas ainsi - voir [Utiliser vos passkeys sur plusieurs appareils](/docs/product-documentation/passkeys/using-passkeys-across-devices). Il n'y a aucune copie à faire. La façon de vous protéger consiste à enregistrer **plusieurs appareils** sur chaque compte, dès le début.

### Conservez un repli par mot de passe quand c'est possible

Avant de basculer entièrement un compte vers les passkeys, assurez-vous de connaître encore son identifiant et son mot de passe. La plupart des services permettent de conserver les deux comme moyens de connexion - et ce repli compte si quelque chose arrive à votre Seedkeeper PRO avant que vous n'ayez configuré une sauvegarde.

### Enregistrez chaque appareil comme sa propre passkey

Pour chaque compte que vous souhaitez protéger (Google, Amazon, Microsoft, etc.), rendez-vous dans ses réglages de sécurité et ajoutez une passkey - une fois par appareil Seedkeeper PRO que vous voulez utiliser. Chaque appareil obtient sa propre passkey indépendante auprès de ce service ; rien n'est copié entre eux.

### Configuration recommandée : principal et secondaire dès le premier jour

Nous recommandons de mettre cela en place dès le premier jour, plutôt qu'après un incident :

- **Principal** - votre appareil du quotidien, souvent une bague pour la commodité
- **Secondaire** - un deuxième appareil, souvent une carte, conservé en lieu sûr
- **Secondaire 2** *(facultatif)* - un troisième appareil pour davantage de redondance

Enregistrez-les tous comme passkeys distinctes sur chaque compte important, au moment où vous le configurez.

<BuyBackupDevice />

### Rangez vos appareils séparément

Conservez votre équipement principal et votre équipement secondaire dans des lieux physiquement distincts, comme vous le feriez pour les sauvegardes du gestionnaire de mots de passe - voir [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices).

### Testez vos équipements secondaires régulièrement

Une passkey de secours que vous n'avez jamais essayée est une hypothèse, pas un filet de sécurité. De temps à autre, connectez-vous avec votre équipement secondaire pour confirmer qu'il fonctionne toujours.

### Si vous perdez tous les appareils enregistrés

Si tous les appareils enregistrés sur un compte sont perdus, Seedkeeper ne peut pas récupérer la passkey à votre place - il vous faudra passer par la procédure de récupération de compte du service concerné.

## FAQ

<details>
<summary>Cela fonctionne-t-il comme la sauvegarde de mes mots de passe ?</summary>

Non. Les mots de passe sont copiés d'un appareil à l'autre par [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery). Les passkeys sont enregistrées indépendamment sur chaque appareil - voir la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Combien d'équipements secondaires faut-il ?</summary>

Au moins un équipement secondaire en plus de votre équipement principal constitue une base solide. Un second secondaire ajoute de la redondance si vous le souhaitez.

</details>

<details>
<summary>Que faire si je perds mon équipement principal mais que j'ai encore un secondaire ?</summary>

Vous pouvez continuer à vous connecter avec votre équipement secondaire. Pensez à enregistrer un nouvel appareil pour remplacer celui que vous avez perdu, afin de ne pas vous retrouver avec un seul appareil.

</details>

## Articles liés

- [Utiliser vos passkeys sur plusieurs appareils](/docs/product-documentation/passkeys/using-passkeys-across-devices)
- [Gérer vos passkeys](/docs/product-documentation/passkeys/managing-passkeys)
- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer)
