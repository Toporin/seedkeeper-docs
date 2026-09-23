---
title: "SMS vs TOTP"
description: "Les codes SMS dépendent de votre numéro, les codes TOTP d'un secret détenu par votre appareil. Pourquoi le SIM swapping rend cette différence décisive."
keywords: [SMS vs TOTP, SIM swapping, la 2FA par SMS est-elle sûre, risques authentification SMS, application authentification vs SMS, 2FA par message]
sidebar_position: 7
sidebar_label: "SMS vs TOTP"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "La 2FA par SMS est-elle sûre ?", a: "Elle est bien plus sûre que l'absence de second facteur, et c'est la plus faible des options courantes. Comme elle dépend de votre numéro de téléphone plutôt que de votre appareil, un attaquant qui convainc votre opérateur de transférer ce numéro reçoit vos codes."},
  {q: "Qu'est-ce que le SIM swapping ?", a: "Une attaque où quelqu'un se fait passer pour vous auprès de votre opérateur mobile et fait transférer votre numéro vers une SIM qu'il contrôle. Chaque code SMS arrive alors sur son appareil, sans logiciel malveillant ni accès à votre téléphone."},
  {q: "Une application d'authentification vaut-elle mieux que le SMS ?", a: "Oui. Les codes TOTP sont générés sur votre appareil à partir d'un secret stocké : il n'y a aucun message à intercepter, aucun opérateur dans la chaîne, et aucune exposition au SIM swapping. Ils fonctionnent aussi sans réseau."},
  {q: "Dois-je retirer le SMS une fois une application configurée ?", a: "Là où le service l'autorise, oui. Un compte est protégé par sa méthode active la plus faible : laisser le SMS actif maintient cette voie ouverte pour un attaquant."},
  {q: "Le TOTP me protège-t-il du phishing ?", a: "Non. Comme un code SMS, un code TOTP est quelque chose que vous lisez et saisissez : une fausse page peut donc le recueillir et le relayer immédiatement. Seul un identifiant lié au domaine, comme une passkey, l'empêche."},
]} />

<p class="doc-subtitle">Pourquoi le mode d'acheminement change tout</p>

<div class="tldr">

Les deux vous envoient un code à six chiffres, et la ressemblance s'arrête là. Un code SMS est lié à votre **numéro de téléphone**, dont quelqu'un d'autre peut prendre le contrôle. Un code [TOTP](/docs/security-academy/authentication/what-is-totp) est généré par un secret détenu par votre **appareil**, qu'il faudrait voler. Si un service propose les deux, choisissez le TOTP.

</div>

## La différence fondamentale

**Le SMS est acheminé.** Le service génère un code et l'envoie à travers le réseau mobile vers l'appareil qui répond actuellement à votre numéro. Vous faites confiance à votre opérateur, au réseau, et à tous les systèmes intermédiaires.

**Le TOTP est généré.** Rien n'est transmis. Votre appareil et le service calculent chacun le même code à partir d'un secret partagé une seule fois, lors de la configuration. Il n'y a aucun message à intercepter, aucun opérateur impliqué, et aucun réseau à qui faire confiance.

Cette distinction produit toutes les différences pratiques ci-dessous.

## Face à face

| | Code SMS | Code TOTP |
|---|---|---|
| **Lié à** | Votre numéro de téléphone | Un secret sur votre appareil |
| **Vulnérable au SIM swapping** | ❌ Oui | ✅ Non |
| **Fonctionne sans réseau** | ❌ Non | ✅ Oui |
| **Fonctionne à l'étranger** | ⚠️ Dépend de l'itinérance | ✅ Toujours |
| **Visible sur un écran verrouillé** | ❌ Souvent | ✅ Non |
| **Tiers dans la chaîne** | Opérateur, réseau, passerelle | Aucun |
| **Résiste au phishing en temps réel** | ❌ Non | ❌ Non |
| **Prise en charge par les services** | ✅ Très large | ✅ Très large |

## Le SIM swapping est la faiblesse décisive

C'est l'attaque qui a poussé les organismes de normalisation à réviser leur jugement sur le SMS.

Un attaquant rassemble assez d'informations personnelles à votre sujet - beaucoup sont publiques ou proviennent de fuites - puis contacte votre opérateur mobile en se faisant passer pour vous. Il déclare un téléphone perdu et demande le transfert du numéro vers une nouvelle SIM en sa possession. Si le personnel de l'opérateur est convaincu, votre numéro sonne désormais sur son appareil.

