---
title: "Security Best Practices"
description: "PIN hygiene, backup habits, where to physically store your devices, and what to do if one is lost. The habits that make hardware security actually work."
keywords: [Seedkeeper security, PIN best practices, hardware key storage, lost security key, offline password security]
sidebar_position: 5
sidebar_label: "Security Best Practices"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What PIN length should I use?", a: "The password manager PIN accepts 4 to 16 characters, so use more than the minimum. The FIDO PIN protecting your passkeys is a separate, numeric PIN with a four-digit minimum. See Choose a Strong PIN above for what to avoid."},
  {q: "Is backup mandatory to use Seedkeeper?", a: "No, but it's strongly recommended. Without it, losing your device means losing everything on it. See Backup & Recovery."},
  {q: "Should I store my Master and Backup devices in the same place?", a: "No. Keeping them in different physical locations protects you if one location is affected by theft, fire, or loss. See Store Your Devices Separately above."},
  {q: "What if I lose my device and don't have a backup?", a: "The secrets on that device are not recoverable - there's no cloud copy. This is why setting up a Backup device early matters so much - see Backup & Recovery."},
]} />

<p class="doc-subtitle">Get the Most Out of Your Seedkeeper's Security</p>

<div class="tldr">

Seedkeeper's secure element does the heavy lifting, but a few habits make a real difference: pick a solid PIN, set up your backup, store your devices apart from each other, and only ever download the app from official sources.

</div>

## Overview

Seedkeeper has no cloud, no account, and no data collection - your secrets never leave your device. That means most of what's left to secure is on your end: your PIN, your backup, and where you physically keep your cards or rings.

## Choose a Strong PIN

Your password manager PIN protects your passwords, notes and seed phrases. It accepts 4 to 16 characters - use the length, and avoid anything easy to guess - birthdates, repeated digits (0000, 1234), or the same PIN you use to unlock your phone. The reasoning is the same as for passwords: predictability is what gets guessed, not length alone - see [What is a Strong Password?](/docs/security-academy/password-security/what-is-a-strong-password).

:::warning[No PIN reset that recovers data]
4 incorrect attempts locks the password manager. The FIDO PIN protecting your passkeys is separate and allows 8 - see [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).<br />
See [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper) for the reset procedure - but note it wipes everything, so a backup matters more than ever.
:::

## Set Up Your Backup

Without a backup, a lost, stolen, or damaged device means losing everything on it - there's no cloud copy to fall back on. Setting up a Backup device takes a few minutes and is the single most effective thing you can do to protect your secrets long-term. See [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery) for the full walkthrough.

## Store Your Devices Separately

Keep your Master device and your Backup device in different physical locations - for example, one at home and one elsewhere (a safe, a family member's home, a safety deposit box). This protects you against a single event (fire, theft, flood) taking out both at once.

Avoid labeling your devices in a way that reveals what they're for - treat them like you would a spare house key, not like a sign pointing to your valuables.

## Secure the Device Running the App

Your Seedkeeper is only as protected as the phone or computer you use to access it. Keep your device's lock screen (PIN, biometrics) enabled, and keep the operating system and the Seedkeeper App itself up to date.

## Only Download From Official Sources

Only install the Seedkeeper Apps from the official App Store, Google Play, or the links in the [Download Section](/docs/product-documentation/getting-started/download).<br />
Seedkeeper is open source (AGPLv3), which means source code is publicly available - but that also means it's worth double-checking you're installing the genuine app, not a lookalike. Fake apps and lookalike download pages work the same way phishing does - see [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked#phishing-email-and-fake-websites).

## Know What to Do If You Lose a Device

If you lose a Master device and have a Backup device set up, your secrets are still on that Backup - use it as your new Master and pair a fresh device to it, following [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery). If you don't have a backup, the secrets on the lost device are not recoverable, since there is no cloud copy.

Passkeys work differently and need their own response - see [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy) for how to revoke a lost device's access on each account.

For the full first-hour procedure, in the order that actually protects your accounts, see [Lost or Stolen Device](/docs/troubleshooting/lost-device).

## FAQ

<details>
<summary>What PIN length should I use?</summary>

The password manager PIN accepts 4 to 16 characters, so use more than the minimum. The FIDO PIN protecting your passkeys is a separate, numeric PIN with a four-digit minimum. See [Choose a Strong PIN](#choose-a-strong-pin) above for what to avoid.

</details>

<details>
<summary>Is backup mandatory to use Seedkeeper?</summary>

No, but it's strongly recommended. Without it, losing your device means losing everything on it. See [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery).

</details>

<details>
<summary>Should I store my Master and Backup devices in the same place?</summary>

No. Keeping them in different physical locations protects you if one location is affected by theft, fire, or loss. See [Store Your Devices Separately](#store-your-devices-separately) above.

</details>

<details>
<summary>What if I lose my device and don't have a backup?</summary>

The secrets on that device are not recoverable - there's no cloud copy. This is why setting up a Backup device early matters so much - see [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery).

</details>

## Related Articles

- [First Setup Guide](/docs/product-documentation/getting-started/first-setup-guide)
- [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery)
- [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Download Section](/docs/product-documentation/getting-started/download)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Lost or Stolen Device](/docs/troubleshooting/lost-device)
- [What is a Strong Password?](/docs/security-academy/password-security/what-is-a-strong-password)
- [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer)
- [Device Settings](/docs/product-documentation/getting-started/device-settings)
