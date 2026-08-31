---
title: "Storing Seed Phrases"
description: "Store a BIP39 seed phrase on your Seedkeeper, with an optional passphrase and wallet descriptor. Kept offline on the secure element, never in the cloud."
keywords: [store seed phrase, BIP39 hardware storage, crypto recovery phrase, seed phrase backup card, wallet descriptor]
sidebar_position: 7
sidebar_label: "Storing Seed Phrases"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What if the app says my seed phrase is invalid?", a: "Your seed phrase must be BIP39-compliant. Double-check every word, the word order, and that you've typed the full phrase - see Step 6 above."},
  {q: "Do I need to add a passphrase or wallet descriptor?", a: "No, both are optional. See Add optional details above."},
  {q: "What is a passphrase?", a: "An optional extra word or phrase added on top of your seed phrase for additional security. See the glossary entry for details."},
  {q: "Where is my seed phrase stored?", a: "Directly on your Seedkeeper device - there's no cloud involved. See Introduction for more on how Seedkeeper works."},
]} />

<p class="doc-subtitle">Keep Your Seed Phrase Off the Cloud</p>

<div class="tldr">

Scan your Seedkeeper, tap Import a Secret → Mnemonic Phrase, give it a label, optionally add a passphrase and wallet descriptor, enter your mnemonic, then save it back to your device.

</div>

## Overview

Your Seedkeeper can store a [seed phrase](/docs/security-academy/seed-phrases/what-is-a-seed-phrase) directly on-device, alongside your passwords and notes - nothing is sent anywhere else. Unlike a password, a seed phrase cannot be changed if it leaks: whoever holds it holds the funds, permanently. That makes offline storage the whole point.

If you're new to seed phrases, [What is a Seed Phrase?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase) covers what those words actually encode, and [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase) covers the storage decisions around this one.

## Step-by-Step Instructions

<div class="step-layout">

<div class="step-text">

### Step 1: Launch the app and scan your Seedkeeper

Open the Seedkeeper App and scan your card or ring, then enter your personal PIN.<br />
See the [First Setup Guide](/docs/product-documentation/getting-started/first-setup-guide) if you haven't set up your PIN yet.

### Step 2: Start importing a secret

Tap **Import a Secret**, then **Mnemonic Phrase**.

### Step 3: Label your seed phrase

Specify a **label** - this is what distinguishes this secret from all the others in your list.

### Step 4: Add optional details

- **[Passphrase](/docs/glossary/passphrase)** (optional)
- **[Wallet Descriptor](/docs/glossary/descriptor)** (optional)

### Step 5: Enter your mnemonic

Type in your seed phrase.

### Step 6: Save it to your device

Tap **Import**, then scan your card or ring again to store it.
Your seed phrase is now saved on your Seedkeeper.

</div>

<div class="step-image">

<img src="/img/gifs/storing-seed-phrases-iphone-mockup.gif" alt="Storing a seed phrase in the Seedkeeper App" className="mockup-image" />

</div>

</div>

:::note[BIP39 compliance]
Your seed phrase must be [BIP39](/docs/security-academy/seed-phrases/what-is-bip39)-compliant. The app verifies it using the checksum defined by the BIP39 standard - if it doesn't check out, the app will prompt you that it's invalid. Double-check every word, the word order, and that you've typed the full phrase.

For a phrase that isn't BIP39 - an Electrum seed, a Monero 25-word phrase, a raw private key - store it as a [secure note](/docs/product-documentation/password-manager/creating-secure-notes) instead. Same secure element, same PIN, without the format check.

If the app rejects a phrase you believe is correct, [Import Errors](/docs/troubleshooting/import-errors) lists what to check, in order.
:::

## FAQ

<details>
<summary>What if the app says my seed phrase is invalid?</summary>

Your seed phrase must be [BIP39](/docs/glossary/bip39)-compliant. Double-check every word, the word order, and that you've typed the full phrase - see [Step 6](#step-6-save-it-to-your-device) above.

</details>

<details>
<summary>Do I need to add a passphrase or wallet descriptor?</summary>

No, both are optional. See [Add optional details](#step-4-add-optional-details) above.

</details>

<details>
<summary>What is a passphrase?</summary>

An optional extra word or phrase added on top of your seed phrase for additional security. See the [glossary entry](/docs/glossary/passphrase) for details.

</details>

<details>
<summary>Where is my seed phrase stored?</summary>

Directly on your Seedkeeper device - there's no cloud involved. See [Introduction](/docs/product-documentation/getting-started/intro) for more on how Seedkeeper works.

</details>

## Related Articles

- [Creating a New Password](/docs/product-documentation/password-manager/creating-a-new-password)
- [Creating Secure Notes](/docs/product-documentation/password-manager/creating-secure-notes)
- [Organizing Passwords](/docs/product-documentation/password-manager/organizing-passwords)
- [What is a Seed Phrase?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [What is BIP39?](/docs/security-academy/seed-phrases/what-is-bip39)
- [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [Common Seed Phrase Mistakes](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes)
