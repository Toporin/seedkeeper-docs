---
title: "HOTP"
description: "A one-time password derived from a counter, valid until it is used."
keywords: [hotp, hotp]
sidebar_position: 14
sidebar_label: "HOTP"
---

HMAC-based One-Time Password increments a counter each time a code is generated, so the code stays valid until consumed. It is largely superseded by TOTP, which uses time instead and expires on its own. See [OTP vs TOTP](/docs/security-academy/authentication/otp-vs-totp)

## See Also

- [OTP](/docs/glossary/otp)
- [TOTP](/docs/glossary/totp)
- [Two-Factor Authentication (2FA)](/docs/glossary/2fa)
