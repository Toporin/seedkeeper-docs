---
title: "Passkey vs Password"
description: "Passkeys vs passwords compared across phishing, breaches, reuse and recovery - including the two points where passwords still win."
keywords: [passkey vs password, are passkeys better than passwords, passkey, password, phishing resistant authentication, FIDO2, passwordless login, hardware passkey, NIS2 MFA]
sidebar_position: 5
sidebar_label: "Passkey vs Password"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Why buy a hardware device when my phone offers passkeys for free?", a: "Because they protect different things. A phone or cloud passkey defeats phishing just as well, but the key is copied across your devices and guarded by an account with a provider - so that account becomes the target. A hardware passkey exists on one chip that cannot export it, works on computers you don't own, and puts nobody else in the chain. Whether that's worth it depends on what your accounts are worth. See Not All Passkeys Are Stored the Same Way above."},
  {q: "Are synced passkeys bad?", a: "No. They're far safer than passwords and they're what most people will use. They simply concentrate every credential in one cloud account, whereas hardware-bound passkeys don't exist anywhere but the device. Choose according to what the account is worth losing."},
  {q: "What is the main difference between a passkey and a password?", a: "A password is a shared secret transmitted to the service every time you sign in. A passkey is a private key that never leaves your device - the service only holds a matching public key and verifies a signature. Nothing worth stealing is ever sent or stored."},
  {q: "Are passkeys really more secure than passwords?", a: "Yes. They eliminate phishing, credential stuffing, password reuse and brute force as attack categories, rather than making them harder. The remaining risks - device loss and account recovery paths - are addressed by registering a second device."},
  {q: "Should I delete my password once I've added a passkey?", a: "Usually you can't, and often you shouldn't. Most services keep the password as a recovery route and don't allow removal. Where deletion is possible and a second passkey device is registered, removing it does close a real attack path."},
  {q: "Is a passkey stronger than a very long random password?", a: "Yes, though not for the reason people expect. A 20-character generated password is already beyond brute force. The advantage is that a passkey cannot be phished, leaked in a breach, or reused - which is how passwords are actually compromised in the real world."},
  {q: "Do I still need a password manager if I use passkeys?", a: "Yes, for years to come. Most of your accounts will keep using passwords, and those still need to be long, unique and generated. See Password Manager Explained."},
  {q: "What happens if a service that stores my passkey gets hacked?", a: "The attacker obtains a public key, which cannot be used to sign in anywhere. This is the structural advantage over passwords, where a breached database of hashes leads directly to compromised accounts."},
  {q: "Does NIS2 require passkeys?", a: "Not by name. Article 21(2)(j) requires multi-factor or continuous authentication \"where appropriate\", and the directive is technology-neutral. What guidance increasingly expects is phishing-resistant MFA on privileged and remote access, which FIDO2 passkeys are the standard way to provide. See Passkeys and NIS2 above."},
  {q: "Can I use a passkey on a computer that isn't mine?", a: "Yes, with a roaming authenticator like Seedkeeper PRO - tap or connect it, enter your PIN, and nothing is left behind on that machine. A passkey stored in a phone or laptop's built-in hardware can't travel that way."},
  {q: "What if I lose the device holding my passkeys?", a: "If a second device is registered, you sign in with it and remove the lost one. If not, you fall back on the service's recovery process. The ten minutes spent registering a spare is what makes the difference. See Passkey Backup Strategy."},
]} />

import BuySeedkeeperPro from '@site/docs/_buy-seedkeeper-pro.mdx';

<p class="doc-subtitle">Two Ways to Prove Who You Are, Compared in Full</p>

<div class="tldr">

A password is a secret you and the service both hold, so either side can leak it. A [passkey](/docs/glossary/passkey) is a private key only you hold, which the service can verify but never possesses.

That one structural difference eliminates phishing, credential stuffing and breach exposure - not by making them harder, but by removing what they attack. Passwords still win on two points: they work on every service, and they need no device.

</div>

## The Difference in One Sentence

**A password is something you send. A passkey is something you prove you have without ever sending it.**

Everything else in this comparison follows from that.

