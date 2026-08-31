---
title: "Importing Existing Passwords"
description: "Store a password you already use on your Seedkeeper: label it, add an optional login and URL, then save it to the secure element over NFC."
keywords: [import password, store existing password, Seedkeeper password manager, offline password storage]
sidebar_position: 2
sidebar_label: "Importing Existing Passwords"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Are the login and URL fields required?", a: "No, both are optional. See Add optional details above."},
  {q: "Should I import a password or generate a new one?", a: "Import if you already have a password you want to keep using. If you're creating an account or want a stronger password, see Creating a New Password instead."},
  {q: "Where is my password stored?", a: "Directly on your Seedkeeper device within the EAL6+ certified secure element - there's no cloud involved. See Introduction for more on how Seedkeeper works."},
]} />

<p class="doc-subtitle">Bring a Password You Already Have Into Seedkeeper</p>

<div class="tldr">

Scan your Seedkeeper, tap Import a Secret → Password, give it a label, enter the password you already have, then save it back to your device.

</div>

## Overview

Already have a password you want to store on your Seedkeeper, rather than generating a new one? The Seedkeeper App lets you enter it manually and store it directly on your device - nothing is sent anywhere else.

Worth checking before you import: a password reused on another site is only as safe as the weakest service holding it - see [Why Password Reuse is Dangerous](/docs/security-academy/password-security/why-password-reuse-is-dangerous).

## Step-by-Step Instructions

<div class="step-layout">

<div class="step-text">

### Step 1: Launch the app and scan your Seedkeeper

Open the Seedkeeper App and scan your card or ring, then enter your personal PIN.<br />
See the [First Setup Guide](/docs/product-documentation/getting-started/first-setup-guide) if you haven't set up your PIN yet.

### Step 2: Start importing a secret

Tap **Import a Secret**, then **Password**.

### Step 3: Label your password

Specify a **label** - this is what distinguishes this secret from all the others in your list.

### Step 4: Add optional details

- **Login** (optional) - an email address, username, or nickname
- **URL** (optional) - the site this password is for

### Step 5: Enter your password

Type in the password you want to store.

### Step 6: Save it to your device

Tap **Import**, then scan your card or ring again to store the password.

Your password is now saved on your Seedkeeper.

</div>

<div class="step-image">

<img src="/img/gifs/import-existing-password-iphone-mockup.gif" alt="Importing an existing password in the Seedkeeper App" className="mockup-image" />

</div>

</div>

## FAQ

<details>
<summary>Are the login and URL fields required?</summary>

No, both are optional. See [Add optional details](#step-4-add-optional-details) above.

</details>

<details>
<summary>Should I import a password or generate a new one?</summary>

Import if you already have a password you want to keep using. If you're creating an account or want a stronger password, see [Creating a New Password](/docs/product-documentation/password-manager/creating-a-new-password) instead.

</details>

<details>
<summary>Where is my password stored?</summary>

Directly on your Seedkeeper device within the EAL6+ certified secure element - there's no cloud involved.<br />
See [Introduction](/docs/product-documentation/getting-started/intro) for more on how Seedkeeper works.

</details>

## Related Articles

- [Creating a New Password](/docs/product-documentation/password-manager/creating-a-new-password)
- [Editing a Password](/docs/product-documentation/password-manager/editing-a-password)
- [Organizing Passwords](/docs/product-documentation/password-manager/organizing-passwords)
- [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery)
- [Why Password Reuse is Dangerous](/docs/security-academy/password-security/why-password-reuse-is-dangerous)
