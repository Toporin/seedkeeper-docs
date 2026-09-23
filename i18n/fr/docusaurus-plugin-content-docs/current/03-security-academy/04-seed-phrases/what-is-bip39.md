---
title: "Qu'est-ce que BIP39 ?"
description: "BIP39 est le standard qui transforme de l'entropie aléatoire en liste de mots lisible. Le vocabulaire de 2048 mots, la somme de contrôle et la passphrase."
keywords: [qu'est-ce que BIP39, standard BIP39, liste de mots BIP39, standard mnémonique, passphrase BIP39, 25e mot, BIP32 BIP44]
sidebar_position: 3
sidebar_label: "Qu'est-ce que BIP39 ?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Qu'est-ce que BIP39 ?", a: "Une spécification publique définissant comment de l'entropie aléatoire est convertie en phrase mnémonique de 12 ou 24 mots, à l'aide d'une liste figée de 2 048 mots assortie d'une somme de contrôle, puis comment ces mots deviennent une graine de portefeuille."},
  {q: "Pourquoi BIP39 utilise-t-il exactement 2048 mots ?", a: "Parce que 2 048 est 2 puissance 11 : chaque mot encode donc exactement 11 bits. La correspondance entre le nombre aléatoire et les mots en devient nette et sans perte."},
  {q: "Qu'est-ce qu'une passphrase BIP39 ?", a: "Un secret supplémentaire optionnel incorporé au moment où les mots sont convertis en graine. Il produit un portefeuille entièrement différent plutôt que de verrouiller l'existant, ce qui signifie que l'oublier fait perdre l'accès aussi sûrement que perdre la phrase."},
  {q: "La passphrase BIP39 est-elle le 25e mot ?", a: "Les deux désignent la même fonctionnalité, mais le surnom induit en erreur : elle n'est pas tirée de la liste de mots et n'est pas ajoutée à la phrase. C'est un secret distinct, combiné à l'étape de dérivation."},
  {q: "Puis-je utiliser une phrase BIP39 dans n'importe quel portefeuille ?", a: "Dans la plupart des portefeuilles modernes, oui, BIP39 étant largement adopté. Des exceptions existent - Electrum et Monero utilisent leurs propres schémas - et des différences de chemin de dérivation peuvent faire paraître vide un portefeuille correctement restauré."},
  {q: "Puis-je stocker une seed phrase non BIP39 sur une Seedkeeper ?", a: "Oui, sous forme de note sécurisée plutôt que de phrase mnémonique. L'option Mnemonic valide la somme de contrôle BIP39 et rejette tout ce qui échoue : Electrum, Monero et les autres schémas vont donc dans la section Notes, avec le même secure element et le même PIN, sans le contrôle de format."},
  {q: "Pourquoi la Seedkeeper App refuse-t-elle ma seed phrase ?", a: "Parce qu'elle valide chaque mnémonique au regard du standard BIP39 avant de l'enregistrer. Un refus signifie presque toujours un mot mal orthographié, un mot absent de la liste, des mots dans le mauvais ordre, ou la mauvaise liste de langue."},
  {q: "Pourquoi ma phrase BIP39 est-elle invalide ?", a: "Généralement un mot mal orthographié, un mot absent de la liste, des mots dans le mauvais ordre, ou la mauvaise liste de langue. La somme de contrôle détecte ces quatre cas, ce pour quoi elle existe précisément."},
]} />

<p class="doc-subtitle">Le standard derrière les mots</p>

<div class="tldr">

BIP39 est la spécification qui définit comment un nombre aléatoire devient une liste de mots lisible, et comment ces mots deviennent une graine de portefeuille. Elle fixe un vocabulaire de 2 048 mots, ajoute une somme de contrôle pour détecter les fautes de frappe, et définit une [passphrase](/docs/glossary/passphrase) optionnelle qui produit un portefeuille entièrement distinct. C'est elle qui permet à une phrase issue d'un portefeuille de fonctionner dans un autre.

</div>

## Ce qu'est réellement BIP39

BIP signifie **Bitcoin Improvement Proposal** - un document public numéroté décrivant une évolution ou une convention que chacun peut implémenter. BIP39, proposé en 2013, couvre spécifiquement les phrases mnémoniques.

Ce n'est ni un logiciel, ni une entreprise, et cela n'appartient à personne. C'est précisément pourquoi la spécification s'est répandue au-delà de Bitcoin : les portefeuilles Ethereum, les portefeuilles matériels et les applications multi-chaînes l'ont tous adoptée, parce qu'un format commun était plus utile à tout le monde qu'une douzaine de formats incompatibles.

