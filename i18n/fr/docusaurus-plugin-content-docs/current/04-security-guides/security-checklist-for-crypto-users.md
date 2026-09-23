---
title: "Liste de contrôle sécurité pour les utilisateurs de crypto"
description: "L'auto-conservation supprime le service d'assistance. Ce que cela change, comment conserver une seed phrase, et les arnaques conçues pour vous."
keywords: [sécurité crypto, protéger portefeuille crypto, sécurité seed phrase, arnaques crypto, sécurité auto-conservation, sécurité compte plateforme]
sidebar_position: 6
sidebar_label: "Liste de contrôle sécurité pour les utilisateurs de crypto"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quel est le principal risque de sécurité pour un détenteur de crypto ?", a: "Perdre la seed phrase, par divulgation ou par destruction, suivi de près par la compromission d'un compte de plateforme d'échange. Les deux relèvent de la prévention, aucun n'ayant de voie de récupération une fois le mal fait."},
  {q: "Puis-je conserver ma seed phrase dans un gestionnaire de mots de passe ?", a: "Pas dans un gestionnaire synchronisé dans le cloud. La phrase serait alors protégée par un mot de passe maître et par l'infrastructure d'un fournisseur, deux éléments attaquables. Un stockage hors ligne la maintient entièrement hors de cette chaîne."},
  {q: "Pourquoi la 2FA par SMS est-elle un risque particulier pour les utilisateurs de crypto ?", a: "Parce que le SIM swapping vise spécifiquement les personnes connues pour détenir de la crypto. Un attaquant convainc l'opérateur de transférer votre numéro vers sa SIM, et chaque code SMS lui parvient ensuite, sans logiciel malveillant ni accès à votre appareil."},
  {q: "Le support d'un portefeuille demandera-t-il un jour ma seed phrase ?", a: "Jamais. Un support légitime n'en a pas besoin et ne vous contacte pas en premier. Quiconque la demande est un attaquant, aussi compétent et patient paraisse-t-il."},
  {q: "Vaut-il mieux garder sa crypto sur une plateforme ou en auto-conservation ?", a: "Les deux échouent différemment. Une plateforme peut être piratée ou geler les retraits, mais propose une récupération de compte. L'auto-conservation supprime le risque de tiers et ne vous offre aucune récupération. Beaucoup de gens répartissent, en gardant les soldes de trading sur une plateforme et les avoirs de long terme en auto-conservation."},
]} />

import BuyBackupDevice from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-backup-device.mdx';

<p class="doc-subtitle">Aucune rétrofacturation, aucun service d'assistance, aucune seconde chance</p>

<div class="tldr">

La crypto change les enjeux plutôt que les techniques. Les attaques sont les mêmes que partout ailleurs - phishing, faux support, credential stuffing - mais une attaque réussie est définitive. Il n'y a ni service anti-fraude, ni annulation, ni récupération de compte. C'est autour de cette seule différence qu'est construite cette liste.

</div>

## Ce qui change réellement

Partout ailleurs, un compte compromis est récupérable. Une banque annule le virement, un fournisseur rétablit l'accès, le support intervient.

L'auto-conservation supprime tout cela par conception. C'est tout l'intérêt de détenir ses propres clés, et cela coupe des deux côtés : personne ne peut prendre vos fonds sans vos clés, et personne ne peut vous les rendre une fois que quelqu'un l'a fait.

La prévention porte donc toute la charge. Chaque point ci-dessous vaut davantage ici que la mesure équivalente sur un compte ordinaire.

## 1. Votre seed phrase est tout le portefeuille

Quiconque détient ces mots détient les fonds, définitivement, sur chaque adresse que le portefeuille générera jamais. Elle ne peut être ni changée, ni réinitialisée, ni révoquée.

