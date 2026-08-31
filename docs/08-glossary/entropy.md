---
title: "Entropy"
description: "A measure of genuine randomness - and therefore the real measure of how hard a password or seed phrase is to guess."
keywords: [entropy, randomness, password entropy, bits of entropy, brute force resistance]
sidebar_position: 11
sidebar_label: "Entropy"
---

Entropy is a measure of **unpredictability**. Something has high entropy when nothing about it can be anticipated: no pattern, no preference, no reason for one outcome rather than another. A coin toss has entropy; a coin that lands heads nine times out of ten has much less.

It is measured in **bits**, where each additional bit doubles the number of possible outcomes. Ten bits means about a thousand possibilities, twenty bits about a million.

That is what makes it the real measure of a secret's strength, because it counts exactly how many possibilities an attacker would have to work through. A 12-word [BIP39](/docs/glossary/bip39) phrase carries 128 bits, which is beyond any brute-force attack that will ever exist.

The practical consequence for passwords: entropy comes from **length and genuine randomness**, not from special characters. Three examples, in increasing order:

| Password | Entropy |
|---|---|
| `P@ssw0rd!` | Almost none |
| `john-doe-likes-eating-green-apple` | Some, from length alone |
| `velvet-tractor-orange-mountain-copper` | Very high |

`P@ssw0rd!` satisfies every complexity rule and is worth nothing, because those exact substitutions are the first thing cracking tools apply to dictionary words.

The middle one is a real improvement, and only because it is long. It is still a grammatical sentence naming a person, so it draws on a vocabulary and a structure an attacker can model - and personal details are what gets tried first. Length is doing all the work; randomness is doing none.

The third is five words drawn at random from a list. No grammar, no meaning, nothing to model. That is where the entropy actually comes from - see [What is a Strong Password?](/docs/security-academy/password-security/what-is-a-strong-password)

And the randomness has to come from a machine. A phrase you invent follows the patterns of your own mind, and those patterns are guessable - which is precisely why the middle example sits where it does.

## See Also

- [Password](/docs/glossary/password)
- [Passphrase](/docs/glossary/passphrase)
- [BIP39](/docs/glossary/bip39)
