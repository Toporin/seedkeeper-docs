---
title: "How to Secure Amazon with a Passkey"
description: "Register your Seedkeeper PRO as a passkey on Amazon and sign in without a password. Step-by-step guide, plus how to manage multiple devices."
keywords: [amazon passkey, amazon security key, sign in to amazon without password, amazon FIDO2, amazon passwordless]
sidebar_position: 1
sidebar_label: "Secure Amazon with a Passkey"
tags: [amazon, passkey, webshop]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Does adding a passkey remove my Amazon password?", a: "No. Amazon lets you keep signing in with your password if you prefer - a passkey is an additional option, not a replacement by default."},
  {q: "Can I set up a passkey from the Amazon Shopping app?", a: "Not currently for creating a new one - use a browser instead. See the note in the Overview above."},
  {q: "Can I add more than one Seedkeeper PRO as a backup?", a: "Yes - see Managing Your Passkeys above, and Passkey Backup Strategy for a recommended setup."},
  {q: "What other services support passkeys with my Seedkeeper PRO?", a: "Plenty - see PayPal, eBay, and Shopify for a few more."},
  {q: "Why register a Seedkeeper PRO instead of my phone's built-in passkey?", a: "Both defeat phishing, so the honest answer is that it depends what the account is worth. A synced passkey is copied to every device on your cloud account, and that account is the new target. A Seedkeeper PRO passkey exists on one certified chip that cannot export it, with no provider in the chain - which matters when the account guards your orders, saved cards and delivery address. See Not All Passkeys Are Stored the Same Way."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Sign In to Amazon Without a Password</p>

<p class="platform-note">Mobile and Web</p>

<div class="tldr">

From your Amazon account's Login & Security page, set up a passkey, choose to register a security key instead of your device's built-in biometrics, then connect your Seedkeeper PRO and enter your PIN.

</div>

## Overview

Amazon supports [passkeys](/docs/glossary/passkey) as a faster, phishing-resistant alternative to your password. This guide walks through registering your Seedkeeper PRO as that passkey, rather than relying on your phone or computer's built-in biometrics.

:::note[Passkey setup currently requires a browser]
Amazon currently only supports creating a new passkey through a web browser (desktop or mobile) - not directly from the Amazon Shopping app. Once created, the passkey works for signing in everywhere, including the app.
:::

Here's what the full flow looks like:

<img src="/img/gifs/amazon-passkey-browser-mockup.gif" alt="Securing Amazon with a passkey using Seedkeeper PRO" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

<WhyHardware />

## Step-by-Step Instructions

### Step 1: Sign in to Amazon

Open [amazon.com](https://www.amazon.com/) in a browser and sign in with your existing email and password.

### Step 2: Go to your Account profile

From **Your Account**, select **Login & security**.

### Step 3: Set up your Passkey

Find the **Passkeys** entry and select **Set up**. Amazon shows a short explainer screen - select **Set up** again to continue.

### Step 4: Choose a security key instead of your device

Your browser will prompt you to create the passkey, typically defaulting to your device's own biometrics or a synced credential manager (like Apple iCloud Keychain or Google Password Manager). Look for an option like **Use another device** or **Security key** instead, so you can register your Seedkeeper PRO.

### Step 5: Connect your Seedkeeper PRO

Insert your Seedkeeper PRO, or tap it against an NFC reader.

### Step 6: Enter your PIN

Provide your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) to complete the registration.

Amazon confirms the passkey has been created, and you can now sign in using your Seedkeeper PRO instead of your password.

## Managing Your Passkeys

From the same **Login & security** page, select **Edit** next to Passkeys to see your registered passkeys, add another one (for example, a backup Seedkeeper PRO), or remove one you no longer use.

:::note
You can only register one passkey per passkey provider - since your Seedkeeper PRO is a distinct hardware security key rather than a synced provider like iCloud Keychain, you can add one per physical device.
:::

## Official Amazon Resources

- [About Passkey](https://www.amazon.com/gp/help/customer/display.html?nodeId=TPphmhSWBgcI9Ak87p)
- [Use Passkey on Multiple Devices](https://www.amazon.com/gp/help/customer/display.html?nodeId=TsfzMlkp9pNh0GzriE)

## FAQ

<details>
<summary>Does adding a passkey remove my Amazon password?</summary>

No. Amazon lets you keep signing in with your password if you prefer - a passkey is an additional option, not a replacement by default.

</details>

<details>
<summary>Can I set up a passkey from the Amazon Shopping app?</summary>

Not currently for creating a new one - use a browser instead. See the note in the [Overview](#overview) above.

</details>

<details>
<summary>Can I add more than one Seedkeeper PRO as a backup?</summary>

Yes - see [Managing Your Passkeys](#managing-your-passkeys) above, and [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for a recommended setup.

</details>

<details>
<summary>What other services support passkeys with my Seedkeeper PRO?</summary>

Plenty - see [PayPal](/docs/tutorials/financial/secure-paypal-with-a-passkey), [eBay](/docs/tutorials/webshop/secure-ebay-with-a-passkey), and [Shopify](/docs/tutorials/webshop/secure-shopify-with-a-passkey) for a few more.

</details>

<details>
<summary>Why register a Seedkeeper PRO instead of my phone's built-in passkey?</summary>

Both defeat phishing, so the honest answer is that it depends what the account is worth. A synced passkey is copied to every device on your cloud account, and that account is the new target. A Seedkeeper PRO passkey exists on one certified chip that cannot export it, with no provider in the chain - which matters when the account guards your orders, saved cards and delivery address. See [Not All Passkeys Are Stored the Same Way](/docs/security-academy/passkeys/passkey-vs-password#not-all-passkeys-are-stored-the-same-way).

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [How to Secure PayPal with a Passkey](/docs/tutorials/financial/secure-paypal-with-a-passkey)
- [How to Secure eBay with a Passkey](/docs/tutorials/webshop/secure-ebay-with-a-passkey)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