**Ne la laissez jamais exister sur quoi que ce soit de connecté.** Ni photo, ni application de notes, ni fichier cloud, ni message que vous vous adressez, ni gestionnaire de mots de passe qui se synchronise. Des outils automatisés scrutent en permanence l'internet ouvert à la recherche de tout ce qui correspond au motif de mots [BIP39](/docs/security-academy/seed-phrases/what-is-bip39), et une phrase exposée est généralement vidée en quelques minutes.

**Ne la saisissez jamais dans un site web.** Il n'existe aucune raison légitime pour une page web de la demander - ni pour la valider, ni pour restaurer un accès, ni pour réclamer quoi que ce soit.

Voir [Qu'est-ce qu'une seed phrase ?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase) pour ce que ces mots encodent réellement.

## 2. Conservez-la de façon à survivre aux deux menaces

Une seed phrase doit survivre à la fois au fait d'être **trouvée** par quelqu'un d'autre et d'être **perdue** par vous. Résoudre l'une crée généralement l'autre.

- **Au moins deux copies**, dans des lieux physiquement bien distincts
- **Sur des supports qui survivent au feu et à l'eau** - du métal plutôt que du papier pour tout montant significatif
- **Ou sur du matériel qui la garde illisible** : un secure element n'a ni réseau, ni système d'exploitation, ni moyen de libérer la phrase sans l'appareil et son PIN. Voir [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases)
- **La passphrase, si vous en utilisez une, conservée séparément** - ensemble, elle ne protège rien

Raisonnement complet dans [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase).

<BuyBackupDevice />

## 3. Testez la sauvegarde une fois

Une phrase écrite et rangée est une hypothèse, pas une sauvegarde. Des mots sont mal transcrits, une écriture devient ambiguë, des positions sont interverties - et rien de tout cela n'apparaît avant le jour où vous en avez besoin.

Restaurez-la une fois dans un portefeuille, vérifiez que les adresses correspondent, puis rangez-la. Une demi-heure aujourd'hui contre tout le reste plus tard.

## 4. Sécurisez les comptes qui entourent le portefeuille

La plupart des gens perdent de la crypto par un compte de plateforme plutôt que par un portefeuille compromis, parce que c'est là que se trouve la surface d'attaque la plus accessible.

Pour chaque plateforme et chaque service détenant des actifs :

- Un mot de passe unique, généré
- Une authentification à deux facteurs résistante au phishing - une passkey là où elle est proposée, une application d'authentification sinon, jamais le SMS
- Une liste blanche d'adresses de retrait, si la plateforme la propose
- Les notifications de retrait activées

Procédures détaillées : [Binance](/docs/tutorials/financial/secure-binance-with-a-passkey), [Kraken](/docs/tutorials/financial/secure-kraken-with-a-passkey), [PayPal](/docs/tutorials/financial/secure-paypal-with-a-passkey).

## 5. Retirez le SMS de vos comptes crypto

Ce point mérite sa propre entrée, car les détenteurs de crypto sont spécifiquement visés.

Le **SIM swapping** - convaincre un opérateur de transférer votre numéro vers la SIM d'un attaquant - a été employé à de multiples reprises contre des personnes connues pour détenir de la crypto. Cela ne demande aucune compétence technique ni aucun accès à votre téléphone. Chaque code SMS parvient ensuite à l'attaquant.

Remplacez le SMS par une application d'authentification ou une clé matérielle partout, et demandez à votre opérateur un verrouillage de portabilité. Voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## 6. Connaissez les arnaques conçues pour vous

Les attaques génériques s'appliquent, auxquelles s'ajoutent plusieurs conçues spécifiquement pour ce public.

**Le faux support dans vos messages privés.** Vous exposez un problème publiquement ; quelqu'un de serviable apparaît en quelques minutes. Il est patient, compétent, et finit par avoir besoin de votre seed phrase ou d'un outil de « validation ». Un vrai support ne vous contacte jamais en premier et n'a jamais besoin de votre phrase.

**Les fausses applications de portefeuille et extensions de navigateur**, publiées sous des noms convaincants dans les boutiques officielles. N'installez que depuis les liens du site officiel du projet.