À partir de cet instant, chaque code SMS qui vous était destiné lui parvient. Votre téléphone devient généralement silencieux, ce qui est souvent le premier signe que quelque chose ne va pas, et les réinitialisations de mots de passe sont alors déjà en cours.

Notez ce que cette attaque n'exige pas : aucun logiciel malveillant, aucun accès à votre téléphone, aucune compétence technique au-delà d'un appel convaincant. Elle vise l'opérateur, pas vous, et vous ne pouvez pas y faire grand-chose de votre côté. Voir [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked) pour la situer parmi les autres techniques.

Un secret TOTP n'y est tout simplement pas exposé. Il se trouve sur un appareil dans votre poche, et non rattaché à un numéro qu'un opérateur peut réattribuer.

## Les problèmes plus modestes du SMS

Au-delà du SIM swapping, quatre désagréments quotidiens qui sont aussi des risques :

- **Pas de réseau, pas de code.** Dans un avion, dans un sous-sol, ou à l'étranger sans itinérance, vous êtes exclu de votre propre compte.
- **Les aperçus sur écran verrouillé.** Les codes s'affichent couramment sur un téléphone verrouillé, visibles par quiconque le tient.
- **Les retards d'acheminement.** Des codes qui arrivent après expiration, ou qui n'arrivent pas.
- **Les changements de numéro.** Abandonnez un numéro et la personne suivante à le recevoir hérite de votre second facteur sur tous les comptes que vous avez oublié de mettre à jour.

## Soyons clairs sur ce que le TOTP ne corrige pas

Le TOTP supprime le canal d'acheminement et tout ce qui l'accompagne. Il ne rend pas le code résistant au phishing.

Le SMS comme le TOTP produisent quelque chose que vous lisez et saisissez, et une fausse page convaincante peut recueillir l'un ou l'autre et le relayer vers le vrai site en quelques secondes. Passer du SMS au TOTP est une amélioration réelle et utile ; ce n'est pas le bout du chemin. Voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#pourquoi-lotp-reste-hameçonnable).

## Que faire

**Si un service propose le TOTP, utilisez-le** et retirez le SMS comme méthode là où le service l'autorise. Laisser le SMS actif en repli maintient la faiblesse à disposition d'un attaquant.

**Si le SMS est la seule option, conservez-le** - c'est bien mieux que pas de second facteur du tout. Demandez à votre opérateur un code de portabilité ou un verrouillage de compte, qui rend un transfert non autorisé plus difficile.

**L'endroit où réside le secret mérite aussi réflexion.** Dans une application d'authentification, il se trouve sur un téléphone polyvalent ; sur une Seedkeeper PRO, il est inscrit dans un secure element et ne peut jamais être relu. Voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account).

## FAQ

<details>
<summary>La 2FA par SMS est-elle sûre ?</summary>

Elle est bien plus sûre que l'absence de second facteur, et c'est la plus faible des options courantes. Comme elle dépend de votre numéro de téléphone plutôt que de votre appareil, un attaquant qui convainc votre opérateur de transférer ce numéro reçoit vos codes.

</details>

<details>
<summary>Qu'est-ce que le SIM swapping ?</summary>

Une attaque où quelqu'un se fait passer pour vous auprès de votre opérateur mobile et fait transférer votre numéro vers une SIM qu'il contrôle. Chaque code SMS arrive alors sur son appareil, sans logiciel malveillant ni accès à votre téléphone.

</details>

<details>
<summary>Une application d'authentification vaut-elle mieux que le SMS ?</summary>

Oui. Les codes TOTP sont générés sur votre appareil à partir d'un secret stocké : il n'y a aucun message à intercepter, aucun opérateur dans la chaîne, et aucune exposition au SIM swapping. Ils fonctionnent aussi sans réseau.

</details>

<details>
<summary>Dois-je retirer le SMS une fois une application configurée ?</summary>

Là où le service l'autorise, oui. Un compte est protégé par sa méthode active la plus faible : laisser le SMS actif maintient cette voie ouverte pour un attaquant.

</details>

<details>
<summary>Le TOTP me protège-t-il du phishing ?</summary>

Non. Comme un code SMS, un code TOTP est quelque chose que vous lisez et saisissez : une fausse page peut donc le recueillir et le relayer immédiatement. Seul un identifiant lié au domaine, comme une passkey, l'empêche.

</details>

## Articles liés

- [Qu'est-ce que le TOTP ?](/docs/security-academy/authentication/what-is-totp)
- [Qu'est-ce que la 2FA ?](/docs/security-academy/authentication/what-is-2fa)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked)
