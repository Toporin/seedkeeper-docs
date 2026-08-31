---
title: "Deploying Seedkeeper PRO in Your Organization"
description: "A rollout plan that survives contact with real users: pilot group, priority accounts, the two decisions to make early, and what breaks if you skip them."
keywords: [deploy security keys, hardware key rollout, passwordless deployment, pilot group, enterprise passkey rollout, SME security deployment]
sidebar_position: 2
sidebar_label: "Deploying in Your Organization"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "How long does a rollout take for a company of fifty people?", a: "Typically a two-week pilot, then two to four weeks for privileged accounts, then the rest by team. The constraint is usually reader availability and scheduling rather than the technical work."},
  {q: "Should every employee get two devices?", a: "Anyone with privileged access, yes - a hardware passkey cannot be copied, so a single device is a single point of failure. For other staff it depends on how costly an account lockout is for that role."},
  {q: "Can we enforce hardware keys centrally?", a: "Yes, where your identity provider supports it. Microsoft Entra ID can require phishing-resistant methods and restrict registration to approved hardware by AAGUID."},
  {q: "What if some computers have no card reader?", a: "The device needs NFC or a contact smartcard reader, and there is no USB path. Confirm coverage across your fleet during the pilot, before ordering at scale."},
  {q: "Should we keep SMS as a backup method?", a: "No, once a stronger method works. An account is protected by its weakest enabled method, so leaving SMS active preserves the route an attacker would use."},
]} />

<p class="doc-subtitle">From Pilot to Everyone, Without the Usual Pain</p>

<div class="tldr">

Roll out in three phases: a pilot of five to ten people, then privileged accounts, then everyone. Two decisions made early determine whether the project succeeds - **how many devices each person gets**, and **what happens when one is lost**. Get those wrong and the rollout stalls at the first incident.

</div>

## The Two Decisions to Make First

Everything else is logistics. These two are structural, and changing them mid-rollout means revisiting every account already registered.

### One Device Per Person, or Two?

A hardware-bound passkey cannot be copied. A user with one device has a single point of failure, and the day they lose it, someone in your organisation spends hours on account recovery.

**Issue two devices per person** for anyone with privileged access. A card in the wallet and a ring, or a card in use and a card in a drawer. Both get registered on every account at the same time - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy).

The cost difference is small. The alternative is discovering the problem during an incident.

### Who Holds the Backup?

Two workable models, and you should pick deliberately.

**The user holds both.** Simplest, and the user is responsible for keeping the spare somewhere sensible. Works well when people are reasonably careful.

**The organisation holds the spare.** A registered second device kept in a safe, retrieved when needed. Better control, and it means a departing employee cannot walk off with both. Requires a process for retrieval that does not depend on one person being available.

There is no third option where nobody holds a spare. That is the same as one device.

## Phase 1: Pilot

Five to ten people, chosen for tolerance rather than seniority. You want the ones who will tell you what went wrong, not the ones who will quietly work around it.

Include at least one person who works remotely, one who uses a Mac, and one who is not technical. Those three will surface most of what you need to fix.

**What to do in the pilot:**

- Provision the devices - see [Fleet Management and Bulk Provisioning](/docs/business/fleet-management-and-bulk-provisioning)
- Register each person on their email and one other service
- Have them work normally for two weeks
- Deliberately test a lost device, using the process you intend to use in production

**What you are measuring:** how many support questions per person, where they got stuck, and whether the reader situation works on every machine people actually use.

That last one catches more rollouts than anything else. The device needs NFC or a contact smartcard reader, and there is no USB path - see [Device Capabilities](/docs/developers/device-capabilities#transports). Confirm your fleet can read it before you order for everyone.

## Phase 2: Privileged Accounts

Administrators, remote access, finance. This is where most of the risk reduction sits, and it is worth completing before extending further.

**Enforce it centrally rather than asking.** If you run Microsoft Entra ID, you can require phishing-resistant methods and restrict which hardware qualifies by AAGUID - see [Deploying FIDO2 Passkeys via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id).

**Keep a break-glass account.** An emergency account with its own credentials, stored offline and outside the systems it can access. It exists precisely for the day your normal path is unavailable, which rules out keeping its credentials inside that path.

**Remove the weaker methods once the stronger one works.** An account is protected by its weakest enabled method. Leaving SMS enabled as a fallback keeps that route open for an attacker - see [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## Phase 3: Everyone Else

By this point the process is known and the surprises are behind you. Extend by team rather than all at once, and keep the pilot group available as informal support - people ask a colleague before they open a ticket.

## What to Tell People

Keep it to three points. Anything longer will not be read.

1. **What it replaces.** No more password for the accounts covered, no more codes to type before they expire.
2. **What to do if they lose it.** Who to tell, and what happens next. Make it clear that reporting a lost device promptly is expected, not embarrassing.
3. **That the PIN cannot be recovered.** Eight wrong attempts locks the FIDO applet, and recovery means erasing every passkey on the device - see [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

Skip the cryptography. Nobody needs it, and explaining it makes the change sound more complicated than it is.

## What Usually Goes Wrong

**No readers on desktops.** The single most common blocker. Sort it before ordering devices.

**One device per person.** The rollout runs fine until the first loss, then stalls while everyone reconsiders.

**Old methods left enabled.** The deployment is complete on paper and the weak route is still live.

**No leaver process.** Devices accumulate in drawers and access stays registered. See [Employee Onboarding and Offboarding](/docs/business/employee-onboarding-and-offboarding).

**Announcing it as a security project.** It lands better as a convenience improvement that happens to be more secure, because for the user that is exactly what it is.

## FAQ

<details>
<summary>How long does a rollout take for a company of fifty people?</summary>

Typically a two-week pilot, then two to four weeks for privileged accounts, then the rest by team. The constraint is usually reader availability and scheduling rather than the technical work.

</details>

<details>
<summary>Should every employee get two devices?</summary>

Anyone with privileged access, yes - a hardware passkey cannot be copied, so a single device is a single point of failure. For other staff it depends on how costly an account lockout is for that role.

</details>

<details>
<summary>Can we enforce hardware keys centrally?</summary>

Yes, where your identity provider supports it. Microsoft Entra ID can require phishing-resistant methods and restrict registration to approved hardware by AAGUID.

</details>

<details>
<summary>What if some computers have no card reader?</summary>

The device needs NFC or a contact smartcard reader, and there is no USB path. Confirm coverage across your fleet during the pilot, before ordering at scale.

</details>

<details>
<summary>Should we keep SMS as a backup method?</summary>

No, once a stronger method works. An account is protected by its weakest enabled method, so leaving SMS active preserves the route an attacker would use.

</details>

## Related Articles

- [Fleet Management and Bulk Provisioning](/docs/business/fleet-management-and-bulk-provisioning)
- [Employee Onboarding and Offboarding](/docs/business/employee-onboarding-and-offboarding)
- [Deploying FIDO2 Passkeys via Microsoft Entra ID](/docs/business/deploying-fido2-passkeys-via-microsoft-entra-id)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
