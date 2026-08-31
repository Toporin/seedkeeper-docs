---
title: "How to Enable Passkeys on Outlook"
description: "Register your Seedkeeper PRO as a passkey on your Microsoft account and sign in to Outlook without a password. Step-by-step guide."
keywords: [outlook passkey, microsoft account passkey, microsoft security key, FIDO2 microsoft, sign in without password outlook]
sidebar_position: 1
sidebar_label: "Enable Passkeys on Outlook"
tags: [microsoft, outlook, passkey]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Do I need a PIN before I start?", a: "No - you'll set one up during this process if you don't already have one. See Setting Up Your Passkey PIN for details on that PIN."},
  {q: "Does this remove my Microsoft account password?", a: "No. Adding a passkey doesn't remove or change any existing sign-in or recovery methods on your account. If you'd like to remove it entirely afterward, see How to Replace Passwords with Passkeys on Outlook."},
  {q: "How do I remove a passkey later?", a: "See Deleting a Passkey above."},
  {q: "Why register a Seedkeeper PRO instead of my phone's built-in passkey?", a: "Both are phishing-resistant, so this is about what your credentials depend on. A synced passkey depends on a company and an account you hold with them. A hardware passkey depends on an object in your pocket and nothing else. Given that Outlook protects your mailbox, which is the reset path for nearly everything else, removing the third party is generally the point. See Are Passkeys Safer?."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Sign In to Outlook Without a Password</p>

<p class="platform-note">Mobile and Web</p>

<div class="tldr">

From your Microsoft account's Advanced Security Options, add a new way to sign in, choose Security key, then register your Seedkeeper PRO as your passkey.

</div>

## Overview

Microsoft accounts (used across Outlook, Microsoft 365, and other Microsoft services) support [passkeys](/docs/glossary/passkey) as a password replacement. This guide walks through registering your Seedkeeper PRO as that passkey. Here's what the full flow looks like:

<img src="/img/gifs/outlook-passkey-browser-mockup.gif" alt="Enabling a passkey on Outlook with Seedkeeper PRO" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

<WhyHardware />

## Step-by-Step Instructions

### Step 1: Go to Advanced Security Options

Open [Microsoft account Advanced Security Options](https://account.live.com/proofs/manage).

### Step 2: Sign in

Sign in with the Microsoft account you use for Outlook.

### Step 3: Add another way to sign in

Under your sign-in or security methods, click **Add another way to sign in to your account**.

### Step 4: Choose Face, fingerprint, PIN, or security key

Click this option.

### Step 5: Choose Security key

Your system prompts you to choose where to store your passkey. Select **Security key**.

### Step 6: Connect your Seedkeeper PRO

Insert your Seedkeeper PRO, or tap it against an NFC reader.

### Step 7: Enter your PIN

Provide your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

Your Microsoft account is now secured with a passkey stored on your Seedkeeper PRO.

## Managing Your Passkey

Click into a registered passkey to see its details: when it was added, when it was last used, and what it's used for.

<img src="/img/screenshots/outlook-passkey-details.png" alt="Passkey details in a Microsoft account: name, date added, last used, used for" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

You can also give it a more familiar name by clicking **Rename** - handy if you use more than one Seedkeeper PRO, so you can tell them apart at a glance (for example, "Seedkeeper PRO - Main", "Ring Backup", "Card Backup").<br />
See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) if you're setting up more than one device.

### Deleting a Passkey

To remove or revoke a passkey, click **Remove**.

## Official Microsoft Resources

- [Create and save a passkey](https://support.microsoft.com/en-us/account-billing/create-and-save-a-passkey-e92cd3e0-11fa-4630-a5ea-3ccc0396b3d9)
- [Sign in to your account with a security key](https://support.microsoft.com/en-us/security/sign-in-to-your-account-with-a-security-key)

## FAQ

<details>
<summary>Do I need a PIN before I start?</summary>

No - you'll set one up during this process if you don't already have one. See [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) for details on that PIN.

</details>

<details>
<summary>Does this remove my Microsoft account password?</summary>

No. Adding a passkey doesn't remove or change any existing sign-in or recovery methods on your account. If you'd like to remove it entirely afterward, see [How to Replace Passwords with Passkeys on Outlook](/docs/tutorials/microsoft/replace-passwords-with-passkeys-on-outlook).

</details>

<details>
<summary>How do I remove a passkey later?</summary>

See [Deleting a Passkey](#deleting-a-passkey) above.

</details>

<details>
<summary>Why register a Seedkeeper PRO instead of my phone's built-in passkey?</summary>

Both are phishing-resistant, so this is about what your credentials depend on. A synced passkey depends on a company and an account you hold with them. A hardware passkey depends on an object in your pocket and nothing else. Given that Outlook protects your mailbox, which is the reset path for nearly everything else, removing the third party is generally the point. See [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Creating Your First Passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
- [How to Replace Passwords with Passkeys on Outlook](/docs/tutorials/microsoft/replace-passwords-with-passkeys-on-outlook)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
