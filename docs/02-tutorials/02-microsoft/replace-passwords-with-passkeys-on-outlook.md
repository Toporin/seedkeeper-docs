---
title: "How to Replace Passwords with Passkeys on Outlook"
description: "Remove your Microsoft account password entirely with the Passwordless account setting, leaving your Seedkeeper PRO passkey as the only way in."
keywords: [microsoft passwordless account, remove microsoft password, outlook passwordless, delete password microsoft]
sidebar_position: 4
sidebar_label: "Replace Passwords with Passkeys on Outlook"
tags: [microsoft, outlook, passkey]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I turn my password back on later?", a: "Microsoft's passwordless setting can typically be reverted from the same Additional security section if you need to."},
  {q: "Is this different from how Google handles this?", a: "Yes. Google doesn't currently offer full password removal - see How to Replace Passwords with Passkeys on Google for that comparison."},
  {q: "What if I lose my Seedkeeper PRO after going passwordless?", a: "Make sure you have a backup device registered first - see Passkey Backup Strategy."},
  {q: "Is going passwordless actually safer?", a: "Yes, on every attack that compromises accounts in practice - phishing, credential stuffing, breach exposure and reuse all stop applying. The one thing to plan first is recovery: register a second device before you rely on a single one. See Are Passkeys Safer?."},
]} />

<p class="doc-subtitle">Remove Your Password Entirely, Not Just Skip It</p>

<p class="platform-note">Web</p>

<div class="tldr">

Unlike some services, Microsoft lets you remove your account password entirely. Turn on "Passwordless account" in your security settings, and your Seedkeeper PRO passkey becomes the only way in.

</div>

## Overview

Once you have a Seedkeeper PRO [passkey](/docs/glossary/passkey) set up on your Microsoft account, you can go a step further than most services allow: Microsoft's **Passwordless account** option removes your password from the account entirely, rather than just making the passkey the default.

:::note[You'll need a passkey first]
This guide assumes you've already set up a passkey with your Seedkeeper PRO. If you haven't, see [How to Enable Passkeys on Outlook](/docs/tutorials/microsoft/enable-passkeys-on-outlook) first.
:::

Before changing anything, it is worth understanding what this actually buys you: a passkey cannot be phished, cannot be leaked in a breach, and cannot be reused across sites, because there is no shared secret at any point. See [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password) for the full comparison, and [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer) for the caveats worth knowing first.

## Step-by-Step Instructions

### Step 1: Go to Advanced Security Options

Open [Microsoft account Advanced Security Options](https://account.live.com/proofs/manage).

### Step 2: Sign in

Sign in with the Microsoft account you use for Outlook.

### Step 3: Find Additional security

Under your sign-in or security methods, find the **Additional security** section.

### Step 4: Turn on Passwordless account

Next to **Passwordless account** (shown as **OFF**), click **Turn on**.

<img src="/img/screenshots/outlook-passwordless-account-toggle.png" alt="Passwordless account toggle in Microsoft account security settings" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

Your Microsoft account no longer has a password - your Seedkeeper PRO passkey is now the way you sign in.

## Official Microsoft Resources

- [How to go passwordless with your Microsoft account](https://support.microsoft.com/en-us/accounts-billing/security/how-to-go-passwordless-with-your-microsoft-account)

## FAQ

<details>
<summary>Can I turn my password back on later?</summary>

Microsoft's passwordless setting can typically be reverted from the same **Additional security** section if you need to.

</details>

<details>
<summary>Is this different from how Google handles this?</summary>

Yes. Google doesn't currently offer full password removal - see [How to Replace Passwords with Passkeys on Google](/docs/tutorials/google/replace-passwords-with-passkeys-on-google) for that comparison.

</details>

<details>
<summary>What if I lose my Seedkeeper PRO after going passwordless?</summary>

Make sure you have a backup device registered first - see [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy).

</details>

<details>
<summary>Is going passwordless actually safer?</summary>

Yes, on every attack that compromises accounts in practice - phishing, credential stuffing, breach exposure and reuse all stop applying. The one thing to plan first is recovery: register a second device before you rely on a single one. See [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Related Articles

- [How to Enable Passkeys on Outlook](/docs/tutorials/microsoft/enable-passkeys-on-outlook)
- [Passkey Backup Strategy](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Passkey Recovery Strategy](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [How to Replace Passwords with Passkeys on Google](/docs/tutorials/google/replace-passwords-with-passkeys-on-google)
- [Passkey vs Password](/docs/security-academy/passkeys/passkey-vs-password)
- [Are Passkeys Safer?](/docs/security-academy/passkeys/are-passkeys-safer)
