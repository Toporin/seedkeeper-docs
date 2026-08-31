---
title: "How to Enable a Passkey on Google"
description: "Register your Seedkeeper PRO as a hardware passkey on your Google Account and sign in without a password. Step-by-step guide with screenshots."
keywords: [google passkey, google security key, passkey google account, FIDO2 google, sign in without password google, Seedkeeper PRO]
sidebar_position: 1
sidebar_label: "Enable a Passkey on Google"
tags: [google, passkey]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What if I'm setting this up on my phone instead of a computer?", a: "Google may prompt you to create the passkey directly on your phone rather than showing the \"Use another device\" option. Follow the on-screen prompts, and you'll still be able to scan your Seedkeeper PRO to complete it."},
  {q: "Do I need a PIN before I start?", a: "No - if you don't have one yet, you'll be prompted to create it during setup. See Setting Up Your Passkey PIN for details on that PIN."},
  {q: "Does this remove my Google password?", a: "No. Adding a passkey doesn't remove or change any existing sign-in or recovery methods on your account. If you'd like to make it your primary sign-in method afterward, see How to Replace Passwords with Passkeys on Google."},
  {q: "Why register a Seedkeeper PRO instead of my phone's built-in passkey?", a: "Because the key never leaves the device and is not copied anywhere. A synced passkey lives in a provider's cloud and is only as safe as your account with them; a Seedkeeper PRO passkey is generated inside an EAL6+ secure element and physically cannot be extracted. It also works on computers that aren't yours, which a phone-bound passkey does not. See Not All Passkeys Are Stored the Same Way."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Sign In to Google Without a Password</p>

<p class="platform-note">Mobile and Web</p>

<div class="tldr">

Go to your Google Account's security settings, create a passkey, choose "Use another device" to register your Seedkeeper PRO as a hardware security key, then scan it and enter your PIN.

</div>

## Overview

Google supports [passkeys](/docs/glossary/passkey) as a password replacement across its account. This guide walks through registering your Seedkeeper PRO as that passkey. Here's what the full flow looks like:

<img src="/img/gifs/google-passkey-browser-mockup.gif" alt="Creating a Google Account passkey with Seedkeeper PRO" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

<WhyHardware />

## Step-by-Step Instructions

### Step 1: Go to your Google Account

Open [myaccount.google.com](https://myaccount.google.com/) and sign in with your email and password.

### Step 2: Go to Security and sign-in

In the left panel, click **Security and sign-in**.

### Step 3: Open Passkeys and security keys

Click **Passkeys and security keys**.

### Step 4: Create a passkey

Click **Create a passkey**.

### Step 5: Choose "Use another device"

The option shown here depends on the device you're on. On a phone, Google may prompt you directly to create a passkey on that device. On a desktop, choose **Use another device** to register your Seedkeeper PRO as a hardware security key instead.

### Step 6: Connect your Seedkeeper PRO

Your system (Windows, macOS, etc.) prompts you to insert or scan your Seedkeeper PRO.

### Step 7: Enter your PIN

If you haven't set up a [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) yet, you'll be asked to create one now. Otherwise, just enter your existing PIN.

### Step 8: Approve the passkey

Click **Approve** to confirm the newly created passkey.

Your Google Account is now secured with a passkey stored on your Seedkeeper PRO.

## FAQ

<details>
<summary>What if I'm setting this up on my phone instead of a computer?</summary>

Google may prompt you to create the passkey directly on your phone rather than showing the "Use another device" option. Follow the on-screen prompts, and you'll still be able to scan your Seedkeeper PRO to complete it.

</details>

<details>
<summary>Do I need a PIN before I start?</summary>

No - if you don't have one yet, you'll be prompted to create it during setup. See [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) for details on that PIN.

</details>

<details>
<summary>Does this remove my Google password?</summary>

No. Adding a passkey doesn't remove or change any existing sign-in or recovery methods on your account. If you'd like to make it your primary sign-in method afterward, see [How to Replace Passwords with Passkeys on Google](/docs/tutorials/google/replace-passwords-with-passkeys-on-google).

</details>

## Official Google Resources

- [The easiest and most secure way to log in to your accounts without a password](https://safety.google/safety/authentication/passkey/)
- [Sign in with a passkey instead of a password](https://support.google.com/accounts/answer/13548313?hl=en#zippy=%2Ccreate-a-passkey-on-the-phone-or-computer-youre-on%2Ccreate-a-passkey-on-a-security-key)
- [Use passwords & passkeys across your devices](https://support.google.com/accounts/answer/6197437?hl=en&co=GENIE.Platform%3DAndroid)

<details>
<summary>Why register a Seedkeeper PRO instead of my phone's built-in passkey?</summary>

Because the key never leaves the device and is not copied anywhere. A synced passkey lives in a provider's cloud and is only as safe as your account with them; a Seedkeeper PRO passkey is generated inside an EAL6+ secure element and physically cannot be extracted. It also works on computers that aren't yours, which a phone-bound passkey does not. See [Not All Passkeys Are Stored the Same Way](/docs/security-academy/passkeys/passkey-vs-password#not-all-passkeys-are-stored-the-same-way).

</details>

## Related Articles

- [Creating Your First Passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [How to Replace Passwords with Passkeys on Google](/docs/tutorials/google/replace-passwords-with-passkeys-on-google)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
