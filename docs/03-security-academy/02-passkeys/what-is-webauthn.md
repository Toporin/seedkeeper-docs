---
title: "What is WebAuthn?"
description: "WebAuthn is the browser API that lets a website ask your device for a cryptographic signature instead of a password. Its role in every passkey login."
keywords: [what is WebAuthn, WebAuthn explained, navigator.credentials, W3C WebAuthn, browser passkey support, roaming authenticator, platform authenticator]
sidebar_position: 4
sidebar_label: "What is WebAuthn?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Is WebAuthn the same thing as a passkey?", a: "No. WebAuthn is the API a website uses; a passkey is the credential that API creates and later verifies. A site \"supports WebAuthn\" and a user \"has a passkey\"."},
  {q: "Do I need to install anything to use WebAuthn?", a: "No. It's built into every modern browser. See Nothing to Install above."},
  {q: "A site is asking me to install something to use my security key. Is that normal?", a: "No. That is one of the clearest scam signals you will encounter. WebAuthn is native to your browser and a hardware authenticator requires no software of its own. See Nothing to Install above."},
  {q: "Can a website see my other passkeys?", a: "No. A site can only query credentials it registered itself, so it cannot discover which other services you use. See What the Website Learns, and What It Doesn't above."},
  {q: "Does WebAuthn work on mobile?", a: "Yes, on both iOS and Android, including with an NFC device like Seedkeeper PRO tapped against the back of the phone. Some older browsers restrict which transports are available, so behaviour can vary by combination."},
  {q: "Why does a site sometimes ask for a PIN and sometimes not?", a: "The site can request user verification, meaning proof that it's you and not just someone holding the device. Your authenticator satisfies that with a PIN. When only user presence is required, a tap alone is enough. The distinction maps onto the categories in Authentication Factors Explained."},
]} />

<p class="doc-subtitle">The Browser's Half of the Standard</p>

<div class="tldr">

WebAuthn is the web standard that lets a website ask your browser for a cryptographic signature instead of a password. It defines two operations - create a credential, and use one - and it makes the browser responsible for checking that the site asking is really the site the [passkey](/docs/glossary/passkey) belongs to. It's built into every modern browser, so nothing needs installing.

</div>

## The Short Version

WebAuthn - short for Web Authentication - is an API. That means it's a defined set of instructions a website can call, and that the browser knows how to answer.

There are only two of them:

- `navigator.credentials.create()` - "make me a new credential for this account"
- `navigator.credentials.get()` - "prove this user holds the credential you made earlier"

That's the entire surface of the standard as far as a website is concerned. Everything else - which authenticator answers, how it verifies you, where the key is stored - is deliberately outside the website's control and outside its view.

If you are the one building that website, [WebAuthn Quickstart](/docs/developers/webauthn-quickstart) covers the parameters that matter and the settings that silently exclude hardware keys.

## Why the Browser Sits in the Middle

The website never talks to your Seedkeeper PRO. It talks to your browser, and the browser talks to the device. That indirection isn't a technical accident, it's the security model.

The browser is the only party in the chain that knows, with certainty, which website is actually being displayed. It resolved the domain, it validated the TLS certificate, it drew the address bar. So the browser is the right place to enforce the rule that matters: **a credential may only be used on the origin it was created for**.

When a page calls `get()`, the browser compares the requesting origin against the credential's registered domain before it forwards anything. No match, no request. Your device is never even asked, which is why there's no prompt for you to misread and no decision for you to get wrong.

