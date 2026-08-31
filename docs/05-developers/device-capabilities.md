---
title: "Device Capabilities"
description: "The complete technical profile of Seedkeeper PRO: AAGUID, CTAP versions, algorithms, extensions, options, limits and transports. Raw metadata."
keywords: [Seedkeeper PRO AAGUID, CTAP2.1, FIDO2 capabilities, hmac-secret, credProtect, largeBlobs, supported algorithms, authenticatorGetInfo]
sidebar_position: 2
sidebar_label: "Device Capabilities"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is the AAGUID of Seedkeeper PRO?", a: "328dec20-698f-5d33-aed3-97daba53b1b0. This is the value to allow in an enterprise key restriction policy such as Microsoft Entra ID."},
  {q: "Which signature algorithms does Seedkeeper PRO support?", a: "ES256 only, that is secp256r1_ecdsa_sha256_raw, COSE identifier -7. Relying parties that restrict pubKeyCredParams to RS256 or EdDSA will fail to register."},
  {q: "Does Seedkeeper PRO support hmac-secret and PRF?", a: "Yes. The hmac-secret CTAP2 extension is supported, and it has been confirmed working end to end through the WebAuthn prf extension in Chromium-based browsers - including deriving a vault decryption key in Bitwarden. Browser support for exposing prf varies, so test against your target browsers."},
  {q: "How many passkeys can Seedkeeper PRO store?", a: "Up to 90 discoverable credentials, plus 50 OTP credentials. Non-discoverable credentials consume no on-device storage."},
  {q: "Does Seedkeeper PRO work over USB?", a: "No. Transports are NFC for both form factors, plus ISO 7816 contact for the card. There is no USB and no Bluetooth, which is also why the device has no battery."},
  {q: "Does an iOS integration require Apple MFi certification?", a: "No. MFi applies to accessories connecting over Lightning or as Bluetooth accessories. Seedkeeper PRO communicates over NFC only, which is part of the standard iOS developer surface. You need the Core NFC tag reading entitlement, which is free and unrelated to MFi."},
  {q: "Does Seedkeeper PRO support enterprise attestation?", a: "It is implemented in firmware but currently disabled. Standard basic_full attestation is available, which is what AAGUID-based key restriction policies rely on."},
  {q: "What does clientPin false mean in the metadata?", a: "That no PIN is currently set on the device the metadata was read from. The client PIN protocol is supported; the flag reports current state rather than capability."},
]} />

<p class="doc-subtitle">The Complete Technical Profile</p>

<div class="tldr">

Seedkeeper PRO is a FIDO2 CTAP2.1 authenticator with a hardware secure element, supporting ES256, resident credentials, `hmac-secret`, `credProtect`, `largeBlobs` and credential management, over NFC and ISO 7816 contact. AAGUID `328dec20-698f-5d33-aed3-97daba53b1b0`.

</div>

## Identity

| Field | Value |
|---|---|
| **AAGUID** | `328dec20-698f-5d33-aed3-97daba53b1b0` |
| FIDO certification | FIDO2 Level 1, certificate `FA001202600016` |
| Secure element | Common Criteria EAL6+ |
| Firmware licence | AGPLv3 |

