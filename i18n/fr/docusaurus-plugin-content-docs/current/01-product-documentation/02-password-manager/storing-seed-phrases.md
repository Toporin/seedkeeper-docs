---
title: "Enregistrer une seed phrase"
description: "Enregistrez une seed phrase BIP39 sur votre Seedkeeper, avec passphrase et descripteur optionnels. Conservée hors ligne sur le secure element."
keywords: [enregistrer seed phrase, stockage BIP39 matériel, phrase de récupération crypto, sauvegarde seed phrase carte, descripteur de portefeuille]
sidebar_position: 7
sidebar_label: "Enregistrer une seed phrase"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Que faire si l'application indique que ma seed phrase est invalide ?", a: "Votre seed phrase doit être conforme à BIP39. Vérifiez chaque mot, l'ordre des mots, et que vous avez bien saisi la phrase complète."},
  {q: "Dois-je ajouter une passphrase ou un descripteur de portefeuille ?", a: "Non, les deux sont facultatifs."},
  {q: "Qu'est-ce qu'une passphrase ?", a: "Un mot ou une phrase supplémentaire, facultatif, ajouté par-dessus votre seed phrase pour une sécurité accrue."},
  {q: "Où ma seed phrase est-elle stockée ?", a: "Directement sur votre appareil Seedkeeper. Aucun cloud n'intervient."},
]} />

<p class="doc-subtitle">Gardez votre seed phrase hors du cloud</p>

<div class="tldr">

Scannez votre Seedkeeper, touchez Import a Secret puis Mnemonic Phrase, donnez-lui un libellé, ajoutez éventuellement une passphrase et un descripteur de portefeuille, saisissez votre mnémonique, puis enregistrez le tout sur votre appareil.

</div>

## Vue d'ensemble

Votre Seedkeeper peut conserver une [seed phrase](/docs/security-academy/seed-phrases/what-is-a-seed-phrase) directement sur l'appareil, aux côtés de vos mots de passe et de vos notes - rien n'est envoyé ailleurs. Contrairement à un mot de passe, une seed phrase ne peut pas être changée si elle fuite : quiconque la détient détient les fonds, définitivement. C'est précisément ce qui fait tout l'intérêt d'un stockage hors ligne.

Si les seed phrases sont nouvelles pour vous, [Qu'est-ce qu'une seed phrase ?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase) explique ce que ces mots encodent réellement, et [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase) traite des décisions de conservation qui entourent celle-ci.

## Instructions pas à pas

<div class="step-layout">

<div class="step-text">

### Étape 1 : lancer l'application et scanner votre Seedkeeper

Ouvrez la Seedkeeper App, scannez votre carte ou votre bague, puis saisissez votre PIN personnel.<br />
Voir le [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide) si vous n'avez pas encore défini votre PIN.

### Étape 2 : lancer l'import d'un secret

Touchez **Import a Secret**, puis **Mnemonic Phrase**.

### Étape 3 : donner un libellé à votre seed phrase

Indiquez un **label** - c'est ce qui distinguera ce secret de tous les autres dans votre liste.

### Étape 4 : ajouter des détails facultatifs

- **[Passphrase](/docs/glossary/passphrase)** (facultatif)
- **[Descripteur de portefeuille](/docs/glossary/descriptor)** (facultatif)

### Étape 5 : saisir votre mnémonique

Saisissez votre seed phrase.

### Étape 6 : l'enregistrer sur votre appareil

Touchez **Import**, puis scannez de nouveau votre carte ou votre bague pour l'enregistrer.
Votre seed phrase est désormais conservée sur votre Seedkeeper.

</div>

<div class="step-image">

<img src="/img/gifs/storing-seed-phrases-iphone-mockup.gif" alt="Enregistrement d'une seed phrase dans la Seedkeeper App" className="mockup-image" />

</div>

</div>

:::note[Conformité BIP39]
Votre seed phrase doit être conforme à [BIP39](/docs/security-academy/seed-phrases/what-is-bip39). L'application la vérifie à l'aide de la somme de contrôle définie par le standard - si elle ne se vérifie pas, l'application vous signale qu'elle est invalide. Vérifiez chaque mot, l'ordre des mots, et que vous avez bien saisi la phrase complète.

Pour une phrase qui n'est pas BIP39 - une graine Electrum, une phrase Monero de 25 mots, une clé privée brute - enregistrez-la plutôt comme [note sécurisée](/docs/product-documentation/password-manager/creating-secure-notes). Même secure element, même PIN, sans le contrôle de format.

Si l'application refuse une phrase que vous croyez correcte, [Erreurs d'import](/docs/troubleshooting/import-errors) liste ce qu'il faut vérifier, dans l'ordre.
:::

## FAQ

<details>
<summary>Que faire si l'application indique que ma seed phrase est invalide ?</summary>

Votre seed phrase doit être conforme à [BIP39](/docs/glossary/bip39). Vérifiez chaque mot, l'ordre des mots, et que vous avez bien saisi la phrase complète - voir [Étape 6](#étape-6--lenregistrer-sur-votre-appareil) ci-dessus.

</details>

<details>
<summary>Dois-je ajouter une passphrase ou un descripteur de portefeuille ?</summary>

Non, les deux sont facultatifs. Voir [Ajouter des détails facultatifs](#étape-4--ajouter-des-détails-facultatifs) ci-dessus.

</details>

<details>
<summary>Qu'est-ce qu'une passphrase ?</summary>

Un mot ou une phrase supplémentaire, facultatif, ajouté par-dessus votre seed phrase pour une sécurité accrue. Voir [l'entrée du glossaire](/docs/glossary/passphrase) pour le détail.

</details>

<details>
<summary>Où ma seed phrase est-elle stockée ?</summary>

Directement sur votre appareil Seedkeeper - aucun cloud n'intervient. Voir [Introduction](/docs/product-documentation/getting-started/intro) pour en savoir plus sur le fonctionnement de Seedkeeper.

</details>

## Articles liés

- [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password)
- [Créer des notes sécurisées](/docs/product-documentation/password-manager/creating-secure-notes)
- [Organiser vos mots de passe](/docs/product-documentation/password-manager/organizing-passwords)
- [Qu'est-ce qu'une seed phrase ?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [Qu'est-ce que BIP39 ?](/docs/security-academy/seed-phrases/what-is-bip39)
- [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [Les erreurs courantes avec les seed phrases](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes)
