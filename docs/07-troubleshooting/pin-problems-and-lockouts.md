---
title: "PIN Problems and Lockouts"
description: "Three PINs, three lockout rules, and no recovery for any of them. Which PIN you are stuck on, how many attempts remain, and what happens next."
keywords: [forgot PIN, Seedkeeper locked, FIDO PIN forgotten, PIN attempts remaining, security key locked out, change PIN]
sidebar_position: 3
sidebar_label: "PIN Problems and Lockouts"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I recover a forgotten PIN?", a: "No. There is no master code, no bypass and no support procedure. The only way forward is resetting the applet, which erases its contents."},
  {q: "How many wrong attempts before my device locks?", a: "Four for the password manager, eight for the FIDO applet. The counters are independent, so failures on one do not affect the other."},
  {q: "Does resetting one PIN affect the others?", a: "No. The three applets are independent - resetting the FIDO applet leaves your passwords untouched, and resetting the password manager leaves your passkeys in place."},
  {q: "Can I change my PIN without knowing the current one?", a: "No. Every change requires the current PIN. Without it, the only option is a reset."},
  {q: "Why is my FIDO PIN rejecting letters?", a: "Because it is numeric. The password manager PIN accepts 4 to 16 characters, but the FIDO PIN is digits only, with a four-digit minimum."},
]} />

import GetSupport from '@site/docs/_get-support.mdx';

<p class="doc-subtitle">Three PINs, Three Lockout Rules, No Recovery</p>

<div class="tldr">

Your device has three independent PINs with different formats and different attempt limits. **None of them can be recovered.** If you are locked out, the only way forward is resetting that applet, which erases its contents and leaves the other two untouched.

</div>

## Which PIN Are You Stuck On?

| PIN | Protects | Format | Attempts | If forgotten |
|---|---|---|---|---|
| **Password manager** | Passwords, notes, seed phrases | 4 to 16 characters | 4 | Reset, restore from Backup device |
| **FIDO** | Passkeys | 4 digits minimum, numeric | 8 | Reset, re-register every passkey |
| **OTP access** *(optional)* | Viewing OTP codes | Set by you | - | Reset, re-add every account |

The counters are independent. Failing three times on the FIDO PIN does not bring the password manager any closer to locking.

## Before You Try Again

Once you are two attempts from a lockout, stop and think rather than guessing.

**Check the keyboard.** The FIDO PIN is numeric. If you set something with letters, it was the password manager PIN you set, not the FIDO one.

**Check which app you are in.** Entering the password manager PIN into the Seedkeeper PRO App will fail every time and still burn an attempt.

**Check which device you are holding.** If you have a Main and a Backup, they may have different PINs. A card and a ring look nothing alike; two cards do.

**Write down what you have tried**, so you do not repeat the same wrong value twice.

## I Know My PIN and Want to Change It

That is not a lockout, and it is straightforward.

**Password manager:** Card's Information → Change PIN. Your secrets are untouched - see [Device Settings](/docs/product-documentation/getting-started/device-settings).

**FIDO:** from the Seedkeeper PRO App, or from Windows and Chromium browsers directly - see [Managing Passkeys From Your Computer](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer).

**OTP access:** from the app's Configuration menu, under 2FA Accounts - see [Setting Up an OTP Access PIN](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin).

In every case you need the current PIN. There is no path that changes a PIN you cannot supply.

## I Have Forgotten It

There is no recovery. Not a master code, not a support procedure, not a certificate we hold. The secure element is built so that nobody can extract or bypass a PIN while preserving the data - that property is the reason the device is worth carrying.

What remains is a reset of the affected applet, and what you get back afterwards depends entirely on what you prepared:

**Password manager** → reset, then restore from your Backup device. Everything returns if you have one - see [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery). Without one, the secrets are gone.

**FIDO** → reset, then register a new passkey with each service. Nothing is restored, because a hardware-bound passkey exists nowhere else - see [Lost Passkey Access](/docs/troubleshooting/lost-passkey).

**OTP** → reset, then re-add each account from its original QR code, or generate new credentials from each service - see [Lost OTP Access](/docs/troubleshooting/lost-otp-access).

Full procedures for all three: [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper).

## Before You Reset, Make Sure You Can Still Get In

The order matters, and people get it wrong under stress.

**Resetting the FIDO applet removes your way of signing in** to every service where that passkey was the method. Confirm you have another route first - a second registered device, a password, or recovery codes.

**Resetting OTP accounts removes your second factor** on those services. Same principle: check you can still authenticate before erasing the thing that authenticates you.

An hour spent confirming your fallback beats a lockout on your email account.

## Choosing a PIN You Will Remember

Two failure modes, and most people only guard against one.

Too simple and it protects nothing against someone holding the device. Too complex and you are back here in six months.

- **Not your phone unlock code.** If someone gets one, they should not get both.
- **Not a birthdate, not 0000, not 1234.**
- **Use more than the minimum.** Four digits is ten thousand combinations; six is a million, for the same effort.
- **Store it somewhere.** A password manager entry or a sealed note at home. The PIN protects a physical object - the realistic threat is someone finding the device, not someone finding your note.

## FAQ

<details>
<summary>Can I recover a forgotten PIN?</summary>

No. There is no master code, no bypass and no support procedure. The only way forward is resetting the applet, which erases its contents.

</details>

<details>
<summary>How many wrong attempts before my device locks?</summary>

Four for the password manager, eight for the FIDO applet. The counters are independent, so failures on one do not affect the other.

</details>

<details>
<summary>Does resetting one PIN affect the others?</summary>

No. The three applets are independent - resetting the FIDO applet leaves your passwords untouched, and resetting the password manager leaves your passkeys in place.

</details>

<details>
<summary>Can I change my PIN without knowing the current one?</summary>

No. Every change requires the current PIN. Without it, the only option is a reset.

</details>

<details>
<summary>Why is my FIDO PIN rejecting letters?</summary>

Because it is numeric. The password manager PIN accepts 4 to 16 characters, but the FIDO PIN is digits only, with a four-digit minimum.

</details>

## Related Articles

- [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Device Settings](/docs/product-documentation/getting-started/device-settings)
- [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery)

<GetSupport />
