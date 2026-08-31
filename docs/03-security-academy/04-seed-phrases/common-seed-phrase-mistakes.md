---
title: "Common Seed Phrase Mistakes"
description: "The handful of errors behind almost every lost crypto wallet - from cloud photos and fake support to keeping a single copy nobody ever tested."
keywords: [seed phrase mistakes, lost crypto wallet, seed phrase scam, fake wallet support, seed phrase photo, crypto security errors]
sidebar_position: 5
sidebar_label: "Common Seed Phrase Mistakes"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is the most common way people lose a seed phrase?", a: "Storing it on something connected to the internet - a phone photo, a synced notes app, or a cloud file. These sync and back up automatically, and automated tools actively scan for exposed phrases."},
  {q: "Does storing a seed phrase electronically always count as a mistake?", a: "No - what matters is connectivity, not the medium. A phone or a cloud vault is dangerous because it is networked, runs arbitrary software and syncs automatically. A secure element has no network, no operating system and no way to release the secret without the device and its PIN, which puts it firmly on the safe side of that line."},
  {q: "Will a wallet support team ever ask for my seed phrase?", a: "Never, under any circumstances. Legitimate support does not need it and does not contact you first. Anyone asking is an attacker, however knowledgeable and patient they seem."},
  {q: "Is it safe to split my seed phrase in half?", a: "No, unless you use a scheme designed for it. Improvised splitting gives anyone holding one part a large head start, and makes losing either part fatal to the whole."},
  {q: "Can I use the recovery phrase printed on a card that came with my wallet?", a: "No. Whoever printed it can access the wallet at any time. Always initialise the device yourself and generate a fresh phrase you have watched being created."},
  {q: "Do I need to test my seed phrase backup?", a: "Yes, once. Transcription errors and ambiguous handwriting only reveal themselves during a restore, and discovering them when you actually need the backup is too late."},
  {q: "What if my seed phrase has already been exposed?", a: "Treat the wallet as compromised. Generate a completely new wallet on a device you trust and move every asset to it immediately - a phrase cannot be changed or revoked."},
]} />

import BuyBackupDevice from '@site/docs/_buy-backup-device.mdx';

<p class="doc-subtitle">The Errors That Empty Wallets</p>

<div class="tldr">

Almost nobody loses a wallet to cryptography. They lose it to a photo that synced to the cloud, a phrase typed into a convincing fake page, a single copy destroyed in a fire, or a backup nobody ever tested. Every mistake below is ordinary, avoidable, and permanent.

</div>

## Storing It on Anything Connected

The most common, by a wide margin.

A photo in your camera roll, a note in a synced notes app, a text file on the desktop, a message to yourself, a cloud password manager entry. Each feels harmless because the device feels private. It isn't: photo libraries and notes sync automatically, deleted files linger in backups, and one compromised cloud account exposes everything at once.

Automated tools continuously scan public repositories, exposed storage buckets and pasted text for anything matching the [BIP39](/docs/security-academy/seed-phrases/what-is-bip39) word pattern. A phrase that reaches the open internet is typically drained faster than a person could react.

**Instead:** keep it somewhere that cannot reach a network at all.

Paper and metal qualify, and they share one weakness: anyone who finds them can read them. A **secure element** closes that gap, because it is purpose-built hardware that does one job and nothing else.

The distinction worth being precise about is that "digital" is the wrong word for what makes storage dangerous. The risk is not that a secret is held electronically - it is that general-purpose devices are permanently connected, run software you did not write, and synchronise without asking. A secure element has none of that: no network stack, no operating system, no apps, no automatic backup, nothing to update. The phrase is written into certified hardware and released only when the device is physically present and a PIN is entered. There is no path for it to leak, because there is nowhere for it to go.

That is what a Seedkeeper is: an EAL6+ certified chip holding your phrase, your optional passphrase and your wallet descriptor together - unreadable to whoever finds it, indifferent to fire and water in a way paper is not, and small enough to actually keep somewhere sensible. See [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases) and [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase).

## Typing It Into a Website

There is no legitimate reason for a website to ask for your seed phrase. None.

Not to "validate" it, not to "sync" your wallet, not to "claim an airdrop", not to "restore access", not to check whether it's compromised. Every page that asks is stealing it, including the ones that look exactly like the wallet you use - see the lookalike domain example in [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked#phishing-email-and-fake-websites).

The only place a phrase should ever be entered is your own wallet software or your own hardware, during a restore you initiated yourself.

## Trusting Support That Contacted You

A close relative of the previous one, and the reason many people lose funds while being careful.

You post a problem in a forum or a Discord. Minutes later, someone helpful sends a direct message. They're patient, they know the product, they walk you through a "verification tool". Or a well-designed email announces a security issue with your wallet and asks you to confirm your recovery phrase.

