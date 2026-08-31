---
title: "What is FIDO2?"
description: "FIDO2 is the open standard behind every passkey, built from WebAuthn and CTAP2. What it covers, and why Seedkeeper PRO is FIDO2 Level 1 certified."
keywords: [what is FIDO2, FIDO2 explained, FIDO Alliance, CTAP2, WebAuthn, FIDO2 certification, FIDO2 Level 1, security key standard]
sidebar_position: 3
sidebar_label: "What is FIDO2?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Is FIDO2 the same thing as a passkey?", a: "No. FIDO2 is the standard; a passkey is a credential created according to it. Roughly the relationship between a language and a sentence written in it."},
  {q: "Do I need to know any of this to use a passkey?", a: "Not at all. This article explains what's underneath; day to day you tap your device and enter a PIN. See Creating Your First Passkey."},
  {q: "Is U2F obsolete?", a: "Not obsolete, but superseded. U2F keys still work as second factors on services that support them, and FIDO2 authenticators remain backward compatible. What U2F cannot do is replace the password outright."},
  {q: "Is Seedkeeper PRO FIDO2 certified?", a: "Yes. Seedkeeper PRO is FIDO2 Level 1 certified by the FIDO Alliance, under certificate number FA001202600016, which can be verified in the public certification directory. Its secure element additionally holds an EAL6+ Common Criteria certification. See Seedkeeper PRO: FIDO2 Level 1 Certified above."},
  {q: "Does Level 1 certification mean weaker security than Level 2?", a: "It means a different scope, not a weaker product. Level 1 covers the correctness of the FIDO implementation against software attacks; the higher levels add hardware attack resistance requirements, which in Seedkeeper PRO's case is what the EAL6+ certification of the secure element addresses. See Seedkeeper PRO: FIDO2 Level 1 Certified above."},
  {q: "Will a passkey created today still work in ten years?", a: "That's precisely what standardisation is for. The specification is versioned and backward compatible, and it's maintained by a consortium rather than a single vendor that might discontinue it."},
]} />

<p class="doc-subtitle">The Open Standard That Makes Passkeys Possible</p>

<div class="tldr">

FIDO2 is the open standard that every [passkey](/docs/glossary/passkey) is built on. It combines two specifications: WebAuthn, which lets a website request a signature from your browser, and CTAP2, which lets your browser talk to a physical authenticator. It's published by the FIDO Alliance and the W3C, owned by no single company, which is why a Seedkeeper PRO works with Google, Microsoft and thousands of other services without any of them being partners.

</div>

## What FIDO2 Actually Is

FIDO2 isn't a product, a company, or a piece of software. It's a specification - a public document describing how authentication should work, which anyone is free to implement.

It exists because the industry reached the same conclusion at roughly the same time: shared secrets don't scale safely. Every service inventing its own solution would have produced a mess of incompatible logins. So the major browser vendors, operating system makers, and hardware manufacturers agreed on one common language instead.

The result is that authentication became interoperable. A device built to the standard works with a service built to the standard, and neither has to know the other exists.

## Who Publishes It

Two bodies share the work, which is a detail worth knowing because it explains the split in the standard itself.

- **The FIDO Alliance** is an industry consortium founded in 2013 to solve exactly this problem. Its members include Apple, Google, Microsoft, Amazon, Visa, Mastercard, and hundreds of others. It publishes CTAP and runs the certification programme.
- **The W3C**, the body that standardises the web itself, publishes WebAuthn. It became an official W3C Recommendation in 2019, which is what made browser support universal rather than optional.

Neither body sells anything. FIDO2 has no licence fee and no gatekeeper, and that is the point.

## The Two Halves

FIDO2 covers the full path from website to hardware, split into two specifications that meet in the browser.

**WebAuthn** governs the conversation between the website and the browser. It's the API a site calls to say "create a credential for me" or "prove this user is who they claim to be". It also carries the domain check that makes phishing impossible. See [What is WebAuthn?](/docs/security-academy/passkeys/what-is-webauthn).

**CTAP2** - the Client to Authenticator Protocol - governs the conversation between the browser and your authenticator, whether that connection runs over NFC, USB or Bluetooth. It's what lets your Seedkeeper PRO respond to a tap regardless of which phone or computer it's touching.

Put simply: WebAuthn is the part the website sees, CTAP2 is the part your device sees, and together they make one unbroken chain. [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work) walks through what travels along it.

## Where It Came From

FIDO2 didn't appear from nothing. It's the second generation of a standard that had already been deployed at scale.

The first generation, **U2F**, launched in 2014 as a [second factor](/docs/security-academy/authentication/what-is-2fa) only: you still typed a password, then tapped a key to confirm. It worked well and is still supported, but it never removed the password.

