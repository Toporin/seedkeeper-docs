---
title: "SIM Swapping"
description: "Persuading a mobile carrier to move your phone number to an attacker's SIM, so every SMS code arrives with them instead of you."
keywords: [SIM swapping, SIM swap attack, phone number hijacking, SMS 2FA risk, port-out fraud]
sidebar_position: 28
sidebar_label: "SIM Swapping"
---

SIM swapping is an attack on your **mobile carrier**, not on you or your phone.

The attacker gathers enough personal information to sound convincing - much of it public, or available from earlier breaches - then contacts your operator posing as you. They report a lost or damaged phone and ask for the number to be transferred to a new SIM in their possession. If the support agent is persuaded, your number now rings on their device.

From that moment, every SMS code intended for you arrives with them. Password resets, one-time codes, account recovery links: all of it. Your own phone typically goes silent, which is often the first sign anything is wrong, and by then the damage is under way.

Notice what the attack does not require: **no malware, no access to your device, and no technical skill beyond a convincing phone call.** There is also very little you can do to prevent it from your side, since the decision is made by someone else's support desk.

Two things help:

- **Ask your carrier for a port-out PIN or account lock.** Most offer one; almost nobody enables it.
- **Move off SMS codes** wherever an alternative exists. A [TOTP](/docs/glossary/totp) secret lives on your device rather than on a number an operator can reassign, and a [passkey](/docs/glossary/passkey) is not exposed at all.

This is the single strongest argument against SMS as a second factor, and the reason crypto holders are targeted with it specifically. See [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## See Also

- [Two-Factor Authentication (2FA)](/docs/glossary/2fa)
- [TOTP](/docs/glossary/totp)
- [Phishing](/docs/glossary/phishing)
- [Passkey](/docs/glossary/passkey)
