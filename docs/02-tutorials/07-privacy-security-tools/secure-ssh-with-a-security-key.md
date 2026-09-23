---
title: "How to Secure SSH with a Security Key"
description: "Replace your SSH private key file with one generated inside your Seedkeeper PRO. Covers RHEL and Debian servers, plus the version traps on both."
keywords: [SSH FIDO2, ssh-keygen ecdsa-sk, SSH security key, resident SSH key, FIDO2 SSH RHEL, FIDO2 SSH Debian, hardware SSH key, passwordless SSH]
sidebar_position: 3
sidebar_label: "Secure SSH with a Security Key"
tags: [ssh, linux, fido2, privacy-security-tools]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I use a hardware security key for SSH?", a: "Yes. OpenSSH 8.2 and later support FIDO2 keys through the ecdsa-sk and ed25519-sk key types. The private key is generated inside the device and never leaves it, so the file on your disk is only a handle that is useless on its own."},
  {q: "Does Seedkeeper PRO work with ed25519-sk?", a: "No. Seedkeeper PRO implements ES256 only, so ecdsa-sk is the key type to use. A request for ed25519-sk will fail because the device does not support the EdDSA algorithm - see Device Capabilities."},
  {q: "Does RHEL 8 support FIDO2 SSH keys?", a: "No. RHEL 8 ships OpenSSH 8.0, which predates FIDO support. RHEL 9 ships 8.7 and works. Check with ssh -V on the server before planning anything."},
  {q: "What is a resident SSH key?", a: "A credential stored in full on the security key itself, which can be retrieved onto any machine with ssh-keygen -K. It means you can sign in from a new computer without copying key files around."},
  {q: "What happens if I lose the security key?", a: "You lose that SSH credential, because the private key existed nowhere else. Generate a second key on a backup device and add both public keys to authorized_keys before you rely on this."},
  {q: "Can I still use SSH if the server is in FIPS mode?", a: "Usually not with FIDO2. The sk-* algorithms are not part of the FIPS crypto policy on RHEL, so the server will reject them. Check the effective policy with update-crypto-policies --show before deploying."},
  {q: "Why does my device not appear in fido2-token -L?", a: "Either pcscd is not running, the reader is not recognised, or your distribution built libfido2 without PC/SC support. Test the reader with pcsc_scan first to tell those cases apart."},
]} />

import WhyHardware from '@site/docs/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">An SSH Key That Cannot Be Copied Off Your Laptop</p>

<p class="platform-note">Desktop</p>

<div class="tldr">

OpenSSH 8.2 and later can generate an SSH key **inside** a FIDO2 device instead of in a file. The private key never exists on your computer, so a stolen laptop or a compromised machine yields nothing. Each connection needs the card or ring present, plus your FIDO PIN.

Use `ecdsa-sk`, not `ed25519-sk` - Seedkeeper PRO implements ES256 only.

</div>

## Overview

A normal SSH key is a file. Anyone who copies `~/.ssh/id_ed25519` and knows its passphrase - or finds it unencrypted, which is common - has your access.

A FIDO2 SSH key moves the private half into hardware. `ssh-keygen` asks the device to generate a key pair, receives only the public key and a handle, and writes those to disk. The file left in `~/.ssh` cannot authenticate anything on its own.

Two consequences follow, and both are the point:

- **The key cannot be exfiltrated.** Malware on your machine can read the handle and learn nothing useful.
- **Authentication requires physical presence.** No card or ring, no connection.

<WhyHardware />

## Before You Start

Three things to check, in this order. Each one is a hard requirement rather than a preference.

### 1. A reader on your computer

