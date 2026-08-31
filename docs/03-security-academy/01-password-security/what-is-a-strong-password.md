---
title: "What is a Strong Password?"
description: "A strong password is long, random, and unique to one account. Here's what actually makes a password hard to crack - and how to create one easily."
keywords: [what is a strong password, strong password examples, how long should a password be, passphrase, password entropy, password generator]
sidebar_position: 2
sidebar_label: "What is a Strong Password?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "How long should a strong password be?", a: "At least 12-16 characters for most accounts; longer for anything especially sensitive. See Length above."},
  {q: "Do I need to include symbols and numbers?", a: "It helps a little, but it's far less important than length and randomness - see Why \"Add a Symbol\" Isn't the Real Answer above."},
  {q: "Is it safe to let a password manager generate my passwords?", a: "Yes - it's actually the recommended approach, since it removes the human tendency toward predictable patterns. See The Easiest Way to Get This Right above."},
  {q: "Are several random words really stronger than a short complex password?", a: "Yes, by a very wide margin - as long as the words are picked randomly rather than chosen by you. See Put It to the Test above, and Passphrase."},
  {q: "Can a strong password protect me from phishing?", a: "No. Strength only protects against guessing. If you type a password into a fake page, its length and randomness are irrelevant because you handed it over yourself. Only a passkey, which is bound to the real domain, defends against this - see Are Passkeys Safer?."},
  {q: "Can I reuse a strong password if I trust the site?", a: "No - reuse undoes the benefit of strength entirely, since a breach anywhere puts every reused account at risk. See Uniqueness above."},
]} />

import BuySeedkeeperPro from '@site/docs/_buy-seedkeeper-pro.mdx';

<p class="doc-subtitle">Length, Randomness, and Uniqueness - In That Order</p>

<div class="tldr">

A strong [password](/docs/glossary/password) is long, unpredictable, and used on only one account. Length matters more than complexity rules like special characters, and reusing even a strong password across sites undoes most of its value. Strength is only ever half the answer, though - a password is still [something you know](/docs/security-academy/authentication/authentication-factors-explained), and that whole category can be handed over.

</div>

## The Three Things That Actually Matter

Forget "must contain a capital letter and a symbol" for a moment - that's an old rule of thumb, not the real measure of strength. What actually determines how hard a password is to crack comes down to three things:

### 1. Length

Every extra character makes a password exponentially harder to guess by brute force. An 8-character password can be cracked by modern hardware in hours; a 16-character one can take centuries, even with the same character set. **Length is the single biggest factor in password strength.**

### 2. Randomness

Predictable patterns are the first thing attackers try: `Password123!`, your pet's name, your birth year, keyboard patterns like `qwerty`. A password that's genuinely random - not based on a word, a pattern, or personal information - can't be shortcut by these common guessing techniques.

### 3. Uniqueness

A strong password used on five different accounts is only as strong as the weakest of those five services. If just one gets breached, attackers will try that same password everywhere else - a technique called **credential stuffing**. A strong password that's reused isn't really strong at all. See [Why Password Reuse is Dangerous](/docs/security-academy/password-security/why-password-reuse-is-dangerous) for a closer look at how this actually plays out.

## Why "Add a Symbol" Isn't the Real Answer

Many sites still require a mix of uppercase, lowercase, numbers, and symbols. It's not wrong, exactly - it does add some randomness - but it often backfires: people respond to these rules in predictable ways (`Password1!` is an extremely common pattern), which actually makes passwords *easier* to guess, not harder.

A long, randomly generated password with only lowercase letters is often stronger than a short one that technically satisfies every complexity rule.

It's worth knowing where the ceiling of this approach is. Strength protects against guessing, and nothing else. A perfectly generated 30-character password typed into a convincing fake page is handed over exactly as easily as `123456` - see [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password) for the authentication method that closes that gap.

## Put It to the Test

**Four passwords, four very different levels of protection. Which one would take an attacker the longest to crack?**

| | Password |
|---|---|
| **A** | `J&nn1e_1987!` |
| **B** | `Xk7#pR2$` |
| **C** | `Password123456789!` |
| **D** | `velvet-tractor-orange-mountain-copper` |

<details>
<summary>Show the answer</summary>

**D wins, and it isn't close.** The one that looks like it was typed by someone who gave up is the only one an attacker can't reach.

Here's how each holds up against an offline attack running 100 billion guesses per second - a realistic figure for a leaked database and a rented GPU cluster:

