---
title: "Managing Passkeys From Your Computer"
description: "Windows and Chromium browsers can set your FIDO PIN and manage passkeys directly, with no app installed. What works, what doesn't, and the button to avoid."
keywords: [manage security key Windows, chrome settings securityKeys, set FIDO PIN without app, delete passkey Windows, CTAP2 credential management, security key manage]
sidebar_position: 9
sidebar_label: "Managing Passkeys From Your Computer"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I set my FIDO PIN without installing an app?", a: "Yes. Windows does it through Settings, Accounts, Sign-in options, Security key, Manage. Chromium browsers do it at chrome://settings/securityKeys on Windows, macOS and Linux alike."},
  {q: "Can I delete a passkey from Windows?", a: "Yes, individually, from the same Security key management screen. The device exposes credential management through standard CTAP2, so any compliant tool can list and remove entries."},
  {q: "What is the difference between Change PIN and Reset?", a: "Change PIN replaces the PIN and leaves your passkeys untouched. Reset returns the FIDO applet to factory state and permanently erases every passkey on the device along with the PIN. There is no undo."},
  {q: "Does this work on macOS and Linux?", a: "Through a Chromium-based browser at chrome://settings/securityKeys, yes. The Windows Settings route is Windows only, but the browser route covers all three platforms."},
  {q: "Can I manage my OTP codes from Windows?", a: "No. These tools speak CTAP2, which covers passkeys only. OTP codes, the OTP access PIN and the password manager all live in separate applets and need the Seedkeeper apps."},
]} />

<p class="doc-subtitle">No App Required on Desktop</p>

<p class="platform-note">Desktop</p>

<div class="tldr">

Your Seedkeeper PRO implements standard CTAP2 credential management, so Windows and Chromium browsers can set your FIDO PIN and list or delete passkeys without any app installed. Handy on a desktop where you would rather not install anything, or when you are already in the browser's settings.

</div>

## Why This Works

Nothing here is a Seedkeeper feature. Your device reports `credMgmt: true` in its CTAP2 capabilities, which means credential management is exposed through the standard protocol rather than through a proprietary channel.

Any compliant tool can therefore do it. Windows ships one, Chromium ships another, and both work over NFC or a contact smartcard reader exactly as the app does. See [Device Capabilities](/docs/developers/device-capabilities#authenticator-options) if you want the raw metadata.

## What You Can Do From Windows

**Settings** → **Accounts** → **Sign-in options** → **Security key** → **Manage**

Present your Seedkeeper PRO when prompted: insert the card into a contact reader, or tap the card or ring on an NFC reader.

From there:

- **Set up a PIN**, if the device doesn't have one yet
- **Change the PIN**, if it does
- **View the passkeys** stored on the device
- **Delete individual passkeys**

The PIN rules are the same whichever tool you use: numeric, four digits minimum, eight attempts before the applet locks. See [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

## What You Can Do From Chrome

Chromium-based browsers - Chrome, Edge, Brave - expose the same capability at:

```
chrome://settings/securityKeys
```

Two sections matter:

- **Create a PIN** sets or changes the FIDO PIN
- **Sign-in data** lists the passkeys on the device and lets you remove them individually

This route works on **Windows, macOS and Linux**, which makes it the most portable option. If you're on a Mac or a Linux machine and looking for the equivalent of the Windows screen above, this is it.

## The Button to Avoid

Both screens offer **Reset** alongside the PIN options, and it does not do what its neighbours do.

:::danger[Reset erases everything on the FIDO applet]
Reset is not a PIN reset. It returns the FIDO applet to factory state, permanently erasing **every passkey stored on the device** along with the PIN itself. There is no undo and no recovery.

Use **Change PIN** to change a PIN. Use **Delete** on an individual entry to remove one passkey. Only use Reset when you have decided to start over from nothing - see [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper).
:::

The confusion is easy to fall into because the options sit next to each other, and the wording gives no clue about the difference in consequences.

## What You Cannot Do From Here

These tools speak CTAP2, and CTAP2 covers passkeys only. Three things stay in the apps:

| Task | Where |
|---|---|
| OTP codes - adding, viewing, deleting | [Seedkeeper PRO App](/docs/product-documentation/otp-authenticator/adding-a-totp-account) |
| The OTP access PIN | [Seedkeeper PRO App](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin) |
| Passwords, secure notes, seed phrases | [Seedkeeper App or Satochip-Utils App](/docs/product-documentation/password-manager/creating-a-new-password) |

Each of these lives in a different applet with its own PIN, and no browser or operating system exposes them. See [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) for how the three applets relate.

## FAQ

<details>
<summary>Can I set my FIDO PIN without installing an app?</summary>

Yes. Windows does it through Settings, Accounts, Sign-in options, Security key, Manage. Chromium browsers do it at `chrome://settings/securityKeys` on Windows, macOS and Linux alike.

</details>

<details>
<summary>Can I delete a passkey from Windows?</summary>

Yes, individually, from the same Security key management screen. The device exposes credential management through standard CTAP2, so any compliant tool can list and remove entries.

</details>

<details>
<summary>What is the difference between Change PIN and Reset?</summary>

Change PIN replaces the PIN and leaves your passkeys untouched. Reset returns the FIDO applet to factory state and permanently erases every passkey on the device along with the PIN. There is no undo.

</details>

<details>
<summary>Does this work on macOS and Linux?</summary>

Through a Chromium-based browser at `chrome://settings/securityKeys`, yes. The Windows Settings route is Windows only, but the browser route covers all three platforms.

</details>

<details>
<summary>Can I manage my OTP codes from Windows?</summary>

No. These tools speak CTAP2, which covers passkeys only. OTP codes, the OTP access PIN and the password manager all live in separate applets and need the Seedkeeper apps.

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Managing Passkeys](/docs/product-documentation/passkeys/managing-passkeys)
- [Using Passkeys Across Devices](/docs/product-documentation/passkeys/using-passkeys-across-devices)
- [Resetting Your Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [PIN Problems and Lockouts](/docs/troubleshooting/pin-problems-and-lockouts)
- [Device Capabilities](/docs/developers/device-capabilities)
