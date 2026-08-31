---
title: "What is OTP?"
description: "A one-time password is a code valid for a single use. How OTP works, the difference between counter-based and time-based codes, and where it fits."
keywords: [what is OTP, one-time password, OTP meaning, HOTP, TOTP, one time code authentication]
sidebar_position: 4
sidebar_label: "What is OTP?"
---

import BuySeedkeeperPro from '@site/docs/_buy-seedkeeper-pro.mdx';
import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is a one-time password?", a: "A short code, usually six digits, valid for a single login or a brief time window. It is computed from a secret shared with the service at setup, so both sides produce the same code without any network connection."},
  {q: "What is the difference between OTP and TOTP?", a: "OTP is the general concept of a single-use code. TOTP is the specific time-based implementation where the code changes every thirty seconds. Almost every authenticator app produces TOTP codes."},
  {q: "Why do OTP codes work without internet?", a: "Because your device and the service each hold the same seed and apply the same algorithm to the current time. Neither needs to contact the other to agree on the answer."},
  {q: "Can OTP codes be phished?", a: "Yes. A code is information you read and type, so a fake login page can collect it and relay it to the real service within the valid window. Only domain-bound credentials such as passkeys prevent this."},
  {q: "Is an OTP the same as an SMS code?", a: "An SMS code is one way of delivering a one-time password, but a weak one, because it depends on your phone number rather than a secret held on your device. See SMS vs TOTP."},
]} />

<p class="doc-subtitle">A Password That Only Works Once</p>

<div class="tldr">

A one-time password is a code valid for a single use, or for a short window. It's generated from a secret shared between you and the service at setup, so both sides can compute the same answer independently, with no network needed. OTP is what makes the second factor in most [2FA](/docs/security-academy/authentication/what-is-2fa) setups.

</div>

## The Definition

An OTP is a short code - usually six digits - that authenticates a single login attempt and then becomes worthless.

That expiry is the entire point. A regular password stays valid until you change it, so anyone who captures it once can reuse it indefinitely. A one-time password captured after use answers a question nobody will ask again.

## How the Code Is Generated

At setup, the service generates a random **seed** and shares it with you, normally through a QR code. From then on, both sides hold the same secret and can compute codes independently. No network connection is needed at any point, which is why an authenticator works in airplane mode.

The code itself is produced by combining the seed with a **moving value**, and the choice of that value gives the two OTP families:

**Counter-based (HOTP).** The moving value is a counter that increments each time a code is generated. The code stays valid until used. Rare today, mostly seen in banking hardware tokens.

**Time-based (TOTP).** The moving value is the current time, in thirty-second slices. The code changes on its own and expires whether you use it or not. This is what virtually every authenticator app and hardware authenticator implements - see [What is TOTP?](/docs/security-academy/authentication/what-is-totp) and [OTP vs TOTP](/docs/security-academy/authentication/otp-vs-totp).

## The Shared Secret Is the Trade-Off

This is the structural property worth understanding, because everything else follows from it.

**Both you and the service hold the same seed.** That symmetry is what lets the code be verified offline, and it is also the weakness: if the service's copy leaks in a breach, an attacker can generate your codes indefinitely without ever touching your device, and without you noticing.

Contrast this with a [passkey](/docs/glossary/passkey), where the service holds only a public key that produces nothing on its own. See [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#the-shared-secret-problem).

## OTP Is Not Phishing-Resistant

A one-time code is information you read and type. A convincing fake page can ask for it and relay it to the real site within the valid window - which is exactly how commercial phishing kits operate.

This does not make OTP worthless. It defeats every attack based on a leaked or reused password, which is most of them. It simply does not defeat the attack that targets you directly. See [Why OTP Is Still Phishable](/docs/security-academy/passkeys/passkey-vs-otp#why-otp-is-still-phishable).

## Where the Seed Lives Matters

Deciding to use OTP is only half the decision. The other half is what holds the seed.

- **An authenticator app** stores it in app storage on a phone that also browses the web and installs software. Fine on a healthy phone; less so on a compromised one. Cloud-backed apps add a vendor account to the chain.
- **A hardware authenticator** writes it into a secure element where it can never be read back out - not by malware, not by the app that put it there. A Seedkeeper PRO works this way, which is also why OTP secrets cannot be cloned between devices. See [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

<BuySeedkeeperPro />

## FAQ

<details>
<summary>What is a one-time password?</summary>

A short code, usually six digits, valid for a single login or a brief time window. It is computed from a secret shared with the service at setup, so both sides produce the same code without any network connection.

</details>

<details>
<summary>What is the difference between OTP and TOTP?</summary>

OTP is the general concept of a single-use code. TOTP is the specific time-based implementation where the code changes every thirty seconds. Almost every authenticator app produces TOTP codes.

</details>

<details>
<summary>Why do OTP codes work without internet?</summary>

Because your device and the service each hold the same seed and apply the same algorithm to the current time. Neither needs to contact the other to agree on the answer.

</details>

<details>
<summary>Can OTP codes be phished?</summary>

Yes. A code is information you read and type, so a fake login page can collect it and relay it to the real service within the valid window. Only domain-bound credentials such as passkeys prevent this.

</details>

<details>
<summary>Is an OTP the same as an SMS code?</summary>

An SMS code is one way of delivering a one-time password, but a weak one, because it depends on your phone number rather than a secret held on your device. See SMS vs TOTP.

</details>

## Related Articles

- [What is TOTP?](/docs/security-academy/authentication/what-is-totp)
- [OTP vs TOTP](/docs/security-academy/authentication/otp-vs-totp)
- [What is 2FA?](/docs/security-academy/authentication/what-is-2fa)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
