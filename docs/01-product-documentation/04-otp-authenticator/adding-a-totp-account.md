---
title: "Adding a TOTP Account"
description: "Add a TOTP two-factor account to your Seedkeeper PRO by scanning the service's QR code, or entering the secret by hand when no QR code is offered."
keywords: [add TOTP account, scan 2FA QR code, hardware authenticator setup, TOTP secure element, manual OTP entry]
sidebar_position: 1
sidebar_label: "Adding a TOTP Account"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What if I can't scan the QR code?", a: "Enter the account details manually - see No QR Code Available? above."},
  {q: "Do I need a PIN to add an OTP account?", a: "Not to add one, but you can set up a PIN to protect access afterward - see Setting Up an OTP Access PIN."},
  {q: "Should I save the QR code somewhere before adding it?", a: "Yes, if you want a backup device to work with this account too - see Backup and Restore Procedures."},
]} />

<p class="doc-subtitle">Add a New 2FA Code in Seconds</p>

<div class="tldr">

Open the Seedkeeper PRO App, tap Add account, scan the QR code your service provides, review the details, then save and scan your Seedkeeper PRO to store it.

</div>

## Overview

Any service offering [two-factor authentication](/docs/security-academy/authentication/what-is-2fa) via an authenticator app (Gmail, Microsoft 365, and most others) can be set up directly on your Seedkeeper PRO instead of a phone-based app. The codes it generates follow the [TOTP](/docs/security-academy/authentication/what-is-totp) standard, so any compliant service accepts them. Where the service also supports passkeys, those are the stronger option, since a one-time code can still be phished - see [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp).

## Step-by-Step Instructions

<div class="step-layout">

<div class="step-text">

### Step 1: Open the app and go the the menu

Tap the 3-dot menu on the top right corner.

### Step 2: Tap Add account

Click on "Add account"

### Step 3: Scan the QR code

Scan the QR code provided by your service (Gmail, Microsoft 365, or any other provider).<br/>
A checkmark confirms a successful scan.

### Step 4: Review the details

If you want you can change the name of the issuer or the account name for better clarity.

### Step 5: Save

Tap **Save**. The app will prompt you to scan your Seedkeeper PRO.<br/>
Your OTP account is now saved and ready to use.

</div>

<div class="step-image">

<img src="/img/gifs/adding-totp-account-iphone-mockup.gif" alt="Adding a TOTP account in the Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

## No QR Code Available?

If you can't scan the QR code, or your service doesn't provide one, tap **No QR code? Enter manually** to input the account details by hand instead.

<div class="download-row">

<img src="/img/screenshots/otp-manual-entry-callout-mockup.png" alt="No QR code? Enter manually option, highlighted" className="mockup-image" style={{maxHeight: '480px', maxWidth: 'none', width: 'auto'}} />
<img src="/img/screenshots/otp-manual-entry-mockup.png" alt="Manual OTP account entry in the Seedkeeper PRO App" className="mockup-image" style={{maxHeight: '480px', maxWidth: 'none', width: 'auto'}} />

</div>

## FAQ

<details>
<summary>What if I can't scan the QR code?</summary>

Enter the account details manually - see [No QR Code Available?](#no-qr-code-available) above.

</details>

<details>
<summary>Do I need a PIN to add an OTP account?</summary>

Not to add one, but you can set up a PIN to protect access afterward - see [Setting Up an OTP Access PIN](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin).

</details>

<details>
<summary>Should I save the QR code somewhere before adding it?</summary>

Yes, if you want a backup device to work with this account too - see [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

</details>

## Related Articles

- [Setting Up an OTP Access PIN](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin)
- [Managing OTP Entries](/docs/product-documentation/otp-authenticator/managing-otp-entries)
- [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [What is TOTP?](/docs/security-academy/authentication/what-is-totp)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
