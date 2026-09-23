---
title: "Device Capabilities"
description: "Le profil technique complet de la Seedkeeper PRO : AAGUID, versions CTAP, algorithmes, extensions, options, limites et transports. Métadonnées brutes."
keywords: [AAGUID Seedkeeper PRO, CTAP2.1, capacités FIDO2, hmac-secret, credProtect, largeBlobs, algorithmes pris en charge, authenticatorGetInfo]
sidebar_position: 2
sidebar_label: "Device Capabilities"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quel est l'AAGUID de la Seedkeeper PRO ?", a: "328dec20-698f-5d33-aed3-97daba53b1b0. C'est la valeur à autoriser dans une politique de restriction de clés en entreprise, comme celle de Microsoft Entra ID."},
  {q: "Quels algorithmes de signature la Seedkeeper PRO prend-elle en charge ?", a: "ES256 uniquement, soit secp256r1_ecdsa_sha256_raw, identifiant COSE -7. Les relying parties qui restreignent pubKeyCredParams à RS256 ou EdDSA échoueront à l'enregistrement."},
  {q: "La Seedkeeper PRO prend-elle en charge hmac-secret et PRF ?", a: "Oui. L'extension CTAP2 hmac-secret est prise en charge, et son fonctionnement de bout en bout a été confirmé via l'extension WebAuthn prf dans les navigateurs fondés sur Chromium, y compris pour dériver une clé de déchiffrement de coffre-fort dans Bitwarden. La prise en charge de prf par les navigateurs varie : testez contre vos navigateurs cibles."},
  {q: "Combien de passkeys la Seedkeeper PRO peut-elle stocker ?", a: "Jusqu'à 90 discoverable credentials, plus 50 identifiants OTP. Les non-discoverable credentials ne consomment aucun stockage sur l'appareil."},
  {q: "La Seedkeeper PRO fonctionne-t-elle en USB ?", a: "Non. Les transports sont le NFC pour les deux formats, plus le contact ISO 7816 pour la carte. Il n'y a ni USB ni Bluetooth, ce qui explique aussi que l'appareil n'ait pas de batterie."},
  {q: "Une intégration iOS exige-t-elle la certification Apple MFi ?", a: "Non. Le programme MFi concerne les accessoires se connectant en Lightning ou en tant qu'accessoires Bluetooth. La Seedkeeper PRO communique uniquement en NFC, ce qui relève de la surface de développement iOS standard. Il vous faut l'entitlement Core NFC tag reading, gratuit et sans rapport avec MFi."},
  {q: "La Seedkeeper PRO prend-elle en charge l'enterprise attestation ?", a: "Elle est implémentée dans le firmware mais actuellement désactivée. L'attestation standard basic_full est disponible, et c'est elle sur laquelle reposent les politiques de restriction de clés fondées sur l'AAGUID."},
  {q: "Que signifie clientPin false dans les métadonnées ?", a: "Qu'aucun PIN n'est actuellement défini sur l'appareil depuis lequel les métadonnées ont été lues. Le protocole client PIN est pris en charge ; l'indicateur rapporte l'état courant, pas une capacité."},
]} />

<p class="doc-subtitle">Le profil technique complet</p>

<div class="tldr">

La Seedkeeper PRO est un authentificateur FIDO2 CTAP2.1 doté d'un secure element matériel, prenant en charge ES256, les resident credentials, `hmac-secret`, `credProtect`, `largeBlobs` et la gestion des credentials, en NFC et en contact ISO 7816. AAGUID `328dec20-698f-5d33-aed3-97daba53b1b0`.

</div>

:::note[Terminologie]
Les noms de champs, d'options, d'extensions et de valeurs de cette page sont ceux des spécifications CTAP2 et WebAuthn, et restent en anglais : ce sont les chaînes exactes que vous rencontrerez dans `authenticatorGetInfo` et dans votre code. Les explications, elles, sont en français.
:::

## Identity

| Champ | Valeur |
|---|---|
| **AAGUID** | `328dec20-698f-5d33-aed3-97daba53b1b0` |
| Certification FIDO | FIDO2 Level 1, certificat `FA001202600016` |
| Secure element | Common Criteria EAL6+ |
| Licence du firmware | AGPLv3 |

