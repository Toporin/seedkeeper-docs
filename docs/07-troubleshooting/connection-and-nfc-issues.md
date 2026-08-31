---
title: "Connection and NFC Issues"
description: "The device is not detected, the scan fails halfway, or the reader sees nothing. The common causes, in the order they are worth checking."
keywords: [Seedkeeper not detected, NFC not working, card not reading, smartcard reader problem, scan failed, NFC antenna location]
sidebar_position: 1
sidebar_label: "Connection and NFC Issues"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Why is my Seedkeeper not detected by my phone?", a: "Most often placement or a case. Move the card slowly across the back of the phone to find the antenna, remove any thick or metal-backed case, and keep other contactless cards away."},
  {q: "Where is the NFC antenna on my phone?", a: "On iPhone, at the top of the back. On Android it varies by model - camera area, centre or lower third. Moving the card slowly across the back finds it faster than tapping - and Scan your Seedkeeper shows the usual positions on a diagram."},
  {q: "Why does the scan fail halfway through?", a: "The device moved and the field broke. Rest the phone on a table, hold the card against it, and keep the position for the whole operation rather than removing it at the first vibration."},
  {q: "Can I use my Seedkeeper over USB?", a: "No. The device supports NFC and ISO 7816 contact only. On a computer you need a contact smartcard reader for the card, or an NFC reader for either form factor."},
  {q: "Why does the website not offer my security key?", a: "The site may be restricting registration to the device's built-in authenticator. Look for \"Use another device\", \"Security key\" or \"Other options\" in the browser prompt, and try a Chromium-based browser."},
]} />

import GetSupport from '@site/docs/_get-support.mdx';

<p class="doc-subtitle">When the Device Is Not Detected</p>

<div class="tldr">

Nine times out of ten it is placement, not hardware. Move the device slowly across the back of the phone until it catches, hold it still for the whole operation, and remove any thick case. On desktop, check the reader is recognised by the system before suspecting the card.

</div>

## Start Here

Before anything else, three checks that resolve most cases:

<img src="/img/diagrams/nfc-three-checks.svg" alt="Three checks before troubleshooting: NFC turned on, nothing in between the device and the reader, and the device held still throughout" style={{width: '100%', maxWidth: 'none', margin: '1.5rem 0'}} />

1. **Is NFC enabled?** On Android, Settings → Connected devices → Connection preferences → NFC. On iPhone it is always on, but the app must be in the foreground.
2. **Is anything between the device and the reader?** A thick case, a metal plate, a wallet with other cards, a magnetic mount.
3. **Are you holding it still?** NFC needs continuous contact for the whole operation, not a tap.

## The Device Is Not Detected at All

### On a Phone

