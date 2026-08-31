---
title: "Fleet Management and Bulk Provisioning"
description: "Configuring devices at scale before they reach users: what can be scripted, what cannot, and the mistakes that turn a batch into a pile of bricks."
keywords: [bulk provisioning security keys, fleet management, seedkeeper-manager, scripted PIN setup, device inventory, mass deployment FIDO2]
sidebar_position: 4
sidebar_label: "Fleet Management and Bulk Provisioning"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can we pre-register passkeys before giving devices to employees?", a: "No. A passkey is created by the service during registration, on the device present at that moment, so users must register their own. PINs and OTP credentials can be provisioned in advance."},
  {q: "Can we manage devices remotely once they are issued?", a: "No. There is no agent, no MDM channel and no over-the-air update - the device has no radio beyond the reader's field. Management happens through physical access with a reader."},
  {q: "How many wrong PIN attempts lock a device?", a: "Eight consecutive failures lock the FIDO applet, and recovery means resetting it, which erases every passkey stored on the device. Provisioning scripts should never retry blindly."},
  {q: "Can we copy OTP credentials between two devices?", a: "No. OTP secrets are write-only on the secure element. If a credential must exist on both a primary and a backup device, write it to both during the same provisioning pass."},
  {q: "Should we set the PIN, or let the user do it?", a: "Set a temporary one for transit, then have the user change it immediately on receipt. A PIN known to whoever provisioned the device does not function as a second factor."},
  {q: "What readers do we need?", a: "Contact smartcard readers or NFC readers. There is no USB HID path, so confirm reader coverage across your fleet before ordering devices at scale."},
]} />

<p class="doc-subtitle">Configuring Many Devices Without Bricking Any</p>

<div class="tldr">

Devices can be configured from a script before they reach users, using the [Python library and CLI](/docs/developers/python-library-and-cli). Two constraints shape everything: the FIDO applet locks after **8 wrong PIN attempts**, and OTP secrets are **write-only**, so a credential not written during provisioning cannot be added to a second device later.

</div>

## What You Can Do Before Handing a Device Over

`seedkeeper-manager` drives the device over a contact or NFC reader, so anything an administrator would do by hand can be scripted:

- Set an initial FIDO PIN
- Raise the minimum PIN length above the four-digit default
- Load OTP credentials
- Read device state and confirm a batch is consistent
- Reset an applet to a known starting point

Full technical detail in [Python Library and CLI](/docs/developers/python-library-and-cli).

## What You Cannot Do Centrally

Being clear about the boundary saves planning time.

**Passkeys cannot be pre-registered.** A passkey is created by the service at registration, on the device present at that moment. There is no way to load one in advance - see [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work). Users register their own, on your services, from their own workstation.

**There is no remote management.** No agent, no MDM channel, no over-the-air update. The device has no radio beyond the reader's field, which is a security property and an operational constraint at the same time.

**You cannot read anything back.** Private keys and OTP secrets cannot be extracted, by anyone, including you. Inventory means recording what you wrote, not querying the device later.

## The Two Constraints That Bite

### Eight Wrong PIN Attempts Locks the Applet

Recovery means resetting, which erases every passkey on the device. In a provisioning script, that is eight bugs away from wiping a batch.

**Validate PIN input before sending it, and never retry in a loop.** A failed attempt should stop the script and surface the device, not trigger another try.

### OTP Secrets Are Write-Only

You can write a TOTP seed into the secure element and never read it back. The provisioning consequence is specific:

**If a credential must exist on two devices, write it to both while you still hold the secret.** There is no migration afterwards, and no way to copy from one device to the other - see [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

For a two-device-per-person model, that means provisioning both units in the same pass.

## A Workable Provisioning Flow

1. **Unbox and label.** Record the serial or asset tag before anything else, and keep the pairing of primary and backup together.
2. **Set a temporary PIN**, identical across the batch, purely so the device is not left open in transit.
3. **Raise the minimum PIN length** if your policy requires more than four digits.
4. **Write shared OTP credentials**, to both devices in a pair, in the same pass.
5. **Verify.** Read back device state and confirm the batch is consistent before packing.
6. **Hand over, and have the user change the PIN immediately.**

That last step matters more than it looks. A PIN known to whoever provisioned the device is not a second factor - possession and knowledge would sit with the same person. Make it the first thing the user does, and confirm it was done.

## Inventory

Keep one row per device: serial or asset tag, primary or backup, who it was issued to, issue date, status.

This is the record you cannot reconstruct later, because the device will not tell you. Two questions come up during every incident - *who holds device X* and *which devices does person Y hold* - and both are trivial if you wrote it down at issue time.

See [Employee Onboarding and Offboarding](/docs/business/employee-onboarding-and-offboarding) for how the inventory is used through the lifecycle.

## Readers

The practical blocker in most deployments.

The device speaks **NFC and ISO 7816 contact**, with no USB HID path - see [Device Capabilities](/docs/developers/device-capabilities#transports). Confirm before ordering at scale:

- Do your desktops have contact readers, or will you supply NFC readers?
- Do the laptops in use have anything at all?
- Does your provisioning workstation have a reader that handles a full batch reliably?

Cards work in any contact reader. Both cards and rings work on any NFC reader. Neither works in a USB port.

## Batch Testing

Before distributing, pull a few devices at random and confirm end to end: PIN accepted, a passkey registers against a real service, an OTP code validates.

A batch that was provisioned but never tested is a batch you will be debugging in front of users.

## FAQ

<details>
<summary>Can we pre-register passkeys before giving devices to employees?</summary>

No. A passkey is created by the service during registration, on the device present at that moment, so users must register their own. PINs and OTP credentials can be provisioned in advance.

</details>

<details>
<summary>Can we manage devices remotely once they are issued?</summary>

No. There is no agent, no MDM channel and no over-the-air update - the device has no radio beyond the reader's field. Management happens through physical access with a reader.

</details>

<details>
<summary>How many wrong PIN attempts lock a device?</summary>

Eight consecutive failures lock the FIDO applet, and recovery means resetting it, which erases every passkey stored on the device. Provisioning scripts should never retry blindly.

</details>

<details>
<summary>Can we copy OTP credentials between two devices?</summary>

No. OTP secrets are write-only on the secure element. If a credential must exist on both a primary and a backup device, write it to both during the same provisioning pass.

</details>

<details>
<summary>Should we set the PIN, or let the user do it?</summary>

Set a temporary one for transit, then have the user change it immediately on receipt. A PIN known to whoever provisioned the device does not function as a second factor.

</details>

<details>
<summary>What readers do we need?</summary>

Contact smartcard readers or NFC readers. There is no USB HID path, so confirm reader coverage across your fleet before ordering devices at scale.

</details>

## Related Articles

- [Python Library and CLI](/docs/developers/python-library-and-cli)
- [Employee Onboarding and Offboarding](/docs/business/employee-onboarding-and-offboarding)
- [Deploying Seedkeeper PRO in Your Organization](/docs/business/deploying-seedkeeper-pro-in-your-organization)
- [Device Capabilities](/docs/developers/device-capabilities)
