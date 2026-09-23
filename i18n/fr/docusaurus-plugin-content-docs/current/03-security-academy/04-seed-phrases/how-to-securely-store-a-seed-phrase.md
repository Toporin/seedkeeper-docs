---
title: "Comment conserver une seed phrase en sécurité"
description: "Papier, métal ou matériel - les options réalistes pour garder une seed phrase secrète et lisible pendant des années, et survivre au feu, au vol et au temps."
keywords: [conserver seed phrase, stockage seed phrase, sauvegarde métal, stockage hors ligne, protéger phrase de récupération, coffre seed phrase]
sidebar_position: 4
sidebar_label: "Comment conserver une seed phrase en sécurité"
---

import FaqSchema from '@site/src/components/FaqSchema';
import BuySeedkeeperPro from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-seedkeeper-pro.mdx';

<FaqSchema items={[
  {q: "Quelle est la façon la plus sûre de conserver une seed phrase ?", a: "Deux copies sur un support résistant au feu, comme du métal frappé, conservées dans des lieux physiquement distincts, sans que rien ne soit jamais stocké sur un appareil connecté à internet. Ajoutez un secure element matériel si vous souhaitez que la phrase soit illisible pour celui qui la trouve."},
  {q: "Puis-je conserver ma seed phrase dans un gestionnaire de mots de passe ?", a: "Pas dans un gestionnaire synchronisé dans le cloud. Votre phrase serait alors protégée par un mot de passe maître et par l'infrastructure d'un fournisseur, deux éléments qui peuvent être compromis. Un appareil hors ligne ou un support physique la maintient hors de cette chaîne."},
  {q: "Est-il prudent de photographier ma seed phrase ?", a: "Non. Les photothèques de téléphone se synchronisent automatiquement dans le cloud, et une photo est immédiatement lisible par quiconque atteint ce compte. C'est l'une des façons les plus courantes de perdre une phrase."},
  {q: "Dois-je découper ma seed phrase en plusieurs parties ?", a: "En général non, sauf si vous utilisez un schéma conçu pour cela. Un découpage improvisé réduit la difficulté de recherche pour quiconque détient un fragment et multiplie le risque qu'une partie perdue rende le reste inutilisable."},
  {q: "Combien de copies de ma seed phrase dois-je conserver ?", a: "Deux est le minimum pratique, dans des lieux physiquement distincts. Une seule copie expose à une perte totale par un simple incendie ou une inondation ; de nombreuses copies dispersées à proximité multiplient le risque qu'une d'elles soit trouvée."},
  {q: "Où conserver ma passphrase BIP39 ?", a: "Ailleurs que la phrase elle-même. Conservée ensemble, elle n'apporte rien, puisque quiconque trouve les deux dispose d'un accès complet. Séparée, elle fait que trouver les mots écrits ne suffit pas."},
]} />

<p class="doc-subtitle">Secrète, durable, et encore lisible dans dix ans</p>

<div class="tldr">

Une [seed phrase](/docs/glossary/seed-phrase) doit survivre à deux menaces opposées à la fois : être **trouvée** par quelqu'un d'autre, et être **perdue** par vous. La plupart des gens résolvent l'une et oublient l'autre. La réponse praticable tient en au moins deux copies, dans des lieux physiquement distincts, sur des supports qui survivent au feu et à l'eau, sans que rien ne touche jamais un appareil connecté à internet.

</div>

## Les deux modes d'échec

Chaque décision de conservation est un arbitrage entre deux façons de tout perdre.

**La divulgation.** Quelqu'un trouve la phrase - un cambrioleur, un colocataire, une synchronisation cloud que vous aviez oubliée, une sauvegarde photo automatique. Les fonds partent en quelques minutes et il n'existe aucun recours.

**La perte.** Incendie, inondation, déménagement, encre effacée, ou simplement l'oubli de l'endroit où vous l'aviez rangée. Les fonds sont toujours là, visibles sur la chaîne, et définitivement hors d'atteinte.

