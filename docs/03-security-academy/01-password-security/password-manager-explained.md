---
title: "Password Manager Explained"
description: "A clear-eyed comparison of every way to manage passwords - from memory and spreadsheets to cloud managers and hardware devices - and how to combine them."
keywords: [password manager, best password manager, cloud vs offline password manager, KeePass, hardware password manager, password storage, NIS2]
sidebar_position: 4
sidebar_label: "Password Manager Explained"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Do I have to pick just one of these?", a: "No - as covered in Choosing the Right Setup for Your Life above, combining two or three, each covering what it's best at, is usually the strongest approach."},
  {q: "Isn't a cloud password manager safer than nothing?", a: "Almost certainly yes - the comparison here is about tradeoffs between good options, not a case against cloud managers. Using any dedicated password manager is a major improvement over memory or reuse."},
  {q: "Why would I want a device with such limited storage?", a: "It's not as limited as it sounds - Seedkeeper's 8 KB can hold around 100 passwords, depending on the length of the labels and details you set for each. That's more than enough room for the accounts most people actually want to protect this way."},
  {q: "Do I still need a password manager if I use passkeys?", a: "Yes, for years to come. Passkey support is still partial, so most of your accounts will keep using passwords and those still need to be long, unique and generated. See Passkey vs Password."},
  {q: "Is a hardware password manager overkill for personal use?", a: "It depends what the accounts are worth. For ordinary accounts a cloud manager is a large improvement over memory or reuse. Hardware earns its place where a provider breach would be genuinely damaging, or where you want no third party in the chain at all."},
  {q: "What happens if I lose my Seedkeeper?", a: "See Backup & Recovery for how to set up a backup device in advance."},
]} />

import BuySeedkeeperPro from '@site/docs/_buy-seedkeeper-pro.mdx';

<p class="doc-subtitle">There's No Single Right Answer - Only the Right Combination</p>

<div class="tldr">

No single password manager fits every part of your life. Cloud managers are convenient but put your trust in a third party; local tools like KeePass or a Seedkeeper keep you in full control but ask more of you. The best setups usually combine two or three of these, matched to what each is actually good at.

</div>

## What You're Probably Already Doing

Before comparing dedicated tools, it's worth being honest about the starting point most people are actually at.

**Memory, reused variations, or "add a number at the end."** Free, requires no setup - and, as covered in [Why Password Reuse is Dangerous](/docs/security-academy/password-security/why-password-reuse-is-dangerous), one of the riskiest habits in digital security.

**A spreadsheet, notes app, or paper notebook.** Better than pure memory, since it enables genuinely unique passwords - but unencrypted, easy to lose, and a single glance (or synced backup) away from exposing everything at once.

Neither of these is a "solution" so much as a starting point. They're mentioned here because most people are migrating *from* one of them, not from nothing.

## The Solution They Want to Sell You: Cloud-Based Password Managers

Services like Bitwarden, 1Password, or Dashlane store your encrypted vault on their servers and sync it across every device you own.

**Pros:**
- Autofill in browsers and apps - genuinely effortless day to day
- Syncs automatically across phone, laptop, tablet
- Easy account recovery if you forget your master password (varies by provider)
- Sharing features for families or teams

**Cons:**
- Your vault lives on someone else's infrastructure - you're trusting their security, not just your own
- A subscription, in most cases, for the full feature set
- A single, juicy target: password manager companies are high-value breach targets precisely because of what they hold
- Requires an internet connection for most of what makes it convenient

