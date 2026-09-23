---
title: "Accès OTP perdu"
description: "Codes refusés, comptes effacés, ou appareil disparu. Pourquoi les identifiants OTP ne peuvent pas être récupérés, et comment retrouver l'accès."
keywords: [codes 2FA perdus, OTP ne fonctionne pas, code TOTP refusé, authentificateur perdu, récupérer 2FA, compte OTP supprimé]
sidebar_position: 6
sidebar_label: "Accès OTP perdu"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Pourquoi mon code OTP est-il refusé ?", a: "Généralement parce qu'il a expiré, ou parce que l'horloge du téléphone ou de l'ordinateur est fausse. Votre Seedkeeper PRO prend l'heure de l'appareil connecté : une heure système incorrecte produit donc des codes incorrects."},
  {q: "Puis-je récupérer mes codes OTP depuis l'appareil ?", a: "Non. Les secrets OTP sont en écriture seule sur le secure element et ne peuvent jamais être relus. La récupération dépend de la conservation du QR code d'origine, ou de la procédure de récupération de compte du service."},
  {q: "Pourquoi mon code est-il grisé ?", a: "Il a expiré. Touchez le compte, touchez Calculate, et scannez votre appareil pour en générer un neuf : les codes sont calculés à la demande plutôt que décomptés en continu."},
  {q: "Puis-je copier mes comptes OTP vers un second appareil ?", a: "Pas après coup. Pour disposer des mêmes codes sur deux appareils, ajoutez-les depuis le même QR code sur les deux en même temps, ou conservez le secret d'origine pour configurer le second appareil plus tard."},
  {q: "J'ai perdu mon appareil et je n'ai jamais conservé les QR codes. Que faire ?", a: "Retrouvez l'accès à chaque service par des codes de récupération, une autre méthode enregistrée, ou sa procédure de récupération de compte, puis retirez l'ancienne méthode OTP et configurez-en une nouvelle."},
]} />

import BuyBackupDevice from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-backup-device.mdx';
import GetSupport from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_get-support.mdx';

<p class="doc-subtitle">Quand vos codes sont refusés ou ont disparu</p>

<div class="tldr">

Les secrets OTP sont en **écriture seule** sur le secure element - ils peuvent y être inscrits et jamais relus. Rien ne peut être récupéré depuis l'appareil lui-même. Si un code est simplement refusé, la cause est généralement l'horloge ou un code expiré ; si l'identifiant a réellement disparu, vous retrouvez l'accès par la procédure de récupération de chaque service et le reconfigurez.

</div>

## D'abord : l'identifiant a-t-il réellement disparu ?

Trois causes se ressemblent vues de l'extérieur, et une seule est grave.

### Le code a expiré

Un code TOTP vit trente secondes. Dans l'application, il apparaît grisé une fois expiré, et le saisir produit un refus.

Touchez le compte, touchez **Calculate**, et scannez votre appareil pour en obtenir un neuf - voir [Gérer vos comptes OTP](/docs/product-documentation/otp-authenticator/managing-otp-entries). Votre Seedkeeper PRO génère chaque code à la demande plutôt que de le décompter : c'est donc un fonctionnement normal et non une panne.

### L'horloge est fausse

Le TOTP est calculé à partir de l'heure courante : votre appareil et le serveur doivent donc être à peu près d'accord.

Votre Seedkeeper PRO n'a pas d'horloge propre - elle prend l'heure du téléphone ou de l'ordinateur auquel elle est connectée. **Si l'heure de cet appareil est fausse, tous les codes seront faux.** Vérifiez les réglages d'heure, et activez l'heure automatique si elle est désactivée.

C'est la cause que les gens mettent le plus longtemps à trouver, parce que l'application semble en parfait état.

### Vous regardez le mauvais compte

Deux comptes sur le même service, ou un nom d'émetteur qui ne correspond pas à ce que vous attendez. Utilisez la barre de recherche de la liste des comptes, et vérifiez le nom du compte plutôt que le seul émetteur.

## L'identifiant a réellement disparu

Appareil perdu, applet OTP réinitialisé, ou compte supprimé par erreur.

**Il n'y a rien à récupérer depuis l'appareil.** Le secret partagé a été inscrit dans le secure element et ne peut pas en être relu - ni par vous, ni par l'application, ni par nous. C'est précisément la propriété qui le protège d'une extraction par un logiciel malveillant, et elle a ce coût.

