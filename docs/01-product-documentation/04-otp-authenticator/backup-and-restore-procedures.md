---
title: "Backup and Restore Procedures"
description: "OTP secrets are write-only on the secure element and cannot be cloned. Add each code to every device at once, or keep the original QR code safely."
keywords: [OTP backup, TOTP backup two devices, cannot export OTP, save QR code, restore 2FA codes]
sidebar_position: 4
sidebar_label: "Backup and Restore Procedures"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I export or clone OTP codes from one device to another?", a: "No. Seedkeeper PRO's secure element only allows writing OTP secrets in, never reading them back out. See the Overview above."},
  {q: "What's the best way to back up a new OTP code?", a: "Add it to every Seedkeeper PRO device you own at the same time, or save the original QR code/secret securely for later. See Setting Up a Backup the Right Way above."},
  {q: "I only set up one device and now want a backup - what do I do?", a: "You'll need to generate a new credential from the service and add it to both devices at once. See If You Didn't Save a Backup above."},
]} />

<p class="doc-subtitle">Protect Your OTP Codes Before You Need To</p>

<div class="tldr">

You can't clone or export OTP codes from one Seedkeeper PRO to another - the secure element only lets you write codes in, never read them back out. To have the same codes on multiple devices, add each code to every device at the same time, or save the original QR code/secret to set it up again later.

</div>

## Overview

OTP codes on a Seedkeeper PRO are, by design, **write-only**. The shared secret behind each code can be written into the secure element, but never read back out - the same hardware-level protection that keeps your codes safe also means there's no way to copy them to another device afterward.

That shared secret is also why OTP differs from a passkey, which has no secret held by both sides - see [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#the-shared-secret-problem). This is different from your password manager, which does support device-to-device backup - see [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery).

## Setting Up a Backup the Right Way

### Add the Same Code to Multiple Devices at Once

If you already have more than one Seedkeeper PRO, the simplest approach is to add each new OTP code to all of them at the same time, while the service's setup QR code or secret is still available on screen.

### Or Save the Original QR Code or Secret

If you only have one device right now, save a copy of the setup QR code (a screenshot works) or the shared secret key itself, and store it somewhere secure. You can use it to set up a backup device later, whenever you get one.

<div class="download-row">

<div>
<img src="/img/screenshots/gmail-otp-qr-example.png" alt="Gmail OTP setup QR code" className="doc-diagram" style={{maxWidth: '200px'}} />
<p style={{textAlign: 'center', fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-600)'}}>Gmail OTP code</p>
</div>

<div>
<img src="/img/screenshots/microsoft365-otp-qr-example.png" alt="Microsoft 365 OTP setup QR code" className="doc-diagram" style={{maxWidth: '200px'}} />
<p style={{textAlign: 'center', fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-600)'}}>Microsoft 365 OTP code</p>
</div>

</div>

:::warning[Keep this saved QR code or secret just as safe as the code itself]
Anyone with access to the original QR code or secret can generate the same OTP codes as your Seedkeeper PRO - store it with the same care you'd give the credential itself.
:::

## If You Didn't Save a Backup

If you added a code to one device without saving the original QR code or secret, and later get a second Seedkeeper PRO, there's no way to migrate the existing credential. Instead:

1. Log in to the account and delete the original OTP credential
2. Set up a new OTP credential for that account
3. Add this new code to **both** Seedkeeper PRO devices at the same time

## FAQ

<details>
<summary>Can I export or clone OTP codes from one device to another?</summary>

No. Seedkeeper PRO's secure element only allows writing OTP secrets in, never reading them back out. See the [Overview](#overview) above.

</details>

<details>
<summary>What's the best way to back up a new OTP code?</summary>

Add it to every Seedkeeper PRO device you own at the same time, or save the original QR code/secret securely for later. See [Setting Up a Backup the Right Way](#setting-up-a-backup-the-right-way) above.

</details>

<details>
<summary>I only set up one device and now want a backup - what do I do?</summary>

You'll need to generate a new credential from the service and add it to both devices at once. See [If You Didn't Save a Backup](#if-you-didnt-save-a-backup) above.

</details>

## Related Articles

- [Adding a TOTP Account](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Managing OTP Entries](/docs/product-documentation/otp-authenticator/managing-otp-entries)
- [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Lost OTP Access](/docs/troubleshooting/lost-otp-access)
