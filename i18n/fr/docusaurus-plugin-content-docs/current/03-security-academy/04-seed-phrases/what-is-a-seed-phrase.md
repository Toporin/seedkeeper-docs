---
title: "Qu'est-ce qu'une seed phrase ?"
description: "Une seed phrase est une liste de mots ordinaires qui encode toutes les clés privées d'un portefeuille crypto. Qui la détient détient les fonds, définitivement."
keywords: [qu'est-ce qu'une seed phrase, phrase de récupération, phrase mnémonique, sauvegarde portefeuille crypto, phrase 12 mots, phrase 24 mots, BIP39]
sidebar_position: 1
sidebar_label: "Qu'est-ce qu'une seed phrase ?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Qu'est-ce qu'une seed phrase ?", a: "Une liste de 12 ou 24 mots ordinaires encodant la clé maîtresse d'un portefeuille crypto. Chaque clé privée de ce portefeuille en est dérivée : la phrase équivaut donc fonctionnellement aux fonds eux-mêmes."},
  {q: "Une seed phrase est-elle la même chose qu'une clé privée ?", a: "Pas tout à fait. Une clé privée contrôle une adresse ; une seed phrase génère la clé maîtresse dont chaque adresse du portefeuille est dérivée. Détenir la phrase, c'est les détenir toutes."},
  {q: "Puis-je changer ma seed phrase si elle fuite ?", a: "Non. Une seed phrase ne peut être ni changée ni réinitialisée. Si elle a été exposée, la seule réponse est de générer un portefeuille entièrement neuf et d'y transférer immédiatement tous les actifs."},
  {q: "24 mots sont-ils plus sûrs que 12 ?", a: "En pratique, les deux sont hors de portée de la force brute : 12 mots portent déjà 128 bits d'entropie. La différence est une marge théorique, pas pratique, et la façon dont vous conservez la phrase compte bien davantage que sa longueur."},
  {q: "L'ordre des mots a-t-il de l'importance ?", a: "Oui, entièrement. Les mêmes mots dans un ordre différent produisent un portefeuille différent, valide et vide. Ne les réordonnez jamais et ne les classez jamais par ordre alphabétique."},
  {q: "Quelqu'un peut-il deviner ma seed phrase ?", a: "Non. Il existe 2 048 mots possibles par position, ce qui donne plus de combinaisons qu'il n'y a d'atomes dans l'univers observable. Toute perte réelle vient d'une phrase conservée là où elle pouvait être trouvée, jamais devinée."},
]} />

<p class="doc-subtitle">Douze mots qui sont votre portefeuille</p>

<div class="tldr">

Une seed phrase est une liste de 12 ou 24 mots ordinaires qui encode la clé maîtresse d'un portefeuille crypto. Chaque adresse et chaque clé privée de ce portefeuille en sont dérivées, ce qui signifie que la phrase **est** le portefeuille : quiconque détient ces mots détient les fonds, et contrairement à un mot de passe, elle ne peut jamais être changée ni réinitialisée.

</div>

## La définition

Une [seed phrase](/docs/glossary/seed-phrase) - également appelée phrase de récupération ou mnémonique - est l'encodage lisible par un humain d'un grand nombre aléatoire.

Ce nombre est la graine à partir de laquelle votre portefeuille dérive mathématiquement chaque clé privée qu'il utilisera. Perdez l'application, perdez le téléphone, laissez tomber le portefeuille matériel dans une rivière : saisissez la phrase dans n'importe quel portefeuille compatible et tout revient, car rien n'a jamais été stocké dans l'appareil lui-même.

Les mots n'existent que pour des mains humaines. Une graine brute ressemble à `a3f9c2e8...` sur soixante-quatre caractères, que personne ne peut recopier à la main sans erreur. Douze mots peuvent être écrits, vérifiés et relus à voix haute.

## Pourquoi ce n'est pas un mot de passe

C'est la distinction la plus importante, et celle qui prend les gens au dépourvu.

| | Mot de passe | Seed phrase |
|---|---|---|
| **Peut être changé** | ✅ Oui, à tout moment | ❌ Jamais |
| **Peut être réinitialisé par un fournisseur** | ✅ Généralement | ❌ Par personne |
| **Ce qu'il protège** | Un compte | Toutes les adresses du portefeuille |
| **En cas de fuite** | On le change, on passe à autre chose | Les fonds partent, souvent en quelques minutes |
| **Qui peut aider** | Le support | Personne |

Un mot de passe divulgué est un désagrément assorti d'un lien de réinitialisation. Une seed phrase divulguée est définitive. Il n'y a ni service d'assistance, ni service anti-fraude, ni annulation - tout l'intérêt de l'auto-conservation est qu'aucun tiers n'a autorité sur vos fonds, et cela coupe des deux côtés.

Des robots automatisés scrutent en permanence les dépôts publics, les stockages cloud et les textes collés en ligne à la recherche de tout ce qui correspond au motif de mots [BIP39](/docs/security-academy/seed-phrases/what-is-bip39). Une phrase exposée en ligne est généralement vidée plus vite qu'un humain ne pourrait réagir.

