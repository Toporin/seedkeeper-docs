---
title: "Gérer vos comptes OTP"
description: "Recalculer un code expiré, le copier, épingler un compte en haut de la liste ou le supprimer - toutes les actions disponibles sur un compte OTP."
keywords: [gérer comptes OTP, recalculer code TOTP, copier code 2FA, épingler compte, supprimer compte OTP]
sidebar_position: 3
sidebar_label: "Gérer vos comptes OTP"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Pourquoi mon code OTP est-il grisé ?", a: "Il a expiré. Touchez le compte, puis Calculate, et scannez votre Seedkeeper PRO pour obtenir un code neuf."},
  {q: "Où va un code copié ?", a: "Dans le presse-papiers de votre appareil : collez-le où vous en avez besoin, juste après l'avoir copié."},
  {q: "Puis-je désépingler un compte ?", a: "Oui. La même option Pin permet de le retirer de la section Pinned, de la même façon que vous l'y avez ajouté."},
  {q: "Puis-je récupérer un compte OTP supprimé ?", a: "Uniquement si vous avez conservé le QR code ou le secret d'origine au préalable."},
]} />

<p class="doc-subtitle">Tout ce que vous pouvez faire avec un code OTP enregistré</p>

<div class="tldr">

Consultez tous vos comptes OTP d'un coup d'œil, recherchez-en un en particulier, puis touchez n'importe quelle entrée pour recalculer un code expiré, le copier, l'épingler en haut de votre liste, ou le supprimer entièrement.

</div>

## Vue d'ensemble

Une fois quelques comptes OTP ajoutés, la Seedkeeper PRO App vous propose une liste complète avec tout le nécessaire pour retrouver, utiliser et gérer chacun d'eux. Cet article passe en revue chaque action disponible.

## Une vue claire de tous vos comptes

Ouvrez l'application et scannez votre Seedkeeper PRO pour arriver sur votre liste **Accounts**. Chaque secret OTP que vous avez ajouté y figure, avec son émetteur, le nom du compte (généralement une adresse e-mail ou un identifiant) et son code actuel.

<img src="/img/screenshots/otp-accounts-overview-mockup.png" alt="Vue d'ensemble de la liste des comptes dans la Seedkeeper PRO App" className="mockup-image" />

## Rechercher un compte précis

Dès que vous avez plus d'une poignée de comptes, utilisez la barre de recherche en bas de la liste Accounts pour filtrer jusqu'à celui que vous cherchez - commencez simplement à taper une partie de son nom.

<img src="/img/screenshots/otp-search-mockup.png" alt="Recherche d'un compte OTP dans la Seedkeeper PRO App" className="mockup-image" />

## Toucher un compte : vos options

Touchez n'importe quel compte de la liste pour ouvrir son menu d'options : **Calculate**, **Copy**, **Pin** et **Delete**.

<img src="/img/screenshots/otp-options-menu-mockup.png" alt="Menu d'options d'un compte OTP : Calculate, Copy, Pin, Delete" className="mockup-image" />

### Calculate : recalculer un code expiré

Comme tout code TOTP, celui affiché dans votre liste expire après une courte fenêtre - vous le voyez alors grisé. Si un code fraîchement calculé est malgré tout refusé, l'horloge est le coupable habituel - voir [Accès OTP perdu](/docs/troubleshooting/lost-otp-access). Comme le secure element de votre Seedkeeper PRO génère le code à la demande plutôt que d'entretenir un décompte, vous devez rescanner votre appareil pour en obtenir un à jour.

Touchez **Calculate**, puis scannez votre Seedkeeper PRO lorsqu'on vous y invite.

<img src="/img/screenshots/otp-ready-to-scan-mockup.png" alt="Invite Ready to Scan pour recalculer un code OTP" className="mockup-image" />

Une fois le scan terminé, l'application confirme que le code a été calculé, et le code actif s'affiche dans la liste.

<img src="/img/screenshots/otp-code-calculated-mockup.png" alt="Confirmation de calcul du code dans la Seedkeeper PRO App" className="mockup-image" />

### Copy : copier un code dans le presse-papiers

Touchez **Copy** depuis le menu d'options pour copier le code actuel dans votre presse-papiers, prêt à être collé où vous en avez besoin. L'application confirme par un message « Copied to clipboard ».

<img src="/img/screenshots/otp-copied-clipboard-mockup.png" alt="Confirmation de copie dans le presse-papiers dans la Seedkeeper PRO App" className="mockup-image" />

:::note
Si le code affiché est expiré (grisé), copiez-le après l'avoir recalculé - voir [Calculate](#calculate--recalculer-un-code-expiré) ci-dessus.
:::

### Pin : garder un compte en haut de la liste

Touchez **Pin** pour déplacer un compte dans une section **Pinned** dédiée, en haut de votre liste Accounts - pratique pour les comptes que vous consultez le plus souvent, afin de ne pas avoir à défiler ou à les rechercher à chaque fois.

<img src="/img/screenshots/otp-pinned-list-mockup.png" alt="Compte épinglé affiché en haut de la liste Accounts" className="mockup-image" />

### Delete : supprimer un compte définitivement

Touchez **Delete** pour retirer entièrement un compte. Une confirmation vous est demandée, car cela supprime définitivement le compte de votre Seedkeeper PRO - y compris votre capacité à générer des codes pour lui à l'avenir.

<img src="/img/screenshots/otp-delete-confirm-mockup.png" alt="Boîte de dialogue de confirmation de suppression dans la Seedkeeper PRO App" className="mockup-image" />

:::warning[Cette action est irréversible]
Supprimer un compte OTP est définitif - il n'existe aucune copie cloud à restaurer. Si vous risquez d'avoir de nouveau besoin de ce compte, assurez-vous d'avoir conservé le QR code ou le secret d'origine. Voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).
:::

## FAQ

<details>
<summary>Pourquoi mon code OTP est-il grisé ?</summary>

Il a expiré. Touchez le compte, puis **Calculate**, et scannez votre Seedkeeper PRO pour obtenir un code neuf. Voir [Calculate](#calculate--recalculer-un-code-expiré) ci-dessus.

</details>

<details>
<summary>Où va un code copié ?</summary>

Dans le presse-papiers de votre appareil - collez-le où vous en avez besoin, juste après l'avoir copié. Voir [Copy](#copy--copier-un-code-dans-le-presse-papiers) ci-dessus.

</details>

<details>
<summary>Puis-je désépingler un compte ?</summary>

Oui - la même option Pin permet de le retirer de la section Pinned, de la même façon que vous l'y avez ajouté.

</details>

<details>
<summary>Puis-je récupérer un compte OTP supprimé ?</summary>

Uniquement si vous avez conservé le QR code ou le secret d'origine au préalable. Voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

</details>

## Articles liés

- [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Définir un PIN d'accès OTP](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin)
- [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
