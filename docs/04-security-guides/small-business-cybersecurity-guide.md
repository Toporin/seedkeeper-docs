---
title: "Small Business Cybersecurity Guide"
description: "Practical security for organisations without a security team: accounts, access, backups, people, and what NIS2 expects if you fall in scope."
keywords: [small business cybersecurity, SME security, business account security, NIS2 compliance, phishing resistant MFA, employee security training]
sidebar_position: 7
sidebar_label: "Small Business Cybersecurity Guide"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is the most important security measure for a small business?", a: "Controlling identity and access: one account per person, multi-factor authentication on everything privileged, and a leaver process that actually runs. Most incidents at this scale start with a credential rather than an exploit."},
  {q: "Do small businesses really get attacked?", a: "Yes, mostly by automated tools that do not select targets by size. Smaller organisations are often easier because nobody's job is to notice, which makes them attractive rather than beneath attention."},
  {q: "What is phishing-resistant MFA and why does it matter?", a: "Authentication that cannot be relayed to an attacker, because nothing is displayed for you to copy and the credential checks the site's domain itself. In practice that means FIDO2 passkeys or hardware security keys, rather than one-time codes."},
  {q: "Does NIS2 apply to my company?", a: "That depends on your sector, your size and your country's transposition of the directive. If you operate in one of the sectors it covers and exceed the size thresholds, it likely does - and it is a question for your compliance adviser rather than a checklist."},
  {q: "How do we prevent invoice fraud?", a: "One procedure: any change to payment details or unusual transfer request is confirmed by calling a known number, never a number supplied in the message. This stops the large majority of business email compromise attempts."},
  {q: "How often should we test our backups?", a: "At least twice a year, by actually restoring something. Untested backups fail at a meaningful rate, and discovering that during an incident is the worst possible moment."},
]} />

import BuySeedkeeperPro from '@site/docs/_buy-seedkeeper-pro.mdx';

<p class="doc-subtitle">For Organisations Without a Security Team</p>

<div class="tldr">

Small organisations get attacked with the same automated tools as large ones, and usually have nobody whose job it is to notice. The good news is that the measures with the highest impact are cheap and one-off: control who has access to what, make credentials phishing-resistant, keep backups you have actually tested, and give people one rule they can remember.

</div>

## Where Attacks Actually Come From

Not sophisticated intrusions. Overwhelmingly, three routes:

**A stolen or reused credential.** An employee uses the same password at work and on a consumer site; the consumer site is breached; the credentials get tried automatically against your services. No exploit, no malware. See [Why Password Reuse is Dangerous](/docs/security-academy/password-security/why-password-reuse-is-dangerous).

**A convincing email.** An invoice that needs paying, a supplier whose bank details have changed, a message from the director asking for something urgent and confidential. This is the one that costs businesses the most money.

**An account that should have been closed.** Someone left months ago and their access is still live.

None of the three require an attacker to be skilled. All three are cheap to close. If you need to make the case internally rather than just act on it, [Why Hardware Keys for Your Business](/docs/business/why-hardware-keys-for-your-business) sets out the same argument with the cost side attached.

## Start With Identity and Access

### One Account Per Person

Shared logins make it impossible to know who did what, and impossible to revoke access when someone leaves. This is the most common structural weakness in small organisations, and the most consequential.

### Enforce Phishing-Resistant MFA on Anything Privileged

Multi-factor authentication blocks stolen credentials. Phishing-resistant multi-factor authentication also blocks the fake login page, which is what actually targets your staff.

