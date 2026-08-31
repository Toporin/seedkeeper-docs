---
title: "Managing OTP Entries"
description: "Recalculate an expired code, copy it, pin an account to the top of your list, or delete it - every action available on a stored OTP entry."
keywords: [manage OTP accounts, recalculate TOTP code, copy 2FA code, pin account, delete OTP entry]
sidebar_position: 3
sidebar_label: "Managing OTP Entries"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Why is my OTP code grayed out?", a: "It's expired. Tap the account, then Calculate, and scan your Seedkeeper PRO to get a fresh code. See Calculate above."},
  {q: "Where does a copied code go?", a: "Your device's clipboard - paste it wherever you need it, right after copying. See Copy above."},
  {q: "Can I unpin an account?", a: "Yes - the same Pin option lets you remove it from the Pinned section the same way you added it."},
  {q: "Can I recover a deleted OTP account?", a: "Only if you saved the original QR code or secret beforehand. See Backup and Restore Procedures."},
]} />

<p class="doc-subtitle">Everything You Can Do With a Stored OTP Code</p>

<div class="tldr">

See all your OTP accounts at a glance, search for a specific one, then tap any entry to recalculate an expired code, copy it, pin it to the top of your list, or delete it entirely.

</div>

## Overview

Once you've added a few OTP accounts, the Seedkeeper PRO App gives you a full accounts list with everything you need to find, use, and manage each one. This article walks through every action available.

## A Clear Overview of All Your Accounts

Open the app and scan your Seedkeeper PRO to land on your **Accounts** list. Every OTP secret you've added is shown here, with its issuer, the account name (usually an email or username), and its current code.

<img src="/img/screenshots/otp-accounts-overview-mockup.png" alt="Accounts overview list in the Seedkeeper PRO App" className="mockup-image" />

## Searching for a Specific Account

Once you have more than a handful of accounts, use the search bar at the bottom of the Accounts list to filter down to the one you're looking for - just start typing part of its name.

<img src="/img/screenshots/otp-search-mockup.png" alt="Searching for an OTP account in the Seedkeeper PRO App" className="mockup-image" />

## Tapping an Account: Your Options

Tap any account in the list to open its options menu: **Calculate**, **Copy**, **Pin**, and **Delete**.

<img src="/img/screenshots/otp-options-menu-mockup.png" alt="Options menu for an OTP account: Calculate, Copy, Pin, Delete" className="mockup-image" />

### Calculate: Recalculating an Expired Code

Like any TOTP code, the one shown in your list expires after a short window - you'll see it grayed out once that happens. If a freshly calculated code is still rejected, the clock is the usual culprit - see [Lost OTP Access](/docs/troubleshooting/lost-otp-access). Since your Seedkeeper PRO's secure element generates the code fresh each time rather than storing a live countdown, you'll need to scan your device again to get a current one.

Tap **Calculate**, then scan your Seedkeeper PRO when prompted.

<img src="/img/screenshots/otp-ready-to-scan-mockup.png" alt="Ready to Scan prompt to recalculate an OTP code" className="mockup-image" />

Once the scan completes, the app confirms the code has been calculated, and the fresh, active code appears in the list.

<img src="/img/screenshots/otp-code-calculated-mockup.png" alt="Code calculated confirmation in the Seedkeeper PRO App" className="mockup-image" />

### Copy: Copying a Code to Your Clipboard

Tap **Copy** from the options menu to copy the current code to your clipboard, ready to paste wherever you need it. The app confirms with a "Copied to clipboard" message.

<img src="/img/screenshots/otp-copied-clipboard-mockup.png" alt="Copied to clipboard confirmation in the Seedkeeper PRO App" className="mockup-image" />

:::note
If the code shown is expired (grayed out), copy it after recalculating - see [Calculate](#calculate-recalculating-an-expired-code) above.
:::

### Pin: Keeping an Account at the Top

Tap **Pin** to move an account into a dedicated **Pinned** section at the top of your Accounts list - handy for the accounts you check most often, so you don't have to scroll or search for them every time.

<img src="/img/screenshots/otp-pinned-list-mockup.png" alt="Pinned account shown at the top of the Accounts list" className="mockup-image" />

### Delete: Removing an Account for Good

Tap **Delete** to remove an account entirely. You'll be asked to confirm, since this permanently deletes the account from your Seedkeeper PRO - including your ability to generate codes for it going forward.

<img src="/img/screenshots/otp-delete-confirm-mockup.png" alt="Delete account confirmation dialog in the Seedkeeper PRO App" className="mockup-image" />

:::warning[This can't be undone]
Deleting an OTP account is permanent - there's no cloud copy to restore from. If you might need this account again, make sure you've saved the original QR code or secret first. See [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).
:::

## FAQ

<details>
<summary>Why is my OTP code grayed out?</summary>

It's expired. Tap the account, then **Calculate**, and scan your Seedkeeper PRO to get a fresh code. See [Calculate](#calculate-recalculating-an-expired-code) above.

</details>

<details>
<summary>Where does a copied code go?</summary>

Your device's clipboard - paste it wherever you need it, right after copying. See [Copy](#copy-copying-a-code-to-your-clipboard) above.

</details>

<details>
<summary>Can I unpin an account?</summary>

Yes - the same Pin option lets you remove it from the Pinned section the same way you added it.

</details>

<details>
<summary>Can I recover a deleted OTP account?</summary>

Only if you saved the original QR code or secret beforehand. See [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

</details>

## Related Articles

- [Adding a TOTP Account](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Setting Up an OTP Access PIN](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin)
- [Backup and Restore Procedures](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