## La liste de mots

BIP39 définit exactement **2 048 mots**, choisis selon des contraintes plus réfléchies qu'il n'y paraît.

- **Les quatre premières lettres sont uniques.** `abandon` et `ability` diffèrent dès les quatre premiers caractères : une phrase peut donc être frappée dans du métal en n'utilisant que quatre lettres par mot, sans ambiguïté.
- **Aucune paire de mots visuellement proches.** Les mots qui pourraient être confondus manuscrits ou lus rapidement ont été exclus.
- **Un vocabulaire courant et simple.** Facile à épeler, facile à relire au téléphone, facile à reconnaître pour un locuteur non natif.
- **Un classement alphabétique**, qui simplifie la recherche et l'implémentation.

Des listes officielles existent en plusieurs langues - japonais, espagnol, français, italien, coréen, tchèque et chinois notamment. Elles ne sont pas interchangeables : une phrase générée depuis la liste française ne sera pas validée par la liste anglaise. Si vous restaurez un jour un portefeuille dans la mauvaise langue, les mots sont bons et c'est la liste qui ne l'est pas.

## La somme de contrôle

Quelques bits issus d'un haché de votre entropie sont ajoutés à la phrase - quatre bits pour une phrase de 12 mots, huit pour 24.

L'effet est qu'**un ensemble aléatoire de douze mots BIP39 est presque certainement invalide**. Environ une combinaison de 12 mots sur seize seulement passe la somme de contrôle. Un mot mal saisi ou mal mémorisé est donc rejeté, au lieu d'ouvrir silencieusement un portefeuille différent, valide et vide.

C'est la partie la plus protectrice du standard pour l'utilisateur, et c'est pourquoi un portefeuille qui refuse votre phrase vous rend généralement service. Voir [Comment fonctionnent les seed phrases](/docs/security-academy/seed-phrases/how-seed-phrases-work).

## La passphrase optionnelle

BIP39 définit un secret supplémentaire, parfois appelé le « 25e mot » - un surnom trompeur, car ce n'est ni un mot de la liste ni un ajout à la phrase.

La passphrase est incorporée au moment où les mots sont étirés en graine finale. Ce moment a une conséquence que l'on sous-estime :

**Une passphrase différente produit un portefeuille entièrement différent.** Non pas une version verrouillée du même, mais un portefeuille distinct, valide et vide. Aucun message d'erreur n'apparaît, car du point de vue du logiciel rien ne va de travers.

Cette propriété fait à la fois sa puissance et son danger :

- **Puissante**, parce que celui qui trouve votre phrase écrite obtient un portefeuille vide, et parce qu'elle permet un déni plausible - un portefeuille leurre au solde modeste et sans passphrase, à côté du vrai.
- **Dangereuse**, parce que l'oublier fait perdre les fonds aussi sûrement que perdre la phrase. Il n'y a ni récupération, ni indice, ni moyen de savoir que vous l'avez saisie légèrement de travers.

Si vous en utilisez une, traitez-la comme un second secret d'importance égale, conservé **séparément** de la phrase elle-même. Une Seedkeeper peut détenir les deux - voir [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases), qui prend en charge un champ passphrase optionnel aux côtés du mnémonique.

## Là où BIP39 s'arrête

BIP39 couvre l'entropie, les mots et la graine. Il ne dit rien de ce que le portefeuille fait ensuite.

- **BIP32** définit l'arbre hiérarchique de clés dérivées de la graine.
- **BIP44** et ses proches définissent les chemins de dérivation - quelle branche de cet arbre contient les adresses de quelle monnaie.

C'est pourquoi une phrase peut se restaurer correctement et afficher malgré tout un solde nul : les mots étaient bons, le chemin était différent. Les trois standards sont généralement implémentés ensemble et souvent désignés vaguement comme des « portefeuilles BIP39 ».

## Comment Seedkeeper traite cela

Parce que la somme de contrôle rend une phrase autovérifiable, la Seedkeeper App s'en sert comme d'un filtre plutôt que d'une suggestion.

**Les seed phrases doivent être conformes à BIP39 pour être enregistrées comme phrase mnémonique.** Lors d'un import, l'application valide la phrase au regard du standard - la liste de mots, la longueur et la somme de contrôle - et refuse tout ce qui ne se vérifie pas. Ce refus est délibéré : une phrase qui échoue à la validation est presque toujours une erreur de transcription, et la détecter au moment de la saisie coûte trente secondes quand la détecter des années plus tard, pendant une récupération, coûte tout. Voir [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases).

