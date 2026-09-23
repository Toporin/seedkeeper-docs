---
title: "WhatsApp prend-il en charge les passkeys avec Seedkeeper PRO ?"
description: "La fonction Clé d'accès de WhatsApp chiffre votre sauvegarde de discussions par biométrie : ce n'est pas un identifiant de connexion, et elle est incompatible."
keywords: [passkey whatsapp, clé d'accès whatsapp, sauvegarde chiffrée whatsapp, whatsapp FIDO2, compatibilité Seedkeeper PRO]
sidebar_position: 4
sidebar_label: "Les passkeys WhatsApp expliquées"
tags: [whatsapp, passkey, social-media]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je utiliser ma Seedkeeper PRO avec WhatsApp ?", a: "Pas pour la fonction Clé d'accès de WhatsApp : elle repose par conception sur la seule biométrie locale."},
  {q: "La clé d'accès de WhatsApp est-elle la même chose qu'une passkey Google ou Amazon ?", a: "Non. Malgré le nom commun, elle protège le chiffrement de votre sauvegarde de discussions, pas la connexion à votre compte."},
  {q: "Cela concerne-t-il le code de vérification en deux étapes de WhatsApp ?", a: "Non, il s'agit d'une fonctionnalité distincte et plus ancienne, un code à 6 chiffres pour l'enregistrement du compte, également incompatible avec Seedkeeper PRO puisqu'il s'agit d'un code saisi manuellement et non d'un identifiant FIDO2 ou OTP."},
]} />

<p class="doc-subtitle">Pourquoi une Seedkeeper PRO ne peut pas servir de passkey WhatsApp</p>

<div class="tldr">

La « clé d'accès » de WhatsApp n'est pas un identifiant de connexion FIDO2 comme ceux de Google, Amazon ou PayPal - c'est un moyen de chiffrer votre sauvegarde de discussions à l'aide de la biométrie de votre téléphone. Elle ne fonctionne que localement, et ne peut donc être enregistrée sur une Seedkeeper PRO, quelle que soit la plateforme.

</div>

## Vue d'ensemble

Si vous êtes arrivé ici en espérant sécuriser votre connexion WhatsApp avec votre Seedkeeper PRO comme vous le feriez sur Google ou Amazon, il vaut la peine de clarifier ce que WhatsApp appelle une « clé d'accès » - car il s'agit d'une tout autre fonctionnalité.

### Ce que fait réellement la clé d'accès de WhatsApp

WhatsApp a introduit les sauvegardes de discussions chiffrées par clé d'accès pour remplacer l'ancienne clé de chiffrement à 64 chiffres. Plutôt que de saisir cette longue clé pour chiffrer ou restaurer votre sauvegarde chiffrée de bout en bout, vous confirmez avec la biométrie de votre téléphone : Face ID, Touch ID ou empreinte digitale. Cela protège votre **sauvegarde de discussions stockée dans le cloud**, pas la connexion à votre compte.

### Pourquoi cela ne fonctionne pas avec une Seedkeeper PRO

Cette fonctionnalité n'utilise jamais que le matériel biométrique local de votre appareil (son Secure Enclave ou équivalent) - il n'y a aucune étape d'enregistrement [FIDO2](/docs/glossary/fido2) ou WebAuthn, contrairement aux passkeys utilisées par des services comme Google, Amazon, PayPal, eBay, Shopify ou Telegram Desktop. Sans étape WebAuthn, il n'y a rien auprès de quoi une Seedkeeper PRO - ou n'importe quelle autre clé de sécurité matérielle externe - pourrait s'enregistrer. Ce n'est pas une limitation propre à notre produit, c'est simplement la façon dont WhatsApp a conçu cette fonctionnalité.

## Ce que vous pouvez faire à la place

WhatsApp ne propose pas aujourd'hui de moyen compatible avec Seedkeeper PRO pour protéger la connexion à votre compte. Pour les conseils de sécurité générale qui s'appliquent malgré tout, voir [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices).

## FAQ

<details>
<summary>Puis-je utiliser ma Seedkeeper PRO avec WhatsApp ?</summary>

Pas pour la fonction Clé d'accès de WhatsApp - elle repose par conception sur la seule biométrie locale. Voir [Pourquoi cela ne fonctionne pas avec une Seedkeeper PRO](#pourquoi-cela-ne-fonctionne-pas-avec-une-seedkeeper-pro) ci-dessus.

</details>

<details>
<summary>La clé d'accès de WhatsApp est-elle la même chose qu'une passkey Google ou Amazon ?</summary>

Non - malgré le nom commun, elle protège le chiffrement de votre sauvegarde de discussions, pas la connexion à votre compte. Voir [Ce que fait réellement la clé d'accès de WhatsApp](#ce-que-fait-réellement-la-clé-daccès-de-whatsapp) ci-dessus.

</details>

<details>
<summary>Cela concerne-t-il le code de vérification en deux étapes de WhatsApp ?</summary>

Non, il s'agit d'une fonctionnalité distincte et plus ancienne (un code à 6 chiffres pour l'enregistrement du compte) - également incompatible avec Seedkeeper PRO, puisqu'il s'agit d'un code saisi manuellement et non d'un identifiant FIDO2 ou OTP.

</details>

## Articles liés

- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
