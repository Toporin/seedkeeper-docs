---
title: "What is 2FA?"
description: "Two-factor authentication adds a second proof on top of your password. How it works, which second factors to prefer, and what it does not protect against."
keywords: [what is 2FA, two-factor authentication, 2FA meaning, second factor, enable 2FA, 2FA vs MFA]
sidebar_position: 3
sidebar_label: "What is 2FA?"
---

import BuySeedkeeperPro from '@site/docs/_buy-seedkeeper-pro.mdx';
import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is two-factor authentication?", a: "A sign-in process requiring two different kinds of proof: something you know, such as a password, plus something you have, such as a one-time code or a security key. A stolen password alone is then not enough to access the account."},
  {q: "Is 2FA the same as MFA?", a: "2FA is multi-factor authentication with exactly two factors. MFA is the general term and allows more. For most consumer accounts the two mean the same thing in practice."},
  {q: "Which type of 2FA should I use?", a: "A passkey or security key where the service supports it, since those resist phishing. An authenticator app or hardware TOTP everywhere else. Use SMS only when nothing better is offered."},
  {q: "Can 2FA be bypassed?", a: "Code-based 2FA can be defeated by real-time phishing, where a fake page relays your password and code to the real site immediately. A weak account recovery process can also bypass it. Phishing-resistant methods close the first gap."},
  {q: "What happens if I lose my second factor?", a: "You fall back on the recovery codes issued when you enabled it, or the service's account recovery process. This is why saving those codes somewhere safe and offline matters as much as enabling 2FA in the first place."},
]} />

<p class="doc-subtitle">A Second Lock on the Same Door</p>

<div class="tldr">

Two-factor authentication asks for something you know - usually a password - plus something you have, such as a code or a security key. A leaked password alone is then no longer enough to get in. It is the highest-impact security change most people can make, and it comes in strong and weak varieties.

</div>

## How 2FA Works

You sign in with your password as usual. Before letting you through, the service asks for a second proof from a different category: a code, a tap on a security key, a prompt on your phone.

The password confirms you know a secret. The second factor confirms you hold a specific object. An attacker on the other side of the world can obtain the first from a breach; the second requires being in the same room as you.

That's the whole idea, and it's why 2FA blocks the overwhelming majority of automated account takeovers - see [Why Password Reuse is Dangerous](/docs/security-academy/password-security/why-password-reuse-is-dangerous) for how those attacks actually run.

## The Second Factors, From Weakest to Strongest

Not all second factors offer the same protection. In practice you'll meet four.

**Email codes.** The weakest. If your mailbox is compromised - and it is the account attackers target first - the second factor is in the same place as the reset link.

**SMS codes.** Better, but tied to a phone number rather than a phone. Numbers can be transferred to an attacker through SIM swapping, which is why standards bodies now treat SMS as a restricted method. See [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

**Authenticator codes ([TOTP](/docs/security-academy/authentication/what-is-totp)).** A six-digit code computed from a shared secret and the current time, with no network involved. Solid, widely supported, and the right default for most accounts. On a Seedkeeper PRO the secret lives in the secure element instead of a phone app - see [Adding a TOTP Account](/docs/product-documentation/otp-authenticator/adding-a-totp-account).

**Security keys and passkeys.** The only option that resists phishing, because the credential itself verifies the site's domain before responding. See [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey).

## What 2FA Does Not Protect Against

Two blind spots are worth knowing, because they're where attacks have moved.

**Real-time phishing.** A fake page collects your password, then your code, and relays both to the real site inside the thirty-second window. Your 2FA worked exactly as designed and the attacker is in anyway. Only domain-bound credentials stop this - see [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#why-otp-is-still-phishable).

**Account recovery.** Most services keep a fallback route for people who lose their second factor. That route is a legitimate way in, and it is often protected by nothing more than access to your mailbox.

## Where to Enable It First

Enabling 2FA everywhere at once is a project. Enabling it in the right order takes ten minutes and captures most of the benefit:

1. **Email**, because it resets everything else
2. **Financial accounts** - banking, PayPal, exchanges
3. **Anything storing personal documents or customer data**
4. **Social accounts**, which are used to reach the people who trust you

## Keep Your Recovery Codes

When you enable 2FA, most services show a list of one-time recovery codes. People close that screen and regret it later.

Save them somewhere that is neither your phone nor your inbox. A [secure note](/docs/product-documentation/password-manager/creating-secure-notes) on a Seedkeeper is a good home: offline, hardware-backed, and available even if the phone holding your authenticator is gone.

<BuySeedkeeperPro />

## FAQ

<details>
<summary>What is two-factor authentication?</summary>

A sign-in process requiring two different kinds of proof: something you know, such as a password, plus something you have, such as a one-time code or a security key. A stolen password alone is then not enough to access the account.

</details>

<details>
<summary>Is 2FA the same as MFA?</summary>

2FA is multi-factor authentication with exactly two factors. MFA is the general term and allows more. For most consumer accounts the two mean the same thing in practice.

</details>

<details>
<summary>Which type of 2FA should I use?</summary>

A passkey or security key where the service supports it, since those resist phishing. An authenticator app or hardware TOTP everywhere else. Use SMS only when nothing better is offered.

</details>

<details>
<summary>Can 2FA be bypassed?</summary>

Code-based 2FA can be defeated by real-time phishing, where a fake page relays your password and code to the real site immediately. A weak account recovery process can also bypass it. Phishing-resistant methods close the first gap.

</details>

<details>
<summary>What happens if I lose my second factor?</summary>

You fall back on the recovery codes issued when you enabled it, or the service's account recovery process. This is why saving those codes somewhere safe and offline matters as much as enabling 2FA in the first place.

</details>

## Related Articles

- [What is MFA?](/docs/security-academy/authentication/what-is-mfa)
- [What is TOTP?](/docs/security-academy/authentication/what-is-totp)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