Ce que vous pouvez restaurer dépend entièrement de ce que vous avez conservé :

**Si vous avez conservé le QR code ou le secret d'origine**, rajoutez le compte sur n'importe quel appareil - voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account). Rien d'autre n'est nécessaire.

**Sinon**, il vous faut retrouver l'accès à chaque service par un autre moyen, puis générer un nouvel identifiant.

## Retrouver l'accès sans les codes

Procédez service par service, dans cet ordre :

1. **Les codes de récupération**, si vous les avez conservés en activant l'authentification à deux facteurs. C'est à cela qu'ils servent.
2. **Une autre méthode enregistrée** - une passkey, un second authentificateur, ou un numéro de téléphone de secours.
3. **La récupération de compte du service**, qui passe généralement par votre messagerie. Sécurisez d'abord votre boîte mail, puisque tout le reste en dépend.

Une fois revenu, **retirez l'ancienne méthode OTP** du compte et configurez-en une nouvelle. Laisser l'entrée morte en place vous troublera plus tard et, sur certains services, empêche d'en ajouter une de remplacement.

## Configurer pour que cela ne se reproduise pas

La contrainte est inhabituelle : l'habitude doit donc être délibérée.

**Ajoutez chaque code sur les deux appareils en même temps**, pendant que le QR code du service est encore à l'écran. C'est le seul moment où le secret vous est accessible - ensuite, il n'existe aucune voie de migration entre appareils.

**Ou conservez le QR code ou le secret d'origine** en lieu sûr. Une capture d'écran dans une note sécurisée sur votre Seedkeeper convient, et la garde hors de tout cloud - voir [Créer des notes sécurisées](/docs/product-documentation/password-manager/creating-secure-notes).

**Traitez cette copie conservée comme l'identifiant lui-même.** Quiconque la détient peut générer les mêmes codes que votre appareil.

Détail complet dans [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

<BuyBackupDevice />

## Si vous n'avez qu'un appareil et en voulez un second

Il n'y a pas de migration : la séquence est donc précise.

1. Connectez-vous au service et **supprimez** l'identifiant OTP existant
2. Configurez un **nouvel** identifiant OTP
3. Ajoutez le nouveau code sur les **deux** appareils en même temps

Procéder dans cet ordre implique une brève fenêtre sans second facteur sur ce compte : assurez-vous de pouvoir encore vous connecter avant de commencer.

## FAQ

<details>
<summary>Pourquoi mon code OTP est-il refusé ?</summary>

Généralement parce qu'il a expiré, ou parce que l'horloge du téléphone ou de l'ordinateur est fausse. Votre Seedkeeper PRO prend l'heure de l'appareil connecté : une heure système incorrecte produit donc des codes incorrects.

</details>

<details>
<summary>Puis-je récupérer mes codes OTP depuis l'appareil ?</summary>

Non. Les secrets OTP sont en écriture seule sur le secure element et ne peuvent jamais être relus. La récupération dépend de la conservation du QR code d'origine, ou de la procédure de récupération de compte du service.

</details>

<details>
<summary>Pourquoi mon code est-il grisé ?</summary>

Il a expiré. Touchez le compte, touchez Calculate, et scannez votre appareil pour en générer un neuf - les codes sont calculés à la demande plutôt que décomptés en continu.

</details>

<details>
<summary>Puis-je copier mes comptes OTP vers un second appareil ?</summary>

Pas après coup. Pour disposer des mêmes codes sur deux appareils, ajoutez-les depuis le même QR code sur les deux en même temps, ou conservez le secret d'origine pour configurer le second appareil plus tard.

</details>

<details>
<summary>J'ai perdu mon appareil et je n'ai jamais conservé les QR codes. Que faire ?</summary>

Retrouvez l'accès à chaque service par des codes de récupération, une autre méthode enregistrée, ou sa procédure de récupération de compte - puis retirez l'ancienne méthode OTP et configurez-en une nouvelle.

</details>

## Articles liés

- [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Gérer vos comptes OTP](/docs/product-documentation/otp-authenticator/managing-otp-entries)
- [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Appareil perdu ou volé](/docs/troubleshooting/lost-device)
- [Qu'est-ce que le TOTP ?](/docs/security-academy/authentication/what-is-totp)

<GetSupport />
