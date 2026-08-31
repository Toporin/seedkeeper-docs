---
title: "Deploying FIDO2 Passkeys via Microsoft Entra ID"
description: "Enable passkeys tenant-wide, restrict registration to approved hardware by AAGUID, and roll it out without locking anyone out."
keywords: [Entra ID FIDO2, deploy passkeys Entra, AAGUID key restriction, authentication methods policy, enforce attestation, passwordless Entra ID]
sidebar_position: 6
sidebar_label: "Deploying FIDO2 via Entra ID"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What role do I need to configure this?", a: "Authentication Policy Administrator, or Global Administrator. The setting lives under Protection, Authentication methods, Policies in the Entra admin centre."},
  {q: "How do I allow only company-issued security keys?", a: "Enable attestation, then set a key restriction policy to Allow and add the AAGUIDs you approve. Registration with any other authenticator then fails. Seedkeeper PRO's AAGUID is 328dec20-698f-5d33-aed3-97daba53b1b0."},
  {q: "Does an AAGUID identify a specific device?", a: "No, it identifies a make and model. Tying a credential to one physical unit would require enterprise attestation, so your own issue-time inventory is the practical record."},
  {q: "Can I provision passkeys for users in advance?", a: "No. A passkey is created by the service during registration, on the device present at that moment, so users must enrol their own. PINs and OTP credentials can be provisioned beforehand."},
  {q: "Should I disable SMS once passkeys are working?", a: "Yes, group by group as each is enrolled. An account is protected by its weakest enabled method, so leaving SMS active preserves the route an attacker would use."},
  {q: "What if I enable key restrictions after people have already registered?", a: "Existing credentials keep working, including non-compliant ones, so the policy is bypassed for everyone already enrolled. Restrict before announcing enrolment."},
]} />

<p class="doc-subtitle">Tenant-Wide Configuration for Administrators</p>

<p class="platform-note">Web</p>

<div class="tldr">

Enable the **Passkey (FIDO2)** method in the Entra admin centre, allow self-service registration, and restrict which hardware qualifies by AAGUID. Seedkeeper PRO's value is `328dec20-698f-5d33-aed3-97daba53b1b0`. Do the key restriction **before** telling people to enrol, and keep a break-glass account outside the policy.

</div>

## What This Covers

This is the administrator side. If you are an individual registering your own device on a work account, you want [Configure Passkeys in Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id) instead.

You will need the **Authentication Policy Administrator** role, or Global Administrator.

:::note[Microsoft renames things]
Menu labels in the Entra admin centre change regularly, and passkey settings have moved more than once. The structure below is stable; if a label differs, look for the nearest equivalent under Authentication methods.
:::

## Step 1: Enable the Method

