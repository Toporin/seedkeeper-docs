---
title: "Passkey vs OTP"
description: "One-time codes add a second factor; passkeys replace the password. Why OTP is still phishable, and why you will want both on one device."
keywords: [passkey vs OTP, passkey vs 2FA, TOTP, one-time password, is 2FA phishable, hardware authenticator, FIDO2, two-factor authentication, phishing-resistant MFA]
sidebar_position: 6
sidebar_label: "Passkey vs OTP"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Is a passkey better than 2FA?", a: "They aren't the same category. Two-factor authentication strengthens a password; a passkey removes it. A passkey is phishing-resistant in a way a one-time code is not, so where both are offered, the passkey is the stronger choice."},
  {q: "Can 2FA codes be phished?", a: "Yes. A fake login page can ask for your password and then your code, and relay both to the real site inside the valid window. This is standard practice in phishing kits, not an edge case. See Why OTP Is Still Phishable above."},
  {q: "If I have a passkey, do I still need OTP on that account?", a: "Generally no - the passkey already covers what OTP was protecting. Keep it if the service still allows password sign-in as a fallback, since an account is only as strong as its weakest available route in."},
  {q: "Is an authenticator app safer than SMS codes?", a: "Yes, clearly. SMS is exposed to SIM swapping, where an attacker convinces a carrier to move your number. A TOTP seed held on a secure element isn't exposed to that at all."},
  {q: "Why use a hardware device instead of an authenticator app?", a: "Three practical reasons: the seeds can't be read out even by malware on your phone, your codes aren't trapped inside one handset or one vendor's ecosystem, and the same object works on any phone or computer including ones you don't own. See Why Generate TOTP From Seedkeeper PRO above."},
  {q: "What happens to my codes if I lose or change my phone?", a: "With Seedkeeper PRO, nothing - the seeds are on the device, not the phone. With a phone-based authenticator, it depends entirely on whether you set up a backup beforehand, which is where most people get caught out."},
  {q: "Can someone steal my TOTP codes without touching my device?", a: "If the service's copy of the seed leaks in a breach, yes - they can generate the same codes you see. That's the structural cost of a shared secret. See The Shared Secret Problem above."},
  {q: "Why can't I copy my OTP accounts to a second Seedkeeper PRO?", a: "Because the seeds are written into the secure element and can never be read back - the same property that protects them from theft. To hold identical codes on two devices, add them from the same QR code on both at the same time. See Backup and Restore Procedures."},
  {q: "Does a one-time code count as phishing-resistant MFA?", a: "No. A TOTP code is information you read and type, so it can be relayed to an attacker in real time. It counts as multi-factor authentication, but not as phishing-resistant multi-factor authentication - a distinction that matters where regulation or an insurer asks specifically for the latter."},
  {q: "Is OTP obsolete now that passkeys exist?", a: "Not remotely. Passkey support is still partial, and OTP protects the large majority of accounts that have no other option. It's the right tool for a job passkeys can't do yet."},
]} />

import BuySeedkeeperPro from '@site/docs/_buy-seedkeeper-pro.mdx';

<p class="doc-subtitle">A Second Factor and a Replacement Are Not the Same Thing</p>

<div class="tldr">

A one-time code is a **second factor**: it sits on top of a password, and both are still required. A [passkey](/docs/glossary/passkey) is a **replacement**: it removes the password from the equation entirely.

OTP is a large improvement over a password alone, but it remains phishable - a code is information you read and type, so it can be relayed to an attacker in real time. A passkey cannot be. Use passkeys where they're supported, OTP everywhere else, which is why Seedkeeper PRO does both on one device.

</div>

## The Difference in One Sentence

**OTP proves you have a second secret. A passkey proves you have the only secret that matters, without revealing it.**

The comparison only makes sense once you see that these two technologies sit at different points in the login flow.

**[OTP](/docs/security-academy/authentication/what-is-otp)** - a one-time password, usually a six-digit [TOTP](/docs/security-academy/authentication/what-is-totp) code refreshing every thirty seconds - was designed to patch a specific weakness: a stolen password alone shouldn't be enough to get in. It assumes the password still exists, and adds a second obstacle behind it.

**A passkey** was designed to remove the weakness instead of patching it. There is no password left to steal, so no second obstacle is needed to compensate for one.

That's why "which is better" is the wrong framing. One assumes the password stays. The other assumes it goes.

## What Each One Actually Is

**A one-time password (OTP)** is a short numeric code, valid for a brief window, generated from a secret seed shared between you and the service at setup. The most common form is TOTP, where the code is a function of that seed and the current time - which is why it works with no network connection. Both you and the service hold the same seed and compute the same answer independently.

**A passkey** is a cryptographic key pair created by your device when you register with a service, following the open [FIDO2](/docs/glossary/fido2) standard. The private key never leaves the device; the service holds only the matching public key. Nothing is displayed, nothing is typed, and no secret is shared between the two sides. See [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey).

## Passkey vs OTP: Full Comparison

