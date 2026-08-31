---
title: "How Passkeys Work"
description: "How passkey registration and sign-in actually work, step by step: key pairs, challenges, signatures, and the domain check that stops phishing."
keywords: [how do passkeys work, passkey registration, passkey authentication, WebAuthn flow, discoverable credentials, resident keys, AAGUID]
sidebar_position: 2
sidebar_label: "How Passkeys Work"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "If the private key never leaves, how can a passkey work on two devices?", a: "It can't - not the same one. Each device holds its own key pair, so using a second Seedkeeper PRO means registering an additional passkey with the service. Most services allow several. See Passkey Backup Strategy."},
  {q: "Could someone intercept the signature and reuse it?", a: "No. The challenge is random and single-use, so a captured signature answers a question that will never be asked again."},
  {q: "Is my FIDO PIN sent to the service?", a: "Never. It is verified locally by the secure element and goes no further. The service only learns that user verification succeeded, not how."},
  {q: "What stops a website from asking for a passkey it didn't create?", a: "The domain binding. A credential only responds to the relying party identifier it was registered with, and the browser enforces the match before the request reaches your device. See The Domain Check Is the Whole Trick above."},
  {q: "How many passkeys can a Seedkeeper PRO hold?", a: "Up to 90 discoverable credentials. In practice that covers every service a person or a team is realistically going to protect with a hardware passkey, with room to spare. See Discoverable and Non-Discoverable Credentials above."},
  {q: "Does the service know which device I used?", a: "Only if it asks for attestation and the authenticator provides it. Without that, the service sees a public key and nothing about the hardware behind it."},
]} />

<p class="doc-subtitle">What Happens Between the Tap and the Login</p>

<div class="tldr">

A [passkey](/docs/glossary/passkey) works in two phases. At registration, your authenticator generates a fresh key pair for that one service and sends only the public key. At every sign-in, the service issues a random challenge, your authenticator signs it with the private key, and the service verifies the signature. The private key never moves, and the authenticator refuses to sign for any domain other than the one the credential was created for.

</div>

## The Two Phases

Everything a passkey does falls into one of two moments: **registration**, which happens once per service, and **authentication**, which happens every time you sign in.

The distinction matters because the security guarantees come from different places. Registration is where the credential gets bound to a specific domain. Authentication is where that binding gets enforced. Skip either and you're back to something password-shaped.

[What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey) shows both phases as diagrams. This article walks through what each step actually does.

## Phase 1: Registration

When you add a passkey to an account, five things happen in sequence.

**1. The service issues a creation request.** It sends your browser a set of parameters: its own domain identifier, a random challenge, your user account reference, and which algorithms it accepts. The browser exposes this through the WebAuthn call `navigator.credentials.create()`.

**2. Your authenticator asks for consent.** Nothing is generated until you prove you're present and authorized. On Seedkeeper PRO, that means entering your FIDO PIN and physically tapping or connecting the device. This step is deliberate: it prevents a page from silently creating credentials in the background.

**3. A key pair is generated on the spot.** Your authenticator creates a brand new private and public key, specific to this one service. It is never derived from anything you've used elsewhere, which is why two accounts can never be correlated through their passkeys.

**4. The private key is written into hardware.** On Seedkeeper PRO it goes into the [secure element](/docs/glossary/secure-element), where it is created and stays. There is no export function and no API to read it out - not for you, not for the app, not for an attacker with the device in hand.

**5. Only the public key leaves.** The authenticator returns the public key, a credential identifier, and a signed statement about itself. The service stores these against your account. If that database leaks tomorrow, what leaks is a public key, which is worth nothing on its own.

## Phase 2: Authentication

Signing in reverses the flow.

**1. The service sends a challenge.** A fresh block of random data, different every single time. This is what makes a captured login attempt useless to replay: yesterday's signature doesn't answer today's challenge.

**2. The browser checks the domain.** Before anything reaches your authenticator, the browser confirms that the page requesting the signature is actually served from the domain the credential belongs to. This check is made by the browser itself, not by you looking at the address bar.

**3. Your authenticator verifies you.** PIN entry, plus the physical presence of the device. Only then does it unlock the private key for use.

**4. The challenge is signed.** The authenticator signs the challenge together with the domain identifier and its own data, and returns the signature. The private key is used, never revealed.

**5. The service verifies the signature.** Using the public key it stored at registration. If the maths works out, the signature could only have come from the matching private key, which exists in exactly one place in the world. You're in.

