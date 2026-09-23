---
title: "Sauvegarde et récupération"
description: "Sauvegardez votre Seedkeeper d'appareil à appareil pour qu'une carte perdue ne vous coûte jamais vos mots de passe. Carte, bague, Classic et PRO."
keywords: [sauvegarde Seedkeeper, équipement secondaire, restaurer mots de passe, sauvegarde matérielle, carte vers bague, sauvegarde chiffrée]
sidebar_position: 4
sidebar_label: "Sauvegarde et récupération"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Faut-il un second appareil Seedkeeper pour sauvegarder ?", a: "Oui. Seedkeeper sauvegarde d'appareil à appareil : il vous faut un équipement maître et un équipement secondaire pour mener la procédure à bien."},
  {q: "L'équipement secondaire doit-il être du même format que le maître ?", a: "Non. Toutes les combinaisons fonctionnent : carte vers carte, bague vers bague, carte vers bague, ou bague vers carte."},
  {q: "Cela fonctionne-t-il pour Seedkeeper Classic et Seedkeeper PRO ?", a: "Oui, la procédure de sauvegarde est identique sur les deux gammes."},
  {q: "La sauvegarde est-elle chiffrée ?", a: "Oui. L'équipement maître et l'équipement secondaire échangent une clé commune par un défi Diffie-Hellman lors de l'appairage, et cette clé chiffre la sauvegarde."},
  {q: "Que faire si j'oublie mon PIN sans avoir de sauvegarde ?", a: "Vous pouvez toujours réinitialiser l'appareil, mais cela efface tous les secrets et le ramène à son état d'usine, sans aucun moyen de récupérer les données."},
  {q: "Cela sauvegarde-t-il aussi mes passkeys et mes codes OTP ?", a: "Non, cela concerne le gestionnaire de mots de passe. Les passkeys et les codes OTP relèvent de procédures distinctes."},
]} />

<p class="doc-subtitle">Ne perdez jamais l'accès à vos secrets</p>

<div class="tldr">

Seedkeeper sauvegarde d'appareil à appareil : vous scannez ensemble un équipement maître et un équipement secondaire, et le secondaire se retrouve avec une copie incrémentale de tout ce que contient le maître. Cela fonctionne dans toutes les combinaisons - carte vers carte, bague vers bague, carte vers bague, bague vers carte - et pour Seedkeeper Classic comme pour Seedkeeper PRO. Faites-le dès que votre équipement maître contient vos vrais secrets, puis à nouveau chaque fois que vous en ajoutez.

</div>

## Vue d'ensemble

Seedkeeper n'a pas de cloud : vos secrets ne résident que sur votre appareil physique. C'est excellent pour la confidentialité, mais cela signifie que perdre l'appareil sans sauvegarde revient à perdre tout ce qu'il contient. Cela signifie aussi qu'aucun fournisseur ne peut être compromis pour exposer votre coffre-fort - c'est l'arbitrage expliqué dans [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained). Configurer un équipement secondaire prend quelques minutes et vous protège contre un appareil perdu, volé ou endommagé.

La procédure est la même quels que soient le format et la gamme : carte vers carte, bague vers bague, ou un mélange des deux, sur Seedkeeper Classic comme sur Seedkeeper PRO.

Cet article traite de la sauvegarde du gestionnaire de mots de passe, via la Seedkeeper App. Si vous utilisez également les passkeys ou les codes OTP, voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) et [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : ouvrir Backup dans l'application

Dans la Seedkeeper App, touchez le **menu à 3 points** en haut à droite, puis **Make a Backup**.

### Étape 2 : scanner votre équipement maître

Il s'agit de la carte ou de la bague qui contient les secrets à sauvegarder.

### Étape 3 : scanner votre équipement secondaire

Ce peut être une carte ou une bague, quel que soit le format du maître.
Scanner les deux appareils leur permet d'échanger une clé commune via un défi Diffie-Hellman - cette clé sert à chiffrer la sauvegarde.

### Étape 4 : scanner de nouveau l'équipement maître

Cela prépare la sauvegarde du côté du maître.

### Étape 5 : scanner de nouveau l'équipement secondaire

Maintenez-le contre le lecteur pendant toute la durée de la copie - ne le retirez pas avant que l'application ne confirme la fin de l'opération. Si elle s'interrompt en cours de route, voir [Problèmes de sauvegarde et de restauration](/docs/troubleshooting/backup-restoration-issues).
Votre équipement secondaire détient désormais une copie incrémentale de tout ce que contient votre équipement maître.

</div>

<div class="step-image">
<img src="/img/gifs/seedkeeper-backup-iphone-mockup.gif" alt="Animation de l'appairage de sauvegarde dans la Seedkeeper App" className="mockup-image" />
</div>

</div>

:::tip[Recommencez après avoir ajouté de nouveaux secrets]
La sauvegarde étant incrémentale, vous pouvez rejouer ces mêmes étapes à tout moment après avoir ajouté des mots de passe ou des notes, sans repartir de zéro.
:::

## FAQ

<details>
<summary>Faut-il un second appareil Seedkeeper pour sauvegarder ?</summary>

Oui. Seedkeeper sauvegarde d'appareil à appareil - il vous faut un équipement maître et un équipement secondaire pour mener à bien la procédure décrite ci-dessus.

</details>

<details>
<summary>L'équipement secondaire doit-il être du même format que le maître ?</summary>

Non. Toutes les combinaisons fonctionnent : carte vers carte, bague vers bague, carte vers bague, ou bague vers carte.

</details>

<details>
<summary>Cela fonctionne-t-il pour Seedkeeper Classic et Seedkeeper PRO ?</summary>

Oui, la procédure de sauvegarde est identique sur les deux gammes.

</details>

<details>
<summary>La sauvegarde est-elle chiffrée ?</summary>

Oui. L'équipement maître et l'équipement secondaire échangent une clé commune par un défi Diffie-Hellman lors de l'appairage, et cette clé chiffre la sauvegarde.

</details>

<details>
<summary>Que faire si j'oublie mon PIN sans avoir de sauvegarde ?</summary>

Vous pouvez toujours réinitialiser l'appareil - voir [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper) pour la procédure - mais cela efface tous les secrets et le ramène à son état d'usine, sans aucun moyen de récupérer les données.

</details>

<details>
<summary>Cela sauvegarde-t-il aussi mes passkeys et mes codes OTP ?</summary>

Non, cela concerne le gestionnaire de mots de passe. Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) et [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures) pour ces deux cas.

</details>

## Articles liés

- [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide)
- [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
- [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained)
- [Problèmes de sauvegarde et de restauration](/docs/troubleshooting/backup-restoration-issues)
