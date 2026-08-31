---
title: "What is a Password?"
description: "A password is a secret string of characters used to prove your identity when signing in to an account. Here's how they work, and why."
keywords: [what is a password, password meaning, how passwords work, password hashing, shared secret, authentication basics]
sidebar_position: 1
sidebar_label: "What is a Password?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Is a PIN the same as a password?", a: "Not quite. A PIN is usually shorter and numbers-only, and it's often tied to a specific device rather than an online account. The underlying idea - a shared secret used to prove identity - is the same."},
  {q: "Can a website see my actual password?", a: "A well-built one shouldn't need to - it stores a hash instead, as explained in How Passwords Actually Work above. Poorly built ones sometimes do store plain passwords, which is one reason breaches are so damaging."},
  {q: "What is the difference between a password and a passkey?", a: "A password is a shared secret you transmit to the service each time you sign in, so either side can leak it. A passkey is a private key that never leaves your device, and the service only holds a public key it can verify against. See Passkey vs Password."},
  {q: "What is password hashing?", a: "A one-way transformation applied to your password before storage, so the service can check a login without keeping the password itself. Modern services use deliberately slow functions such as bcrypt, scrypt or Argon2 rather than fast ones like SHA-256. See How Passwords Actually Work above."},
  {q: "Why do some sites limit password length or characters?", a: "Usually outdated technical constraints, not security choices - and it's often a sign the site isn't hashing passwords properly. Modern best practice has no meaningful upper limit."},
]} />

<p class="doc-subtitle">The Basics of Proving It's Really You</p>

<div class="tldr">

A password is a secret you and a service both know. When you type it in, the service checks it against what it has on file - if they match, you're in. It's the oldest and still the most common way to prove your identity online.

</div>

## The Simple Definition

A password is a string of characters - letters, numbers, symbols, or a mix - that only you (in theory) know. You create it when you sign up for a service, and you type it back in every time you want to log in. The service compares what you typed against what it stored, and if it matches, it lets you through.

That's the whole idea: a shared secret, known only to you and the service, used as proof of who you are.

## How Passwords Actually Work

When you set a password, most reputable services don't store it as plain, readable text. Instead, they run it through a one-way mathematical function called **hashing**, which turns "MyDog2024!" into something like `a94a8fe5ccb19ba61c4c0873d391e987982fbbd3`. This hash is what actually gets saved.

Not all hashing is equal, and the difference decides how long a leaked database resists attack. General-purpose functions such as SHA-1 or SHA-256 were built to be fast, which is exactly wrong here - fast means an attacker can test billions of guesses per second. Modern practice uses functions deliberately designed to be slow and memory-hungry: **bcrypt**, **scrypt**, and **Argon2**, the current reference. A database hashed with Argon2 costs an attacker orders of magnitude more than one hashed with SHA-256.

When you log in later, the service hashes what you just typed and compares the two hashes. If they match, you're verified - without the service ever needing to store your actual password. This is why a company can tell you "we don't know your password" even after a data breach: what leaked, ideally, was the hash, not the password itself.

Not every service does this well, which is part of why password breaches are so common - but that's a separate topic (see [What is a Strong Password?](/docs/security-academy/password-security/what-is-a-strong-password)).

## Why Passwords Exist

Before passwords, "proving who you are" to a computer system meant physical access - you were sitting at the terminal, so you must be authorized. As soon as systems needed to be shared or accessed remotely, something had to stand in for that physical presence. A shared secret was the simplest solution: cheap to implement, easy to explain, and it needed no special hardware.

That simplicity is exactly why passwords have stuck around for over 60 years, even as better options have emerged.

## The Trouble With Passwords

Passwords have one structural weakness: they're just information. Anything that's just information can be copied, guessed, stolen, or leaked - without you ever knowing it happened.

- **You have to remember them.** This pushes people toward short, simple, or reused passwords - see [What is a Strong Password?](/docs/security-academy/password-security/what-is-a-strong-password) for what that actually costs you.
- **They can be phished.** A convincing fake login page can trick you into typing your real password into the wrong place.
- **They can be leaked in bulk.** When a company's database is breached, every reused password is now a key to every other account that uses it.
- **They can be guessed.** Weak or common passwords can be cracked by automated tools in seconds.

None of this makes passwords useless - billions of accounts still rely on them safely every day. It does mean that a password alone is often not enough for anything you actually care about protecting.

## What Comes Next

Two developments have grown out of these weaknesses:

- **[Two-factor authentication (2FA)](/docs/security-academy/authentication/what-is-2fa)** adds a second proof on top of your password - typically a one-time code - so a leaked password alone isn't enough to get in. It works because the second proof comes from a different category of evidence - see [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained).
- **[Passkeys](/docs/glossary/passkey)** go a step further and remove the shared secret entirely, replacing it with cryptography that can't be phished or leaked the same way. See [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey) for how that works, and [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password) for a direct comparison of the two.

Passwords aren't disappearing overnight, but understanding how they work - and where they fall short - is the first step toward using something better where it matters most.

## FAQ

<details>
<summary>Is a PIN the same as a password?</summary>

Not quite. A PIN is usually shorter and numbers-only, and it's often tied to a specific device rather than an online account. The underlying idea - a shared secret used to prove identity - is the same.

</details>

<details>
<summary>Can a website see my actual password?</summary>

A well-built one shouldn't need to - it stores a hash instead, as explained in [How Passwords Actually Work](#how-passwords-actually-work) above. Poorly built ones sometimes do store plain passwords, which is one reason breaches are so damaging.

</details>

<details>
<summary>What is the difference between a password and a passkey?</summary>

A password is a shared secret you transmit to the service each time you sign in, so either side can leak it. A passkey is a private key that never leaves your device, and the service only holds a public key it can verify against. See [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password).

</details>

<details>
<summary>What is password hashing?</summary>

A one-way transformation applied to your password before storage, so the service can check a login without keeping the password itself. Modern services use deliberately slow functions such as bcrypt, scrypt or Argon2 rather than fast ones like SHA-256. See [How Passwords Actually Work](#how-passwords-actually-work) above.

</details>

<details>
<summary>Why do some sites limit password length or characters?</summary>

Usually outdated technical constraints, not security choices - and it's often a sign the site isn't hashing passwords properly. Modern best practice has no meaningful upper limit.

</details>

## Related Articles

- [What is a Strong Password?](/docs/security-academy/password-security/what-is-a-strong-password)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password)
- [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked)
- [What is 2FA?](/docs/security-academy/authentication/what-is-2fa)
- [Security Best Practices](/docs/product-documentation/getting-started/security-best-practices)