This is the same check described in [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work#the-domain-check-is-the-whole-trick), viewed from the browser's side rather than the protocol's.

## What the Website Learns, and What It Doesn't

WebAuthn is built so that the site gets proof without gaining information.

A site that runs a successful authentication learns three things: that a credential it previously registered was used, that the user was verified by the authenticator, and that the whole exchange happened on its own domain. It does not learn your PIN, your fingerprint, your private key, or anything that would let it impersonate you elsewhere.

It also cannot enumerate your other credentials. A site can only ever ask about credentials it registered itself, so there is no way to probe your browser for a list of the services you use. Compare this with a password, which the site receives in full and must then be trusted to handle responsibly.

## Two Kinds of Authenticator

WebAuthn deliberately doesn't care what kind of device answers, but it does distinguish two families.

- **Platform authenticators** are built into the device you're using - Windows Hello, Touch ID, an Android phone's own secure hardware. Convenient, always present, and tied to that one machine.
- **Roaming authenticators** are separate devices that connect over USB, NFC or Bluetooth, and can be moved between computers and phones. Seedkeeper PRO is one of these.

The practical difference is portability and independence. A platform authenticator ties your identity to a device you also browse, email and install software on. A roaming authenticator keeps the credential on hardware that does nothing else, and lets you carry it to any machine - which is also what makes it usable on a shared or corporate workstation.

## Nothing to Install

One of WebAuthn's quieter achievements is that it requires no plug-in, no extension, and no driver.

Its predecessor, U2F, originally needed browser extensions, which limited it to users willing to install one. WebAuthn became a W3C Recommendation in 2019 and shipped as a native part of Chrome, Firefox, Safari and Edge. Today it's present on effectively every current browser, desktop and mobile alike.

That matters more than it sounds. A security mechanism only protects the people who actually use it, and anything requiring installation loses most of them at the first step.

:::warning[Never install anything to use a passkey]
No legitimate website will ever ask you to install a plug-in, an extension or a driver to sign in with your Seedkeeper PRO. WebAuthn is built into your browser, and a hardware authenticator needs nothing else.

If a page tells you a download is required to use your security key, treat it as an attack. Fake "authentication helpers" are a known way of delivering malware, and the request itself is the warning sign - no matter how professional the page looks.

The one exception you may encounter: password manager extensions that store synced passkeys of their own. Those are legitimate software you chose to install yourself, and they are never a prerequisite for using a physical device.
:::

## Where It Sits in the Standard

WebAuthn covers the website-to-browser leg of the journey. The browser-to-authenticator leg is a separate specification, **CTAP2**. Neither is much use alone, and together they form [FIDO2](/docs/glossary/fido2).

The division of labour is clean: WebAuthn is published by the W3C and speaks the language of the web; CTAP2 is published by the FIDO Alliance and speaks the language of hardware. See [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2) for how the two bodies share the work.

## FAQ

<details>
<summary>Is WebAuthn the same thing as a passkey?</summary>

No. WebAuthn is the API a website uses; a passkey is the credential that API creates and later verifies. A site "supports WebAuthn" and a user "has a passkey".

</details>

<details>
<summary>Do I need to install anything to use WebAuthn?</summary>

No. It's built into every modern browser. See [Nothing to Install](#nothing-to-install) above.

</details>

<details>
<summary>A site is asking me to install something to use my security key. Is that normal?</summary>

No. That is one of the clearest scam signals you will encounter. WebAuthn is native to your browser and a hardware authenticator requires no software of its own. See [Nothing to Install](#nothing-to-install) above.

</details>

<details>
<summary>Can a website see my other passkeys?</summary>

No. A site can only query credentials it registered itself, so it cannot discover which other services you use. See [What the Website Learns, and What It Doesn't](#what-the-website-learns-and-what-it-doesnt) above.

</details>

<details>
<summary>Does WebAuthn work on mobile?</summary>

Yes, on both iOS and Android, including with an NFC device like Seedkeeper PRO tapped against the back of the phone. Some older browsers restrict which transports are available, so behaviour can vary by combination.

</details>

<details>
<summary>Why does a site sometimes ask for a PIN and sometimes not?</summary>

The site can request **user verification**, meaning proof that it's you and not just someone holding the device. Your authenticator satisfies that with a PIN. When only **user presence** is required, a tap alone is enough. The distinction maps onto the categories in [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained).

</details>

## Related Articles

- [What is FIDO2?](/docs/security-academy/passkeys/what-is-fido2)
- [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work)
- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Using Passkeys Across Devices](/docs/product-documentation/passkeys/using-passkeys-across-devices)
- [Authentication Factors Explained](/docs/security-academy/authentication/authentication-factors-explained)
- [WebAuthn Quickstart](/docs/developers/webauthn-quickstart)
