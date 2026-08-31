---
title: "Security Checklist for Crypto Users"
description: "Self-custody removes the support desk. What that changes, how to store a seed phrase, and the scams built specifically for people who hold crypto."
keywords: [crypto security checklist, protect crypto wallet, seed phrase security, crypto scams, self custody security, exchange account security]
sidebar_position: 6
sidebar_label: "Security Checklist for Crypto Users"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is the biggest security risk for crypto holders?", a: "Losing the seed phrase to disclosure or destruction, followed closely by compromised exchange accounts. Both are prevention problems, since neither has any recovery path once it happens."},
  {q: "Can I store my seed phrase in a password manager?", a: "Not in a cloud-synced one. The phrase would then be protected by a master password and a provider's infrastructure, both of which are attackable. Offline storage keeps it out of that chain entirely."},
  {q: "Why is SMS two-factor authentication a particular risk for crypto users?", a: "Because SIM swapping specifically targets people known to hold crypto. An attacker persuades the carrier to move your number to their SIM, and every SMS code then arrives with them - no malware or device access required."},
  {q: "Will a wallet's support team ever ask for my seed phrase?", a: "Never. Legitimate support does not need it and does not contact you first. Anyone asking is an attacker, regardless of how knowledgeable and patient they seem."},
  {q: "Should I keep my crypto on an exchange or in self-custody?", a: "They fail differently. An exchange can be hacked or freeze withdrawals, but offers account recovery. Self-custody removes third-party risk and gives you no recovery at all. Many people split, keeping trading balances on an exchange and long-term holdings in self-custody."},
]} />

import BuyBackupDevice from '@site/docs/_buy-backup-device.mdx';

<p class="doc-subtitle">No Chargebacks, No Support Desk, No Second Chances</p>

<div class="tldr">

Crypto changes the stakes rather than the techniques. The attacks are the same ones used everywhere else - phishing, fake support, credential stuffing - but a successful one is final. There is no fraud department, no reversal, and no account recovery. That single difference is what this checklist is built around.

</div>

## What Is Actually Different

Everywhere else, a compromised account is recoverable. A bank reverses the transfer, a provider restores access, support intervenes.

Self-custody removes all of that by design. It is the point of holding your own keys, and it cuts both ways: nobody can take your funds without your keys, and nobody can give them back once someone has.

That means prevention carries the entire load. Every item below is worth more here than the equivalent measure on an ordinary account.

## 1. Your Seed Phrase Is the Whole Wallet

Whoever holds those words holds the funds, permanently, on every address the wallet will ever generate. It cannot be changed, reset, or revoked.

**Never let it exist on anything connected.** No photo, no notes app, no cloud file, no message to yourself, no password manager that syncs. Automated tools continuously scan the open internet for anything matching the [BIP39](/docs/security-academy/seed-phrases/what-is-bip39) word pattern, and an exposed phrase is typically emptied within minutes.

**Never type it into a website.** There is no legitimate reason for a web page to ask - not to validate it, not to restore access, not to claim anything.

See [What is a Seed Phrase?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase) for what those words actually encode.

## 2. Store It So It Survives Both Threats

A seed phrase has to survive being **found** by someone else and being **lost** by you. Solving one usually creates the other.

- **At least two copies**, in genuinely different physical locations
- **On media that survive fire and water** - metal rather than paper for anything meaningful
- **Or on hardware that keeps it unreadable**: a secure element has no network, no operating system and no way to release the phrase without the device and its PIN. See [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases)
- **The passphrase, if you use one, stored separately** - together, it protects nothing

Full reasoning in [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase).

<BuyBackupDevice />

## 3. Test the Backup Once

A phrase written down and filed away is an assumption, not a backup. Words get transcribed wrong, handwriting becomes ambiguous, positions get swapped - and none of it surfaces until the day you need it.

Restore it into a wallet once, confirm the addresses match, put it away. Half an hour now against everything later.

## 4. Secure the Accounts Around the Wallet

Most people lose crypto through an exchange account rather than a compromised wallet, because that's where the easier attack surface is.

