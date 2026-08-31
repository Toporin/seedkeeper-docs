---
title: "Passphrase"
description: "An optional extra secret added to a BIP39 seed phrase, producing an entirely different wallet rather than locking the existing one."
keywords: [passphrase, BIP39 passphrase, 25th word, seed phrase passphrase]
sidebar_position: 20
sidebar_label: "Passphrase"
---

A passphrase is an optional secret mixed in when a [seed phrase](/docs/glossary/seed-phrase) is converted into a wallet seed. Sometimes called the "25th word", though it is neither a word from the BIP39 list nor appended to the phrase.

The consequence people underestimate: a different passphrase produces a **completely different wallet**, not a locked version of the same one. That makes it powerful, since finding your written words is then not enough, and dangerous, since forgetting it loses the funds as surely as losing the phrase. Store it separately from the phrase itself - see [What is BIP39?](/docs/security-academy/seed-phrases/what-is-bip39#the-optional-passphrase)

In everyday password usage, "passphrase" also describes a password built from several random words, which is longer and easier to remember than a short complex string - see [What is a Strong Password?](/docs/security-academy/password-security/what-is-a-strong-password)

## See Also

- [Seed Phrase](/docs/glossary/seed-phrase)
- [BIP39](/docs/glossary/bip39)
- [Password](/docs/glossary/password)
- [Entropy](/docs/glossary/entropy)