**No legitimate support person will ever ask for your seed phrase**, and real support does not contact you first. Anyone who does is, without exception, an attacker.

## Keeping Only One Copy

The mistake that produces the quietest losses, because there's nobody to blame.

A single sheet of paper is one fire, one flood, one house move, one over-enthusiastic tidy-up away from permanent loss. The funds remain visible on-chain forever, and unreachable.

**Instead:** at least two copies, in different physical locations, on media that survive water and heat.

<BuyBackupDevice />

## Never Testing the Backup

Writing a phrase down and filing it away is an assumption, not a backup.

Words get transcribed wrong. Handwriting becomes ambiguous years later - a `1` that might be a `7`, an `l` that might be an `I`. Word 8 and word 9 get swapped. None of this surfaces until the day you actually need it, which is the worst possible moment to discover it.

**Instead:** restore the phrase once into a wallet, confirm the addresses match, then put it away. Half an hour now against everything later.

## Storing the Passphrase Next to the Phrase

If you use a BIP39 passphrase, it exists so that finding the words is not enough.

Written on the same sheet, in the same tin, in the same drawer, it protects nothing. It is only a second factor if it is in a second place.

Its counterpart is just as costly: a passphrase you cannot recall loses the funds as completely as a lost phrase, with no error message and no way to know you typed it slightly wrong. See [What is BIP39?](/docs/security-academy/seed-phrases/what-is-bip39#the-optional-passphrase).

## Reordering or "Tidying" the Words

The phrase is an ordered sequence. Alphabetising the words to make them easier to find, or writing them in a grid without numbering the positions, destroys it.

The same twelve words in a different order produce a valid, empty wallet that isn't yours - and the checksum will often accept it silently.

**Instead:** number every word, explicitly, in the order the wallet displayed them.

## Splitting It Naively

Cutting a 24-word phrase into two halves and hiding them separately feels clever. It is worse than one copy in both directions.

Someone holding twelve of your words has dramatically less work to do than someone holding none. And losing either half loses everything, so you have doubled the ways to fail while weakening the secret.

Schemes designed for this exist and are mathematically sound, but improvised splitting is not one of them.

## Using a Phrase Someone Else Generated

Never use a wallet that arrives with a phrase already written on a card, however official the packaging looks. Whoever printed it can empty the wallet whenever they choose - often years later, after you've funded it.

The same applies to phrases generated by a website, or by any device you did not initialise yourself. A phrase is only yours if you watched it being created on hardware you control.

## Not Deciding What Happens After You

Not a security mistake, but it loses just as much.

If you are the only person who can reach the phrase, then the assets vanish with you. Decide deliberately whether they should be recoverable by someone else, and leave enough for them to act without leaving enough for a stranger who finds the same note.

## FAQ

<details>
<summary>What is the most common way people lose a seed phrase?</summary>

Storing it on something connected to the internet - a phone photo, a synced notes app, or a cloud file. These sync and back up automatically, and automated tools actively scan for exposed phrases.

</details>

<details>
<summary>Does storing a seed phrase electronically always count as a mistake?</summary>

No - what matters is connectivity, not the medium. A phone or a cloud vault is dangerous because it is networked, runs arbitrary software and syncs automatically. A secure element has no network, no operating system and no way to release the secret without the device and its PIN, which puts it firmly on the safe side of that line.

</details>

<details>
<summary>Will a wallet support team ever ask for my seed phrase?</summary>

Never, under any circumstances. Legitimate support does not need it and does not contact you first. Anyone asking is an attacker, however knowledgeable and patient they seem.

</details>

<details>
<summary>Is it safe to split my seed phrase in half?</summary>

No, unless you use a scheme designed for it. Improvised splitting gives anyone holding one part a large head start, and makes losing either part fatal to the whole.

</details>

<details>
<summary>Can I use the recovery phrase printed on a card that came with my wallet?</summary>

No. Whoever printed it can access the wallet at any time. Always initialise the device yourself and generate a fresh phrase you have watched being created.

</details>

<details>
<summary>Do I need to test my seed phrase backup?</summary>

Yes, once. Transcription errors and ambiguous handwriting only reveal themselves during a restore, and discovering them when you actually need the backup is too late.

</details>

<details>
<summary>What if my seed phrase has already been exposed?</summary>

Treat the wallet as compromised. Generate a completely new wallet on a device you trust and move every asset to it immediately - a phrase cannot be changed or revoked.

</details>

## Related Articles

- [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [What is a Seed Phrase?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [What is BIP39?](/docs/security-academy/seed-phrases/what-is-bip39)
- [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked)
- [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases)