A password is **symmetric**. You know it, the service knows it, and signing in means transmitting it. Two copies exist, both worth stealing, and you have no control over how the service protects its own.

A passkey is **asymmetric**. Your device holds a private key, the service holds only the matching public key. Signing in means proving mathematically that you hold the private key, without revealing it. The service's copy is worthless to an attacker - it can verify a signature, but it can never produce one.

## What Each One Actually Is

**A password** is a string of characters chosen by a human and stored, ideally hashed, on the service's servers. It has existed since the 1960s and remains the default way to sign in to almost everything. Its security depends on three things you control: length, randomness, and not reusing it. See [What is a Password?](/docs/security-academy/password-security/what-is-a-password).

**A passkey** is a cryptographic key pair generated by your device when you register with a service, following the open [FIDO2](/docs/glossary/fido2) standard. The private key stays on the device that made it. The public key goes to the service. Nothing about it is chosen, remembered or typed by a human. See [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey).

## Passkey vs Password: Full Comparison

| | Password | Passkey |
|---|---|---|
| **What the service stores** | A hash of your secret | A public key, useless alone |
| **Can be phished** | ❌ Yes - typing it into a fake page hands it over | ✅ No - bound to the real domain, won't respond elsewhere |
| **Exposed by a data breach** | ❌ Yes - hashes leak and get cracked offline | ✅ No - there is nothing secret to leak |
| **Can be reused across sites** | ❌ Yes, and most people do | ✅ Impossible - a separate key pair per service |
| **Can be guessed or brute-forced** | ❌ Yes, if short or predictable | ✅ No - keys aren't human-chosen |
| **Can be intercepted in transit** | ❌ Possible on a compromised connection | ✅ Nothing secret is ever transmitted |
| **Security depends on user choices** | ❌ Yes, heavily | ✅ No - identical for everyone |
| **You must remember it** | ❌ Yes, or delegate to a manager | ✅ No - the device holds it |
| **Works on any service** | ✅ Universally | ❌ Only where supported, growing fast |
| **Needs a device present** | ✅ No | ❌ Yes - the authenticator must be there |
| **Recovery if lost** | ✅ Reset link by email or phone | ❌ Requires a second device registered in advance |
| **Main threat** | Phishing and credential stuffing | Losing every registered device at once |

## Are Passkeys Better Than Passwords?

**Yes - on every attack that actually compromises accounts in practice.** The improvement is structural rather than incremental: passkeys don't make these attacks harder, they remove the thing being attacked.

### Phishing

This is the decisive difference.

