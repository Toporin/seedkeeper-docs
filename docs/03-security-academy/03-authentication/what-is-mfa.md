---
title: "What is MFA?"
description: "Multi-factor authentication means proving your identity with two or more different categories of evidence. What counts, what doesn't, and where it fails."
keywords: [what is MFA, multi-factor authentication, MFA meaning, MFA vs 2FA, phishing resistant MFA, adaptive MFA]
sidebar_position: 2
sidebar_label: "What is MFA?"
---

import FaqSchema from '@site/src/components/FaqSchema';
import BuySeedkeeperPro from '@site/docs/_buy-seedkeeper-pro.mdx';

<FaqSchema items={[
  {q: "What is multi-factor authentication?", a: "An authentication process requiring evidence from two or more different categories - something you know, something you have, something you are - before access is granted. Two proofs from the same category do not qualify."},
  {q: "What is the difference between MFA and 2FA?", a: "2FA is MFA with exactly two factors. MFA is the broader term and permits more than two. In consumer products the two words are used interchangeably because nearly all consumer MFA uses two factors."},
  {q: "Is MFA enough to keep my account safe?", a: "It closes the most common attack, which is a stolen or leaked password, but not all of them. Code-based MFA can still be phished in real time, and a weak account recovery path can bypass it entirely."},
  {q: "What is phishing-resistant MFA?", a: "Authentication that cannot be relayed to an attacker because nothing is displayed for you to copy and the credential itself checks the site's domain. In practice this means FIDO2 passkeys or hardware security keys."},
  {q: "Does MFA slow me down every time I sign in?", a: "Usually not. Most services remember trusted devices and only ask for the second factor on a new device or a sensitive action. A hardware key is also faster in practice than typing a code before it expires."},
]} />

<p class="doc-subtitle">More Than One Kind of Proof</p>

<div class="tldr">

Multi-factor authentication requires two or more pieces of evidence from **different categories** - knowledge, possession, inherence - before granting access. It works because an attacker who steals your password still has nothing to present for the second category. Not all MFA is equal: a one-time code can be relayed by a fake page, while a [passkey](/docs/glossary/passkey) cannot.

</div>

## The Definition

MFA means an authentication process that requires evidence from **at least two of the three factor categories** described in [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained).

The word "different" is doing the work. Asking for a password and then a security question is not MFA, however many prompts appear on screen - it's one category asked twice.

## Why It Works

Almost every large-scale account compromise starts with a credential the attacker did not have to steal from you personally: leaked in someone else's breach, guessed because it was reused, or typed into a convincing fake page. See [Why Password Reuse is Dangerous](/docs/security-academy/password-security/why-password-reuse-is-dangerous).

MFA breaks that chain. A password from a leaked database is worth nothing on its own if the service also demands something the attacker does not physically hold. This is why enabling MFA is consistently the single highest-impact security change most people can make.

## MFA and 2FA Are Not Quite the Same

**Two-factor authentication is MFA with exactly two factors.** MFA is the general term and allows more. In everyday use the two words are used interchangeably, and for good reason: almost all consumer MFA is 2FA. See [What is 2FA?](/docs/security-academy/authentication/what-is-2fa).

Where the distinction matters is in enterprise settings, where a sensitive action might require three factors, or where policy documents deliberately say "multi-factor" to avoid capping the requirement at two.

## Not All MFA Is Equally Strong

This is the part that has changed most in recent years, and the part most guidance now emphasises.

**Phishable MFA** relies on you reading something and typing it somewhere: an SMS code, an emailed code, a [TOTP](/docs/security-academy/authentication/what-is-totp) code from an app. A fake login page can ask for your password and then your code, and relay both to the real site within the valid window. It defeats leaked credentials. It does not defeat a convincing fake page.

**Phishing-resistant MFA** removes the judgement call. A [passkey](/docs/security-academy/passkeys/what-is-a-passkey) is cryptographically bound to the real domain, so a lookalike site produces no match and your device is never even asked - see [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#why-otp-is-still-phishable).

Both are large improvements over a password alone. Only one of them closes the attack that actually gets people.

## Where MFA Still Fails

Being honest about the gaps is what makes the recommendation credible.

- **MFA fatigue.** Push notifications that only ask "approve or deny" can be spammed until someone taps approve out of exhaustion. Number-matching prompts exist to fix exactly this.
- **Account recovery.** An account with strong MFA and a weak reset path is protected by the reset path. Attackers know this.
- **Session theft.** MFA proves who started the session; malware on the machine can act inside it afterwards.
- **SIM swapping.** If the second factor is a phone number, it can be moved to an attacker's SIM - see [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

None of these argue against MFA. They argue for choosing the right kind and keeping the recovery path as strong as the front door.

## Where to Start

If you're enabling MFA across your accounts, order matters more than completeness:

1. **Your email first.** It is the reset path for everything else.
2. **Anything holding money or identity.** Banking, exchanges, government portals.
3. **Anything with access to others.** Work accounts, admin panels, code repositories.
4. **Prefer passkeys where offered**, an authenticator app where not, and SMS only when it's the sole option.

A Seedkeeper PRO covers the middle two: [TOTP codes](/docs/product-documentation/otp-authenticator/adding-a-totp-account) on hardware rather than in a phone app, and [passkeys](/docs/product-documentation/passkeys/creating-your-first-passkey) where the service supports them.

<BuySeedkeeperPro />

## FAQ

<details>
<summary>What is multi-factor authentication?</summary>

An authentication process requiring evidence from two or more different categories - something you know, something you have, something you are - before access is granted. Two proofs from the same category do not qualify.

</details>

<details>
<summary>What is the difference between MFA and 2FA?</summary>

2FA is MFA with exactly two factors. MFA is the broader term and permits more than two. In consumer products the two words are used interchangeably because nearly all consumer MFA uses two factors.

</details>

<details>
<summary>Is MFA enough to keep my account safe?</summary>

It closes the most common attack, which is a stolen or leaked password, but not all of them. Code-based MFA can still be phished in real time, and a weak account recovery path can bypass it entirely.

</details>

<details>
<summary>What is phishing-resistant MFA?</summary>

Authentication that cannot be relayed to an attacker because nothing is displayed for you to copy and the credential itself checks the site's domain. In practice this means FIDO2 passkeys or hardware security keys.

</details>

<details>
<summary>Does MFA slow me down every time I sign in?</summary>

Usually not. Most services remember trusted devices and only ask for the second factor on a new device or a sensitive action. A hardware key is also faster in practice than typing a code before it expires.

</details>

## Related Articles

- [What is 2FA?](/docs/security-academy/authentication/what-is-2fa)
- [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer)
