---
title: "Lost or Stolen Device"
description: "What to do in the first hour, in the right order. Revoke access on the services first, then deal with the hardware - not the other way round."
keywords: [lost security key, stolen Seedkeeper, revoke passkey, lost device procedure, security key stolen what to do]
sidebar_position: 4
sidebar_label: "Lost or Stolen Device"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What should I do first if my Seedkeeper is stolen?", a: "Revoke its access on your services, starting with your email account. The hardware is protected by its PIN, so the urgent work is on the account side, not the physical one."},
  {q: "Can someone use my stolen Seedkeeper?", a: "Not without the PIN, which is verified inside the secure element and locks out after a handful of wrong attempts. Possession alone is not access."},
  {q: "Does deleting a passkey from the device revoke it?", a: "You would need the device to do that, which you no longer have. Revocation happens on each service, in its security settings, and works whether or not you hold the hardware."},
  {q: "I had no backup device - what now?", a: "Work service by service using each one's recovery process: password, recovery codes, or account recovery through your email. Secure the mailbox first, since it is the reset path for the rest."},
  {q: "My device turned up after I replaced it. Can I reuse it?", a: "Reset it first and treat it as blank. Its registrations are gone anyway, and it then makes a good backup for the replacement."},
]} />

import BuyBackupDevice from '@site/docs/_buy-backup-device.mdx';
import GetSupport from '@site/docs/_get-support.mdx';

<p class="doc-subtitle">The First Hour, in the Right Order</p>

<div class="tldr">

Your accounts matter more than the hardware. **Revoke the device's access on every service first**, then worry about the object. A lost Seedkeeper is protected by its PIN in the meantime, and once its registrations are removed it becomes an inert piece of plastic or ceramic.

</div>

## First: How Bad Is It?

A stolen device alone is not access. Every applet is behind a PIN, verified inside the secure element, with a lockout after a handful of wrong attempts. Nobody is brute-forcing it, and nobody is extracting keys from the chip.

That buys you time to act properly rather than panic. It does not mean doing nothing.

## The Order That Matters

Do these in sequence. The instinct is to start with the hardware, and it is the wrong end.

### 1. Sign In With Your Backup Device

If you registered a second device, use it now. You keep normal access to everything while you clean up, which removes all the time pressure from the rest of this list.

No backup device? Skip to step 2 and use your fallback methods - password, recovery codes, or the service's own recovery process.

### 2. Revoke the Lost Device Everywhere

This is the step that actually protects you, and it happens **on each service**, not on the hardware.

For every account where the lost device was registered:

- **Remove the passkey** from the account's security settings
- **Remove the OTP method** if that device generated the codes
- **Terminate active sessions**, which often survive a credential removal

Work down your important accounts first: email, then anything financial, then everything else. See [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy).

If you kept a note of which services the device was registered on, this is the moment it pays off. If not, work from your password manager or your inbox for registration confirmations.

### 3. Change What the Device Could Reveal

Passwords and secure notes on the device are behind the password manager PIN, so they are not exposed by the loss itself. Change anything you consider sensitive anyway if the circumstances of the loss worry you - a targeted theft is different from leaving it in a taxi.

Seed phrases deserve their own judgement. If the device held one and you have any doubt, move the funds to a new wallet - see [Common Seed Phrase Mistakes](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes).

### 4. Then Deal With the Hardware

Report it if it was stolen. Order a replacement. Update your inventory if you are managing devices for an organisation - see [Employee Onboarding and Offboarding](/docs/business/employee-onboarding-and-offboarding).

## If You Had No Backup Device

Harder, but not hopeless. Work service by service, using each one's recovery process:

- **Sign in with your password** where the account still has one
- **Use recovery codes** if you saved them when enabling two-factor authentication
- **Use the service's account recovery** as a last resort, which typically runs through your email

That last point explains why securing your mailbox first matters so much: it is the recovery path for everything else, and it is the account you most need working right now.

Once you are back in each account, remove the lost device's registrations and register the replacement - two devices this time.

## Restoring Your Data

**Passwords, notes and seed phrases** come back from a Backup device onto a new one - see [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery).

**Passkeys do not transfer.** A hardware-bound passkey exists only on the device that created it, so a replacement means registering fresh passkeys with each service - see [Lost Passkey Access](/docs/troubleshooting/lost-passkey).

**OTP codes** return only from the original QR codes if you saved them - see [Lost OTP Access](/docs/troubleshooting/lost-otp-access).

## If It Turns Up Later

Do not put it back into service as though nothing happened. You do not know where it has been, and its registrations are gone anyway.

Reset it and treat it as a blank device - see [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper). It then makes a perfectly good backup for the replacement you just set up.

## Making the Next One Painless

Everything above is easier with one thing in place: **a second registered device**.

With one, a loss is an afternoon of tidying up. Without one, it is a recovery process on every account you own, starting with the ones you need most urgently.

The other half is knowing where the device was registered. A short list - service, device, date - turns step 2 from a memory exercise into a checklist. See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy).

<BuyBackupDevice />

## FAQ

<details>
<summary>What should I do first if my Seedkeeper is stolen?</summary>

Revoke its access on your services, starting with your email account. The hardware is protected by its PIN, so the urgent work is on the account side, not the physical one.

</details>

<details>
<summary>Can someone use my stolen Seedkeeper?</summary>

Not without the PIN, which is verified inside the secure element and locks out after a handful of wrong attempts. Possession alone is not access.

</details>

<details>
<summary>Does deleting a passkey from the device revoke it?</summary>

You would need the device to do that, which you no longer have. Revocation happens on each service, in its security settings, and works whether or not you hold the hardware.

</details>

<details>
<summary>I had no backup device - what now?</summary>

Work service by service using each one's recovery process: password, recovery codes, or account recovery through your email. Secure the mailbox first, since it is the reset path for the rest.

</details>

<details>
<summary>My device turned up after I replaced it. Can I reuse it?</summary>

Reset it first and treat it as blank. Its registrations are gone anyway, and it then makes a good backup for the replacement.

</details>

## Related Articles

- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Lost Passkey Access](/docs/troubleshooting/lost-passkey)
- [Lost OTP Access](/docs/troubleshooting/lost-otp-access)
- [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery)
- [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)

<GetSupport />
