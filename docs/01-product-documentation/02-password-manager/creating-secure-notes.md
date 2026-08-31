---
title: "Creating Secure Notes"
description: "Store any free-form text on your Seedkeeper - recovery codes, PINs, private information - as an encrypted secure note on the device's secure element."
keywords: [secure notes, store recovery codes, encrypted notes hardware, free data Seedkeeper, offline note storage]
sidebar_position: 6
sidebar_label: "Creating Secure Notes"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What can I store in a secure note?", a: "Any free-form text - recovery codes, PINs for other services, private information, or anything else you want to keep off the cloud."},
  {q: "Is there a size limit for secure notes?", a: "There's no fixed limit per note - it can hold 256, 512 characters or more, as long as your device's total 8 KB memory isn't exceeded across all your stored secrets."},
  {q: "Where is my note stored?", a: "Directly on your Seedkeeper device - there's no cloud involved. See Introduction for more on how Seedkeeper works."},
]} />

<p class="doc-subtitle">Store Any Text Securely on Your Seedkeeper</p>

<div class="tldr">

Scan your Seedkeeper, tap Import a Secret → Free Data, give it a label, type in your data, then save it back to your device.

</div>

## Overview

Secure notes let you store any free-form text on your Seedkeeper - not just passwords. Recovery codes, PINs for other services, private information - anything you want to keep off the cloud.

One use worth highlighting: if you also use a cloud password manager, storing its master password here gives you an offline, hardware-backed copy of the one credential you cannot afford to forget - see [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained).

Secure notes are also where non-BIP39 recovery material belongs. The Mnemonic Phrase option validates against the [BIP39](/docs/security-academy/seed-phrases/what-is-bip39) checksum and rejects anything that fails, so an Electrum seed, a Monero 25-word phrase or a raw private key goes here instead - same secure element, same PIN, without the format check.

## Step-by-Step Instructions

<div class="step-layout">

<div class="step-text">

### Step 1: Launch the app and scan your Seedkeeper

Open the Seedkeeper App and scan your card or ring, then enter your personal PIN.<br />
See the [First Setup Guide](/docs/product-documentation/getting-started/first-setup-guide) if you haven't set up your PIN yet.

### Step 2: Start importing a secret

Tap **Import a Secret**, then **Free Data**.

### Step 3: Label your note

Specify a **label** - this is what distinguishes this secret from all the others in your list.

### Step 4: Enter your data

Type in your raw data - any text you want to store.

### Step 5: Save it to your device

Tap **Import**, then scan your card or ring again to store the note.

Your secure note is now saved on your Seedkeeper.

</div>

<div class="step-image">

<img src="/img/gifs/creating-secure-notes-iphone-mockup.gif" alt="Creating a secure note in the Seedkeeper App" className="mockup-image" />

</div>

</div>

## FAQ

<details>
<summary>What can I store in a secure note?</summary>

Any free-form text - recovery codes, PINs for other services, private information, or anything else you want to keep off the cloud.

</details>

<details>
<summary>Is there a size limit for secure notes?</summary>

There's no fixed limit per note - it can hold 256, 512 characters or more, as long as your device's total 8 KB memory isn't exceeded across all your stored secrets.

</details>

<details>
<summary>Where is my note stored?</summary>

Directly on your Seedkeeper device - there's no cloud involved. See [Introduction](/docs/product-documentation/getting-started/intro) for more on how Seedkeeper works.

</details>

## Related Articles

- [Creating a New Password](/docs/product-documentation/password-manager/creating-a-new-password)
- [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Organizing Passwords](/docs/product-documentation/password-manager/organizing-passwords)
- [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained)
- [What is BIP39?](/docs/security-academy/seed-phrases/what-is-bip39)
