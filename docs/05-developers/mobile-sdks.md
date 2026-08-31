---
title: "Mobile SDKs"
description: "iOS and Android SDKs for talking to a Seedkeeper PRO over NFC, with the reference apps that use them. Forks of the Yubico mobile SDKs."
keywords: [iOS FIDO2 SDK, Android NFC security key, yubikit fork, mobile CTAP2, NFC smartcard iOS, Seedkeeper mobile SDK]
sidebar_position: 6
sidebar_label: "Mobile SDKs"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Do I need an SDK for passkey sign-in in my mobile app?", a: "No. iOS and Android expose WebAuthn natively and communicate with the device over NFC themselves. The SDKs are only for apps that manage the device."},
  {q: "Are these SDKs related to Yubico's?", a: "They are forks of the Yubico Mobile SDKs, adapted for this device's applets and transports. Familiarity with the Yubico SDKs transfers directly."},
  {q: "Do I need Apple MFi certification to build an iOS app for this device?", a: "No. MFi covers accessories connecting over Lightning or Bluetooth. This device is NFC only, so all you need is the Core NFC tag reading entitlement and your ISO 7816 application identifiers declared in Info.plist - both free and part of the standard developer account."},
  {q: "Why does my NFC session fail partway through?", a: "Almost always because the card moved. NFC sessions break on loss of field, so operations need to be short and failures handled as an expected condition rather than an exception."},
  {q: "Where is the NFC antenna on an Android phone?", a: "It varies by model - camera area, centre, or lower third. Users rarely know, so showing a diagram in your interface prevents most support requests."},
  {q: "Is there a sample app I can read?", a: "Two complete applications, both AGPLv3: Seedkeeper-Manager-iOS for native iOS, and Seedkeeper-flutter for Android and desktop."},
]} />

<p class="doc-subtitle">Talking to the Device From iOS and Android</p>

<div class="tldr">

Two SDKs handle the NFC transport and CTAP2 layer on mobile: [yubikit-ios](https://github.com/Toporin/yubikit-ios) and [yubikit-android](https://github.com/Toporin/yubikit-android), both forks of Yubico's mobile SDKs. You need them for an app that manages the device. You do not need them for passkey sign-in, which the operating system handles natively.

</div>

## When You Need These

Only for **managing** the device: setting a PIN, listing or deleting credentials, loading OTP secrets, reading device state.

**Passkey sign-in needs none of this.** iOS and Android expose WebAuthn natively, and the OS talks to the device directly over NFC. Your app calls the platform API and the hardware works - see [Using Passkeys Across Devices](/docs/product-documentation/passkeys/using-passkeys-across-devices).

## The SDKs

| Platform | Repository |
|---|---|
| iOS | [Toporin/yubikit-ios](https://github.com/Toporin/yubikit-ios) |
| Android | [Toporin/yubikit-android](https://github.com/Toporin/yubikit-android) |

Both are forks of the Yubico Mobile SDKs. If you have worked with those, the API surface will be familiar and most of what you know transfers directly.

The fork exists to handle the parts specific to this device: applet selection, the Seedkeeper-specific commands, and the fact that the transport is NFC and contact smartcard rather than USB HID.

## Reference Implementations

Both are complete applications, not samples, and they are usually a faster answer than the SDK documentation.

**[Seedkeeper-Manager-iOS](https://github.com/Toporin/Seedkeeper-Manager-iOS)** - the native iOS management app. Shows the full NFC session lifecycle, PIN handling, credential enumeration and OTP management against the real device.

**[Seedkeeper-flutter](https://github.com/Toporin/Seedkeeper-flutter)** - the Flutter application covering Android, Windows, macOS and Linux from one codebase. Useful if you want to see how the same operations are structured across transports.

When SDK behaviour is unclear, read how these apps do it. They are AGPLv3, so nothing is hidden.

## NFC on Mobile: What Actually Matters

The protocol is the easy part. The user experience is where mobile integrations fail.

**iOS requires an explicit session.** Your app starts an NFC session, the system shows its own sheet, and the user taps. There is no background reading. Sessions also time out, so long operations need to be structured around that rather than assuming a stable connection.

**Android reader position varies enormously by handset.** The antenna might be near the camera, the centre, or the lower third. Users genuinely do not know where it is on their own phone. A diagram in your UI removes most support requests - the [First Setup Guide](/docs/product-documentation/getting-started/first-setup-guide) shows the approach.

**Sessions break when the card moves.** A tap that lasts long enough for one command may not last for five. Design for interruption: keep operations short, make failure states clear, and never leave the device in a half-configured state when a session drops.

**Cards and rings behave differently.** A ring sits closer to the antenna but has a smaller coil, and users hold it differently. Test both form factors.

## Permissions and Capabilities

**iOS** requires the Near Field Communication Tag Reading capability, an entitlement from Apple, and the ISO 7816 application identifiers declared in `Info.plist`. Missing that last part produces a silent failure that is hard to diagnose - the session opens and never sees the card.

None of this is the **MFi** programme. Because the device is NFC only, it sits outside Apple's accessory licensing entirely: no enrolment, no hardware certification, no accessory licence. That is a meaningful difference from a Lightning or Bluetooth security key, and it means the entitlement above is the whole of your Apple paperwork. See [Device Capabilities](/docs/developers/device-capabilities#no-mfi-programme-for-ios).

**Android** requires the `NFC` permission and appropriate intent filters. Foreground dispatch is generally the right model for a management app, so the OS does not hand the tag to another application mid-operation.

## FAQ

<details>
<summary>Do I need an SDK for passkey sign-in in my mobile app?</summary>

No. iOS and Android expose WebAuthn natively and communicate with the device over NFC themselves. The SDKs are only for apps that manage the device.

</details>

<details>
<summary>Are these SDKs related to Yubico's?</summary>

They are forks of the Yubico Mobile SDKs, adapted for this device's applets and transports. Familiarity with the Yubico SDKs transfers directly.

</details>

<details>
<summary>Do I need Apple MFi certification to build an iOS app for this device?</summary>

No. MFi covers accessories connecting over Lightning or Bluetooth. This device is NFC only, so all you need is the Core NFC tag reading entitlement and your ISO 7816 application identifiers declared in `Info.plist` - both free and part of the standard developer account.

</details>

<details>
<summary>Why does my NFC session fail partway through?</summary>

Almost always because the card moved. NFC sessions break on loss of field, so operations need to be short and failures handled as an expected condition rather than an exception.

</details>

<details>
<summary>Where is the NFC antenna on an Android phone?</summary>

It varies by model - camera area, centre, or lower third. Users rarely know, so showing a diagram in your interface prevents most support requests.

</details>

<details>
<summary>Is there a sample app I can read?</summary>

Two complete applications, both AGPLv3: Seedkeeper-Manager-iOS for native iOS, and Seedkeeper-flutter for Android and desktop.

</details>

## Related Articles

- [Repositories](/docs/developers/repositories)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Python Library and CLI](/docs/developers/python-library-and-cli)
- [Using Passkeys Across Devices](/docs/product-documentation/passkeys/using-passkeys-across-devices)
