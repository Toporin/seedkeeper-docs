---
title: "Organizing Passwords"
description: "The four secret types Seedkeeper stores, how search and filtering work, and why your entries are always listed newest first with no manual reordering."
keywords: [organize passwords, Seedkeeper secret types, search secrets, filter by type, password descriptor seed phrase note]
sidebar_position: 5
sidebar_label: "Organizing Passwords"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Can I manually reorder my secrets?", a: "No. Secrets are always listed newest first. Use the search and filter options instead to find what you need."},
  {q: "Why don't I see a search bar?", a: "The search bar only appears once you have enough secrets that they no longer all fit on the first screen. See Search and Filter above."},
  {q: "What's the difference between a Note and a Descriptor?", a: "A Note is a free-text field for anything you want to store. A Descriptor specifically defines a crypto wallet. See Secret Types and Their Icons above."},
]} />

<p class="doc-subtitle">Find What You Need, Even With a Long List</p>

<div class="tldr">

Seedkeeper stores four types of secrets, each with its own icon. Once you have enough of them, a search bar appears - letting you search by label or filter by type. Secrets are always listed newest-first; there's no manual reordering.

</div>

## Overview

### Secret Types and Their Icons

| Icon | Type | Description |
|---|---|---|
| <img src="/img/icons/badge-password.svg" alt="Password icon" width="36" /> | Password | A login password |
| <img src="/img/icons/badge-seedphrase.svg" alt="Seed phrase icon" width="36" /> | Seed Phrase | A [seed phrase](/docs/glossary/seed-phrase) |
| <img src="/img/icons/badge-descriptor.svg" alt="Descriptor icon" width="36" /> | [Descriptor](/docs/glossary/descriptor) | Defines a crypto wallet |
| <img src="/img/icons/badge-note.svg" alt="Note icon" width="36" /> | Note | A free-text field for anything you want to store |

### Search and Filter

<img src="/img/icons/search-bar-illustration.svg" alt="Search bar in the Seedkeeper App" className="doc-diagram" style={{maxWidth: '350px'}} />

The search bar only appears once you have enough secrets that they don't all fit on the first screen. Use it to:
- Search by **label**
- **Filter by type** - for example, show only your notes

### Sort Order

Secrets are always listed **newest first** - the most recently created secret appears at the top of the list. There's no manual reordering; use search and filtering instead to find what you need in a long list.

## FAQ

<details>
<summary>Can I manually reorder my secrets?</summary>

No. Secrets are always listed newest first. Use the [search and filter](#search-and-filter) options instead to find what you need.

</details>

<details>
<summary>Why don't I see a search bar?</summary>

The search bar only appears once you have enough secrets that they no longer all fit on the first screen. See [Search and Filter](#search-and-filter) above.

</details>

<details>
<summary>What's the difference between a Note and a Descriptor?</summary>

A Note is a free-text field for anything you want to store. A Descriptor specifically defines a crypto wallet. See [Secret Types and Their Icons](#secret-types-and-their-icons) above.

</details>

## Related Articles

- [Creating a New Password](/docs/product-documentation/password-manager/creating-a-new-password)
- [Creating Secure Notes](/docs/product-documentation/password-manager/creating-secure-notes)
- [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained)
- [Import Errors](/docs/troubleshooting/import-errors)
