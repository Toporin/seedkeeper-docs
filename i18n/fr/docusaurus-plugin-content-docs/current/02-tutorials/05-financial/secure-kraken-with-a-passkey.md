---
title: "Comment sécuriser Kraken avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme passkey 2FA itinérante sur Kraken. Jusqu'à 5 passkeys par compte, avec conseils de gestion et de sauvegarde."
keywords: [passkey kraken, clé de sécurité kraken, 2FA itinérante kraken, clé matérielle kraken, sécurité plateforme crypto]
sidebar_position: 3
sidebar_label: "Sécuriser Kraken avec une passkey"
tags: [kraken, passkey, financial]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je utiliser ma Seedkeeper PRO comme unique méthode 2FA ?", a: "Oui. Une clé de sécurité matérielle compte comme une 2FA itinérante, ce qui satisfait l'exigence de Kraken pour votre première méthode 2FA de connexion."},
  {q: "Ajouter une passkey supprime-t-il mon mot de passe Kraken ?", a: "Non. Votre mot de passe reste une étape de la connexion ; la passkey satisfait l'étape 2FA."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui, jusqu'à 5 passkeys par compte."},
  {q: "Quels autres services financiers prennent en charge les passkeys avec ma Seedkeeper PRO ?", a: "PayPal et Binance en sont deux exemples."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Les deux mettent le phishing en échec : la réponse honnête est que cela dépend de ce que vaut le compte. Une passkey synchronisée est recopiée sur tous les appareils de votre compte cloud, et ce compte devient la nouvelle cible. Une passkey Seedkeeper PRO existe sur une seule puce certifiée qui ne peut pas l'exporter, sans aucun fournisseur dans la chaîne - ce qui compte quand le compte protège vos avoirs et vos retraits."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à Kraken sans mot de passe</p>

<p class="platform-note">Mobile et Web</p>

<div class="tldr">

Depuis la page Sécurité de votre compte Kraken, ajoutez une clé d'accès, insérez votre Seedkeeper PRO comme clé de sécurité matérielle, et confirmez - vous pouvez enregistrer jusqu'à 5 passkeys par compte.

</div>

## Vue d'ensemble

Kraken prend en charge les [passkeys](/docs/glossary/passkey) pour la [2FA](/docs/glossary/2fa) de connexion, y compris les clés de sécurité matérielles comme votre Seedkeeper PRO. Kraken parle de méthode **2FA itinérante** (*Roaming 2FA*) - une méthode qui fonctionne sur n'importe quel appareil compatible avec la clé elle-même, contrairement à une passkey liée à un appareil et cantonnée à un seul navigateur. C'est aussi le seul type de 2FA proposé ici qui résiste au phishing, puisqu'un code d'application d'authentification peut être relayé en temps réel - voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp).

:::note[Votre première méthode 2FA doit être itinérante]
Kraken exige que votre toute première méthode 2FA de connexion soit de type itinérant. Une clé de sécurité matérielle comme votre Seedkeeper PRO remplit cette condition : elle convient donc parfaitement comme première méthode, ou comme méthode supplémentaire à côté d'une application d'authentification.
:::

<WhyHardware />

## Instructions pas à pas

### Étape 1 : se connecter à votre compte Kraken

### Étape 2 : aller dans Sécurité

Cliquez sur votre icône de profil en bas à gauche, puis sur **Sécurité**.

### Étape 3 : ajouter une clé d'accès

Cliquez sur **Ajouter une clé d'accès**. Une fenêtre apparaît : *« Créer une clé d'accès pour kraken.com. »*

### Étape 4 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC, puis cliquez sur **Autoriser**.

### Étape 5 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

Kraken confirme que la passkey a été ajoutée à votre compte.

## Gérer vos passkeys

- **Renommer** : cliquez sur **Modifier** à côté de la passkey, saisissez une nouvelle description (jusqu'à 256 caractères), puis cliquez sur **Mettre à jour la méthode**.
- **Supprimer** : cliquez sur **Supprimer** à côté de la passkey. Kraken exige toujours qu'au moins une méthode 2FA itinérante reste active - si c'est votre seule, ajoutez-en une autre au préalable.
- Vous pouvez enregistrer jusqu'à **5 passkeys** par compte, ce qui laisse la place à un appareil principal et à deux secours - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

## Ressources officielles Kraken

- [Qu'est-ce qu'une clé d'accès ?](https://support.kraken.com/articles/what-is-a-passkey)
- [Comment activer plusieurs méthodes d'authentification à deux facteurs](https://support.kraken.com/articles/how-to-enable-multiple-2fa)

## FAQ

<details>
<summary>Puis-je utiliser ma Seedkeeper PRO comme unique méthode 2FA ?</summary>

Oui - une clé de sécurité matérielle compte comme une 2FA itinérante, ce qui satisfait l'exigence de Kraken pour votre première méthode 2FA de connexion.

</details>

<details>
<summary>Ajouter une passkey supprime-t-il mon mot de passe Kraken ?</summary>

Non. Votre mot de passe reste une étape de la connexion ; la passkey satisfait l'étape 2FA.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Oui, jusqu'à 5 passkeys par compte - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Quels autres services financiers prennent en charge les passkeys avec ma Seedkeeper PRO ?</summary>

Voir [PayPal](/docs/tutorials/financial/secure-paypal-with-a-passkey) et [Binance](/docs/tutorials/financial/secure-binance-with-a-passkey).

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Les deux mettent le phishing en échec : la réponse honnête est que cela dépend de ce que vaut le compte. Une passkey synchronisée est recopiée sur tous les appareils de votre compte cloud, et ce compte devient la nouvelle cible. Une passkey Seedkeeper PRO existe sur une seule puce certifiée qui ne peut pas l'exporter, sans aucun fournisseur dans la chaîne - ce qui compte quand le compte protège vos avoirs et vos retraits. Voir [Toutes les passkeys ne sont pas stockées de la même façon](/docs/security-academy/passkeys/passkey-vs-password#toutes-les-passkeys-ne-sont-pas-stockées-de-la-même-façon).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Comment sécuriser PayPal avec une passkey](/docs/tutorials/financial/secure-paypal-with-a-passkey)
- [Comment sécuriser Binance avec une passkey](/docs/tutorials/financial/secure-binance-with-a-passkey)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
