---
title: "Backup & Recovery"
description: "Back up your Seedkeeper device-to-device so a lost or damaged card never costs you your passwords. Works card-to-card, ring-to-ring, Classic and PRO."
keywords: [Seedkeeper backup, backup device, restore passwords, hardware wallet backup, card to ring backup, encrypted backup]
sidebar_position: 4
sidebar_label: "Backup & Recovery"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Do I need a second Seedkeeper device to back up?", a: "Yes. Seedkeeper backs up device-to-device - you need a Master device and a Backup device to complete the process described above."},
  {q: "Does the Backup device need to be the same form factor as the Master?", a: "No. Any combination works: card-to-card, ring-to-ring, card-to-ring, or ring-to-card."},
  {q: "Does this work for both Seedkeeper Classic and Seedkeeper PRO?", a: "Yes, the backup process is identical on both product lines."},
  {q: "Is the backup encrypted?", a: "Yes. The Master and Backup devices exchange a shared key via a Diffie-Hellman challenge during setup, and that key encrypts the backup."},
  {q: "What if I forget my PIN and don't have a backup?", a: "You can still reset your device - see Resetting Your Seedkeeper for the procedure - but this wipes all secrets and returns the device to its factory state, with no way to recover the data."},
  {q: "Does this also back up my passkeys and OTP codes?", a: "No, this covers your password manager. See Passkey Backup Strategy and OTP Backup and Restore Procedures for those."},
]} />

<p class="doc-subtitle">Never Lose Access to Your Secrets</p>

<div class="tldr">

Seedkeeper backs up device-to-device: you scan a Master device and a Backup device together, and the Backup device ends up holding an incremental copy of everything on the Master. This works in any combination - card-to-card, ring-to-ring, card-to-ring, or ring-to-card - and for both Seedkeeper Classic and Seedkeeper PRO. Do this once your Master device holds your real secrets, and again any time you add new ones.

</div>

## Overview

Seedkeeper has no cloud - your secrets live only on your physical device. That's great for privacy, but it means losing your device without a backup means losing everything on it. It also means no provider can be breached to expose your vault, which is the trade-off explained in [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained). Setting up a Backup device takes a few minutes and protects you against a lost, stolen, or damaged device.

The process is the same regardless of form factor or product line: card-to-card, ring-to-ring, or mixing a card with a ring all work, on both Seedkeeper Classic and Seedkeeper PRO.

This article covers backing up your password manager (via the Seedkeeper App). If you also use passkeys or OTP codes, see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) and [OTP Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures) for those.

## Step-by-Step Instructions

<div class="step-layout">

<div class="step-text">

### Step 1: Open Backup in the app

In the Seedkeeper App, tap the **3-dot menu** (top right), then **Make a Backup**.

### Step 2: Scan your Master device

This is the card or ring holding the secrets you want to backup.

### Step 3: Scan your Backup device

It can be a card or a ring, regardless of what your Master device is. 
Scanning both devices lets them exchange a shared key through a Diffie-Hellman challenge - this key is used to encrypt the backup.

### Step 4: Scan the Master device again

This prepares the backup on the Master device's side.

### Step 5: Scan the Backup device again

Hold it against the reader for the entire duration of the copy - don't remove it until the app confirms completion. If it stops partway, see [Backup and Restoration Issues](/docs/troubleshooting/backup-restoration-issues).
Your Backup device now holds an incremental copy of everything on your Master device.

</div>

<div class="step-image">
<img src="/img/gifs/seedkeeper-backup-iphone-mockup.gif" alt="Backup pairing animation in the Seedkeeper App" className="mockup-image" />
</div>

</div>

:::tip[Repeat after adding new secrets]
Since the backup is incremental, you can re-run these same steps any time after adding new passwords or notes, without starting over.
:::

## FAQ

<details>
<summary>Do I need a second Seedkeeper device to back up?</summary>

Yes. Seedkeeper backs up device-to-device - you need a Master device and a Backup device to complete the process described above.

</details>

<details>
<summary>Does the Backup device need to be the same form factor as the Master?</summary>

No. Any combination works: card-to-card, ring-to-ring, card-to-ring, or ring-to-card.

</details>

<details>
<summary>Does this work for both Seedkeeper Classic and Seedkeeper PRO?</summary>

Yes, the backup process is identical on both product lines.

</details>

<details>
<summary>Is the backup encrypted?</summary>

Yes. The Master and Backup devices exchange a shared key via a Diffie-Hellman challenge during setup, and that key encrypts the backup.

</details>

<details>
<summary>What if I forget my PIN and don't have a backup?</summary>

You can still reset your device - see [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper) for the procedure - but this wipes all secrets and returns the device to its factory state, with no way to recover the data.

</details>

<details>
<summary>Does this also back up my passkeys and OTP codes?</summary>

No, this covers your password manager. See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) and [OTP Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures) for those.

</details>

## Related Articles

- [First Setup Guide](/docs/product-documentation/getting-started/first-setup-guide)
- [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [OTP Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Security Best Practices](/docs/product-documentation/getting-started/security-best-practices)
- [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained)
- [Backup and Restoration Issues](/docs/troubleshooting/backup-restoration-issues)
