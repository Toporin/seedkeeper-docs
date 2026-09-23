---
title: "Utiliser vos passkeys sur plusieurs appareils"
description: "Vos passkeys résident sur la Seedkeeper PRO elle-même, pas sur un téléphone ou un ordinateur - elles fonctionnent donc partout, sans rien à synchroniser."
keywords: [passkeys plusieurs appareils, passkey multiplateforme, sans dépendance à un écosystème, authentificateur itinérant, passkey sur n'importe quel ordinateur]
sidebar_position: 6
sidebar_label: "Utiliser vos passkeys sur plusieurs appareils"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Dois-je installer quelque chose sur chaque appareil que j'utilise ?", a: "Aucune application n'est nécessaire. Votre Seedkeeper PRO est certifiée FIDO2 : le site web et votre navigateur ou votre système d'exploitation dialoguent directement avec elle via le protocole WebAuthn natif, sans la Seedkeeper PRO App. L'application ne sert qu'à la configuration et à la gestion : définir votre PIN, consulter vos codes OTP, ou vérifier et supprimer des passkeys existantes. La connexion elle-même ne demande qu'un lecteur NFC, ou un lecteur USB ou à contact compatible, sur l'appareil que vous utilisez."},
  {q: "Que se passe-t-il si je perds ma Seedkeeper PRO ?", a: "Comme vos passkeys résident sur cet unique appareil, le perdre sans sauvegarde signifie perdre aussi l'accès à ces passkeys."},
  {q: "Puis-je utiliser la même passkey sur deux Seedkeeper PRO différentes ?", a: "Non. Contrairement aux mots de passe et aux notes, les passkeys ne sont pas copiées lors de la sauvegarde d'un appareil vers un autre. Pour qu'un équipement secondaire fonctionne aussi comme passkey, vous devez enregistrer une nouvelle passkey supplémentaire sur cet appareil, auprès de chaque service."},
]} />

<p class="doc-subtitle">Un appareil, tous les services, partout</p>

<div class="tldr">

Vos passkeys sont conservées sur votre Seedkeeper PRO elle-même, et non sur un téléphone ou un ordinateur en particulier. Connectez-vous depuis n'importe quel appareil capable de lire votre Seedkeeper PRO en NFC - rien à synchroniser, rien à configurer deux fois.

</div>

## Vue d'ensemble

Votre Seedkeeper PRO conserve vos passkeys directement sur son secure element. Pour vous connecter à un service auprès duquel vous avez enregistré une passkey, il vous suffit de votre Seedkeeper PRO et d'un appareil capable de la lire en NFC - votre propre téléphone, l'ordinateur d'un ami, un portable professionnel, n'importe où.

### Sans dépendance à un écosystème

Beaucoup de solutions de passkeys - iCloud Keychain, Google Password Manager - synchronisent les passkeys au sein d'un même écosystème, mais exigent des étapes supplémentaires en dehors, quand elles ne cessent pas simplement de fonctionner. Une passkey créée avec un compte Apple ne se reporte pas aisément sur un PC Windows.

Votre Seedkeeper PRO contourne entièrement le problème : puisque la passkey réside sur l'appareil lui-même plutôt que dans un compte lié à une plateforme, elle fonctionne de la même façon sur iOS, Android, Windows, macOS ou Linux - selon ce que vous utilisez à cet instant. C'est toute la différence entre une passkey synchronisée et une passkey liée au matériel - voir [Toutes les passkeys ne sont pas stockées de la même façon](/docs/security-academy/passkeys/passkey-vs-password#toutes-les-passkeys-ne-sont-pas-stockées-de-la-même-façon).

### Sécurité maximale, friction minimale

C'est le véritable avantage des passkeys menées ainsi : votre clé privée ne quitte jamais le secure element, ce qui la rend résistante au phishing et aux attaques à distance - tandis que l'usage quotidien se résume à approcher votre appareil de votre téléphone ou d'un lecteur. Une sécurité forte s'accompagne généralement de friction ; ici, non.

## FAQ

<details>
<summary>Dois-je installer quelque chose sur chaque appareil que j'utilise ?</summary>

Aucune application n'est nécessaire. Votre Seedkeeper PRO est certifiée FIDO2 : le site web et votre navigateur ou votre système d'exploitation dialoguent directement avec elle via le protocole WebAuthn natif, sans la Seedkeeper PRO App. L'application ne sert qu'à la configuration et à la gestion - définir votre PIN, consulter vos codes OTP, ou vérifier et supprimer des passkeys existantes. La connexion elle-même ne demande qu'un lecteur NFC, ou un lecteur USB ou à contact compatible, sur l'appareil que vous utilisez.

</details>

<details>
<summary>Que se passe-t-il si je perds ma Seedkeeper PRO ?</summary>

Comme vos passkeys résident sur cet unique appareil, le perdre sans sauvegarde signifie perdre aussi l'accès à ces passkeys. Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour vous en prémunir.

</details>

<details>
<summary>Puis-je utiliser la même passkey sur deux Seedkeeper PRO différentes ?</summary>

Non - contrairement aux mots de passe et aux notes, les passkeys ne sont pas copiées lors de la sauvegarde d'un appareil vers un autre. Pour qu'un équipement secondaire fonctionne aussi comme passkey, vous devez vous rendre sur chaque service et y enregistrer une nouvelle passkey supplémentaire, directement depuis cet équipement secondaire. Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

</details>

## Articles liés

- [Gérer vos passkeys](/docs/product-documentation/passkeys/managing-passkeys)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
