---
title: "Qu'est-ce qu'une passkey ?"
description: "Une passkey remplace votre mot de passe par une paire de clés cryptographiques - l'une secrète sur votre appareil, l'autre détenue par le service."
keywords: [qu'est-ce qu'une passkey, définition passkey, passkey expliquée, connexion sans mot de passe, FIDO2, WebAuthn, passkey matérielle]
sidebar_position: 1
sidebar_label: "Qu'est-ce qu'une passkey ?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Une passkey est-elle la même chose qu'une connexion biométrique ?", a: "Non, même si l'on confond souvent les deux. Votre empreinte ou votre visage déverrouille l'appareil qui détient la clé privée : ce n'est pas l'identifiant lui-même, et il n'est jamais transmis au service. Avec la Seedkeeper PRO, ce rôle de déverrouillage est tenu par votre PIN FIDO."},
  {q: "Que se passe-t-il si je perds mon appareil ?", a: "Avec des passkeys liées au matériel, perdre l'appareil signifie perdre ces identifiants : il n'existe aucune copie cloud à restaurer. C'est pourquoi il faut enregistrer un second appareil, ou conserver une méthode de récupération du service, avant d'en avoir besoin."},
  {q: "Ai-je besoin de la Seedkeeper PRO App pour me connecter avec une passkey ?", a: "Non. Votre navigateur ou votre système d'exploitation dialogue directement avec l'appareil via WebAuthn. La Seedkeeper PRO App n'est nécessaire que pour gérer les passkeys : définir le PIN FIDO, lister les passkeys stockées ou en supprimer une."},
  {q: "Puis-je utiliser une même passkey pour plusieurs comptes ?", a: "Non, et c'est délibéré. Une paire de clés distincte est générée pour chaque service : rien ne relie vos comptes entre eux, et compromettre l'un ne révèle rien des autres."},
  {q: "Les passkeys sont-elles déjà largement prises en charge ?", a: "La prise en charge a progressé rapidement : Google, Microsoft, Amazon, PayPal, GitHub et bien d'autres les acceptent désormais. La couverture reste inégale, de sorte que la plupart des gens utilisent les passkeys en parallèle des mots de passe plutôt qu'en remplacement immédiat partout."},
]} />

<p class="doc-subtitle">Se connecter sans secret partagé</p>

<div class="tldr">

Une passkey est une paire de clés cryptographiques qui remplace votre [mot de passe](/docs/security-academy/password-security/what-is-a-password). La clé privée ne quitte jamais votre appareil et n'est jamais transmise ; le service ne détient que la clé publique correspondante. Parce qu'il n'existe aucun secret partagé à saisir, à laisser fuiter ou à livrer à une fausse page de connexion, les passkeys ne peuvent être ni hameçonnées ni volées lors d'une fuite de données.

</div>

## La définition simple

Une passkey est un identifiant de connexion formé de deux clés liées mathématiquement : une **clé privée** qui reste sur votre appareil, et une **clé publique** que le service conserve dans votre compte.

Cela se joue en deux moments. D'abord, à la création de la passkey : votre navigateur demande à votre authentificateur de générer une paire de clés neuve pour ce service précis, et seule la clé publique est envoyée au serveur.

<img src="/img/diagrams/passkey-registration-flow.png" alt="Enregistrement d'une passkey : le navigateur appelle navigator.credentials.create(), l'authentificateur génère une paire de clés, et seule la clé publique est envoyée au serveur" style={{width: '60%', maxWidth: 'none'}} />

Ensuite, à chaque connexion : le serveur envoie à votre appareil un défi aléatoire. Votre appareil le signe avec la clé privée et renvoie la signature. Le serveur vérifie cette signature à l'aide de la clé publique qu'il détient déjà. Si elle est valide, vous entrez.

<img src="/img/diagrams/passkey-authentication-flow.png" alt="Authentification par passkey : le serveur envoie un défi, l'authentificateur le signe après saisie d'un PIN ou déverrouillage de l'écran, et le serveur valide la signature avec la clé publique stockée" style={{width: '60%', maxWidth: 'none'}} />

La clé privée elle-même n'est jamais transmise. Ni à l'enregistrement, ni à la connexion, jamais. Cette seule différence est ce qui rend les passkeys fondamentalement différentes des mots de passe - et il vaut la peine de lire [Qu'est-ce qu'un mot de passe ?](/docs/security-academy/password-security/what-is-a-password) en parallèle de cet article pour voir précisément ce qui change.

## Ce qui la distingue d'un mot de passe

Un [mot de passe](/docs/glossary/password) est un secret partagé : vous le connaissez, et le service le connaît aussi (ou en connaît un haché). Les deux parties détiennent quelque chose qui pourrait être volé de part et d'autre.

Une passkey est asymétrique. Le service détient une clé publique qui est, comme son nom l'indique, publique. Elle est inutile à un attaquant, à elle seule. Vous pouvez l'afficher sur un panneau publicitaire, personne ne pourra s'en servir pour se connecter. Tout ce qui a de la valeur reste sur votre appareil, protégé par le matériel.

Cela inverse le modèle de sécurité. Avec les mots de passe, une fuite chez le service vous expose. Avec les passkeys, une fuite chez le service expose une liste de clés publiques, et rien d'autre.

## Pourquoi une passkey ne peut pas être hameçonnée

