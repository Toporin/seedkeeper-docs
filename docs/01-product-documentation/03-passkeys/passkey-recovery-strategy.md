---
title: "Passkey Recovery Strategy"
description: "Lost a Seedkeeper PRO with passkeys on it? Switch to your backup, revoke the lost device on each account, and register a replacement. Full procedure."
keywords: [lost security key, revoke passkey, passkey recovery, stolen FIDO2 key, replace lost device]
sidebar_position: 8
sidebar_label: "Passkey Recovery Strategy"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can someone use my lost device's passkey before I revoke it?", a: "A passkey still requires your device's own security (like your passkey PIN) to be used - but revoking it as soon as possible removes any risk entirely. See Revoke the Lost Device's Access above."},
  {q: "Do I need to do anything on my Seedkeeper PRO itself when a device is lost?", a: "No - since passkeys aren't synced between devices, there's nothing to update on your other devices. Revocation happens on each service's side, not on your Seedkeeper PRO."},
  {q: "What if I don't have a Backup device registered anywhere?", a: "You'll need to use each service's own account recovery process. See If You Never Set Up a Backup Device above."},
]} />

<p class="doc-subtitle">What to Do When a Device Is Lost or Stolen</p>

<div class="tldr">

If you lose a device with passkeys on it, switch to your Backup device to keep signing in, revoke the lost device's access on each affected account, then register a replacement to restore your redundancy.

</div>

## Overview

This article covers what to do *after* losing a device. See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for how to prepare *before* it happens - the steps below assume you already have at least one Backup device registered.

## Immediate Steps If You Lose a Device

### Switch to Your Backup Device

If you registered a Backup device in advance, you can keep signing in to every affected account with it right away - no urgency there.

### Revoke the Lost Device's Access

For each account where the lost device had a passkey registered, sign in using your login and password, then find the passkey settings. Identify the passkey tied to the lost device and delete it - once removed, it can no longer be used to sign in, even by whoever has the physical device now.

### Register a Replacement Device

Once the lost device is revoked everywhere, register a new device to restore your original Main + Backup setup. See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for the recommended setup.

### Update Your Own Records

If you keep track of which device is registered where, update that list to reflect the change.

## If You Never Set Up a Backup Device

Without a Backup device already registered, you'll need to fall back on each service's own account recovery process - which is exactly why keeping a password as a fallback matters. See [Keep a Password Fallback Where Possible](/docs/product-documentation/passkeys/passkey-backup-strategy#keep-a-password-fallback-where-possible).

## Forgot Your PIN Instead of Losing the Device?

That's a different situation - your device isn't lost, you just can't unlock its passkey/OTP features. See [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper) for that case.

## FAQ

<details>
<summary>Can someone use my lost device's passkey before I revoke it?</summary>

A passkey still requires your device's own security (like your passkey PIN) to be used - but revoking it as soon as possible removes any risk entirely. See [Revoke the Lost Device's Access](#revoke-the-lost-devices-access) above.

</details>

<details>
<summary>Do I need to do anything on my Seedkeeper PRO itself when a device is lost?</summary>

No - since passkeys aren't synced between devices, there's nothing to update on your other devices. Revocation happens on each service's side, not on your Seedkeeper PRO.

</details>

<details>
<summary>What if I don't have a Backup device registered anywhere?</summary>

You'll need to use each service's own account recovery process. See [If You Never Set Up a Backup Device](#if-you-never-set-up-a-backup-device) above.

</details>

## Related Articles

- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Managing Passkeys](/docs/product-documentation/passkeys/managing-passkeys)
- [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Lost or Stolen Device](/docs/troubleshooting/lost-device)
- [Lost Passkey Access](/docs/troubleshooting/lost-passkey)
- [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer)
- [Security Best Practices](/docs/product-documentation/getting-started/security-best-practices)