In the [Microsoft Entra admin centre](https://entra.microsoft.com):

**Protection** → **Authentication methods** → **Policies** → **Passkey (FIDO2)**

Set **Enable** to **Yes**, and choose who it applies to. Targeting a pilot group first rather than All users is the difference between a smooth rollout and a support queue - see [Deploying Seedkeeper PRO in Your Organization](/docs/business/deploying-seedkeeper-pro-in-your-organization).

## Step 2: Configure the Method

On the **Configure** tab:

**Allow self-service set up** → **Yes**. Users register their own device from their Security info page. The alternative is provisioning every credential centrally, which is far more work and, for passkeys, is not possible in advance - a passkey is created by the service at registration.

**Enforce attestation** → **Yes**, if you want to know which hardware was used. The authenticator then presents a signed statement of its make and model, which Entra validates against the FIDO Metadata Service.

Seedkeeper PRO provides standard attestation, so it satisfies this setting. Note that it identifies a **model**, not an individual unit - see [Attestation](/docs/glossary/attestation).

:::warning[Enforce attestation excludes some authenticators]
Several software passkey providers do not supply attestation Entra can validate. Turning this on may block credentials your users already have. Announce it before enabling, not after.
:::

## Step 3: Restrict to Approved Hardware

This is the setting that turns a written policy into an enforced control.

Under **Key Restriction Policy**:

- **Enforce key restrictions** → **Yes**
- **Restrict specific keys** → **Allow**
- **Add AAGUID**, then enter the values you approve

Seedkeeper PRO:

```
328dec20-698f-5d33-aed3-97daba53b1b0
```

With an allowlist in place, registration with anything else simply fails. That excludes passkeys synced to a personal iCloud or Google account, which is usually the point: those credentials live in an employee's personal cloud, outside your control and outside your ability to revoke.

Two practical notes. **Key restrictions require attestation**, so step 2 has to be enabled for this to work. And **the list needs maintaining** as you approve new models - it is a small recurring task, not a one-off.

## Step 4: Test Before You Announce

Register one device yourself, on a real account, before the policy reaches anyone else.

Worth verifying: registration succeeds with an approved AAGUID, registration **fails** with a non-approved authenticator, and sign-in works from a machine that is not the one you registered on. That last case is where NFC and reader availability surface - see [Device Capabilities](/docs/developers/device-capabilities#transports).

## Step 5: Keep a Break-Glass Account

An emergency access account, excluded from the policy, with credentials stored offline and outside the systems it can reach.

It exists for the day your normal authentication path is unavailable - a misconfigured policy, an expired certificate, a Microsoft outage. Storing its credentials inside the tenant it is meant to rescue defeats the purpose entirely.

Microsoft's own guidance recommends at least two such accounts, excluded from Conditional Access policies and monitored for use.

## Step 6: Retire the Weaker Methods

An account is protected by its **weakest enabled method**, not its strongest.

Once passkeys are working for a group, disable SMS and voice call for that group in the same Authentication methods policy. Leaving them enabled as a fallback preserves exactly the route an attacker would take - see [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

Do this per group, after the group is enrolled. Doing it tenant-wide up front locks people out.

## Conditional Access

The Authentication methods policy decides what users *may* register. Conditional Access decides what they *must* use.

Requiring phishing-resistant MFA for administrator roles and for remote access is where most of the risk reduction sits. Create the policy in report-only mode first, review the impact for a week, then enforce.

This is also the pairing supervisory guidance increasingly expects - see [Passkeys and NIS2](/docs/security-academy/passkeys/passkey-vs-password#passkeys-and-nis2) and [Security and Compliance for Organizations](/docs/business/security-compliance-for-organizations).

## What Goes Wrong

**Key restrictions enabled after people enrolled.** Existing non-compliant credentials keep working and quietly bypass the policy. Restrict first.

**Attestation enforced without warning.** Users with software passkeys find registration broken and open tickets.

**No break-glass account.** Discovered on the day it was needed.

**Old methods left enabled.** The deployment is complete on paper while SMS remains live.

**No readers on desktops.** Seedkeeper PRO speaks NFC and ISO 7816 contact, with no USB path. Confirm coverage before you order at scale - see [Fleet Management and Bulk Provisioning](/docs/business/fleet-management-and-bulk-provisioning).

## Official Microsoft Resources

- [Enable passkeys in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-enable-passkey-fido2)
- [Authentication methods policy](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-methods-manage)
- [Manage emergency access accounts](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access)

## FAQ

<details>
<summary>What role do I need to configure this?</summary>

Authentication Policy Administrator, or Global Administrator. The setting lives under Protection, Authentication methods, Policies in the Entra admin centre.

</details>

<details>
<summary>How do I allow only company-issued security keys?</summary>

Enable attestation, then set a key restriction policy to Allow and add the AAGUIDs you approve. Registration with any other authenticator then fails. Seedkeeper PRO's AAGUID is `328dec20-698f-5d33-aed3-97daba53b1b0`.

</details>

<details>
<summary>Does an AAGUID identify a specific device?</summary>

No, it identifies a make and model. Tying a credential to one physical unit would require enterprise attestation, so your own issue-time inventory is the practical record.

</details>

<details>
<summary>Can I provision passkeys for users in advance?</summary>

No. A passkey is created by the service during registration, on the device present at that moment, so users must enrol their own. PINs and OTP credentials can be provisioned beforehand.

</details>

<details>
<summary>Should I disable SMS once passkeys are working?</summary>

Yes, group by group as each is enrolled. An account is protected by its weakest enabled method, so leaving SMS active preserves the route an attacker would use.

</details>

<details>
<summary>What if I enable key restrictions after people have already registered?</summary>

Existing credentials keep working, including non-compliant ones, so the policy is bypassed for everyone already enrolled. Restrict before announcing enrolment.

</details>

## Related Articles

- [Configure Passkeys in Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id)
- [Deploying Seedkeeper PRO in Your Organization](/docs/business/deploying-seedkeeper-pro-in-your-organization)
- [Security and Compliance for Organizations](/docs/business/security-compliance-for-organizations)
- [Device Capabilities](/docs/developers/device-capabilities)
- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