Optimiser fortement pour l'une crée l'autre. Une copie unique emmurée est à l'abri de la divulgation et à un incendie de la perte totale. Trois copies éparpillées dans la maison sont à l'abri de la perte et à un cambriolage de la divulgation. La réponse est la redondance **plus** la séparation, pas l'une ou l'autre.

## La règle absolue : rien de connecté

Avant tout le reste, la seule règle sans exception.

**Une seed phrase ne doit jamais exister sur un appareil qui touche à internet.** Cela signifie aucune photo, aucune capture d'écran, aucune application de notes, aucun brouillon d'e-mail, aucun gestionnaire de mots de passe cloud, aucun message que vous vous adressez, aucun fichier texte « provisoire ».

Les photothèques de téléphone se synchronisent automatiquement. Les applications de notes aussi. Un fichier supprimé d'un ordinateur portable survit souvent des mois dans une sauvegarde. Et des robots automatisés scrutent en permanence les dépôts publics et les stockages exposés à la recherche de tout ce qui correspond au motif de mots BIP39.

Saisir une phrase dans un site web est pire encore, quoi que le site prétende en faire. Il n'existe aucune raison légitime pour une page web de demander votre seed phrase, jamais.

## Option 1 : le papier

L'option par défaut, meilleure que sa réputation - à condition d'en accepter les limites.

**Ses atouts :** ne coûte rien, aucune technologie susceptible de tomber en panne, lisible par quiconque devra récupérer le portefeuille après vous.

**Ses faiblesses :** brûle, se détrempe, s'efface, se déchire, et se lit d'un coup d'œil par celui qui la trouve.

Si vous utilisez du papier, préférez le crayon à l'encre - le graphite ne s'efface ni ne coule - écrivez en capitales bien nettes, numérotez explicitement les mots, et scellez le tout dans un contenant étanche. Puis traitez cela comme un point de départ plutôt que comme une réponse définitive.

## Option 2 : le métal

La réponse habituelle pour des montants significatifs, et la raison en est simple : un incendie domestique atteint des températures qui détruisent le papier bien avant d'inquiéter l'acier.

Plaques à frapper, cartes à graver et tuiles de lettres sont toutes vendues pour cela. Comme les mots BIP39 sont identifiés de façon unique par leurs **quatre premières lettres**, il suffit d'inscrire quatre caractères par mot, ce qui rend le frappage réalisable.

**Ses atouts :** survit au feu, à l'eau, à des décennies.

**Ses faiblesses :** coûte de l'argent, demande une heure de travail, et se lit aussi facilement que du papier pour qui la trouve. Le métal résout la perte, pas la divulgation.

## Option 3 : un appareil matériel

Un secure element conserve la phrase hors ligne et ne la libère qu'après saisie d'un PIN.

C'est ici que la règle du « rien de numérique » demande une lecture précise. Elle existe parce que les appareils polyvalents sont connectés, exécutent des logiciels quelconques et se synchronisent sans demander. Un secure element ne fait rien de tout cela : aucune pile réseau, aucun système d'exploitation, rien à installer, et aucune voie pour extraire les données sans le PIN.

Une Seedkeeper conserve une seed phrase aux côtés d'une passphrase optionnelle et d'un descripteur de portefeuille, sur une puce certifiée EAL6+ - voir [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases). Elle contient également plusieurs phrases à la fois, ce qui compte si vous gérez plus d'un portefeuille.

**Ses atouts :** illisible pour qui la trouve, compacte, résiste à la manipulation, contient plusieurs phrases et d'autres secrets.

**Ses faiblesses :** un appareil à ne pas égarer, et un PIN à ne pas oublier.

<BuySeedkeeperPro />

## Conservez la passphrase séparément

