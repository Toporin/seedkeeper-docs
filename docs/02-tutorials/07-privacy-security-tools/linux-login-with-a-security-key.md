---
title: "How to Log In to Linux with a Security Key"
description: "Use your Seedkeeper PRO for local Linux login and sudo with pam-u2f. Covers Debian and RHEL, and the lockout traps that catch people out."
keywords: [pam-u2f, Linux login security key, FIDO2 sudo, pamu2fcfg, PAM FIDO2, hardware key Linux desktop, u2f_keys]
sidebar_position: 4
sidebar_label: "Linux Login with a Security Key"
tags: [linux, pam, fido2, privacy-security-tools]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I use a security key to log in to Linux?", a: "Yes, through the pam-u2f module maintained by Yubico. It plugs into PAM, so it works for the graphical login, the console, sudo, and anything else that authenticates through PAM."},
  {q: "Does pam-u2f replace my password?", a: "That depends on how you configure it. Set the module as required and it becomes a second factor alongside your password; set it as sufficient and the key alone signs you in. See Choose Required or Sufficient above."},
  {q: "Does this work with an NFC device?", a: "Yes, but you need pcscd running and a reader attached. Seedkeeper PRO has no USB interface, so a contact smartcard reader or an NFC reader is not optional here."},
  {q: "What happens if I lose the key or it is not detected?", a: "If the module is set to required and no fallback exists, you are locked out. Always keep a root shell open while configuring, test on sudo first, and register a second device."},
  {q: "Where is the registration stored?", a: "The module's built-in default is ~/.config/Yubico/u2f_keys, a path compiled into pam_u2f. Pointing it at a system-wide file such as /etc/seedkeeper/u2f_keys with the authfile= option is both tidier and more reliable, since it is readable before the home directory is mounted."},
  {q: "Does this work over SSH?", a: "No, and that is by design. PAM runs on the server, and there is no way for it to reach a security key plugged into a remote client. Use FIDO2 SSH keys for that instead."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Your Card or Ring as a Login Factor</p>

<p class="platform-note">Desktop</p>

<div class="tldr">

The **pam-u2f** module lets a FIDO2 device authenticate you to PAM - which covers the graphical login, virtual consoles, `sudo`, screen unlock and anything else on the system that authenticates through PAM.

Two things decide whether this goes smoothly: a working reader with `pcscd` running, and a fallback you keep available while you configure it.

</div>

## Overview

PAM - the Pluggable Authentication Module framework - is what Linux consults whenever something needs to know who you are. `pam-u2f` adds a FIDO2 device to that conversation.

The result is that your Seedkeeper PRO becomes either a second factor on top of your password, or a replacement for it, depending on one keyword in a configuration file.

<WhyHardware />

:::warning[Read this before you edit anything]
A mistake in a PAM configuration file can lock you out of your own machine, including `sudo`. Throughout this guide:

- **Keep a root shell open** in a separate terminal, and do not close it until everything is verified.
- **Test on `sudo` first**, never on the graphical login.
- **Know your recovery route** - a live USB, or single-user mode.
:::

## Before You Start

### A reader, and pcscd running

Seedkeeper PRO speaks NFC and ISO 7816 contact, with no USB HID interface. A USB port alone will never see it - see [Device Capabilities](/docs/developers/device-capabilities#transports).

```bash
# Debian, Ubuntu
sudo apt install pcscd pcsc-tools libfido2-1 fido2-tools
sudo systemctl enable --now pcscd

# RHEL, Fedora, Rocky
sudo dnf install pcsc-lite pcsc-tools libfido2 fido2-tools
sudo systemctl enable --now pcscd
```

Confirm the device is visible before going further:

```bash
fido2-token -L
```

Present your Seedkeeper PRO. A PC/SC device should be listed. If nothing appears, stop here and fix that first - see [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues).

### A FIDO PIN set on the device

Register with PIN verification and you get a genuine two-factor login from a single object: the card is something you have, the PIN is something you know. See [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

### The module itself

```bash
# Debian, Ubuntu
sudo apt install libpam-u2f

# Fedora
sudo dnf install pam-u2f

# RHEL, Rocky, Alma - via EPEL
sudo dnf install epel-release
sudo dnf install pam-u2f
```

## Step 1: Register Your Device

`pamu2fcfg` produces one line describing your device, which PAM later compares against.

Where that line is stored is a real decision, not a detail.

### Use a system-wide file

```bash
sudo mkdir -p /etc/seedkeeper
pamu2fcfg | sudo tee /etc/seedkeeper/u2f_keys
sudo chmod 644 /etc/seedkeeper/u2f_keys
```

Present the device and enter your PIN when prompted. The file now contains a single line beginning with your username.

Two reasons this is the better default:

- **It is readable at login time.** A per-user file inside the home directory is not, if that directory is encrypted, on a network share, or simply not mounted yet - which is exactly the moment PAM needs it.
- **You choose the path.** Anything under `/etc` works, as long as the PAM line points at it.

To add a **second device** - and you should - append rather than overwrite:

```bash
pamu2fcfg -n | sudo tee -a /etc/seedkeeper/u2f_keys
```

The `-n` flag omits the username, which is the correct format for additional entries. Check the result:

```bash
cat /etc/seedkeeper/u2f_keys
```

You want **one line per user**, starting with that username, with each device separated by a colon. Two separate lines for the same user will not work.

Every PAM line in the steps below must then carry `authfile=/etc/seedkeeper/u2f_keys`.

:::note[The per-user default is a Yubico path]
Without `authfile=`, `pam_u2f` looks in `~/.config/Yubico/u2f_keys` - a path compiled into the module rather than a convention you can rename. Pointing it somewhere sensible with `authfile=` is the supported way to move it, and the system-wide file above is the cleanest version of that.
:::

## Step 2: Test on sudo First

This is the safe place to start, because a failure costs you nothing while a root shell is open elsewhere.

Edit `/etc/pam.d/sudo` and add this line **above** the existing `@include common-auth` (Debian) or `auth substack system-auth` (RHEL):

```
auth required pam_u2f.so cue authfile=/etc/seedkeeper/u2f_keys
```

`cue` prints a prompt telling you to present the device, which is worth having - without it, the terminal simply pauses with no explanation.

Now, in a **different terminal**:

```bash
sudo -k          # forget the cached credential
sudo echo ok
```

You should be asked for your password, then prompted to present your Seedkeeper PRO.

**If it fails**, remove the line from the root shell you kept open, and check `journalctl -e` for the reason before trying again.

## Step 3: Choose Required or Sufficient

One keyword changes the whole model.

| Keyword | Behaviour | Result |
|---|---|---|
| `required` | Password **and** key | Genuine two-factor |
| `sufficient` | Key alone is enough, password as fallback | Convenience, weaker |

```
# password + key
auth required pam_u2f.so cue authfile=/etc/seedkeeper/u2f_keys

# key OR password
auth sufficient pam_u2f.so cue authfile=/etc/seedkeeper/u2f_keys
```

**`required` is the meaningful configuration.** `sufficient` leaves the password as an alternative route, so the account is still protected by the password - the key only makes it faster.

Useful module options:

```
auth required pam_u2f.so cue pinverification=1 userpresence=1 authfile=/etc/seedkeeper/u2f_keys
```

- `cue` - prompt the user to present the device
- `pinverification=1` - demand the FIDO PIN, not just presence
- `userpresence=1` - demand a physical tap
- `nouserok` - **avoid this**. It lets users with no registration through, which quietly defeats the whole thing
- `authfile=/etc/seedkeeper/u2f_keys` - the shared file from step 1, and **required** if you are not using the module's built-in per-user default

`man pam_u2f` lists the full set for your installed version.

## Step 4: Extend to Other Login Paths

Only once `sudo` has worked reliably for a while.

| What | File | Distribution |
|---|---|---|
| Console login | `/etc/pam.d/login` | All |
| GNOME graphical login | `/etc/pam.d/gdm-password` | Debian, Ubuntu, Fedora |
| KDE graphical login | `/etc/pam.d/sddm` | All |
| Screen unlock | `/etc/pam.d/gnome-screensaver` or `/etc/pam.d/kde` | Varies |
| Everything at once | `/etc/pam.d/common-auth` | Debian, Ubuntu |
| Everything at once | `/etc/pam.d/system-auth` | RHEL, Fedora |

Editing `common-auth` or `system-auth` applies the rule to every PAM consumer on the system in one move. It is also the fastest way to lock yourself out completely, so do it last and keep that root shell open.

:::danger[system-auth on RHEL is managed by authselect]
On RHEL and Fedora, editing `/etc/pam.d/system-auth` directly works until `authselect` regenerates it and silently discards your change. Use a custom profile instead:

```bash
sudo authselect create-profile my-u2f -b sssd
# edit the profile's system-auth template, then
sudo authselect select custom/my-u2f
```
:::

## What This Does Not Cover

**SSH.** PAM runs on the server, and it cannot reach a key attached to a remote client. This is a limitation of the model, not a configuration mistake - use FIDO2 SSH keys instead, see [How to Secure SSH with a Security Key](/docs/tutorials/privacy-security-tools/secure-ssh-with-a-security-key).

**Full-disk encryption at boot.** The disk is unlocked before PAM exists. That is a separate mechanism - see [How to Unlock a LUKS Disk with a Security Key](/docs/tutorials/privacy-security-tools/unlock-luks-with-a-security-key).

**Root's own password.** `pam-u2f` in `common-auth` does not change how `su` behaves unless you configure `/etc/pam.d/su` as well.

## Register a Second Device

The same reasoning as everywhere else on this site, with a sharper edge: here, losing the key can mean losing the machine.

Append a second device to the same line in `/etc/seedkeeper/u2f_keys` as shown in step 1, keep it somewhere other than your laptop bag, and confirm it works before you rely on it. See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy).

## FAQ

<details>
<summary>Can I use a security key to log in to Linux?</summary>

Yes, through the `pam-u2f` module maintained by Yubico. It plugs into PAM, so it works for the graphical login, the console, `sudo`, and anything else that authenticates through PAM.

</details>

<details>
<summary>Does pam-u2f replace my password?</summary>

That depends on how you configure it. Set the module as `required` and it becomes a second factor alongside your password; set it as `sufficient` and the key alone signs you in. See [Choose Required or Sufficient](#step-3-choose-required-or-sufficient) above.

</details>

<details>
<summary>Does this work with an NFC device?</summary>

Yes, but you need `pcscd` running and a reader attached. Seedkeeper PRO has no USB interface, so a contact smartcard reader or an NFC reader is not optional here.

</details>

<details>
<summary>What happens if I lose the key or it is not detected?</summary>

If the module is set to `required` and no fallback exists, you are locked out. Always keep a root shell open while configuring, test on `sudo` first, and register a second device.

</details>

<details>
<summary>Where is the registration stored?</summary>

The module's built-in default is `~/.config/Yubico/u2f_keys`, a path compiled into `pam_u2f`. Pointing it at a system-wide file such as `/etc/seedkeeper/u2f_keys` with the `authfile=` option is both tidier and more reliable, since it is readable before the home directory is mounted.

</details>

<details>
<summary>Does this work over SSH?</summary>

No, and that is by design. PAM runs on the server, and there is no way for it to reach a security key plugged into a remote client. Use FIDO2 SSH keys for that instead.

</details>

## Related Articles

- [How to Secure SSH with a Security Key](/docs/tutorials/privacy-security-tools/secure-ssh-with-a-security-key)
- [How to Unlock a LUKS Disk with a Security Key](/docs/tutorials/privacy-security-tools/unlock-luks-with-a-security-key)
- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues)
- [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained)
