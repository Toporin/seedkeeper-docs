---
title: "Authentication Factors Explained"
description: "Something you know, something you have, something you are - the three categories every authentication method falls into, and why mixing them matters."
keywords: [authentication factors, something you know have are, knowledge possession inherence, multi-factor authentication, authentication types]
sidebar_position: 1
sidebar_label: "Authentication Factors Explained"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What are the three authentication factors?", a: "Something you know (passwords, PINs), something you have (a phone, a security key), and something you are (fingerprint, face). Genuine multi-factor authentication combines two different categories, not two methods from the same one."},
  {q: "Is a password plus a security question two-factor authentication?", a: "No. Both are knowledge factors, so a single phishing page can collect both. Two factors from the same category add convenience for the attacker more than security for you."},
  {q: "Which factor is the strongest?", a: "Possession, when the secret lives in hardware that cannot export it. A password can be phished remotely and a biometric cannot be changed once compromised, but a secure element requires physical theft and still refuses to work without its PIN."},
  {q: "Is biometric login a separate factor from my device?", a: "Usually not, in practice. Your fingerprint typically unlocks a credential stored on the device rather than being sent anywhere, so what the service actually receives is proof of possession plus proof that a local check succeeded."},
]} />

<p class="doc-subtitle">The Three Categories Everything Falls Into</p>

<div class="tldr">

Every way of proving who you are belongs to one of three categories: something you **know** (a password, a PIN), something you **have** (a phone, a security key), or something you **are** (a fingerprint, a face). Real security comes from combining categories, not from stacking two things in the same one.

</div>

## Why Categories Matter More Than Methods

There are dozens of authentication methods and only three underlying categories. That's the useful part, because each category fails in its own way.

- **Something you know** can be guessed, phished, or leaked - it's just information, and information copies perfectly.
- **Something you have** must be stolen physically, or its contents extracted, which is far harder at scale.
- **Something you are** cannot be forgotten or left at home, but also cannot be changed once compromised.

An attacker who defeats one category still faces the others. That is the entire logic behind [multi-factor authentication](/docs/security-academy/authentication/what-is-mfa), and it explains why two passwords are not twice as safe as one.

## Something You Know

Knowledge factors are the oldest and still the most common: passwords, PINs, security questions, patterns.

Their weakness is structural. Anything you can recall, you can also be tricked into typing somewhere else, and anything a service stores can leak. See [What is a Password?](/docs/security-academy/password-security/what-is-a-password) and [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked).

Security questions deserve a specific warning: your mother's maiden name and the street you grew up on are not secrets, they're research. Treat them as extra passwords and store random answers rather than true ones.

## Something You Have

Possession factors prove you're holding a specific object: a phone receiving a code, an app generating one, or a hardware security key.

They vary enormously in strength, and the difference is worth understanding:

| Method | Category | Weakness |
|---|---|---|
| SMS code | Something you have (a phone number) | The number can be transferred to an attacker - see [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp) |
| Authenticator app | Something you have (a device) | The seed lives in app storage on a general-purpose phone |
| Hardware security key | Something you have (a chip) | Must be physically stolen, and still needs a PIN |

A hardware key is the strongest of the three because the secret is generated inside a secure element and cannot be read back out - not by malware, not by the app, not by whoever picks it up.

## Something You Are

Inherence factors measure your body: fingerprint, face, iris, voice.

Two things are commonly misunderstood here.

**Biometrics usually unlock a device rather than authenticate to a service.** When you use Face ID to sign in somewhere, your face is not sent anywhere - it unlocks a credential held locally. This is exactly how [passkeys](/docs/glossary/passkey) work, and why a Seedkeeper PRO substitutes a PIN for that unlock step with no loss of security.

**You cannot revoke a fingerprint.** A leaked password takes a minute to change. A compromised biometric template is permanent, which is why serious systems store a mathematical representation rather than an image, and keep it on the device.

## Combining Categories Is the Whole Point

Two factors from the same category add little. A password plus a security question is two things you know, and one phishing page collects both.

A password plus a one-time code is genuinely two categories - knowledge and possession - and that is why [2FA](/docs/security-academy/authentication/what-is-2fa) works as well as it does against leaked credentials.

A [passkey](/docs/security-academy/passkeys/what-is-a-passkey) is unusual in that it folds two categories into one gesture: the device is something you have, and the PIN unlocking it is something you know. That's why it can replace the password entirely rather than sitting on top of it.

## What About Location and Behaviour?

Some systems add contextual signals - where you are signing in from, what time it is, how you type or move a mouse. These are sometimes described as a fourth and fifth factor.

They're useful as risk signals, and weak as factors. Location can be spoofed, and behaviour is probabilistic rather than a yes-or-no answer. Treat them as a way to decide when to ask for a real factor, not as a replacement for one.

## FAQ

<details>
<summary>What are the three authentication factors?</summary>

Something you know (passwords, PINs), something you have (a phone, a security key), and something you are (fingerprint, face). Genuine multi-factor authentication combines two different categories, not two methods from the same one.

</details>

<details>
<summary>Is a password plus a security question two-factor authentication?</summary>

No. Both are knowledge factors, so a single phishing page can collect both. Two factors from the same category add convenience for the attacker more than security for you.

</details>

<details>
<summary>Which factor is the strongest?</summary>

Possession, when the secret lives in hardware that cannot export it. A password can be phished remotely and a biometric cannot be changed once compromised, but a secure element requires physical theft and still refuses to work without its PIN.

</details>

<details>
<summary>Is biometric login a separate factor from my device?</summary>

Usually not, in practice. Your fingerprint typically unlocks a credential stored on the device rather than being sent anywhere, so what the service actually receives is proof of possession plus proof that a local check succeeded.

</details>

## Related Articles

- [What is MFA?](/docs/security-academy/authentication/what-is-mfa)
- [What is 2FA?](/docs/security-academy/authentication/what-is-2fa)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
- [What is a Password?](/docs/security-academy/password-security/what-is-a-password)
