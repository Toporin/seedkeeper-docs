---
title: "Python Library and CLI"
description: "seedkeeper-manager configures the FIDO2 and OTP applets from Python or the command line. What it is for, and where provisioning at scale needs care."
keywords: [seedkeeper-manager, Python FIDO2 library, CTAP2 python, provisioning security keys, command line FIDO2, bulk device configuration]
sidebar_position: 5
sidebar_label: "Python Library and CLI"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is seedkeeper-manager for?", a: "Configuring the FIDO2 and OTP applets on a Seedkeeper PRO from Python or the command line - setting PINs, loading OTP credentials, inspecting device state, and automating any of that across many devices."},
  {q: "Do I need this library to accept passkeys on my website?", a: "No. Authenticating users needs standard WebAuthn and no Seedkeeper code. This library is for driving hardware you hold."},
  {q: "What hardware do I need to run it?", a: "A contact smartcard reader or an NFC reader. The device has no USB HID interface, so a USB port alone is not enough."},
  {q: "How many failed PIN attempts before the device locks?", a: "Eight consecutive failures lock the FIDO applet. Recovery requires resetting it, which permanently erases every passkey stored on the device."},
  {q: "Can I copy OTP credentials from one device to another?", a: "No. OTP secrets are write-only on the secure element. To have the same credential on two devices, write it to both while you still hold the original secret."},
]} />

<p class="doc-subtitle">Configure Devices From a Script</p>

<div class="tldr">

[`seedkeeper-manager`](https://github.com/Toporin/seedkeeper-manager) is a Python library and command line tool for configuring the FIDO2 and OTP applets on a Seedkeeper PRO. Use it for provisioning, internal tooling and automation - not for authenticating users, which needs no code at all.

</div>

## What It Is For

This library drives the device. It is the right tool when you are the one holding the hardware, and the wrong tool when you are authenticating someone else's.

Typical uses:

- **Provisioning devices before handing them out** - setting a FIDO PIN, raising the minimum PIN length, loading OTP credentials
- **Internal tooling** - scripting anything an administrator would otherwise do by hand in an app
- **Inspection** - reading `authenticatorGetInfo`, enumerating credentials, checking applet state
- **Testing** - exercising CTAP2 behaviour from a test suite

If you are adding passkey sign-in to a service, you do not need this. See [WebAuthn Quickstart](/docs/developers/webauthn-quickstart).

## Getting It

```bash
git clone https://github.com/Toporin/seedkeeper-manager
```

Installation, dependencies and the current command reference live in the repository README. This page deliberately does not duplicate them - a copy here would drift out of date within a release or two, and a stale reference is worse than none.

## What You Need to Run It

A **contact smartcard reader** or an **NFC reader**. There is no USB HID path on this device, which is the first thing that surprises people coming from USB security keys.

On Linux that means `pcscd` running and your reader recognised. On Windows and macOS the built-in smartcard stack usually handles it. If the device is not detected, check the reader is visible to the system before debugging the library.

## Things That Bite During Provisioning

The library is straightforward. Provisioning at any scale is where the interesting problems live - see [Fleet Management and Bulk Provisioning](/docs/business/fleet-management-and-bulk-provisioning) for the operational side of the same job.

### PIN Lockout Is Eight Attempts

The FIDO applet locks after **8 consecutive failed PIN attempts**, and recovery means resetting the applet, which erases every passkey on it.

In a script, that is eight bugs away from wiping a batch. Validate PIN input before sending it, and never retry blindly in a loop.

### Resetting Is Not Reversible

An applet reset returns it to factory state with no undo. In an automated pipeline, make the reset step explicit and separate rather than something that happens as a side effect of a re-run.

### The Three Applets Are Independent

FIDO2, OTP and the password manager each have their own PIN and their own state - see [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin). Resetting one does not touch the others, and a provisioning script needs to be explicit about which it is configuring.

### OTP Secrets Are Write-Only

You can write a TOTP seed into the secure element and you can never read it back. That is the security property, and it has a provisioning consequence: **if you need the same credential on two devices, write it to both while you still hold the secret**. There is no migration afterwards - see [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

Storage is capped at **50 OTP credentials** per device.

### Raising the Minimum PIN Length

`setMinPINLength` is supported, so a deployment can require more than the 4-digit default. It applies per device, so it belongs in the provisioning script rather than in a policy document nobody executes.

### Card Removal Mid-Operation

NFC operations fail when the card moves. Handle it as an expected condition rather than an exception, especially in a loop over many devices - a half-configured device is worse than an unconfigured one.

## Working From the Library Rather Than the CLI

The CLI is a thin layer over the library, so anything the CLI does is available programmatically. For a provisioning pipeline, the library is usually the better entry point: you get structured errors instead of parsing output, and you can keep a device connection open across several operations rather than reconnecting each time.

## Verifying Device Capabilities

Reading `authenticatorGetInfo` from a device you hold is the authoritative way to confirm what it supports. Everything published in [Device Capabilities](/docs/developers/device-capabilities) can be verified this way rather than taken on trust.

## FAQ

<details>
<summary>What is seedkeeper-manager for?</summary>

Configuring the FIDO2 and OTP applets on a Seedkeeper PRO from Python or the command line - setting PINs, loading OTP credentials, inspecting device state, and automating any of that across many devices.

</details>

<details>
<summary>Do I need this library to accept passkeys on my website?</summary>

No. Authenticating users needs standard WebAuthn and no Seedkeeper code. This library is for driving hardware you hold.

</details>

<details>
<summary>What hardware do I need to run it?</summary>

A contact smartcard reader or an NFC reader. The device has no USB HID interface, so a USB port alone is not enough.

</details>

<details>
<summary>How many failed PIN attempts before the device locks?</summary>

Eight consecutive failures lock the FIDO applet. Recovery requires resetting it, which permanently erases every passkey stored on the device.

</details>

<details>
<summary>Can I copy OTP credentials from one device to another?</summary>

No. OTP secrets are write-only on the secure element. To have the same credential on two devices, write it to both while you still hold the original secret.

</details>

## Related Articles

- [Device Capabilities](/docs/developers/device-capabilities)
- [Repositories](/docs/developers/repositories)
- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
- [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Fleet Management and Bulk Provisioning](/docs/business/fleet-management-and-bulk-provisioning)
