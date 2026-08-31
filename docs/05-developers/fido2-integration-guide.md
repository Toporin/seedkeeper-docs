---
title: "FIDO2 Integration Guide"
description: "Attestation, AAGUID allowlists, credProtect, hmac-secret and enterprise policy. The parts of FIDO2 that go beyond a basic WebAuthn integration."
keywords: [FIDO2 integration, attestation verification, AAGUID allowlist, key restriction policy, credProtect, hmac-secret PRF, enterprise passkey policy]
sidebar_position: 4
sidebar_label: "FIDO2 Integration Guide"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "When should a service request attestation?", a: "Only when policy depends on knowing which hardware was used - enforcing hardware-bound credentials, evidencing device models, or meeting a regulatory requirement. Consumer services should request none."},
  {q: "How do I restrict registration to specific hardware?", a: "Request attestation, extract the AAGUID from the authenticator data, and compare it against an allowlist. For Seedkeeper PRO the value is 328dec20-698f-5d33-aed3-97daba53b1b0."},
  {q: "Does an AAGUID identify an individual device?", a: "No. It identifies a make and model. Identifying a specific unit requires enterprise attestation, which on Seedkeeper PRO is implemented but currently disabled."},
  {q: "Can I use a passkey to derive an encryption key?", a: "Yes, through hmac-secret at the CTAP2 level and prf at the WebAuthn level. Seedkeeper PRO supports it, verified end to end in Chromium-based browsers - Bitwarden uses this path to decrypt a vault with the hardware passkey. Support outside Chromium is uneven, so design it as an enhancement with a fallback."},
  {q: "How do I enforce a minimum PIN length?", a: "Through the minPinLength extension and authenticatorConfig. Seedkeeper PRO supports raising the minimum above the 4-digit default, applied per device during provisioning."},
]} />

<p class="doc-subtitle">Attestation, Policy and the Extensions Worth Using</p>

<div class="tldr">

Once basic WebAuthn works, three things separate a consumer integration from an enterprise one: verifying **attestation** to know which hardware was used, restricting registration by **AAGUID**, and using extensions such as `credProtect` and `hmac-secret`. This page covers all three against Seedkeeper PRO specifically.

</div>

## When You Actually Need Attestation

Attestation lets you learn what kind of authenticator created a credential. Most services should not ask for it.

**Skip it** if you are a consumer service. You gain a verification burden and a privacy consideration, in exchange for information you will not act on.

**Request it** when policy depends on the answer: you need hardware-bound credentials rather than credentials synced to a personal cloud account, you must evidence which devices were used, or a regulator or insurer asks you to.

