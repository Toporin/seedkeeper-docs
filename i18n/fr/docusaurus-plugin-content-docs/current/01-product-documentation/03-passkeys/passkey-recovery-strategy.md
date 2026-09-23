---
title: "Stratégie de récupération des passkeys"
description: "Seedkeeper PRO perdue avec des passkeys dessus ? Passez au secondaire, révoquez l'appareil perdu sur chaque compte, et enregistrez un remplaçant."
keywords: [clé de sécurité perdue, révoquer passkey, récupération passkey, clé FIDO2 volée, remplacer appareil perdu]
sidebar_position: 8
sidebar_label: "Stratégie de récupération des passkeys"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quelqu'un peut-il utiliser la passkey de mon appareil perdu avant que je la révoque ?", a: "Une passkey exige toujours la sécurité propre de l'appareil, comme votre PIN de passkey, pour être utilisée. La révoquer au plus vite supprime néanmoins tout risque."},
  {q: "Dois-je faire quelque chose sur ma Seedkeeper PRO elle-même quand un appareil est perdu ?", a: "Non. Comme les passkeys ne sont pas synchronisées entre appareils, il n'y a rien à mettre à jour sur vos autres appareils. La révocation se fait du côté de chaque service, pas sur votre Seedkeeper PRO."},
  {q: "Que faire si je n'ai aucun équipement secondaire enregistré ?", a: "Il vous faudra passer par la procédure de récupération de compte propre à chaque service."},
]} />

<p class="doc-subtitle">Que faire quand un appareil est perdu ou volé</p>

<div class="tldr">

Si vous perdez un appareil contenant des passkeys, passez à votre équipement secondaire pour continuer à vous connecter, révoquez l'accès de l'appareil perdu sur chaque compte concerné, puis enregistrez un remplaçant pour rétablir votre redondance.

</div>

## Vue d'ensemble

Cet article traite de ce qu'il faut faire *après* avoir perdu un appareil. Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour vous préparer *avant* que cela n'arrive - les étapes ci-dessous supposent que vous avez déjà au moins un équipement secondaire enregistré.

## Premières mesures en cas de perte

### Passez à votre équipement secondaire

Si vous avez enregistré un équipement secondaire à l'avance, vous pouvez continuer à vous connecter immédiatement à tous les comptes concernés - aucune urgence de ce côté.

### Révoquez l'accès de l'appareil perdu

Pour chaque compte où l'appareil perdu avait une passkey enregistrée, connectez-vous avec votre identifiant et votre mot de passe, puis ouvrez les réglages des passkeys. Identifiez celle qui correspond à l'appareil perdu et supprimez-la - une fois retirée, elle ne peut plus servir à se connecter, y compris par celui qui détient désormais l'appareil physique.

### Enregistrez un appareil de remplacement

Une fois l'appareil perdu révoqué partout, enregistrez un nouvel appareil pour rétablir votre configuration principal et secondaire d'origine. Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

### Mettez vos propres registres à jour

Si vous tenez une liste des appareils enregistrés sur chaque service, mettez-la à jour pour refléter le changement.

## Si vous n'avez jamais configuré d'équipement secondaire

Sans équipement secondaire déjà enregistré, il vous faudra vous rabattre sur la procédure de récupération de compte propre à chaque service - ce qui explique précisément pourquoi conserver un mot de passe en repli compte autant. Voir [Conservez un repli par mot de passe quand c'est possible](/docs/product-documentation/passkeys/passkey-backup-strategy#conservez-un-repli-par-mot-de-passe-quand-cest-possible).

## PIN oublié plutôt qu'appareil perdu ?

C'est une situation différente : votre appareil n'est pas perdu, vous ne pouvez simplement plus déverrouiller ses fonctions de passkey et d'OTP. Voir [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper) pour ce cas.

## FAQ

<details>
<summary>Quelqu'un peut-il utiliser la passkey de mon appareil perdu avant que je la révoque ?</summary>

Une passkey exige toujours la sécurité propre de l'appareil - comme votre PIN de passkey - pour être utilisée. La révoquer au plus vite supprime néanmoins tout risque. Voir [Révoquez l'accès de l'appareil perdu](#révoquez-laccès-de-lappareil-perdu) ci-dessus.

</details>

<details>
<summary>Dois-je faire quelque chose sur ma Seedkeeper PRO elle-même quand un appareil est perdu ?</summary>

Non - comme les passkeys ne sont pas synchronisées entre appareils, il n'y a rien à mettre à jour sur vos autres appareils. La révocation se fait du côté de chaque service, pas sur votre Seedkeeper PRO.

</details>

<details>
<summary>Que faire si je n'ai aucun équipement secondaire enregistré ?</summary>

Il vous faudra passer par la procédure de récupération de compte propre à chaque service. Voir [Si vous n'avez jamais configuré d'équipement secondaire](#si-vous-navez-jamais-configuré-déquipement-secondaire) ci-dessus.

</details>

## Articles liés

- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Gérer vos passkeys](/docs/product-documentation/passkeys/managing-passkeys)
- [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Appareil perdu ou volé](/docs/troubleshooting/lost-device)
- [Accès aux passkeys perdu](/docs/troubleshooting/lost-passkey)
- [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
