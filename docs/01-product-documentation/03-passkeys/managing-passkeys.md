---
title: "Managing Passkeys"
description: "List every passkey stored on your Seedkeeper PRO and delete the ones you no longer need, from the app's Configuration menu."
keywords: [list passkeys, delete passkey, manage passkeys hardware, resident credentials, Seedkeeper PRO passkeys]
sidebar_position: 5
sidebar_label: "Managing Passkeys"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Do I need my passkey PIN to view my passkeys?", a: "Yes - see Setting Up Your Passkey PIN if you haven't set it up yet."},
  {q: "Can I manage passkeys without the Seedkeeper PRO App?", a: "Yes. Windows and Chromium browsers can both list and delete them, because the device implements standard CTAP2 credential management. See Managing Passkeys From Your Computer."},
  {q: "Can I undo a passkey deletion?", a: "No. Once deleted, a passkey is permanently removed from your device. You'd need to set up a new passkey with that service - see Adding a New Passkey."},
  {q: "Does deleting a passkey here also remove it from the website?", a: "Deleting it here removes the credential from your device, so it can no longer be used to sign in anywhere - that part is immediate. The service may still show a stale entry in its own list of registered passkeys, so remove it there too to keep your account settings tidy and avoid confusion later."},
]} />

<p class="doc-subtitle">See and Remove the Passkeys on Your Device</p>

<div class="tldr">

List every passkey stored on your Seedkeeper PRO from Configuration → FIDO → List Resident Passkeys, and delete any of them directly from that same list.

</div>

## Overview

Your Seedkeeper PRO stores every passkey you've created directly on its secure element.<br />
This article covers viewing that list and removing a passkey you no longer need.

## Listing Your Passkeys

<div class="step-layout">

<div class="step-text">

### Step 1: Get ready

You'll need your Seedkeeper PRO card or ring and the Seedkeeper PRO App installed.

### Step 2: Open the app and scan your device

Open the Seedkeeper PRO App, then pull down (iOS) or tap refresh (Android) to activate NFC and scan your device. You'll land on the list of OTP codes stored on your device.

### Step 3: Open the menu

Tap the 3-dot menu in the **top right** corner.

### Step 4: Go to Configuration → FIDO → List Resident Passkeys

### Step 5: Scan your device

### Step 6: Enter your passkey PIN

The app asks for your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) to access the passkeys stored on your device.

### Step 7: Scan your device again

Your list of passkeys appears.

</div>

<div class="step-image">

<img src="/img/gifs/list-passkeys-iphone-mockup.gif" alt="Listing passkeys in the Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

## Managing Passkeys From Windows or Chrome

The Seedkeeper PRO App is not the only way to do this. Windows and Chromium browsers can list and delete the passkeys on your device natively, and set the FIDO PIN too - see [Managing Passkeys From Your Computer](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer).

## Deleting a Passkey

<div class="step-layout">

<div class="step-text">

### Step 1: Tap the icon next to the passkey

From your passkeys list, tap the icon next to the one you want to remove.

### Step 2: Tap Delete Passkey

### Step 3: Confirm

Tap **Delete Passkey** again to confirm.

### Step 4: Scan your device

Scan your Seedkeeper PRO to complete the deletion.

</div>

<div class="step-image">

<img src="/img/gifs/delete-passkey-iphone-mockup.gif" alt="Deleting a passkey in the Seedkeeper PRO App" className="mockup-image" />

</div>

</div>

## FAQ

<details>
<summary>Do I need my passkey PIN to view my passkeys?</summary>

Yes - see [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) if you haven't set it up yet.

</details>

<details>
<summary>Can I manage passkeys without the Seedkeeper PRO App?</summary>

Yes. Windows and Chromium browsers can both list and delete them, because the device implements standard CTAP2 credential management. See [Managing Passkeys From Your Computer](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer).

</details>

<details>
<summary>Can I undo a passkey deletion?</summary>

No. Once deleted, a passkey is permanently removed from your device. You'd need to set up a new passkey with that service - see [Adding a New Passkey](/docs/product-documentation/passkeys/importing-passkeys).

</details>

<details>
<summary>Does deleting a passkey here also remove it from the website?</summary>

Deleting it here removes the credential from your device, so it can no longer be used to sign in anywhere - that part is immediate. The service may still show a stale entry in its own list of registered passkeys, so remove it there too to keep your account settings tidy and avoid confusion later.

</details>

## Related Articles

- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Creating Your First Passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
- [Adding a New Passkey](/docs/product-documentation/passkeys/importing-passkeys)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Managing Passkeys From Your Computer](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer)
- [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work)