Si vous utilisez une [passphrase](/docs/security-academy/seed-phrases/what-is-bip39#la-passphrase-optionnelle) BIP39, la garder à côté de la phrase en annule tout l'intérêt.

La passphrase existe pour que trouver les mots ne suffise pas. Écrite sur la même feuille de papier, elle devient décorative. Un autre lieu, un autre support, et mémorisée à part.

## Une organisation qui fonctionne vraiment

Rien d'exotique, et cela couvre les deux modes d'échec :

1. **Une copie principale** en métal, chez vous, à un endroit ni évident ni étiqueté.
2. **Une seconde copie** dans un lieu réellement différent - chez un proche, dans un coffre bancaire, dans une seconde résidence. Un autre bâtiment, idéalement une autre ville.
3. **La passphrase**, si vous en utilisez une, conservée à l'écart des deux.
4. **Un appareil matériel** si vous préférez quelque chose qui ne se lise pas d'un coup d'œil, ou si vous détenez plusieurs phrases.
5. **Une restauration de test** dans un portefeuille, une fois, avant de vous reposer sur tout cela.

C'est ce dernier point que les gens sautent et regrettent. Une sauvegarde que vous n'avez jamais restaurée est une hypothèse, pas une sauvegarde.

## Pensez à ce qui se passe après vous

L'auto-conservation a un corollaire inconfortable : si personne ne peut accéder à votre phrase, personne ne le peut, votre famille comprise.

Décidez délibérément si les actifs doivent pouvoir être récupérés par quelqu'un d'autre et, si oui, laissez-lui de quoi agir - où se trouvent les copies et quoi en faire - sans en laisser assez pour un inconnu qui trouverait la même note. Une lettre scellée confiée à une personne de confiance, ou des instructions qui n'ont de sens que combinées à quelque chose qu'elle détient déjà, sont deux approches praticables. Voir [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained) pour le même problème appliqué aux comptes.

## FAQ

<details>
<summary>Quelle est la façon la plus sûre de conserver une seed phrase ?</summary>

Deux copies sur un support résistant au feu, comme du métal frappé, conservées dans des lieux physiquement distincts, sans que rien ne soit jamais stocké sur un appareil connecté à internet. Ajoutez un secure element matériel si vous souhaitez que la phrase soit illisible pour celui qui la trouve.

</details>

<details>
<summary>Puis-je conserver ma seed phrase dans un gestionnaire de mots de passe ?</summary>

Pas dans un gestionnaire synchronisé dans le cloud. Votre phrase serait alors protégée par un mot de passe maître et par l'infrastructure d'un fournisseur, deux éléments qui peuvent être compromis. Un appareil hors ligne ou un support physique la maintient hors de cette chaîne.

</details>

<details>
<summary>Est-il prudent de photographier ma seed phrase ?</summary>

Non. Les photothèques de téléphone se synchronisent automatiquement dans le cloud, et une photo est immédiatement lisible par quiconque atteint ce compte. C'est l'une des façons les plus courantes de perdre une phrase.

</details>

<details>
<summary>Dois-je découper ma seed phrase en plusieurs parties ?</summary>

En général non, sauf si vous utilisez un schéma conçu pour cela. Un découpage improvisé réduit la difficulté de recherche pour quiconque détient un fragment et multiplie le risque qu'une partie perdue rende le reste inutilisable.

</details>

<details>
<summary>Combien de copies de ma seed phrase dois-je conserver ?</summary>

Deux est le minimum pratique, dans des lieux physiquement distincts. Une seule copie expose à une perte totale par un simple incendie ou une inondation ; de nombreuses copies dispersées à proximité multiplient le risque qu'une d'elles soit trouvée.

</details>

<details>
<summary>Où conserver ma passphrase BIP39 ?</summary>

Ailleurs que la phrase elle-même. Conservée ensemble, elle n'apporte rien, puisque quiconque trouve les deux dispose d'un accès complet. Séparée, elle fait que trouver les mots écrits ne suffit pas.

</details>

## Articles liés

- [Les erreurs courantes avec les seed phrases](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes)
- [Qu'est-ce qu'une seed phrase ?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [Qu'est-ce que BIP39 ?](/docs/security-academy/seed-phrases/what-is-bip39)
- [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