Seedkeeper PRO speaks NFC and ISO 7816 contact, and has no USB interface. You need either a contact smartcard reader for the card, or an NFC reader for either form factor. A USB port alone will never see the device - see [Device Capabilities](/docs/developers/device-capabilities#transports).

### 2. A FIDO PIN set on the device

Resident credentials and PIN-protected signing both require it. Set it from the Seedkeeper PRO App, or directly from Windows or a Chromium browser - see [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

### 3. OpenSSH 8.2 or later, on both ends

```bash
ssh -V
```

The client and the server are separate checks. A modern laptop talking to an older server will fail at the server.

| System | OpenSSH | FIDO2 SSH |
|---|---|---|
| RHEL 8 / CentOS 8 | 8.0 | ❌ Not supported |
| RHEL 9 / Rocky 9 / Alma 9 | 8.7 | ✅ |
| Debian 10 (buster) | 7.9 | ❌ Not supported |
| Debian 11 (bullseye) | 8.4 | ✅ |
| Debian 12 (bookworm) | 9.2 | ✅ |
| Ubuntu 20.04 LTS | 8.2 | ✅ |
| Ubuntu 22.04 / 24.04 LTS | 8.9 / 9.6 | ✅ |

:::warning[RHEL 8 and Debian 10 are dead ends here]
Neither can be made to work by configuration - the code simply is not there. Your options are upgrading the server, or using a conventional SSH key for those hosts and FIDO2 everywhere else.
:::

## Client Setup

### On Linux

Install the FIDO library and the smartcard stack:

```bash
# Debian, Ubuntu
sudo apt install libfido2-1 fido2-tools pcscd pcsc-tools
sudo systemctl enable --now pcscd

# RHEL, Fedora, Rocky
sudo dnf install libfido2 fido2-tools pcsc-lite pcsc-tools
sudo systemctl enable --now pcscd
```

Then confirm the device is visible:

```bash
fido2-token -L
```

Present your Seedkeeper PRO. You should see a line naming a PC/SC device. If nothing appears, the problem is `pcscd` or the reader, not SSH - check `pcsc_scan` first, and see [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues).

:::note[NFC support in libfido2 is a build-time choice]
Some distributions compile `libfido2` without PC/SC support, in which case NFC devices are invisible to it while USB keys work fine. `fido2-token -L` is the quick way to find out. If it comes back empty with a working reader, you need a build with PC/SC enabled.
:::

### On macOS

Apple's bundled `ssh` has no FIDO support. Install the Homebrew build and make sure it comes first in your path:

```bash
brew install openssh
ssh -V
```

### On Windows

Windows OpenSSH routes FIDO operations through the Windows WebAuthn API, which handles NFC readers natively - the same path used when you sign in to a website with the device.

Check your version first:

```powershell
ssh -V
```

Microsoft's builds gained `sk` support later than upstream OpenSSH, so a machine that has not been updated in a while may report a version without it. Windows 11 and current Windows 10 builds are fine; if `ssh -V` shows something older than 8.9, update the OpenSSH client from Optional Features.

## Generate the Key

```bash
ssh-keygen -t ecdsa-sk \
  -O resident \
  -O verify-required \
  -O application=ssh:prod-servers \
  -C "you@seedkeeper-pro"
```

Present the device when prompted, enter your FIDO PIN, and present it once more to confirm.

**What each option does:**

`-t ecdsa-sk` selects ES256. This is not a preference - Seedkeeper PRO implements `secp256r1_ecdsa_sha256_raw` and nothing else, so `ed25519-sk` will fail.

`-O resident` stores the credential on the device itself rather than only referencing it. You can then recover it on any machine with `ssh-keygen -K`, which means a new laptop needs no file transfer. It also makes the key visible in the app's resident credential list - see [Managing Passkeys](/docs/product-documentation/passkeys/managing-passkeys). Each resident credential occupies one of the device's 90 slots.

`-O verify-required` demands the PIN at every connection, not just presence. Without it, a tap alone signs - which is convenient and means a stolen device is enough.

`-O application=ssh:prod-servers` labels the credential so several SSH keys can coexist on one device. The string must start with `ssh:`.

Two files appear: `~/.ssh/id_ecdsa_sk` and `~/.ssh/id_ecdsa_sk.pub`. The first is a handle, not a secret, and is worthless without the hardware.

The public key is a single line, and it announces its own type:

```
sk-ecdsa-sha2-nistp256@openssh.com AAAAInNrLWVjZHNh... you@seedkeeper-pro
```

The `sk-` prefix is what tells a server this credential lives in a security key. It is an ordinary SSH public key in every other respect, which has a useful consequence.

:::tip[Already using SSH keys? Just append it]
If you already have a working setup and `~/.ssh/authorized_keys` on the server, you do not need `ssh-copy-id` or anything else. Open `~/.ssh/id_ecdsa_sk.pub`, copy the single line it contains, and paste it on a new line at the end of `authorized_keys`.

```bash
# on your machine
cat ~/.ssh/id_ecdsa_sk.pub

# on the server, append the line you just copied
nano ~/.ssh/authorized_keys
```

Your existing keys keep working alongside it, which is exactly what you want while testing. Mind the file permissions if you create it for the first time: `chmod 700 ~/.ssh` and `chmod 600 ~/.ssh/authorized_keys`, or sshd will ignore it without explanation.
:::

## Server Setup: RHEL 9

### Check the algorithms are accepted

```bash
sudo sshd -T | grep -i pubkeyacceptedalgorithms
```

You want `sk-ecdsa-sha2-nistp256@openssh.com` in the list. RHEL derives this from the system-wide crypto policy rather than from `sshd_config` alone.

```bash
update-crypto-policies --show
```

`DEFAULT` includes the `sk-*` algorithms. **`FIPS` does not**, and no amount of `sshd_config` editing will override it. On a FIPS host, FIDO2 SSH is not an option.

### Install the public key

From your workstation:

```bash
ssh-copy-id -i ~/.ssh/id_ecdsa_sk.pub user@server
```

### Require PIN verification server-side

Client-side `verify-required` can be bypassed by a key created without it. To enforce the rule where it matters, add a drop-in file:

```bash
sudo tee /etc/ssh/sshd_config.d/50-fido.conf <<'EOF'
PubkeyAuthOptions verify-required
EOF

sudo sshd -t && sudo systemctl reload sshd
```

`sshd -t` validates the configuration before reload. Never skip it on a remote host.

:::warning[verify-required applies to every public key]
`PubkeyAuthOptions verify-required` rejects **all** non-FIDO public keys, including the conventional key you are currently connected with. Set it only after your FIDO2 key is confirmed working, or scope it with a `Match` block.
:::

## Server Setup: Debian 11, 12 and Ubuntu

Debian has no system-wide crypto policy, which makes this simpler than RHEL.

### Check the algorithms

```bash
sudo sshd -T | grep -i pubkeyacceptedalgorithms
```

The `sk-*` algorithms are enabled by default on Debian 11 and later. If they are missing, something in `/etc/ssh/sshd_config` has narrowed the list explicitly - look for a `PubkeyAcceptedAlgorithms` line and add them back rather than replacing the default:

```
PubkeyAcceptedAlgorithms +sk-ecdsa-sha2-nistp256@openssh.com
```

The leading `+` appends to the default set. Without it you replace the entire list, which will lock out every other key type.

### Install the public key and enforce the PIN

```bash
ssh-copy-id -i ~/.ssh/id_ecdsa_sk.pub user@server
```

```bash
sudo tee /etc/ssh/sshd_config.d/50-fido.conf <<'EOF'
PubkeyAuthOptions verify-required
EOF

sudo sshd -t && sudo systemctl reload sshd
```

On Debian 11 the `sshd_config.d` include directory exists but is not always enabled. Check that `/etc/ssh/sshd_config` contains `Include /etc/ssh/sshd_config.d/*.conf` near the top; if not, put the directive in the main file instead.

## Test Without Locking Yourself Out

The order here is the entire point. Do not skip step 1.

1. **Keep your current session open.** Do not close it until the end.
2. **In a second terminal**, connect with the new key:
   ```bash
   ssh -i ~/.ssh/id_ecdsa_sk user@server
   ```
   You should be asked for your PIN, then to present the device.
3. **Only once that works**, remove the old public key from `~/.ssh/authorized_keys` on the server.
4. **Confirm password login is off**, so the old path cannot be used either:
   ```bash
   sudo sshd -T | grep -i passwordauthentication
   ```
5. **Then** close the original session.

If step 2 fails, you still have a working session in which to undo everything.

## Register a Second Device Before You Rely on This

This is the part that turns a good idea into a safe one.

A FIDO2 SSH credential exists on exactly one device, cannot be copied, and is **not** included in a Seedkeeper device-to-device backup - that procedure covers the password manager only. Lose the card and that credential is gone.

Generate a second key on a backup device and authorise both:

```bash
ssh-keygen -t ecdsa-sk -O resident -O verify-required \
  -O application=ssh:prod-servers-backup \
  -f ~/.ssh/id_ecdsa_sk_backup

ssh-copy-id -i ~/.ssh/id_ecdsa_sk_backup.pub user@server
```

Keep the backup device somewhere other than your laptop bag. And on servers you cannot afford to lose, keep an out-of-band route available - a hosting console, an IPMI interface, or a physical keyboard.

See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for the same reasoning applied to web accounts.

## Moving to a New Computer

Because the credential is resident, there is nothing to copy:

```bash
cd ~/.ssh
ssh-keygen -K
```

Present the device, enter the PIN, and the handle files are written locally. Rename them if you prefer, and you are done.

This is the practical advantage of `-O resident` over the default. Without it, losing the handle file means losing access even though the hardware is intact.

## FAQ

<details>
<summary>Can I use a hardware security key for SSH?</summary>

Yes. OpenSSH 8.2 and later support FIDO2 keys through the `ecdsa-sk` and `ed25519-sk` key types. The private key is generated inside the device and never leaves it, so the file on your disk is only a handle that is useless on its own.

</details>

<details>
<summary>Does Seedkeeper PRO work with ed25519-sk?</summary>

No. Seedkeeper PRO implements ES256 only, so `ecdsa-sk` is the key type to use. A request for `ed25519-sk` will fail because the device does not support the EdDSA algorithm - see [Device Capabilities](/docs/developers/device-capabilities#cryptography).

</details>

<details>
<summary>Does RHEL 8 support FIDO2 SSH keys?</summary>

No. RHEL 8 ships OpenSSH 8.0, which predates FIDO support. RHEL 9 ships 8.7 and works. Check with `ssh -V` on the server before planning anything.

</details>

<details>
<summary>What is a resident SSH key?</summary>

A credential stored in full on the security key itself, which can be retrieved onto any machine with `ssh-keygen -K`. It means you can sign in from a new computer without copying key files around.

</details>

<details>
<summary>What happens if I lose the security key?</summary>

You lose that SSH credential, because the private key existed nowhere else. Generate a second key on a backup device and add both public keys to `authorized_keys` before you rely on this.

</details>

<details>
<summary>Can I still use SSH if the server is in FIPS mode?</summary>

Usually not with FIDO2. The `sk-*` algorithms are not part of the FIPS crypto policy on RHEL, so the server will reject them. Check the effective policy with `update-crypto-policies --show` before deploying.

</details>

<details>
<summary>Why does my device not appear in fido2-token -L?</summary>

Either `pcscd` is not running, the reader is not recognised, or your distribution built `libfido2` without PC/SC support. Test the reader with `pcsc_scan` first to tell those cases apart.

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues)
- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
- [Managing Passkeys](/docs/product-documentation/passkeys/managing-passkeys)
