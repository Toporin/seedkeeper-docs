---
title: "Encryption"
description: "Scrambling data so that only someone holding the right key can read it - the mechanism behind vaults, backups and passkeys alike."
keywords: [encryption, symmetric encryption, asymmetric encryption, public key cryptography, encrypted vault]
sidebar_position: 10
sidebar_label: "Encryption"
---

Encryption transforms readable data into a form that is meaningless without the corresponding key. It is what makes a stolen database or a lost device a nuisance rather than a disaster - provided the key is somewhere the attacker is not.

Two kinds appear throughout this documentation, and the difference matters:

**Symmetric** encryption uses the same key to lock and unlock. It is what protects a password vault, and what encrypts a device-to-device [backup](/docs/glossary/backup) once the two Seedkeepers have agreed on a shared key at pairing. Fast and simple, but both sides hold something worth stealing.

**Asymmetric** encryption uses a key pair: what one key locks, only the other can unlock. This is what a [passkey](/docs/glossary/passkey) relies on - your device keeps the private key, the service holds only the public one, and nothing worth stealing is ever transmitted. See [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work).

On a Seedkeeper, keys are generated and used inside the [secure element](/docs/glossary/secure-element), which has no function for reading them back out. Encryption is only as strong as the protection around the key, which is the entire argument for putting it in hardware.

## See Also

- [Secure Element](/docs/glossary/secure-element)
- [Hashing](/docs/glossary/hashing)
- [Vault](/docs/glossary/vault)
- [Backup](/docs/glossary/backup)
