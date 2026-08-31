---
title: "How to Secure Shopify with a Passkey"
description: "Register your Seedkeeper PRO as a passkey on your Shopify admin and sign in without a password. Guide for store owners and staff accounts."
keywords: [shopify passkey, shopify admin security key, shopify passwordless, shopify FIDO2, shopify staff account security]
sidebar_position: 4
sidebar_label: "Secure Shopify with a Passkey"
tags: [shopify, passkey, webshop]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Does adding a passkey remove my Shopify password?", a: "No. Adding a passkey doesn't remove or change any existing sign-in methods on your account."},
  {q: "Can I add a passkey for more than one staff account?", a: "Yes - each person with access to the Shopify admin can register their own passkey the same way, on their own account."},
  {q: "Can I add more than one Seedkeeper PRO as a backup?", a: "See Passkey Backup Strategy for a recommended setup."},
  {q: "What other services support passkeys with my Seedkeeper PRO?", a: "Plenty - see Amazon, PayPal, and eBay for a few more."},
  {q: "Why register a Seedkeeper PRO instead of my phone's built-in passkey?", a: "Because the key never leaves the device and is not copied anywhere. A synced passkey lives in a provider's cloud and is only as safe as your account with them; a Seedkeeper PRO passkey is generated inside an EAL6+ secure element and physically cannot be extracted. It also works on computers that aren't yours, which a phone-bound passkey does not. See Not All Passkeys Are Stored the Same Way."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Sign In to Your Shopify Admin Without a Password</p>

<p class="platform-note">Web</p>

<div class="tldr">

From your Shopify admin's Security settings, create a passkey, choose a hardware security key instead of your device's built-in biometrics, then connect your Seedkeeper PRO to register it.

</div>

## Overview

Shopify has supported [passkeys](/docs/glossary/passkey) natively since late 2022, letting store owners and staff sign in to the Shopify admin without a password. This guide walks through registering your Seedkeeper PRO as that passkey.

:::note[One passkey per platform]
Shopify allows only one passkey per platform - if you're signed into the same account on multiple devices that share a credential manager (like the same Apple ID), they'll all use that same passkey. Registering your Seedkeeper PRO gives you a passkey tied to the physical device instead.
:::

<WhyHardware />

## Step-by-Step Instructions

### Step 1: Sign in to your Shopify admin

Open your Shopify admin and sign in with your existing email and password.

### Step 2: Go to your profile

Click your store name in the top bar, then click your profile.

### Step 3: Open Security

Click **Security**.

### Step 4: Create a passkey

In the **Passkeys** section, click **Create a passkey**.

### Step 5: Verify your password

Confirm your account password, then click **Next**.

### Step 6: Choose a hardware security key

Your browser will prompt you to create the passkey, typically defaulting to your device's own biometrics or a synced credential manager. Look for an option like **Use another device** or **Security key** instead, so you can register your Seedkeeper PRO.

### Step 7: Connect your Seedkeeper PRO

Insert your Seedkeeper PRO, or tap it against an NFC reader.

### Step 8: Enter your PIN

Provide your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) to complete the registration.

Shopify confirms the passkey has been created, and you can now sign in to your admin using your Seedkeeper PRO instead of your password.

## Managing Your Passkeys

From the same **Security** page, open the **Passkeys** section to review your registered passkeys or remove one you no longer use.

## Official Shopify Resources

- [Using passkeys](https://help.shopify.com/en/manual/your-account/logging-in/passkeys)
- [Troubleshooting login](https://help.shopify.com/en/manual/your-account/logging-in/troubleshooting-login)

## FAQ

<details>
<summary>Does adding a passkey remove my Shopify password?</summary>

No. Adding a passkey doesn't remove or change any existing sign-in methods on your account.

</details>

<details>
<summary>Can I add a passkey for more than one staff account?</summary>

Yes - each person with access to the Shopify admin can register their own passkey the same way, on their own account.

</details>

<details>
<summary>Can I add more than one Seedkeeper PRO as a backup?</summary>

See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for a recommended setup.

</details>

<details>
<summary>What other services support passkeys with my Seedkeeper PRO?</summary>

Plenty - see [Amazon](/docs/tutorials/webshop/secure-amazon-with-a-passkey), [PayPal](/docs/tutorials/financial/secure-paypal-with-a-passkey), and [eBay](/docs/tutorials/webshop/secure-ebay-with-a-passkey) for a few more.

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
- [How to Secure PayPal with a Passkey](/docs/tutorials/financial/secure-paypal-with-a-passkey)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
