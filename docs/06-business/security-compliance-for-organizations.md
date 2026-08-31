---
title: "Security and Compliance for Organizations"
description: "What certifications actually mean, what NIS2 expects of authentication, and how to evidence a control rather than assert it."
keywords: [NIS2 authentication, ISO 27001 access control, FIDO2 certification, EAL6+, cyber insurance MFA, compliance evidence, attestation audit]
sidebar_position: 5
sidebar_label: "Security and Compliance"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Does NIS2 require passkeys?", a: "No. Article 21(2)(j) requires multi-factor or continuous authentication \"where appropriate\", and the directive names no technology. What guidance increasingly expects is phishing-resistant multi-factor authentication on privileged accounts and remote access, which FIDO2 passkeys are the standard way to provide."},
  {q: "What is the difference between FIDO2 Level 1 and EAL6+?", a: "They assess different things. FIDO2 Level 1 certifies the protocol implementation against software attacks; EAL6+ certifies the secure element hardware against physical and side-channel attack. They are complementary rather than alternatives."},
  {q: "How do we prove to an auditor that only approved devices are used?", a: "Through attestation and an AAGUID allowlist in your identity provider. Registration with a non-approved authenticator then fails rather than being detected afterwards, which turns a written policy into an enforced control."},
  {q: "Can we tie a credential to one specific physical device?", a: "Not through attestation alone - an AAGUID identifies a model. Enterprise attestation would do it but is currently disabled, so your issue-time inventory is the practical record."},
  {q: "Does using Seedkeeper introduce a data processor under GDPR?", a: "No. There is no cloud service, no account and no synchronisation, so no credential material passes through us. That removes one supplier from the assessment you would otherwise carry out for a cloud-based alternative."},
  {q: "Will this satisfy our cyber insurance requirements?", a: "That depends on your policy wording, which is worth reading rather than assuming. Where an insurer distinguishes phishing-resistant MFA, hardware-bound FIDO2 credentials with enforced attestation are a substantially stronger answer than generic MFA."},
]} />

<p class="doc-subtitle">Certifications, Obligations, and What You Can Prove</p>

<div class="tldr">

Compliance frameworks rarely name a technology - they describe an outcome and expect you to evidence it. Hardware-bound credentials with attestation let you **demonstrate** which devices were used rather than assert that a policy was followed, which is the difference an auditor cares about.

</div>

## The Certifications, and What Each One Covers

Two independent certifications, assessing different things. Conflating them is common and it undermines your own argument in front of anyone technical.

**FIDO2 Level 1**, certificate `FA001202600016`, issued by the FIDO Alliance. It assesses the **implementation of the protocol**: interoperability, and resistance to scalable software attacks. It says the FIDO2 implementation is correct and independently tested rather than self-declared.

**Common Criteria EAL6+**, on the secure element itself. It assesses the **hardware**: resistance to physical and side-channel attack on the chip protecting the keys.

