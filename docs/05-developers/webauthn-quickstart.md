---
title: "WebAuthn Quickstart"
description: "Add passkey support with standard WebAuthn. Registration, authentication, the parameters that matter, and the mistakes that break hardware keys."
keywords: [WebAuthn quickstart, add passkey support, navigator.credentials.create, WebAuthn registration, security key integration, pubKeyCredParams]
sidebar_position: 3
sidebar_label: "WebAuthn Quickstart"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Do I need a special SDK to support hardware security keys?", a: "No. Standard WebAuthn is sufficient for any FIDO2-certified authenticator. Use a mature server-side library to handle verification rather than implementing it yourself."},
  {q: "Why does my site not detect an external security key?", a: "Most often authenticatorAttachment: \"platform\" in authenticatorSelection, which restricts registration to the device's built-in authenticator and excludes roaming keys. Leave the field unset."},
  {q: "Which algorithms should I list in pubKeyCredParams?", a: "At minimum ES256 (-7), ideally followed by RS256 (-257). ES256 is the only algorithm many hardware authenticators support, including Seedkeeper PRO."},
  {q: "Should I request attestation?", a: "Only if you are enforcing a hardware policy. For most consumer services none is correct: it avoids a verification burden and a privacy consideration for information you will not act on."},
  {q: "How many passkeys should I let a user register?", a: "Several. Hardware-bound passkeys cannot be copied, so a user with a backup device needs a second registration. Limiting accounts to one passkey forces a single point of failure."},
  {q: "Can I test WebAuthn without a physical key?", a: "Yes, with Chrome DevTools' virtual authenticator. Configure it for CTAP2 with resident keys to approximate a hardware authenticator, then confirm against real hardware before shipping."},
]} />

<p class="doc-subtitle">Accept Passkeys in About Fifteen Minutes</p>

<div class="tldr">

There is no Seedkeeper-specific code. Implement WebAuthn, get four parameters right, and every certified authenticator including Seedkeeper PRO works. This page covers the flow, the settings that break hardware keys specifically, and how to test.

</div>

## The Two Operations

WebAuthn has exactly two calls. Everything else is parameters.

**Registration** - `navigator.credentials.create()`. Your server issues a challenge, the authenticator generates a key pair, and you store the returned public key and credential ID against the user.

**Authentication** - `navigator.credentials.get()`. Your server issues a fresh challenge, the authenticator signs it, and you verify the signature against the stored public key.

[How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work) walks through what happens between those calls. The rest of this page is the parts implementers get wrong.

## Use a Library

Do not implement the verification yourself. Parsing attestation objects, validating signature counters and checking origins correctly is easy to get subtly wrong, and subtly wrong here means insecure.

Mature options exist for every stack: SimpleWebAuthn for Node, py_webauthn for Python, webauthn4j for Java, go-webauthn for Go. All of them handle the parts below correctly by default.

## Registration Parameters That Matter

### `pubKeyCredParams` - allow ES256

```json
"pubKeyCredParams": [
  { "type": "public-key", "alg": -7 },
  { "type": "public-key", "alg": -257 }
]
```