## Pourquoi 12 ou 24 mots

Le nombre de mots reflète la quantité de hasard qui se trouve derrière.

**12 mots** portent 128 bits d'entropie. **24 mots** en portent 256. Les deux sont très largement hors de portée de toute attaque par force brute concevable - la différence est théorique plutôt que pratique, et 12 mots sont déjà indevinables par n'importe quel ordinateur qui existera jamais.

Certains portefeuilles proposent 24 mots comme marge face à d'éventuelles surprises cryptographiques futures. Aucun des deux choix n'est mauvais, et aucun ne vous protège si la phrase est mal conservée - ce dont proviennent l'essentiel des pertes réelles. Voir [Les erreurs courantes avec les seed phrases](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes).

## Les mots ne sont pas du vocabulaire au hasard

Chaque mot provient d'une liste figée de 2 048 mots anglais, définie par le standard BIP39. Cette contrainte est délibérée et rend trois services utiles :

- **Les mots sont courts et sans ambiguïté** - aucun homophone, aucun mot qui se ressemble au premier coup d'œil.
- **Les quatre premières lettres identifient chaque mot de façon unique**, de sorte que `abandon` et `aband` désignent la même entrée, ce qui rend la gravure sur métal réalisable.
- **La liste permet une somme de contrôle**, de sorte qu'un mot mal saisi est détecté au lieu de produire silencieusement un portefeuille différent et vide.

Voir [Comment fonctionnent les seed phrases](/docs/security-academy/seed-phrases/how-seed-phrases-work) pour ce qui se passe entre ces mots et vos clés.

## L'ordre des mots compte

Un malentendu fréquent qui mérite d'être énoncé clairement : la phrase est une séquence ordonnée, pas un ensemble.

Les mêmes douze mots dans un ordre différent produisent une graine entièrement différente, et donc un portefeuille entièrement différent - valide, vide, et qui n'est pas le vôtre. Conserver les mots par ordre alphabétique pour « les retrouver plus facilement » détruit la phrase.

## Où la vôtre devrait résider

Une seed phrase ne devrait jamais exister sur quoi que ce soit de connecté à internet. Ni dans une capture d'écran, ni dans une application de notes, ni dans un gestionnaire de mots de passe cloud, ni dans un e-mail que vous vous adressez.

Il reste deux emplacements sensés : du papier ou du métal conservés physiquement en sécurité, et du matériel qui la stocke hors ligne. Une Seedkeeper fait le second : la phrase rejoint un secure element EAL6+ dépourvu de tout réseau, et ne peut être relue qu'après présentation de l'appareil et saisie d'un PIN. Voir [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases) et, pour le raisonnement complet, [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase).

## FAQ

<details>
<summary>Qu'est-ce qu'une seed phrase ?</summary>

Une liste de 12 ou 24 mots ordinaires encodant la clé maîtresse d'un portefeuille crypto. Chaque clé privée de ce portefeuille en est dérivée : la phrase équivaut donc fonctionnellement aux fonds eux-mêmes.

</details>

<details>
<summary>Une seed phrase est-elle la même chose qu'une clé privée ?</summary>

Pas tout à fait. Une clé privée contrôle une adresse ; une seed phrase génère la clé maîtresse dont chaque adresse du portefeuille est dérivée. Détenir la phrase, c'est les détenir toutes.

</details>

<details>
<summary>Puis-je changer ma seed phrase si elle fuite ?</summary>

Non. Une seed phrase ne peut être ni changée ni réinitialisée. Si elle a été exposée, la seule réponse est de générer un portefeuille entièrement neuf et d'y transférer immédiatement tous les actifs.

</details>

<details>
<summary>24 mots sont-ils plus sûrs que 12 ?</summary>

En pratique, les deux sont hors de portée de la force brute - 12 mots portent déjà 128 bits d'entropie. La différence est une marge théorique, pas pratique, et la façon dont vous conservez la phrase compte bien davantage que sa longueur.

</details>

<details>
<summary>L'ordre des mots a-t-il de l'importance ?</summary>

Oui, entièrement. Les mêmes mots dans un ordre différent produisent un portefeuille différent, valide et vide. Ne les réordonnez jamais et ne les classez jamais par ordre alphabétique.

</details>

<details>
<summary>Quelqu'un peut-il deviner ma seed phrase ?</summary>

Non. Il existe 2 048 mots possibles par position, ce qui donne plus de combinaisons qu'il n'y a d'atomes dans l'univers observable. Toute perte réelle vient d'une phrase conservée là où elle pouvait être trouvée, jamais devinée.

</details>

## Articles liés

- [Comment fonctionnent les seed phrases](/docs/security-academy/seed-phrases/how-seed-phrases-work)
- [Qu'est-ce que BIP39 ?](/docs/security-academy/seed-phrases/what-is-bip39)
- [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases)
