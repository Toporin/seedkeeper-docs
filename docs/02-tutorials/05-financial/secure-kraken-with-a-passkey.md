---
title: "How to Secure Kraken with a Passkey"
description: "Register your Seedkeeper PRO as a Roaming 2FA passkey on Kraken. Up to 5 passkeys per account, with management and backup guidance."
keywords: [kraken passkey, kraken security key, kraken roaming 2FA, kraken hardware key, crypto exchange security]
sidebar_position: 3
sidebar_label: "Secure Kraken with a Passkey"
tags: [kraken, passkey, financial]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I use my Seedkeeper PRO as my only 2FA method?", a: "Yes - a hardware security key counts as a Roaming 2FA, which satisfies Kraken's requirement for your first sign-in 2FA method."},
  {q: "Does adding a passkey remove my Kraken password?", a: "No. Your password remains part of sign-in; the passkey satisfies the 2FA step."},
  {q: "Can I add more than one Seedkeeper PRO as a backup?", a: "Yes, up to 5 passkeys per account - see Passkey Backup Strategy for a recommended setup."},
  {q: "What other financial services support passkeys with my Seedkeeper PRO?", a: "See PayPal and Binance."},
  {q: "Why register a Seedkeeper PRO instead of my phone's built-in passkey?", a: "Both defeat phishing, so the honest answer is that it depends what the account is worth. A synced passkey is copied to every device on your cloud account, and that account is the new target. A Seedkeeper PRO passkey exists on one certified chip that cannot export it, with no provider in the chain - which matters when the account guards your holdings and withdrawals. See Not All Passkeys Are Stored the Same Way."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Sign In to Kraken Without a Password</p>

<p class="platform-note">Mobile and Web</p>

<div class="tldr">

From your Kraken account's Security page, add a passkey, insert your Seedkeeper PRO as a hardware security key, and confirm - you can register up to 5 passkeys per account.

</div>

## Overview

Kraken supports [passkeys](/docs/glossary/passkey) for sign-in [2FA](/docs/glossary/2fa), including hardware security keys like your Seedkeeper PRO. Kraken calls this a **Roaming 2FA** method - one that works across any device compatible with the key itself, unlike a Device-Bound passkey tied to a single browser. It is also the only 2FA type here that resists phishing, since an authenticator code can be relayed in real time - see [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp).

:::note[Your first 2FA method must be Roaming]
Kraken requires your very first sign-in 2FA method to be a Roaming type. A hardware security key like your Seedkeeper PRO qualifies, so this works well as a first method - or as an additional one alongside an authenticator app.
:::

<WhyHardware />

## Step-by-Step Instructions

### Step 1: Sign in to your Kraken account

### Step 2: Go to Security

Click your profile icon in the bottom-left corner, then click **Security**.

### Step 3: Add a passkey

Click **Add a Passkey**. A pop-up appears: *"Create a passkey for kraken.com."*

### Step 4: Connect your Seedkeeper PRO

Insert your Seedkeeper PRO, or tap it against an NFC reader, then click **Allow**.

### Step 5: Enter your PIN

Provide your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) to complete the registration.

Kraken confirms the passkey has been added to your account.

## Managing Your Passkeys

- **Rename**: click **Edit** next to the passkey, enter a new description (up to 256 characters), then click **Update Method**.
- **Remove**: click **Delete** next to the passkey. Kraken always requires at least one Roaming 2FA method enabled - if this is your only one, add another first.
- You can register up to **5 passkeys** per account, so there's room for a Main device and a couple of backups - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for a recommended setup.

## Official Kraken Resources

- [What is a Passkey?](https://support.kraken.com/articles/what-is-a-passkey)
- [How to enable multiple two-factor authentication](https://support.kraken.com/articles/how-to-enable-multiple-2fa)

## FAQ

<details>
<summary>Can I use my Seedkeeper PRO as my only 2FA method?</summary>

Yes - a hardware security key counts as a Roaming 2FA, which satisfies Kraken's requirement for your first sign-in 2FA method.

</details>

<details>
<summary>Does adding a passkey remove my Kraken password?</summary>

No. Your password remains part of sign-in; the passkey satisfies the 2FA step.

</details>

<details>
<summary>Can I add more than one Seedkeeper PRO as a backup?</summary>

Yes, up to 5 passkeys per account - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for a recommended setup.

</details>

<details>
<summary>What other financial services support passkeys with my Seedkeeper PRO?</summary>

See [PayPal](/docs/tutorials/financial/secure-paypal-with-a-passkey) and [Binance](/docs/tutorials/financial/secure-binance-with-a-passkey).

</details>

<details>
<summary>Why register a Seedkeeper PRO instead of my phone's built-in passkey?</summary>

Both defeat phishing, so the honest answer is that it depends what the account is worth. A synced passkey is copied to every device on your cloud account, and that account is the new target. A Seedkeeper PRO passkey exists on one certified chip that cannot export it, with no provider in the chain - which matters when the account guards your holdings and withdrawals. See [Not All Passkeys Are Stored the Same Way](/docs/security-academy/passkeys/passkey-vs-password#not-all-passkeys-are-stored-the-same-way).

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [How to Secure PayPal with a Passkey](/docs/tutorials/financial/secure-paypal-with-a-passkey)
- [How to Secure Binance with a Passkey](/docs/tutorials/financial/secure-binance-with-a-passkey)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