- **A - `J&nn1e_1987!`** falls in minutes. It has eleven characters, uppercase, digits and two symbols, and it still fails: it's a first name, a birth year, and predictable substitutions. Cracking tools don't guess character by character, they apply exactly these rules to dictionary words first - see [Brute Force and Dictionary Attacks](/docs/security-academy/password-security/how-passwords-are-cracked#brute-force-and-dictionary-attacks).
- **B - `Xk7#pR2$`** lasts around a day. Eight genuinely random characters, no pattern to exploit - but only eight of them. This is the password most complexity rules produce, and it's already within reach.
- **C - `Password123456789!`** falls in seconds. Eighteen characters, and every cracking wordlist on earth already contains it. Length without randomness buys nothing.
- **D - `velvet-tractor-orange-mountain-copper`** would take roughly nine years. Five ordinary words, no symbols to remember, nothing to look up - and several thousand times stronger than B.

The lesson is the order set out above: **length beats complexity, and randomness beats both**. What protects you is how many possibilities an attacker must work through, not how unpleasant the password looks.

One condition, and it's the one people get wrong: the words must be picked **randomly**, by dice or by a generator, never chosen by you. A phrase you invented follows the patterns of your own mind, and those patterns are guessable. Add a sixth word and nine years becomes tens of thousands.

This is precisely what your Seedkeeper's **Easy to Read** generator produces - see the tip below.

None of these four should ever be used - they're published on this page.

</details>

## The Easiest Way to Get This Right

Humans are bad at generating randomness on purpose - left to invent a password yourself, you'll unconsciously lean on patterns, words, or things you already know. The reliable fix is to stop generating passwords by hand and let a tool do it instead.

This is exactly what a password generator does: it produces a long, genuinely random password with no memorable pattern for an attacker to exploit - and since you're not the one who has to remember it, length stops being a downside.

:::tip[Generate and store strong passwords with Seedkeeper]
Your Seedkeeper lets you generate a strong password on the spot when creating a new entry, and stores it directly on your card or ring's secure element - never on your phone or computer.

You choose the recipe: lowercase, uppercase and symbols for a fully random string, or **Easy to Read** for a word-based password like `velvet-tractor-orange-mountain` - the winning pattern from the quiz above, generated properly at random rather than invented by you. The two can be combined, giving something like `velvet-tractor$-orange@-mountain` when symbols are switched on.

See [Creating a New Password](/docs/product-documentation/password-manager/creating-a-new-password) to try it.
:::

<BuySeedkeeperPro />

## FAQ

<details>
<summary>How long should a strong password be?</summary>

At least 12-16 characters for most accounts; longer for anything especially sensitive. See [Length](#1-length) above.

</details>

<details>
<summary>Do I need to include symbols and numbers?</summary>

It helps a little, but it's far less important than length and randomness - see [Why "Add a Symbol" Isn't the Real Answer](#why-add-a-symbol-isnt-the-real-answer) above.

</details>

<details>
<summary>Is it safe to let a password manager generate my passwords?</summary>

Yes - it's actually the recommended approach, since it removes the human tendency toward predictable patterns. See [The Easiest Way to Get This Right](#the-easiest-way-to-get-this-right) above.

</details>

<details>
<summary>Are several random words really stronger than a short complex password?</summary>

Yes, by a very wide margin - as long as the words are picked randomly rather than chosen by you. See [Put It to the Test](#put-it-to-the-test) above, and [Passphrase](/docs/glossary/passphrase).

</details>

<details>
<summary>Can a strong password protect me from phishing?</summary>

No. Strength only protects against guessing. If you type a password into a fake page, its length and randomness are irrelevant because you handed it over yourself. Only a passkey, which is bound to the real domain, defends against this - see [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

<details>
<summary>Can I reuse a strong password if I trust the site?</summary>

No - reuse undoes the benefit of strength entirely, since a breach anywhere puts every reused account at risk. See [Uniqueness](#3-uniqueness) above.

</details>

## Related Articles

- [What is a Password?](/docs/security-academy/password-security/what-is-a-password)
- [Why Password Reuse is Dangerous](/docs/security-academy/password-security/why-password-reuse-is-dangerous)
- [Creating a New Password](/docs/product-documentation/password-manager/creating-a-new-password)
- [Security Best Practices](/docs/product-documentation/getting-started/security-best-practices)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password)
- [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked)
- [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained)
- [What is 2FA?](/docs/security-academy/authentication/what-is-2fa)