`-7` is ES256, and it is the **only** algorithm Seedkeeper PRO supports - see [Device Capabilities](/docs/developers/device-capabilities#cryptography). A service that lists only `-257` (RS256) will fail to register any ECDSA-only authenticator, which is most of them.

Include both, ES256 first.

### `authenticatorSelection` - do not exclude roaming keys

```json
"authenticatorSelection": {
  "residentKey": "preferred",
  "userVerification": "preferred"
}
```

The single most common mistake is setting `authenticatorAttachment: "platform"`. That restricts registration to Touch ID, Windows Hello and the device's own hardware, and silently excludes every external security key.

Leave `authenticatorAttachment` unset unless you specifically want to exclude roaming authenticators, in which case you are also excluding the use case where someone signs in from a machine they do not own.

Set `residentKey: "required"` only if you need usernameless sign-in. It consumes one of the 90 credential slots per registration, whereas non-discoverable credentials consume none.

### `attestation` - `none` unless you need it

```json
"attestation": "none"
```

Most consumer services should request `none`. You do not need to know which hardware was used, and requesting attestation adds a verification burden and a privacy consideration for no benefit.

Request `direct` only if you are enforcing a hardware policy - see [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide).

### `timeout` - be generous

NFC is slower than USB. Someone locating the reader on the back of a phone, tapping, entering a PIN and tapping again needs more than the 30 seconds some implementations default to.

Use 120 seconds. There is no downside.

## Authentication Parameters

```json
{
  "challenge": "<fresh random bytes>",
  "allowCredentials": [ { "type": "public-key", "id": "<stored credential id>" } ],
  "userVerification": "preferred",
  "timeout": 120000
}
```

Send `allowCredentials` populated with the user's registered credentials unless you are doing usernameless sign-in, in which case send it empty and let the authenticator offer its discoverable credentials.

## Server-Side Rules

Your library handles these; verify it does.

- **The challenge is random, single-use, and server-generated.** Never reuse one.
- **`origin` must match exactly**, including scheme and port.
- **`rpId` must be your registrable domain**, or a suffix of it. Getting this wrong is the most common cause of "it worked in dev and not in production".
- **Signature counter**: if the authenticator reports a counter, a decrease indicates cloning. Many modern authenticators report zero permanently, so do not treat zero as an error.

## Support Multiple Credentials Per User

This one matters more than it looks.

A hardware-bound passkey cannot be copied between devices. A user with a main device and a backup registers **two separate passkeys** with your service - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy).

If your implementation allows only one passkey per account, you force every hardware key user into a single point of failure. Allow several, show them in the account settings with a name and a last-used date, and let users remove one without removing all.

## Keep a Recovery Path

Users lose devices. Decide deliberately what happens then: a second registered credential, recovery codes, or a fallback method.

An account with a passkey and no recovery path generates support tickets. An account with a passkey and a weak recovery path is protected by the recovery path, not the passkey - see [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer).

## Testing

**Without hardware**, use a virtual authenticator. Chrome DevTools has one under `More tools → WebAuthn`, where you can set CTAP2, resident keys and user verification to match the profile in [Device Capabilities](/docs/developers/device-capabilities).

**With hardware**, you need NFC or a contact smartcard reader. There is no USB path, so a USB security key is not a substitute for testing this device.

Worth testing specifically: registration with `residentKey: "required"`, authentication with an empty `allowCredentials`, a second credential registered on the same account, and a wrong-PIN attempt.

## FAQ

<details>
<summary>Do I need a special SDK to support hardware security keys?</summary>

No. Standard WebAuthn is sufficient for any FIDO2-certified authenticator. Use a mature server-side library to handle verification rather than implementing it yourself.

</details>

<details>
<summary>Why does my site not detect an external security key?</summary>

Most often `authenticatorAttachment: "platform"` in `authenticatorSelection`, which restricts registration to the device's built-in authenticator and excludes roaming keys. Leave the field unset.

</details>

<details>
<summary>Which algorithms should I list in pubKeyCredParams?</summary>

At minimum ES256 (`-7`), ideally followed by RS256 (`-257`). ES256 is the only algorithm many hardware authenticators support, including Seedkeeper PRO.

</details>

<details>
<summary>Should I request attestation?</summary>

Only if you are enforcing a hardware policy. For most consumer services `none` is correct: it avoids a verification burden and a privacy consideration for information you will not act on.

</details>

<details>
<summary>How many passkeys should I let a user register?</summary>

Several. Hardware-bound passkeys cannot be copied, so a user with a backup device needs a second registration. Limiting accounts to one passkey forces a single point of failure.

</details>

<details>
<summary>Can I test WebAuthn without a physical key?</summary>

Yes, with Chrome DevTools' virtual authenticator. Configure it for CTAP2 with resident keys to approximate a hardware authenticator, then confirm against real hardware before shipping.

</details>

## Related Articles

- [Device Capabilities](/docs/developers/device-capabilities)
- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
- [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work)
- [What is WebAuthn?](/docs/security-academy/passkeys/what-is-webauthn)
