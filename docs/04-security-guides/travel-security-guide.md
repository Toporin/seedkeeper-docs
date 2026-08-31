---
title: "Travel Security Guide"
description: "Border checks, hotel Wi-Fi, shared computers and a phone you might lose. What to prepare before leaving and how to behave once you are away."
keywords: [travel security, digital security abroad, hotel wifi safety, border device search, travel with crypto, lost phone abroad]
sidebar_position: 4
sidebar_label: "Travel Security Guide"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What should I do before travelling with my devices?", a: "Make sure nothing you depend on exists in only one place: recovery codes stored away from the phone, a second authenticator or the original QR codes saved, and a second registered passkey device."},
  {q: "Is hotel Wi-Fi safe?", a: "Usually, since traffic is encrypted by default. The real risks are fake captive portals imitating the sign-in page and networks that let other guests reach your device, both of which a VPN and a public network profile address."},
  {q: "Can I use a hotel business centre computer safely?", a: "Assume anything typed there is recorded. If you must, use private browsing and sign out afterwards - and prefer a hardware passkey, which authenticates without leaving any credential on the machine."},
  {q: "Will my two-factor codes work abroad?", a: "Authenticator codes will, since they need no network. SMS codes often will not, because roaming and local SIMs break delivery - which is a good reason to move away from SMS before travelling."},
  {q: "What if my phone is stolen while travelling?", a: "Lock it remotely, change your email password from another device, revoke its access on your accounts, then contact your carrier about the SIM. The accounts matter more than the hardware."},
]} />

import BuyBackupDevice from '@site/docs/_buy-backup-device.mdx';

<p class="doc-subtitle">Prepare Before You Leave, Behave Once You Are There</p>

<div class="tldr">

Travelling changes your threat model in three ways: you carry everything with you, you use networks and machines you don't control, and losing a device means losing it far from home. Most of the work happens before departure, and the single most useful preparation is making sure nothing you need is only in one place.

</div>

## Before You Leave

### Make Sure Nothing Exists in Only One Place

This is the preparation that matters most, and the one people skip.

A phone stolen in a city you don't know, with your authenticator app on it and no backup, locks you out of your own accounts while you are least able to deal with it.

- **Recovery codes**, stored somewhere other than the phone
- **A second authenticator device**, or at minimum the original QR codes saved securely - see [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- **A second registered passkey device** if you rely on passkeys - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)

<BuyBackupDevice />

### Reduce What You Carry

The simplest protection is not having the data with you.

Take the accounts you'll actually use and leave the rest. Sign out of what you don't need. If you hold crypto, consider whether the device holding it needs to travel at all - see [Security Checklist for Crypto Users](/docs/security-guides/security-checklist-for-crypto-users).

### Check Your Devices Are Current

Updates, full-disk encryption on, screen locks with a proper PIN rather than four digits. See [Smartphone Security Guide](/docs/security-guides/smartphone-security-guide).

### Understand Your Phone Number Will Be Unreliable

Roaming, a local SIM, or an eSIM swap all break SMS-based two-factor authentication - sometimes silently. Anything still relying on SMS should be moved to an authenticator or a passkey before departure, not from an airport.

This is worth doing anyway: see [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## While You Are There

### Hotel and Airport Wi-Fi

Less dangerous than the folklore suggests, since most traffic is encrypted. Two real risks remain.

**Fake captive portals** imitate the network's sign-in page to harvest credentials. A network asking you to sign in with an email account rather than a room number is a warning sign.

**Overly permissive networks** let other guests see your device. Set the network as public rather than private on your laptop, which disables file sharing.

A VPN is genuinely useful here, mostly because it removes the need to judge each network individually.

### Shared and Borrowed Computers

Hotel business centres, internet cafés, a colleague's laptop. Assume anything typed on them is recorded, because it might be.

If you must sign in from one:

- Never type a password you use elsewhere
- Use a private browsing window, and sign out explicitly
- Prefer a passkey on a device you carry - the credential never leaves it, and nothing is left behind on the machine. See [Using Passkeys Across Devices](/docs/product-documentation/passkeys/using-passkeys-across-devices)

This is the situation where a roaming authenticator earns its place: a card or ring works on a machine you don't trust without depositing anything on it.

### Physical Awareness

Unglamorous and effective. Shoulder surfing is real in airports and cafés, phones are lifted from tables, and laptop bags are taken from luggage racks.

Use a privacy screen if you work on sensitive material in public, and don't leave devices unattended even briefly.

## Border Crossings

Rules vary enormously by country, and this is a legal question as much as a technical one - what follows is context, not advice.

Some jurisdictions can require you to unlock a device, and refusal has consequences ranging from delay to denial of entry. Your position is better if you plan for it than if you improvise at the counter.

The general principles most travellers find useful: know your destination's rules before you leave, understand that a device you don't carry cannot be searched, and be aware that a powered-off device is typically in a more protected state than one that has been unlocked since boot.

For anything beyond ordinary personal travel - journalism, legal work, sensitive commercial material - get advice specific to your situation and your destination.

## If Something Goes Wrong

Order matters. Do these in sequence:

1. **Lock the device remotely** through Find My iPhone or Find My Device
2. **Change your email password** from another device - it is the reset path for everything else
3. **Revoke the device's access** on accounts where it was registered: passkeys, active sessions, trusted devices. See [Lost or Stolen Device](/docs/troubleshooting/lost-device)
4. **Contact your carrier** if the SIM is gone, to stop it being used for SMS codes
5. **Then** deal with the phone itself

The instinct is to start with the hardware. The accounts matter more.

## FAQ

<details>
<summary>What should I do before travelling with my devices?</summary>

Make sure nothing you depend on exists in only one place: recovery codes stored away from the phone, a second authenticator or the original QR codes saved, and a second registered passkey device.

</details>

<details>
<summary>Is hotel Wi-Fi safe?</summary>

Usually, since traffic is encrypted by default. The real risks are fake captive portals imitating the sign-in page and networks that let other guests reach your device, both of which a VPN and a public network profile address.

</details>

<details>
<summary>Can I use a hotel business centre computer safely?</summary>

Assume anything typed there is recorded. If you must, use private browsing and sign out afterwards - and prefer a hardware passkey, which authenticates without leaving any credential on the machine.

</details>

<details>
<summary>Will my two-factor codes work abroad?</summary>

Authenticator codes will, since they need no network. SMS codes often will not, because roaming and local SIMs break delivery - which is a good reason to move away from SMS before travelling.

</details>

<details>
<summary>What if my phone is stolen while travelling?</summary>

Lock it remotely, change your email password from another device, revoke its access on your accounts, then contact your carrier about the SIM. The accounts matter more than the hardware.

</details>

## Related Articles

- [Smartphone Security Guide](/docs/security-guides/smartphone-security-guide)
- [Security Checklist for Crypto Users](/docs/security-guides/security-checklist-for-crypto-users)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Using Passkeys Across Devices](/docs/product-documentation/passkeys/using-passkeys-across-devices)
