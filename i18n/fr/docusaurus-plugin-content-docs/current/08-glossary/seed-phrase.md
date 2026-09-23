---
title: "Seed Phrase"
description: "Liste de 12 ou 24 mots ordinaires qui encode toutes les clés privées d'un portefeuille crypto - le portefeuille lui-même, sous forme lisible."
keywords: [seed phrase, phrase de récupération, phrase mnémonique, 12 mots, 24 mots, sauvegarde portefeuille crypto]
sidebar_position: 27
sidebar_label: "Seed Phrase"
---

Une seed phrase - également appelée phrase de récupération ou mnémonique - est l'encodage lisible par un humain du grand nombre aléatoire dont un portefeuille crypto dérive chaque clé privée qu'il utilisera. Saisissez-la dans n'importe quel portefeuille compatible et tout revient, car rien n'a jamais été stocké dans l'appareil lui-même.

Quatre propriétés méritent d'être connues :

**Les mots proviennent d'une liste figée.** [BIP39](/docs/glossary/bip39) définit exactement 2 048 mots anglais, choisis pour qu'aucun ne puisse être confondu avec un autre et pour que les quatre premières lettres identifient chacun de façon unique. C'est cette contrainte qui rend la gravure d'une phrase sur métal réalisable.

**L'ordre fait partie du secret.** Les mêmes mots dans une autre séquence produisent un portefeuille entièrement différent - valide, vide, et qui n'est pas le vôtre. Ne les classez jamais par ordre alphabétique et ne les conservez jamais sans leur position.

**Une somme de contrôle détecte les fautes de frappe.** Quelques bits dérivés de votre entropie sont intégrés à la phrase : un mot mal orthographié ou mal placé la fait échouer à la validation, au lieu d'ouvrir silencieusement le portefeuille vide de quelqu'un d'autre.

**Elle ne peut pas être changée.** Contrairement à un mot de passe, il n'y a ni réinitialisation ni service d'assistance. Quiconque détient ces mots détient les fonds, définitivement - c'est pourquoi elle n'a jamais sa place sur quoi que ce soit de connecté à internet.

En savoir plus dans [What is a Seed Phrase?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)

## Voir aussi

- [BIP39](/docs/glossary/bip39)
- [Passphrase](/docs/glossary/passphrase)
- [Descripteur](/docs/glossary/descriptor)
- [Entropie](/docs/glossary/entropy)
- [Sauvegarde](/docs/glossary/backup)
