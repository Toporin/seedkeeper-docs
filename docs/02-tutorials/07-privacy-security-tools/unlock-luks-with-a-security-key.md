---
title: "How to Unlock a LUKS Disk with a Security Key"
description: "Enroll your Seedkeeper PRO as a LUKS2 unlock method with systemd-cryptenroll - including the honest answer on NFC devices at boot time."
keywords: [systemd-cryptenroll, LUKS FIDO2, unlock disk security key, LUKS2 FIDO2, disk encryption hardware key, crypttab fido2-device]
sidebar_position: 5
sidebar_label: "Unlock LUKS with a Security Key"
tags: [linux, luks, fido2, privacy-security-tools]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I unlock a LUKS disk with a FIDO2 security key?", a: "Yes. systemd-cryptenroll adds a FIDO2 device as an unlock method on a LUKS2 volume, alongside your existing passphrase. It requires systemd 248 or later and LUKS2, not LUKS1."},
  {q: "Does this replace my LUKS passphrase?", a: "No, and you should not let it. The key is added as an additional keyslot. Keeping the passphrase is what saves you when the device is lost, damaged, or simply not detected at boot."},
  {q: "Does this work with an NFC-only device at boot?", a: "Enrolling and unlocking on a running system works. Unlocking at boot is harder, because the initramfs needs pcscd and the reader drivers, which no distribution includes by default. See The Root Disk at Boot above."},
  {q: "Which systemd version do I need?", a: "248 or later for FIDO2 support in systemd-cryptenroll. Debian 12, Ubuntu 22.04 and RHEL 9 all ship something newer."},
  {q: "Is my disk encryption key stored on the security key?", a: "No. The device derives a secret through the hmac-secret extension, and that secret unlocks the keyslot. The disk key never leaves the LUKS header, and the device holds nothing that identifies the disk."},
  {q: "What happens if I lose the security key?", a: "You unlock with your passphrase, then remove the orphaned keyslot with systemd-cryptenroll --wipe-slot=fido2. This is the entire reason to keep the passphrase enrolled."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Full-Disk Encryption, Unlocked by Hardware</p>

<p class="platform-note">Desktop</p>

<div class="tldr">

`systemd-cryptenroll` can add a FIDO2 device as an unlock method on a **LUKS2** volume, alongside your existing passphrase. It works through the `hmac-secret` extension, which Seedkeeper PRO supports.

**Enrolling and unlocking on a running system works well.** Unlocking the root disk at boot is a different matter with an NFC-only device, and this page is honest about why.

</div>

## Overview

LUKS stores your disk's master key in a header, encrypted several times over in separate **keyslots**. A passphrase unlocks one slot; a FIDO2 device can unlock another. Adding one does not remove the other, which is the property this whole guide leans on.

The device does not store the disk key. It derives a secret using the **hmac-secret** extension - the same mechanism behind WebAuthn PRF - and that secret unlocks the slot. Present the same device and you get the same secret; present anything else and you get nothing useful. See [Device Capabilities](/docs/developers/device-capabilities#ctap2-extensions).

<WhyHardware />

## The NFC Problem, Stated Up Front

Most guides on this subject assume a USB security key, and quietly skip what follows.

A USB FIDO2 key speaks HID. The kernel handles it, `libfido2` talks to it directly, and it works inside an initramfs with nothing extra installed.

**Seedkeeper PRO has no USB interface.** It speaks NFC and ISO 7816 contact, which on Linux means the PC/SC stack: the `pcscd` daemon, the CCID driver, and your reader's support. On a running system that is a package install. Inside an initramfs it is not, because no distribution includes any of it by default.

This splits the article into two very different cases:

| Scenario | Works? |
|---|---|
| **Secondary volume** unlocked on a running system | ✅ Reliably |
| **Home directory or external drive**, unlocked after login | ✅ Reliably |
| **Root disk at boot** | ⚠️ Requires a custom initramfs, covered at the end |

If you want disk encryption unlocked by hardware **today, without building an initramfs**, encrypt a secondary volume rather than the root disk. That is a genuinely useful setup and the rest of this guide gets you there.

## Before You Start

```bash
# Debian, Ubuntu
sudo apt install pcscd pcsc-tools libfido2-1 fido2-tools cryptsetup

# RHEL, Fedora, Rocky
sudo dnf install pcsc-lite pcsc-tools libfido2 fido2-tools cryptsetup

sudo systemctl enable --now pcscd
fido2-token -L
```

`fido2-token -L` must list your device. If it does not, nothing below will work - see [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues).

Check your systemd version and your LUKS format:

```bash
systemctl --version | head -1        # need 248 or later
sudo cryptsetup luksDump /dev/sdXn | head -5
```

The dump must say **LUKS2**. LUKS1 has no token support and cannot do this; converting is possible but out of scope here and not risk-free.

:::warning[Back up your LUKS header first]
Every operation below writes to the LUKS header. A damaged header means an unrecoverable disk, however good your passphrase is.

```bash
sudo cryptsetup luksHeaderBackup /dev/sdXn \
  --header-backup-file ~/luks-header-backup.img
```

Copy that file somewhere off the machine. It is as sensitive as the disk itself.
:::

## Step 1: Enroll the Device

```bash
sudo systemd-cryptenroll /dev/sdXn \
  --fido2-device=auto \
  --fido2-with-client-pin=yes
```

You will be asked for an existing passphrase first - that is how the tool gets the master key to write a new slot - then to present the device and enter its PIN.

Options worth knowing:

- `--fido2-with-client-pin=yes` requires the FIDO PIN at every unlock. This is the default and worth keeping: without it, possession of the card alone opens the disk.
- `--fido2-with-user-presence=yes` requires a physical tap.
- `--fido2-device=auto` picks the only device present. With several attached, list them with `systemd-cryptenroll --fido2-device=list` and name one explicitly.

Confirm the new slot exists:

```bash
sudo cryptsetup luksDump /dev/sdXn | grep -A3 Tokens
```

A `systemd-fido2` token should be listed.

## Step 2: Test Before You Depend on It

Do this on a volume you can afford to leave locked.

```bash
sudo cryptsetup luksClose myvolume     # if currently open
sudo systemd-cryptsetup attach myvolume /dev/sdXn - fido2-device=auto
```

You should be prompted for the PIN and asked to present the device. If it opens, the enrolment is sound.

**If it fails**, your passphrase still works - that is why it is still enrolled.

## Step 3: Unlock Automatically at Mount Time

For a secondary volume, add it to `/etc/crypttab`:

```
myvolume  UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  none  fido2-device=auto,nofail
```

Find the UUID with `sudo blkid /dev/sdXn`.

`nofail` matters more than it looks: without it, a boot where the device is absent or the reader is not ready stops at an emergency shell. With it, the volume is simply skipped and you mount it manually later.

Reload and test:

```bash
sudo systemctl daemon-reload
sudo systemctl restart systemd-cryptsetup@myvolume.service
```

## The Root Disk at Boot

Here is where the NFC constraint becomes real.

At boot, the initramfs must unlock the root disk before any normal filesystem exists. For a USB key that is fine, because `libfido2` talks to HID devices directly. For an NFC or contact device, the initramfs would need `pcscd`, the CCID driver, your reader's firmware if it needs one, and the USB stack to reach the reader - none of which any distribution ships in its initramfs.

**This is not a Seedkeeper limitation.** Any smartcard-based FIDO2 authenticator faces exactly the same wall.

Three honest options:

**Encrypt a secondary volume instead.** Root stays on a passphrase, and your actual data sits on a volume unlocked by hardware. This covers most of what people want and needs no initramfs work at all.

**Build a custom initramfs.** Possible with dracut, by writing a module that pulls in `pcscd`, `libccid` and the reader's dependencies, then starts the daemon early. This is real engineering work, it breaks on kernel and distribution updates, and a mistake leaves an unbootable machine. Worth it only if you know exactly why you need it.

**Use a USB FIDO2 key for the root disk**, and your Seedkeeper PRO for everything else - SSH, login, secondary volumes. Unsatisfying, and the pragmatic answer for a laptop that must boot reliably.

Whichever you choose, **keep the passphrase slot**. It is the only thing standing between a failed unlock and a lost disk.

## Removing a Device

Lost the card, or retiring one:

```bash
# see which slot the token occupies
sudo cryptsetup luksDump /dev/sdXn

# remove it
sudo systemd-cryptenroll /dev/sdXn --wipe-slot=fido2
```

`--wipe-slot=fido2` removes **every** FIDO2 slot on that volume. With two devices enrolled and only one lost, remove all of them and re-enroll the one you still hold.

Never wipe the passphrase slot unless another method is confirmed working on that exact machine, at boot, more than once.

## FAQ

<details>
<summary>Can I unlock a LUKS disk with a FIDO2 security key?</summary>

Yes. `systemd-cryptenroll` adds a FIDO2 device as an unlock method on a LUKS2 volume, alongside your existing passphrase. It requires systemd 248 or later and LUKS2, not LUKS1.

</details>

<details>
<summary>Does this replace my LUKS passphrase?</summary>

No, and you should not let it. The key is added as an additional keyslot. Keeping the passphrase is what saves you when the device is lost, damaged, or simply not detected at boot.

</details>

<details>
<summary>Does this work with an NFC-only device at boot?</summary>

Enrolling and unlocking on a running system works. Unlocking at boot is harder, because the initramfs needs `pcscd` and the reader drivers, which no distribution includes by default. See [The Root Disk at Boot](#the-root-disk-at-boot) above.

</details>

<details>
<summary>Which systemd version do I need?</summary>

248 or later for FIDO2 support in `systemd-cryptenroll`. Debian 12, Ubuntu 22.04 and RHEL 9 all ship something newer.

</details>

<details>
<summary>Is my disk encryption key stored on the security key?</summary>

No. The device derives a secret through the `hmac-secret` extension, and that secret unlocks the keyslot. The disk key never leaves the LUKS header, and the device holds nothing that identifies the disk.

</details>

<details>
<summary>What happens if I lose the security key?</summary>

You unlock with your passphrase, then remove the orphaned keyslot with `systemd-cryptenroll --wipe-slot=fido2`. This is the entire reason to keep the passphrase enrolled.

</details>

## Related Articles

- [How to Log In to Linux with a Security Key](/docs/tutorials/privacy-security-tools/linux-login-with-a-security-key)
- [How to Secure SSH with a Security Key](/docs/tutorials/privacy-security-tools/secure-ssh-with-a-security-key)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues)
- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
