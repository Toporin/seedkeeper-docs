---
title: "Security Checklist for Beginners"
description: "Ten things worth doing, in order of impact. No jargon, no prior knowledge, and most of them take less than five minutes each."
keywords: [security checklist, cybersecurity for beginners, how to be secure online, basic online security, protect my accounts]
sidebar_position: 1
sidebar_label: "Security Checklist for Beginners"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Where should I start with online security?", a: "With your email account. It is the password reset path for almost everything else you own, so securing it protects every downstream account at the same time."},
  {q: "Do I really need a password manager?", a: "If you want unique passwords everywhere, yes. Dozens of long random passwords cannot be remembered, so without a manager people fall back on reuse, which is the single most damaging habit in personal security."},
  {q: "Is two-factor authentication worth the hassle?", a: "Yes, and it is less hassle than it appears - most services only ask on a new device. It blocks the overwhelming majority of automated account takeovers, which rely on a leaked password alone being enough."},
  {q: "How do I know if my password has been leaked?", a: "Check your email address at haveibeenpwned.com, a free breach-notification database. If it appears, treat that password and every account still using it as compromised."},
  {q: "Should I write my passwords down?", a: "On paper at home, it is far better than reusing one password everywhere - the realistic threat is a remote attacker, not a burglar reading your notebook. A password manager is better still."},
]} />

<p class="doc-subtitle">Start Here, in Order of What Actually Matters</p>

<div class="tldr">

Most people don't need more security knowledge - they need a short list, in the right order, that they actually finish. Here it is: ten steps, ranked by how much risk each one removes. The first three matter more than everything below them combined.

</div>

## How to Use This List

Work top to bottom and stop whenever you run out of time. The order is deliberate: each step removes more risk than the one after it, so an unfinished list is still a useful list.

Nothing here assumes you know anything about security. Where a step touches on something worth understanding, there's a link - but you can complete every item without following a single one.

## 1. Secure Your Email First

Your mailbox is the reset path for nearly every other account you own. Anyone who controls it can request a password reset almost anywhere and receive the link themselves.

That makes it the single highest-value target you have, and the place to spend your first ten minutes.

- Give it a long, unique password that exists nowhere else
- Turn on two-factor authentication - see [What is 2FA?](/docs/security-academy/authentication/what-is-2fa)
- If your provider supports passkeys, add one: [Google](/docs/tutorials/google/enable-passkey-on-google), [Outlook](/docs/tutorials/microsoft/enable-passkeys-on-outlook)

## 2. Stop Reusing Passwords

One breach at a service you barely remember signing up for hands attackers a working password for everywhere else you used it. This is how most account takeovers actually happen, and it has nothing to do with how clever the password was.

Check whether you're already affected at **haveibeenpwned.com** - free, and run by a security researcher rather than a company selling you something. Then change anything that shows up.

See [Why Password Reuse is Dangerous](/docs/security-academy/password-security/why-password-reuse-is-dangerous).

## 3. Use a Password Manager

Steps 1 and 2 are impossible to sustain by memory. Dozens of accounts, each with a different long password, is not a discipline problem - it's arithmetic that doesn't work.

A password manager generates and stores them so you never have to remember any. Cloud managers are convenient; offline tools and hardware devices keep you out of a provider's chain entirely. See [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained) for how to choose.

## 4. Turn On Two-Factor Authentication Where It Matters

Not everywhere at once. Start with the accounts where a takeover would genuinely hurt: banking, cloud storage, anything holding documents or payment details.

Prefer an authenticator app or a hardware key over SMS codes, because a phone number can be transferred to an attacker without any hacking at all - see [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## 5. Save Your Recovery Codes

When you enable two-factor authentication, most services show a list of one-time recovery codes. Almost everyone closes that screen and regrets it later.

Save them somewhere that is neither your phone nor your inbox - the two places most likely to be unavailable when you need them.

## 6. Update Your Devices

Most successful attacks use flaws that were fixed months ago, against people who hadn't installed the fix.

Turn on automatic updates for your phone, your computer and your browser. This is the highest-value security habit that requires no ongoing effort from you at all.

## 7. Learn to Spot a Fake Login Page

Phishing doesn't break anything - it asks you politely, disguised as something you trust. It is the most common way people lose accounts, and the hardest to catch by eye.

Try the lookalike Microsoft page in [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked#phishing-email-and-fake-websites) and see how you do. Most people don't spot it, which is exactly the point.

The reliable habit: never sign in from a link in an email. Type the address yourself, or use a bookmark.

## 8. Be Suspicious of Urgency

Every social engineering attack has the same ingredient: a reason to act now, before you think.

An unexpected call from "your bank", a message from a colleague who suddenly needs a favour, a warning that your account will be closed today. Real organisations do not work this way, and no legitimate support person will ever ask you to read out a password or a one-time code.

Hang up. Call back on a number you looked up yourself.

## 9. Lock Your Devices

Your accounts are only as safe as the phone or laptop you sign in from. Enable a screen lock, use biometrics where available, and turn on full-disk encryption - it's on by default on modern phones and most laptops.

## 10. Move to Passkeys Where They're Offered

The steps above are damage control on a system that was never designed for this. A [passkey](/docs/security-academy/passkeys/what-is-a-passkey) removes the shared secret entirely: nothing to remember, nothing to type into a fake page, nothing to leak in a breach.

Support is still partial, so this is a gradual transition rather than a switch. Start with the accounts from step 1 - see [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password).

## If You Only Do Three Things

Steps 1, 2 and 3. Email secured, no reused passwords, a manager to make it sustainable. That removes the large majority of realistic risk for most people, in under an hour.

Everything else on this list is worth doing. None of it substitutes for those three.

## FAQ

<details>
<summary>Where should I start with online security?</summary>

With your email account. It is the password reset path for almost everything else you own, so securing it protects every downstream account at the same time.

</details>

<details>
<summary>Do I really need a password manager?</summary>

If you want unique passwords everywhere, yes. Dozens of long random passwords cannot be remembered, so without a manager people fall back on reuse, which is the single most damaging habit in personal security.

</details>

<details>
<summary>Is two-factor authentication worth the hassle?</summary>

Yes, and it is less hassle than it appears - most services only ask on a new device. It blocks the overwhelming majority of automated account takeovers, which rely on a leaked password alone being enough.

</details>

<details>
<summary>How do I know if my password has been leaked?</summary>

Check your email address at haveibeenpwned.com, a free breach-notification database. If it appears, treat that password and every account still using it as compromised.

</details>

<details>
<summary>Should I write my passwords down?</summary>

On paper at home, it is far better than reusing one password everywhere - the realistic threat is a remote attacker, not a burglar reading your notebook. A password manager is better still.

</details>

## Related Articles

- [Secure Your Digital Life in 30 Minutes](/docs/security-guides/secure-your-digital-life-in-30-minutes)
- [Why Password Reuse is Dangerous](/docs/security-academy/password-security/why-password-reuse-is-dangerous)
- [What is 2FA?](/docs/security-academy/authentication/what-is-2fa)
- [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked)
- [Smartphone Security Guide](/docs/security-guides/smartphone-security-guide)
