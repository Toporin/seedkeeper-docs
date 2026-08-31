---
title: "Lost Passkey Access"
description: "A passkey that no longer works, a device that is gone, or a service that stopped offering it. How to get back in and rebuild."
keywords: [lost passkey, passkey not working, cannot sign in passkey, passkey recovery, re-register passkey, passkey missing]
sidebar_position: 5
sidebar_label: "Lost Passkey Access"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I recover a lost passkey?", a: "No. A hardware-bound passkey exists only on the device that created it, with no cloud copy. Recovery means getting back into the account another way and registering a fresh passkey."},
  {q: "My passkey stopped working but the device still has it. Why?", a: "Often the service removed it after a password change or security event, or you are on a slightly different domain. Check the account's registered passkeys, and confirm the entry is still listed on the device."},
  {q: "The website will not offer my security key. What now?", a: "Look for \"Use another device\", \"Security key\" or \"Other options\" in the browser prompt - many sites default to the built-in authenticator and hide external keys one level down. A Chromium browser also helps."},
  {q: "Should I remove the dead passkey from my account?", a: "Yes. It cannot be used, but leaving it clutters your security settings and makes it harder to tell which entry belongs to which device later."},
  {q: "What if I removed my password and lost my only device?", a: "You are limited to the service's own account recovery, and the experience varies a great deal. This is the scenario that registering a second device beforehand exists to prevent."},
]} />

import BuyBackupDevice from '@site/docs/_buy-backup-device.mdx';
import GetSupport from '@site/docs/_get-support.mdx';

<p class="doc-subtitle">When a Passkey No Longer Signs You In</p>

<div class="tldr">

Passkeys cannot be restored - a hardware-bound credential exists only on the device that created it. Getting back in means using another registered device, a password, or the service's recovery process, then registering a fresh passkey. Diagnose which of the four causes applies before assuming the worst.

</div>

## Which Problem Is It?

| Symptom | Likely cause |
|---|---|
| The device is not detected at all | [A connection problem](/docs/troubleshooting/connection-and-nfc-issues), not a passkey one |
| The site never offers the security key option | The site is restricting to platform authenticators |
| You are locked out of the FIDO PIN | [A PIN lockout](/docs/troubleshooting/pin-problems-and-lockouts) |
| The device is gone, or the applet was reset | The passkey is genuinely gone - read on |

Work through them in that order. The first two are far more common than the last, and both are fixable without losing anything.

## The Site Does Not Offer Your Device

Not a lost passkey - the site is not asking for it.

**Look for "Use another device", "Security key" or "Other options"** in the browser prompt. Many implementations default to Touch ID or Windows Hello and hide external keys one click deeper.

**Try a Chromium browser.** External key support over NFC is most consistent there.

**Check you are on the right domain.** A passkey only responds to the exact domain it was created for - that is the point. If you followed a link and landed on a lookalike, your device is refusing correctly. Type the address yourself and try again.

## The Passkey Is Genuinely Gone

Device lost, device destroyed, or FIDO applet reset. There is no restoring it: the private key was generated inside the secure element and existed nowhere else.

That is the same property that makes it unstealable, and it means recovery is about **getting back into the account**, not about recovering the credential.

### Get Back In

In order of preference:

1. **Another registered device.** If you registered a second Seedkeeper PRO, use it. Nothing else is needed.
2. **Your password**, where the service still has one. Most keep it as a fallback.
3. **Recovery codes**, if you saved them when setting up the account.
4. **The service's account recovery**, which usually runs through your email - which is why securing your mailbox first matters more than anything else.

### Then Clean Up

Once you are back in, on every affected account:

- **Remove the dead passkey** from the security settings. It will otherwise sit there indefinitely, and you will not remember later which entry corresponds to what.
- **Register a fresh passkey** on your current device.
- **Register a second one** while you are there, if you have a backup device - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy).

Doing all three in one pass per account is much faster than revisiting each service twice.

## The Passkey Exists but Fails

Rarer, and worth checking before concluding anything is lost.

**Confirm it is still on the device.** List the stored passkeys from the Seedkeeper PRO App, or from Windows or Chrome - see [Managing Passkeys From Your Computer](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer). If the entry is there, the device is fine.

**Check the service did not remove it.** Some services revoke credentials after a password change, a security event, or a long period of inactivity. Look at the account's list of registered passkeys.

**Check you are not confusing two devices.** If you registered a card and a ring, either signs you in - but only for the accounts where that specific one was registered.

## If You Were Fully Passwordless

The hardest case: a service where you removed the password entirely, with only one device registered.

Your options narrow to the service's own recovery process, and how well that goes depends on the service. Some are helpful, some are extremely slow, and a few offer nothing at all.

This is exactly why the recommendation is always to register a second device **before** going fully passwordless - see [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer).

<BuyBackupDevice />

## FAQ

<details>
<summary>Can I recover a lost passkey?</summary>

No. A hardware-bound passkey exists only on the device that created it, with no cloud copy. Recovery means getting back into the account another way and registering a fresh passkey.

</details>

<details>
<summary>My passkey stopped working but the device still has it. Why?</summary>

Often the service removed it after a password change or security event, or you are on a slightly different domain. Check the account's registered passkeys, and confirm the entry is still listed on the device.

</details>

<details>
<summary>The website will not offer my security key. What now?</summary>

Look for "Use another device", "Security key" or "Other options" in the browser prompt - many sites default to the built-in authenticator and hide external keys one level down. A Chromium browser also helps.

</details>

<details>
<summary>Should I remove the dead passkey from my account?</summary>

Yes. It cannot be used, but leaving it clutters your security settings and makes it harder to tell which entry belongs to which device later.

</details>

<details>
<summary>What if I removed my password and lost my only device?</summary>

You are limited to the service's own account recovery, and the experience varies a great deal. This is the scenario that registering a second device beforehand exists to prevent.

</details>

## Related Articles

- [Lost or Stolen Device](/docs/troubleshooting/lost-device)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues)
- [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)

<GetSupport />
