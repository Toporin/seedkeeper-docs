---
title: "Appareil perdu ou volé"
description: "Que faire dans la première heure, dans le bon ordre. Révoquez d'abord l'accès sur les services, puis occupez-vous du matériel - pas l'inverse."
keywords: [clé de sécurité perdue, Seedkeeper volée, révoquer passkey, procédure appareil perdu, que faire clé de sécurité volée]
sidebar_position: 4
sidebar_label: "Appareil perdu ou volé"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Que faire en premier si ma Seedkeeper est volée ?", a: "Révoquez son accès sur vos services, en commençant par votre compte e-mail. Le matériel est protégé par son PIN : le travail urgent se situe du côté des comptes, pas du côté physique."},
  {q: "Quelqu'un peut-il utiliser ma Seedkeeper volée ?", a: "Pas sans le PIN, vérifié à l'intérieur du secure element et qui verrouille après une poignée de tentatives incorrectes. La seule possession n'est pas un accès."},
  {q: "Supprimer une passkey depuis l'appareil la révoque-t-elle ?", a: "Il vous faudrait l'appareil pour le faire, et vous ne l'avez plus. La révocation s'opère sur chaque service, dans ses paramètres de sécurité, et fonctionne que vous déteniez le matériel ou non."},
  {q: "Je n'avais pas d'équipement secondaire, que faire ?", a: "Procédez service par service en utilisant la procédure de récupération de chacun : mot de passe, codes de récupération, ou récupération de compte via votre messagerie. Sécurisez d'abord la boîte mail, puisqu'elle est la voie de réinitialisation du reste."},
  {q: "Mon appareil a réapparu après que je l'ai remplacé. Puis-je le réutiliser ?", a: "Réinitialisez-le d'abord et traitez-le comme vierge. Ses enregistrements ont de toute façon disparu, et il fera ensuite une bonne sauvegarde pour le remplaçant."},
]} />

import BuyBackupDevice from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-backup-device.mdx';
import GetSupport from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_get-support.mdx';

<p class="doc-subtitle">La première heure, dans le bon ordre</p>

<div class="tldr">

Vos comptes comptent plus que le matériel. **Révoquez d'abord l'accès de l'appareil sur chaque service**, puis occupez-vous de l'objet. Une Seedkeeper perdue est protégée par son PIN dans l'intervalle, et une fois ses enregistrements retirés, elle devient un morceau de plastique ou de céramique inerte.

</div>

## D'abord : quelle est la gravité ?

Un appareil volé seul n'est pas un accès. Chaque applet est derrière un PIN, vérifié à l'intérieur du secure element, avec un verrouillage après une poignée de tentatives incorrectes. Personne ne le force par force brute, et personne n'extrait de clés de la puce.

Cela vous donne le temps d'agir correctement plutôt que de paniquer. Cela ne signifie pas ne rien faire.

## L'ordre qui compte

Faites ceci dans l'ordre. L'instinct pousse à commencer par le matériel, et c'est le mauvais bout.

### 1. Connectez-vous avec votre équipement secondaire

Si vous avez enregistré un second appareil, utilisez-le maintenant. Vous conservez un accès normal à tout pendant que vous faites le ménage, ce qui retire toute pression temporelle au reste de cette liste.

Pas d'équipement secondaire ? Passez à l'étape 2 et utilisez vos méthodes de repli - mot de passe, codes de récupération, ou la procédure de récupération du service.

### 2. Révoquez l'appareil perdu partout

C'est l'étape qui vous protège réellement, et elle se déroule **sur chaque service**, pas sur le matériel.

Pour chaque compte où l'appareil perdu était enregistré :

- **Retirez la passkey** des paramètres de sécurité du compte
- **Retirez la méthode OTP** si cet appareil générait les codes
- **Fermez les sessions actives**, qui survivent souvent au retrait d'un identifiant

Traitez d'abord vos comptes importants : messagerie, puis tout ce qui est financier, puis le reste. Voir [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy).

Si vous aviez noté sur quels services l'appareil était enregistré, c'est le moment où cela paie. Sinon, appuyez-vous sur votre gestionnaire de mots de passe ou sur les confirmations d'enregistrement dans votre boîte mail.

### 3. Changez ce que l'appareil pourrait révéler

Les mots de passe et les notes sécurisées de l'appareil sont derrière le PIN du gestionnaire de mots de passe : ils ne sont donc pas exposés par la perte elle-même. Changez tout de même ce que vous jugez sensible si les circonstances de la perte vous inquiètent - un vol ciblé est différent d'un oubli dans un taxi.

