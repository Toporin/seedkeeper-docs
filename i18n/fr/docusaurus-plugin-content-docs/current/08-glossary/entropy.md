---
title: "Entropie"
description: "Une mesure du hasard réel - et donc la véritable mesure de la difficulté à deviner un mot de passe ou une seed phrase."
keywords: [entropie, hasard, aléa, entropie mot de passe, bits d'entropie, résistance au brute force]
sidebar_position: 12
sidebar_label: "Entropie"
---

L'entropie est une mesure d'**imprévisibilité**. Une chose a une forte entropie quand rien à son sujet ne peut être anticipé : aucun motif, aucune préférence, aucune raison qu'un résultat survienne plutôt qu'un autre. Un lancer de pièce a de l'entropie ; une pièce qui tombe neuf fois sur dix du même côté en a beaucoup moins.

Elle se mesure en **bits**, chaque bit supplémentaire doublant le nombre de résultats possibles. Dix bits, c'est environ mille possibilités ; vingt bits, environ un million.

C'est ce qui en fait la véritable mesure de la solidité d'un secret, car elle compte exactement le nombre de possibilités qu'un attaquant devrait parcourir. Une phrase [BIP39](/docs/glossary/bip39) de 12 mots porte 128 bits, ce qui est hors de portée de toute attaque par force brute qui existera jamais.

Conséquence pratique pour les mots de passe : l'entropie vient de la **longueur et du hasard réel**, pas des caractères spéciaux. Trois exemples, par ordre croissant :

| Mot de passe | Entropie |
|---|---|
| `P@ssw0rd!` | Quasi nulle |
| `john-doe-likes-eating-green-apple` | Un peu, uniquement grâce à la longueur |
| `velvet-tractor-orange-mountain-copper` | Très élevée |

`P@ssw0rd!` respecte toutes les règles de complexité et ne vaut rien, parce que ces substitutions précises sont la première chose que les outils de cassage appliquent aux mots du dictionnaire.

Le deuxième est une vraie amélioration, et uniquement parce qu'il est long. Il reste une phrase grammaticale nommant une personne : il s'appuie donc sur un vocabulaire et une structure qu'un attaquant peut modéliser, et les informations personnelles sont ce qui est essayé en premier. La longueur fait tout le travail ; le hasard n'en fait aucun.

Le troisième, ce sont cinq mots tirés au hasard dans une liste. Aucune grammaire, aucun sens, rien à modéliser. C'est de là que vient réellement l'entropie - voir [What is a Strong Password?](/docs/security-academy/password-security/what-is-a-strong-password)

Et le hasard doit venir d'une machine. Une phrase que vous inventez suit les motifs de votre propre esprit, et ces motifs sont devinables - ce qui explique précisément la place du deuxième exemple.

## Voir aussi

- [Mot de passe](/docs/glossary/password)
- [Passphrase](/docs/glossary/passphrase)
- [BIP39](/docs/glossary/bip39)