## The Domain Check Is the Whole Trick

This is the part worth understanding properly, because it's where passkeys beat every previous authentication method.

At registration, the credential is permanently tied to a **relying party identifier** - in practice, the service's domain. That identifier is baked into the credential and cannot be edited afterwards.

At authentication, the browser will only offer a credential whose identifier matches the domain currently in the address bar. A lookalike domain, however convincing the page, produces no match. Your authenticator is never even asked. There is no dialog, no warning, no "continue anyway" button, because there is nothing to decide.

Compare that with a password, which will happily be typed into anything with a text field. The [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked#phishing-email-and-fake-websites) article has a lookalike Microsoft page you can try to spot - proof that the human eye is the wrong tool for this job.

## Discoverable and Non-Discoverable Credentials

Not all passkeys are stored the same way, and the difference shows up in how you sign in.

- **Discoverable credentials** (also called resident keys) are stored in full on the authenticator, including which account they belong to. The device can list them on request. This is what makes usernameless sign-in possible: you present the device, and the service learns who you are from the credential itself.
- **Non-discoverable credentials** store nothing on the device. The private key is wrapped inside the credential identifier held by the service, and can only be reconstructed by the authenticator that created it. You have to identify yourself first so the service knows which credential to ask for.

Seedkeeper PRO stores discoverable credentials, which is why you can enumerate them from the Seedkeeper PRO App - see [Managing Passkeys](/docs/product-documentation/passkeys/managing-passkeys). It also means each one occupies a slot on the device, and Seedkeeper PRO holds **up to 90 of them** - comfortably more than the handful of services most people will ever protect this way. Non-discoverable credentials, by contrast, consume no storage at all, since nothing about them is kept on the device.

## Attestation: Proving What the Authenticator Is

At registration, an authenticator can optionally include a signed statement about its own make and model, identified by a value called an **AAGUID**. This lets an organization verify that a passkey was created on approved hardware rather than in a software vault.

Most consumer services ignore this entirely. Enterprise deployments often don't: an administrator can require attestation and allow only specific AAGUIDs, which is how you enforce a hardware-only policy. Seedkeeper PRO's AAGUID is `328dec20-698f-5d33-aed3-97daba53b1b0` - see [Configure Passkeys in Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id) for how that's applied in practice, and [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide) if you are implementing the check yourself.

## Two Standards, Two Jobs

The mechanics above are split across two specifications that work as a pair:

- **WebAuthn** handles the conversation between the website and the browser - the `create()` and `get()` calls, and the domain check.
- **CTAP2** handles the conversation between the browser and the authenticator - over NFC, USB, or Bluetooth.

Together they form [FIDO2](/docs/glossary/fido2). Neither is proprietary, which is why a Seedkeeper PRO passkey works on any compliant service without anyone's permission. See [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2).

## FAQ

<details>
<summary>If the private key never leaves, how can a passkey work on two devices?</summary>

It can't - not the same one. Each device holds its own key pair, so using a second Seedkeeper PRO means registering an additional passkey with the service. Most services allow several. See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy).

</details>

<details>
<summary>Could someone intercept the signature and reuse it?</summary>

No. The challenge is random and single-use, so a captured signature answers a question that will never be asked again.

</details>

<details>
<summary>Is my FIDO PIN sent to the service?</summary>

Never. It is verified locally by the secure element and goes no further. The service only learns that user verification succeeded, not how.

</details>

<details>
<summary>What stops a website from asking for a passkey it didn't create?</summary>

The domain binding. A credential only responds to the relying party identifier it was registered with, and the browser enforces the match before the request reaches your device. See [The Domain Check Is the Whole Trick](#the-domain-check-is-the-whole-trick) above.

</details>

<details>
<summary>How many passkeys can a Seedkeeper PRO hold?</summary>

Up to 90 discoverable credentials. In practice that covers every service a person or a team is realistically going to protect with a hardware passkey, with room to spare. See [Discoverable and Non-Discoverable Credentials](#discoverable-and-non-discoverable-credentials) above.

</details>

<details>
<summary>Does the service know which device I used?</summary>

Only if it asks for attestation and the authenticator provides it. Without that, the service sees a public key and nothing about the hardware behind it.

</details>

## Related Articles

- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
- [What is WebAuthn?](/docs/security-academy/passkeys/what-is-webauthn)
- [Managing Passkeys](/docs/product-documentation/passkeys/managing-passkeys)
- [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained)
- [Device Capabilities](/docs/developers/device-capabilities)
