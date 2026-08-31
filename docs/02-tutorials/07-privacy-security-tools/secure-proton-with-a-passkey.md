---
title: "How to Secure Proton with a Passkey"
description: "Register your Seedkeeper PRO as a hardware security key on your Proton account, as a phishing-resistant second factor alongside your password."
keywords: [proton passkey, proton mail security key, proton 2FA hardware key, proton FIDO2, protonmail security]
sidebar_position: 1
sidebar_label: "Secure Proton with a Passkey"
tags: [proton, passkey, privacy-security-tools]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Is this the same as Proton Pass's passkey feature?", a: "No - Proton Pass has its own separate feature for storing passkeys for other websites. See the note in the Overview above, or Proton Pass passkeys for that feature specifically."},
  {q: "Does this replace my Proton password?", a: "No - your Seedkeeper PRO acts as your second factor, alongside your password. See the Overview above."},
  {q: "Can I add more than one Seedkeeper PRO as a backup?", a: "Yes, via New security key - see Passkey Backup Strategy for a recommended setup."},
  {q: "Why register a Seedkeeper PRO instead of my phone's built-in passkey?", a: "Your phone's passkey is a real improvement over a password and costs nothing. The difference is where the key lives: synced across a cloud account you have to keep secure, versus a single secure element with no export path and nobody else in the chain. For Proton, which protects your mailbox, which is the reset path for other accounts, that distinction is usually worth the extra step. See Are Passkeys Safer?."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Add a Hardware Security Key to Your Proton Account</p>

<p class="platform-note">Web</p>

<div class="tldr">

From Proton's Account and password settings, under Two-factor authentication, register your Seedkeeper PRO as a security key - it works alongside your password as a phishing-resistant second factor.

</div>

## Overview

Proton lets you register a hardware security key like your Seedkeeper PRO as your two-factor authentication method. Unlike some of the other services covered in this section, this doesn't replace your password entirely - you'll still enter it when signing in, with your Seedkeeper PRO providing the second factor instead of an authenticator app or SMS code.

:::note[Not to be confused with Proton Pass's passkey feature]
This guide covers securing your **Proton account itself** with your Seedkeeper PRO as a security key. **Proton Pass** (Proton's password manager) has a separate, unrelated [passkey](/docs/glossary/passkey) feature: it can *store passkeys for other websites*, similar to iCloud Keychain or Google Password Manager. That feature is only available in Proton's browser extension, and on Android 14+ or iOS - with some known gaps (OnePlus and Oppo devices aren't supported, and some Samsung phones show a display bug). See [Proton Pass passkeys](https://proton.me/pass/passkeys) for details - it's a different tool from what's covered here.
:::

Here's what the full flow looks like:

<img src="/img/gifs/proton-passkey-browser-mockup.gif" alt="Adding a Seedkeeper PRO security key to Proton Mail" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

<WhyHardware />

## Step-by-Step Instructions

### Step 1: Log in to Proton Mail

Go to [account.proton.me/login](https://account.proton.me/login) and sign in.

### Step 2: Open Settings

Click the gear icon in the top right, then click **All settings**.

### Step 3: Go to Account and password

### Step 4: Find Two-factor authentication

Scroll down to the **Two-factor authentication** section.

### Step 5: Select Security key

### Step 6: Confirm your password

Proton asks you to re-enter your password for security reasons.

### Step 7: Connect your Seedkeeper PRO

Insert your Seedkeeper PRO, or tap it against an NFC reader, then click **Continue**.

### Step 8: Follow your operating system's prompt

Your OS will display its own connection method. On Windows, for example, you may need to unplug and plug your Seedkeeper PRO back in to confirm.

### Step 9: Name your key

Give it a friendly name - for example, "Seedkeeper PRO" - so you can recognize it later.

You're done - your Seedkeeper PRO is now registered as a security key on your Proton account.

## Managing Your Passkeys

Stay on the **Account and password** page and scroll down to see your registered security keys.

- **Add another**: click **New security key** - handy if you want a backup device. See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for a recommended setup.
- **Rename or delete**: use the options next to each registered key.

## Official Proton Resources

- [Proton Pass passkeys](https://proton.me/pass/passkeys)

## FAQ

<details>
<summary>Is this the same as Proton Pass's passkey feature?</summary>

No - Proton Pass has its own separate feature for storing passkeys for other websites. See the note in the [Overview](#overview) above, or [Proton Pass passkeys](https://proton.me/pass/passkeys) for that feature specifically.

</details>

<details>
<summary>Does this replace my Proton password?</summary>

No - your Seedkeeper PRO acts as your second factor, alongside your password. See the [Overview](#overview) above.

</details>

<details>
<summary>Can I add more than one Seedkeeper PRO as a backup?</summary>

Yes, via **New security key** - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for a recommended setup.

</details>

<details>
<summary>Why register a Seedkeeper PRO instead of my phone's built-in passkey?</summary>

Your phone's passkey is a real improvement over a password and costs nothing. The difference is where the key lives: synced across a cloud account you have to keep secure, versus a single secure element with no export path and nobody else in the chain. For Proton, which protects your mailbox, which is the reset path for other accounts, that distinction is usually worth the extra step. See [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [How to Secure Bitwarden with a Passkey](/docs/tutorials/privacy-security-tools/secure-bitwarden-with-a-passkey)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
