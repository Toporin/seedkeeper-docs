---
title: "How to Securely Store a Seed Phrase"
description: "Paper, metal or hardware - the realistic options for keeping a seed phrase both secret and legible for years, and how to survive fire, theft and time."
keywords: [how to store seed phrase, seed phrase storage, metal backup, offline seed storage, protect recovery phrase, seed phrase safe]
sidebar_position: 4
sidebar_label: "How to Securely Store a Seed Phrase"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is the safest way to store a seed phrase?", a: "Two copies on fire-resistant media such as stamped metal, kept in physically separate locations, with nothing ever stored on an internet-connected device. Add a hardware secure element if you want the phrase unreadable to whoever finds it."},
  {q: "Can I store my seed phrase in a password manager?", a: "Not in a cloud-synced one. Your phrase would then be protected by a master password and a provider's infrastructure, both of which can be compromised. An offline device or physical medium keeps it out of that chain entirely."},
  {q: "Is it safe to take a photo of my seed phrase?", a: "No. Phone photo libraries sync to the cloud automatically, and a photo is trivially readable by anyone who reaches that account. This is one of the most common ways phrases are lost."},
  {q: "Should I split my seed phrase into parts?", a: "Generally not, unless you are using a scheme designed for it. Naively splitting the words reduces the guessing difficulty for anyone holding a fragment and multiplies the chance that one lost part makes the rest useless."},
  {q: "How many copies of my seed phrase should I keep?", a: "Two is the practical minimum, in different physical locations. One copy risks total loss to a single fire or flood; many copies scattered nearby multiply the chance of one being found."},
  {q: "Where should I keep my BIP39 passphrase?", a: "Somewhere separate from the phrase itself. Stored together, it adds nothing, since anyone finding both has full access. Separated, it means finding the written words alone is not enough."},
]} />

import BuySeedkeeperPro from '@site/docs/_buy-seedkeeper-pro.mdx';

<p class="doc-subtitle">Secret, Durable, and Still Readable in Ten Years</p>

<div class="tldr">

A [seed phrase](/docs/glossary/seed-phrase) has to survive two opposite threats at once: being **found** by someone else, and being **lost** by you. Most people solve one and forget the other. The workable answer is at least two copies, in different physical locations, on media that survive fire and water, with nothing ever touching an internet-connected device.

</div>

## The Two Failure Modes

Every storage decision is a trade-off between two ways of losing everything.

**Disclosure.** Someone finds the phrase - a burglar, a housemate, a cloud sync you forgot about, a photo backed up automatically. The funds leave within minutes and there is no recourse.

**Loss.** Fire, flood, a house move, faded ink, or simply forgetting where you put it. The funds are still there, visible on-chain, and permanently out of reach.

Optimising hard for one creates the other. A single copy buried in a wall is safe from disclosure and one house fire away from total loss. Three copies scattered around the house are safe from loss and a single burglary away from disclosure. The answer is redundancy **plus** separation, not one or the other.

## The Absolute Rule: Nothing Connected

Before anything else, the one rule with no exceptions.

**A seed phrase must never exist on a device that touches the internet.** That means no photo, no screenshot, no notes app, no email draft, no cloud password manager, no messaging app to yourself, no text file "temporarily".

Phone photo libraries sync automatically. Notes apps sync automatically. A file deleted from a laptop often survives in a backup for months. And automated bots continuously scan public repositories and exposed storage for anything matching the BIP39 word pattern.

Typing a phrase into a website is worse still, whatever the site claims to do with it. There is no legitimate reason for a web page to ask for your seed phrase, ever.

## Option 1: Paper

The default, and better than its reputation - provided you accept its limits.

**Good:** costs nothing, no technology to fail, readable by anyone who needs to recover the wallet after you.

**Bad:** burns, soaks, fades, tears, and is readable at a glance by whoever finds it.

If you use paper, use pencil rather than ink - graphite doesn't fade or run - write in clear block capitals, number the words explicitly, and seal it in something waterproof. Then treat it as a starting point rather than a final answer.

## Option 2: Metal

The standard answer for meaningful amounts, and the reason is straightforward: house fires reach temperatures that destroy paper long before they trouble steel.

