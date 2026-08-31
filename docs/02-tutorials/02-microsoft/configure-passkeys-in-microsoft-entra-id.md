---
title: "How to Configure Passkeys in Microsoft Entra ID"
description: "Register your Seedkeeper PRO as a FIDO2 security key on a Microsoft Entra ID work or school account. Requirements and step-by-step guide."
keywords: [entra ID passkey, azure AD security key, FIDO2 entra, entra ID FIDO2 security key, work account passkey, NIS2]
sidebar_position: 3
sidebar_label: "Configure Passkeys in Microsoft Entra ID"
tags: [microsoft, entra, passkey]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What if I don't see the Security key option?", a: "Your admin may not have enabled the Passkey (FIDO2) method yet, or self-service registration may be turned off. See Prerequisites above."},
  {q: "Is this the same as a personal Microsoft/Outlook account passkey?", a: "No - Entra ID is for work or school accounts, managed by your organization. See the Overview above."},
  {q: "I'm an admin - how do I roll this out to my whole organization?", a: "See Deploying FIDO2 Passkeys via Microsoft Entra ID."},
  {q: "Why register a Seedkeeper PRO instead of my phone's built-in passkey?", a: "Both defeat phishing, so the honest answer is that it depends what the account is worth. A synced passkey is copied to every device on your cloud account, and that account is the new target. A Seedkeeper PRO passkey exists on one certified chip that cannot export it, with no provider in the chain - which matters when the account guards your organisation systems. See Not All Passkeys Are Stored the Same Way."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Add Your Seedkeeper PRO as a Security Key to Your Work or School Account</p>

<p class="platform-note">Mobile and Web</p>

<div class="tldr">

From your Microsoft Entra Security info page, add a new sign-in method, choose Security key, then register your Seedkeeper PRO as a FIDO2 passkey.

</div>

## Overview

**Microsoft Entra ID** (formerly Azure AD) is Microsoft's identity platform for work and school accounts - different from a [personal Microsoft/Outlook account](/docs/tutorials/microsoft/enable-passkeys-on-outlook). Organizations use it to manage sign-in and security policies for their users. If your employer or school uses Entra ID, you can register your Seedkeeper PRO as a FIDO2 security key the same way you would a [passkey](/docs/glossary/passkey) on any personal account.

:::note[This covers your own account]
This guide covers adding a security key to your own Entra ID account. If you're an IT admin looking to roll out FIDO2 security keys across an organization, see [Deploying FIDO2 Passkeys via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id) instead.
:::

## Prerequisites

- Your organization's admin must have enabled the [Passkey (FIDO2) authentication method](https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-authentication-passkeys-fido2) in the Microsoft Entra admin center.
- Self-service registration must be allowed for your account.

If either of these isn't enabled, check with your IT admin - see [Deploying FIDO2 Passkeys via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id) for what that setup looks like on their end.

<WhyHardware />

## Step-by-Step Instructions

### Step 1: Open your Security info page

Go to your Microsoft Entra **Security info** page in a web browser.

### Step 2: Sign in

Sign in using your current authentication method (password, MFA, etc.).

### Step 3: Add a sign-in method

Click **Add method** (or **Add sign-in method**).

### Step 4: Choose Security key

Select **Security key** (or **Passkey**) from the dropdown.

### Step 5: Continue

Click **Add** or **Next**.

### Step 6: Connect your Seedkeeper PRO

Insert your Seedkeeper PRO if using a contact reader, or tap it against an NFC reader.

### Step 7: Set or enter your PIN

Follow the on-screen prompts to set up (or enter) your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin), then confirm with a physical touch on your device.

### Step 8: Name your key

Give your key a descriptive name so you can recognize it later, then finish the registration.

Your Seedkeeper PRO is now registered as a security key on your Microsoft Entra ID account.

## Official Microsoft Resources

- [Register a passkey with a security key](https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-register-passkey-with-security-key)
- [Set up a security key as your verification method](https://support.microsoft.com/en-us/accounts-billing/work-school/set-up-a-security-key-as-your-verification-method)
- [Sign in to your account with a security key](https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-security-key-sign-in)

## FAQ

<details>
<summary>What if I don't see the Security key option?</summary>

Your admin may not have enabled the Passkey (FIDO2) method yet, or self-service registration may be turned off. See [Prerequisites](#prerequisites) above.

</details>

<details>
<summary>Is this the same as a personal Microsoft/Outlook account passkey?</summary>

No - Entra ID is for work or school accounts, managed by your organization. See the [Overview](#overview) above.

</details>

<details>
<summary>I'm an admin - how do I roll this out to my whole organization?</summary>

See [Deploying FIDO2 Passkeys via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id).

</details>

<details>
<summary>Why register a Seedkeeper PRO instead of my phone's built-in passkey?</summary>

Both defeat phishing, so the honest answer is that it depends what the account is worth. A synced passkey is copied to every device on your cloud account, and that account is the new target. A Seedkeeper PRO passkey exists on one certified chip that cannot export it, with no provider in the chain - which matters when the account guards your organisation systems. See [Not All Passkeys Are Stored the Same Way](/docs/security-academy/passkeys/passkey-vs-password#not-all-passkeys-are-stored-the-same-way).

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Deploying FIDO2 Passkeys via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
- [Passkeys and NIS2](/docs/security-academy/passkeys/passkey-vs-password#passkeys-and-nis2)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Deploying Seedkeeper PRO in Your Organization](/docs/business/deploying-seedkeeper-pro-in-your-organization)
- [Security and Compliance for Organizations](/docs/business/security-compliance-for-organizations)
- [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer)
