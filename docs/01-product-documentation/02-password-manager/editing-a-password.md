---
title: "Editing a Password"
description: "Seedkeeper has no Edit button by design - the secure element cannot alter stored data. Here is the copy, delete, recreate process to update an entry."
keywords: [edit password Seedkeeper, update stored password, no edit function, secure element write once]
sidebar_position: 3
sidebar_label: "Editing a Password"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Why can't I just edit a password directly?", a: "The secure element's memory can only create new entries or delete existing ones - it can't alter data already stored. See the Overview above."},
  {q: "Will I lose my password if I delete the entry first?", a: "Only if you haven't copied it down first. Always note the details you want to keep - see Step 1 above."},
  {q: "Does this apply to secure notes and seed phrases too?", a: "Yes - the same copy, delete, recreate process applies to any secret stored on your Seedkeeper."},
]} />

<p class="doc-subtitle">Why There's No "Edit" Button, and What to Do Instead</p>

<div class="tldr">

Seedkeeper's secure element can't alter stored data in place - only create new entries or delete existing ones. To update a password, copy its current details, delete the old entry, then create a new one with the updated info.

</div>

## Overview

Unlike typical password managers, Seedkeeper doesn't have an "Edit" function. This comes down to how the secure element works: its memory can only store new entries or erase existing ones - it can't modify data that's already written. This is part of the same secure-by-design approach that makes the device tamper-resistant.

In practice, this means "editing" a password is a three-step process: copy, delete, recreate.

## Step-by-Step Instructions

### Step 1: Copy the current details

Open the entry and note down its label, login, URL, and password - whatever you'll need to recreate it with your changes.

### Step 2: Delete the old entry

See [Deleting a Password](/docs/product-documentation/password-manager/deleting-a-password) for the steps.

### Step 3: Create the new entry

Use [Creating a New Password](/docs/product-documentation/password-manager/creating-a-new-password) or [Importing Existing Passwords](/docs/product-documentation/password-manager/importing-existing-passwords), depending on whether you want to generate a new password or keep the one you already have with just the other details changed.

## FAQ

<details>
<summary>Why can't I just edit a password directly?</summary>

The secure element's memory can only create new entries or delete existing ones - it can't alter data already stored. See the [Overview](#overview) above.

</details>

<details>
<summary>Will I lose my password if I delete the entry first?</summary>

Only if you haven't copied it down first. Always note the details you want to keep - see [Step 1](#step-1-copy-the-current-details) above.

</details>

<details>
<summary>Does this apply to secure notes and seed phrases too?</summary>

Yes - the same copy, delete, recreate process applies to any secret stored on your Seedkeeper.

</details>

## Related Articles

- [Creating a New Password](/docs/product-documentation/password-manager/creating-a-new-password)
- [Importing Existing Passwords](/docs/product-documentation/password-manager/importing-existing-passwords)
- [Deleting a Password](/docs/product-documentation/password-manager/deleting-a-password)
- [What is a Strong Password?](/docs/security-academy/password-security/what-is-a-strong-password)
