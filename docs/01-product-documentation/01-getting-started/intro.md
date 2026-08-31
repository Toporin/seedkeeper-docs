---
title: "Seedkeeper: Hardware Password Manager and Passkey Device"
description: "Seedkeeper is an open-source hardware device - card or ring - storing passwords, passkeys and OTP codes on an EAL6+ secure element, with no cloud."
keywords: [Seedkeeper, hardware password manager, NFC security key, passkey device, Seedkeeper Classic vs PRO, offline password storage]
sidebar_position: 1
sidebar_label: "Introduction"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Do I need an internet connection to use Seedkeeper?", a: "No. Seedkeeper has zero cloud dependency - it works entirely offline, communicating only with the companion app over NFC or a contact reader."},
  {q: "What's the difference between Seedkeeper Classic and PRO?", a: "PRO includes everything Classic does, plus passkeys and OTP/TOTP support. See Which Seedkeeper Do You Have? above."},
  {q: "Where do I start?", a: "The First Setup Guide walks you through downloading the right app and connecting your device."},
]} />

<p class="doc-subtitle">Your Secrets, On a Device You Hold</p>

<div class="tldr">

Seedkeeper is an open-source hardware security device - available as a card or a ring - that stores your passwords, and on PRO models, your passkeys and OTP codes too. Everything happens on-device, inside an EAL6+ certified secure element, with zero cloud dependency and no data collection.

</div>

## Overview

Seedkeeper turns a small, FIDO2-certified secure element into a self-contained security device:

- **Password manager** - store logins and secure notes
- **Passkey authenticator** (PRO only) - passwordless sign-in via [FIDO2](/docs/glossary/fido2)
- **OTP generator** (PRO only) - offline two-factor codes

There's no app account, no cloud sync, and no data collection - your secrets stay on the physical device, communicating with the companion apps only over NFC or a contact reader.

## Which Seedkeeper Do You Have?

| | Seedkeeper Classic | Seedkeeper PRO |
|---|---|---|
| Password manager | Yes | Yes |
| Passkeys (FIDO2) | - | Yes |
| OTP / TOTP codes | - | Yes |
| Form factors | Card, Ring | Card, Ring |

Not sure which one you have, or want to know what to download? Start with the [First Setup Guide](/docs/product-documentation/getting-started/first-setup-guide).

## What's in This Documentation

- **Product Documentation** - setup, password manager, passkeys, OTP
- **Tutorials** - service-by-service guides (Google, Microsoft, and more)
- **Security Academy** - what passkeys, FIDO2, OTP, and seed phrases actually are
- **Developers** - SDKs and integration
- **Business** - deploying Seedkeeper across an organization
- **Troubleshooting** - lost devices, resets, recovery
- **Glossary** - quick definitions of every technical term used here

## FAQ

<details>
<summary>Do I need an internet connection to use Seedkeeper?</summary>

No. Seedkeeper has zero cloud dependency - it works entirely offline, communicating only with the companion app over NFC or a contact reader.

</details>

<details>
<summary>What's the difference between Seedkeeper Classic and PRO?</summary>

PRO includes everything Classic does, plus passkeys and OTP/TOTP support. See [Which Seedkeeper Do You Have?](#which-seedkeeper-do-you-have) above.

</details>

<details>
<summary>Where do I start?</summary>

The [First Setup Guide](/docs/product-documentation/getting-started/first-setup-guide) walks you through downloading the right app and connecting your device.

</details>

## Related Articles

- [First Setup Guide](/docs/product-documentation/getting-started/first-setup-guide)
- [Download Section](/docs/product-documentation/getting-started/download)
- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password)
