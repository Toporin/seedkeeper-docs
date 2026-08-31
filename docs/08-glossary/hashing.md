---
title: "Hashing"
description: "A one-way transformation applied to a password before storage, so the service never keeps the password itself."
keywords: [hashing, hashing]
sidebar_position: 13
sidebar_label: "Hashing"
---

A service hashes what you type and compares it with the stored hash, which means a breached database exposes hashes rather than passwords. Modern practice uses deliberately slow functions such as bcrypt, scrypt or Argon2. See [What is a Password?](/docs/security-academy/password-security/what-is-a-password)

## See Also

- [Password](/docs/glossary/password)
- [Encryption](/docs/glossary/encryption)
- [Credential Stuffing](/docs/glossary/credential-stuffing)
