---
title: "Adding a New Passkey"
description: "Passkeys cannot be imported - each one is created by the service itself. Here is how to check support and register your Seedkeeper PRO on any site."
keywords: [add passkey, import passkey, passkeys directory, which services support passkeys, register security key]
sidebar_position: 4
sidebar_label: "Adding a New Passkey"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I import a passkey from another device or app?", a: "No. Each passkey is created directly by the service you're securing and stored on your Seedkeeper PRO at that moment - there's no separate import step."},
  {q: "How do I know if a service supports passkeys?", a: "Check the FIDO Alliance Passkeys Directory or passkeys.directory. See Step 1 above."},
  {q: "Do I need my passkey PIN for this?", a: "Yes - see Setting Up Your Passkey PIN if you haven't set it up yet."},
]} />

<p class="doc-subtitle">Add Your Seedkeeper PRO as a Passkey on Any Supported Service</p>

<div class="tldr">

There's no passkey "import" - instead, check that the service you want to use supports passkeys, then set one up directly from that service's own security settings, scanning your Seedkeeper PRO when prompted.

</div>

## Overview

Unlike passwords, passkeys aren't created inside the Seedkeeper App and then moved elsewhere - each passkey is created directly by the website or app you're securing, and stored on your Seedkeeper PRO's secure element at that moment. So the real first step isn't "importing" anything - it's checking whether the service supports passkeys at all, then setting one up from within that service.

## Step-by-Step Instructions

### Step 1: Check if the service supports passkeys

Not every website or app offers passkeys yet. Check one of these directories:
- [FIDO Alliance Passkeys Directory](https://fidoalliance.org/passkeys-directory/)
- [passkeys.directory](https://passkeys.directory/)

### Step 2: Log in and go to security settings

Sign in to the service as usual, then find its security or login settings - this is usually where passkey options live.

### Step 3: Follow the service's passkey setup flow

Most services make this intuitive: look for an option like "Add a passkey" or "Set up passkey sign-in." When prompted to use a security key, scan your Seedkeeper PRO and enter your [passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

:::tip[Already have step-by-step guides for popular services]
Check the [Tutorials](/docs/category/tutorials) section - over twenty services covered, from Google and Microsoft to Amazon, PayPal, GitHub and Dropbox.
:::

## FAQ

<details>
<summary>Can I import a passkey from another device or app?</summary>

No. Each passkey is created directly by the service you're securing and stored on your Seedkeeper PRO at that moment - there's no separate import step.

</details>

<details>
<summary>How do I know if a service supports passkeys?</summary>

Check the [FIDO Alliance Passkeys Directory](https://fidoalliance.org/passkeys-directory/) or [passkeys.directory](https://passkeys.directory/). See [Step 1](#step-1-check-if-the-service-supports-passkeys) above.

</details>

<details>
<summary>Do I need my passkey PIN for this?</summary>

Yes - see [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) if you haven't set it up yet.

</details>

## Related Articles

- [Creating Your First Passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
- [Setting Up Your Passkey PIN](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password)
- [Tutorials](/docs/category/tutorials)
