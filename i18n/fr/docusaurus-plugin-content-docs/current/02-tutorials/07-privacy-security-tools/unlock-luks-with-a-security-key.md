---
title: "Comment déverrouiller un disque LUKS avec une clé de sécurité"
description: "Enrôlez votre Seedkeeper PRO comme méthode de déverrouillage LUKS2 avec systemd-cryptenroll, réponse honnête sur les appareils NFC au démarrage comprise."
keywords: [systemd-cryptenroll, LUKS FIDO2, déverrouiller disque clé de sécurité, LUKS2 FIDO2, chiffrement disque clé matérielle, crypttab fido2-device]
sidebar_position: 5
sidebar_label: "Déverrouiller LUKS avec une clé de sécurité"
tags: [linux, luks, fido2, privacy-security-tools]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je déverrouiller un disque LUKS avec une clé de sécurité FIDO2 ?", a: "Oui. systemd-cryptenroll ajoute un appareil FIDO2 comme méthode de déverrouillage sur un volume LUKS2, aux côtés de votre phrase secrète existante. Cela nécessite systemd 248 ou ultérieur, et LUKS2 et non LUKS1."},
  {q: "Cela remplace-t-il ma phrase secrète LUKS ?", a: "Non, et vous ne devriez pas le permettre. La clé est ajoutée comme emplacement supplémentaire. Conserver la phrase secrète est ce qui vous sauve quand l'appareil est perdu, endommagé, ou simplement non détecté au démarrage."},
  {q: "Cela fonctionne-t-il avec un appareil NFC uniquement, au démarrage ?", a: "L'enrôlement et le déverrouillage sur un système démarré fonctionnent. Le déverrouillage au démarrage est plus difficile, car l'initramfs a besoin de pcscd et des pilotes du lecteur, qu'aucune distribution n'inclut par défaut. Considérez le déverrouillage NFC au démarrage comme une configuration avancée plutôt que comme quelque chose qui fonctionne d'emblée."},
  {q: "De quelle version de systemd ai-je besoin ?", a: "La 248 ou ultérieure pour la prise en charge FIDO2 dans systemd-cryptenroll. Debian 12, Ubuntu 22.04 et RHEL 9 embarquent tous une version plus récente."},
  {q: "Ma clé de chiffrement de disque est-elle stockée sur la clé de sécurité ?", a: "Non. L'appareil dérive un secret via l'extension hmac-secret, et ce secret déverrouille l'emplacement. La clé du disque ne quitte jamais l'en-tête LUKS, et l'appareil ne détient rien qui identifie le disque."},
  {q: "Que se passe-t-il si je perds la clé de sécurité ?", a: "Vous déverrouillez avec votre phrase secrète, puis vous retirez l'emplacement orphelin avec systemd-cryptenroll --wipe-slot. C'est toute la raison de conserver la phrase secrète enrôlée."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Le chiffrement intégral du disque, déverrouillé par le matériel</p>

<p class="platform-note">Desktop</p>

<div class="tldr">

`systemd-cryptenroll` peut ajouter un appareil FIDO2 comme méthode de déverrouillage sur un volume **LUKS2**, aux côtés de votre phrase secrète existante. Cela passe par l'extension `hmac-secret`, que la Seedkeeper PRO prend en charge.

**L'enrôlement et le déverrouillage sur un système démarré fonctionnent bien.** Déverrouiller le disque racine au démarrage est une autre affaire avec un appareil NFC uniquement, et cette page explique honnêtement pourquoi.

</div>

## Vue d'ensemble

LUKS conserve la clé maîtresse de votre disque dans un en-tête, chiffrée plusieurs fois dans des **emplacements de clés** distincts. Une phrase secrète déverrouille un emplacement ; un appareil FIDO2 peut en déverrouiller un autre. Ajouter l'un ne retire pas l'autre, et c'est sur cette propriété que repose tout ce guide.

L'appareil ne stocke pas la clé du disque. Il dérive un secret à l'aide de l'extension **hmac-secret** - le même mécanisme que derrière WebAuthn PRF - et ce secret déverrouille l'emplacement. Présentez le même appareil et vous obtenez le même secret ; présentez n'importe quoi d'autre et vous n'obtenez rien d'utile. Voir [Device Capabilities](/docs/developers/device-capabilities#ctap2-extensions).

<WhyHardware />

## Le problème NFC, énoncé d'emblée

La plupart des guides sur le sujet supposent une clé de sécurité USB, et passent discrètement ce qui suit.

Une clé FIDO2 USB parle HID. Le noyau s'en occupe, `libfido2` lui parle directement, et cela fonctionne dans un initramfs sans rien installer de plus.

**La Seedkeeper PRO n'a pas d'interface USB.** Elle parle NFC et ISO 7816 à contact, ce qui signifie sous Linux la pile PC/SC : le démon `pcscd`, le pilote CCID, et la prise en charge de votre lecteur. Sur un système démarré, c'est une installation de paquets. Dans un initramfs, non, car aucune distribution n'inclut quoi que ce soit de tout cela par défaut.

Cela sépare l'article en deux cas très différents :

| Scénario | Cela fonctionne-t-il ? |
|---|---|
| **Volume secondaire** déverrouillé sur un système démarré | ✅ De façon fiable |
| **Répertoire personnel ou disque externe**, déverrouillé après la connexion | ✅ De façon fiable |
| **Disque racine au démarrage** | ⚠️ Nécessite un initramfs sur mesure, traité en fin d'article |

Si vous voulez un chiffrement de disque déverrouillé par le matériel **aujourd'hui, sans construire d'initramfs**, chiffrez un volume secondaire plutôt que le disque racine. C'est une configuration réellement utile, et le reste de ce guide vous y conduit.

## Avant de commencer

```bash
# Debian, Ubuntu
sudo apt install pcscd pcsc-tools libfido2-1 fido2-tools cryptsetup

# RHEL, Fedora, Rocky
sudo dnf install pcsc-lite pcsc-tools libfido2 fido2-tools cryptsetup

sudo systemctl enable --now pcscd
fido2-token -L
```

`fido2-token -L` doit lister votre appareil. Si ce n'est pas le cas, rien de ce qui suit ne fonctionnera - voir [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues).

Vérifiez votre version de systemd et votre format LUKS :

```bash
systemctl --version | head -1        # il faut 248 ou ultérieur
sudo cryptsetup luksDump /dev/sdXn | head -5
```

Le dump doit indiquer **LUKS2**. LUKS1 n'a aucune prise en charge des jetons et ne peut pas faire cela ; la conversion est possible mais hors sujet ici, et non sans risque.

:::warning[Sauvegardez d'abord votre en-tête LUKS]
Chaque opération ci-dessous écrit dans l'en-tête LUKS. Un en-tête endommagé rend le disque irrécupérable, quelle que soit la qualité de votre phrase secrète.

```bash
sudo cryptsetup luksHeaderBackup /dev/sdXn \
  --header-backup-file ~/luks-header-backup.img
```

Copiez ce fichier ailleurs que sur la machine. Il est aussi sensible que le disque lui-même.
:::

## Étape 1 : enrôler l'appareil

```bash
sudo systemd-cryptenroll /dev/sdXn \
  --fido2-device=auto \
  --fido2-with-client-pin=yes
```

Une phrase secrète existante vous sera d'abord demandée - c'est ainsi que l'outil obtient la clé maîtresse pour écrire un nouvel emplacement - puis la présentation de l'appareil et la saisie de son PIN.

Options à connaître :

- `--fido2-with-client-pin=yes` exige le PIN FIDO à chaque déverrouillage. C'est la valeur par défaut et il vaut la peine de la conserver : sans elle, la seule possession de la carte ouvre le disque.
- `--fido2-with-user-presence=yes` exige un contact physique.
- `--fido2-device=auto` choisit le seul appareil présent. Avec plusieurs appareils connectés, listez-les avec `systemd-cryptenroll --fido2-device=list` et nommez-en un explicitement.

Confirmez que le nouvel emplacement existe :

```bash
sudo cryptsetup luksDump /dev/sdXn | grep -A3 Tokens
```

Un jeton `systemd-fido2` doit être listé.

## Étape 2 : tester avant de vous y fier

Faites-le sur un volume que vous pouvez vous permettre de laisser verrouillé.

```bash
sudo cryptsetup luksClose monvolume     # s'il est actuellement ouvert
sudo systemd-cryptsetup attach monvolume /dev/sdXn - fido2-device=auto
```

Le PIN doit vous être demandé, ainsi que la présentation de l'appareil. S'il s'ouvre, l'enrôlement est bon.

**En cas d'échec**, votre phrase secrète fonctionne toujours - c'est précisément pourquoi elle est encore enrôlée.

## Étape 3 : déverrouiller automatiquement au montage

Pour un volume secondaire, ajoutez-le à `/etc/crypttab` :

```
monvolume  UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  none  fido2-device=auto,nofail
```

Trouvez l'UUID avec `sudo blkid /dev/sdXn`.

`nofail` compte plus qu'il n'y paraît : sans lui, un démarrage où l'appareil est absent ou le lecteur pas encore prêt s'arrête sur un shell de secours. Avec lui, le volume est simplement ignoré et vous le montez manuellement plus tard.

Rechargez et testez :

```bash
sudo systemctl daemon-reload
sudo systemctl restart systemd-cryptsetup@monvolume.service
```

## Le disque racine au démarrage

C'est ici que la contrainte NFC devient concrète.

Au démarrage, l'initramfs doit déverrouiller le disque racine avant qu'aucun système de fichiers normal n'existe. Pour une clé USB, cela va : `libfido2` parle directement aux périphériques HID. Pour un appareil NFC ou à contact, l'initramfs aurait besoin de `pcscd`, du pilote CCID, du micrologiciel du lecteur s'il en faut un, et de la pile USB pour atteindre le lecteur - rien de tout cela n'étant livré par une distribution dans son initramfs.

**Ce n'est pas une limitation Seedkeeper.** Tout authentificateur FIDO2 fondé sur une carte à puce se heurte exactement au même mur.

Trois options honnêtes :

**Chiffrez plutôt un volume secondaire.** La racine reste sur une phrase secrète, et vos données réelles se trouvent sur un volume déverrouillé par le matériel. Cela couvre l'essentiel de ce que les gens recherchent et ne demande aucun travail sur l'initramfs.

**Construisez un initramfs sur mesure.** C'est possible avec dracut, en écrivant un module qui embarque `pcscd`, `libccid` et les dépendances du lecteur, puis démarre le démon tôt. C'est un véritable travail d'ingénierie, qui casse aux mises à jour du noyau et de la distribution, et dont une erreur laisse une machine qui ne démarre plus.

**Utilisez une clé FIDO2 USB pour le disque racine**, et votre Seedkeeper PRO pour tout le reste - SSH, connexion, volumes secondaires. Peu satisfaisant, et c'est la réponse pragmatique pour un portable qui doit démarrer de façon fiable.

Quel que soit votre choix, **conservez l'emplacement de la phrase secrète**. C'est la seule chose qui sépare un déverrouillage raté d'un disque perdu.

## Retirer un appareil

Carte perdue, ou mise au rebut :

```bash
# voir quel emplacement occupe le jeton
sudo cryptsetup luksDump /dev/sdXn

# le retirer
sudo systemd-cryptenroll /dev/sdXn --wipe-slot=fido2
```

`--wipe-slot=fido2` retire **tous** les emplacements FIDO2 de ce volume. Avec deux appareils enrôlés et un seul perdu, retirez-les tous et réenrôlez celui que vous détenez encore.

N'effacez jamais l'emplacement de la phrase secrète tant qu'une autre méthode n'est pas confirmée fonctionnelle sur cette machine précise, au démarrage, plus d'une fois.

## FAQ

<details>
<summary>Puis-je déverrouiller un disque LUKS avec une clé de sécurité FIDO2 ?</summary>

Oui. `systemd-cryptenroll` ajoute un appareil FIDO2 comme méthode de déverrouillage sur un volume LUKS2, aux côtés de votre phrase secrète existante. Cela nécessite systemd 248 ou ultérieur, et LUKS2 et non LUKS1.

</details>

<details>
<summary>Cela remplace-t-il ma phrase secrète LUKS ?</summary>

Non, et vous ne devriez pas le permettre. La clé est ajoutée comme emplacement supplémentaire. Conserver la phrase secrète est ce qui vous sauve quand l'appareil est perdu, endommagé, ou simplement non détecté au démarrage.

</details>

<details>
<summary>Cela fonctionne-t-il avec un appareil NFC uniquement, au démarrage ?</summary>

L'enrôlement et le déverrouillage sur un système démarré fonctionnent. Le déverrouillage au démarrage est plus difficile, car l'initramfs a besoin de `pcscd` et des pilotes du lecteur, qu'aucune distribution n'inclut par défaut. Voir [Le disque racine au démarrage](#le-disque-racine-au-démarrage) ci-dessus.

</details>

<details>
<summary>De quelle version de systemd ai-je besoin ?</summary>

La 248 ou ultérieure pour la prise en charge FIDO2 dans `systemd-cryptenroll`. Debian 12, Ubuntu 22.04 et RHEL 9 embarquent tous une version plus récente.

</details>

<details>
<summary>Ma clé de chiffrement de disque est-elle stockée sur la clé de sécurité ?</summary>

Non. L'appareil dérive un secret via l'extension `hmac-secret`, et ce secret déverrouille l'emplacement. La clé du disque ne quitte jamais l'en-tête LUKS, et l'appareil ne détient rien qui identifie le disque.

</details>

<details>
<summary>Que se passe-t-il si je perds la clé de sécurité ?</summary>

Vous déverrouillez avec votre phrase secrète, puis vous retirez l'emplacement orphelin avec `systemd-cryptenroll --wipe-slot=fido2`. C'est toute la raison de conserver la phrase secrète enrôlée.

</details>

## Articles liés

- [Comment se connecter à Linux avec une clé de sécurité](/docs/tutorials/privacy-security-tools/linux-login-with-a-security-key)
- [Comment sécuriser SSH avec une clé de sécurité](/docs/tutorials/privacy-security-tools/secure-ssh-with-a-security-key)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
