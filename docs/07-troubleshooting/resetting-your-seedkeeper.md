---
title: "Resetting Your Seedkeeper"
description: "Three applets, three independent resets. How to factory reset the password manager, the FIDO passkeys and the OTP accounts - and what each one destroys."
keywords: [reset Seedkeeper, factory reset security key, PIN locked, reset FIDO applet, reset 2FA accounts, forgot PIN, wipe security key]
sidebar_position: 2
sidebar_label: "Resetting Your Seedkeeper"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Does resetting recover my forgotten PIN?", a: "No. A reset does not recover anything - it returns the applet to factory state. A PIN cannot be recovered or bypassed, by anyone, which is the property that makes the device secure in the first place."},
  {q: "Does resetting one applet erase the others?", a: "No. The password manager, FIDO and OTP applets are independent, each with its own PIN and its own data. Resetting one leaves the other two untouched."},
  {q: "Can I get my passwords back after a reset?", a: "Only from a Backup device. Without one, the secrets on the reset device are permanently lost - there is no cloud copy."},
  {q: "Can I get my passkeys back after a FIDO reset?", a: "No. A hardware-bound passkey exists only on that device, so a reset destroys it. You register a new passkey with each service afterwards, and remove the stale entries from their settings."},
  {q: "Can I get my OTP codes back after a reset?", a: "Only if you saved the original QR codes or secrets. OTP secrets are write-only on the secure element and cannot be read back, so there is nothing to restore from the device itself."},
  {q: "How many wrong PIN attempts trigger a lockout?", a: "Four for the password manager, eight for the FIDO applet. The counters are independent, so failures on one do not affect the other."},
  {q: "Can I reset from a computer instead of my phone?", a: "Yes. The desktop apps perform all three resets with the card in a contact reader or on an NFC reader, and the FIDO applet can also be reset from Windows or a Chromium browser."},
]} />

import BuyBackupDevice from '@site/docs/_buy-backup-device.mdx';
import GetSupport from '@site/docs/_get-support.mdx';

<p class="doc-subtitle">Start Fresh When You're Locked Out</p>

<p class="platform-note">Mobile and Desktop</p>

<div class="tldr">

Your device holds **three independent applets** - password manager, FIDO passkeys and OTP accounts - each with its own PIN and its own reset. Resetting one erases everything in it and touches nothing in the others. None of them recovers a forgotten PIN: a reset returns the applet to factory state, and only a backup brings the data back.

</div>

## Which Reset Do You Need?

Work out which applet you are locked out of before doing anything. Resetting the wrong one destroys data you did not need to lose.

