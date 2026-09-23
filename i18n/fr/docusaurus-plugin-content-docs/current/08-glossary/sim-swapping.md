---
title: "SIM Swapping"
description: "Convaincre un opérateur mobile de transférer votre numéro vers la SIM d'un attaquant, pour que chaque code SMS lui parvienne à votre place."
keywords: [SIM swapping, échange de SIM, détournement de numéro, risque SMS 2FA, fraude au portage]
sidebar_position: 28
sidebar_label: "SIM Swapping"
---

Le SIM swapping est une attaque contre votre **opérateur mobile**, pas contre vous ni contre votre téléphone.

L'attaquant rassemble assez d'informations personnelles pour être crédible - beaucoup sont publiques, ou proviennent de fuites antérieures - puis contacte votre opérateur en se faisant passer pour vous. Il déclare un téléphone perdu ou endommagé et demande le transfert du numéro vers une nouvelle SIM en sa possession. Si le conseiller est convaincu, votre numéro sonne désormais sur son appareil.

À partir de cet instant, chaque code SMS qui vous était destiné lui parvient. Réinitialisations de mot de passe, codes à usage unique, liens de récupération de compte : tout. Votre propre téléphone devient généralement silencieux, ce qui est souvent le premier signe que quelque chose ne va pas, et les dégâts sont alors déjà en cours.

Notez ce que l'attaque n'exige pas : **aucun logiciel malveillant, aucun accès à votre appareil, et aucune compétence technique au-delà d'un appel téléphonique convaincant.** Vous ne pouvez d'ailleurs pas y faire grand-chose de votre côté, puisque la décision est prise par le service client de quelqu'un d'autre.

Deux mesures aident :

- **Demandez à votre opérateur un code de portabilité ou un verrouillage de compte.** La plupart en proposent un ; presque personne ne l'active.
- **Abandonnez les codes SMS** partout où une alternative existe. Un secret [TOTP](/docs/glossary/totp) réside sur votre appareil et non sur un numéro qu'un opérateur peut réattribuer, et une [passkey](/docs/glossary/passkey) n'y est pas exposée du tout.

C'est l'argument le plus fort contre le SMS comme second facteur, et la raison pour laquelle les détenteurs de crypto en sont spécifiquement les cibles. Voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## Voir aussi

- [2FA - Authentification à deux facteurs](/docs/glossary/2fa)
- [TOTP](/docs/glossary/totp)
- [Phishing](/docs/glossary/phishing)
- [Passkey](/docs/glossary/passkey)
