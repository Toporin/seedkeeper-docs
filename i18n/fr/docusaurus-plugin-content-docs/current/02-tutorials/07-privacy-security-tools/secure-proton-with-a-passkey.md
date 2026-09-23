---
title: "Comment sécuriser Proton avec une passkey"
description: "Enregistrez votre Seedkeeper PRO comme clé de sécurité matérielle sur votre compte Proton, comme second facteur résistant au phishing."
keywords: [passkey proton, clé de sécurité proton mail, 2FA matérielle proton, proton FIDO2, sécurité protonmail]
sidebar_position: 1
sidebar_label: "Sécuriser Proton avec une passkey"
tags: [proton, passkey, privacy-security-tools]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Est-ce la même chose que la fonction passkey de Proton Pass ?", a: "Non. Proton Pass dispose de sa propre fonctionnalité, distincte, pour stocker les passkeys d'autres sites web."},
  {q: "Cela remplace-t-il mon mot de passe Proton ?", a: "Non. Votre Seedkeeper PRO joue le rôle de second facteur, aux côtés de votre mot de passe."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui, via l'option Nouvelle clé de sécurité."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "La passkey de votre téléphone est une vraie amélioration par rapport à un mot de passe, et elle ne coûte rien. La différence tient à l'endroit où réside la clé : synchronisée sur un compte cloud que vous devez sécuriser, ou sur un unique secure element sans voie d'export et sans personne d'autre dans la chaîne. Pour Proton, qui protège votre boîte mail - elle-même voie de réinitialisation d'autres comptes - cette distinction vaut généralement l'étape supplémentaire."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Ajouter une clé de sécurité matérielle à votre compte Proton</p>

<p class="platform-note">Web</p>

<div class="tldr">

Depuis les paramètres Compte et mot de passe de Proton, sous Authentification à deux facteurs, enregistrez votre Seedkeeper PRO comme clé de sécurité - elle fonctionne aux côtés de votre mot de passe comme second facteur résistant au phishing.

</div>

## Vue d'ensemble

Proton vous permet d'enregistrer une clé de sécurité matérielle comme votre Seedkeeper PRO en tant que méthode d'authentification à deux facteurs. Contrairement à d'autres services traités dans cette section, cela ne remplace pas entièrement votre mot de passe - vous le saisirez toujours à la connexion, votre Seedkeeper PRO fournissant le second facteur à la place d'une application d'authentification ou d'un code SMS.

:::note[À ne pas confondre avec la fonction passkey de Proton Pass]
Ce guide traite de la sécurisation de **votre compte Proton lui-même** avec votre Seedkeeper PRO comme clé de sécurité. **Proton Pass** (le gestionnaire de mots de passe de Proton) dispose d'une fonctionnalité [passkey](/docs/glossary/passkey) distincte et sans rapport : elle permet de *stocker les passkeys d'autres sites web*, à la manière d'iCloud Keychain ou de Google Password Manager. Cette fonctionnalité n'est disponible que dans l'extension navigateur de Proton, et sur Android 14+ ou iOS - avec quelques limites connues (les appareils OnePlus et Oppo ne sont pas pris en charge, et certains téléphones Samsung présentent un défaut d'affichage). Voir [les passkeys de Proton Pass](https://proton.me/fr/pass/passkeys) pour le détail : c'est un outil différent de celui traité ici.
:::

Voici à quoi ressemble le parcours complet :

<img src="/img/gifs/proton-passkey-browser-mockup.gif" alt="Ajout d'une clé de sécurité Seedkeeper PRO à Proton Mail" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

<WhyHardware />

## Instructions pas à pas

### Étape 1 : se connecter à Proton Mail

Rendez-vous sur [account.proton.me/login](https://account.proton.me/login) et connectez-vous.

### Étape 2 : ouvrir les paramètres

Cliquez sur l'icône d'engrenage en haut à droite, puis sur **Tous les paramètres**.

### Étape 3 : aller dans Compte et mot de passe

### Étape 4 : trouver Authentification à deux facteurs

Faites défiler jusqu'à la section **Authentification à deux facteurs**.

### Étape 5 : sélectionner Clé de sécurité

### Étape 6 : confirmer votre mot de passe

Proton vous demande de ressaisir votre mot de passe pour des raisons de sécurité.

### Étape 7 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC, puis cliquez sur **Continuer**.

### Étape 8 : suivre l'invite de votre système d'exploitation

Votre système affiche sa propre méthode de connexion. Sur Windows par exemple, il peut être nécessaire de débrancher puis rebrancher votre Seedkeeper PRO pour confirmer.

### Étape 9 : nommer votre clé

Donnez-lui un nom parlant - « Seedkeeper PRO », par exemple - pour la reconnaître plus tard.

C'est terminé : votre Seedkeeper PRO est désormais enregistrée comme clé de sécurité sur votre compte Proton.

## Gérer vos clés de sécurité

Restez sur la page **Compte et mot de passe** et faites défiler pour voir vos clés de sécurité enregistrées.

- **En ajouter une autre** : cliquez sur **Nouvelle clé de sécurité** - pratique si vous voulez un appareil de secours. Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.
- **Renommer ou supprimer** : utilisez les options à côté de chaque clé enregistrée.

## Ressources officielles Proton

- [Les passkeys de Proton Pass](https://proton.me/fr/pass/passkeys)

## FAQ

<details>
<summary>Est-ce la même chose que la fonction passkey de Proton Pass ?</summary>

Non - Proton Pass dispose de sa propre fonctionnalité, distincte, pour stocker les passkeys d'autres sites web. Voir la note dans la [Vue d'ensemble](#vue-densemble) ci-dessus, ou [les passkeys de Proton Pass](https://proton.me/fr/pass/passkeys) pour cette fonctionnalité en particulier.

</details>

<details>
<summary>Cela remplace-t-il mon mot de passe Proton ?</summary>

Non - votre Seedkeeper PRO joue le rôle de second facteur, aux côtés de votre mot de passe. Voir la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Oui, via **Nouvelle clé de sécurité** - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

La passkey de votre téléphone est une vraie amélioration par rapport à un mot de passe, et elle ne coûte rien. La différence tient à l'endroit où réside la clé : synchronisée sur un compte cloud que vous devez sécuriser, ou sur un unique secure element sans voie d'export et sans personne d'autre dans la chaîne. Pour Proton, qui protège votre boîte mail - elle-même voie de réinitialisation d'autres comptes - cette distinction vaut généralement l'étape supplémentaire. Voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Comment sécuriser Bitwarden avec une passkey](/docs/tutorials/privacy-security-tools/secure-bitwarden-with-a-passkey)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
