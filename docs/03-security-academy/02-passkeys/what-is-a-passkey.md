---
title: "What is a Passkey?"
description: "A passkey replaces your password with a cryptographic key pair - one kept secret on your device, one held by the service. Here's how it works."
keywords: [what is a passkey, passkey meaning, passkey explained, passwordless login, FIDO2, WebAuthn, hardware passkey]
sidebar_position: 1
sidebar_label: "What is a Passkey?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Is a passkey the same as biometric login?", a: "No, though they're often confused. Your fingerprint or face unlocks the device holding the private key - it isn't the credential itself and is never sent to the service. With Seedkeeper PRO, that unlock role is played by your FIDO PIN instead."},
  {q: "What happens if I lose my device?", a: "With hardware-bound passkeys, losing the device means losing those credentials - there is no cloud copy to restore from. This is why you register a second device or keep the service's recovery method available before you need it. See Passkey Recovery Strategy."},
  {q: "Do I need the Seedkeeper PRO App to sign in with a passkey?", a: "No. Your browser or operating system talks directly to the device over WebAuthn. The Seedkeeper PRO App is only needed to manage passkeys - setting the FIDO PIN, listing stored passkeys, or deleting one."},
  {q: "Can I use one passkey for several accounts?", a: "No, and that's deliberate. A separate key pair is generated for every service, so nothing links your accounts together and compromising one reveals nothing about the others."},
  {q: "Are passkeys widely supported yet?", a: "Support has moved quickly - Google, Microsoft, Amazon, PayPal, GitHub and many others now accept them. Coverage is still uneven, so most people run passkeys alongside passwords rather than replacing them everywhere at once. Our step-by-step tutorials cover the services that support them today, including Google, Microsoft and webshops."},
]} />

<p class="doc-subtitle">Signing In Without a Shared Secret</p>

<div class="tldr">

A passkey is a pair of cryptographic keys that replaces your [password](/docs/security-academy/password-security/what-is-a-password). The private key never leaves your device and is never sent anywhere; the service only ever holds the matching public key. Because there is no shared secret to type, leak, or hand to a fake login page, passkeys can't be phished or stolen in a data breach.

</div>

## The Simple Definition

A passkey is a login credential made of two mathematically linked keys: a **private key** that stays on your device, and a **public key** that the service stores in your account.

This happens in two moments. First, when you create the passkey: your browser asks your authenticator to generate a fresh key pair for that specific service, and only the public key is sent to the server.

<img src="/img/diagrams/passkey-registration-flow.png" alt="Passkey registration: the browser calls navigator.credentials.create(), the authenticator generates a key pair, and only the public key is sent to the server" style={{width: '60%', maxWidth: 'none'}} />

Then, every time you sign in: the server sends your device a random challenge. Your device signs it with the private key and sends the signature back. The server checks that signature against the public key it already has. If it validates, you're in.

<img src="/img/diagrams/passkey-authentication-flow.png" alt="Passkey authentication: the server sends a challenge, the authenticator signs it after a PIN or screen unlock, and the server validates the signature with the stored public key" style={{width: '60%', maxWidth: 'none'}} />

The private key itself is never transmitted. Not during registration, not during login, not ever. That single difference is what makes passkeys fundamentally unlike passwords - and it's worth reading [What is a Password?](/docs/security-academy/password-security/what-is-a-password) alongside this article to see exactly what changes.

## What Makes It Different From a Password

A [password](/docs/glossary/password) is a shared secret: you know it, and the service knows it (or knows a hash of it). Both sides hold something that could be stolen from either side.

A passkey is asymmetric. The service holds a public key, which is - as the name says - public. It is useless to an attacker on its own. You can post it on a billboard and nobody can log in with it. Everything of value stays on your device, protected by hardware.

This flips the security model. With passwords, a breach at the service exposes you. With passkeys, a breach at the service exposes a list of public keys and nothing more.

## Why Passkeys Can't Be Phished

