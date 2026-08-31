---
title: "How to Secure Telegram with a Passkey"
description: "Register your Seedkeeper PRO as a passkey on Telegram Desktop. Includes the 24-hour wait rule and why mobile is not supported."
keywords: [telegram passkey, telegram security key, telegram desktop passkey, telegram passwordless]
sidebar_position: 5
sidebar_label: "Secure Telegram with a Passkey"
tags: [telegram, passkey, social-media]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Why can't I create a passkey right after logging in?", a: "Telegram enforces a 24-hour wait on newly logged-in devices as a security precaution. See the warning in the Overview above."},
  {q: "Can I set this up from the Telegram mobile app?", a: "Not currently for a hardware security key - use Telegram Desktop instead. See the Overview above."},
  {q: "Can I add more than one Seedkeeper PRO as a backup?", a: "See Passkey Backup Strategy for a recommended setup."},
  {q: "Why register a Seedkeeper PRO instead of my phone's built-in passkey?", a: "Your phone's passkey is a real improvement over a password and costs nothing. The difference is where the key lives: synced across a cloud account you have to keep secure, versus a single secure element with no export path and nobody else in the chain. For Telegram, which protects your messages and contacts, that distinction is usually worth the extra step. See Are Passkeys Safer?."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Sign In to Telegram Without a Password</p>

<p class="platform-note">Desktop</p>

<div class="tldr">

From Telegram Desktop's Privacy and Security settings, add a passkey and register your Seedkeeper PRO as a hardware security key - but only after waiting 24 hours from your last login on that device.

</div>

## Overview

Telegram supports registering a hardware security key like your Seedkeeper PRO as a [passkey](/docs/glossary/passkey) - but only through **Telegram Desktop** (and likely the web version). On mobile, external hardware tokens currently can't be registered at all.

Here's what the full flow looks like:

:::warning[24-hour wait after logging in]
As a security measure against account takeovers, Telegram requires you to wait **24 hours** after signing in on a device before you can create a passkey on it. If you've just logged in, come back the next day to complete this.
:::

:::note[Known rough edges]
As of this writing, some users have reported that the passkey entry shows without a name in the interface, and can't be renamed - this doesn't affect whether it works, just how it's labeled in your list.
:::

<WhyHardware />

## Step-by-Step Instructions

### Step 1: Open Telegram Desktop

### Step 2: Open the menu

Click the menu icon (☰) in the top-left corner.

### Step 3: Go to Settings

### Step 4: Go to Privacy and Security

### Step 5: Open Passkeys

### Step 6: Add a passkey

Select **Add Passkey**.

### Step 7: Choose a security key

Your browser or OS will prompt you to create the passkey, typically defaulting to a synced credential manager. Look for an option like **Security key** or **Use another device** instead, so you can register your Seedkeeper PRO.

### Step 8: Connect your Seedkeeper PRO

Insert your Seedkeeper PRO, or tap it against an NFC reader.

### Step 9: Enter your PIN

Provide your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) to complete the registration.

Telegram confirms the passkey has been created, and you can now sign in using your Seedkeeper PRO instead of an SMS code.

## Official Telegram Resources

- [Enable Passkey on Telegram Desktop](https://telegram.org/blog/passkeys-and-gift-offers?ln=r)

## FAQ

<details>
<summary>Why can't I create a passkey right after logging in?</summary>

Telegram enforces a 24-hour wait on newly logged-in devices as a security precaution. See the warning in the [Overview](#overview) above.

</details>

<details>
<summary>Can I set this up from the Telegram mobile app?</summary>

Not currently for a hardware security key - use Telegram Desktop instead. See the [Overview](#overview) above.

</details>

<details>
<summary>Can I add more than one Seedkeeper PRO as a backup?</summary>

See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for a recommended setup.

</details>

<details>
<summary>Why register a Seedkeeper PRO instead of my phone's built-in passkey?</summary>

Your phone's passkey is a real improvement over a password and costs nothing. The difference is where the key lives: synced across a cloud account you have to keep secure, versus a single secure element with no export path and nobody else in the chain. For Telegram, which protects your messages and contacts, that distinction is usually worth the extra step. See [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