The AAGUID is what you allow in an enterprise key restriction policy - see [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide) and [Configure Passkeys in Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id). The certificate number can be verified in the [FIDO Alliance certification directory](https://app.fido.cyber-pass.org/certificates/search).

## Protocol Versions

```
FIDO_2_1
FIDO_2_1_PRE
FIDO_2_0
U2F_V2
```

CTAP2.1 is the current generation. `U2F_V2` means legacy U2F services still work, so a device registered as a second factor on an older site continues to function.

## Cryptography

| Field | Value |
|---|---|
| Signature algorithm | `secp256r1_ecdsa_sha256_raw` (COSE **ES256**, `-7`) |
| Public key encoding | COSE |
| Attestation type | `basic_full` |
| Key protection | `hardware`, `secure_element` |

**ES256 is the only algorithm.** This is what the overwhelming majority of relying parties request, and it is the one every WebAuthn implementation is required to support. If your service restricts `pubKeyCredParams` to RS256 or EdDSA only, registration will fail - allow `-7` and it works.

`basic_full` attestation means a batch certificate is presented, identifying make and model rather than the individual device.

## User Verification

| Method | Details |
|---|---|
| `none` | Supported - credentials can be created and used without UV |
| `passcode_external` | PIN entered on the host, `base: 10`, `minLength: 4`, `maxRetries: 8` |

`base: 10` indicates a numeric PIN. `maxRetries: 8` is the number of consecutive failed attempts before the FIDO applet locks; recovery then requires resetting the applet, which erases every passkey on the device. See [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

There is no on-device biometric sensor. User verification is the PIN; user presence is the physical tap or insertion.

## CTAP2 Extensions

```
uvm
credBlob
credProtect
hmac-secret
largeBlobKey
minPinLength
```

What each one enables in practice:

- **`hmac-secret`** - the authenticator side of WebAuthn **PRF**. Lets a relying party derive a symmetric secret from the credential, which is what applications use for end-to-end encryption keyed to a passkey. Confirmed working end to end through the WebAuthn `prf` extension in Chromium-based browsers, including Bitwarden vault decryption. Browser support for exposing `prf` still varies, so test against your target browsers.
- **`credProtect`** - per-credential protection policy, controlling whether a credential can be discovered without user verification.
- **`credBlob`** - a small opaque blob stored alongside a credential.
- **`largeBlobKey`** - key material for the `largeBlobs` store below.
- **`minPinLength`** - lets a relying party learn the enforced minimum PIN length, and lets an administrator raise it.
- **`uvm`** - user verification method reporting.

## Authenticator Options

| Option | Value | Meaning |
|---|---|---|
| `rk` | `true` | Resident (discoverable) credentials supported |
| `credMgmt` | `true` | Credential management over CTAP2 - list and delete from any compliant client |
| `largeBlobs` | `true` | Large blob storage supported |
| `pinUvAuthToken` | `true` | PIN/UV auth token protocol supported |
| `setMinPINLength` | `true` | Minimum PIN length can be raised by configuration |
| `authnrCfg` | `true` | `authenticatorConfig` supported |
| `uvAcfg` | `true` | User verification configuration supported |
| `makeCredUvNotRqd` | `true` | Credentials can be created without user verification |
| `alwaysUv` | `false` | Always-require-UV not enabled by default |
| `up` | `false` | User presence flag not separately settable |
| `clientPin` | `false` | **No PIN set on the device this was read from** - the protocol is supported, the value reports current state |

`clientPin: false` is a common source of confusion. It reports whether a PIN is currently configured, not whether PIN support exists. On a device with a PIN set, this reads `true`.

`credMgmt: true` means passkeys can be enumerated and deleted through standard CTAP2 tooling - Windows Settings, Chrome's security key manager - as well as through the [Seedkeeper PRO App](/docs/product-documentation/passkeys/managing-passkeys).

## Storage Limits

| Item | Limit |
|---|---|
| Discoverable (resident) credentials | **90** |
| OTP credentials | **50** |
| Password manager memory | 8 KB, shared across all secrets |

Non-discoverable credentials consume no storage, since nothing about them is kept on the device.

The password manager is a separate applet from FIDO2 and OTP, with its own PIN and its own memory. See [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) for how the three PINs relate.

## Transports

| Transport | Card | Ring |
|---|---|---|
| NFC (ISO 14443) | ✅ | ✅ |
| Contact (ISO 7816) | ✅ | ❌ |
| USB | ❌ | ❌ |
| Bluetooth | ❌ | ❌ |

No USB and no Bluetooth means no battery, no firmware update over the air, and no radio beyond the field of the reader. On desktop, the card works in any contact smartcard reader; both form factors work with any NFC reader.

Practical consequence for testing: your integration tests need NFC or a contact reader, not a USB port.

### No MFi Programme for iOS

Worth knowing before you plan an iOS integration: because the device communicates over **NFC only**, it falls outside Apple's **MFi** accessory programme entirely.

Accessories connecting over Lightning, or over Bluetooth as a paired accessory, require MFi enrolment, hardware certification and an Apple accessory licence. NFC tag reading does not - it is part of the standard iOS developer surface, open to any developer.

You still need the **Core NFC tag reading entitlement** and your ISO 7816 application identifiers declared in `Info.plist`. Both are free, requested through your existing Apple Developer account, and unrelated to MFi. See [Mobile SDKs](/docs/developers/mobile-sdks) for the setup.

## Enterprise Attestation

Implemented in firmware, **currently disabled**. Requests for enterprise attestation will not return a uniquely identifying attestation.

Standard `basic_full` attestation is available and is what enterprise key restriction policies actually consume - allowing an AAGUID does not require enterprise attestation.

## Verifying This Yourself

None of the above requires trusting this page.

- The FIDO certification and metadata statement are published in the [FIDO Alliance directory](https://app.fido.cyber-pass.org/certificates/search).
- The firmware is AGPLv3 - see [Repositories](/docs/developers/repositories).
- `authenticatorGetInfo` can be read from any device you hold, using standard CTAP2 tooling or the [Python library](/docs/developers/python-library-and-cli).

## FAQ

<details>
<summary>What is the AAGUID of Seedkeeper PRO?</summary>

`328dec20-698f-5d33-aed3-97daba53b1b0`. This is the value to allow in an enterprise key restriction policy such as Microsoft Entra ID.

</details>

<details>
<summary>Which signature algorithms does Seedkeeper PRO support?</summary>

ES256 only, that is `secp256r1_ecdsa_sha256_raw`, COSE identifier `-7`. Relying parties that restrict `pubKeyCredParams` to RS256 or EdDSA will fail to register.

</details>

<details>
<summary>Does Seedkeeper PRO support hmac-secret and PRF?</summary>

Yes. The `hmac-secret` CTAP2 extension is supported, and it has been confirmed working end to end through the WebAuthn `prf` extension in Chromium-based browsers - including deriving a vault decryption key in Bitwarden. Browser support for exposing `prf` varies, so test against your target browsers.

</details>

<details>
<summary>How many passkeys can Seedkeeper PRO store?</summary>

Up to 90 discoverable credentials, plus 50 OTP credentials. Non-discoverable credentials consume no on-device storage.

</details>

<details>
<summary>Does Seedkeeper PRO work over USB?</summary>

No. Transports are NFC for both form factors, plus ISO 7816 contact for the card. There is no USB and no Bluetooth, which is also why the device has no battery.

</details>

<details>
<summary>Does an iOS integration require Apple MFi certification?</summary>

No. MFi applies to accessories connecting over Lightning or as Bluetooth accessories. Seedkeeper PRO communicates over NFC only, which is part of the standard iOS developer surface. You need the Core NFC tag reading entitlement, which is free and unrelated to MFi.

</details>

<details>
<summary>Does Seedkeeper PRO support enterprise attestation?</summary>

It is implemented in firmware but currently disabled. Standard `basic_full` attestation is available, which is what AAGUID-based key restriction policies rely on.

</details>

<details>
<summary>What does clientPin false mean in the metadata?</summary>

That no PIN is currently set on the device the metadata was read from. The client PIN protocol is supported; the flag reports current state rather than capability.

</details>

## Related Articles

- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
- [WebAuthn Quickstart](/docs/developers/webauthn-quickstart)
- [Python Library and CLI](/docs/developers/python-library-and-cli)
- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