Stamped plates, engraved cards and letter tiles are all sold for this. Because BIP39 words are uniquely identified by their **first four letters**, you only need to record four characters per word, which makes stamping realistic.

**Good:** survives fire, flood, decades of time.

**Bad:** costs money, takes an hour to make, and is just as readable as paper to anyone who finds it. Metal solves loss, not disclosure.

## Option 3: A Hardware Device

A secure element stores the phrase offline and releases it only after a PIN.

This is where the "nothing digital" rule needs a precise reading. The rule exists because general-purpose devices are networked, run arbitrary software, and sync without asking. A secure element does none of those things: no network stack, no operating system, nothing to install, and no path to read the data out without the PIN.

A Seedkeeper stores a seed phrase alongside an optional passphrase and wallet descriptor, on an EAL6+ certified chip - see [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases). It also holds several phrases at once, which matters if you run more than one wallet.

**Good:** unreadable to whoever finds it, compact, survives handling, holds multiple phrases and other secrets.

**Bad:** a device to keep track of, and a PIN that must not be forgotten.

<BuySeedkeeperPro />

## Store the Passphrase Separately

If you use a BIP39 [passphrase](/docs/security-academy/seed-phrases/what-is-bip39#the-optional-passphrase), keeping it next to the phrase defeats the entire point.

The passphrase exists so that finding the words is not enough. Written on the same sheet of paper, it becomes decoration. Different location, different medium, and remembered separately.

## A Setup That Actually Works

Nothing exotic, and it covers both failure modes:

1. **A primary copy** in metal, at home, somewhere not obvious and not labelled.
2. **A second copy** in a genuinely different location - a family member's home, a safe deposit box, a second property. Different building, ideally different town.
3. **The passphrase**, if you use one, stored apart from both.
4. **A hardware device** if you prefer something that isn't readable at a glance, or if you hold several phrases.
5. **A test restore** into a wallet, once, before you rely on any of it.

That last point is the one people skip and regret. A backup you have never restored is an assumption, not a backup.

## Think About What Happens After You

Self-custody has an uncomfortable corollary: if nobody can access your phrase, nobody can, including your family.

Decide deliberately whether the assets should be recoverable by someone else, and if so, leave enough for them to act - where the copies are and what to do with them - without leaving enough for a stranger who finds that note. A sealed letter with a trusted person, or instructions that only make sense combined with something they already have, are two workable approaches. See [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained) for the same problem applied to accounts.

## FAQ

<details>
<summary>What is the safest way to store a seed phrase?</summary>

Two copies on fire-resistant media such as stamped metal, kept in physically separate locations, with nothing ever stored on an internet-connected device. Add a hardware secure element if you want the phrase unreadable to whoever finds it.

</details>

<details>
<summary>Can I store my seed phrase in a password manager?</summary>

Not in a cloud-synced one. Your phrase would then be protected by a master password and a provider's infrastructure, both of which can be compromised. An offline device or physical medium keeps it out of that chain entirely.

</details>

<details>
<summary>Is it safe to take a photo of my seed phrase?</summary>

No. Phone photo libraries sync to the cloud automatically, and a photo is trivially readable by anyone who reaches that account. This is one of the most common ways phrases are lost.

</details>

<details>
<summary>Should I split my seed phrase into parts?</summary>

Generally not, unless you are using a scheme designed for it. Naively splitting the words reduces the guessing difficulty for anyone holding a fragment and multiplies the chance that one lost part makes the rest useless.

</details>

<details>
<summary>How many copies of my seed phrase should I keep?</summary>

Two is the practical minimum, in different physical locations. One copy risks total loss to a single fire or flood; many copies scattered nearby multiply the chance of one being found.

</details>

<details>
<summary>Where should I keep my BIP39 passphrase?</summary>

Somewhere separate from the phrase itself. Stored together, it adds nothing, since anyone finding both has full access. Separated, it means finding the written words alone is not enough.

</details>

## Related Articles

- [Common Seed Phrase Mistakes](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes)
- [What is a Seed Phrase?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [What is BIP39?](/docs/security-academy/seed-phrases/what-is-bip39)
- [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Security Best Practices](/docs/product-documentation/getting-started/security-best-practices)
