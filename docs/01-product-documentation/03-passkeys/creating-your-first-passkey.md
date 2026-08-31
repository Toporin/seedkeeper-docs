---
title: "Creating Your First Passkey"
description: "Try passwordless sign-in risk-free: create your first passkey with a Seedkeeper PRO on a demo site, with no real account or email needed."
keywords: [create first passkey, passkey test site, passkeys.io, hardware passkey setup, passwordless sign-in]
sidebar_position: 3
sidebar_label: "Creating Your First Passkey"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Do I need to set up my PIN before creating a passkey?", a: "Yes. See Setting Up Your Passkey PIN first."},
  {q: "Why use a test website instead of a real account?", a: "It lets you try the full passkey flow risk-free, with no real email or account needed. Once you're comfortable, you can create passkeys the same way on any site that supports them."},
  {q: "Is my passkey stored in the cloud?", a: "No. It's stored directly in your Seedkeeper PRO's secure element - nothing is sent to Satochip or anywhere else."},
]} />

<p class="doc-subtitle">Try Passwordless Sign-In Risk-Free</p>

<div class="tldr">

A passkey lets you sign in without a password, using your Seedkeeper PRO instead. Since there's no single "first passkey" flow, the easiest way to try it is on a test website like passkeys.io - no real account needed.

</div>

## Overview

A [passkey](/docs/glossary/passkey) replaces your password with a secure credential stored on your Seedkeeper PRO, based on the [FIDO2](/docs/glossary/fido2) standard. Instead of typing a password, you scan your device to sign in. See [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey) for the full explanation.

Before you set one up on a real account, it's worth trying it on a test site first - **[passkeys.io](https://www.passkeys.io/)** is built exactly for this: a live demo login box, no real email required.

## Step-by-Step Instructions

<div class="step-layout">

<div class="step-text">

### Step 1: Make sure your PIN is set up

You'll need your passkey PIN configured first - see [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) if you haven't done that yet.

### Step 2: Go to the test site

Open [passkeys.io](https://www.passkeys.io/) and tap **Create Account**.

### Step 3: Enter an email

Any email works here - it doesn't need to be real, this is just a test.

### Step 4: Create the passkey

Tap **Create Passkey**.

### Step 5: Scan your device

A prompt appears asking you to connect your Seedkeeper PRO. Scan it and enter your passkey PIN.

Your passkey is now stored in your Seedkeeper PRO's secure element. You can sign back in to this site anytime with just your device - no password needed.

</div>

<div class="step-image step-image--wide">

<img src="/img/gifs/passkey-test-ipad-mockup.gif" alt="Creating a passkey on the passkeys.io demo site" className="mockup-image" style={{maxWidth: '450px'}} />

</div>

</div>

## FAQ

<details>
<summary>Do I need to set up my PIN before creating a passkey?</summary>

Yes. See [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) first.

</details>

<details>
<summary>Why use a test website instead of a real account?</summary>

It lets you try the full passkey flow risk-free, with no real email or account needed. Once you're comfortable, you can create passkeys the same way on any site that supports them.

</details>

<details>
<summary>Is my passkey stored in the cloud?</summary>

No. It's stored directly in your Seedkeeper PRO's secure element - nothing is sent to Satochip or anywhere else.

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
- [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
