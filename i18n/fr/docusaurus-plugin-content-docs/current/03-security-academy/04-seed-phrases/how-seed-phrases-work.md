---
title: "Comment fonctionnent les seed phrases"
description: "De l'entropie aux mots puis aux clés - les quatre étapes qui transforment 12 mots en portefeuille déterministe, et le rôle de la somme de contrôle."
keywords: [fonctionnement seed phrase, entropie vers mnémonique, somme de contrôle BIP39, portefeuille déterministe, dérivation BIP32, graine vers clé privée]
sidebar_position: 2
sidebar_label: "Comment fonctionnent les seed phrases"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Comment une seed phrase génère-t-elle les clés de mon portefeuille ?", a: "Les mots sont reconvertis en nombre aléatoire d'origine, étirés en une graine de 512 bits par PBKDF2, puis utilisés pour dériver une clé maîtresse. Chaque adresse du portefeuille est ensuite dérivée de cette clé maîtresse selon un arbre déterministe."},
  {q: "À quoi sert la somme de contrôle BIP39 ?", a: "À détecter les erreurs. Quelques bits issus d'un haché de votre entropie sont ajoutés à la phrase : modifier ou mal saisir un mot fait échouer la validation au lieu d'ouvrir silencieusement un autre portefeuille vide."},
  {q: "Pourquoi les seed phrases font-elles 12 ou 24 mots ?", a: "Parce que chaque mot encode 11 bits. 128 bits d'entropie plus une somme de contrôle de 4 bits se divisent en exactement 12 mots ; 256 bits plus 8 bits donnent exactement 24."},
  {q: "Deux personnes peuvent-elles générer la même seed phrase ?", a: "En pratique, non. Avec 2 048 options par position, le nombre de phrases possibles dépasse largement le nombre d'atomes de l'univers observable, à condition que le hasard ait été généré correctement."},
  {q: "Ma phrase a été restaurée mais le solde est nul. Que s'est-il passé ?", a: "Le plus souvent, un décalage de chemin de dérivation : le portefeuille examine une autre branche de l'arbre de clés que celle où se trouvent vos fonds. Vérifiez que la phrase est valide, puis essayez le chemin de dérivation utilisé par votre portefeuille d'origine."},
]} />

<p class="doc-subtitle">Des nombres aléatoires aux mots, puis aux clés</p>

<div class="tldr">

Votre portefeuille génère un grand nombre aléatoire, le découpe en blocs de 11 bits, et associe chaque bloc à un mot d'une liste figée de 2 048 mots. Une somme de contrôle est ajoutée pour détecter les fautes de frappe. La même phrase régénère toujours les mêmes clés, sur n'importe quel portefeuille, et c'est pourquoi une [seed phrase](/docs/glossary/seed-phrase) restaure tout sans aucune sauvegarde des clés elles-mêmes.

</div>

## Étape 1 : générer du hasard

Tout commence par l'entropie - un grand nombre aléatoire produit par votre portefeuille, idéalement à partir d'une source matérielle plutôt que logicielle.

Pour une phrase de 12 mots, cela représente **128 bits**. Pour 24 mots, **256 bits**. Ce nombre est le véritable secret ; les mots ne sont qu'une façon de l'écrire.

La qualité de ce hasard est le fondement de tout ce qui repose dessus. Un portefeuille doté d'une source aléatoire faible produit des graines devinables, quel que soit le nombre de mots affichés - une raison de plus pour que générer sa phrase sur un appareil de confiance compte davantage que le nombre de mots.

## Étape 2 : ajouter une somme de contrôle

L'entropie est hachée avec SHA-256, et les premiers bits de ce haché sont ajoutés à la fin - quatre bits pour 128 bits d'entropie, huit bits pour 256.

C'est ce qui rend la phrase autovérifiable. Changez un mot et la somme de contrôle ne correspond plus : un portefeuille conforme rejette alors la phrase au lieu d'ouvrir silencieusement un portefeuille différent et vide.

C'est aussi pourquoi la Seedkeeper App refuse une phrase qui ne se vérifie pas plutôt que de l'enregistrer quand même - voir [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases). Une erreur détectée à la saisie vous coûte trente secondes ; la même erreur détectée des années plus tard vous coûte tout.

## Étape 3 : convertir les bits en mots

L'entropie assortie de sa somme de contrôle est découpée en blocs de **11 bits**. Chaque bloc est un nombre de 0 à 2 047, et chaque nombre désigne un mot de la liste [BIP39](/docs/security-academy/seed-phrases/what-is-bip39).

L'arithmétique tombe juste :

| Entropie | + somme de contrôle | Total de bits | ÷ 11 | Mots |
|---|---|---|---|---|
| 128 bits | 4 bits | 132 | 12 | **12 mots** |
| 256 bits | 8 bits | 264 | 24 | **24 mots** |

