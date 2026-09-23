---
title: "Bonnes pratiques de sécurité"
description: "Hygiène du PIN, habitudes de sauvegarde, où ranger physiquement vos appareils, et quoi faire en cas de perte. Ce qui fait vraiment fonctionner le matériel."
keywords: [sécurité Seedkeeper, bonnes pratiques PIN, rangement clé matérielle, perte clé de sécurité, sécurité mots de passe hors ligne]
sidebar_position: 5
sidebar_label: "Bonnes pratiques de sécurité"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quelle longueur de PIN utiliser ?", a: "Le PIN du gestionnaire de mots de passe accepte 4 à 16 caractères : servez-vous de la longueur disponible. Le PIN FIDO qui protège vos passkeys est un PIN distinct, numérique, avec un minimum de quatre chiffres."},
  {q: "La sauvegarde est-elle obligatoire pour utiliser Seedkeeper ?", a: "Non, mais elle est vivement recommandée. Sans elle, perdre votre appareil revient à perdre tout ce qu'il contient."},
  {q: "Puis-je ranger mon équipement maître et mon équipement secondaire au même endroit ?", a: "Non. Les conserver dans des lieux physiquement distincts vous protège si l'un d'eux est touché par un vol, un incendie ou une perte."},
  {q: "Que faire si je perds mon appareil sans avoir de sauvegarde ?", a: "Les secrets contenus dans cet appareil ne sont pas récupérables : il n'existe aucune copie cloud. C'est précisément pourquoi configurer un équipement secondaire tôt compte autant."},
]} />

<p class="doc-subtitle">Tirer le meilleur de la sécurité de votre Seedkeeper</p>

<div class="tldr">

Le secure element de Seedkeeper fait le gros du travail, mais quelques habitudes font une vraie différence : choisir un PIN solide, configurer votre sauvegarde, ranger vos appareils séparément, et ne télécharger l'application que depuis les sources officielles.

</div>

## Vue d'ensemble

Seedkeeper n'a ni cloud, ni compte, ni collecte de données - vos secrets ne quittent jamais votre appareil. L'essentiel de ce qui reste à sécuriser est donc de votre côté : votre PIN, votre sauvegarde, et l'endroit où vous rangez physiquement vos cartes ou vos bagues.

## Choisir un PIN solide

Le PIN de votre gestionnaire de mots de passe protège vos mots de passe, vos notes et vos seed phrases. Il accepte 4 à 16 caractères - servez-vous de la longueur, et évitez tout ce qui se devine facilement : dates de naissance, chiffres répétés (0000, 1234), ou le PIN qui déverrouille votre téléphone. Le raisonnement est le même que pour les mots de passe : c'est la prévisibilité qui se devine, pas la longueur seule - voir [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password).

:::warning[Aucune réinitialisation de PIN ne récupère les données]
4 tentatives incorrectes verrouillent le gestionnaire de mots de passe. Le PIN FIDO qui protège vos passkeys est distinct et en autorise 8 - voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).<br />
Voir [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper) pour la procédure - mais notez qu'elle efface tout, ce qui rend la sauvegarde plus déterminante que jamais.
:::

## Configurer votre sauvegarde

Sans sauvegarde, un appareil perdu, volé ou endommagé signifie perdre tout ce qu'il contenait - il n'existe aucune copie cloud sur laquelle se rabattre. Configurer un équipement secondaire prend quelques minutes et reste la chose la plus efficace que vous puissiez faire pour protéger vos secrets dans la durée. Voir [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery) pour la procédure complète.

## Ranger vos appareils séparément

Conservez votre équipement maître et votre équipement secondaire dans des lieux physiquement distincts - par exemple l'un chez vous et l'autre ailleurs : un coffre, le domicile d'un proche, un coffre bancaire. Cela vous protège contre un événement unique - incendie, vol, inondation - qui emporterait les deux à la fois.

Évitez d'étiqueter vos appareils d'une façon qui révèle leur usage : traitez-les comme un double de clé de maison, pas comme un panneau indiquant où se trouvent vos objets de valeur.

## Sécuriser l'appareil qui exécute l'application

Votre Seedkeeper n'est protégée que dans la mesure où l'est le téléphone ou l'ordinateur depuis lequel vous y accédez. Gardez le verrouillage d'écran activé - PIN, biométrie - et maintenez à jour le système d'exploitation comme la Seedkeeper App elle-même.

## Télécharger uniquement depuis les sources officielles

N'installez les applications Seedkeeper que depuis l'App Store officiel, Google Play, ou les liens de la [section Téléchargements](/docs/product-documentation/getting-started/download).<br />
Seedkeeper est open source (AGPLv3), ce qui signifie que le code source est public - mais cela signifie aussi qu'il vaut la peine de vérifier deux fois que vous installez la véritable application et non une imitation. Les fausses applications et les pages de téléchargement sosies fonctionnent exactement comme le phishing - voir [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked#phishing--e-mails-et-faux-sites-web).

## Savoir quoi faire en cas de perte

Si vous perdez un équipement maître et que vous disposez d'un équipement secondaire, vos secrets se trouvent toujours sur ce dernier - servez-vous-en comme nouveau maître et appairez-lui un appareil neuf, en suivant [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery). Sans sauvegarde, les secrets de l'appareil perdu ne sont pas récupérables, puisqu'il n'existe aucune copie cloud.

Les passkeys fonctionnent différemment et appellent leur propre réponse - voir [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy) pour révoquer l'accès d'un appareil perdu sur chaque compte.

Pour la procédure complète de la première heure, dans l'ordre qui protège réellement vos comptes, voir [Appareil perdu ou volé](/docs/troubleshooting/lost-device).

## FAQ

<details>
<summary>Quelle longueur de PIN utiliser ?</summary>

Le PIN du gestionnaire de mots de passe accepte 4 à 16 caractères : servez-vous de la longueur disponible. Le PIN FIDO qui protège vos passkeys est un PIN distinct, numérique, avec un minimum de quatre chiffres. Voir [Choisir un PIN solide](#choisir-un-pin-solide) ci-dessus pour ce qu'il faut éviter.

</details>

<details>
<summary>La sauvegarde est-elle obligatoire pour utiliser Seedkeeper ?</summary>

Non, mais elle est vivement recommandée. Sans elle, perdre votre appareil revient à perdre tout ce qu'il contient. Voir [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery).

</details>

<details>
<summary>Puis-je ranger mon équipement maître et mon équipement secondaire au même endroit ?</summary>

Non. Les conserver dans des lieux physiquement distincts vous protège si l'un d'eux est touché par un vol, un incendie ou une perte. Voir [Ranger vos appareils séparément](#ranger-vos-appareils-séparément) ci-dessus.

</details>

<details>
<summary>Que faire si je perds mon appareil sans avoir de sauvegarde ?</summary>

Les secrets contenus dans cet appareil ne sont pas récupérables - il n'existe aucune copie cloud. C'est précisément pourquoi configurer un équipement secondaire tôt compte autant - voir [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery).

</details>

## Articles liés

- [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide)
- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
- [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Téléchargements](/docs/product-documentation/getting-started/download)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Appareil perdu ou volé](/docs/troubleshooting/lost-device)
- [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password)
- [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer)
- [Réglages de l'appareil](/docs/product-documentation/getting-started/device-settings)