Phishing works because a password is portable. If a convincing fake page can get you to type it, the attacker has the real thing and can use it on the real site. It is one of the most common ways credentials are stolen - see [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked#phishing-email-and-fake-websites), which includes a lookalike login page you can try to spot yourself.

A passkey doesn't work that way. During registration, your device permanently binds the credential to the service's exact domain. When a fake page asks your device to sign in, the domain doesn't match what the passkey was created for, so your device simply refuses. There is no prompt to override, no warning to click through, nothing for you to get wrong.

This is not user education or a smarter filter. It is a structural property of the protocol - the attack has no surface to work with.

## Where the Private Key Lives

This is where passkeys differ most in practice, and where the real security trade-off sits.

- **Synced passkeys** are stored in a software vault - Apple iCloud Keychain, Google Password Manager, or a password manager - and copied across your devices through that provider's cloud. Convenient, but your credentials are only as secure as that account.
- **Hardware-bound passkeys** are generated inside a dedicated [secure element](/docs/glossary/secure-element) and physically cannot be exported. They exist on one device and nowhere else. There is no cloud copy to compromise, and no provider account standing between you and your credentials.

Seedkeeper PRO uses the second model. Passkeys are created inside an EAL6+ certified secure element and never leave it, which is also why they are not transferred by a device-to-device backup - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy) for how to plan around that.

## What You Actually Do

The cryptography is invisible in daily use. In practice:

1. On the service's security settings, you choose to add a passkey.
2. You tap your Seedkeeper PRO to your phone, or plug it in on desktop.
3. You enter your FIDO PIN and confirm.

From then on, signing in means presenting the device and entering the PIN. No password to remember, no code to copy before it expires, no second app to open.

The PIN is worth understanding correctly: it unlocks the device locally and is never transmitted to the service. It is what stops someone who physically steals your Seedkeeper PRO from using it - the second factor in "something you have, something you know", the pairing described in [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained).

## The Standards Behind It

Passkeys aren't a proprietary feature. They're an open standard, built on two specifications:

- **[FIDO2](/docs/glossary/fido2)** - the overall framework, defined by the FIDO Alliance, covering how authenticators and services talk to each other.
- **[WebAuthn](/docs/glossary/webauthn)** - the browser-side API that lets a website request a signature from your authenticator.

Because they're open standards, a passkey created with Seedkeeper PRO works with any service that supports FIDO2, on any operating system, with no vendor lock-in. See [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2) for the full picture.

## FAQ

<details>
<summary>Is a passkey the same as biometric login?</summary>

No, though they're often confused. Your fingerprint or face unlocks the device holding the private key - it isn't the credential itself and is never sent to the service. With Seedkeeper PRO, that unlock role is played by your FIDO PIN instead.

</details>

<details>
<summary>What happens if I lose my device?</summary>

With hardware-bound passkeys, losing the device means losing those credentials - there is no cloud copy to restore from. This is why you register a second device or keep the service's recovery method available before you need it. See [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy).

</details>

<details>
<summary>Do I need the Seedkeeper PRO App to sign in with a passkey?</summary>

No. Your browser or operating system talks directly to the device over WebAuthn. The Seedkeeper PRO App is only needed to manage passkeys - setting the FIDO PIN, listing stored passkeys, or deleting one.

</details>

<details>
<summary>Can I use one passkey for several accounts?</summary>

No, and that's deliberate. A separate key pair is generated for every service, so nothing links your accounts together and compromising one reveals nothing about the others.

</details>

<details>
<summary>Are passkeys widely supported yet?</summary>

Support has moved quickly - Google, Microsoft, Amazon, PayPal, GitHub and many others now accept them. Coverage is still uneven, so most people run passkeys alongside passwords rather than replacing them everywhere at once. Our step-by-step tutorials cover the services that support them today, including [Google](/docs/category/google/), [Microsoft](/docs/category/microsoft/) and [webshops](/docs/category/webshop/).

</details>

## Related Articles

- [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work)
- [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password)
- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
- [What is a Password?](/docs/security-academy/password-security/what-is-a-password)
- [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained)
- [Creating Your First Passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
