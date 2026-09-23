---
title: "FIDO2"
description: "Le standard ouvert derrière chaque passkey, associant WebAuthn côté navigateur et CTAP2 côté appareil."
keywords: [FIDO2, FIDO Alliance, standard FIDO2, authentification sans mot de passe, certification FIDO2]
sidebar_position: 13
sidebar_label: "FIDO2"
---

FIDO2 est une **spécification**, non un produit ni une entreprise : un document public décrivant comment l'authentification devrait fonctionner, que chacun est libre d'implémenter. Il est publié conjointement par la **FIDO Alliance**, un consortium industriel, et le **W3C**, l'organisme qui normalise le web.

Il couvre tout le trajet du site web au matériel, en deux moitiés :

- **[WebAuthn](/docs/glossary/webauthn)** gère la conversation entre le site web et le navigateur, y compris la vérification de domaine qui rend le phishing impossible.
- **[CTAP2](/docs/glossary/ctap2)** gère la conversation entre le navigateur et votre authentificateur, en NFC, USB ou Bluetooth.

Parce qu'il s'agit d'un standard ouvert, sans redevance ni gardien, un appareil certifié fonctionne avec n'importe quel service conforme sans qu'aucune des deux parties n'ait à connaître l'existence de l'autre. C'est sur cela qu'une [passkey](/docs/glossary/passkey) est construite, et c'est pourquoi changer de navigateur, de téléphone ou de système d'exploitation ne vous prive pas de vos identifiants.

La Seedkeeper PRO est **certifiée FIDO2 Level 1**, certificat `FA001202600016`. En savoir plus dans [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)

## Voir aussi

- [Passkey](/docs/glossary/passkey)
- [WebAuthn](/docs/glossary/webauthn)
- [CTAP2](/docs/glossary/ctap2)
- [U2F](/docs/glossary/u2f)
- [Attestation](/docs/glossary/attestation)
