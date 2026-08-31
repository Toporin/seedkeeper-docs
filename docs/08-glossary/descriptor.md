---
title: "Descriptor"
description: "A text string describing how a crypto wallet derives its addresses, so a watch-only wallet can be rebuilt without the private keys."
keywords: [descriptor, wallet descriptor, output descriptor, derivation path]
sidebar_position: 8
sidebar_label: "Descriptor"
---

A wallet descriptor is a compact text string that records how a wallet generates its addresses - the script type, the public keys involved, and the derivation path. It contains no private key, so it can be stored or shared to rebuild a watch-only view of a wallet without granting the ability to spend.

It is what tells software where to look after a restore, which is why a seed phrase can be correct and still show a zero balance without it. A Seedkeeper stores an optional descriptor alongside a [seed phrase](/docs/glossary/seed-phrase) - see [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases).

## See Also

- [Seed Phrase](/docs/glossary/seed-phrase)
- [BIP39](/docs/glossary/bip39)
- [Passphrase](/docs/glossary/passphrase)
