---
title: "Backup and Restoration Issues"
description: "The backup pairing fails, the copy stops halfway, or the Backup device looks empty. What each symptom means and what backup does not cover."
keywords: [backup failed, restore Seedkeeper, backup device empty, pairing failed, device to device backup, backup not working]
sidebar_position: 7
sidebar_label: "Backup and Restoration Issues"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Does backup copy my passkeys?", a: "No. A hardware-bound passkey exists only on the device that created it and cannot be copied. To use a second device, register it separately with each service."},
  {q: "Does backup copy my OTP codes?", a: "No. OTP secrets are write-only on the secure element and cannot be read back. Add each code to both devices at the same time, or keep the original QR code."},
  {q: "Why does the backup stop at the last scan?", a: "The device moved and the field broke. The final scan carries the actual data transfer, so hold the Backup device still against the phone until the app confirms completion."},
  {q: "My Backup device appears empty. What happened?", a: "Most often you are holding the other device - two cards look identical, so name them in Card's Information. Otherwise the copy did not complete, and re-running the sequence will finish it."},
  {q: "How do I restore onto a new device?", a: "Run the same backup procedure with your surviving device as the Master and the new one as the Backup. Whichever device holds the data is always the Master."},
  {q: "Do I need to redo the whole backup after adding a password?", a: "Run the same four scans - the backup is incremental, so only what is new gets copied. It is worth doing after anything you would not want to lose."},
]} />

import GetSupport from '@site/docs/_get-support.mdx';

<p class="doc-subtitle">When the Pairing Will Not Complete</p>

<div class="tldr">

Backup is a **device-to-device** operation with four scans: Master, Backup, Master again, Backup again. Most failures are the third or fourth scan breaking because the device moved. And a point worth knowing before you start: backup covers the password manager only - passkeys and OTP credentials are not copied.

</div>

## What Backup Actually Covers

The most common misunderstanding, and it is better cleared up before a problem than after one.

| Data | Copied by backup? |
|---|---|
| Passwords | ✅ Yes |
| Secure notes | ✅ Yes |
| Seed phrases and descriptors | ✅ Yes |
| **Passkeys** | ❌ **No** - register each device separately |
| **OTP credentials** | ❌ **No** - write-only, cannot be copied |

If you set up a backup and then found your passkeys missing on the second device, nothing went wrong. A hardware-bound passkey cannot be copied by design - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy). Same for OTP - see [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

## The Procedure, for Reference

Four scans, in order, from the 3-dot menu → **Make a Backup**:

1. Scan the **Master** device - the one holding your secrets
2. Scan the **Backup** device - the two exchange a key to encrypt the transfer
3. Scan the **Master** again - this prepares the backup
4. Scan the **Backup** again, and **hold it in place for the whole copy**

Full walkthrough in [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery).

## The Pairing Fails at Step 1 or 2

Usually a detection problem rather than a backup problem.

Check the basics first - placement, case, other cards nearby - in [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues).

**Confirm you can unlock both devices.** The backup needs the PIN of each, and a device you cannot open cannot be backed up.

**Check you are not scanning the same device twice.** Two cards look identical. Name them in Card's Information so the app tells you which is which - see [Device Settings](/docs/product-documentation/getting-started/device-settings).

## The Copy Stops Partway Through Step 4

The most frequent failure, and almost always movement.

The final scan is the longest of the four - the actual data transfer happens here. Removing the card when the phone vibrates, or shifting position slightly, breaks the field and aborts the copy.

- **Rest the phone on a table**, hold the Backup device against it, and do not move either until the app confirms completion.
- **Take the case off** for this operation if it is thick.
- **Retry from the beginning.** A partial copy is not harmful - the backup is incremental, so re-running the whole sequence completes what is missing.

## The Backup Device Looks Empty Afterwards

Three possibilities, in order of likelihood:

**You are looking at the wrong device.** Genuinely common with two identical cards. Check the label in Card's Information.

**The copy did not complete.** Run the four scans again and watch for the confirmation at the end.

**You are looking for passkeys or OTP codes.** Those are not copied - see the table above.

## The Master Device Is Full

If the Master reports no space, the NFC toast shows a red exclamation mark with a memory error.

The device holds 8 KB shared across every secret, which is roughly a hundred passwords depending on how much detail you store with each. Check usage at the top of Card's Information.

To free space, delete secrets you no longer need - see [Deleting a Password](/docs/product-documentation/password-manager/deleting-a-password). Remember there is no edit function: updating an entry means copy, delete, recreate - see [Editing a Password](/docs/product-documentation/password-manager/editing-a-password).

## Restoring After a Loss

There is no separate restore operation. You run the same backup procedure, with your surviving Backup device as the **Master** and the new device as the **Backup**.

The direction is what people get wrong. The device holding your data is always the Master, whatever role it played originally.

## Keeping the Backup Current

The backup is incremental, so re-running it after adding secrets copies only what is new - it does not start over.

Make it a habit after adding anything important. A backup from six months ago restores a device as it was six months ago.

## FAQ

<details>
<summary>Does backup copy my passkeys?</summary>

No. A hardware-bound passkey exists only on the device that created it and cannot be copied. To use a second device, register it separately with each service.

</details>

<details>
<summary>Does backup copy my OTP codes?</summary>

No. OTP secrets are write-only on the secure element and cannot be read back. Add each code to both devices at the same time, or keep the original QR code.

</details>

<details>
<summary>Why does the backup stop at the last scan?</summary>

The device moved and the field broke. The final scan carries the actual data transfer, so hold the Backup device still against the phone until the app confirms completion.

</details>

<details>
<summary>My Backup device appears empty. What happened?</summary>

Most often you are holding the other device - two cards look identical, so name them in Card's Information. Otherwise the copy did not complete, and re-running the sequence will finish it.

</details>

<details>
<summary>How do I restore onto a new device?</summary>

Run the same backup procedure with your surviving device as the Master and the new one as the Backup. Whichever device holds the data is always the Master.

</details>

<details>
<summary>Do I need to redo the whole backup after adding a password?</summary>

Run the same four scans - the backup is incremental, so only what is new gets copied. It is worth doing after anything you would not want to lose.

</details>

## Related Articles

- [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery)
- [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Device Settings](/docs/product-documentation/getting-started/device-settings)
- [Lost or Stolen Device](/docs/troubleshooting/lost-device)

<GetSupport />
