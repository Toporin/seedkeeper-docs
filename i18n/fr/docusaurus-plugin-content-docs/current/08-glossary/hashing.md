---
title: "Hachage"
description: "Transformation à sens unique appliquée à un mot de passe avant son stockage, afin que le service ne conserve jamais le mot de passe lui-même."
keywords: [hachage, fonction de hachage, bcrypt, argon2, stockage mot de passe]
sidebar_position: 14
sidebar_label: "Hachage"
---

Un service hache ce que vous saisissez et le compare au haché stocké, ce qui signifie qu'une base de données compromise expose des hachés plutôt que des mots de passe. Les pratiques actuelles reposent sur des fonctions délibérément lentes comme bcrypt, scrypt ou Argon2. Voir [What is a Password?](/docs/security-academy/password-security/what-is-a-password)

## Voir aussi

- [Mot de passe](/docs/glossary/password)
- [Chiffrement](/docs/glossary/encryption)
- [Credential Stuffing](/docs/glossary/credential-stuffing)
