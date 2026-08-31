---
title: "How to Secure GitHub with a Passkey"
description: "Register your Seedkeeper PRO as a passkey on GitHub and sign in without a password or a separate 2FA step. Step-by-step guide."
keywords: [github passkey, github security key, github passwordless, github FIDO2, github 2FA hardware key]
sidebar_position: 2
sidebar_label: "Secure GitHub with a Passkey"
tags: [github, passkey, productivity]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Does a passkey replace my GitHub 2FA?", a: "Yes - signing in with a passkey covers both password and 2FA in one step."},
  {q: "Can I upgrade an existing security key to a passkey?", a: "Yes, if you already registered your Seedkeeper PRO as a 2FA security key, GitHub may offer an upgrade option in the same Add a passkey flow. See Managing your passkeys for details."},
  {q: "Can I add more than one Seedkeeper PRO as a backup?", a: "Yes, and it's recommended - see Passkey Backup Strategy."},
  {q: "Why register a Seedkeeper PRO instead of my phone's built-in passkey?", a: "Because the key never leaves the device and is not copied anywhere. A synced passkey lives in a provider's cloud and is only as safe as your account with them; a Seedkeeper PRO passkey is generated inside an EAL6+ secure element and physically cannot be extracted. It also works on computers that aren't yours, which a phone-bound passkey does not. See Not All Passkeys Are Stored the Same Way."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Sign In to GitHub Without a Password or 2FA</p>

<p class="platform-note">Web</p>

<div class="tldr">

From GitHub's Password and authentication settings, add a passkey, choose a security key instead of your device's built-in biometrics, then connect your Seedkeeper PRO to register it.

</div>

## Overview

GitHub supports [passkeys](/docs/glossary/passkey) as a way to sign in safely and easily, without needing a password and a separate 2FA step - your Seedkeeper PRO covers both at once. That single step is also phishing-resistant, which a password plus a one-time code is not - see [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp).

<WhyHardware />

## Step-by-Step Instructions

<div class="step-layout">

<div class="step-text">

### Step 1: Go to Settings

In the upper-right corner of any GitHub page, click your profile picture, then click **Settings**.

### Step 2: Go to Password and authentication

In the "Access" section of the sidebar, click **Password and authentication**.

### Step 3: Add a passkey

Under **Passkeys**, click **Add a passkey**.

### Step 4: Authenticate

If prompted, authenticate with your password or another existing method.

### Step 5: Confirm

Under **Configure passwordless authentication**, review the prompt, then click **Add passkey**.

### Step 6: Choose a security key instead of your device

You'll be offered your device's biometrics or a synced credential manager by default. Look for an option like **Use another device** or **Security key** instead, so you can register your Seedkeeper PRO.

### Step 7: Connect your Seedkeeper PRO

Insert your Seedkeeper PRO, or tap it against an NFC reader.

### Step 8: Enter your PIN

Provide your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) to complete the registration.

### Step 9: Confirm

Review the confirmation that your passkey was registered, then click **Done**.

You can now sign in to GitHub using your Seedkeeper PRO instead of your password and 2FA.

</div>

<div class="step-image step-image--wide">

<img src="/img/gifs/github-passkey-browser-mockup.gif" alt="Signing in to GitHub with a passkey" className="mockup-image" style={{maxWidth: '460px'}} />

</div>

</div>

## Removing a Passkey

Go to **Settings** → **Password and authentication**, click the icon next to the passkey you want to remove, review the confirmation, then click **Delete**.

:::warning[Keep at least one backup registered]
If your Seedkeeper PRO is device-bound (not synced to a cloud provider), losing it means losing that passkey for good. GitHub recommends registering passkeys on at least two devices - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy).
:::

## Official GitHub Resources

- [About passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey)
- [Managing your passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/managing-your-passkeys)
- [Signing in with a passkey](https://docs.github.com/en/authentication/authenticating-with-a-passkey/signing-in-with-a-passkey)

## FAQ

<details>
<summary>Does a passkey replace my GitHub 2FA?</summary>

Yes - signing in with a passkey covers both password and 2FA in one step.

</details>

<details>
<summary>Can I upgrade an existing security key to a passkey?</summary>

Yes, if you already registered your Seedkeeper PRO as a 2FA security key, GitHub may offer an upgrade option in the same **Add a passkey** flow. See [Managing your passkeys](https://docs.github.com/en/authentication/authenticating-with-a-passkey/managing-your-passkeys) for details.

</details>

<details>
<summary>Can I add more than one Seedkeeper PRO as a backup?</summary>

Yes, and it's recommended - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy).

</details>

<details>
<summary>Why register a Seedkeeper PRO instead of my phone's built-in passkey?</summary>

Because the key never leaves the device and is not copied anywhere. A synced passkey lives in a provider's cloud and is only as safe as your account with them; a Seedkeeper PRO passkey is generated inside an EAL6+ secure element and physically cannot be extracted. It also works on computers that aren't yours, which a phone-bound passkey does not. See [Not All Passkeys Are Stored the Same Way](/docs/security-academy/passkeys/passkey-vs-password#not-all-passkeys-are-stored-the-same-way).

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [How to Secure Dropbox with a Passkey](/docs/tutorials/productivity/secure-dropbox-with-a-passkey)
- [How to Secure OpenAI/ChatGPT with a Passkey](/docs/tutorials/productivity/secure-openai-with-a-passkey)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
