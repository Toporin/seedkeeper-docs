---
title: "Gérer vos passkeys depuis votre ordinateur"
description: "Windows et les navigateurs Chromium peuvent définir votre PIN FIDO et gérer vos passkeys sans aucune application. Ce qui marche, et le bouton à éviter."
keywords: [gérer clé de sécurité Windows, chrome settings securityKeys, définir PIN FIDO sans application, supprimer passkey Windows, gestion credentials CTAP2]
sidebar_position: 9
sidebar_label: "Gérer vos passkeys depuis votre ordinateur"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je définir mon PIN FIDO sans installer d'application ?", a: "Oui. Windows le fait via Paramètres, Comptes, Options de connexion, Clé de sécurité, Gérer. Les navigateurs Chromium le font depuis chrome://settings/securityKeys, sur Windows, macOS et Linux indifféremment."},
  {q: "Puis-je supprimer une passkey depuis Windows ?", a: "Oui, individuellement, depuis le même écran de gestion des clés de sécurité. L'appareil expose la gestion des credentials via CTAP2 standard : n'importe quel outil conforme peut donc lister et retirer des entrées."},
  {q: "Quelle différence entre Change PIN et Reset ?", a: "Change PIN remplace le PIN et laisse vos passkeys intactes. Reset rétablit l'état d'usine de l'applet FIDO et efface définitivement toutes les passkeys de l'appareil ainsi que le PIN. Il n'y a aucune annulation possible."},
  {q: "Cela fonctionne-t-il sur macOS et Linux ?", a: "Via un navigateur Chromium à l'adresse chrome://settings/securityKeys, oui. La voie des paramètres Windows est propre à Windows, mais celle du navigateur couvre les trois plateformes."},
  {q: "Puis-je gérer mes codes OTP depuis Windows ?", a: "Non. Ces outils parlent CTAP2, qui ne couvre que les passkeys. Les codes OTP, le PIN d'accès OTP et le gestionnaire de mots de passe résident dans des applets distincts et nécessitent les applications Seedkeeper."},
]} />

<p class="doc-subtitle">Aucune application nécessaire sur ordinateur</p>

<p class="platform-note">Desktop</p>

<div class="tldr">

Votre Seedkeeper PRO implémente la gestion standard des credentials CTAP2 : Windows et les navigateurs Chromium peuvent donc définir votre PIN FIDO, lister ou supprimer vos passkeys sans aucune application installée. Pratique sur un poste où vous préférez ne rien installer, ou quand vous êtes déjà dans les réglages du navigateur.

</div>

## Pourquoi cela fonctionne

Rien ici n'est une fonctionnalité propre à Seedkeeper. Votre appareil déclare `credMgmt: true` dans ses capacités CTAP2, ce qui signifie que la gestion des credentials est exposée par le protocole standard plutôt que par un canal propriétaire.

