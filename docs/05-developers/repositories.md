---
title: "Repositories"
description: "Every Seedkeeper repository, what it contains, and which one to read for a given problem. All AGPLv3."
keywords: [Seedkeeper github, open source security key, AGPLv3 firmware, seedkeeper-manager, yubikit fork, Seedkeeper source code]
sidebar_position: 7
sidebar_label: "Repositories"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Is Seedkeeper open source?", a: "Yes, everything is published under AGPLv3 - the applications, the mobile SDKs and the Python tooling."},
  {q: "Which repository do I need to accept passkeys on my site?", a: "None. Standard WebAuthn is sufficient, and your code never communicates with the device directly."},
  {q: "Are the mobile SDKs forks of Yubico's?", a: "Yes, adapted for this device's applets and transports. Experience with the Yubico Mobile SDKs transfers directly."},
  {q: "Can I fork Seedkeeper code for a commercial product?", a: "The AGPL permits it, provided you publish your modifications under the same licence - including when the derivative work is offered as a network service. Take advice if your case is unclear."},
  {q: "How do I verify a claim in this documentation?", a: "Read the source, or read authenticatorGetInfo from a device you hold. Both are authoritative in a way documentation is not."},
]} />

<p class="doc-subtitle">Everything Is Public - Here Is Where to Look</p>

<div class="tldr">

Apps, SDKs and tooling are published on GitHub under **AGPLv3**. This page maps each repository to the problem it solves, so you can go straight to the one you need instead of browsing an organisation.

</div>

## Applications

Complete, shipping applications. Usually the fastest way to understand how something is done, because they show real usage rather than an isolated snippet.

### [Seedkeeper-Manager-iOS](https://github.com/Toporin/Seedkeeper-Manager-iOS)

The native iOS management app for Seedkeeper PRO.

**Read it for:** NFC session lifecycle on iOS, PIN entry flows, credential enumeration, OTP management, and how the Apple entitlements and `Info.plist` declarations are set up.

### [Seedkeeper-flutter](https://github.com/Toporin/Seedkeeper-flutter)

The Flutter application covering Android, Windows, macOS and Linux from a single codebase.

**Read it for:** cross-platform structure, how the same operations are expressed over NFC and over a contact reader, and desktop smartcard handling.

## Tooling

### [seedkeeper-manager](https://github.com/Toporin/seedkeeper-manager)

Python library and command line tool for configuring the FIDO2 and OTP applets.

**Read it for:** provisioning, automation, scripted PIN and credential management, and reading `authenticatorGetInfo` from a device you hold. Full context in [Python Library and CLI](/docs/developers/python-library-and-cli).

## Mobile SDKs

Forks of the Yubico Mobile SDKs, adapted for this device's applets and transports.

### [yubikit-ios](https://github.com/Toporin/yubikit-ios)

iOS SDK: NFC transport, smartcard connection handling, CTAP2 layer.

### [yubikit-android](https://github.com/Toporin/yubikit-android)

Android SDK, same scope.

Both are covered in [Mobile SDKs](/docs/developers/mobile-sdks). If you have used the Yubico SDKs, the API will be familiar.

## Which One Do I Need?

| Problem | Repository |
|---|---|
| Accept passkeys on my website | **None** - see [WebAuthn Quickstart](/docs/developers/webauthn-quickstart) |
| Provision devices before distribution | `seedkeeper-manager` |
| Script PIN or credential setup | `seedkeeper-manager` |
| Build an iOS app that manages the device | `yubikit-ios` + `Seedkeeper-Manager-iOS` |
| Build an Android app that manages the device | `yubikit-android` + `Seedkeeper-flutter` |
| Support desktop as well as mobile | `Seedkeeper-flutter` |
| Verify a capability claim | Any of them - it is all readable |

## About the Licence

Everything is **AGPLv3**. Two consequences worth understanding before you build on it.

**You can read and verify everything.** Any claim in this documentation - the extensions supported, the storage limits, what happens on a reset - can be checked against the source rather than trusted. That is the whole argument for open-source security, and it only holds if the source is genuinely there.

**AGPL is copyleft, including over a network.** If you distribute a derivative work, or make one available as a network service, the AGPL requires you to publish your modifications under the same licence. Consider that before forking for a commercial product, and get advice if your situation is not obvious.

Using the device, or integrating with it over standard WebAuthn, carries no licensing obligation at all. WebAuthn is a standard, not our code.

## Reporting a Security Issue

Open an issue for a bug. For a security vulnerability, use the repository's private reporting channel rather than a public issue, so a fix can ship before the details do.

## FAQ

<details>
<summary>Is Seedkeeper open source?</summary>

Yes, everything is published under AGPLv3 - the applications, the mobile SDKs and the Python tooling.

</details>

<details>
<summary>Which repository do I need to accept passkeys on my site?</summary>

None. Standard WebAuthn is sufficient, and your code never communicates with the device directly.

</details>

<details>
<summary>Are the mobile SDKs forks of Yubico's?</summary>

Yes, adapted for this device's applets and transports. Experience with the Yubico Mobile SDKs transfers directly.

</details>

<details>
<summary>Can I fork Seedkeeper code for a commercial product?</summary>

The AGPL permits it, provided you publish your modifications under the same licence - including when the derivative work is offered as a network service. Take advice if your case is unclear.

</details>

<details>
<summary>How do I verify a claim in this documentation?</summary>

Read the source, or read `authenticatorGetInfo` from a device you hold. Both are authoritative in a way documentation is not.

</details>

## Related Articles

- [Developer Overview](/docs/developers/developer-overview)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Python Library and CLI](/docs/developers/python-library-and-cli)
- [Mobile SDKs](/docs/developers/mobile-sdks)