That last case is increasingly common - see [Passkeys and NIS2](/docs/security-academy/passkeys/passkey-vs-password#passkeys-and-nis2) and [Security and Compliance for Organizations](/docs/business/security-compliance-for-organizations).

## Requesting and Verifying It

```json
{ "attestation": "direct" }
```

Seedkeeper PRO returns **`basic_full`** attestation: a packed statement signed by a batch certificate identifying make and model, not the individual unit. That distinction is deliberate and is what keeps attestation from becoming a device-level tracking identifier.

Verification steps, in order:

1. Parse the attestation object and confirm the format
2. Validate the certificate chain against the FIDO Metadata Service
3. Extract the AAGUID from the authenticator data
4. Compare it against your policy

Use a library for steps 1 and 2. The FIDO Alliance publishes the [Metadata Service](https://fidoalliance.org/metadata/), and most WebAuthn server libraries consume it directly.

## Restricting by AAGUID

The AAGUID is a 16-byte identifier for a make and model. Seedkeeper PRO:

```
328dec20-698f-5d33-aed3-97daba53b1b0
```

An allowlist of AAGUIDs is how you enforce "company-issued hardware only" and exclude synced passkeys stored in personal iCloud or Google accounts.

Enforce it in two places. **At registration**, reject a credential whose AAGUID is not on the list, with a message explaining why rather than a generic failure. **In your identity provider**, if it supports key restriction natively - Microsoft Entra ID does, see [Configure Passkeys in Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id).

Two practical warnings. An allowlist needs maintaining as you approve new models. And an AAGUID identifies a model, never a specific unit - use your own registration records for that.

## Enterprise Attestation

Enterprise attestation returns a uniquely identifying attestation, tying a credential to one physical device rather than a model.

On Seedkeeper PRO it is **implemented in firmware and currently disabled**, so requests for it will not return uniquely identifying data.

This rarely blocks anything. AAGUID-based key restriction, which is what most enterprise policies actually use, relies on standard attestation and works today.

## Extensions Worth Using

Full list in [Device Capabilities](/docs/developers/device-capabilities#ctap2-extensions).

### `credProtect`

Sets a protection policy on a credential, controlling whether it can be discovered or used without user verification.

```json
"extensions": { "credentialProtectionPolicy": "userVerificationRequired" }
```

Useful when a credential must never be usable by someone who merely holds the device. Note that it changes the user experience - a PIN will be required every time.

### `hmac-secret` and WebAuthn PRF

`hmac-secret` lets a relying party derive a stable symmetric secret from a credential. The same input always produces the same output for that credential, and the secret never exists outside the authenticator.

The obvious application is **end-to-end encryption keyed to a passkey**: derive a key, encrypt client-side, and the data is unreadable without the physical device.

Seedkeeper PRO supports `hmac-secret`, and the full path has been verified: Chromium-based browsers map it onto `prf`, and Bitwarden uses it to derive a vault decryption key, so a user unlocks the vault with the hardware passkey instead of a master password.

Browser support for exposing `prf` is still uneven outside Chromium. Treat it as an enhancement rather than a requirement: derive the key when the extension is available, fall back to your existing mechanism when it is not, and never make the passkey the only route to the data unless the user has a second registered device.

### `minPinLength`

Lets a relying party read the enforced minimum PIN length, and lets an administrator raise it through `authenticatorConfig`. Seedkeeper PRO reports `setMinPINLength: true`.

Useful when a policy requires more than the 4-digit minimum. Raising it applies to the device, so plan how it is applied during provisioning - see [Python Library and CLI](/docs/developers/python-library-and-cli).

### `largeBlobs`

Storage attached to a credential, for data that should travel with the key rather than with the account. Supported, with the caveat that on-device storage is finite - see the limits in [Device Capabilities](/docs/developers/device-capabilities#storage-limits).

## Designing for Hardware-Bound Credentials

Two design consequences that a synced-passkey world lets you ignore.

**Multiple credentials per account are mandatory, not optional.** A hardware passkey cannot be copied, so redundancy means a second registration. If your model assumes one credential per user, hardware key users have no backup - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy).

**Deletion is two-sided.** Removing a credential from the device does not remove your stored record of it, and removing your record does not free the slot on the device. Expose credential management in your account settings, with names and last-used dates so users can identify which device is which.

## Testing Against Real Hardware

A virtual authenticator will not tell you what an NFC tap feels like.

Things worth exercising against a physical device: registration over NFC on both iOS and Android, a wrong-PIN attempt and the resulting error, a second credential on the same account, credential enumeration through `credMgmt`, and behaviour when the card is removed mid-operation.

That last one catches more bugs than any of the others.

## FAQ

<details>
<summary>When should a service request attestation?</summary>

Only when policy depends on knowing which hardware was used - enforcing hardware-bound credentials, evidencing device models, or meeting a regulatory requirement. Consumer services should request `none`.

</details>

<details>
<summary>How do I restrict registration to specific hardware?</summary>

Request attestation, extract the AAGUID from the authenticator data, and compare it against an allowlist. For Seedkeeper PRO the value is `328dec20-698f-5d33-aed3-97daba53b1b0`.

</details>

<details>
<summary>Does an AAGUID identify an individual device?</summary>

No. It identifies a make and model. Identifying a specific unit requires enterprise attestation, which on Seedkeeper PRO is implemented but currently disabled.

</details>

<details>
<summary>Can I use a passkey to derive an encryption key?</summary>

Yes, through `hmac-secret` at the CTAP2 level and `prf` at the WebAuthn level. Seedkeeper PRO supports it, verified end to end in Chromium-based browsers - Bitwarden uses this path to decrypt a vault with the hardware passkey. Support outside Chromium is uneven, so design it as an enhancement with a fallback.

</details>

<details>
<summary>How do I enforce a minimum PIN length?</summary>

Through the `minPinLength` extension and `authenticatorConfig`. Seedkeeper PRO supports raising the minimum above the 4-digit default, applied per device during provisioning.

</details>

## Related Articles

- [Device Capabilities](/docs/developers/device-capabilities)
- [WebAuthn Quickstart](/docs/developers/webauthn-quickstart)
- [Python Library and CLI](/docs/developers/python-library-and-cli)
- [Configure Passkeys in Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id)
- [Security and Compliance for Organizations](/docs/business/security-compliance-for-organizations)