**Les airdrops et pages de « réclamation »** qui exigent de connecter un portefeuille et de signer quelque chose. Lisez ce que vous signez ; une approbation de jeton peut accorder un droit de dépense illimité.

**L'empoisonnement d'adresse.** Un attaquant envoie une transaction de poussière depuis une adresse ressemblant à une des vôtres, en espérant que vous la copierez depuis votre historique plus tard. Vérifiez l'adresse complète, pas les quatre premiers et quatre derniers caractères.

**La pression et l'urgence**, toujours. Voir [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked).

## 7. Séparez ce que vous utilisez de ce que vous détenez

Un portefeuille quotidien au solde modeste, connecté à tout ce dont vous avez besoin. Un portefeuille de long terme qui ne touche jamais un site web, ne signe jamais d'approbation, et n'existe que pour détenir.

Cette seule habitude limite le rayon d'explosion de chaque erreur de la liste ci-dessus. La plupart des pertes surviennent sur le portefeuille qui interagit avec des choses.

## 8. Décidez de ce qui se passe après vous

L'auto-conservation n'a aucune procédure d'ayant droit. Si personne ne peut atteindre votre phrase, les fonds cessent simplement d'exister pour tout le monde.

Décidez délibérément s'ils doivent être récupérables et, si oui, laissez assez pour que quelqu'un puisse agir sans en laisser assez pour un inconnu qui trouverait la même note. Un objet physique remis à une personne de confiance, ou des instructions qui n'ont de sens que combinées à quelque chose qu'elle détient déjà, sont deux approches praticables.

## La version courte

Si vous ne faites que quatre choses : gardez la phrase entièrement hors ligne, gardez deux copies dans des lieux différents, retirez le SMS de vos comptes, et ne saisissez jamais votre phrase nulle part. Cela couvre l'immense majorité des pertes réelles.

## FAQ

<details>
<summary>Quel est le principal risque de sécurité pour un détenteur de crypto ?</summary>

Perdre la seed phrase, par divulgation ou par destruction, suivi de près par la compromission d'un compte de plateforme d'échange. Les deux relèvent de la prévention, aucun n'ayant de voie de récupération une fois le mal fait.

</details>

<details>
<summary>Puis-je conserver ma seed phrase dans un gestionnaire de mots de passe ?</summary>

Pas dans un gestionnaire synchronisé dans le cloud. La phrase serait alors protégée par un mot de passe maître et par l'infrastructure d'un fournisseur, deux éléments attaquables. Un stockage hors ligne la maintient entièrement hors de cette chaîne.

</details>

<details>
<summary>Pourquoi la 2FA par SMS est-elle un risque particulier pour les utilisateurs de crypto ?</summary>

Parce que le SIM swapping vise spécifiquement les personnes connues pour détenir de la crypto. Un attaquant convainc l'opérateur de transférer votre numéro vers sa SIM, et chaque code SMS lui parvient ensuite - sans logiciel malveillant ni accès à votre appareil.

</details>

<details>
<summary>Le support d'un portefeuille demandera-t-il un jour ma seed phrase ?</summary>

Jamais. Un support légitime n'en a pas besoin et ne vous contacte pas en premier. Quiconque la demande est un attaquant, aussi compétent et patient paraisse-t-il.

</details>

<details>
<summary>Vaut-il mieux garder sa crypto sur une plateforme ou en auto-conservation ?</summary>

Les deux échouent différemment. Une plateforme peut être piratée ou geler les retraits, mais propose une récupération de compte. L'auto-conservation supprime le risque de tiers et ne vous offre aucune récupération. Beaucoup de gens répartissent, en gardant les soldes de trading sur une plateforme et les avoirs de long terme en auto-conservation.

</details>

## Articles liés

- [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [Les erreurs courantes avec les seed phrases](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes)
- [Qu'est-ce qu'une seed phrase ?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Guide de sécurité en voyage](/docs/security-guides/travel-security-guide)
