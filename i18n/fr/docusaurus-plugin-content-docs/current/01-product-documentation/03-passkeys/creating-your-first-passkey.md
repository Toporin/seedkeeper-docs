---
title: "Créer votre première passkey"
description: "Essayez la connexion sans mot de passe sans risque : créez votre première passkey avec une Seedkeeper PRO sur un site de démonstration, sans compte réel."
keywords: [créer première passkey, site de test passkey, passkeys.io, configuration passkey matérielle, connexion sans mot de passe]
sidebar_position: 3
sidebar_label: "Créer votre première passkey"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Dois-je définir mon PIN avant de créer une passkey ?", a: "Oui. Commencez par définir votre PIN de passkey."},
  {q: "Pourquoi utiliser un site de test plutôt qu'un vrai compte ?", a: "Cela vous permet d'essayer tout le parcours d'une passkey sans risque, sans adresse e-mail ni compte réel. Une fois à l'aise, vous créerez des passkeys de la même façon sur n'importe quel site qui les prend en charge."},
  {q: "Ma passkey est-elle stockée dans le cloud ?", a: "Non. Elle est conservée directement dans le secure element de votre Seedkeeper PRO. Rien n'est envoyé à Satochip ni ailleurs."},
]} />

<p class="doc-subtitle">Essayer la connexion sans mot de passe, sans risque</p>

<div class="tldr">

Une passkey vous permet de vous connecter sans mot de passe, en utilisant votre Seedkeeper PRO à la place. Comme il n'existe pas de parcours unique pour « la première passkey », le plus simple est de l'essayer sur un site de test comme passkeys.io - aucun compte réel nécessaire.

</div>

## Vue d'ensemble

Une [passkey](/docs/glossary/passkey) remplace votre mot de passe par un identifiant sécurisé conservé sur votre Seedkeeper PRO, fondé sur le standard [FIDO2](/docs/glossary/fido2). Plutôt que de saisir un mot de passe, vous scannez votre appareil pour vous connecter. Voir [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey) pour l'explication complète.

Avant d'en configurer une sur un vrai compte, il vaut la peine de l'essayer d'abord sur un site de test - **[passkeys.io](https://www.passkeys.io/)** est conçu exactement pour cela : une boîte de connexion de démonstration en conditions réelles, sans adresse e-mail réelle.

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : vérifier que votre PIN est défini

Vous aurez besoin de votre PIN de passkey configuré au préalable - voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) si ce n'est pas encore fait.

### Étape 2 : se rendre sur le site de test

Ouvrez [passkeys.io](https://www.passkeys.io/) et touchez **Create Account**.

### Étape 3 : saisir une adresse e-mail

N'importe quelle adresse convient ici - elle n'a pas besoin d'être réelle, ce n'est qu'un test.

### Étape 4 : créer la passkey

Touchez **Create Passkey**.

### Étape 5 : scanner votre appareil

Une invite vous demande de connecter votre Seedkeeper PRO. Scannez-la et saisissez votre PIN de passkey.

Votre passkey est désormais conservée dans le secure element de votre Seedkeeper PRO. Vous pouvez vous reconnecter à ce site à tout moment avec votre seul appareil, sans mot de passe.

</div>

<div class="step-image step-image--wide">

<img src="/img/gifs/passkey-test-ipad-mockup.gif" alt="Création d'une passkey sur le site de démonstration passkeys.io" className="mockup-image" style={{maxWidth: '450px'}} />

</div>

</div>

## FAQ

<details>
<summary>Dois-je définir mon PIN avant de créer une passkey ?</summary>

Oui. Commencez par [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

</details>

<details>
<summary>Pourquoi utiliser un site de test plutôt qu'un vrai compte ?</summary>

Cela vous permet d'essayer tout le parcours d'une passkey sans risque, sans adresse e-mail ni compte réel. Une fois à l'aise, vous créerez des passkeys de la même façon sur n'importe quel site qui les prend en charge.

</details>

<details>
<summary>Ma passkey est-elle stockée dans le cloud ?</summary>

Non. Elle est conservée directement dans le secure element de votre Seedkeeper PRO - rien n'est envoyé à Satochip ni ailleurs.

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
- [Comment fonctionnent les passkeys](/docs/security-academy/passkeys/how-passkeys-work)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