| You cannot access | Reset | Recoverable afterwards? |
|---|---|---|
| Passwords, secure notes, seed phrases | [Password manager](#reset-the-password-manager) | ✅ From a Backup device |
| Passkeys | [FIDO applet](#reset-the-fido-applet) | ❌ Re-register with each service |
| OTP / 2FA codes | [OTP accounts](#reset-the-otp-accounts) | ⚠️ Only if you saved the original QR codes |

**The three are independent.** Resetting the FIDO applet does not touch a single password. Resetting the password manager does not remove a passkey. Each has its own PIN and its own attempt counter - see [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

## What a Reset Does and Does Not Do

**It does not recover your PIN.** There is no bypass, no master code and no recovery procedure. The secure element is built specifically so that no one - including us - can extract or reset a PIN while keeping the data.

**It erases everything in that applet**, permanently. What returns afterwards depends entirely on what you prepared in advance.

**It makes the device usable again.** After a reset the applet is back to factory state, ready for a new PIN and new data.

---

## Reset the Password Manager

Erases every password, secure note and seed phrase. Restorable from a [Backup device](/docs/product-documentation/getting-started/backup-and-recovery).

The password manager locks after **4 incorrect PIN attempts**.

<div class="step-layout">

<div class="step-text">

### Step 1: Open the Seedkeeper App and go to the menu

Tap the 3-dot menu in the **top right** corner.

### Step 2: Tap Settings

### Step 3: Scroll to the bottom and tap "Factory reset my card"

### Step 4: Read the warning and tick the checkbox

The screen explains that the operation is irreversible. Tick the box to continue.

### Step 5: Tap Start

### Step 6: Tap "Send reset command"

### Step 7: Scan your card or ring

### Step 8: Repeat the scan 5 times

Scan the same device a total of five times to complete the reset.

### Step 9: Tap Home

Back on the home screen, set your new PIN.

</div>

<div class="step-image">

<img src="/img/gifs/reset-password-manager-iphone-mockup.gif" alt="Factory resetting the password manager in the Seedkeeper App" className="mockup-image" />

</div>

</div>

:::note[Why five scans?]
Five scans plus a checkbox and two confirmation screens are a deliberate safeguard. A reset cannot happen by accident, which matters for an operation that has no undo.
:::

---

## Reset the FIDO Applet

Erases every passkey stored on the device, and the FIDO PIN with them. **Passkeys cannot be restored** - a hardware-bound passkey exists nowhere else, so you register a new one with each service afterwards.

The FIDO applet locks after **8 incorrect PIN attempts**.

<div class="step-layout">

<div class="step-text">

### Step 1: Open the Seedkeeper PRO App

### Step 2: Open the menu and tap Configuration

Tap the 3-dot menu in the **top right** corner, then **Configuration**.

### Step 3: Tap "Reset FIDO application"

### Step 4: Read the warning and tap "Reset FIDO"

The screen explains that the operation is irreversible.

### Step 5: Confirm

A final warning appears. Tap **Reset**.

### Step 6: Scan your card or ring

The FIDO applet is now back to factory state.

</div>

<div class="step-image">

<img src="/img/gifs/reset-fido-iphone-mockup.gif" alt="Resetting the FIDO application in the Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

:::warning[Revoke before you forget]
Each service still lists a passkey that no longer exists. Sign in another way and remove the stale entries, then register your new passkeys - see [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy).

If you registered a second device, use it to sign in rather than falling back on password recovery.
:::

---

## Reset the OTP Accounts

Erases every TOTP credential on the device. **These cannot be recovered from the device**, because OTP secrets are write-only on the secure element - see [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

You can only set them up again if you kept the original QR codes or secrets.

<div class="step-layout">

<div class="step-text">

### Step 1: Open the Seedkeeper PRO App

### Step 2: Open the menu and tap Configuration

Tap the 3-dot menu in the **top right** corner, then **Configuration**.

### Step 3: Tap "Reset 2FA accounts"

### Step 4: Read the warning and tap "Reset 2FA accounts"

The screen explains that the operation is irreversible.

### Step 5: Confirm

A final warning appears. Tap **Reset**.

### Step 6: Scan your card or ring

Your OTP accounts are now erased.

</div>

<div class="step-image">

<img src="/img/gifs/reset-otp-iphone-mockup.gif" alt="Resetting 2FA accounts in the Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

:::warning[Regain access before you reset]
If you reset OTP accounts without a saved QR code, you lose the second factor on those services. Make sure you can still sign in - through recovery codes, a second device, or another registered method - before you erase them.
:::

---

## From Desktop Instead

All three resets can also be performed from the desktop apps, with the card in a contact reader or on an NFC reader: the [Satochip-Utils App](/docs/product-documentation/getting-started/download) for the password manager, and the Seedkeeper PRO App for FIDO and OTP. The steps and the wording are the same.

The FIDO applet can additionally be reset from Windows or a Chromium browser, which is worth knowing and worth being careful about - the button sits next to the PIN options. See [Managing Passkeys From Your Computer](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer).

## After a Reset

**Password manager:** set a new PIN, then restore from your Backup device - see [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery).

**FIDO:** set a new FIDO PIN, then register a new passkey with each service, removing the stale entries as you go - see [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

**OTP:** re-add each account from its original QR code, or generate new credentials from each service - see [Adding a TOTP Account](/docs/product-documentation/otp-authenticator/adding-a-totp-account).

And whichever applet you just rebuilt, this is the moment to set up the redundancy that would have avoided the reset: a Backup device for the password manager, a second registered device for passkeys, and saved QR codes for OTP.

<BuyBackupDevice />

## FAQ

<details>
<summary>Does resetting recover my forgotten PIN?</summary>

No. A reset does not recover anything - it returns the applet to factory state. A PIN cannot be recovered or bypassed, by anyone, which is the property that makes the device secure in the first place.

</details>

<details>
<summary>Does resetting one applet erase the others?</summary>

No. The password manager, FIDO and OTP applets are independent, each with its own PIN and its own data. Resetting one leaves the other two untouched.

</details>

<details>
<summary>Can I get my passwords back after a reset?</summary>

Only from a Backup device. Without one, the secrets on the reset device are permanently lost - there is no cloud copy.

</details>

<details>
<summary>Can I get my passkeys back after a FIDO reset?</summary>

No. A hardware-bound passkey exists only on that device, so a reset destroys it. You register a new passkey with each service afterwards, and remove the stale entries from their settings.

</details>

<details>
<summary>Can I get my OTP codes back after a reset?</summary>

Only if you saved the original QR codes or secrets. OTP secrets are write-only on the secure element and cannot be read back, so there is nothing to restore from the device itself.

</details>

<details>
<summary>How many wrong PIN attempts trigger a lockout?</summary>

Four for the password manager, eight for the FIDO applet. The counters are independent, so failures on one do not affect the other.

</details>

<details>
<summary>Can I reset from a computer instead of my phone?</summary>

Yes. The desktop apps perform all three resets with the card in a contact reader or on an NFC reader, and the FIDO applet can also be reset from Windows or a Chromium browser.

</details>

## Related Articles

- [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery)
- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Managing Passkeys From Your Computer](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer)

<GetSupport />
