---
title: "HOTP"
description: "Un mot de passe à usage unique dérivé d'un compteur, valable jusqu'à ce qu'il soit utilisé."
keywords: [hotp, mot de passe à usage unique, compteur, RFC 4226]
sidebar_position: 15
sidebar_label: "HOTP"
---

Le HMAC-based One-Time Password incrémente un compteur à chaque code généré : le code reste donc valable tant qu'il n'a pas été consommé. Il est largement supplanté par le TOTP, qui utilise le temps et expire de lui-même. Voir [OTP vs TOTP](/docs/security-academy/authentication/otp-vs-totp)

## Voir aussi

- [OTP](/docs/glossary/otp)
- [TOTP](/docs/glossary/totp)
- [2FA - Authentification à deux facteurs](/docs/glossary/2fa)
