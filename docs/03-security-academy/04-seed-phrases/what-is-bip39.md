---
title: "What is BIP39?"
description: "BIP39 is the standard that turns random entropy into a readable word list. The 2048-word vocabulary, the checksum, and the optional passphrase explained."
keywords: [what is BIP39, BIP39 standard, BIP39 wordlist, mnemonic standard, BIP39 passphrase, 25th word, BIP32 BIP44]
sidebar_position: 3
sidebar_label: "What is BIP39?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is BIP39?", a: "A public specification defining how random entropy is converted into a mnemonic phrase of 12 or 24 words, using a fixed 2,048-word list plus a checksum, and how those words are converted into a wallet seed."},
  {q: "Why does BIP39 use exactly 2048 words?", a: "Because 2,048 is 2 to the power of 11, so each word encodes exactly 11 bits. That makes the mapping between the random number and the words clean and lossless."},
  {q: "What is a BIP39 passphrase?", a: "An optional extra secret mixed in when the words are converted to a seed. It produces a completely different wallet rather than locking the existing one, which means forgetting it loses access just as surely as losing the phrase."},
  {q: "Is the BIP39 passphrase the same as the 25th word?", a: "They refer to the same feature, but the nickname is misleading: it is not taken from the wordlist and it is not appended to the phrase. It is a separate secret combined at the derivation stage."},
  {q: "Can I use a BIP39 phrase in any wallet?", a: "In most modern wallets, yes, since BIP39 is widely adopted. Exceptions exist - Electrum and Monero use their own schemes - and derivation path differences can make a correctly restored wallet appear empty."},
  {q: "Can I store a non-BIP39 seed phrase on a Seedkeeper?", a: "Yes, as a secure note rather than a Mnemonic Phrase. The Mnemonic option validates against the BIP39 checksum and rejects anything that fails, so Electrum, Monero and other schemes go in the Notes section instead - same secure element and same PIN, without the format check."},
  {q: "Why does the Seedkeeper App reject my seed phrase?", a: "Because it validates every mnemonic against the BIP39 standard before storing it. A rejection almost always means a misspelled word, a word outside the list, words in the wrong order, or the wrong language wordlist."},
  {q: "Why is my BIP39 phrase invalid?", a: "Usually a misspelled word, a word not in the list, words in the wrong order, or the wrong language wordlist. The checksum catches all four, which is exactly what it exists to do."},
]} />

<p class="doc-subtitle">The Standard Behind the Words</p>

<div class="tldr">

BIP39 is the specification that defines how a random number becomes a readable list of words, and how those words become a wallet seed. It fixes a 2,048-word vocabulary, adds a checksum so typos are caught, and defines an optional [passphrase](/docs/glossary/passphrase) that produces an entirely separate wallet. It is why a phrase from one wallet works in another.

</div>

## What BIP39 Actually Is

BIP stands for **Bitcoin Improvement Proposal** - a numbered public document describing a change or convention for anyone to implement. BIP39, proposed in 2013, covers mnemonic phrases specifically.

It is not software, not a company, and not owned by anyone. That's precisely why it spread beyond Bitcoin: Ethereum wallets, hardware wallets and multi-chain applications all adopted it because a common format was more useful to everyone than a dozen incompatible ones.

## The Wordlist

BIP39 defines exactly **2,048 words**, chosen under constraints that are more thoughtful than they first appear.

- **The first four letters are unique.** `abandon` and `ability` differ within four characters, so a phrase can be stamped into metal using only four letters per word and still be unambiguous.
- **No similar-looking pairs.** Words that could be confused when handwritten or read quickly were excluded.
- **Common, simple vocabulary.** Easy to spell, easy to read back over the phone, easy to recognise for non-native speakers.
- **Sorted alphabetically**, which makes lookup and implementation straightforward.

Official wordlists exist in several languages - Japanese, Spanish, French, Italian, Korean, Czech and Chinese among them. They are not interchangeable: a phrase generated from the French list will not validate against the English one, so if you ever restore a wallet in the wrong language, the words are fine and the list is wrong.

## The Checksum

A few bits derived from a hash of your entropy are appended to the phrase - four bits for a 12-word phrase, eight for 24.

The effect is that **a random set of twelve BIP39 words is almost certainly invalid**. Only about one in sixteen possible 12-word combinations passes the checksum. So a mistyped or misremembered word is rejected rather than silently opening a different, valid, empty wallet.

This is the single most user-protective part of the standard, and it's why a wallet refusing your phrase is usually doing you a favour. See [How Seed Phrases Work](/docs/security-academy/seed-phrases/how-seed-phrases-work).

## The Optional Passphrase

BIP39 defines an extra secret, sometimes called the "25th word" - a misleading nickname, because it is not a word from the list and not appended to the phrase.

The passphrase is mixed in when the words are stretched into the final seed. That timing has a consequence people underestimate:

