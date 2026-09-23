---
title: "Chiffrement"
description: "Rendre des données illisibles pour quiconque ne détient pas la bonne clé - le mécanisme derrière les coffres-forts, les sauvegardes et les passkeys."
keywords: [chiffrement, chiffrement symétrique, chiffrement asymétrique, cryptographie à clé publique]
sidebar_position: 5
sidebar_label: "Chiffrement"
---

Le chiffrement transforme des données lisibles en une forme dénuée de sens sans la clé correspondante. C'est ce qui fait d'une base de données volée ou d'un appareil perdu un désagrément plutôt qu'un désastre - à condition que la clé se trouve là où l'attaquant n'est pas.

Deux formes reviennent tout au long de cette documentation, et la différence compte :

Le chiffrement **symétrique** utilise la même clé pour verrouiller et déverrouiller. C'est lui qui protège un coffre-fort de mots de passe, et qui chiffre une [sauvegarde](/docs/glossary/backup) d'appareil à appareil une fois que les deux Seedkeeper se sont accordées sur une clé commune lors de l'appairage. Rapide et simple, mais les deux parties détiennent alors quelque chose qui vaut la peine d'être volé.

Le chiffrement **asymétrique** utilise une paire de clés : ce que l'une verrouille, seule l'autre peut le déverrouiller. C'est sur ce principe que repose une [passkey](/docs/glossary/passkey) - votre appareil conserve la clé privée, le service ne détient que la publique, et rien qui vaille la peine d'être volé n'est jamais transmis. Voir [How Passkeys Work](/docs/security-academy/passkeys/how-passkeys-work).

Sur une Seedkeeper, les clés sont générées et utilisées à l'intérieur du [secure element](/docs/glossary/secure-element), qui ne dispose d'aucune fonction permettant de les relire. Le chiffrement ne vaut jamais mieux que la protection entourant la clé, et c'est tout l'argument en faveur du matériel.

## Voir aussi

- [Secure Element](/docs/glossary/secure-element)
- [Hachage](/docs/glossary/hashing)
- [Coffre-fort](/docs/glossary/vault)
- [Sauvegarde](/docs/glossary/backup)
