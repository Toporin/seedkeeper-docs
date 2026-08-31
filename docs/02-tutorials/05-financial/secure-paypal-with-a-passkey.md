---
title: "How to Secure PayPal with a Passkey"
description: "Register your Seedkeeper PRO as a hardware passkey on PayPal and sign in without a password. Includes what to expect under PSD2 in Europe."
keywords: [paypal passkey, paypal security key, paypal passwordless, paypal FIDO2, PSD2 SCA passkey]
sidebar_position: 1
sidebar_label: "Secure PayPal with a Passkey"
tags: [paypal, passkey, financial]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Does adding a passkey remove my PayPal password?", a: "No. You can still sign in with your password if you prefer - during login, look for an option like Try Another Way to see all available methods."},
  {q: "Will I still be asked for a 2FA code after setting up a passkey?", a: "In Europe, possibly - see the note in the Overview above. This is a regulatory requirement (PSD2/SCA), not something specific to your Seedkeeper PRO."},
  {q: "Can I add more than one Seedkeeper PRO as a backup?", a: "See Passkey Backup Strategy for a recommended setup."},
  {q: "What other services support passkeys with my Seedkeeper PRO?", a: "Plenty - see Amazon, eBay, and Shopify for a few more."},
  {q: "Why register a Seedkeeper PRO instead of my phone's built-in passkey?", a: "Because the key never leaves the device and is not copied anywhere. A synced passkey lives in a provider's cloud and is only as safe as your account with them; a Seedkeeper PRO passkey is generated inside an EAL6+ secure element and physically cannot be extracted. It also works on computers that aren't yours, which a phone-bound passkey does not. See Not All Passkeys Are Stored the Same Way."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Sign In to PayPal Without a Password</p>

<p class="platform-note">Web</p>

<div class="tldr">

From your PayPal account's Security settings, create a passkey, choose a hardware security key instead of your device's built-in biometrics, then connect your Seedkeeper PRO to register it.

</div>

## Overview

PayPal supports [passkeys](/docs/glossary/passkey), including hardware security keys like YubiKey - registered the same way your Seedkeeper PRO would be. This guide walks through setting that up.

:::note[You may still see a code in Europe]
Under PSD2/SCA regulations in Europe, PayPal may still ask for an additional one-time code even after a successful passkey sign-in - typically only on a new or unrecognized device. Once that device is remembered, later passkey logins usually skip this extra step.
:::

<WhyHardware />

## Step-by-Step Instructions

### Step 1: Sign in to PayPal

Open [paypal.com](https://www.paypal.com/) and sign in with your existing email and password.

### Step 2: Go to Security settings

Click the settings icon (web) in the top right corner, then select **Security**.

### Step 3: Create a passkey

Find the **Passkeys** section and select **Create a Passkey**.

### Step 4: Choose a hardware security key

Your browser will prompt you to create the passkey, typically defaulting to your device's own biometrics or a synced credential manager. Look for an option like **Use another device** or **Security key** instead, so you can register your Seedkeeper PRO.

### Step 5: Connect your Seedkeeper PRO

Insert your Seedkeeper PRO, or tap it against an NFC reader.

### Step 6: Enter your PIN

Provide your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) to complete the registration.

PayPal confirms the passkey has been created, and you can now sign in using your Seedkeeper PRO instead of your password.

## Managing Your Passkeys

From your account settings, open **Passkey Management** to review, disable, or remove any passkey registered to your account.

## Official PayPal Resources

- [What is a passkey and how do I use it to log in to my PayPal account?](https://www.paypal.com/us/cshelp/article/what-is-a-passkey-and-how-do-i-use-it-to-log-in-to-my-paypal-account-help997)
- [What is multi-factor authentication and a remembered device?](https://www.paypal.com/us/cshelp/article/what-is-multi-factor-authentication-and-a-remembered-device-help1156)

## FAQ

<details>
<summary>Does adding a passkey remove my PayPal password?</summary>

No. You can still sign in with your password if you prefer - during login, look for an option like **Try Another Way** to see all available methods.

</details>

<details>
<summary>Will I still be asked for a 2FA code after setting up a passkey?</summary>

In Europe, possibly - see the note in the [Overview](#overview) above. This is a regulatory requirement (PSD2/SCA), not something specific to your Seedkeeper PRO.

</details>

<details>
<summary>Can I add more than one Seedkeeper PRO as a backup?</summary>

See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for a recommended setup.

</details>

<details>
<summary>What other services support passkeys with my Seedkeeper PRO?</summary>

Plenty - see [Amazon](/docs/tutorials/webshop/secure-amazon-with-a-passkey), [eBay](/docs/tutorials/webshop/secure-ebay-with-a-passkey), and [Shopify](/docs/tutorials/webshop/secure-shopify-with-a-passkey) for a few more.

</details>

<details>
<summary>Why register a Seedkeeper PRO instead of my phone's built-in passkey?</summary>

Because the key never leaves the device and is not copied anywhere. A synced passkey lives in a provider's cloud and is only as safe as your account with them; a Seedkeeper PRO passkey is generated inside an EAL6+ secure element and physically cannot be extracted. It also works on computers that aren't yours, which a phone-bound passkey does not. See [Not All Passkeys Are Stored the Same Way](/docs/security-academy/passkeys/passkey-vs-password#not-all-passkeys-are-stored-the-same-way).

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [How to Secure Amazon with a Passkey](/docs/tutorials/webshop/secure-amazon-with-a-passkey)
- [How to Secure eBay with a Passkey](/docs/tutorials/webshop/secure-ebay-with-a-passkey)
- [How to Secure Kraken with a Passkey](/docs/tutorials/financial/secure-kraken-with-a-passkey)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