**A different passphrase produces a completely different wallet.** Not a locked version of the same one - a separate, valid, empty wallet. There is no error message, because from the software's point of view nothing is wrong.

That property is what makes it powerful and what makes it dangerous:

- **Powerful**, because someone who finds your written phrase gets an empty wallet, and because it enables plausible deniability - a decoy wallet with a small balance and no passphrase, alongside the real one.
- **Dangerous**, because forgetting it loses the funds as surely as losing the phrase. There is no recovery, no hint, and no way to know you typed it slightly wrong.

If you use one, treat it as a second secret of equal importance, stored **separately** from the phrase itself. A Seedkeeper can hold both - see [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases), which supports an optional passphrase field alongside the mnemonic.

## Where BIP39 Stops

BIP39 covers entropy, words and the seed. It says nothing about what the wallet does next.

- **BIP32** defines the hierarchical tree of keys derived from the seed.
- **BIP44** and its relatives define the derivation paths - which branch of that tree holds which coin's addresses.

This is why a phrase can restore correctly and still show a zero balance: the words were right, the path was different. The three standards are usually implemented together and are often loosely referred to as "BIP39 wallets".

## How Seedkeeper Handles This

Because the checksum makes a phrase self-verifying, the Seedkeeper App uses it as a gate rather than a suggestion.

**Seed phrases must be BIP39-compliant to be stored as a Mnemonic Phrase.** When you import one, the app validates it against the standard - the wordlist, the length, and the checksum - and refuses anything that doesn't check out. That refusal is deliberate: a phrase that fails validation is almost always a transcription error, and catching it at the moment you type it costs thirty seconds, while catching it years later during a recovery costs everything. See [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases).

**For anything that isn't BIP39, use a secure note instead.** An Electrum phrase, a Monero 25-word seed, a raw private key, or a recovery phrase from a wallet with its own scheme can all be stored as free-form text in the password manager - same secure element, same PIN, same offline guarantees, without the format check. See [Creating Secure Notes](/docs/product-documentation/password-manager/creating-secure-notes).

The trade-off is worth understanding: a secure note accepts anything, and therefore verifies nothing. If you store a non-BIP39 seed that way, transcribe it with the care that a checksum would otherwise have given you.

## Not Every Wallet Uses BIP39

Worth knowing before you assume portability.

**Electrum** has its own mnemonic scheme with a different checksum, which is why an Electrum phrase may not validate in a BIP39 wallet and vice versa.

**Monero** uses a 25-word scheme of its own, unrelated to BIP39.

**Some exchanges and custodial apps** issue phrases that only work in their own software. If a phrase is described as a recovery phrase but validates nowhere else, that's usually why.

## FAQ

<details>
<summary>What is BIP39?</summary>

A public specification defining how random entropy is converted into a mnemonic phrase of 12 or 24 words, using a fixed 2,048-word list plus a checksum, and how those words are converted into a wallet seed.

</details>

<details>
<summary>Why does BIP39 use exactly 2048 words?</summary>

Because 2,048 is 2 to the power of 11, so each word encodes exactly 11 bits. That makes the mapping between the random number and the words clean and lossless.

</details>

<details>
<summary>What is a BIP39 passphrase?</summary>

An optional extra secret mixed in when the words are converted to a seed. It produces a completely different wallet rather than locking the existing one, which means forgetting it loses access just as surely as losing the phrase.

</details>

<details>
<summary>Is the BIP39 passphrase the same as the 25th word?</summary>

They refer to the same feature, but the nickname is misleading: it is not taken from the wordlist and it is not appended to the phrase. It is a separate secret combined at the derivation stage.

</details>

<details>
<summary>Can I use a BIP39 phrase in any wallet?</summary>

In most modern wallets, yes, since BIP39 is widely adopted. Exceptions exist - Electrum and Monero use their own schemes - and derivation path differences can make a correctly restored wallet appear empty.

</details>

<details>
<summary>Can I store a non-BIP39 seed phrase on a Seedkeeper?</summary>

Yes, as a secure note rather than a Mnemonic Phrase. The Mnemonic option validates against the BIP39 checksum and rejects anything that fails, so Electrum, Monero and other schemes go in the Notes section instead - same secure element and same PIN, without the format check.

</details>

<details>
<summary>Why does the Seedkeeper App reject my seed phrase?</summary>

Because it validates every mnemonic against the BIP39 standard before storing it. A rejection almost always means a misspelled word, a word outside the list, words in the wrong order, or the wrong language wordlist.

</details>

<details>
<summary>Why is my BIP39 phrase invalid?</summary>

Usually a misspelled word, a word not in the list, words in the wrong order, or the wrong language wordlist. The checksum catches all four, which is exactly what it exists to do.

</details>

## Related Articles

- [How Seed Phrases Work](/docs/security-academy/seed-phrases/how-seed-phrases-work)
- [What is a Seed Phrase?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Creating Secure Notes](/docs/product-documentation/password-manager/creating-secure-notes)
