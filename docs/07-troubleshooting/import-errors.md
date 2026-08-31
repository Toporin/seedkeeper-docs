---
title: "Import Errors"
description: "The app refuses a seed phrase, reports no space, or rejects an entry. What each error means and what to do about it."
keywords: [seed phrase invalid, BIP39 checksum error, memory full, import failed, Seedkeeper no space, mnemonic rejected]
sidebar_position: 8
sidebar_label: "Import Errors"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Why does the app say my seed phrase is invalid?", a: "It failed BIP39 validation - usually a misspelled word, words in the wrong order, an incomplete phrase, or the wrong language wordlist. The check exists to catch transcription errors while you can still fix them."},
  {q: "Can I store a non-BIP39 seed phrase?", a: "Yes, as a secure note rather than a Mnemonic Phrase. Electrum seeds, Monero phrases and raw private keys all go in as free text, with the same protection but without the format check."},
  {q: "What does the red exclamation mark mean when I add a secret?", a: "The device has no memory left. It holds 8 KB shared across all secrets - check usage at the top of Card's Information and delete entries you no longer need."},
  {q: "How many passwords fit on a Seedkeeper?", a: "Around a hundred, depending on how much label and detail you store with each. Long notes and seed phrases consume considerably more than a short password entry."},
  {q: "I imported a secret and it looks wrong. Can I edit it?", a: "No. The secure element cannot modify stored data, only create or delete. Copy the details, delete the entry, and create it again with your corrections."},
]} />

import GetSupport from '@site/docs/_get-support.mdx';

<p class="doc-subtitle">When the App Refuses What You Are Storing</p>

<div class="tldr">

Three errors account for nearly all of them: a seed phrase that fails the **BIP39 checksum**, a device with **no space left**, and a scan interrupted before the write completed. The first two are the app protecting you rather than malfunctioning.

</div>

## "Your seed phrase is invalid"

The app validates every mnemonic against the BIP39 standard before storing it, and refuses anything that fails. That refusal is deliberate: an error caught while you are typing costs thirty seconds, and the same error caught years later during a recovery costs everything.

Check, in this order:

**Spelling.** Every word must come from the BIP39 wordlist exactly. `recieve` is not a word; `receive` is.

**Word order.** The phrase is an ordered sequence, not a set. The same words in a different order are a different phrase - and often a valid one belonging to somebody else's empty wallet.

**Completeness.** 12, 15, 18, 21 or 24 words. Eleven words will never validate.

**The language.** BIP39 wordlists exist in several languages and they are not interchangeable. A French phrase will not validate against the English list.

**Whether it is BIP39 at all.** Electrum uses its own scheme, Monero uses a 25-word format, and some wallets have their own. None of these validate against BIP39 - see below.

Background in [What is BIP39?](/docs/security-academy/seed-phrases/what-is-bip39).

## Storing Something That Is Not BIP39

Use a **secure note** instead of the Mnemonic Phrase option.

An Electrum seed, a Monero phrase, a raw private key or any other recovery material goes in as free-form text: same secure element, same PIN, same offline guarantees, without the format check - see [Creating Secure Notes](/docs/product-documentation/password-manager/creating-secure-notes).

One trade-off worth knowing: a note accepts anything, so it verifies nothing. You lose the checksum safety net, which means transcribing with the care it would otherwise have provided.

## "No space left" or a Red Exclamation Mark

Your device holds **8 KB shared across every secret**. When it is full, attempting a new entry produces an NFC toast with a red exclamation mark and a memory error.

Check current usage at the top of **Card's Information**: firmware version, number of secrets, bytes used and bytes available - see [Device Settings](/docs/product-documentation/getting-started/device-settings).

In practice that is around a hundred passwords, depending on how much label and detail you attach to each. Seed phrases and long notes consume noticeably more than a short password entry.

To free space:

- **Delete entries you no longer need** - see [Deleting a Password](/docs/product-documentation/password-manager/deleting-a-password)
- **Trim long notes**, since free text is the biggest consumer
- **Move rarely used secrets to a second device**, which is worth having anyway

Note that OTP credentials and passkeys live in separate applets with their own limits - 50 and 90 respectively - and do not consume password manager memory.

## The Import Was Interrupted

If the card moved during the final scan, the write may or may not have completed.

**Check before retrying.** Open the secrets list and look for the entry. Importing the same secret twice is harmless but leaves a duplicate you will have to clean up.

To avoid it: rest the phone on a table, hold the card against it, and keep it there until the app confirms - see [Connection and NFC Issues](/docs/troubleshooting/connection-and-nfc-issues).

## The Entry Saved but Looks Wrong

**You cannot edit it.** The secure element can create and delete, never modify in place. Correcting an entry means copy the details, delete it, create it again - see [Editing a Password](/docs/product-documentation/password-manager/editing-a-password).

**Check you are not looking at an older entry.** Secrets are listed newest first, and a duplicate from an interrupted import will sit at the top while the original is further down.

## The Entry Is Not in the List

**Sort order.** Newest first, always. A secret added a while ago is further down than you expect.

**Search only appears when the list is long.** The search bar shows up once your secrets no longer fit on one screen - see [Organizing Passwords](/docs/product-documentation/password-manager/organizing-passwords).

**Wrong device.** With two identical cards this is more common than it sounds. Name them in Card's Information.

## FAQ

<details>
<summary>Why does the app say my seed phrase is invalid?</summary>

It failed BIP39 validation - usually a misspelled word, words in the wrong order, an incomplete phrase, or the wrong language wordlist. The check exists to catch transcription errors while you can still fix them.

</details>

<details>
<summary>Can I store a non-BIP39 seed phrase?</summary>

Yes, as a secure note rather than a Mnemonic Phrase. Electrum seeds, Monero phrases and raw private keys all go in as free text, with the same protection but without the format check.

</details>

<details>
<summary>What does the red exclamation mark mean when I add a secret?</summary>

The device has no memory left. It holds 8 KB shared across all secrets - check usage at the top of Card's Information and delete entries you no longer need.

</details>

<details>
<summary>How many passwords fit on a Seedkeeper?</summary>

Around a hundred, depending on how much label and detail you store with each. Long notes and seed phrases consume considerably more than a short password entry.

</details>

<details>
<summary>I imported a secret and it looks wrong. Can I edit it?</summary>

No. The secure element cannot modify stored data, only create or delete. Copy the details, delete the entry, and create it again with your corrections.

</details>

## Related Articles

- [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Creating Secure Notes](/docs/product-documentation/password-manager/creating-secure-notes)
- [Editing a Password](/docs/product-documentation/password-manager/editing-a-password)
- [Device Settings](/docs/product-documentation/getting-started/device-settings)
- [What is BIP39?](/docs/security-academy/seed-phrases/what-is-bip39)

<GetSupport />
