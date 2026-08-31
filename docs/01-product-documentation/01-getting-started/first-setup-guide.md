---
title: "First Setup Guide"
description: "Set up your Seedkeeper Classic or PRO in minutes: install the app, scan your card or ring over NFC, and choose your PIN. Desktop and PRO steps included."
keywords: [Seedkeeper setup, first time setup, NFC scan card, Seedkeeper PIN, install Seedkeeper App, Satochip-Utils]
sidebar_position: 2
sidebar_label: "First Setup Guide"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Do I need to install two apps?", a: "Only if you use both password management and passkeys/OTP. Passwords only → Seedkeeper App (or Satochip-Utils App on desktop). Passkeys or OTP too → also add the Seedkeeper PRO App. See Managing Passkeys and OTP above."},
  {q: "I have a Classic device and just bought a PRO device. Do I need a new password manager app?", a: "No. The same Seedkeeper app (or Satochip-Utils App on desktop) manages passwords for both your Classic and PRO devices - you only add Seedkeeper PRO for the new passkey/OTP features."},
  {q: "Where exactly is the NFC reader on my phone?", a: "On iPhone, it's at the top of the device - see the diagram above. On Android, it varies by model; check your phone's documentation. Both cases are covered in Scan your Seedkeeper above."},
  {q: "What happens if I forget my PIN?", a: "After 4 incorrect attempts, the device locks. You can reset it from the app, but this wipes all secrets and restores the device to its factory state. See Resetting Your Seedkeeper for the full procedure, and make sure you have a backup in place."},
  {q: "Does Seedkeeper store any of my data in the cloud?", a: "No. Seedkeeper has zero cloud dependency and collects no data - everything stays on your device, communicating directly with the app over NFC or a contact reader."},
]} />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p class="doc-subtitle">Get Your Seedkeeper Running in 5 Minutes</p>

<div class="tldr">
Setting up your Seedkeeper takes about a minute on mobile.<br />
Download the app, tap Click & Scan, hold your device to your phone, and choose a PIN.<br />
PRO owners can then add passkeys and OTP support, and everyone can also manage their Seedkeeper from a computer.
</div>

## Download the mobile app

