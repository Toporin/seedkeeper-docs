---
title: "How to Secure Dropbox with a Passkey"
description: "Register your Seedkeeper PRO as a passkey on Dropbox, on the web or in the mobile app. Includes Business and Team account requirements."
keywords: [dropbox passkey, dropbox security key, dropbox passwordless, dropbox business passkey, dropbox FIDO2]
sidebar_position: 1
sidebar_label: "Secure Dropbox with a Passkey"
tags: [dropbox, passkey, productivity]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Does a passkey replace 2-factor authentication?", a: "Using a passkey to sign in satisfies the 2FA step for that login, but Dropbox recommends setting up 2FA separately too - see the warning in the Overview above."},
  {q: "Can my whole team use passkeys?", a: "Only if your admin has enabled Passkey sign-in in the Admin Console, and your team doesn't require SSO. See Business/Team accounts above."},
  {q: "Can I add more than one Seedkeeper PRO as a backup?", a: "See Passkey Backup Strategy for a recommended setup."},
  {q: "Why register a Seedkeeper PRO instead of my phone's built-in passkey?", a: "Your phone's passkey is a real improvement over a password and costs nothing. The difference is where the key lives: synced across a cloud account you have to keep secure, versus a single secure element with no export path and nobody else in the chain. For Dropbox, which protects every file you have stored, that distinction is usually worth the extra step. See Are Passkeys Safer?."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Sign In to Dropbox Without a Password</p>

<p class="platform-note">Mobile and Web</p>

<div class="tldr">

From Dropbox's Security settings - on the web or in the mobile app - add a passkey, choose a security key instead of your device's built-in biometrics, then connect your Seedkeeper PRO to register it.

</div>

## Overview

Dropbox supports [passkeys](/docs/glossary/passkey) as a faster, more secure way to sign in, available on Dropbox Basic, Plus, Professional, Essentials, Family, and some Standard/Advanced/Business/Business Plus plans. This guide walks through registering your Seedkeeper PRO as that passkey.

:::warning[Set up 2FA too, for full protection]
Adding a passkey alone doesn't fully secure your account - Dropbox still warns that without [2-factor authentication](https://help.dropbox.com/account-access/enable-2-factor-authentication) enabled, someone could still sign in with just your password. Logging in with a passkey does satisfy the 2FA requirement when you use it, but set up 2FA as well so your account stays protected even on the occasions you sign in with a password instead.
:::

:::note[Business/Team accounts]
If your team uses Dropbox Business, an admin must first turn on **Passkey sign-in** from the Admin Console (Settings → Security → Authentication) before team members can create or use passkeys. If your team requires SSO to log in, passkeys aren't available.
:::

<WhyHardware />

## Step-by-Step Instructions

## On dropbox.com

<div class="step-layout">

<div class="step-text">

### Step 1: Log in and go to Settings

Log in to [dropbox.com](https://www.dropbox.com/login), click your avatar, then click **Settings**.

### Step 2: Go to Security

Click the **Security** tab.

### Step 3: Add a passkey

Under **Passkeys**, click **Add passkey** (or **Manage Passkeys** → **Add new passkey** if you already have one).

### Step 4: Confirm your password

Enter your Dropbox account password and click **Next**.

### Step 5: Choose a security key instead of your device

Your browser will prompt you to create the passkey, typically defaulting to your device's own biometrics or a synced credential manager. Look for an option like **Use another device** or **Security key** instead, so you can register your Seedkeeper PRO.

### Step 6: Connect your Seedkeeper PRO

Insert your Seedkeeper PRO, or tap it against an NFC reader.

### Step 7: Enter your PIN

Provide your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) to complete the registration.

### Step 8: Name it and save

Enter or edit a nickname for your passkey, then click **Save**.

</div>

<div class="step-image">

</div>

</div>

## On the Dropbox mobile app

1. Open the Dropbox app and tap the account icon in the bottom-right.
2. Tap **Passkeys** (or **Add new key** if you already have one).
3. Enter your Dropbox account password and tap **Next**.
4. Look for **Other options** or **Security key** instead of your device's default biometrics, then connect your Seedkeeper PRO and enter your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).
5. Enter or edit a nickname, then tap **Done**.

You can now use your Seedkeeper PRO to sign in to Dropbox instead of your password.

## Removing a Passkey

Go to **Settings** → **Security** → **Manage passkeys**, tap the delete icon next to the passkey you want to remove, confirm with your password, then tap **Delete**.

## Official Dropbox Resources

- [How to use a passkey to log in to your account](https://help.dropbox.com/account-access/passkey-log-in)

## FAQ

<details>
<summary>Does a passkey replace 2-factor authentication?</summary>

Using a passkey to sign in satisfies the 2FA step for that login, but Dropbox recommends setting up 2FA separately too - see the warning in the [Overview](#overview) above.

</details>

<details>
<summary>Can my whole team use passkeys?</summary>

Only if your admin has enabled Passkey sign-in in the Admin Console, and your team doesn't require SSO. See [Business/Team accounts](#overview) above.

</details>

<details>
<summary>Can I add more than one Seedkeeper PRO as a backup?</summary>

See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for a recommended setup.

</details>

<details>
<summary>Why register a Seedkeeper PRO instead of my phone's built-in passkey?</summary>

Your phone's passkey is a real improvement over a password and costs nothing. The difference is where the key lives: synced across a cloud account you have to keep secure, versus a single secure element with no export path and nobody else in the chain. For Dropbox, which protects every file you have stored, that distinction is usually worth the extra step. See [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [How to Secure GitHub with a Passkey](/docs/tutorials/productivity/secure-github-with-a-passkey)
- [How to Secure OpenAI/ChatGPT with a Passkey](/docs/tutorials/productivity/secure-openai-with-a-passkey)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