**Pour tout ce qui n'est pas BIP39, utilisez plutôt une note sécurisée.** Une phrase Electrum, une graine Monero de 25 mots, une clé privée brute, ou une phrase de récupération d'un portefeuille doté de son propre schéma peuvent toutes être enregistrées en texte libre dans le gestionnaire de mots de passe - même secure element, même PIN, mêmes garanties hors ligne, sans le contrôle de format. Voir [Créer des notes sécurisées](/docs/product-documentation/password-manager/creating-secure-notes).

Le compromis mérite d'être compris : une note sécurisée accepte tout, et ne vérifie donc rien. Si vous y stockez une graine non BIP39, transcrivez-la avec le soin qu'une somme de contrôle vous aurait autrement apporté.

## Tous les portefeuilles n'utilisent pas BIP39

À savoir avant de tenir la portabilité pour acquise.

**Electrum** dispose de son propre schéma mnémonique doté d'une autre somme de contrôle, et c'est pourquoi une phrase Electrum peut ne pas être validée par un portefeuille BIP39, et réciproquement.

**Monero** utilise un schéma de 25 mots qui lui est propre, sans rapport avec BIP39.

**Certaines plateformes d'échange et applications de conservation** délivrent des phrases qui ne fonctionnent que dans leur propre logiciel. Si une phrase est présentée comme une phrase de récupération mais n'est validée nulle part ailleurs, c'est généralement l'explication.

## FAQ

<details>
<summary>Qu'est-ce que BIP39 ?</summary>

Une spécification publique définissant comment de l'entropie aléatoire est convertie en phrase mnémonique de 12 ou 24 mots, à l'aide d'une liste figée de 2 048 mots assortie d'une somme de contrôle, puis comment ces mots deviennent une graine de portefeuille.

</details>

<details>
<summary>Pourquoi BIP39 utilise-t-il exactement 2048 mots ?</summary>

Parce que 2 048 est 2 puissance 11 : chaque mot encode donc exactement 11 bits. La correspondance entre le nombre aléatoire et les mots en devient nette et sans perte.

</details>

<details>
<summary>Qu'est-ce qu'une passphrase BIP39 ?</summary>

Un secret supplémentaire optionnel incorporé au moment où les mots sont convertis en graine. Il produit un portefeuille entièrement différent plutôt que de verrouiller l'existant, ce qui signifie que l'oublier fait perdre l'accès aussi sûrement que perdre la phrase.

</details>

<details>
<summary>La passphrase BIP39 est-elle le 25e mot ?</summary>

Les deux désignent la même fonctionnalité, mais le surnom induit en erreur : elle n'est pas tirée de la liste de mots et n'est pas ajoutée à la phrase. C'est un secret distinct, combiné à l'étape de dérivation.

</details>

<details>
<summary>Puis-je utiliser une phrase BIP39 dans n'importe quel portefeuille ?</summary>

Dans la plupart des portefeuilles modernes, oui, BIP39 étant largement adopté. Des exceptions existent - Electrum et Monero utilisent leurs propres schémas - et des différences de chemin de dérivation peuvent faire paraître vide un portefeuille correctement restauré.

</details>

<details>
<summary>Puis-je stocker une seed phrase non BIP39 sur une Seedkeeper ?</summary>

Oui, sous forme de note sécurisée plutôt que de phrase mnémonique. L'option Mnemonic valide la somme de contrôle BIP39 et rejette tout ce qui échoue : Electrum, Monero et les autres schémas vont donc dans la section Notes - même secure element et même PIN, sans le contrôle de format.

</details>

<details>
<summary>Pourquoi la Seedkeeper App refuse-t-elle ma seed phrase ?</summary>

Parce qu'elle valide chaque mnémonique au regard du standard BIP39 avant de l'enregistrer. Un refus signifie presque toujours un mot mal orthographié, un mot absent de la liste, des mots dans le mauvais ordre, ou la mauvaise liste de langue.

</details>

<details>
<summary>Pourquoi ma phrase BIP39 est-elle invalide ?</summary>

Généralement un mot mal orthographié, un mot absent de la liste, des mots dans le mauvais ordre, ou la mauvaise liste de langue. La somme de contrôle détecte ces quatre cas, ce pour quoi elle existe précisément.

</details>

## Articles liés

- [Comment fonctionnent les seed phrases](/docs/security-academy/seed-phrases/how-seed-phrases-work)
- [Qu'est-ce qu'une seed phrase ?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Créer des notes sécurisées](/docs/product-documentation/password-manager/creating-secure-notes)