L'AAGUID est la valeur à autoriser dans une politique de restriction de clés en entreprise - voir [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide) et [Comment configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id). Le numéro de certificat peut être vérifié dans l'[annuaire de certification de la FIDO Alliance](https://app.fido.cyber-pass.org/certificates/search).

## Protocol Versions

```
FIDO_2_1
FIDO_2_1_PRE
FIDO_2_0
U2F_V2
```

CTAP2.1 est la génération actuelle. `U2F_V2` signifie que les services U2F historiques fonctionnent toujours : un appareil enregistré comme second facteur sur un site ancien continue de fonctionner.

## Cryptography

| Champ | Valeur |
|---|---|
| Algorithme de signature | `secp256r1_ecdsa_sha256_raw` (COSE **ES256**, `-7`) |
| Encodage de clé publique | COSE |
| Type d'attestation | `basic_full` |
| Protection des clés | `hardware`, `secure_element` |

**ES256 est le seul algorithme.** C'est celui que demande l'immense majorité des relying parties, et celui que toute implémentation WebAuthn est tenue de prendre en charge. Si votre service restreint `pubKeyCredParams` à RS256 ou EdDSA seuls, l'enregistrement échouera - autorisez `-7` et cela fonctionne.

L'attestation `basic_full` signifie qu'un certificat de lot est présenté, identifiant la marque et le modèle plutôt que l'appareil individuel.

## User Verification

| Méthode | Détails |
|---|---|
| `none` | Prise en charge - les credentials peuvent être créés et utilisés sans UV |
| `passcode_external` | PIN saisi sur l'hôte, `base: 10`, `minLength: 4`, `maxRetries: 8` |

`base: 10` indique un PIN numérique. `maxRetries: 8` est le nombre de tentatives consécutives échouées avant le verrouillage de l'applet FIDO ; la récupération impose alors de réinitialiser l'applet, ce qui efface toutes les passkeys de l'appareil. Voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

Il n'y a pas de capteur biométrique sur l'appareil. La user verification est le PIN ; la user presence est le contact physique ou l'insertion.

## CTAP2 Extensions

```
uvm
credBlob
credProtect
hmac-secret
largeBlobKey
minPinLength
```

Ce que chacune permet en pratique :

- **`hmac-secret`** - le côté authentificateur de **PRF** dans WebAuthn. Permet à une relying party de dériver un secret symétrique depuis le credential, ce qu'utilisent les applications pour un chiffrement de bout en bout adossé à une passkey. Fonctionnement confirmé de bout en bout via l'extension WebAuthn `prf` dans les navigateurs fondés sur Chromium, y compris pour le déchiffrement du coffre-fort Bitwarden. La prise en charge de `prf` par les navigateurs varie encore : testez contre vos navigateurs cibles.
- **`credProtect`** - politique de protection par credential, contrôlant s'il peut être découvert sans user verification.
- **`credBlob`** - petit blob opaque stocké aux côtés d'un credential.
- **`largeBlobKey`** - matériel de clé pour le stockage `largeBlobs` ci-dessous.
- **`minPinLength`** - permet à une relying party de connaître la longueur minimale de PIN imposée, et à un administrateur de la relever.
- **`uvm`** - remontée de la méthode de user verification employée.

## Authenticator Options

| Option | Valeur | Signification |
|---|---|---|
| `rk` | `true` | Resident (discoverable) credentials pris en charge |
| `credMgmt` | `true` | Gestion des credentials via CTAP2 - lister et supprimer depuis tout client conforme |
| `largeBlobs` | `true` | Stockage large blob pris en charge |
| `pinUvAuthToken` | `true` | Protocole de jeton d'authentification PIN/UV pris en charge |
| `setMinPINLength` | `true` | La longueur minimale du PIN peut être relevée par configuration |
| `authnrCfg` | `true` | `authenticatorConfig` pris en charge |
| `uvAcfg` | `true` | Configuration de la user verification prise en charge |
| `makeCredUvNotRqd` | `true` | Les credentials peuvent être créés sans user verification |
| `alwaysUv` | `false` | UV toujours exigée non activée par défaut |
| `up` | `false` | Indicateur de user presence non réglable séparément |
| `clientPin` | `false` | **Aucun PIN défini sur l'appareil depuis lequel ceci a été lu** - le protocole est pris en charge, la valeur rapporte l'état courant |

`clientPin: false` est une source fréquente de confusion. La valeur rapporte si un PIN est actuellement configuré, pas si la prise en charge du PIN existe. Sur un appareil doté d'un PIN, elle vaut `true`.

`credMgmt: true` signifie que les passkeys peuvent être énumérées et supprimées via l'outillage CTAP2 standard - Paramètres Windows, gestionnaire de clés de sécurité de Chrome - aussi bien que via la [Seedkeeper PRO App](/docs/product-documentation/passkeys/managing-passkeys).

## Storage Limits

| Élément | Limite |
|---|---|
| Discoverable (resident) credentials | **90** |
| Identifiants OTP | **50** |
| Mémoire du gestionnaire de mots de passe | 8 Ko, partagés entre tous les secrets |

Les non-discoverable credentials ne consomment aucun stockage, rien les concernant n'étant conservé sur l'appareil.

Le gestionnaire de mots de passe est un applet distinct de FIDO2 et d'OTP, avec son propre PIN et sa propre mémoire. Voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour comprendre comment les trois PIN s'articulent.

## Transports

| Transport | Carte | Bague |
|---|---|---|
| NFC (ISO 14443) | ✅ | ✅ |
| Contact (ISO 7816) | ✅ | ❌ |
| USB | ❌ | ❌ |
| Bluetooth | ❌ | ❌ |

L'absence d'USB et de Bluetooth signifie aucune batterie, aucune mise à jour de firmware par les airs, et aucune radio au-delà du champ du lecteur. Sur ordinateur, la carte fonctionne dans n'importe quel lecteur de cartes à puce à contact ; les deux formats fonctionnent avec n'importe quel lecteur NFC.

Conséquence pratique pour les tests : votre intégration a besoin d'un lecteur NFC ou à contact, pas d'un port USB.

### Pas de programme MFi pour iOS

Bon à savoir avant de planifier une intégration iOS : parce que l'appareil communique **uniquement en NFC**, il sort entièrement du programme d'accessoires **MFi** d'Apple.

Les accessoires se connectant en Lightning, ou en Bluetooth en tant qu'accessoire appairé, exigent une adhésion MFi, une certification matérielle et une licence d'accessoire Apple. La lecture de tags NFC, non - elle relève de la surface de développement iOS standard, ouverte à tout développeur.

Il vous faut malgré tout l'**entitlement Core NFC tag reading** et vos identifiants d'application ISO 7816 déclarés dans `Info.plist`. Les deux sont gratuits, demandés via votre compte Apple Developer existant, et sans rapport avec MFi. Voir [Mobile SDKs](/docs/developers/mobile-sdks) pour la mise en place.

## Enterprise Attestation

Implémentée dans le firmware, **actuellement désactivée**. Les demandes d'enterprise attestation ne renverront pas d'attestation identifiant l'appareil de façon unique.

L'attestation standard `basic_full` est disponible, et c'est elle que consomment réellement les politiques de restriction de clés en entreprise - autoriser un AAGUID n'exige pas d'enterprise attestation.

## Vérifier par vous-même

Rien de ce qui précède n'exige de faire confiance à cette page.

- La certification FIDO et le metadata statement sont publiés dans l'[annuaire de la FIDO Alliance](https://app.fido.cyber-pass.org/certificates/search).
- Le firmware est sous AGPLv3 - voir [Repositories](/docs/developers/repositories).
- `authenticatorGetInfo` peut être lu depuis n'importe quel appareil que vous détenez, avec l'outillage CTAP2 standard ou la [bibliothèque Python](/docs/developers/python-library-and-cli).

## FAQ

<details>
<summary>Quel est l'AAGUID de la Seedkeeper PRO ?</summary>

`328dec20-698f-5d33-aed3-97daba53b1b0`. C'est la valeur à autoriser dans une politique de restriction de clés en entreprise, comme celle de Microsoft Entra ID.

</details>

<details>
<summary>Quels algorithmes de signature la Seedkeeper PRO prend-elle en charge ?</summary>

ES256 uniquement, soit `secp256r1_ecdsa_sha256_raw`, identifiant COSE `-7`. Les relying parties qui restreignent `pubKeyCredParams` à RS256 ou EdDSA échoueront à l'enregistrement.

</details>

<details>
<summary>La Seedkeeper PRO prend-elle en charge hmac-secret et PRF ?</summary>

Oui. L'extension CTAP2 `hmac-secret` est prise en charge, et son fonctionnement de bout en bout a été confirmé via l'extension WebAuthn `prf` dans les navigateurs fondés sur Chromium - y compris pour dériver une clé de déchiffrement de coffre-fort dans Bitwarden. La prise en charge de `prf` par les navigateurs varie : testez contre vos navigateurs cibles.

</details>

<details>
<summary>Combien de passkeys la Seedkeeper PRO peut-elle stocker ?</summary>

Jusqu'à 90 discoverable credentials, plus 50 identifiants OTP. Les non-discoverable credentials ne consomment aucun stockage sur l'appareil.

</details>

<details>
<summary>La Seedkeeper PRO fonctionne-t-elle en USB ?</summary>

Non. Les transports sont le NFC pour les deux formats, plus le contact ISO 7816 pour la carte. Il n'y a ni USB ni Bluetooth, ce qui explique aussi que l'appareil n'ait pas de batterie.

</details>

<details>
<summary>Une intégration iOS exige-t-elle la certification Apple MFi ?</summary>

Non. Le programme MFi concerne les accessoires se connectant en Lightning ou en tant qu'accessoires Bluetooth. La Seedkeeper PRO communique uniquement en NFC, ce qui relève de la surface de développement iOS standard. Il vous faut l'entitlement Core NFC tag reading, gratuit et sans rapport avec MFi.

</details>

<details>
<summary>La Seedkeeper PRO prend-elle en charge l'enterprise attestation ?</summary>

Elle est implémentée dans le firmware mais actuellement désactivée. L'attestation standard `basic_full` est disponible, et c'est elle sur laquelle reposent les politiques de restriction de clés fondées sur l'AAGUID.

</details>

<details>
<summary>Que signifie clientPin false dans les métadonnées ?</summary>

Qu'aucun PIN n'est actuellement défini sur l'appareil depuis lequel les métadonnées ont été lues. Le protocole client PIN est pris en charge ; l'indicateur rapporte l'état courant, pas une capacité.

</details>

## Articles liés

- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
- [WebAuthn Quickstart](/docs/developers/webauthn-quickstart)
- [Python Library and CLI](/docs/developers/python-library-and-cli)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