| | OTP (TOTP code) | Passkey |
|---|---|---|
| **Role in the login** | Second factor, on top of a password | Replaces the password |
| **What the service stores** | The same seed you hold | A public key, useless alone |
| **Resists phishing** | ❌ No - a code can be relayed in real time | ✅ Yes - bound to the domain |
| **Protects against a leaked password** | ✅ Yes - the code is still required | ✅ Yes - there is no password |
| **Vulnerable to a fake login page** | ❌ Yes - you type the code into it yourself | ✅ No - the device won't respond |
| **Exposed if the service is breached** | ❌ Yes - a leaked seed generates your codes forever | ✅ No - nothing secret is held |
| **Requires typing something** | ❌ Yes, before it expires | ✅ No - a tap and a PIN |
| **Works offline** | ✅ Yes | ✅ Yes |
| **Service support** | ✅ Very broad and mature | ❌ Growing fast, still partial |
| **Main threat** | Real-time phishing and seed theft | Losing every registered device at once |

## Why OTP Is Still Phishable

This is the point most people get wrong, and it's worth being precise about.

**A TOTP code is information.** If a convincing fake page asks for your password and then your code, you supply both - and an attacker relaying them to the real site within the same thirty-second window is in. This is not theoretical. It's how commercial phishing kits work today, and the whole exchange takes seconds.

