---
title: "Family Cybersecurity Guide"
description: "Protecting people who did not ask to be protected: shared accounts, children, less confident relatives, and what happens to your accounts after you."
keywords: [family cybersecurity, protect my family online, children online safety, elderly parents scams, shared family accounts, digital inheritance]
sidebar_position: 5
sidebar_label: "Family Cybersecurity Guide"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "How do I protect my family online without becoming their IT department?", a: "Focus on habits rather than tools: nobody legitimate asks for a password or a code, every account gets its own password, and two-factor authentication goes on email and banking. Set those up once and the ongoing burden is small."},
  {q: "What is the best way to share a password within a family?", a: "Use the service's own family or sharing feature where one exists. Where a shared password is unavoidable, treat it as semi-public: never reused, never protecting anything important, and changed when someone leaves."},
  {q: "How do I protect elderly parents from phone scams?", a: "Teach one rule - hang up and call back on a number you looked up - and agree a verification question for anything involving money or credentials. Voice cloning has made recognising a familiar voice unreliable."},
  {q: "What happens to my accounts if I die?", a: "Without preparation, often nothing recoverable. Set up legacy contacts where services offer them, and leave a physical route in - a sealed letter or an offline device with its PIN - rather than relying on support desks."},
  {q: "At what age should children have their own accounts?", a: "It depends more on supervision than on age. Younger children are better served by family accounts and parental controls; independent accounts make sense once a child can understand why a password should not be shared."},
]} />

<p class="doc-subtitle">Security for People Who Did Not Ask for It</p>

<div class="tldr">

Securing yourself is a solved problem: follow a checklist. Securing a household is a people problem - the measures have to survive relatives who will not adopt a password manager, children who will not read a warning, and the possibility that you are no longer around to explain any of it.

</div>

## Start With the Shared Accounts

Every household has a handful of accounts several people use: streaming, shopping, the family cloud storage, sometimes the bank.

These are usually the weakest thing you own, because a password known by four people is a password written down in four places and mentioned aloud regularly.

Two things help:

- **Use the family or sharing features** where they exist. Most services offer separate profiles or member accounts, which is better than one login passed around.
- **Where a shared password is unavoidable**, treat it as semi-public: never reuse it, never let it double as anything important, and change it when someone leaves the household.

## Protect the Person, Not Just the Account

The technical measures matter less here than one habit, taught once and repeated.

**Nobody legitimate ever asks for a password or a one-time code.** Not the bank, not the tax office, not Microsoft support, not a police officer on the phone. Anyone who does is an attacker, no matter how calm and official they sound.

The second half of the habit matters as much: **hang up and call back on a number you looked up yourself**. Every social engineering attack depends on keeping the conversation going.

Make it explicit that calling you first is always the right move, and that you will never be annoyed by it. People fall for scams partly because they are embarrassed to check.

See [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked) for how these approaches are constructed.

## Older Relatives

Two adjustments make a disproportionate difference.

**Remove SMS as a second factor where you can.** Voice-based scams and SIM swapping both target this, and an authenticator app or a hardware key is not meaningfully harder to use once set up. See [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

**Set up an agreed verification step.** A question only the two of you can answer, used whenever money or credentials come up in a conversation. This is now the practical answer to voice cloning, which has made "it sounded exactly like him" an unreliable signal.

Avoid the trap of adding measures they cannot use. Security they work around is worse than none, because it produces confidence without protection.

## Children and Teenagers

Age changes what matters more than the technology does.

**Younger children** need account boundaries and supervision more than they need security features. Family accounts, parental controls, and no independent access to anything with payment details.

**Teenagers** need the same understanding you'd give an adult, because they will route around anything they consider unreasonable. The topics that actually apply to them: account takeovers on gaming and social platforms, the fact that a shared password reaches every account they own, and the reality that anything sent to someone else has left their control permanently.

Two-factor authentication on their main accounts is the single most useful thing you can set up for them.

## Set the Household Baseline

Do this once, for every device in the house:

- **Automatic updates on**, everywhere
- **Screen locks** with a PIN of at least six digits
- **The home Wi-Fi password changed** from whatever the router shipped with
- **A guest network** for visitors and smart devices, keeping them off the network your computers use

None of it requires ongoing attention, which is exactly why it works for a household.

## Plan for Access After You

This is the part families discover at the worst possible moment.

If you are the person who manages the accounts, consider what happens when someone else needs them. Most cloud services make this deliberately difficult, and a grieving family arguing with a support desk is a bad outcome you can prevent cheaply.

- **Use the legacy contact features** where they exist - Apple, Google and Microsoft all offer one.
- **Leave a physical route in.** A sealed envelope with a trusted person, or an offline device handed over with its PIN, sidesteps the support desk entirely. See [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained).
- **Write down what exists**, not the passwords: which accounts matter, where the recovery material is, who to contact. A list of locations is far less dangerous to leave lying around than a list of credentials.

If you hold crypto, this matters more, because there is no support desk at all - see [How to Securely Store a Seed Phrase](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase).

## What Actually Works

Households do not adopt security policies. They adopt habits, and only if the habits are few and obviously reasonable.

Three that survive contact with real families:

1. **Nobody asks for your password or your code.** Hang up and call back.
2. **Every account gets its own password**, because one leak otherwise reaches all of them.
3. **Two-factor authentication on email and banking**, set up once by whoever is most comfortable doing it.

Everything else is optional. These three are not.

## FAQ

<details>
<summary>How do I protect my family online without becoming their IT department?</summary>

Focus on habits rather than tools: nobody legitimate asks for a password or a code, every account gets its own password, and two-factor authentication goes on email and banking. Set those up once and the ongoing burden is small.

</details>

<details>
<summary>What is the best way to share a password within a family?</summary>

Use the service's own family or sharing feature where one exists. Where a shared password is unavoidable, treat it as semi-public: never reused, never protecting anything important, and changed when someone leaves.

</details>

<details>
<summary>How do I protect elderly parents from phone scams?</summary>

Teach one rule - hang up and call back on a number you looked up - and agree a verification question for anything involving money or credentials. Voice cloning has made recognising a familiar voice unreliable.

</details>

<details>
<summary>What happens to my accounts if I die?</summary>

Without preparation, often nothing recoverable. Set up legacy contacts where services offer them, and leave a physical route in - a sealed letter or an offline device with its PIN - rather than relying on support desks.

</details>

<details>
<summary>At what age should children have their own accounts?</summary>

It depends more on supervision than on age. Younger children are better served by family accounts and parental controls; independent accounts make sense once a child can understand why a password should not be shared.

</details>

## Related Articles

- [Security Checklist for Beginners](/docs/security-guides/security-checklist-for-beginners)
- [Common Password Attacks](/docs/security-academy/password-security/how-passwords-are-cracked)
- [Password Manager Explained](/docs/security-academy/password-security/password-manager-explained)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Smartphone Security Guide](/docs/security-guides/smartphone-security-guide)