Voilà pourquoi les phrases font ces longueurs précises plutôt que n'importe quel nombre, et pourquoi l'ordre des mots n'est pas négociable : la position détermine quels 11 bits chaque mot représente.

## Étape 4 : dériver la graine, puis les clés

Les mots sont étirés en une graine de 512 bits à l'aide de PBKDF2 et de 2 048 itérations de HMAC-SHA512. Si vous avez défini une [passphrase](/docs/glossary/passphrase) optionnelle, elle est incorporée à ce stade - et c'est pourquoi une passphrase produit un portefeuille entièrement différent plutôt que de simplement verrouiller l'existant.

À partir de cette graine, le portefeuille dérive une clé maîtresse, et de cette clé maîtresse un arbre illimité de clés enfants et d'adresses. C'est le sens de « portefeuille déterministe » : la même phrase produit toujours le même arbre, dans le même ordre, sur n'importe quel portefeuille conforme.

La conséquence pratique est celle sur laquelle tout le monde s'appuie sans y penser. Votre portefeuille ne stocke aucune clé qu'il vaudrait la peine de sauvegarder, puisqu'il peut toutes les régénérer à partir de la phrase à tout moment.

## Pourquoi n'importe quel portefeuille peut restaurer votre phrase

Parce que chacune des étapes ci-dessus est un standard publié, une phrase générée par un portefeuille fonctionne dans un autre. Cette portabilité est un véritable avantage : vous n'êtes pas prisonnier d'un fournisseur susceptible de disparaître.

Deux réserves à connaître :

**Les chemins de dérivation peuvent différer.** Les portefeuilles adoptent parfois des conventions différentes quant à l'endroit où chercher dans l'arbre de clés. Un portefeuille restauré affichant un solde nul relève plus souvent d'un décalage de chemin que d'une phrase perdue, et la plupart des portefeuilles permettent d'indiquer le chemin manuellement.

**Tous les portefeuilles n'utilisent pas BIP39.** Electrum, par exemple, dispose de son propre schéma mnémonique doté d'une autre somme de contrôle. Une phrase de l'un ne sera pas validée par l'autre.

## Ce que cela implique pour la conservation

Deux propriétés découlent directement de ces mécanismes, et toutes deux façonnent la manière de conserver une phrase.

**La phrase est tout le portefeuille.** Il n'y a rien d'autre à protéger, et aucun second facteur derrière elle. Quiconque lit ces mots dans l'ordre peut reconstituer chaque clé.

**Elle n'expire jamais.** Contrairement à un mot de passe, il n'y a ni rotation, ni réinitialisation, ni révocation. Ce que vous écrivez aujourd'hui doit rester à la fois secret et lisible aussi longtemps que vous détenez les actifs - voir [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase).

## FAQ

<details>
<summary>Comment une seed phrase génère-t-elle les clés de mon portefeuille ?</summary>

Les mots sont reconvertis en nombre aléatoire d'origine, étirés en une graine de 512 bits par PBKDF2, puis utilisés pour dériver une clé maîtresse. Chaque adresse du portefeuille est ensuite dérivée de cette clé maîtresse selon un arbre déterministe.

</details>

<details>
<summary>À quoi sert la somme de contrôle BIP39 ?</summary>

À détecter les erreurs. Quelques bits issus d'un haché de votre entropie sont ajoutés à la phrase : modifier ou mal saisir un mot fait échouer la validation au lieu d'ouvrir silencieusement un autre portefeuille vide.

</details>

<details>
<summary>Pourquoi les seed phrases font-elles 12 ou 24 mots ?</summary>

Parce que chaque mot encode 11 bits. 128 bits d'entropie plus une somme de contrôle de 4 bits se divisent en exactement 12 mots ; 256 bits plus 8 bits donnent exactement 24.

</details>

<details>
<summary>Deux personnes peuvent-elles générer la même seed phrase ?</summary>

En pratique, non. Avec 2 048 options par position, le nombre de phrases possibles dépasse largement le nombre d'atomes de l'univers observable, à condition que le hasard ait été généré correctement.

</details>

<details>
<summary>Ma phrase a été restaurée mais le solde est nul. Que s'est-il passé ?</summary>

Le plus souvent, un décalage de chemin de dérivation : le portefeuille examine une autre branche de l'arbre de clés que celle où se trouvent vos fonds. Vérifiez que la phrase est valide, puis essayez le chemin de dérivation utilisé par votre portefeuille d'origine.

</details>

## Articles liés

- [Qu'est-ce qu'une seed phrase ?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [Qu'est-ce que BIP39 ?](/docs/security-academy/seed-phrases/what-is-bip39)
- [Les erreurs courantes avec les seed phrases](/docs/security-academy/seed-phrases/common-seed-phrase-mistakes)
- [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases)
