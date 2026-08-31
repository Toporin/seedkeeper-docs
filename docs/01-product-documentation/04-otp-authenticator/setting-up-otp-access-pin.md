---
title: "Setting Up an OTP Access PIN"
description: "By default no PIN protects your OTP codes on a Seedkeeper PRO. Here is how to add an access PIN, change it, or remove it again."
keywords: [OTP PIN, protect 2FA codes, authenticator PIN, Seedkeeper PRO OTP password, secure OTP access]
sidebar_position: 2
sidebar_label: "Setting Up an OTP Access PIN"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Is a PIN required to view OTP codes by default?", a: "No. Without setting one up, anyone who scans your device can see your OTP codes. See the Overview above."},
  {q: "How do I change my existing OTP PIN?", a: "Follow the same steps above - see Already have a PIN? above."},
  {q: "How do I remove my OTP PIN?", a: "Follow the same steps, but tap Remove password instead of Set password. See Want to remove it instead? above."},
  {q: "Is this the same PIN as my password manager or passkeys?", a: "No. Seedkeeper PRO uses three independent PINs: the password manager PIN, the FIDO PIN for passkeys, and this one for OTP access. See Setting Up Your Passkey PIN for the full breakdown."},
  {q: "What happens if I forget my OTP access PIN?", a: "There is no recovery. Regaining access means resetting the applet, which erases the OTP credentials stored on the device - which is why saving the original QR code or secret matters. See Backup and Restore Procedures."},
]} />

<p class="doc-subtitle">Add a PIN Before Anyone Can See Your OTP Codes</p>

<div class="tldr">

By default, scanning your Seedkeeper PRO shows your OTP codes with no PIN required. You can add one from Configuration → Manage Password, under 2FA Accounts.

</div>

## Overview

Out of the box, anyone who scans your Seedkeeper PRO can see your list of [OTP codes](/docs/security-academy/authentication/what-is-otp) - no PIN needed. Setting up an access PIN closes that gap: once it's set, the app asks for it every time someone tries to read or generate your OTP codes.

It also turns the device from a single factor into two: [something you have](/docs/security-academy/authentication/authentication-factors-explained) plus something you know.

## Step-by-Step Instructions

<div class="step-layout">

<div class="step-text">

### Step 1: Open the menu

From the Seedkeeper PRO App, tap the 3-dot menu, then **Configuration**.

### Step 2: Go to Manage Password

Under **2FA Accounts**, tap **Manage password**.

### Step 3: Scan your card

This lets the app check whether a PIN is already set. If none is set yet, tap **Set password**.

### Step 4: Set your password

Enter and confirm your personal PIN, then scan your card again to validate.

### Step 5: Go back to the home screen

Refresh the app and scan your card. From now on, you'll need to enter this PIN every time you want to view or generate your OTP codes. You can optionally have the app memorize the PIN so it doesn't ask every time.

:::tip[Already have a PIN?]
Follow the same steps to change it - you'll just land on a different option since a PIN already exists.
:::

:::tip[Want to remove it instead?]
Follow the same steps, but tap **Remove password** under Manage Password instead of Set password.
:::

</div>

<div class="step-image">

<img src="/img/gifs/otp-pin-setup-iphone-mockup.gif" alt="Setting up an OTP access PIN in the Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

## FAQ

<details>
<summary>Is a PIN required to view OTP codes by default?</summary>

No. Without setting one up, anyone who scans your device can see your OTP codes. See the [Overview](#overview) above.

</details>

<details>
<summary>How do I change my existing OTP PIN?</summary>

Follow the same steps above - see [Already have a PIN?](#step-5-go-back-to-the-home-screen) above.

</details>

<details>
<summary>How do I remove my OTP PIN?</summary>

Follow the same steps, but tap **Remove password** instead of Set password. See [Want to remove it instead?](#step-5-go-back-to-the-home-screen) above.

</details>

<details>
<summary>Is this the same PIN as my password manager or passkeys?</summary>

No. Seedkeeper PRO uses three independent PINs: the password manager PIN, the FIDO PIN for passkeys, and this one for OTP access. See [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) for the full breakdown.

</details>

<details>
<summary>What happens if I forget my OTP access PIN?</summary>

There is no recovery. Regaining access means resetting the applet, which erases the OTP credentials stored on the device - which is why saving the original QR code or secret matters. See [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

</details>

## Related Articles

- [Adding a TOTP Account](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Managing OTP Entries](/docs/product-documentation/otp-authenticator/managing-otp-entries)
- [Security Best Practices](/docs/product-documentation/getting-started/security-best-practices)
- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [What is OTP?](/docs/security-academy/authentication/what-is-otp)
- [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained)
- [Lost OTP Access](/docs/troubleshooting/lost-otp-access)
- [PIN Problems and Lockouts](/docs/troubleshooting/pin-problems-and-lockouts)
