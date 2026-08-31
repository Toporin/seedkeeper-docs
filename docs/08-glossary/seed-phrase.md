---
title: "Seed Phrase"
description: "A list of 12 or 24 ordinary words that encodes every private key in a crypto wallet - the wallet itself, in readable form."
keywords: [seed phrase, recovery phrase, mnemonic phrase, 12 words, 24 words, crypto wallet backup]
sidebar_position: 27
sidebar_label: "Seed Phrase"
---

A seed phrase - also called a recovery phrase or mnemonic - is a human-readable encoding of the large random number from which a crypto wallet derives every private key it will ever use. Enter it into any compatible wallet and everything comes back, because nothing was ever stored in the device itself.

Four properties are worth knowing:

**The words come from a fixed list.** [BIP39](/docs/glossary/bip39) defines exactly 2,048 English words, chosen so that no two are confusable and the first four letters identify each one uniquely. That constraint is what makes engraving a phrase into metal practical.

**The order is part of the secret.** The same words in a different sequence produce a completely different wallet - valid, empty, and not yours. Never alphabetise them or store them without their positions.

**A checksum catches typos.** A few bits derived from your entropy are built into the phrase, so a misspelled or misordered word makes it fail validation rather than silently opening someone else's empty wallet.

**It cannot be changed.** Unlike a password, there is no reset and no support desk. Whoever holds those words holds the funds, permanently - which is why it never belongs on anything connected to the internet.

Learn more in [What is a Seed Phrase?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)

## See Also

- [BIP39](/docs/glossary/bip39)
- [Passphrase](/docs/glossary/passphrase)
- [Descriptor](/docs/glossary/descriptor)
- [Entropy](/docs/glossary/entropy)
- [Backup](/docs/glossary/backup)