For every exchange and every service holding assets:

- A unique password, generated
- Phishing-resistant two-factor authentication - a passkey where offered, an authenticator otherwise, never SMS
- Withdrawal address allowlisting, if the platform supports it
- Withdrawal notifications on

Specific walkthroughs: [Binance](/docs/tutorials/financial/secure-binance-with-a-passkey), [Kraken](/docs/tutorials/financial/secure-kraken-with-a-passkey), [PayPal](/docs/tutorials/financial/secure-paypal-with-a-passkey).

## 5. Get SMS Off Your Crypto Accounts

This one deserves its own item, because crypto holders are targeted specifically.

**SIM swapping** - persuading a carrier to move your number to an attacker's SIM - has been used repeatedly against people known to hold crypto. It requires no technical skill and no access to your phone. Every SMS code then arrives with the attacker.

Replace SMS with an authenticator or a hardware key everywhere, and ask your carrier for a port-out lock. See [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## 6. Know the Scams Built for You

The generic attacks apply, plus several designed for this audience specifically.

**Fake support in your direct messages.** You post a problem publicly; someone helpful appears within minutes. They are patient, knowledgeable, and eventually need your seed phrase or a "validation" tool. Real support never contacts you first and never needs your phrase.

**Fake wallet apps and browser extensions**, published under convincing names in official stores. Install only from links on the project's own site.

**Airdrops and "claim" pages** that require connecting a wallet and signing something. Read what you are signing; token approvals can grant unlimited spending rights.

**Address poisoning.** An attacker sends a dust transaction from an address resembling one you use, hoping you copy it from your history later. Verify the full address, not the first and last four characters.

**Pressure and urgency**, always. See [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked).

## 7. Separate What You Use From What You Hold

A daily wallet with a small balance, connected to whatever you need. A long-term wallet that never touches a website, never signs an approval, and exists only to hold.

This one habit limits the blast radius of every mistake in the list above. Most losses happen on the wallet that interacts with things.

## 8. Decide What Happens After You

Self-custody has no next of kin process. If nobody can reach your phrase, the funds simply stop existing for everyone.

Decide deliberately whether they should be recoverable, and if so leave enough for someone to act without leaving enough for a stranger who finds the same note. A physical object handed to a trusted person, or instructions that only make sense combined with something they already hold, are two workable approaches.

## The Short Version

If you do four things: keep the phrase entirely offline, keep two copies in different places, get SMS off your accounts, and never type your phrase anywhere. That covers the overwhelming majority of real losses.

## FAQ

<details>
<summary>What is the biggest security risk for crypto holders?</summary>

Losing the seed phrase to disclosure or destruction, followed closely by compromised exchange accounts. Both are prevention problems, since neither has any recovery path once it happens.

</details>

<details>
<summary>Can I store my seed phrase in a password manager?</summary>

Not in a cloud-synced one. The phrase would then be protected by a master password and a provider's infrastructure, both of which are attackable. Offline storage keeps it out of that chain entirely.

</details>

<details>
<summary>Why is SMS two-factor authentication a particular risk for crypto users?</summary>

Because SIM swapping specifically targets people known to hold crypto. An attacker persuades the carrier to move your number to their SIM, and every SMS code then arrives with them - no malware or device access required.

</details>

<details>
<summary>Will a wallet's support team ever ask for my seed phrase?</summary>

Never. Legitimate support does not need it and does not contact you first. Anyone asking is an attacker, regardless of how knowledgeable and patient they seem.

</details>

<details>
<summary>Should I keep my crypto on an exchange or in self-custody?</summary>

They fail differently. An exchange can be hacked or freeze withdrawals, but offers account recovery. Self-custody removes third-party risk and gives you no recovery at all. Many people split, keeping trading balances on an exchange and long-term holdings in self-custody.

</details>

## Related Articles

- [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [Common Seed Phrase Mistakes](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes)
- [What is a Seed Phrase?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Travel Security Guide](/docs/security-guides/travel-security-guide)