Les seed phrases méritent leur propre jugement. Si l'appareil en contenait une et que vous avez le moindre doute, transférez les fonds vers un nouveau portefeuille - voir [Les erreurs courantes avec les seed phrases](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes).

### 4. Occupez-vous ensuite du matériel

Déclarez-le s'il a été volé. Commandez un remplaçant. Mettez votre inventaire à jour si vous gérez des appareils pour une organisation - voir [Arrivées et départs des collaborateurs](/docs/business/employee-onboarding-and-offboarding).

## Si vous n'aviez pas d'équipement secondaire

Plus difficile, mais pas désespéré. Procédez service par service, en utilisant la procédure de récupération de chacun :

- **Connectez-vous avec votre mot de passe** là où le compte en a encore un
- **Utilisez les codes de récupération** si vous les avez conservés en activant l'authentification à deux facteurs
- **Utilisez la récupération de compte du service** en dernier recours, qui passe généralement par votre messagerie

Ce dernier point explique pourquoi sécuriser d'abord votre boîte mail compte autant : c'est la voie de récupération de tout le reste, et c'est le compte dont vous avez le plus besoin à cet instant.

Une fois revenu dans chaque compte, retirez les enregistrements de l'appareil perdu et enregistrez le remplaçant - deux appareils cette fois.

## Restaurer vos données

**Les mots de passe, notes et seed phrases** reviennent depuis un équipement secondaire vers un nouvel appareil - voir [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery).

**Les passkeys ne se transfèrent pas.** Une passkey liée au matériel n'existe que sur l'appareil qui l'a créée : un remplaçant signifie donc enregistrer de nouvelles passkeys auprès de chaque service - voir [Accès aux passkeys perdu](/docs/troubleshooting/lost-passkey).

**Les codes OTP** ne reviennent que depuis les QR codes d'origine, si vous les avez conservés - voir [Accès OTP perdu](/docs/troubleshooting/lost-otp-access).

## S'il réapparaît plus tard

Ne le remettez pas en service comme si de rien n'était. Vous ne savez pas où il est passé, et ses enregistrements ont de toute façon disparu.

Réinitialisez-le et traitez-le comme un appareil vierge - voir [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper). Il fera ensuite une très bonne sauvegarde pour le remplaçant que vous venez de configurer.

## Rendre la prochaine fois indolore

Tout ce qui précède est plus simple avec une chose en place : **un second appareil enregistré**.

Avec lui, une perte est un après-midi de rangement. Sans lui, c'est une procédure de récupération sur chaque compte que vous possédez, en commençant par ceux dont vous avez le plus urgemment besoin.

L'autre moitié consiste à savoir où l'appareil était enregistré. Une courte liste - service, appareil, date - transforme l'étape 2 d'un exercice de mémoire en liste de contrôle. Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

<BuyBackupDevice />

## FAQ

<details>
<summary>Que faire en premier si ma Seedkeeper est volée ?</summary>

Révoquez son accès sur vos services, en commençant par votre compte e-mail. Le matériel est protégé par son PIN : le travail urgent se situe du côté des comptes, pas du côté physique.

</details>

<details>
<summary>Quelqu'un peut-il utiliser ma Seedkeeper volée ?</summary>

Pas sans le PIN, vérifié à l'intérieur du secure element et qui verrouille après une poignée de tentatives incorrectes. La seule possession n'est pas un accès.

</details>

<details>
<summary>Supprimer une passkey depuis l'appareil la révoque-t-elle ?</summary>

Il vous faudrait l'appareil pour le faire, et vous ne l'avez plus. La révocation s'opère sur chaque service, dans ses paramètres de sécurité, et fonctionne que vous déteniez le matériel ou non.

</details>

<details>
<summary>Je n'avais pas d'équipement secondaire, que faire ?</summary>

Procédez service par service en utilisant la procédure de récupération de chacun : mot de passe, codes de récupération, ou récupération de compte via votre messagerie. Sécurisez d'abord la boîte mail, puisqu'elle est la voie de réinitialisation du reste.

</details>

<details>
<summary>Mon appareil a réapparu après que je l'ai remplacé. Puis-je le réutiliser ?</summary>

Réinitialisez-le d'abord et traitez-le comme vierge. Ses enregistrements ont de toute façon disparu, et il fera ensuite une bonne sauvegarde pour le remplaçant.

</details>

## Articles liés

- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Accès aux passkeys perdu](/docs/troubleshooting/lost-passkey)
- [Accès OTP perdu](/docs/troubleshooting/lost-otp-access)
- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
- [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)

<GetSupport />