FIDO2 arrived in 2018 with the missing piece - the ability for the authenticator to store the user's identity itself, not just a confirmation. That single addition is what turned a second factor into a full replacement for the password, and what the industry later chose to market under the friendlier name "passkey".

The names describe layers, not rivals: a passkey is the credential, FIDO2 is the standard it follows.

## What Certification Means

Anyone can claim to implement FIDO2. Certification is how a claim becomes verifiable.

The FIDO Alliance runs a testing programme with graded levels of assurance. **Level 1** is the baseline: the implementation is tested for interoperability and for resistance to scalable software attacks - the kind that could be run remotely against many users at once. Higher levels add requirements around resistance to physical attack on the hardware itself.

### Seedkeeper PRO: FIDO2 Level 1 Certified

Seedkeeper PRO is **FIDO2 Level 1 certified**, which means its implementation has been independently tested rather than self-declared. Separately, the chip it runs on carries an **EAL6+** Common Criteria certification, which assesses the secure element hardware itself. The two are different things measured by different bodies, and it's worth reading them as complementary: one says the protocol is implemented correctly, the other says the hardware protecting the keys is hard to attack physically.

<img src="/img/badges/fido-label-FA001202600016-FIDO2-L1.svg" alt="FIDO Certified FIDO2 Level 1 badge for Seedkeeper PRO, certificate FA001202600016" width="300" style={{maxWidth: '100%', height: 'auto', display: 'block', margin: '2rem 0'}} />

The identifier on the badge, `FA001202600016`, is the certificate number. It can be looked up in the [FIDO Alliance's public certification directory](https://app.fido.cyber-pass.org/certificates/search), which is the whole value of a certification: anyone can verify the claim without taking our word for it.

If you want the full technical profile rather than the certification alone - supported algorithms, extensions, storage limits, transports - see [Device Capabilities](/docs/developers/device-capabilities).

## Why an Open Standard Matters Here

It's easy to treat "open standard" as a box to tick. In authentication it has concrete consequences.

- **No lock-in.** Your credentials aren't tied to a vendor's ecosystem. Changing phone, browser or operating system doesn't strip you of your passkeys.
- **No permission needed.** A service doesn't have to sign an agreement with Satochip for a Seedkeeper PRO to work on it. If it supports FIDO2, it works.
- **Public scrutiny.** The specification is published, reviewed and attacked by researchers worldwide. Security that depends on nobody looking is not security.
- **Longevity.** A standard backed by the whole industry outlives any one company's product roadmap.

## FAQ

<details>
<summary>Is FIDO2 the same thing as a passkey?</summary>

No. FIDO2 is the standard; a passkey is a credential created according to it. Roughly the relationship between a language and a sentence written in it.

</details>

<details>
<summary>Do I need to know any of this to use a passkey?</summary>

Not at all. This article explains what's underneath; day to day you tap your device and enter a PIN. See [Creating Your First Passkey](/docs/product-documentation/passkeys/creating-your-first-passkey).

</details>

<details>
<summary>Is U2F obsolete?</summary>

Not obsolete, but superseded. U2F keys still work as second factors on services that support them, and FIDO2 authenticators remain backward compatible. What U2F cannot do is replace the password outright.

</details>

<details>
<summary>Is Seedkeeper PRO FIDO2 certified?</summary>

Yes. Seedkeeper PRO is FIDO2 Level 1 certified by the FIDO Alliance, under certificate number `FA001202600016`, which can be verified in the [public certification directory](https://app.fido.cyber-pass.org/certificates/search). Its secure element additionally holds an EAL6+ Common Criteria certification. See [Seedkeeper PRO: FIDO2 Level 1 Certified](#seedkeeper-pro-fido2-level-1-certified) above.

</details>

<details>
<summary>Does Level 1 certification mean weaker security than Level 2?</summary>

It means a different scope, not a weaker product. Level 1 covers the correctness of the FIDO implementation against software attacks; the higher levels add hardware attack resistance requirements, which in Seedkeeper PRO's case is what the EAL6+ certification of the secure element addresses. See [Seedkeeper PRO: FIDO2 Level 1 Certified](#seedkeeper-pro-fido2-level-1-certified) above.

</details>

<details>
<summary>Will a passkey created today still work in ten years?</summary>

That's precisely what standardisation is for. The specification is versioned and backward compatible, and it's maintained by a consortium rather than a single vendor that might discontinue it.

</details>

## Related Articles

- [What is a Passkey?](/docs/security-academy/passkeys/what-is-a-passkey)
- [What is WebAuthn?](/docs/security-academy/passkeys/what-is-webauthn)
- [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work)
- [Configure Passkeys in Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id)
- [What is MFA?](/docs/security-academy/authentication/what-is-mfa)
- [Device Capabilities](/docs/developers/device-capabilities)
