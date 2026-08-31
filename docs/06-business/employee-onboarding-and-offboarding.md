---
title: "Employee Onboarding and Offboarding"
description: "The device lifecycle that keeps a deployment honest: issuing on day one, revoking on the last day, and handling the device that never comes back."
keywords: [employee offboarding security, revoke access leaver, security key onboarding, device lifecycle, joiner mover leaver, deprovisioning]
sidebar_position: 3
sidebar_label: "Onboarding and Offboarding"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "What is the first thing to do when an employee leaves?", a: "Revoke their registered credentials on every service, and terminate active sessions. Collect the hardware afterwards - recovering the device is not what protects the accounts."},
  {q: "What if a leaver does not return their security key?", a: "Provided you revoked their registrations, the device is inert - the passkeys on it point at accounts that no longer accept them. Check whether it held passwords or OTP credentials in the other applets, and record it as not returned."},
  {q: "Does collecting the device revoke access?", a: "No. Revocation happens on the service side. Holding the hardware prevents future use of it, but registrations remain live until removed from each account or from your identity provider."},
  {q: "Should employees set their own PIN?", a: "Yes, at first use. A PIN known to whoever provisioned the device is not a second factor, since possession and knowledge would then sit with the same person."},
  {q: "What do we do when someone changes role?", a: "Treat it as a partial offboarding: review which systems they are registered on and remove the ones the new role does not require. The device itself does not need reissuing."},
]} />

<p class="doc-subtitle">Day One, Last Day, and the Device That Never Comes Back</p>

<div class="tldr">

A deployment stays secure only if the lifecycle is enforced. Two checklists - one for arrivals, one for departures - plus a clear rule for the device that is not returned. Revocation happens **on the service side**, not on the hardware, which is the part people get wrong.

</div>

## Why This Matters More Than It Looks

An account that should have been closed is one of the three most common ways organisations get breached, and it is entirely self-inflicted.

Hardware changes the shape of the problem without removing it. You now have a physical object to issue and recover, and a set of credentials registered across services that must be revoked whether or not the object comes back.

The two are independent. **Recovering the device does not revoke access, and revoking access does not require the device.** Confusing the two is what leaves live credentials behind.

## Onboarding Checklist

### Before Day One

- Provision the devices - see [Fleet Management and Bulk Provisioning](/docs/business/fleet-management-and-bulk-provisioning)
- Set a FIDO PIN, or plan for the user to set their own at first use
- Record the serial or asset tag against the person in your inventory
- Confirm the workstation has a reader

### Day One

- Hand over both devices - primary and backup
- The user sets or changes their PIN, so nobody else knows it
- Register both devices on their email account first, then the rest
- Confirm the backup actually works by signing in with it once

That last step takes two minutes and is the only thing that turns a backup into a backup. A spare nobody has tested is an assumption.

### What to Explain

Three things, and no more:

1. This replaces your password on these accounts
2. Tell us immediately if you lose it - that is expected, not a problem
3. The PIN cannot be recovered, so choose one you will remember

## Offboarding Checklist

Run this the same day, every time. A written checklist is what makes that happen.

### Revoke First, Recover Second

**Remove the registered credentials on every service** where the person's devices were registered. This is done in each service's account settings, or centrally in your identity provider. It works whether or not you have the hardware in your hand.

**Then collect the devices.** They are company property and they may hold other secrets, but collecting them is not what protects the accounts.

Order matters because it removes the temptation to wait. If someone leaves on Friday and the device comes back on Monday, the access should already be gone by Friday evening.

### The Full List

- Registered passkeys removed, on every service
- OTP credentials removed where the device held them
- Active sessions terminated - a live session survives credential revocation
- Shared credentials rotated, if the person knew any
- Devices collected, or recorded as not returned
- Inventory updated

Terminating sessions is the step most often missed. Revoking a credential prevents new sign-ins; it does not always end one already in progress.

## When the Device Does Not Come Back

It happens: a bad departure, a lost device, someone who simply does not respond.

**This is not an emergency, provided you revoked properly.** A Seedkeeper PRO with no registered credentials left is an inert object. The passkeys on it point at accounts that no longer accept them.

What still matters:

- **The FIDO PIN protects it in the meantime.** Eight wrong attempts lock the applet - see [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- **Check whether it held anything else.** Passwords, secure notes and OTP credentials live in separate applets with separate PINs, and those are not revoked by removing a passkey from a service
- **Record it as not returned** rather than quietly writing it off, so it is not later reissued or assumed to be in a drawer

## Role Changes

The forgotten middle case. Someone moves from finance to operations, or loses administrator rights.

Their device is fine. Their **registrations** are not: they may still be enrolled on systems their new role does not need. Treat a role change as a partial offboarding - review what they are registered on, remove what no longer applies.

## Keep an Inventory

Nothing elaborate. A row per device: serial or asset tag, who holds it, primary or backup, issue date, status.

Without it, two questions become unanswerable at the worst moment: *who has device X*, and *which devices does person Y hold*. Both come up during an incident, and both are trivial to answer if you wrote it down when you issued the thing.

## FAQ

<details>
<summary>What is the first thing to do when an employee leaves?</summary>

Revoke their registered credentials on every service, and terminate active sessions. Collect the hardware afterwards - recovering the device is not what protects the accounts.

</details>

<details>
<summary>What if a leaver does not return their security key?</summary>

Provided you revoked their registrations, the device is inert - the passkeys on it point at accounts that no longer accept them. Check whether it held passwords or OTP credentials in the other applets, and record it as not returned.

</details>

<details>
<summary>Does collecting the device revoke access?</summary>

No. Revocation happens on the service side. Holding the hardware prevents future use of it, but registrations remain live until removed from each account or from your identity provider.

</details>

<details>
<summary>Should employees set their own PIN?</summary>

Yes, at first use. A PIN known to whoever provisioned the device is not a second factor, since possession and knowledge would then sit with the same person.

</details>

<details>
<summary>What do we do when someone changes role?</summary>

Treat it as a partial offboarding: review which systems they are registered on and remove the ones the new role does not require. The device itself does not need reissuing.

</details>

## Related Articles

- [Deploying Seedkeeper PRO in Your Organization](/docs/business/deploying-seedkeeper-pro-in-your-organization)
- [Fleet Management and Bulk Provisioning](/docs/business/fleet-management-and-bulk-provisioning)
- [Security and Compliance for Organizations](/docs/business/security-compliance-for-organizations)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
