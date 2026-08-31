---
title: "Lost OTP Access"
description: "Codes rejected, accounts erased, or a device that is gone. Why OTP credentials cannot be recovered from the device, and how to regain access."
keywords: [lost 2FA codes, OTP not working, TOTP code rejected, lost authenticator, recover 2FA, OTP account deleted]
sidebar_position: 6
sidebar_label: "Lost OTP Access"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Why is my OTP code being rejected?", a: "Usually because it expired, or because the clock on the phone or computer is wrong. Your Seedkeeper PRO takes the time from the connected device, so an incorrect system time produces incorrect codes."},
  {q: "Can I recover my OTP codes from the device?", a: "No. OTP secrets are write-only on the secure element and can never be read back. Recovery depends on having saved the original QR code, or on the service's own account recovery."},
  {q: "Why is my code greyed out?", a: "It has expired. Tap the account, tap Calculate, and scan your device to generate a fresh one - codes are computed on demand rather than counting down continuously."},
  {q: "Can I copy my OTP accounts to a second device?", a: "Not afterwards. To have the same codes on two devices, add them from the same QR code on both at the same time, or keep the original secret so you can set up the second device later."},
  {q: "I lost my device and never saved the QR codes. What now?", a: "Regain access to each service through recovery codes, another registered method, or its account recovery process - then remove the old OTP method and set up a new one."},
]} />

import BuyBackupDevice from '@site/docs/_buy-backup-device.mdx';
import GetSupport from '@site/docs/_get-support.mdx';

<p class="doc-subtitle">When Your Codes Are Rejected or Gone</p>

<div class="tldr">

OTP secrets are **write-only** on the secure element - they can be written in and never read back. Nothing can be recovered from the device itself. If a code is merely being rejected, the cause is usually the clock or an expired code; if the credential is genuinely gone, you regain access through each service's recovery process and set it up again.

</div>

## First, Is the Credential Actually Gone?

Three causes look identical from the outside and only one is serious.

### The Code Has Expired

A TOTP code lives for thirty seconds. In the app it appears greyed out once it has expired, and entering it produces a rejection.

Tap the account, tap **Calculate**, and scan your device for a fresh one - see [Managing OTP Entries](/docs/product-documentation/otp-authenticator/managing-otp-entries). Your Seedkeeper PRO generates each code on demand rather than counting down, so this is normal operation rather than a fault.

### The Clock Is Wrong

TOTP is computed from the current time, so your device and the server must roughly agree.

Your Seedkeeper PRO has no clock of its own - it takes the time from the phone or computer it is connected to. **If that device's time is wrong, every code will be wrong.** Check the time settings, and enable automatic time if it is off.

This is the cause people spend longest missing, because the app looks perfectly healthy.

### You Are Looking at the Wrong Account

Two accounts on the same service, or an issuer name that does not match what you expect. Use the search bar in the accounts list, and check the account name rather than only the issuer.

## The Credential Is Genuinely Gone

Device lost, OTP applet reset, or the account deleted by mistake.

**There is nothing to recover from the device.** The shared secret was written into the secure element and cannot be read back out - not by you, not by the app, not by us. That is precisely the property that protects it from being extracted by malware, and it has this cost.

What you can restore depends entirely on what you kept:

**If you saved the original QR code or secret**, add the account again on any device - see [Adding a TOTP Account](/docs/product-documentation/otp-authenticator/adding-a-totp-account). Nothing else is needed.

**If you did not**, you have to regain access to each service another way, then generate a new credential.

## Regaining Access Without the Codes

Work service by service, in this order:

1. **Recovery codes**, if you saved them when enabling two-factor authentication. This is what they are for.
2. **Another registered method** - a passkey, a second authenticator, or a backup phone number.
3. **The service's account recovery**, which typically runs through your email. Secure your mailbox first, since everything else depends on it.

Once back in, **remove the old OTP method** from the account and set up a new one. Leaving the dead entry in place will confuse you later and, on some services, blocks adding a replacement.

## Setting It Up So This Does Not Recur

The constraint is unusual, so the habit has to be deliberate.

**Add each code to both devices at once**, while the service's QR code is still on screen. This is the only moment the secret is available to you - afterwards there is no migration path between devices.

**Or save the original QR code or secret** somewhere secure. A screenshot in a secure note on your Seedkeeper works, and keeps it off any cloud - see [Creating Secure Notes](/docs/product-documentation/password-manager/creating-secure-notes).

**Treat that saved copy as the credential itself.** Anyone holding it can generate the same codes as your device.

Full detail in [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

<BuyBackupDevice />

## If You Only Have One Device and Want a Second

There is no migration, so the sequence is specific:

1. Sign in to the service and **delete** the existing OTP credential
2. Set up a **new** OTP credential
3. Add the new code to **both** devices at the same time

Doing it in that order means a brief window with no second factor on that account, so make sure you can still sign in before you start.

## FAQ

<details>
<summary>Why is my OTP code being rejected?</summary>

Usually because it expired, or because the clock on the phone or computer is wrong. Your Seedkeeper PRO takes the time from the connected device, so an incorrect system time produces incorrect codes.

</details>

<details>
<summary>Can I recover my OTP codes from the device?</summary>

No. OTP secrets are write-only on the secure element and can never be read back. Recovery depends on having saved the original QR code, or on the service's own account recovery.

</details>

<details>
<summary>Why is my code greyed out?</summary>

It has expired. Tap the account, tap Calculate, and scan your device to generate a fresh one - codes are computed on demand rather than counting down continuously.

</details>

<details>
<summary>Can I copy my OTP accounts to a second device?</summary>

Not afterwards. To have the same codes on two devices, add them from the same QR code on both at the same time, or keep the original secret so you can set up the second device later.

</details>

<details>
<summary>I lost my device and never saved the QR codes. What now?</summary>

Regain access to each service through recovery codes, another registered method, or its account recovery process - then remove the old OTP method and set up a new one.

</details>

## Related Articles

- [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Managing OTP Entries](/docs/product-documentation/otp-authenticator/managing-otp-entries)
- [Adding a TOTP Account](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Lost or Stolen Device](/docs/troubleshooting/lost-device)
- [What is TOTP?](/docs/security-academy/authentication/what-is-totp)

<GetSupport />
