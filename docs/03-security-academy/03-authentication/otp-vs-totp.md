---
title: "OTP vs TOTP"
description: "OTP is the general concept, TOTP the time-based version almost everyone uses. How TOTP and counter-based HOTP differ, and which one you actually have."
keywords: [OTP vs TOTP, HOTP vs TOTP, counter based vs time based, difference OTP TOTP, one time password types]
sidebar_position: 6
sidebar_label: "OTP vs TOTP"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is the difference between OTP and TOTP?", a: "OTP is the general concept of a single-use code. TOTP is the specific implementation where the code is derived from a shared secret and the current time, changing every thirty seconds. Every TOTP code is an OTP."},
  {q: "What is the difference between HOTP and TOTP?", a: "HOTP derives the code from a counter that increments with each use, so the code stays valid until used. TOTP derives it from the current time, so it expires automatically. TOTP is what almost every authenticator implements today."},
  {q: "Which is more secure, HOTP or TOTP?", a: "TOTP, in practice. Its codes expire on their own, so a code captured and never used becomes worthless within thirty seconds, whereas an unused HOTP code can remain valid indefinitely."},
  {q: "How do I know which type my authenticator uses?", a: "If the code changes by itself on a countdown, it is TOTP. If it only changes when you press a button and then stays put, it is HOTP."},
]} />

<p class="doc-subtitle">One Is the Category, the Other Is the Method</p>

<div class="tldr">

These aren't competitors. **OTP** is the general idea of a single-use code; **TOTP** is the specific implementation where the code is derived from the current time and changes every thirty seconds. The other implementation, **HOTP**, uses a counter instead. If you're using an authenticator app, you have TOTP.

</div>

## The Relationship in One Line

**Every TOTP code is an OTP. Not every OTP is a TOTP.**

OTP describes what the code does: it works once, then it's spent. TOTP describes how it's produced: from a shared secret plus the current time. See [What is OTP?](/docs/security-academy/authentication/what-is-otp) for the general concept.

Asking "OTP or TOTP" is a bit like asking "vehicle or car". The useful comparison is between the two ways of building one.

## The Two Implementations

Both start from the same shared seed. They differ only in the moving value combined with it.

| | HOTP (counter-based) | TOTP (time-based) |
|---|---|---|
| **Moving value** | A counter, incremented per code | The current time, in 30-second windows |
| **Standard** | RFC 4226 | RFC 6238 |
| **Code expires** | ❌ No - valid until used | ✅ Yes - every 30 seconds |
| **Needs a synced clock** | ✅ No | ❌ Yes, roughly |
| **Can fall out of sync** | ❌ Yes, if codes are generated but unused | ✅ No - time never desynchronises |
| **Common today** | Rare, some banking tokens | Virtually universal |
| **Main weakness** | A generated code stays valid indefinitely | A 30-second window is ample for a relay attack |

## Why TOTP Won

Three reasons, and they compound.

**Codes expire on their own.** An HOTP code generated and never used remains valid indefinitely - a screenshot from last year still works. A TOTP code is dead in thirty seconds whether you use it or not.

**No counter to desynchronise.** HOTP breaks in a specific and annoying way: press the button a few times without submitting anything, and your counter runs ahead of the server's. Servers compensate by checking a window of upcoming values, but push far enough and the token needs resynchronising. Time has no such problem - both sides read the same clock.

**Nothing to store.** A TOTP implementation doesn't have to persist a counter that must stay consistent, which makes it far simpler to get right in software and hardware alike.

## Which One Do You Have?

Almost certainly TOTP.

**You have TOTP** if your code changes on its own every thirty seconds, usually with a countdown ring. Every authenticator app works this way, and so does a Seedkeeper PRO - see [What is TOTP?](/docs/security-academy/authentication/what-is-totp).

**You have HOTP** if you press a button on a small dedicated token and the code sits there until you use it. These are still issued by some banks and older enterprise systems.

**Neither** if the code arrives by SMS or email. Those are one-time passwords delivered over a channel rather than generated locally, and they carry an entirely different risk - see [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## What Neither of Them Fixes

Both are one-time passwords, so both share the same two structural limits.

The seed is a **shared secret**, held by you and the service. If the service's copy leaks, an attacker can generate your codes without touching your device.

And both are **information you read and type**, which means both can be relayed by a convincing fake page in real time. See [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp).

Choosing TOTP over HOTP is choosing the better of two good options. Choosing a passkey where one is offered is choosing a different category.

## FAQ

<details>
<summary>What is the difference between OTP and TOTP?</summary>

OTP is the general concept of a single-use code. TOTP is the specific implementation where the code is derived from a shared secret and the current time, changing every thirty seconds. Every TOTP code is an OTP.

</details>

<details>
<summary>What is the difference between HOTP and TOTP?</summary>

HOTP derives the code from a counter that increments with each use, so the code stays valid until used. TOTP derives it from the current time, so it expires automatically. TOTP is what almost every authenticator implements today.

</details>

<details>
<summary>Which is more secure, HOTP or TOTP?</summary>

TOTP, in practice. Its codes expire on their own, so a code captured and never used becomes worthless within thirty seconds, whereas an unused HOTP code can remain valid indefinitely.

</details>

<details>
<summary>How do I know which type my authenticator uses?</summary>

If the code changes by itself on a countdown, it is TOTP. If it only changes when you press a button and then stays put, it is HOTP.

</details>

## Related Articles

- [What is OTP?](/docs/security-academy/authentication/what-is-otp)
- [What is TOTP?](/docs/security-academy/authentication/what-is-totp)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