A password can be typed into anything with a text field. Modern phishing kits clone login pages pixel for pixel, and the only defence is your ability to spot a wrong domain in an address bar - a judgement call attackers are extremely good at defeating. Try it yourself on the lookalike Microsoft page in [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked#phishing-email-and-fake-websites).

A passkey is permanently bound at registration to the service's exact domain. When a fake page requests it, the domain doesn't match and the browser never even forwards the request to your device. There is no prompt to dismiss, no warning to click through, and nothing for you to get wrong.

**Passwords ask you to detect the attack. Passkeys make the attack impossible to mount.**

### Data breaches

When a service holding passwords is breached, the fallout lands on its users: hashes circulate, weak ones are cracked within hours, and every account where that password was reused becomes reachable.

When a service holding passkeys is breached, the attacker obtains a list of public keys. There is nothing to crack, nothing to reuse, and nothing that grants access anywhere. Your security no longer depends on a company you've never met storing your secret responsibly - because you never gave it one.

### Reuse

Password reuse is the single most damaging habit in personal security, and it's why one breach cascades into many. See [Why Password Reuse is Dangerous](/docs/security-academy/password-security/why-password-reuse-is-dangerous).

You cannot reuse a passkey even deliberately. A fresh key pair is generated for every service, so no two accounts share anything, and nothing links them together. The habit isn't discouraged - it's structurally impossible.

### Strength

A password's strength is a variable you set, and most people set it badly. A passkey's strength is fixed by cryptography and identical for everyone.

This point is underrated: **passkeys are safest for exactly the people passwords fail most**. There is no way to configure one poorly, no shortcut to take when you're in a hurry, and no habit to maintain over years.

## Where Passwords Still Win

A comparison in which one side wins every round isn't an analysis. Two genuine advantages remain.

**Universal support.** Every service on earth accepts a password. Passkey adoption is moving quickly - Google, Microsoft, Amazon, PayPal, GitHub and many others support them today - but coverage remains partial, and will for years. Our [tutorials](/docs/category/google/) cover the services where you can switch now.

**No device needed.** A password lives in your memory, so you can sign in from a borrowed laptop with empty pockets. A passkey needs its authenticator physically present. That requirement is precisely what makes it unstealable remotely, and it is still a real constraint.

There is a third point that isn't an advantage so much as a warning: **recovery works differently**. A forgotten password is an inconvenience solved by a reset link. A lost hardware authenticator with no second device registered is a genuine problem. This is a planning question, not a defect - and it takes ten minutes to solve. See [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy).

## Can Passkeys Replace Passwords Completely?

Not yet, and not in one step.

Two things stand in the way. First, coverage: most of your accounts don't offer passkeys. Second, and more subtly, **most services that do offer passkeys keep the password as a recovery path** - and often won't let you delete it. Google, for example, offers to skip the password rather than remove it. See [Replace Passwords with Passkeys on Google](/docs/tutorials/google/replace-passwords-with-passkeys-on-google).

That matters more than it appears. **An account is protected by the strongest available way in, not the one you prefer to use.** A passkey on an account whose password still works, and whose reset flows through an unprotected mailbox, is guarded by that mailbox.

The practical conclusion isn't discouraging, it's just an order of operations: secure the recovery path first, then everything downstream of it improves.

## Not All Passkeys Are Stored the Same Way

Here is the step most comparisons skip, and it changes the answer.

Deciding to use passkeys is only half a decision. The other half is **where the private key lives** - and that choice determines how much of the protection above you actually get. There are three options, and they are not equivalent.

| | Built into your phone or laptop | Synced in a cloud vault | Dedicated hardware device |
|---|---|---|---|
| **Examples** | Touch ID, Windows Hello | iCloud Keychain, Google Password Manager, password managers | Seedkeeper PRO |
| **Phishing resistance** | ✅ Full | ✅ Full | ✅ Full |
| **Where the key exists** | On that one device | Copied across every device on the account | On one chip, never anywhere else |
| **Can it be extracted** | ❌ No, but tied to the device's own security | ❌ Not directly - but the vault account can be compromised | ✅ Physically impossible, no export path exists |
| **Works on someone else's computer** | ❌ No | ⚠️ Only with the vault installed and unlocked | ✅ Yes - tap or plug in, nothing left behind |
| **Survives losing the phone** | ❌ Credentials gone | ✅ Restored from the cloud | ✅ Device is independent of any phone |
| **Who else is in the chain** | The device maker | The vault provider and your account with them | Nobody |
| **Weakest link** | The device's unlock method | The cloud account protecting the vault | Losing the device with no spare registered |

All three defeat phishing, and all three are a serious improvement over passwords. **The difference is what your credentials depend on.**

**Built into your phone or laptop.** The key lives in that machine's secure hardware and doesn't travel. Excellent as far as it goes - but you now have separate credentials on every device, none of them usable on a work computer or a borrowed one, and all of them lost with the device.

**Synced in a cloud vault.** Convenient, and the option most people will land on by default. The trade-off is that your passkeys exist in several places at once and the entire set is guarded by one account with a provider. That account becomes the thing an attacker targets, and it's typically protected by - a password. The chain has one more link than it looks.

**Dedicated hardware.** The key is generated inside a [secure element](/docs/glossary/secure-element) and physically cannot leave it. There is no cloud copy, no provider account, no export function, and nothing for malware on your computer to reach. It also travels: the same card or ring works on your phone, your laptop, and a machine that isn't yours.

### Where Seedkeeper PRO Fits

Seedkeeper PRO is the third option, in a card or a ring you carry.

Its private keys are generated on an EAL6+ certified secure element and never leave it, on hardware [FIDO2 Level 1 certified](/docs/security-academy/passkeys/what-is-fido2#seedkeeper-pro-fido2-level-1-certified) by the FIDO Alliance. It holds up to 90 passkeys, plus your TOTP codes and your passwords, on one object with no battery, no screen and no network connection of its own. Nothing about your credentials passes through Satochip, or through anyone else.

**Who this is actually for:**

- **People whose accounts are worth real money or real trouble** - crypto holdings, company administration, client data, anything where an account takeover isn't just an inconvenience.
- **Anyone who signs in on machines they don't own** - shared workstations, a client's laptop, a work computer that won't accept a personal cloud vault.
- **Organisations that need to prove which hardware was used**, or to exclude personal cloud vaults from company accounts entirely - see [For Organisations](#for-organisations) below.
- **Anyone who would rather not have a cloud provider in the chain** at all, for whatever reason they consider sufficient.

**Who it probably isn't for:** if your accounts are ordinary, you only ever sign in from your own phone, and you're comfortable with your cloud provider holding the keys, a synced passkey is a genuine improvement over what you have now and costs nothing. That's a reasonable choice, and this page is not going to pretend otherwise.

The honest summary is that the three options differ by what you're prepared to depend on. A synced passkey depends on a company. A hardware passkey depends on an object in your pocket, and on you having registered a second one.

<BuySeedkeeperPro />

## Which Should You Use, and When

The realistic goal is not replacement but layering. Both live on the same Seedkeeper PRO, which is why the transition doesn't require choosing.

**1. Start with email.** Your mailbox is the reset path for every other account you own. A passkey there raises the floor under everything else.

**2. Then the accounts that hurt.** Banking, cloud storage, code repositories, anything holding money, identity documents or customer data.

**3. Keep OTP where passkeys aren't offered.** A password plus a [one-time code](/docs/security-academy/authentication/what-is-otp) is a large improvement over a password alone, even though it remains phishable. See [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp) and [What is 2FA?](/docs/security-academy/authentication/what-is-2fa).

**4. Generate every remaining password.** Long, unique, machine-generated, stored on the secure element rather than in a browser. See [What is a Strong Password?](/docs/security-academy/password-security/what-is-a-strong-password).

**5. Register a second device** on anything you cannot afford to lose access to, before you need it.

## For Organisations

The calculation changes in a company, and generally in favour of passkeys.

Password-based attacks - phishing, credential stuffing, reused credentials from personal accounts - account for a large share of breaches, and no amount of staff training reliably closes a gap that depends on human judgement under time pressure. Phishing-resistant authentication removes the judgement call from the equation entirely.

There's also an operational argument that tends to persuade faster than the security one: password resets are a permanent, measurable cost to every helpdesk, and passkeys remove that category of ticket rather than reducing it.

### Passkeys and NIS2

For organisations in scope of the EU's NIS2 directive, authentication is not only a security choice but a regulatory one.

**Article 21(2)(j)** of Directive (EU) 2022/2555 lists multi-factor or continuous authentication among the risk-management measures entities must adopt, qualified by the phrase **"where appropriate"**. The directive is deliberately technology-neutral: it does not name FIDO2, passkeys, or any other mechanism.

What has shifted is the interpretation of "appropriate". Supervisory guidance and sector frameworks increasingly distinguish **phishing-resistant** multi-factor authentication from the rest, and treat it as the expected standard for privileged accounts and remote access - the two cases where a compromised credential does the most damage. A one-time code satisfies the letter of an MFA requirement; it does not satisfy phishing resistance, for the reasons set out in [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#why-otp-is-still-phishable).

FIDO2 passkeys are the mature, standardised way to meet that higher bar, and hardware-bound credentials go further by making the authenticator itself verifiable through attestation - so an organisation can demonstrate, not merely assert, which devices were used.

:::note[This is context, not legal advice]
NIS2 is a directive, so what applies to you is your country's transposition and your sector's specific obligations. In Belgium the framework is administered by the Centre for Cybersecurity Belgium. Treat the above as background for a conversation with whoever handles your compliance, not as a substitute for it.
:::

Deployments can enforce hardware-bound credentials specifically, rejecting synced passkeys stored in personal cloud accounts, by allowing only approved device identifiers. See [Configure Passkeys in Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id), and [Why Hardware Keys for Your Business](/docs/business/why-hardware-keys-for-your-business) for the case to make internally.

## They Are Not Really Rivals

The framing of "passkey versus password" is useful for understanding the mechanics and slightly misleading in practice.

Nobody switches over in an afternoon. What actually happens is gradual: passkeys where they're supported, strong generated passwords everywhere else, one-time codes as the middle ground - all on one device, on the same secure element.

Seedkeeper PRO is built for that reality rather than for an all-or-nothing migration: passwords and secure notes on one side, passkeys and OTP on the other, up to 90 passkeys on a chip certified [EAL6+ and FIDO2 Level 1](/docs/security-academy/passkeys/what-is-fido2#seedkeeper-pro-fido2-level-1-certified).

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Why buy a hardware device when my phone offers passkeys for free?</summary>

Because they protect different things. A phone or cloud passkey defeats phishing just as well, but the key is copied across your devices and guarded by an account with a provider - so that account becomes the target. A hardware passkey exists on one chip that cannot export it, works on computers you don't own, and puts nobody else in the chain. Whether that's worth it depends on what your accounts are worth. See [Not All Passkeys Are Stored the Same Way](#not-all-passkeys-are-stored-the-same-way) above.

</details>

<details>
<summary>Are synced passkeys bad?</summary>

No. They're far safer than passwords and they're what most people will use. They simply concentrate every credential in one cloud account, whereas hardware-bound passkeys don't exist anywhere but the device. Choose according to what the account is worth losing.

</details>

<details>
<summary>What is the main difference between a passkey and a password?</summary>

A password is a shared secret transmitted to the service every time you sign in. A passkey is a private key that never leaves your device - the service only holds a matching public key and verifies a signature. Nothing worth stealing is ever sent or stored.

</details>

<details>
<summary>Are passkeys really more secure than passwords?</summary>

Yes. They eliminate phishing, credential stuffing, password reuse and brute force as attack categories, rather than making them harder. The remaining risks - device loss and account recovery paths - are addressed by registering a second device.

</details>

<details>
<summary>Should I delete my password once I've added a passkey?</summary>

Usually you can't, and often you shouldn't. Most services keep the password as a recovery route and don't allow removal. Where deletion is possible and a second passkey device is registered, removing it does close a real attack path.

</details>

<details>
<summary>Is a passkey stronger than a very long random password?</summary>

Yes, though not for the reason people expect. A 20-character generated password is already beyond brute force. The advantage is that a passkey cannot be phished, leaked in a breach, or reused - which is how passwords are actually compromised in the real world.

</details>

<details>
<summary>Do I still need a password manager if I use passkeys?</summary>

Yes, for years to come. Most of your accounts will keep using passwords, and those still need to be long, unique and generated. See [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained).

</details>

<details>
<summary>What happens if a service that stores my passkey gets hacked?</summary>

The attacker obtains a public key, which cannot be used to sign in anywhere. This is the structural advantage over passwords, where a breached database of hashes leads directly to compromised accounts.

</details>

<details>
<summary>Does NIS2 require passkeys?</summary>

Not by name. Article 21(2)(j) requires multi-factor or continuous authentication "where appropriate", and the directive is technology-neutral. What guidance increasingly expects is phishing-resistant MFA on privileged and remote access, which FIDO2 passkeys are the standard way to provide. See [Passkeys and NIS2](#passkeys-and-nis2) above.

</details>

<details>
<summary>Can I use a passkey on a computer that isn't mine?</summary>

Yes, with a roaming authenticator like Seedkeeper PRO - tap or connect it, enter your PIN, and nothing is left behind on that machine. A passkey stored in a phone or laptop's built-in hardware can't travel that way.

</details>

<details>
<summary>What if I lose the device holding my passkeys?</summary>

If a second device is registered, you sign in with it and remove the lost one. If not, you fall back on the service's recovery process. The ten minutes spent registering a spare is what makes the difference. See [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy).

</details>

## Related Articles

- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer)
- [What is a Password?](/docs/security-academy/password-security/what-is-a-password)
- [Creating Your First Passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
- [What is MFA?](/docs/security-academy/authentication/what-is-mfa)
- [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained)
