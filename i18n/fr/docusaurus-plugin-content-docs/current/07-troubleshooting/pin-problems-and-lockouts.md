---
title: "Problèmes de PIN et verrouillages"
description: "Trois PIN, trois règles de verrouillage, et aucune récupération pour aucun d'eux. Sur quel PIN vous bloquez, combien de tentatives restent, et la suite."
keywords: [PIN oublié, Seedkeeper verrouillée, PIN FIDO oublié, tentatives de PIN restantes, clé de sécurité verrouillée, changer PIN]
sidebar_position: 3
sidebar_label: "Problèmes de PIN et verrouillages"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je récupérer un PIN oublié ?", a: "Non. Il n'existe ni code maître, ni contournement, ni procédure d'assistance. La seule issue est de réinitialiser l'applet, ce qui en efface le contenu."},
  {q: "Combien de tentatives incorrectes avant que mon appareil ne se verrouille ?", a: "Quatre pour le gestionnaire de mots de passe, huit pour l'applet FIDO. Les compteurs sont indépendants : les échecs sur l'un n'affectent pas l'autre."},
  {q: "Réinitialiser un PIN affecte-t-il les autres ?", a: "Non. Les trois applets sont indépendants : réinitialiser l'applet FIDO laisse vos mots de passe intacts, et réinitialiser le gestionnaire de mots de passe laisse vos passkeys en place."},
  {q: "Puis-je changer mon PIN sans connaître l'actuel ?", a: "Non. Tout changement exige le PIN actuel. Sans lui, la seule option est une réinitialisation."},
  {q: "Pourquoi mon PIN FIDO refuse-t-il les lettres ?", a: "Parce qu'il est numérique. Le PIN du gestionnaire de mots de passe accepte 4 à 16 caractères, mais le PIN FIDO n'accepte que des chiffres, avec un minimum de quatre."},
]} />

import GetSupport from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_get-support.mdx';

<p class="doc-subtitle">Trois PIN, trois règles de verrouillage, aucune récupération</p>

<div class="tldr">

Votre appareil comporte trois PIN indépendants, aux formats et aux limites de tentatives différents. **Aucun ne peut être récupéré.** Si vous êtes verrouillé dehors, la seule issue est de réinitialiser cet applet, ce qui en efface le contenu et laisse les deux autres intacts.

</div>

## Sur quel PIN bloquez-vous ?

| PIN | Protège | Format | Tentatives | En cas d'oubli |
|---|---|---|---|---|
| **Gestionnaire de mots de passe** | Mots de passe, notes, seed phrases | 4 à 16 caractères | 4 | Réinitialiser, restaurer depuis un équipement secondaire |
| **FIDO** | Passkeys | 4 chiffres minimum, numérique | 8 | Réinitialiser, réenregistrer chaque passkey |
| **Accès OTP** *(facultatif)* | Consultation des codes OTP | Défini par vous | - | Réinitialiser, rajouter chaque compte |

Les compteurs sont indépendants. Échouer trois fois sur le PIN FIDO ne rapproche en rien le gestionnaire de mots de passe d'un verrouillage.

## Avant de réessayer

Dès que deux tentatives vous séparent d'un verrouillage, arrêtez-vous et réfléchissez plutôt que de deviner.

**Vérifiez le clavier.** Le PIN FIDO est numérique. Si vous avez défini quelque chose avec des lettres, c'est le PIN du gestionnaire de mots de passe que vous avez défini, pas le PIN FIDO.

**Vérifiez dans quelle application vous êtes.** Saisir le PIN du gestionnaire de mots de passe dans la Seedkeeper PRO App échouera à chaque fois tout en consommant une tentative.

**Vérifiez quel appareil vous tenez.** Si vous avez un équipement principal et un secondaire, ils peuvent avoir des PIN différents. Une carte et une bague ne se ressemblent pas du tout ; deux cartes si.

**Notez ce que vous avez essayé**, pour ne pas répéter deux fois la même valeur erronée.

## Je connais mon PIN et je veux le changer

Ce n'est pas un verrouillage, et c'est simple.

**Gestionnaire de mots de passe :** Card's Information → Change PIN. Vos secrets restent intacts - voir [Réglages de l'appareil](/docs/product-documentation/getting-started/device-settings).

**FIDO :** depuis la Seedkeeper PRO App, ou directement depuis Windows et les navigateurs Chromium - voir [Gérer vos passkeys depuis votre ordinateur](/docs/product-documentation/passkeys/managing-passkeys-from-your-computer).

