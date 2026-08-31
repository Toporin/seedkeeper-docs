---
title: "Using Passkeys Across Devices"
description: "Your passkeys live on the Seedkeeper PRO itself, not on a phone or laptop - so they work on iOS, Android, Windows, macOS and Linux with nothing to sync."
keywords: [passkeys across devices, cross platform passkey, no ecosystem lock-in, roaming authenticator, use passkey any computer]
sidebar_position: 6
sidebar_label: "Using Passkeys Across Devices"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Do I need to install anything on every device I use?", a: "No app required. Your Seedkeeper PRO is FIDO2-certified, so the website and your browser or OS talk to it directly over the native WebAuthn protocol - no Seedkeeper PRO App involved. You'll only need the app for setup and management: configuring your PIN, viewing OTP codes, or checking and deleting existing passkeys. Signing in itself just needs an NFC reader (or a compatible USB/contact reader) on the device you're using."},
  {q: "What if I lose my Seedkeeper PRO?", a: "Since your passkeys live on that one device, losing it without a backup means losing access to those passkeys too. See Passkey Backup Strategy for how to protect against this."},
  {q: "Can I use the same passkey on two different Seedkeeper PRO devices?", a: "No - unlike passwords and notes, passkeys aren't copied over when you back up one device to another. If you want a backup device to work as a passkey too, you need to go to each service and register a new, additional passkey directly on that backup device. See Passkey Backup Strategy for more on this."},
]} />

<p class="doc-subtitle">One Device, Every Service, Everywhere</p>

<div class="tldr">

Your passkeys are stored on your Seedkeeper PRO itself, not on any single phone or computer. Sign in on any device that can read your Seedkeeper PRO over NFC - nothing to sync, nothing to set up twice.

</div>

## Overview

Your Seedkeeper PRO holds your passkeys directly on its secure element. To sign in to a service you've set up a passkey with, you just need your Seedkeeper PRO and a device that can read it over NFC - your own phone, a friend's computer, a work laptop, anywhere.

### Not Tied to One Ecosystem

Many passkey solutions - like iCloud Keychain or Google Password Manager - sync passkeys within a single ecosystem, but require extra steps (or don't work at all) outside it. A passkey created with an Apple account, for example, doesn't easily carry over to a Windows PC.

Your Seedkeeper PRO sidesteps that entirely: since the passkey lives on the device itself rather than in an account tied to one platform, it works the same way on iOS, Android, Windows, macOS, or Linux - whatever you're using at the time. This is the difference between a synced passkey and a hardware-bound one - see [Not All Passkeys Are Stored the Same Way](/docs/security-academy/passkeys/passkey-vs-password#not-all-passkeys-are-stored-the-same-way).

### Maximum Security, Minimal Friction

This is the real advantage of passkeys done this way: your private key never leaves the secure element, making it resistant to phishing and remote attacks - while day-to-day use is as simple as tapping your device against your phone or a reader. Strong security usually comes with friction; here, it doesn't.

## FAQ

<details>
<summary>Do I need to install anything on every device I use?</summary>

No app required. Your Seedkeeper PRO is FIDO2-certified, so the website and your browser or OS talk to it directly over the native WebAuthn protocol - no Seedkeeper PRO App involved. You'll only need the app for setup and management: configuring your PIN, viewing OTP codes, or checking and deleting existing passkeys. Signing in itself just needs an NFC reader (or a compatible USB/contact reader) on the device you're using.

</details>

<details>
<summary>What if I lose my Seedkeeper PRO?</summary>

Since your passkeys live on that one device, losing it without a backup means losing access to those passkeys too. See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for how to protect against this.

</details>

<details>
<summary>Can I use the same passkey on two different Seedkeeper PRO devices?</summary>

No - unlike passwords and notes, passkeys aren't copied over when you back up one device to another. If you want a backup device to work as a passkey too, you need to go to each service and register a new, additional passkey directly on that backup device. See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for more on this.

</details>

## Related Articles

- [Managing Passkeys](/docs/product-documentation/passkeys/managing-passkeys)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
