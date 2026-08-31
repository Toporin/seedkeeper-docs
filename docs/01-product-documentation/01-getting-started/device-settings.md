---
title: "Device Settings"
description: "Rename your device, check memory usage, verify it is genuine, change your PIN and view logs - everything under the Seedkeeper App's Card's Information menu."
keywords: [Seedkeeper settings, verify authenticity, change PIN, device memory, card information, rename Seedkeeper]
sidebar_position: 6
sidebar_label: "Device Settings"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I rename my device later?", a: "Yes, at any time from Card's Information. See Naming Your Device above."},
  {q: "What happens if my device runs out of memory?", a: "If you try to add a new secret once your 8 KB of memory is full, the NFC toast shows a red exclamation mark with an error message - see Checking Memory Status above."},
  {q: "How do I know my device is genuine?", a: "Card's Information → Verify Authenticity checks your device's certificate against Satochip's official certificate. See Verifying Authenticity above."},
  {q: "I forgot my PIN - can I still change it?", a: "No. Changing your PIN requires knowing the current one. If you've forgotten it, your only option is Resetting Your Seedkeeper, which wipes the device."},
]} />

<p class="doc-subtitle">Everything You Can Manage from the App Menu</p>

<div class="tldr">

Beyond passwords, passkeys, and OTP, the app's menu (tap the 3-dot icon, top right) lets you name your device, check memory usage, verify your device's authenticity, change your PIN, and view app logs - all under Card's Information.

</div>

## Overview

Open the 3-dot menu (top right) to reach the app's main menu. From there:

- **Card's Information** - rename your device, change your PIN, verify authenticity, view logs
- **Make a Backup** - back up one device to another (a top-level entry, not inside Settings)
- **Settings** - launch the app's intro screens, enable debug mode, or factory-reset your device

<img src="/img/screenshots/overview-menu-mockup.png" alt="Seedkeeper App main menu" className="mockup-image" />

### Naming Your Device

If you have more than one card or ring, you can give each one a name to tell them apart - useful once you have a Master and a Backup device, or a mix of Classic and PRO. Go to **Card's Information** and edit the label.

<img src="/img/screenshots/naming-device-mockup.png" alt="Editing the card label in Card's Information" className="mockup-image" />

### Checking Memory Status

Your device has 8 KB of memory, shared across every secret stored on it. You can check how much is used and how many secrets are stored at the top of **Card's Information**, under Seedkeeper status.

<img src="/img/screenshots/memory-status-mockup.png" alt="Seedkeeper status showing memory usage in Card's Information" className="mockup-image" />

:::warning[When memory is full]
If you try to add a new secret once memory is full, the NFC toast shows a red exclamation mark with an error message telling you there's no space left.
:::

### Verifying Authenticity

Go to **Card's Information** → **Verify Authenticity** to confirm your device genuinely comes from Satochip S.R.L. The app checks the certificate that signed your device against Satochip's official certificate.

<div class="download-row">

<div>
<img src="/img/screenshots/auth-success-mockup.png" alt="Authentication successful" className="mockup-image" />
<p style={{textAlign: 'center', color: '#2eb872', fontWeight: 600}}>Authentication successful</p>
</div>

<div>
<img src="/img/screenshots/auth-failed-mockup.png" alt="Authentication unsuccessful" className="mockup-image" />
<p style={{textAlign: 'center', color: '#c43c3c', fontWeight: 600}}>Authentication unsuccessful</p>
</div>

</div>

### Changing Your PIN

Go to **Card's Information** → **Change PIN**. If you still know your current PIN, changing it doesn't affect any of your stored secrets. If you don't, see [PIN Problems and Lockouts](/docs/troubleshooting/pin-problems-and-lockouts). This is different from [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper), which is only needed if you've forgotten your PIN entirely and wipes the device.

<img src="/img/screenshots/changing-pin-mockup.png" alt="Changing your PIN in Card's Information" className="mockup-image" />

### Viewing App Logs

Go to **Card's Information** → **View Logs** to see your device's activity log.

### Backing Up Your Device

Tap **Make a Backup** from the main menu. See [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery) for the full walkthrough.

## FAQ

<details>
<summary>Can I rename my device later?</summary>

Yes, at any time from **Card's Information**. See [Naming Your Device](#naming-your-device) above.

</details>

<details>
<summary>What happens if my device runs out of memory?</summary>

If you try to add a new secret once your 8 KB of memory is full, the NFC toast shows a red exclamation mark with an error message - see [Checking Memory Status](#checking-memory-status) above.

</details>

<details>
<summary>How do I know my device is genuine?</summary>

**Card's Information** → **Verify Authenticity** checks your device's certificate against Satochip's official certificate. See [Verifying Authenticity](#verifying-authenticity) above.

</details>

<details>
<summary>I forgot my PIN - can I still change it?</summary>

No. Changing your PIN requires knowing the current one. If you've forgotten it, your only option is [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper), which wipes the device.

</details>

## Related Articles

- [First Setup Guide](/docs/product-documentation/getting-started/first-setup-guide)
- [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery)
- [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Security Best Practices](/docs/product-documentation/getting-started/security-best-practices)
- [What is a Password?](/docs/security-academy/password-security/what-is-a-password)