A one-time code can be relayed to the real site by an attacker within its valid window. A passkey cannot, because the credential itself verifies the domain before responding. See [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#why-otp-is-still-phishable).

Prioritise administrator accounts, remote access, and anything touching money.

If you run Microsoft Entra ID, you can require it centrally and restrict which hardware qualifies - see [Configure Passkeys in Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id) and [Deploying FIDO2 Passkeys via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id).

If you build or run the service yourself rather than buying it, [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide) covers attestation and AAGUID allowlists on the implementation side.

<BuySeedkeeperPro />

### Least Privilege, Reviewed Occasionally

People accumulate access and rarely lose it. Twice a year, list who can reach what and remove what is no longer needed. It takes an afternoon and closes a category of risk permanently.

### Have a Leaver Process

A written checklist: accounts disabled, devices returned, shared credentials rotated, access revoked. Same day, every time. Without one, this reliably gets forgotten.

The order matters more than people expect - revoke the credentials first, collect the hardware second. See [Employee Onboarding and Offboarding](/docs/business/employee-onboarding-and-offboarding) for the full checklist.

## Protect the Credentials Themselves

Administrator passwords, break-glass accounts, recovery codes, API keys and certificates are the material an attacker most wants.

A cloud password manager is a reasonable default for day-to-day credentials, and it introduces a processor holding them - something to assess and document. For the most sensitive material, offline hardware keeps it out of that chain entirely: no cloud, no vendor account, nothing synchronised. See [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained).

The break-glass account deserves particular thought. It exists precisely for the day your normal systems are unavailable, which rules out storing its credentials inside those systems.

## Backups You Have Actually Tested

Ransomware turns an intrusion into an existential event only when the backups fail.

- **Keep an offline or immutable copy.** A backup reachable from the network is a backup ransomware encrypts too.
- **Restore something, on purpose, twice a year.** Untested backups fail at roughly the rate you would fear.
- **Know your recovery time.** "We have backups" is not a plan if restoring takes a week you cannot afford.

## People

Training does not make anyone immune, and pretending otherwise is why so much of it is wasted. What works is a small number of rules that survive pressure.

**One rule above all: nobody legitimate asks for a password or a one-time code.** Not IT, not a supplier, not the director.

**A verification step for money.** Any change to payment details, or any unusual transfer request, is confirmed by a callback on a known number. Not a reply to the email, and not a number provided in it. This single procedure prevents most invoice fraud.

**Make reporting easy and blameless.** The costly outcome is not someone clicking a link; it is someone hiding it for a day. Say so explicitly, and mean it.

## If You Fall Under NIS2

The EU's NIS2 directive extends cybersecurity obligations to a much wider range of organisations than its predecessor, including many mid-sized companies in sectors that never considered themselves regulated.

Two things matter most in practice.

**Article 21(2)** lists the risk-management measures in-scope entities must adopt - covering access control, supply chain security, backups and business continuity, and at point (j), multi-factor or continuous authentication. Guidance increasingly reads "appropriate" as meaning phishing-resistant on privileged accounts and remote access. See [Passkeys and NIS2](/docs/security-academy/passkeys/passkey-vs-password#passkeys-and-nis2).

**Reporting deadlines are short.** An early warning is due within 24 hours of becoming aware of a significant incident. That changes what preparation means: knowing who decides, who notifies, and where the contact details are, before you need them.

[Security and Compliance for Organizations](/docs/business/security-compliance-for-organizations) covers what an auditor tends to ask, and how attestation turns a written policy into an enforced control.

:::note[This is context, not legal advice]
NIS2 is a directive, so what applies to you is your country's transposition and your sector's specific obligations. In Belgium the framework is administered by the Centre for Cybersecurity Belgium. Treat this as background for a conversation with whoever handles your compliance.
:::

## A Realistic First Quarter

If you are starting from nothing, in this order:

1. **Inventory the accounts.** Who has access to what, and which of those people still work here.
2. **MFA everywhere, phishing-resistant on admin and remote access.**
3. **A leaver checklist**, written down.
4. **An offline backup**, and one test restore.
5. **The two people rules**: nobody asks for credentials, and payment changes get a callback.
6. **An incident contact list**: who to call, in what order, including outside business hours.

None of it requires a security team. All of it removes more risk than any tool you could buy instead.

## FAQ

<details>
<summary>What is the most important security measure for a small business?</summary>

Controlling identity and access: one account per person, multi-factor authentication on everything privileged, and a leaver process that actually runs. Most incidents at this scale start with a credential rather than an exploit.

</details>

<details>
<summary>Do small businesses really get attacked?</summary>

Yes, mostly by automated tools that do not select targets by size. Smaller organisations are often easier because nobody's job is to notice, which makes them attractive rather than beneath attention.

</details>

<details>
<summary>What is phishing-resistant MFA and why does it matter?</summary>

Authentication that cannot be relayed to an attacker, because nothing is displayed for you to copy and the credential checks the site's domain itself. In practice that means FIDO2 passkeys or hardware security keys, rather than one-time codes.

</details>

<details>
<summary>Does NIS2 apply to my company?</summary>

That depends on your sector, your size and your country's transposition of the directive. If you operate in one of the sectors it covers and exceed the size thresholds, it likely does - and it is a question for your compliance adviser rather than a checklist.

</details>

<details>
<summary>How do we prevent invoice fraud?</summary>

One procedure: any change to payment details or unusual transfer request is confirmed by calling a known number, never a number supplied in the message. This stops the large majority of business email compromise attempts.

</details>

<details>
<summary>How often should we test our backups?</summary>

At least twice a year, by actually restoring something. Untested backups fail at a meaningful rate, and discovering that during an incident is the worst possible moment.

</details>

## Related Articles

- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained)
- [Configure Passkeys in Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id)
- [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer)
- [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked)
- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
- [Why Hardware Keys for Your Business](/docs/business/why-hardware-keys-for-your-business)
- [Deploying Seedkeeper PRO in Your Organization](/docs/business/deploying-seedkeeper-pro-in-your-organization)