**Accès OTP :** depuis le menu Configuration de l'application, sous 2FA Accounts - voir [Définir un PIN d'accès OTP](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin).

Dans tous les cas, il vous faut le PIN actuel. Il n'existe aucune voie qui change un PIN que vous ne pouvez pas fournir.

## Je l'ai oublié

Il n'y a pas de récupération. Ni code maître, ni procédure d'assistance, ni certificat que nous détiendrions. Le secure element est conçu pour que personne ne puisse extraire ou contourner un PIN tout en conservant les données - et c'est cette propriété qui rend l'appareil digne d'être porté.

Il reste une réinitialisation de l'applet concerné, et ce que vous récupérez ensuite dépend entièrement de ce que vous avez préparé :

**Gestionnaire de mots de passe** → réinitialisez, puis restaurez depuis votre équipement secondaire. Tout revient si vous en avez un - voir [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery). Sans lui, les secrets ont disparu.

**FIDO** → réinitialisez, puis enregistrez une nouvelle passkey auprès de chaque service. Rien n'est restauré, une passkey liée au matériel n'existant nulle part ailleurs - voir [Accès aux passkeys perdu](/docs/troubleshooting/lost-passkey).

**OTP** → réinitialisez, puis rajoutez chaque compte depuis son QR code d'origine, ou générez de nouveaux identifiants depuis chaque service - voir [Accès OTP perdu](/docs/troubleshooting/lost-otp-access).

Procédures complètes pour les trois : [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper).

## Avant de réinitialiser, assurez-vous de pouvoir encore entrer

L'ordre compte, et les gens se trompent sous la pression.

**Réinitialiser l'applet FIDO supprime votre moyen de connexion** à chaque service où cette passkey était la méthode. Confirmez d'abord que vous avez une autre voie - un second appareil enregistré, un mot de passe, ou des codes de récupération.

**Réinitialiser les comptes OTP supprime votre second facteur** sur ces services. Même principe : vérifiez que vous pouvez encore vous authentifier avant d'effacer ce qui vous authentifie.

Une heure passée à confirmer votre repli vaut mieux qu'un verrouillage sur votre compte e-mail.

## Choisir un PIN dont vous vous souviendrez

Deux modes d'échec, et la plupart des gens ne se prémunissent que contre un seul.

Trop simple, il ne protège de rien face à quelqu'un qui tient l'appareil. Trop complexe, et vous revenez ici dans six mois.

- **Pas le code de déverrouillage de votre téléphone.** Si quelqu'un obtient l'un, il ne devrait pas obtenir les deux.
- **Pas une date de naissance, pas 0000, pas 1234.**
- **Dépassez le minimum.** Quatre chiffres représentent dix mille combinaisons ; six en représentent un million, pour le même effort.
- **Conservez-le quelque part.** Une entrée dans un gestionnaire de mots de passe ou une note scellée chez vous. Le PIN protège un objet physique - la menace réaliste est quelqu'un qui trouve l'appareil, pas quelqu'un qui trouve votre note.

## FAQ

<details>
<summary>Puis-je récupérer un PIN oublié ?</summary>

Non. Il n'existe ni code maître, ni contournement, ni procédure d'assistance. La seule issue est de réinitialiser l'applet, ce qui en efface le contenu.

</details>

<details>
<summary>Combien de tentatives incorrectes avant que mon appareil ne se verrouille ?</summary>

Quatre pour le gestionnaire de mots de passe, huit pour l'applet FIDO. Les compteurs sont indépendants : les échecs sur l'un n'affectent pas l'autre.

</details>

<details>
<summary>Réinitialiser un PIN affecte-t-il les autres ?</summary>

Non. Les trois applets sont indépendants - réinitialiser l'applet FIDO laisse vos mots de passe intacts, et réinitialiser le gestionnaire de mots de passe laisse vos passkeys en place.

</details>

<details>
<summary>Puis-je changer mon PIN sans connaître l'actuel ?</summary>

Non. Tout changement exige le PIN actuel. Sans lui, la seule option est une réinitialisation.

</details>

<details>
<summary>Pourquoi mon PIN FIDO refuse-t-il les lettres ?</summary>

Parce qu'il est numérique. Le PIN du gestionnaire de mots de passe accepte 4 à 16 caractères, mais le PIN FIDO n'accepte que des chiffres, avec un minimum de quatre.

</details>

## Articles liés

- [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Réglages de l'appareil](/docs/product-documentation/getting-started/device-settings)
- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)

<GetSupport />
