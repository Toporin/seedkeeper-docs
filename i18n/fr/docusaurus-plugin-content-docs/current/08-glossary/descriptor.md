---
title: "Descripteur"
description: "Chaîne de texte décrivant la façon dont un portefeuille crypto dérive ses adresses, permettant de reconstruire une vue en lecture seule sans les clés privées."
keywords: [descripteur, wallet descriptor, output descriptor, chemin de dérivation]
sidebar_position: 10
sidebar_label: "Descripteur"
---

Un descripteur de portefeuille est une chaîne de texte compacte qui consigne la façon dont un portefeuille génère ses adresses : le type de script, les clés publiques concernées et le chemin de dérivation. Il ne contient aucune clé privée, ce qui permet de le conserver ou de le partager pour reconstruire une vue en lecture seule d'un portefeuille, sans donner la capacité de dépenser.

C'est lui qui indique au logiciel où chercher après une restauration, et c'est pourquoi une seed phrase peut être correcte tout en affichant un solde nul sans lui. Une Seedkeeper stocke un descripteur optionnel aux côtés d'une [seed phrase](/docs/glossary/seed-phrase) - voir [Storing Seed Phrases](/docs/product-documentation/password-manager/storing-seed-phrases).

## Voir aussi

- [Seed Phrase](/docs/glossary/seed-phrase)
- [BIP39](/docs/glossary/bip39)
- [Passphrase](/docs/glossary/passphrase)
