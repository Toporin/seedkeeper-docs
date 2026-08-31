---
title: "Developer Overview"
description: "What you need depends on what you are building. Most integrations need no Seedkeeper code at all - here is how to tell which case you are in."
keywords: [Seedkeeper developer, FIDO2 integration, WebAuthn integration, hardware security key SDK, passkey developer guide]
sidebar_position: 1
sidebar_label: "Developer Overview"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Do I need an SDK to support Seedkeeper PRO in my service?", a: "No. Seedkeeper PRO is a FIDO2 CTAP2.1 authenticator, so implementing standard WebAuthn is sufficient. The browser handles all communication with the device; your code never touches it directly."},
  {q: "Do I need a partnership or agreement with Satochip?", a: "No. FIDO2 is an open standard with no licence fee and no gatekeeper. Any service implementing WebAuthn correctly works with the device without any involvement from us."},
  {q: "When would I use the Seedkeeper libraries?", a: "Only when driving the device directly rather than authenticating against it: provisioning devices, setting PINs, loading OTP credentials, scripting deployments, or building a mobile app that talks to the device over NFC."},
  {q: "Is the source code available?", a: "Yes, everything is published under AGPLv3 - firmware, mobile and desktop apps, and the Python tooling. See Repositories for the full list."},
]} />

<p class="doc-subtitle">Start Here to Find Out What You Actually Need</p>

<div class="tldr">

Seedkeeper PRO is a FIDO2 CTAP2.1 authenticator. If you are building a service that accepts passkeys, you need **no Seedkeeper-specific code** - implement WebAuthn and the device works, the same way any certified authenticator does. Seedkeeper libraries only matter if you are driving the device directly: provisioning, tooling, or a custom app.

</div>

## Which Case Are You In?

| What you're building | What you need |
|---|---|
| A website or service that accepts passkeys | Standard WebAuthn. See [WebAuthn Quickstart](/docs/developers/webauthn-quickstart) |
| An enterprise deployment restricting which hardware qualifies | AAGUID and attestation. See [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide) |
| Provisioning devices in volume, or internal tooling | [Python Library and CLI](/docs/developers/python-library-and-cli) |
| A mobile app that talks to the device over NFC | [Mobile SDKs](/docs/developers/mobile-sdks) |
| Evaluating whether the hardware fits your requirements | [Device Capabilities](/docs/developers/device-capabilities) |

## Why Most Integrations Need No SDK

This is worth stating plainly, because vendor documentation usually implies otherwise.

FIDO2 is an open standard with two halves. **WebAuthn** is a browser API - your service calls `navigator.credentials.create()` and `get()`, and the browser handles the rest. **CTAP2** is the protocol between the browser and the authenticator, and it is the browser's job, not yours.

Your code never touches the device. It never learns which authenticator answered unless it asks for attestation. There is no Seedkeeper library to install, no partnership to sign, and nothing that would break if we disappeared tomorrow.

That is the intended outcome of an open standard, and it means the fastest path to supporting Seedkeeper PRO is to support WebAuthn properly. See [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2) for the background.

## When You Do Need Our Code

Three cases, all of them about driving the device rather than authenticating against it.

**Provisioning and tooling.** Setting a FIDO PIN, loading OTP credentials, resetting applets, or scripting any of that across many devices. [`seedkeeper-manager`](/docs/developers/python-library-and-cli) is a Python library and CLI for exactly this.

**Mobile apps.** Talking to the device over NFC from iOS or Android requires a transport layer. We maintain forks of the Yubico mobile SDKs - see [Mobile SDKs](/docs/developers/mobile-sdks).

**Reference implementations.** The iOS and Flutter apps are open source and show a complete working integration end to end. See [Repositories](/docs/developers/repositories).

## Everything Is AGPLv3

Firmware, apps, libraries. You can read the implementation, verify what it does, and build from source.

That has a practical consequence for integrators: if a claim in this documentation matters to your evaluation, you can check it against the code rather than taking our word for it.

## Where to Go Next

- **Evaluating the hardware?** [Device Capabilities](/docs/developers/device-capabilities) has the raw metadata: algorithms, extensions, limits, transports.
- **Adding passkey support?** [WebAuthn Quickstart](/docs/developers/webauthn-quickstart).
- **Looking for a specific repository?** [Repositories](/docs/developers/repositories).

## FAQ

<details>
<summary>Do I need an SDK to support Seedkeeper PRO in my service?</summary>

No. Seedkeeper PRO is a FIDO2 CTAP2.1 authenticator, so implementing standard WebAuthn is sufficient. The browser handles all communication with the device; your code never touches it directly.

</details>

<details>
<summary>Do I need a partnership or agreement with Satochip?</summary>

No. FIDO2 is an open standard with no licence fee and no gatekeeper. Any service implementing WebAuthn correctly works with the device without any involvement from us.

</details>

<details>
<summary>When would I use the Seedkeeper libraries?</summary>

Only when driving the device directly rather than authenticating against it: provisioning devices, setting PINs, loading OTP credentials, scripting deployments, or building a mobile app that talks to the device over NFC.

</details>

<details>
<summary>Is the source code available?</summary>

Yes, everything is published under AGPLv3 - firmware, mobile and desktop apps, and the Python tooling. See Repositories for the full list.

</details>

## Related Articles

- [Device Capabilities](/docs/developers/device-capabilities)
- [WebAuthn Quickstart](/docs/developers/webauthn-quickstart)
- [Repositories](/docs/developers/repositories)
- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