Notice the shape of the problem: it's identical to the password's. Anything you can read and type, you can be tricked into reading and typing somewhere else. The protection rests on you correctly identifying the site, which is precisely the judgement attackers are good at defeating. Try the lookalike page in [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked#phishing-email-and-fake-websites) and see how you do.

A passkey removes the judgement call. Nothing is displayed for you to copy, and the domain check happens in the browser before your device is ever asked - see [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work#the-domain-check-is-the-whole-trick).

**None of this makes OTP worthless.** It defeats every attack that relies on a leaked or reused password, which is most of them. It simply doesn't defeat the one that relies on fooling you.

## The Shared Secret Problem

There's a second, quieter difference that matters more than it appears.

When you set up TOTP, the service generates a seed and shares it with you through a QR code. From that moment, **both sides hold the same secret**. If the service's copy leaks in a breach, an attacker can generate your codes indefinitely - without ever touching your device, and without you having any way to notice.

A passkey has no shared secret to leak. The service holds a public key, which produces nothing useful on its own.

This is also why serious hardware treats OTP seeds carefully. On Seedkeeper PRO, seeds are written into the secure element and cannot be read back out - no export, no migration, no copy. That's excellent for security and means you plan a second device in advance rather than after the fact. See [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

## Not Rivals, a Sequence

In practice these are two stages of the same journey, and most people will live in both for years.

**Where passkeys are supported, use them.** Google, Microsoft, Amazon, PayPal, GitHub and a growing list accept them today.

**Where they aren't, use a password plus OTP.** It's a substantial improvement over a password alone and remains the right answer for the majority of services.

**Avoid SMS codes wherever you have the choice.** They're vulnerable to SIM swapping, where an attacker persuades a carrier to move your number to their own SIM. An app-based or hardware-based TOTP is strictly better - see [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp) for why the delivery method changes everything.

The ordering is what matters: OTP isn't a competitor to passkeys, it's the fallback covering everything passkeys haven't reached yet. Anyone telling you to pick one is describing a choice you don't have to make.

One nuance matters in a regulated environment. A one-time code satisfies a requirement written as "use multi-factor authentication" - which is how the EU's NIS2 directive frames it in Article 21(2)(j). It does not satisfy a requirement written as "use phishing-resistant multi-factor authentication", which is the direction supervisory guidance has been moving for privileged accounts and remote access. If your organisation falls in scope, that distinction is the one to check. See [Passkeys and NIS2](/docs/security-academy/passkeys/passkey-vs-password#passkeys-and-nis2).

## Where Your OTP Codes Live Matters Too

Deciding to use OTP is only half a decision. The other half is what generates the codes - and the options differ more than most people realise.

| | Authenticator app on your phone | Dedicated hardware device |
|---|---|---|
| **Examples** | Google Authenticator, Authy, Microsoft Authenticator | Seedkeeper PRO |
| **Where the seeds live** | In app storage on a general-purpose phone | On a certified secure element, write-only |
| **Exposed to phone malware** | ⚠️ Depends on the phone's integrity | ✅ No - seeds are unreadable, even to the app |
| **Tied to one phone** | ❌ Yes, and to its operating system | ✅ No - works with any phone or computer |
| **Tied to a vendor account** | ⚠️ Often, for cloud backup | ✅ No account, no cloud, no vendor |
| **Survives losing the phone** | ⚠️ Only if you enabled cloud backup | ✅ The device is independent of any phone |
| **Needs a battery** | ❌ Yes | ✅ No |
| **Auditable code** | ❌ Mostly closed source | ✅ Open source firmware |

**On your phone.** The seeds sit in app storage on a device that also browses the web, installs software and reads email. On a healthy phone that's fine. On a compromised one, it isn't - and cloud-backed authenticators add a vendor account to the chain, which becomes its own target.

**On dedicated hardware.** The seed is written into the secure element and cannot be read back, by anyone, including the app that put it there. There is no cloud sync to compromise and no account to phish.

### Why Generate TOTP From Seedkeeper PRO

Most people end up with their codes locked inside a specific phone, from a specific vendor, with no way out. Seedkeeper PRO is built on the opposite assumption.

**It isn't tied to your personal phone.** The codes live on the card or ring, not in a phone's app storage. Change phone, break a phone, switch from iPhone to Android - your codes are unaffected, because they were never on the phone in the first place.

**It isn't tied to a brand or an ecosystem.** No account to create, no cloud to sync with, no vendor login standing between you and your own codes. Nothing about your credentials passes through Satochip.

**It's genuinely portable.** A card in your wallet or a ring on your finger works against any NFC phone and any desktop. That includes a work machine, a shared workstation, or a colleague's laptop - situations where installing a personal authenticator app is awkward or forbidden.

**It's open source.** The firmware is published under AGPLv3 and can be read, audited and verified by anyone. Security you're asked to take on trust isn't security, and most authenticator apps ask exactly that.

**It carries no battery and no screen.** Nothing to charge, nothing to break, nothing to leak on a lock screen. The device does one job.

**And it covers both stages at once.** Passwords, TOTP seeds and up to 90 passkeys on one EAL6+ secure element, [FIDO2 Level 1 certified](/docs/security-academy/passkeys/what-is-fido2#seedkeeper-pro-fido2-level-1-certified). The [Seedkeeper PRO App](/docs/product-documentation/otp-authenticator/adding-a-totp-account) manages the OTP side; passkeys work straight through the browser with no app involved at all.

That last point is the practical argument. A device handling only passkeys would leave most of your accounts uncovered today. A device handling only OTP would leave the phishing problem unsolved. The transition between the two stages takes years, and one object covers the whole of it.

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Is a passkey better than 2FA?</summary>

They aren't the same category. Two-factor authentication strengthens a password; a passkey removes it. A passkey is phishing-resistant in a way a one-time code is not, so where both are offered, the passkey is the stronger choice.

</details>

<details>
<summary>Can 2FA codes be phished?</summary>

Yes. A fake login page can ask for your password and then your code, and relay both to the real site inside the valid window. This is standard practice in phishing kits, not an edge case. See [Why OTP Is Still Phishable](#why-otp-is-still-phishable) above.

</details>

<details>
<summary>If I have a passkey, do I still need OTP on that account?</summary>

Generally no - the passkey already covers what OTP was protecting. Keep it if the service still allows password sign-in as a fallback, since an account is only as strong as its weakest available route in.

</details>

<details>
<summary>Is an authenticator app safer than SMS codes?</summary>

Yes, clearly. SMS is exposed to SIM swapping, where an attacker convinces a carrier to move your number. A TOTP seed held on a secure element isn't exposed to that at all.

</details>

<details>
<summary>Why use a hardware device instead of an authenticator app?</summary>

Three practical reasons: the seeds can't be read out even by malware on your phone, your codes aren't trapped inside one handset or one vendor's ecosystem, and the same object works on any phone or computer including ones you don't own. See [Why Generate TOTP From Seedkeeper PRO](#why-generate-totp-from-seedkeeper-pro) above.

</details>

<details>
<summary>What happens to my codes if I lose or change my phone?</summary>

With Seedkeeper PRO, nothing - the seeds are on the device, not the phone. With a phone-based authenticator, it depends entirely on whether you set up a backup beforehand, which is where most people get caught out.

</details>

<details>
<summary>Can someone steal my TOTP codes without touching my device?</summary>

If the service's copy of the seed leaks in a breach, yes - they can generate the same codes you see. That's the structural cost of a shared secret. See [The Shared Secret Problem](#the-shared-secret-problem) above.

</details>

<details>
<summary>Why can't I copy my OTP accounts to a second Seedkeeper PRO?</summary>

Because the seeds are written into the secure element and can never be read back - the same property that protects them from theft. To hold identical codes on two devices, add them from the same QR code on both at the same time. See [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

</details>

<details>
<summary>Does a one-time code count as phishing-resistant MFA?</summary>

No. A TOTP code is information you read and type, so it can be relayed to an attacker in real time. It counts as multi-factor authentication, but not as phishing-resistant multi-factor authentication - a distinction that matters where regulation or an insurer asks specifically for the latter.

</details>

<details>
<summary>Is OTP obsolete now that passkeys exist?</summary>

Not remotely. Passkey support is still partial, and OTP protects the large majority of accounts that have no other option. It's the right tool for a job passkeys can't do yet.

</details>

## Related Articles

- [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password)
- [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Adding a TOTP Account](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Setting Up OTP Access PIN](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin)
- [What is TOTP?](/docs/security-academy/authentication/what-is-totp)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [What is 2FA?](/docs/security-academy/authentication/what-is-2fa)
