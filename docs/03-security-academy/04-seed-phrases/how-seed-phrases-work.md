---
title: "How Seed Phrases Work"
description: "From random entropy to words to every key in your wallet - the four steps that turn 12 words into a deterministic wallet, and why the checksum matters."
keywords: [how seed phrases work, entropy to mnemonic, BIP39 checksum, deterministic wallet, BIP32 derivation, seed to private key]
sidebar_position: 2
sidebar_label: "How Seed Phrases Work"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "How does a seed phrase generate my wallet keys?", a: "The words are converted back into the original random number, stretched into a 512-bit seed with PBKDF2, and used to derive a master key. Every address in the wallet is then derived from that master key in a deterministic tree."},
  {q: "What is the BIP39 checksum for?", a: "It detects errors. A few bits of a hash of your entropy are appended to the phrase, so changing or mistyping a word makes the phrase fail validation instead of silently opening a different empty wallet."},
  {q: "Why are seed phrases 12 or 24 words?", a: "Because each word encodes 11 bits. 128 bits of entropy plus a 4-bit checksum divides into exactly 12 words; 256 bits plus 8 bits gives exactly 24."},
  {q: "Can two people generate the same seed phrase?", a: "Practically, no. With 2,048 options per position the number of possible phrases vastly exceeds the number of atoms in the observable universe, provided the randomness was generated properly."},
  {q: "My phrase restored but the balance is zero. What happened?", a: "Most often a derivation path mismatch: the wallet is looking at a different branch of the key tree than the one your funds sit on. Check that the phrase validates, then try the derivation path your original wallet used."},
]} />

<p class="doc-subtitle">From Random Numbers to Words to Keys</p>

<div class="tldr">

Your wallet generates a large random number, splits it into 11-bit chunks, and maps each chunk to a word from a fixed 2,048-word list. A checksum is appended so typos are caught. The same phrase always regenerates the same keys, on any wallet, which is why a [seed phrase](/docs/glossary/seed-phrase) restores everything without any backup of the keys themselves.

</div>

## Step 1: Generate Randomness

Everything starts with entropy - a large random number produced by your wallet, ideally from a hardware random source rather than software.

For a 12-word phrase this is **128 bits**. For 24 words, **256 bits**. This number is the actual secret; the words are only a way of writing it down.

The quality of that randomness is the foundation of everything above it. A wallet with a weak random source produces guessable seeds no matter how many words it displays, which is one reason generating a phrase on a device you trust matters more than the word count.

## Step 2: Add a Checksum

The entropy is hashed with SHA-256, and the first few bits of that hash are appended to the end - four bits for 128-bit entropy, eight bits for 256-bit.

This is what makes the phrase self-verifying. Change one word and the checksum no longer matches, so a compliant wallet rejects the phrase instead of silently opening a different, empty wallet.

It is also why the Seedkeeper App refuses a phrase that doesn't check out rather than storing it anyway - see [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases). An error caught at entry costs you thirty seconds; an error caught years later costs you everything.

## Step 3: Map Bits to Words

The entropy plus checksum is split into chunks of **11 bits**. Each chunk is a number from 0 to 2,047, and each number points at one word in the [BIP39](/docs/security-academy/seed-phrases/what-is-bip39) wordlist.

The arithmetic lines up exactly:

| Entropy | + checksum | Total bits | ÷ 11 | Words |
|---|---|---|---|---|
| 128 bits | 4 bits | 132 | 12 | **12 words** |
| 256 bits | 8 bits | 264 | 24 | **24 words** |

This is why phrases come in those specific lengths rather than any number you like, and why word order is not negotiable: position determines which 11 bits each word represents.

## Step 4: Derive the Seed, Then the Keys

The words are stretched into a 512-bit seed using PBKDF2 with 2,048 iterations of HMAC-SHA512. If you set an optional [passphrase](/docs/glossary/passphrase), it is mixed in at this stage - which is why a passphrase produces an entirely different wallet rather than merely locking the existing one.

From that seed, the wallet derives a master key, and from the master key an unlimited tree of child keys and addresses. This is what "deterministic wallet" means: the same phrase always produces the same tree, in the same order, on any compliant wallet.

The practical consequence is the one everybody relies on without thinking about it. Your wallet stores no keys worth backing up, because it can regenerate all of them from the phrase at any moment.

## Why Any Wallet Can Restore Your Phrase

Because every step above is a published standard, a phrase generated by one wallet works in another. That portability is a genuine benefit - you are not locked to a vendor who might disappear.

Two caveats worth knowing:

**Derivation paths can differ.** Wallets sometimes use different conventions for where in the key tree they look. A restored wallet showing a zero balance is more often a path mismatch than a lost phrase, and most wallets let you specify the path manually.

**Not every wallet uses BIP39.** Electrum, for instance, has its own mnemonic scheme with a different checksum. A phrase from one will not validate in the other.

## What This Means for Storage

Two properties follow directly from the mechanics, and both shape how a phrase should be kept.

**The phrase is the whole wallet.** There is nothing else to protect, and no second factor sitting behind it. Anyone who reads those words in order can reconstruct every key.

**It never expires.** Unlike a password, there is no rotation, no reset, no revocation. Whatever you write down today must stay both secret and legible for as long as you hold the assets - see [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase).

## FAQ

<details>
<summary>How does a seed phrase generate my wallet keys?</summary>

The words are converted back into the original random number, stretched into a 512-bit seed with PBKDF2, and used to derive a master key. Every address in the wallet is then derived from that master key in a deterministic tree.

</details>

<details>
<summary>What is the BIP39 checksum for?</summary>

It detects errors. A few bits of a hash of your entropy are appended to the phrase, so changing or mistyping a word makes the phrase fail validation instead of silently opening a different empty wallet.

</details>

<details>
<summary>Why are seed phrases 12 or 24 words?</summary>

Because each word encodes 11 bits. 128 bits of entropy plus a 4-bit checksum divides into exactly 12 words; 256 bits plus 8 bits gives exactly 24.

</details>

<details>
<summary>Can two people generate the same seed phrase?</summary>

Practically, no. With 2,048 options per position the number of possible phrases vastly exceeds the number of atoms in the observable universe, provided the randomness was generated properly.

</details>

<details>
<summary>My phrase restored but the balance is zero. What happened?</summary>

Most often a derivation path mismatch: the wallet is looking at a different branch of the key tree than the one your funds sit on. Check that the phrase validates, then try the derivation path your original wallet used.

</details>

## Related Articles

- [What is a Seed Phrase?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [What is BIP39?](/docs/security-academy/seed-phrases/what-is-bip39)
- [Common Seed Phrase Mistakes](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes)
- [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases)