:::warning[This isn't a hypothetical]
In 2022, LastPass suffered a breach in which attackers exfiltrated encrypted customer vaults. This is exactly the risk described above, playing out in reality: the bigger and more popular a password manager becomes, the more it concentrates value in one place - and the more it attracts attackers with everything to gain from breaking in once.
:::

## Solutions You Manage Yourself

### KeePass (and KeePass-compatible apps)

A free, open-source password manager that stores an encrypted database as a single file - on your device, not in someone else's cloud.

**Pros:**
- You control the file entirely - no company, no server, no subscription
- Open-source, so its security has been publicly scrutinized for decades
- Works completely offline

**Cons:**
- No automatic sync - moving the database between devices is on you (via USB, your own cloud storage, etc.)
- Less polished autofill than commercial cloud managers
- If you lose the file *and* have no backup, there's no company to call for recovery

### Seedkeeper

A hardware device that generates and stores your passwords directly on a certified secure element - never on your phone, computer, or any server.

**Pros:**
- Passwords never touch the internet, ever - not even briefly
- No subscription, no account, no company that can be breached to expose your vault
- A physical object you can hand to someone, back up device-to-device, or simply hold
- Holds more than passwords: secure notes and [seed phrases](/docs/security-academy/seed-phrases/what-is-a-seed-phrase) live on the same secure element

**Cons:**
- No autofill in the browser sense - you scan the device to retrieve a password
- You need the physical device with you to access anything on it

<BuySeedkeeperPro />

## Choosing the Right Setup for Your Life

This is the part most comparisons skip: **these tools aren't mutually exclusive.** Here's how to think about combining them for different parts of your life.

### Protecting Your Master Password: Bitwarden + Seedkeeper

If you use Bitwarden (or a similar cloud manager) day to day for convenience, your master password becomes the single most important password you own - lose it, and you potentially lose access to everything. Store it as a secure note on your Seedkeeper: an offline, hardware-backed copy of the one password you can never afford to forget. See [Creating Secure Notes](/docs/product-documentation/password-manager/creating-secure-notes).

### Passing Passwords On to Loved Ones: Seedkeeper

Digital inheritance is a real, growing problem - most cloud services make it deliberately hard for a family member to access your accounts after you're gone, even with a "legacy contact" feature. A Seedkeeper sidesteps this entirely: it's a physical object. Handing it to someone, along with the PIN, hands them everything on it - no support tickets, no probate paperwork, no waiting.

### Passwords You Want Always on You: KeePass + Seedkeeper While Traveling

For accounts you need reliable access to on the road - especially somewhere with unreliable internet - a KeePass database synced to your device before you leave, alongside a Seedkeeper ring or card that never leaves your body, covers you whether or not you have signal. Neither depends on a cloud provider staying reachable from wherever you are.

## What This Looks Like in a Company

The same comparison plays out differently once an organisation is involved, because two extra questions appear: who else is in the chain, and can you evidence it.

A cloud password manager introduces a processor holding your credentials, which becomes something to assess, document and monitor. That is not a reason to avoid one - they are excellent tools - but it is work, and under the EU's **NIS2** directive that kind of work is explicitly in scope: Article 21(2) covers access control and the security of the supply chain among the risk-management measures in-scope entities must adopt.

An offline device holds credentials on hardware you own, with no third party in the chain and nothing synchronised anywhere. For the accounts that matter most - administrator credentials, break-glass accounts, recovery material - that difference is often what makes the storage decision straightforward.

[Security and Compliance for Organizations](/docs/business/security-compliance-for-organizations) covers what that assessment looks like in practice.

Note that none of this substitutes for authentication itself. A password manager protects secrets at rest; it does nothing about a credential being phished at the moment of use. That is a separate control, and the one supervisory guidance increasingly expects to be phishing-resistant on privileged and remote access - see [Passkeys and NIS2](/docs/security-academy/passkeys/passkey-vs-password#passkeys-and-nis2).

## Comparison at a Glance

| | Convenience | Offline | No Subscription | Inheritance-Friendly | Main Threat |
|---|---|---|---|---|---|
| Memory / reuse | High | ✅ | ✅ | ❌ | One breach unlocks every reused account |
| Spreadsheet / notes | Medium | ✅ | ✅ | Partial | Unencrypted file, exposed if the device is lost or compromised |
| Cloud manager | Very High | ❌ | Usually not | Limited | Provider breach exposes every vault at once |
| KeePass | Medium | ✅ | ✅ | Partial | Lost or corrupted file with no backup - no company to call |
| Seedkeeper | Medium | ✅ | ✅ | ✅ | Physical loss without a backup device registered |

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Do I have to pick just one of these?</summary>

No - as covered in [Choosing the Right Setup for Your Life](#choosing-the-right-setup-for-your-life) above, combining two or three, each covering what it's best at, is usually the strongest approach.

</details>

<details>
<summary>Isn't a cloud password manager safer than nothing?</summary>

Almost certainly yes - the comparison here is about tradeoffs between good options, not a case against cloud managers. Using any dedicated password manager is a major improvement over memory or reuse.

</details>

<details>
<summary>Why would I want a device with such limited storage?</summary>

It's not as limited as it sounds - Seedkeeper's 8 KB can hold around 100 passwords, depending on the length of the labels and details you set for each. That's more than enough room for the accounts most people actually want to protect this way.

</details>

<details>
<summary>Do I still need a password manager if I use passkeys?</summary>

Yes, for years to come. Passkey support is still partial, so most of your accounts will keep using passwords and those still need to be long, unique and generated. See [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password).

</details>

<details>
<summary>Is a hardware password manager overkill for personal use?</summary>

It depends what the accounts are worth. For ordinary accounts a cloud manager is a large improvement over memory or reuse. Hardware earns its place where a provider breach would be genuinely damaging, or where you want no third party in the chain at all.

</details>

<details>
<summary>What happens if I lose my Seedkeeper?</summary>

See [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery) for how to set up a backup device in advance.

</details>

## Related Articles

- [What is a Strong Password?](/docs/security-academy/password-security/what-is-a-strong-password)
- [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password)
- [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer)
- [Creating a New Password](/docs/product-documentation/password-manager/creating-a-new-password)
- [Creating Secure Notes](/docs/product-documentation/password-manager/creating-secure-notes)
- [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [What is MFA?](/docs/security-academy/authentication/what-is-mfa)
- [Backup & Recovery](/docs/product-documentation/getting-started/backup-and-recovery)
- [Security Best Practices](/docs/product-documentation/getting-started/security-best-practices)