Read together: one says the protocol is implemented properly, the other says the hardware holding the keys is hard to attack physically. See [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2#seedkeeper-pro-fido2-level-1-certified).

Both are verifiable without taking our word for it - the FIDO certificate through the [public directory](https://app.fido.cyber-pass.org/certificates/search), the firmware through its AGPLv3 source.

## NIS2

The EU's NIS2 directive extends cybersecurity obligations to a much wider range of organisations than its predecessor, including many mid-sized companies in sectors that never considered themselves regulated.

**Article 21(2)** lists the risk-management measures in-scope entities must adopt. Authentication appears at point **(j)**, covering multi-factor or continuous authentication, qualified by "where appropriate". The directive is deliberately technology-neutral and names no product or standard.

What has shifted is the reading of "appropriate". Supervisory guidance and sector frameworks increasingly distinguish **phishing-resistant** multi-factor authentication from the rest, and treat it as the expected standard for privileged accounts and remote access. A one-time code satisfies an MFA requirement; it does not satisfy phishing resistance - see [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#why-otp-is-still-phishable).

Note also that Article 21(2) has ten categories. Authentication is one of them, and no authentication decision covers the others.

**Reporting deadlines are short.** An early warning is due within 24 hours of becoming aware of a significant incident, which changes what preparation means: knowing who decides, who notifies, and where the contact details are, before you need them.

:::note[This is context, not legal advice]
NIS2 is a directive, so what applies to you is your country's transposition and your sector's specific obligations. In Belgium the framework is administered by the Centre for Cybersecurity Belgium. Treat this as background for a conversation with whoever handles your compliance, not as a substitute for it.
:::

See [Passkeys and NIS2](/docs/security-academy/passkeys/passkey-vs-password#passkeys-and-nis2) for the same ground from the technology side.

## ISO 27001 and Similar Frameworks

Access control is a control domain in every serious framework, and none of them name a product either.

What an auditor tends to ask: who has privileged access, how is it authenticated, how is it reviewed, and how is it removed when someone leaves. Hardware keys help with the second question and the fourth, provided you have the process to go with them - see [Employee Onboarding and Offboarding](/docs/business/employee-onboarding-and-offboarding).

The device is not a compliance product. It is a control that makes one part of an existing obligation easier to satisfy and easier to evidence.

## Evidence Rather Than Assertion

This is the part worth understanding properly, because it is where hardware differs from policy.

A written rule saying "staff must use approved authentication" is an assertion. Nothing in your logs distinguishes an approved device from a passkey synced to someone's personal cloud account.

**Attestation changes that.** At registration, the authenticator can present a signed statement identifying its make and model through an AAGUID. Your identity provider can require it and allow only approved values, so a registration either matches the policy or does not happen.

Seedkeeper PRO's AAGUID:

```
328dec20-698f-5d33-aed3-97daba53b1b0
```

Practically, that gives you three things an audit can use: a policy expressed as configuration rather than a document, a registration record showing which model was used, and a technical control that prevents non-compliant registrations rather than detecting them afterwards.

See [Configure Passkeys in Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id) and, for the implementation view, [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide).

Note that an AAGUID identifies a **model**, not an individual unit. Tying a credential to a specific device requires enterprise attestation, which is implemented in firmware but currently disabled - your own inventory is the practical answer.

## Cyber Insurance

Insurers increasingly ask about multi-factor authentication in their questionnaires, and some now distinguish phishing-resistant methods specifically, particularly for privileged and remote access.

Worth checking your policy wording rather than assuming. Where the distinction exists, being able to state that privileged accounts use hardware-bound FIDO2 credentials, with attestation enforced, is a stronger answer than "we use MFA".

## Data Protection

One argument that is often overlooked and matters under GDPR: **no third party holds your credentials.**

There is no cloud vault, no vendor account, and no synchronisation. Nothing about your authentication passes through Satochip, which means one fewer processor to assess, document and monitor in your supply chain - itself a NIS2 consideration under Article 21(2).

Compare with a cloud password manager or a synced passkey provider, both of which introduce a processor holding credential material on your behalf. Neither is wrong; both are work.

## FAQ

<details>
<summary>Does NIS2 require passkeys?</summary>

No. Article 21(2)(j) requires multi-factor or continuous authentication "where appropriate", and the directive names no technology. What guidance increasingly expects is phishing-resistant multi-factor authentication on privileged accounts and remote access, which FIDO2 passkeys are the standard way to provide.

</details>

<details>
<summary>What is the difference between FIDO2 Level 1 and EAL6+?</summary>

They assess different things. FIDO2 Level 1 certifies the protocol implementation against software attacks; EAL6+ certifies the secure element hardware against physical and side-channel attack. They are complementary rather than alternatives.

</details>

<details>
<summary>How do we prove to an auditor that only approved devices are used?</summary>

Through attestation and an AAGUID allowlist in your identity provider. Registration with a non-approved authenticator then fails rather than being detected afterwards, which turns a written policy into an enforced control.

</details>

<details>
<summary>Can we tie a credential to one specific physical device?</summary>

Not through attestation alone - an AAGUID identifies a model. Enterprise attestation would do it but is currently disabled, so your issue-time inventory is the practical record.

</details>

<details>
<summary>Does using Seedkeeper introduce a data processor under GDPR?</summary>

No. There is no cloud service, no account and no synchronisation, so no credential material passes through us. That removes one supplier from the assessment you would otherwise carry out for a cloud-based alternative.

</details>

<details>
<summary>Will this satisfy our cyber insurance requirements?</summary>

That depends on your policy wording, which is worth reading rather than assuming. Where an insurer distinguishes phishing-resistant MFA, hardware-bound FIDO2 credentials with enforced attestation are a substantially stronger answer than generic MFA.

</details>

## Related Articles

- [Why Hardware Keys for Your Business](/docs/business/why-hardware-keys-for-your-business)
- [Deploying FIDO2 Passkeys via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id)
- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
