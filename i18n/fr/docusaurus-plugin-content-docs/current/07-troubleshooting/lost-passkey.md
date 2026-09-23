---
title: "Accès aux passkeys perdu"
description: "Une passkey qui ne fonctionne plus, un appareil disparu, ou un service qui a cessé de la proposer. Comment revenir dans le compte et reconstruire."
keywords: [passkey perdue, passkey ne fonctionne pas, impossible de se connecter passkey, récupération passkey, réenregistrer passkey, passkey manquante]
sidebar_position: 5
sidebar_label: "Accès aux passkeys perdu"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je récupérer une passkey perdue ?", a: "Non. Une passkey liée au matériel n'existe que sur l'appareil qui l'a créée, sans copie cloud. La récupération consiste à revenir dans le compte par un autre moyen et à enregistrer une nouvelle passkey."},
  {q: "Ma passkey a cessé de fonctionner mais l'appareil la contient toujours. Pourquoi ?", a: "Souvent, le service l'a retirée après un changement de mot de passe ou un événement de sécurité, ou vous êtes sur un domaine légèrement différent. Vérifiez les passkeys enregistrées du compte, et confirmez que l'entrée figure toujours sur l'appareil."},
  {q: "Le site web ne me propose pas ma clé de sécurité. Que faire ?", a: "Cherchez « Utiliser un autre appareil », « Clé de sécurité » ou « Autres options » dans l'invite du navigateur : beaucoup de sites privilégient l'authentificateur intégré et masquent les clés externes un niveau plus bas. Un navigateur Chromium aide également."},
  {q: "Dois-je retirer la passkey morte de mon compte ?", a: "Oui. Elle ne peut pas servir, mais la laisser encombre vos paramètres de sécurité et rend plus difficile de savoir plus tard quelle entrée appartient à quel appareil."},
  {q: "Et si j'ai supprimé mon mot de passe et perdu mon seul appareil ?", a: "Vous êtes limité à la procédure de récupération de compte du service, dont la qualité varie énormément. C'est précisément le scénario que l'enregistrement préalable d'un second appareil sert à éviter."},
]} />

import BuyBackupDevice from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-backup-device.mdx';
import GetSupport from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_get-support.mdx';

<p class="doc-subtitle">Quand une passkey ne vous connecte plus</p>

<div class="tldr">

Les passkeys ne peuvent pas être restaurées - un identifiant lié au matériel n'existe que sur l'appareil qui l'a créé. Revenir dans le compte passe par un autre appareil enregistré, un mot de passe, ou la procédure de récupération du service, puis par l'enregistrement d'une nouvelle passkey. Diagnostiquez laquelle des quatre causes s'applique avant de supposer le pire.

</div>

## De quel problème s'agit-il ?

| Symptôme | Cause probable |
|---|---|
| L'appareil n'est pas détecté du tout | [Un problème de connexion](/docs/troubleshooting/connection-and-nfc-issues), pas de passkey |
| Le site ne propose jamais l'option clé de sécurité | Le site se restreint aux authentificateurs de plateforme |
| Vous êtes verrouillé hors du PIN FIDO | [Un verrouillage de PIN](/docs/troubleshooting/pin-problems-and-lockouts) |
| L'appareil a disparu, ou l'applet a été réinitialisé | La passkey a réellement disparu - lisez la suite |

Traitez-les dans cet ordre. Les deux premiers sont bien plus fréquents que le dernier, et tous deux se corrigent sans rien perdre.

## Le site ne propose pas votre appareil

Ce n'est pas une passkey perdue - le site ne la réclame pas.

**Cherchez « Utiliser un autre appareil », « Clé de sécurité » ou « Autres options »** dans l'invite du navigateur. Beaucoup d'implémentations privilégient Touch ID ou Windows Hello et masquent les clés externes un clic plus loin.

**Essayez un navigateur Chromium.** La prise en charge des clés externes en NFC y est la plus régulière.

**Vérifiez que vous êtes sur le bon domaine.** Une passkey ne répond qu'au domaine exact pour lequel elle a été créée - c'est tout l'intérêt. Si vous avez suivi un lien et atterri sur un domaine sosie, votre appareil refuse à juste titre. Saisissez l'adresse vous-même et réessayez.

## La passkey a réellement disparu

Appareil perdu, appareil détruit, ou applet FIDO réinitialisé. Il n'y a pas de restauration possible : la clé privée a été générée à l'intérieur du secure element et n'existait nulle part ailleurs.