1. Download the Seedkeeper App for [iOS or Android](/docs/product-documentation/getting-started/download#seedkeeper-app)

<div class="download-row">

<a href="https://apps.apple.com/us/app/seedkeeper/id6502836060"><img src="/img/badges/app-store-badge.svg" alt="Download on the App Store" className="store-badge" /></a>
<a href="https://play.google.com/store/apps/details?id=org.satochip.seedkeeper"><img src="/img/badges/google-play-badge.png" alt="Get it on Google Play" className="store-badge" /></a>

</div>

## Scan your Seedkeeper

2. Open the app
3. Tap **Click & Scan**
4. Hold your Seedkeeper card or ring against the back of your phone
5. Keep it in place until the app confirms the connection

:::note[Finding the NFC reader on your phone]

<Tabs>
  <TabItem value="iphone" label="iPhone">

The NFC reader is located at the top of the phone, on the back.

<img src="/img/diagrams/iphone_nfc-clear.png" alt="NFC reader location on an iPhone" className="doc-diagram" />

  </TabItem>
  <TabItem value="android" label="Android">

The NFC reader's position varies by phone. A few common examples:

<img src="/img/diagrams/android-nfc-clear.png" alt="NFC reader location on an Android" className="doc-diagram" />

If none of these match, check your phone's documentation for the exact location. If the device still isn't detected, see [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues).

To enable NFC on most modern Android devices: open **Settings**, tap **Connected devices** (or **Connections**), select **Connection preferences**, and toggle **NFC** on. Alternatively, swipe down from the top of your screen to open the Quick Settings panel and tap the **NFC** tile.

  </TabItem>
</Tabs>

:::

## Setup your PIN code

<div class="step-layout">

<div class="step-text">

The first time you connect a new device, the app prompts you to initialize it:

6. Choose a PIN code (4 to 16 characters)
7. Confirm the PIN

**Your password manager is now ready.**

Head to [Password Manager](/docs/category/password-manager) to start adding logins and secure notes, or set up your [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery) first - recommended before storing real credentials.

:::warning[Keep your PIN safe]
After 4 incorrect attempts, your device locks.<br />
This counter applies to the password manager PIN only. The FIDO PIN protecting your passkeys is separate, numeric, and allows 8 attempts - see [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).<br />
You can reset it from the app, but resetting wipes all secrets and restores the device to its original, empty state - it does not recover your data.<br /><br />
See [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper) for the full procedure. Make sure your [backup](/docs/product-documentation/getting-started/backup-and-recovery) is in place before this happens.
:::

</div>

<div class="step-image">
<img src="/img/gifs/setup-first-pin-iphone-mockup.gif" alt="Setting up your first PIN in the Seedkeeper App" className="mockup-image" />
</div>

</div>

## Managing Passkeys and OTP

Have a Seedkeeper PRO card or ring and want to manage passkeys and OTP codes too?

### Download the app

1. Download the Seedkeeper PRO App

<div class="download-row">

<a href="https://apps.apple.com/us/app/seedkeeper-authenticator/id6791186520"><img src="/img/badges/app-store-badge.svg" alt="Download on the App Store" className="store-badge" /></a>
<img src="/img/badges/google-play-badge.png" alt="Coming soon on Google Play" className="store-badge" style={{opacity: 0.45}} title="Coming soon" />

</div>

2. Follow the dedicated guides:
   - [Passkeys](/docs/category/passkeys) - creating, importing, and managing passkeys
   - [OTP Authenticator](/docs/category/otp-authenticator) - adding and managing OTP/TOTP codes

### Setup your PIN code

The Seedkeeper PRO passkey features use their own separate PIN, distinct from your password manager PIN - numeric rather than alphanumeric, and with its own attempt counter.<br />
See [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) for the full walkthrough.

## Manage Everything from Your Desktop

Prefer working from a computer? The same logic applies, using the desktop apps instead.

1. Download the desktop app

The desktop equivalent of the Seedkeeper App. Works with both Seedkeeper Classic and Seedkeeper PRO devices.

<div class="download-row">

<a href="https://github.com/Toporin/Satochip-Utils/releases/download/v0.3.0-beta/Satochip-Utils-win-amd64-0.3.0-beta-signed.exe" className="download-button"><img src="/img/icons/windows-generic.svg" alt="" /> Windows</a>
<a href="https://github.com/Toporin/Satochip-Utils/releases/download/v0.3.0-beta/Satochip-Utils-macos-arm64-0.3.0-signed.dmg" className="download-button"><img src="/img/icons/mac-generic.svg" alt="" /> macOS</a>
<a href="https://github.com/Toporin/Satochip-Utils/releases/download/v0.3.0-beta/Satochip-Utils-linux-x86_64-0.3.0-beta" className="download-button"><img src="/img/icons/linux-generic.svg" alt="" /> Linux</a>

</div>

2. Plug your card into a smartcard reader, or place your ring on an NFC reader
3. Launch the app
4. Set up a PIN code
5. Manage your secrets

For PRO features, also download the Seedkeeper PRO App and follow the same [Passkeys](/docs/category/passkeys) and [OTP Authenticator](/docs/category/otp-authenticator) guides linked above.

<div class="download-row">

<a href="https://github.com/Toporin/Seedkeeper-flutter/releases/download/v4.7.1-sk2/seedkeeper-pro-windows.msi" className="download-button"><img src="/img/icons/windows-generic.svg" alt="" /> Windows</a>
<a href="https://github.com/Toporin/Seedkeeper-flutter/releases/download/v4.7.1-sk2/seedkeeper-pro-macos.dmg" className="download-button"><img src="/img/icons/mac-generic.svg" alt="" /> macOS</a>
<a href="https://github.com/Toporin/Seedkeeper-flutter/releases/download/v4.7.1-sk2/seedkeeper-pro-linux.tar.gz" className="download-button"><img src="/img/icons/linux-generic.svg" alt="" /> Linux</a>

</div>

## FAQ

<details>
<summary>Do I need to install two apps?</summary>

Only if you use both password management and passkeys/OTP. Passwords only → Seedkeeper App (or Satochip-Utils App on desktop). Passkeys or OTP too → also add the Seedkeeper PRO App. See [Managing Passkeys and OTP](#managing-passkeys-and-otp) above.

</details>

<details>
<summary>I have a Classic device and just bought a PRO device. Do I need a new password manager app?</summary>

No. The same Seedkeeper app (or Satochip-Utils App on desktop) manages passwords for both your Classic and PRO devices - you only add Seedkeeper PRO for the new passkey/OTP features.

</details>

<details>
<summary>Where exactly is the NFC reader on my phone?</summary>

On iPhone, it's at the top of the device - see the diagram above. On Android, it varies by model; check your phone's documentation. Both cases are covered in [Scan your Seedkeeper](#scan-your-seedkeeper) above.

</details>

<details>
<summary>What happens if I forget my PIN?</summary>

After 4 incorrect attempts, the device locks. You can reset it from the app, but this wipes all secrets and restores the device to its factory state. See [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper) for the full procedure, and make sure you have a [backup](/docs/product-documentation/getting-started/backup-and-recovery) in place.

</details>

<details>
<summary>Does Seedkeeper store any of my data in the cloud?</summary>

No. Seedkeeper has zero cloud dependency and collects no data - everything stays on your device, communicating directly with the app over NFC or a contact reader.

</details>

## Related Articles

- [Download Section](/docs/product-documentation/getting-started/download)
- [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery)
- [Security Best Practices](/docs/product-documentation/getting-started/security-best-practices)
- [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
- [Device Settings](/docs/product-documentation/getting-started/device-settings)
- [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues)
