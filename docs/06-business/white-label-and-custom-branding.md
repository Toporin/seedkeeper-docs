---
title: "White Label and Custom Branding"
description: "Branded cards and rings for resellers, MSPs and organisations issuing hardware under their own name. What can be customised and what cannot."
keywords: [white label security key, custom branded FIDO2, OEM security key, MSP hardware key, branded smartcard, reseller security hardware]
sidebar_position: 7
sidebar_label: "White Label and Custom Branding"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can we sell Seedkeeper hardware under our own brand?", a: "Yes. Cards, rings and packaging can carry your branding, subject to minimum quantities and lead times. The protocol-level identity of the device is unchanged."},
  {q: "Does a branded device have a different AAGUID?", a: "No. The AAGUID identifies the certified make and model, so a branded unit reports the same value and works identically with any allowlist or attestation policy."},
  {q: "Does branding affect the FIDO2 certification?", a: "No. The certificate covers the certified implementation, which branding does not alter. The same certificate number applies."},
  {q: "Can the companion apps be white-labelled?", a: "Not as part of a standard branding order. Users install the Seedkeeper apps, so plan your onboarding material accordingly."},
  {q: "Do branded devices arrive pre-configured?", a: "No, they arrive in the same state as any other unit. Configuring devices before distribution is a provisioning step on your side."},
]} />

<p class="doc-subtitle">Your Name on the Hardware</p>

<div class="tldr">

Cards and rings can be produced with your own branding, for resellers, managed service providers and organisations issuing devices under their own identity. The physical surface is customisable; the FIDO2 identity underneath is not, and that distinction has consequences worth understanding before you commit.

</div>

## Who This Is For

Three situations, with different requirements.

**Resellers and distributors** selling under their own brand, where the packaging and card face carry your identity rather than ours.

**Managed service providers** issuing hardware to client organisations as part of a security offering, where a branded device reinforces that the service is yours.

**Larger organisations** issuing devices to staff, where a corporate-branded card sits more naturally alongside an access badge than a third-party product does.

## What Can Be Customised

**The card face.** Logo, colours, layout, and text within the constraints of the printing process and the space the chip and antenna occupy.

**The ring finish**, within the limits of the material.

**Packaging and inserts**, including onboarding instructions carrying your own support contact rather than ours - usually the most valuable part for an MSP, since it determines who the user calls.

## What Cannot Be Changed

Being explicit about this early saves a conversation later.

**The AAGUID.** It identifies the make and model at protocol level, and a branded device reports the same value as a standard one. That is a deliberate property of FIDO2: relying parties recognise the hardware, and an allowlist works identically for a branded unit - see [Security and Compliance](/docs/business/security-compliance-for-organizations#evidence-rather-than-assertion).

**The FIDO certification.** The certificate covers the certified implementation. Branding the surface does not alter what was certified, and the same certificate number applies.

**The firmware and applets.** Published under AGPLv3, identical across units. Functional changes are a development conversation, not a branding one.

**The companion apps.** The Seedkeeper apps are what users install, and they are not white-labelled as part of a standard branding order.

That last point matters for an MSP: your logo on the card, our apps on the phone. Worth planning your onboarding material around.

## Practical Constraints

**Minimum quantities and lead times** apply, and both scale with the complexity of what you are asking for.

**Artwork requirements.** Printing on a smartcard is not printing on paper. Vector artwork, defined safe areas around the chip and antenna, and a colour range the process can actually reproduce. Expect a proof stage.

**Provisioning is separate.** A branded device arrives in the same state as any other. If you want devices configured before they reach the end user, that is a provisioning workflow on your side - see [Fleet Management and Bulk Provisioning](/docs/business/fleet-management-and-bulk-provisioning).

## If You Are an MSP

Two things worth deciding before ordering.

**Who holds the backup device.** If you are issuing to client organisations, the second device is part of your service design, not an afterthought - see [Deploying Seedkeeper PRO in Your Organization](/docs/business/deploying-seedkeeper-pro-in-your-organization).

**Who answers the phone.** A branded device sends users to you. Make sure your team can answer the common questions - the PIN cannot be recovered, passkeys cannot be copied between devices, and readers are needed on desktop - before the first batch ships.

## Getting Started

Branding is a commercial conversation rather than a self-service configuration, since quantities, artwork and lead times all depend on what you are trying to achieve.

Have ready: expected volumes, whether you need cards, rings or both, your artwork in vector format, and whether you also want custom packaging or inserts.

## FAQ

<details>
<summary>Can we sell Seedkeeper hardware under our own brand?</summary>

Yes. Cards, rings and packaging can carry your branding, subject to minimum quantities and lead times. The protocol-level identity of the device is unchanged.

</details>

<details>
<summary>Does a branded device have a different AAGUID?</summary>

No. The AAGUID identifies the certified make and model, so a branded unit reports the same value and works identically with any allowlist or attestation policy.

</details>

<details>
<summary>Does branding affect the FIDO2 certification?</summary>

No. The certificate covers the certified implementation, which branding does not alter. The same certificate number applies.

</details>

<details>
<summary>Can the companion apps be white-labelled?</summary>

Not as part of a standard branding order. Users install the Seedkeeper apps, so plan your onboarding material accordingly.

</details>

<details>
<summary>Do branded devices arrive pre-configured?</summary>

No, they arrive in the same state as any other unit. Configuring devices before distribution is a provisioning step on your side.

</details>

## Related Articles

- [Fleet Management and Bulk Provisioning](/docs/business/fleet-management-and-bulk-provisioning)
- [Deploying Seedkeeper PRO in Your Organization](/docs/business/deploying-seedkeeper-pro-in-your-organization)
- [Security and Compliance for Organizations](/docs/business/security-compliance-for-organizations)