Le phishing fonctionne parce qu'un mot de passe est transportable. Si une fausse page convaincante parvient à vous le faire saisir, l'attaquant détient l'original et peut s'en servir sur le vrai site. C'est l'une des façons les plus courantes de voler des identifiants - voir [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked#phishing--e-mails-et-faux-sites-web), qui contient une fausse page de connexion que vous pouvez essayer de repérer vous-même.

Une passkey ne fonctionne pas ainsi. Lors de l'enregistrement, votre appareil lie définitivement l'identifiant au domaine exact du service. Quand une fausse page demande à votre appareil de se connecter, le domaine ne correspond pas à celui pour lequel la passkey a été créée : votre appareil refuse, tout simplement. Il n'y a aucune alerte à outrepasser, aucun avertissement à ignorer, rien que vous puissiez faire de travers.

Ce n'est ni de la pédagogie utilisateur ni un filtre plus intelligent. C'est une propriété structurelle du protocole - l'attaque n'a plus de prise.

## Où réside la clé privée

C'est là que les passkeys diffèrent le plus en pratique, et là que se situe le véritable arbitrage de sécurité.

- **Les passkeys synchronisées** sont conservées dans un coffre-fort logiciel - Apple iCloud Keychain, Google Password Manager, ou un gestionnaire de mots de passe - et recopiées sur tous vos appareils via le cloud de ce fournisseur. Pratique, mais vos identifiants ne valent alors que la sécurité de ce compte.
- **Les passkeys liées au matériel** sont générées à l'intérieur d'un [secure element](/docs/glossary/secure-element) dédié et ne peuvent physiquement pas en être exportées. Elles existent sur un seul appareil et nulle part ailleurs. Aucune copie cloud à compromettre, aucun compte fournisseur entre vous et vos identifiants.

La Seedkeeper PRO relève du second modèle. Les passkeys sont créées à l'intérieur d'un secure element certifié EAL6+ et n'en sortent jamais, ce qui explique aussi qu'elles ne soient pas transférées par une sauvegarde d'appareil à appareil - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour anticiper ce point.

## Ce que vous faites concrètement

La cryptographie est invisible à l'usage. En pratique :

1. Dans les réglages de sécurité du service, vous choisissez d'ajouter une passkey.
2. Vous approchez votre Seedkeeper PRO de votre téléphone, ou vous la connectez sur votre ordinateur.
3. Vous saisissez votre PIN FIDO et vous confirmez.

À partir de là, se connecter consiste à présenter l'appareil et à saisir le PIN. Aucun mot de passe à retenir, aucun code à recopier avant expiration, aucune seconde application à ouvrir.

Le PIN mérite d'être bien compris : il déverrouille l'appareil localement et n'est jamais transmis au service. C'est lui qui empêche quiconque volerait physiquement votre Seedkeeper PRO de s'en servir - le second facteur de « quelque chose que vous possédez, quelque chose que vous savez », le couple décrit dans [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained).

## Les standards qui les sous-tendent

Les passkeys ne sont pas une fonctionnalité propriétaire. C'est un standard ouvert, bâti sur deux spécifications :

- **[FIDO2](/docs/glossary/fido2)** - le cadre général, défini par la FIDO Alliance, qui régit la façon dont les authentificateurs et les services dialoguent.
- **[WebAuthn](/docs/glossary/webauthn)** - l'API côté navigateur qui permet à un site web de demander une signature à votre authentificateur.

Parce qu'il s'agit de standards ouverts, une passkey créée avec une Seedkeeper PRO fonctionne avec n'importe quel service compatible FIDO2, sur n'importe quel système d'exploitation, sans dépendance à un fournisseur. Voir [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2) pour le tableau complet.

## FAQ

<details>
<summary>Une passkey est-elle la même chose qu'une connexion biométrique ?</summary>

Non, même si l'on confond souvent les deux. Votre empreinte ou votre visage déverrouille l'appareil qui détient la clé privée - ce n'est pas l'identifiant lui-même, et il n'est jamais transmis au service. Avec la Seedkeeper PRO, ce rôle de déverrouillage est tenu par votre PIN FIDO.

</details>

<details>
<summary>Que se passe-t-il si je perds mon appareil ?</summary>

Avec des passkeys liées au matériel, perdre l'appareil signifie perdre ces identifiants : il n'existe aucune copie cloud à restaurer. C'est pourquoi il faut enregistrer un second appareil, ou conserver une méthode de récupération du service, avant d'en avoir besoin. Voir [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy).

</details>

<details>
<summary>Ai-je besoin de la Seedkeeper PRO App pour me connecter avec une passkey ?</summary>

Non. Votre navigateur ou votre système d'exploitation dialogue directement avec l'appareil via WebAuthn. La Seedkeeper PRO App n'est nécessaire que pour gérer les passkeys - définir le PIN FIDO, lister les passkeys stockées ou en supprimer une.

</details>

<details>
<summary>Puis-je utiliser une même passkey pour plusieurs comptes ?</summary>

Non, et c'est délibéré. Une paire de clés distincte est générée pour chaque service : rien ne relie vos comptes entre eux, et compromettre l'un ne révèle rien des autres.

</details>

<details>
<summary>Les passkeys sont-elles déjà largement prises en charge ?</summary>

La prise en charge a progressé rapidement - Google, Microsoft, Amazon, PayPal, GitHub et bien d'autres les acceptent désormais. La couverture reste inégale, de sorte que la plupart des gens utilisent les passkeys en parallèle des mots de passe plutôt qu'en remplacement immédiat partout. Nos tutoriels pas à pas couvrent les services qui les prennent en charge aujourd'hui, notamment [Google](/docs/category/google/), [Microsoft](/docs/category/microsoft/) et les [boutiques en ligne](/docs/category/webshop/).

</details>

## Articles liés

- [Comment fonctionnent les passkeys](/docs/security-academy/passkeys/how-passkeys-work)
- [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
- [Qu'est-ce qu'un mot de passe ?](/docs/security-academy/password-security/what-is-a-password)
- [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained)
- [Créer votre première passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