C'est la même propriété qui la rend involable, et cela signifie que la récupération consiste à **revenir dans le compte**, non à récupérer l'identifiant.

### Revenir dans le compte

Par ordre de préférence :

1. **Un autre appareil enregistré.** Si vous avez enregistré une seconde Seedkeeper PRO, servez-vous-en. Rien d'autre n'est nécessaire.
2. **Votre mot de passe**, là où le service en a encore un. La plupart le conservent en repli.
3. **Les codes de récupération**, si vous les avez conservés lors de la configuration du compte.
4. **La récupération de compte du service**, qui passe généralement par votre messagerie - raison pour laquelle sécuriser d'abord votre boîte mail compte plus que tout le reste.

### Puis faites le ménage

Une fois revenu, sur chaque compte concerné :

- **Retirez la passkey morte** des paramètres de sécurité. Elle resterait sinon indéfiniment, et vous ne vous souviendrez plus plus tard de ce à quoi chaque entrée correspond.
- **Enregistrez une nouvelle passkey** sur votre appareil actuel.
- **Enregistrez-en une seconde** pendant que vous y êtes, si vous avez un appareil de secours - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

Faire les trois en une seule passe par compte est bien plus rapide que de repasser deux fois sur chaque service.

## La passkey existe mais échoue

Plus rare, et à vérifier avant de conclure que quoi que ce soit est perdu.

**Confirmez qu'elle est toujours sur l'appareil.** Listez les passkeys stockées depuis la Seedkeeper PRO App, ou depuis Windows ou Chrome - voir [Gérer vos passkeys depuis votre ordinateur](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer). Si l'entrée est là, l'appareil va bien.

**Vérifiez que le service ne l'a pas retirée.** Certains services révoquent les identifiants après un changement de mot de passe, un événement de sécurité, ou une longue période d'inactivité. Regardez la liste des passkeys enregistrées du compte.

**Vérifiez que vous ne confondez pas deux appareils.** Si vous avez enregistré une carte et une bague, l'une ou l'autre vous connecte - mais seulement pour les comptes où celle-ci précisément a été enregistrée.

## Si vous étiez entièrement sans mot de passe

Le cas le plus difficile : un service où vous avez entièrement supprimé le mot de passe, avec un seul appareil enregistré.

Vos options se réduisent à la procédure de récupération du service, et la qualité de l'expérience dépend de lui. Certains sont serviables, certains sont extrêmement lents, et quelques-uns ne proposent rien du tout.

C'est exactement pourquoi la recommandation est toujours d'enregistrer un second appareil **avant** de passer entièrement sans mot de passe - voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

<BuyBackupDevice />

## FAQ

<details>
<summary>Puis-je récupérer une passkey perdue ?</summary>

Non. Une passkey liée au matériel n'existe que sur l'appareil qui l'a créée, sans copie cloud. La récupération consiste à revenir dans le compte par un autre moyen et à enregistrer une nouvelle passkey.

</details>

<details>
<summary>Ma passkey a cessé de fonctionner mais l'appareil la contient toujours. Pourquoi ?</summary>

Souvent, le service l'a retirée après un changement de mot de passe ou un événement de sécurité, ou vous êtes sur un domaine légèrement différent. Vérifiez les passkeys enregistrées du compte, et confirmez que l'entrée figure toujours sur l'appareil.

</details>

<details>
<summary>Le site web ne me propose pas ma clé de sécurité. Que faire ?</summary>

Cherchez « Utiliser un autre appareil », « Clé de sécurité » ou « Autres options » dans l'invite du navigateur - beaucoup de sites privilégient l'authentificateur intégré et masquent les clés externes un niveau plus bas. Un navigateur Chromium aide également.

</details>

<details>
<summary>Dois-je retirer la passkey morte de mon compte ?</summary>

Oui. Elle ne peut pas servir, mais la laisser encombre vos paramètres de sécurité et rend plus difficile de savoir plus tard quelle entrée appartient à quel appareil.

</details>

<details>
<summary>Et si j'ai supprimé mon mot de passe et perdu mon seul appareil ?</summary>

Vous êtes limité à la procédure de récupération de compte du service, dont la qualité varie énormément. C'est précisément le scénario que l'enregistrement préalable d'un second appareil sert à éviter.

</details>

## Articles liés

- [Appareil perdu ou volé](/docs/troubleshooting/lost-device)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues)
- [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)

<GetSupport />
