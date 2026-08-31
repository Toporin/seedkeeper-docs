---
title: "What is a Seed Phrase?"
description: "A seed phrase is a list of ordinary words that encodes every private key in a crypto wallet. Whoever holds it holds the funds - permanently."
keywords: [what is a seed phrase, recovery phrase, mnemonic phrase, crypto wallet backup, 12 word phrase, 24 word phrase, BIP39]
sidebar_position: 1
sidebar_label: "What is a Seed Phrase?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is a seed phrase?", a: "A list of 12 or 24 ordinary words encoding the master key of a crypto wallet. Every private key in that wallet is derived from it, so the phrase is functionally equivalent to the funds themselves."},
  {q: "Is a seed phrase the same as a private key?", a: "Not quite. A private key controls one address; a seed phrase generates the master key from which every address in the wallet is derived. Holding the phrase means holding all of them."},
  {q: "Can I change my seed phrase if it leaks?", a: "No. A seed phrase cannot be changed or reset. If it has been exposed, the only response is to generate a brand new wallet and move every asset to it immediately."},
  {q: "Is 24 words safer than 12?", a: "In practice both are beyond brute force - 12 words already carry 128 bits of entropy. The difference is a theoretical margin, not a practical one, and how you store the phrase matters far more than its length."},
  {q: "Does the order of the words matter?", a: "Yes, completely. The same words in a different order produce a different, valid, empty wallet. Never reorder or alphabetise them."},
  {q: "Can someone guess my seed phrase?", a: "No. There are 2,048 possible words per position, giving more combinations than there are atoms in the observable universe. Every real-world loss comes from a phrase being stored somewhere it could be found, not guessed."},
]} />

<p class="doc-subtitle">Twelve Words That Are Your Wallet</p>

<div class="tldr">

A seed phrase is a list of 12 or 24 ordinary words that encodes the master key to a crypto wallet. Every address and every private key in that wallet is derived from it, which means the phrase **is** the wallet: whoever holds those words holds the funds, and unlike a password, it can never be changed or reset.

</div>

## The Definition

A [seed phrase](/docs/glossary/seed-phrase) - also called a recovery phrase or mnemonic - is a human-readable encoding of a large random number.

That number is the seed from which your wallet mathematically derives every private key it will ever use. Lose the wallet app, lose the phone, drop the hardware wallet in a river: enter the phrase into any compatible wallet and everything comes back, because nothing was ever stored in the device itself.

The words exist purely for human hands. A raw seed looks like `a3f9c2e8...` for sixty-four characters, which nobody can copy by hand without errors. Twelve words can be written down, checked, and read back aloud.

## Why It Is Not a Password

This is the distinction that matters most, and the one that catches people out.

| | Password | Seed phrase |
|---|---|---|
| **Can be changed** | ✅ Yes, any time | ❌ Never |
| **Can be reset by a provider** | ✅ Usually | ❌ Nobody can |
| **What it protects** | One account | Every address in the wallet |
| **If it leaks** | Change it, move on | Funds are gone, usually within minutes |
| **Who can help** | Support | Nobody |

A leaked password is an inconvenience with a reset link. A leaked seed phrase is final. There is no support desk, no fraud department, no reversal - the whole point of self-custody is that no third party holds authority over your funds, and that cuts both ways.

Automated bots continuously scan public repositories, cloud storage and pasted text for anything matching the [BIP39](/docs/security-academy/seed-phrases/what-is-bip39) word pattern. A phrase exposed online is typically emptied faster than a human could react.

## Why 12 or 24 Words

The word count reflects how much randomness is behind it.

**12 words** carry 128 bits of entropy. **24 words** carry 256 bits. Both are far beyond any conceivable brute-force attack - the difference is theoretical rather than practical, and 12 words are already unguessable by any computer that will ever exist.

Some wallets offer 24 words as a margin against future cryptographic surprises. Neither choice is wrong, and neither protects you if the phrase is stored badly, which is where essentially all real losses come from. See [Common Seed Phrase Mistakes](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes).

## The Words Are Not Random Vocabulary

Each word comes from a fixed list of 2,048 English words, defined by the BIP39 standard. That constraint is deliberate and does three useful things:

- **The words are short and unambiguous** - no homophones, no words that look alike at a glance.
- **The first four letters identify each word uniquely**, so `abandon` and `aband` are the same entry, which makes metal engraving practical.
- **The list enables a checksum**, so a mistyped word is detected rather than silently producing a different, empty wallet.

See [How Seed Phrases Work](/docs/security-academy/seed-phrases/how-seed-phrases-work) for what happens between those words and your keys.

## Word Order Matters

A common misunderstanding worth stating plainly: the phrase is an ordered sequence, not a set.

The same twelve words in a different order produce a completely different seed, and therefore a completely different wallet - one that is valid, empty, and not yours. Storing the words alphabetically to "make them easier to find" destroys the phrase.

## Where Yours Should Live

A seed phrase should never exist on anything connected to the internet. Not in a screenshot, not in a notes app, not in a cloud password manager, not in an email to yourself.

That leaves two sensible homes: paper or metal kept physically safe, and hardware that stores it offline. A Seedkeeper does the second - the phrase goes into an EAL6+ secure element with no network of any kind, and can be read back only after presenting the device and a PIN. See [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases) and, for the full reasoning, [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase).

## FAQ

<details>
<summary>What is a seed phrase?</summary>

A list of 12 or 24 ordinary words encoding the master key of a crypto wallet. Every private key in that wallet is derived from it, so the phrase is functionally equivalent to the funds themselves.

</details>

<details>
<summary>Is a seed phrase the same as a private key?</summary>

Not quite. A private key controls one address; a seed phrase generates the master key from which every address in the wallet is derived. Holding the phrase means holding all of them.

</details>

<details>
<summary>Can I change my seed phrase if it leaks?</summary>

No. A seed phrase cannot be changed or reset. If it has been exposed, the only response is to generate a brand new wallet and move every asset to it immediately.

</details>

<details>
<summary>Is 24 words safer than 12?</summary>

In practice both are beyond brute force - 12 words already carry 128 bits of entropy. The difference is a theoretical margin, not a practical one, and how you store the phrase matters far more than its length.

</details>

<details>
<summary>Does the order of the words matter?</summary>

Yes, completely. The same words in a different order produce a different, valid, empty wallet. Never reorder or alphabetise them.

</details>

<details>
<summary>Can someone guess my seed phrase?</summary>

No. There are 2,048 possible words per position, giving more combinations than there are atoms in the observable universe. Every real-world loss comes from a phrase being stored somewhere it could be found, not guessed.

</details>

## Related Articles

- [How Seed Phrases Work](/docs/security-academy/seed-phrases/how-seed-phrases-work)
- [What is BIP39?](/docs/security-academy/seed-phrases/what-is-bip39)
- [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases)