**Find the antenna.** It is not where most people assume. On iPhone it sits at the top of the back. On Android it varies enormously by model - camera area, centre, or lower third. [Scan your Seedkeeper](/docs/product-documentation/getting-started/first-setup-guide#scan-your-seedkeeper) has diagrams for both, including the common Android positions.

Move the card slowly across the back of the phone rather than tapping a spot. When it catches, stop moving.

**Remove the case.** Thick cases, wallet cases and anything with metal in it will block the field entirely. Test without it before concluding anything.

**Take other cards away.** A bank card or transport pass next to the Seedkeeper confuses the reader, which sees several tags and often picks none.

**Try the ring differently.** A ring has a smaller antenna than a card and needs closer, more precise placement. Hold it flat against the phone rather than edge-on.

### On a Computer

**Check the reader, not the card.** Confirm the operating system sees the reader first - on Windows it appears in Device Manager under Smart card readers, on Linux you need `pcscd` running.

<details>
<summary>Checking or installing pcscd on Linux</summary>

`pcscd` is the smartcard daemon. Nothing on Linux talks to a contact or NFC reader without it, so a missing or stopped `pcscd` looks exactly like a broken card.

```bash
# install the daemon and the reader drivers
sudo apt-get install pcscd

# start it now, and again automatically at every boot
sudo systemctl enable pcscd.service
sudo systemctl start pcscd.service

# confirm it is running
sudo systemctl status pcscd.service
```

The last command is the one that answers the question. Look for **active (running)** in the output - anything else, and the reader will never be seen.

If it is running and the reader still is not detected, list what the daemon actually sees:

```bash
pcsc_scan
```

It prints connected readers and reacts when you present a card. No reader listed means a driver or USB problem rather than a Seedkeeper one. On distributions other than Debian and Ubuntu, the package is usually `pcsc-lite` or `pcsc-tools`.

</details>

**Insert the card fully**, chip first and facing up in most contact readers.

**A ring needs an NFC reader**, not a contact reader. There is no slot it fits into.

**There is no USB path.** The device speaks NFC and ISO 7816 contact only - a USB port alone will never detect it, whatever adapter is involved. See [Device Capabilities](/docs/developers/device-capabilities#transports).

## The Scan Starts, Then Fails

Almost always movement. The field breaks and the operation aborts partway.

- **Hold the position for the entire operation**, not just until the phone vibrates. A backup or a reset takes several seconds.
- **Rest the phone on a table** and hold the card against it, rather than holding both in the air.
- **Retry rather than assume damage.** A failed scan leaves the device unchanged in almost every case.

If an operation was interrupted, check the result before repeating it. A half-finished import may or may not have been written - open the secrets list and look.

## The App Says the Card Is Not Recognised

**Check you are using the right app.** Passwords, notes and seed phrases are in the Seedkeeper App. Passkeys and OTP codes are in the Seedkeeper PRO App. Each shows nothing useful when pointed at the other's data - see [Download](/docs/product-documentation/getting-started/download).

**Check the product line.** Passkeys and OTP require a Seedkeeper PRO. A Classic device works with the Seedkeeper App only.

**Verify authenticity** if you suspect the device itself: Card's Information → Verify Authenticity checks it against Satochip's certificate - see [Device Settings](/docs/product-documentation/getting-started/device-settings).

## Nothing Happens on a Website

If the device works in the app but a site never prompts for it:

**The site may be offering only platform authenticators.** Some implementations restrict registration to Touch ID or Windows Hello and silently exclude external keys. Look for an option like **Use another device**, **Security key** or **Other options** in the browser prompt.

**Try a Chromium browser.** Support for external keys over NFC is most consistent there.

**Check the site actually supports passkeys.** Not all do, and some support them only in their mobile app or only on desktop - our [tutorials](/docs/category/tutorials) note the restriction per service.

## It Works Sometimes and Not Others

Usually placement drift rather than an intermittent fault. Two things help:

- **Mark the spot.** Once you find where the antenna is on your phone, remember it - most people are hunting a few centimetres away each time. The [diagrams](/docs/product-documentation/getting-started/first-setup-guide#scan-your-seedkeeper) narrow the search.
- **Check the battery level.** Some phones reduce NFC power in battery saver mode.

## FAQ

<details>
<summary>Why is my Seedkeeper not detected by my phone?</summary>

Most often placement or a case. Move the card slowly across the back of the phone to find the antenna, remove any thick or metal-backed case, and keep other contactless cards away.

</details>

<details>
<summary>Where is the NFC antenna on my phone?</summary>

On iPhone, at the top of the back. On Android it varies by model - camera area, centre or lower third. Moving the card slowly across the back finds it faster than tapping - and [Scan your Seedkeeper](/docs/product-documentation/getting-started/first-setup-guide#scan-your-seedkeeper) shows the usual positions on a diagram.

</details>

<details>
<summary>Why does the scan fail halfway through?</summary>

The device moved and the field broke. Rest the phone on a table, hold the card against it, and keep the position for the whole operation rather than removing it at the first vibration.

</details>

<details>
<summary>Can I use my Seedkeeper over USB?</summary>

No. The device supports NFC and ISO 7816 contact only. On a computer you need a contact smartcard reader for the card, or an NFC reader for either form factor.

</details>

<details>
<summary>Why does the website not offer my security key?</summary>

The site may be restricting registration to the device's built-in authenticator. Look for "Use another device", "Security key" or "Other options" in the browser prompt, and try a Chromium-based browser.

</details>

## Related Articles

- [Scan your Seedkeeper](/docs/product-documentation/getting-started/first-setup-guide#scan-your-seedkeeper) - NFC reader locations on iPhone and Android
- [First Setup Guide](/docs/product-documentation/getting-started/first-setup-guide)
- [Device Settings](/docs/product-documentation/getting-started/device-settings)
- [Download](/docs/product-documentation/getting-started/download)
- [Device Capabilities](/docs/developers/device-capabilities)

<GetSupport />