N'importe quel outil conforme peut donc le faire. Windows en fournit un, Chromium un autre, et les deux fonctionnent en NFC ou via un lecteur à contact exactement comme l'application. Voir [Device Capabilities](/docs/developers/device-capabilities#authenticator-options) pour les métadonnées brutes.

## Ce que vous pouvez faire depuis Windows

**Paramètres** → **Comptes** → **Options de connexion** → **Clé de sécurité** → **Gérer**

Présentez votre Seedkeeper PRO lorsqu'on vous le demande : insérez la carte dans un lecteur à contact, ou approchez la carte ou la bague d'un lecteur NFC.

De là :

- **Définir un PIN**, si l'appareil n'en a pas encore
- **Changer le PIN**, s'il en a un
- **Consulter les passkeys** enregistrées sur l'appareil
- **Supprimer des passkeys individuellement**

Les règles du PIN sont les mêmes quel que soit l'outil : numérique, quatre chiffres minimum, huit tentatives avant verrouillage de l'applet. Voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

## Ce que vous pouvez faire depuis Chrome

Les navigateurs fondés sur Chromium - Chrome, Edge, Brave - exposent la même capacité à l'adresse :

```
chrome://settings/securityKeys
```

Deux sections comptent :

- **Create a PIN** définit ou change le PIN FIDO
- **Sign-in data** liste les passkeys de l'appareil et permet de les retirer une par une

Cette voie fonctionne sur **Windows, macOS et Linux**, ce qui en fait l'option la plus portable. Si vous êtes sur un Mac ou une machine Linux et cherchez l'équivalent de l'écran Windows ci-dessus, c'est ici.

## Le bouton à éviter

Les deux écrans proposent **Reset** à côté des options de PIN, et il ne fait pas du tout la même chose que ses voisins.

:::danger[Reset efface tout ce que contient l'applet FIDO]
Reset n'est pas une réinitialisation de PIN. Il rétablit l'état d'usine de l'applet FIDO, effaçant définitivement **toutes les passkeys enregistrées sur l'appareil** ainsi que le PIN lui-même. Il n'y a ni annulation ni récupération.

Utilisez **Change PIN** pour changer un PIN. Utilisez **Delete** sur une entrée précise pour retirer une passkey. N'utilisez Reset que si vous avez décidé de tout reprendre à zéro - voir [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper).
:::

La confusion est facile parce que les options se trouvent côte à côte, et que leur libellé ne laisse rien deviner de la différence de conséquences.

## Ce que vous ne pouvez pas faire ici

Ces outils parlent CTAP2, et CTAP2 ne couvre que les passkeys. Trois choses restent dans les applications :

| Tâche | Où |
|---|---|
| Codes OTP - ajouter, consulter, supprimer | [Seedkeeper PRO App](/docs/product-documentation/otp-authenticator/adding-a-totp-account) |
| Le PIN d'accès OTP | [Seedkeeper PRO App](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin) |
| Mots de passe, notes sécurisées, seed phrases | [Seedkeeper App ou Satochip-Utils App](/docs/product-documentation/password-manager/creating-a-new-password) |

Chacune réside dans un applet différent doté de son propre PIN, et aucun navigateur ni système d'exploitation ne les expose. Voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour comprendre comment les trois applets s'articulent.

## FAQ

<details>
<summary>Puis-je définir mon PIN FIDO sans installer d'application ?</summary>

Oui. Windows le fait via Paramètres, Comptes, Options de connexion, Clé de sécurité, Gérer. Les navigateurs Chromium le font depuis `chrome://settings/securityKeys`, sur Windows, macOS et Linux indifféremment.

</details>

<details>
<summary>Puis-je supprimer une passkey depuis Windows ?</summary>

Oui, individuellement, depuis le même écran de gestion des clés de sécurité. L'appareil expose la gestion des credentials via CTAP2 standard : n'importe quel outil conforme peut donc lister et retirer des entrées.

</details>

<details>
<summary>Quelle différence entre Change PIN et Reset ?</summary>

Change PIN remplace le PIN et laisse vos passkeys intactes. Reset rétablit l'état d'usine de l'applet FIDO et efface définitivement toutes les passkeys de l'appareil ainsi que le PIN. Il n'y a aucune annulation possible.

</details>

<details>
<summary>Cela fonctionne-t-il sur macOS et Linux ?</summary>

Via un navigateur Chromium à l'adresse `chrome://settings/securityKeys`, oui. La voie des paramètres Windows est propre à Windows, mais celle du navigateur couvre les trois plateformes.

</details>

<details>
<summary>Puis-je gérer mes codes OTP depuis Windows ?</summary>

Non. Ces outils parlent CTAP2, qui ne couvre que les passkeys. Les codes OTP, le PIN d'accès OTP et le gestionnaire de mots de passe résident dans des applets distincts et nécessitent les applications Seedkeeper.

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Gérer vos passkeys](/docs/product-documentation/passkeys/managing-passkeys)
- [Utiliser vos passkeys sur plusieurs appareils](/docs/product-documentation/passkeys/using-passkeys-across-devices)
- [Réinitialiser votre Seedkeeper](/docs/troubleshooting/resetting-your-seedkeeper)
- [Problèmes de PIN et verrouillages](/docs/troubleshooting/pin-problems-and-lockouts)
- [Device Capabilities](/docs/developers/device-capabilities)
