---
title: "Comment sécuriser SSH avec une clé de sécurité"
description: "Remplacez votre fichier de clé privée SSH par une clé générée dans votre Seedkeeper PRO. Serveurs RHEL et Debian, et les pièges de version des deux."
keywords: [SSH FIDO2, ssh-keygen ecdsa-sk, clé de sécurité SSH, clé SSH résidente, FIDO2 SSH RHEL, FIDO2 SSH Debian, clé SSH matérielle]
sidebar_position: 3
sidebar_label: "Sécuriser SSH avec une clé de sécurité"
tags: [ssh, linux, fido2, privacy-security-tools]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je utiliser une clé de sécurité matérielle pour SSH ?", a: "Oui. OpenSSH 8.2 et versions ultérieures prennent en charge les clés FIDO2 via les types ecdsa-sk et ed25519-sk. La clé privée est générée à l'intérieur de l'appareil et n'en sort jamais : le fichier présent sur votre disque n'est qu'une référence, inutilisable seule."},
  {q: "La Seedkeeper PRO fonctionne-t-elle avec ed25519-sk ?", a: "Non. La Seedkeeper PRO implémente uniquement ES256 : c'est donc ecdsa-sk qu'il faut utiliser. Une demande ed25519-sk échouera, l'appareil ne prenant pas en charge l'algorithme EdDSA."},
  {q: "RHEL 8 prend-il en charge les clés SSH FIDO2 ?", a: "Non. RHEL 8 embarque OpenSSH 8.0, antérieur à la prise en charge FIDO. RHEL 9 embarque la 8.7 et fonctionne. Vérifiez avec ssh -V sur le serveur avant toute chose."},
  {q: "Qu'est-ce qu'une clé SSH résidente ?", a: "Un identifiant stocké intégralement sur la clé de sécurité elle-même, récupérable sur n'importe quelle machine avec ssh-keygen -K. Vous pouvez ainsi vous connecter depuis un nouvel ordinateur sans recopier de fichiers."},
  {q: "Que se passe-t-il si je perds la clé de sécurité ?", a: "Vous perdez cet identifiant SSH, la clé privée n'ayant existé nulle part ailleurs. Générez une seconde clé sur un appareil de secours et ajoutez les deux clés publiques à authorized_keys avant de vous reposer dessus."},
  {q: "Puis-je utiliser SSH si le serveur est en mode FIPS ?", a: "Généralement pas avec FIDO2. Les algorithmes sk-* ne font pas partie de la politique cryptographique FIPS sur RHEL : le serveur les refusera. Vérifiez la politique effective avec update-crypto-policies --show avant de déployer."},
  {q: "Pourquoi mon appareil n'apparaît-il pas dans fido2-token -L ?", a: "Soit pcscd n'est pas démarré, soit le lecteur n'est pas reconnu, soit votre distribution a compilé libfido2 sans la prise en charge PC/SC. Testez d'abord le lecteur avec pcsc_scan pour distinguer ces cas."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Une clé SSH qu'on ne peut pas copier depuis votre ordinateur</p>

<p class="platform-note">Desktop</p>

<div class="tldr">

OpenSSH 8.2 et versions ultérieures peuvent générer une clé SSH **à l'intérieur** d'un appareil FIDO2 plutôt que dans un fichier. La clé privée n'existe jamais sur votre ordinateur : un portable volé ou une machine compromise ne donne rien. Chaque connexion exige la présence de la carte ou de la bague, plus votre PIN FIDO.

Utilisez `ecdsa-sk`, pas `ed25519-sk` - la Seedkeeper PRO n'implémente qu'ES256.

</div>

## Vue d'ensemble

Une clé SSH ordinaire est un fichier. Quiconque copie `~/.ssh/id_ed25519` et connaît sa phrase secrète - ou le trouve non chiffré, ce qui est courant - dispose de votre accès.

Une clé SSH FIDO2 déplace la moitié privée dans le matériel. `ssh-keygen` demande à l'appareil de générer une paire de clés, ne reçoit que la clé publique et une référence, et les écrit sur le disque. Le fichier laissé dans `~/.ssh` ne peut authentifier quoi que ce soit à lui seul.

Deux conséquences en découlent, et ce sont elles l'objectif :

- **La clé ne peut pas être exfiltrée.** Un logiciel malveillant présent sur votre machine peut lire la référence et n'en tirera rien d'utile.
- **L'authentification exige une présence physique.** Pas de carte ni de bague, pas de connexion.

<WhyHardware />

## Avant de commencer

Trois points à vérifier, dans cet ordre. Chacun est une exigence stricte, pas une préférence.

### 1. Un lecteur sur votre ordinateur

La Seedkeeper PRO parle NFC et ISO 7816 à contact, et ne dispose d'aucune interface USB. Il vous faut soit un lecteur de cartes à puce à contact pour la carte, soit un lecteur NFC pour l'un ou l'autre format. Un simple port USB ne verra jamais l'appareil - voir [Device Capabilities](/docs/developers/device-capabilities#transports).

### 2. Un PIN FIDO défini sur l'appareil

Les identifiants résidents comme la signature protégée par PIN l'exigent. Définissez-le depuis la Seedkeeper PRO App, ou directement depuis Windows ou un navigateur Chromium - voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

### 3. OpenSSH 8.2 ou ultérieur, des deux côtés

```bash
ssh -V
```

Le client et le serveur sont deux vérifications distinctes. Un portable récent dialoguant avec un serveur ancien échouera du côté serveur.

| Système | OpenSSH | SSH FIDO2 |
|---|---|---|
| RHEL 8 / CentOS 8 | 8.0 | ❌ Non pris en charge |
| RHEL 9 / Rocky 9 / Alma 9 | 8.7 | ✅ |
| Debian 10 (buster) | 7.9 | ❌ Non pris en charge |
| Debian 11 (bullseye) | 8.4 | ✅ |
| Debian 12 (bookworm) | 9.2 | ✅ |
| Ubuntu 20.04 LTS | 8.2 | ✅ |
| Ubuntu 22.04 / 24.04 LTS | 8.9 / 9.6 | ✅ |

:::warning[RHEL 8 et Debian 10 sont des impasses]
Aucun des deux ne peut être adapté par configuration - le code n'y est simplement pas. Vos options sont la mise à niveau du serveur, ou l'usage d'une clé SSH classique pour ces hôtes et de FIDO2 partout ailleurs.
:::

## Configuration du client

### Sous Linux

Installez la bibliothèque FIDO et la pile carte à puce :

```bash
# Debian, Ubuntu
sudo apt install libfido2-1 fido2-tools pcscd pcsc-tools
sudo systemctl enable --now pcscd

# RHEL, Fedora, Rocky
sudo dnf install libfido2 fido2-tools pcsc-lite pcsc-tools
sudo systemctl enable --now pcscd
```

Confirmez ensuite que l'appareil est visible :

```bash
fido2-token -L
```

Présentez votre Seedkeeper PRO. Vous devriez voir une ligne nommant un périphérique PC/SC. Si rien n'apparaît, le problème vient de `pcscd` ou du lecteur, pas de SSH - vérifiez d'abord avec `pcsc_scan`, et voir [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues).

:::note[La prise en charge NFC dans libfido2 est un choix de compilation]
Certaines distributions compilent `libfido2` sans la prise en charge PC/SC, auquel cas les appareils NFC lui sont invisibles alors que les clés USB fonctionnent normalement. `fido2-token -L` est le moyen rapide de le savoir. S'il ne renvoie rien avec un lecteur fonctionnel, il vous faut une compilation avec PC/SC activé.
:::

### Sous macOS

Le `ssh` fourni par Apple n'a aucune prise en charge FIDO. Installez la version Homebrew et assurez-vous qu'elle passe en premier dans votre PATH :

```bash
brew install openssh
ssh -V
```

### Sous Windows

Le client OpenSSH de Windows achemine les opérations FIDO via l'API WebAuthn de Windows, qui gère nativement les lecteurs NFC - le même chemin que lorsque vous vous connectez à un site web avec l'appareil.

Vérifiez d'abord votre version :

```powershell
ssh -V
```

Les versions distribuées par Microsoft ont reçu la prise en charge `sk` plus tard qu'OpenSSH en amont : une machine qui n'a pas été mise à jour depuis un moment peut donc afficher une version qui en est dépourvue. Windows 11 et les versions récentes de Windows 10 conviennent ; si `ssh -V` affiche une version antérieure à 8.9, mettez à jour le client OpenSSH depuis les fonctionnalités facultatives.

## Générer la clé

```bash
ssh-keygen -t ecdsa-sk \
  -O resident \
  -O verify-required \
  -O application=ssh:prod-servers \
  -C "vous@seedkeeper-pro"
```

Présentez l'appareil lorsqu'on vous le demande, saisissez votre PIN FIDO, et présentez-le une nouvelle fois pour confirmer.

**Ce que fait chaque option :**

`-t ecdsa-sk` sélectionne ES256. Ce n'est pas une préférence : la Seedkeeper PRO implémente `secp256r1_ecdsa_sha256_raw` et rien d'autre, `ed25519-sk` échouera donc.

`-O resident` conserve l'identifiant sur l'appareil lui-même plutôt que de simplement y faire référence. Vous pouvez ensuite le récupérer sur n'importe quelle machine avec `ssh-keygen -K`, ce qui évite tout transfert de fichier vers un nouveau portable. La clé devient également visible dans la liste des identifiants résidents de l'application - voir [Gérer vos passkeys](/docs/product-documentation/passkeys/managing-passkeys). Chaque identifiant résident occupe l'un des 90 emplacements de l'appareil.

`-O verify-required` exige le PIN à chaque connexion, et pas seulement la présence. Sans cette option, une simple présentation signe - ce qui est pratique et signifie qu'un appareil volé suffit.

`-O application=ssh:prod-servers` étiquette l'identifiant pour que plusieurs clés SSH puissent coexister sur un même appareil. La chaîne doit commencer par `ssh:`.

Deux fichiers apparaissent : `~/.ssh/id_ecdsa_sk` et `~/.ssh/id_ecdsa_sk.pub`. Le premier est une référence, pas un secret, et ne vaut rien sans le matériel.

La clé publique tient sur une seule ligne, et elle annonce son propre type :

```
sk-ecdsa-sha2-nistp256@openssh.com AAAAInNrLWVjZHNh... vous@seedkeeper-pro
```

Le préfixe `sk-` est ce qui indique à un serveur que cet identifiant réside dans une clé de sécurité. C'est une clé publique SSH ordinaire à tous les autres égards, ce qui a une conséquence utile.

:::tip[Vous utilisez déjà des clés SSH ? Ajoutez-la simplement]
Si vous avez déjà une configuration fonctionnelle et un fichier `~/.ssh/authorized_keys` sur le serveur, vous n'avez besoin ni de `ssh-copy-id` ni d'autre chose. Ouvrez `~/.ssh/id_ecdsa_sk.pub`, copiez la ligne unique qu'il contient, et collez-la sur une nouvelle ligne à la fin d'`authorized_keys`.

```bash
# sur votre machine
cat ~/.ssh/id_ecdsa_sk.pub

# sur le serveur, ajoutez la ligne que vous venez de copier
nano ~/.ssh/authorized_keys
```

Vos clés existantes continuent de fonctionner à côté, ce qui est exactement ce que vous voulez pendant les tests. Attention aux permissions si vous créez le fichier pour la première fois : `chmod 700 ~/.ssh` et `chmod 600 ~/.ssh/authorized_keys`, faute de quoi sshd l'ignorera sans la moindre explication.
:::

## Configuration du serveur : RHEL 9

### Vérifier que les algorithmes sont acceptés

```bash
sudo sshd -T | grep -i pubkeyacceptedalgorithms
```

Vous voulez y trouver `sk-ecdsa-sha2-nistp256@openssh.com`. RHEL dérive cette liste de la politique cryptographique du système plutôt que du seul `sshd_config`.

```bash
update-crypto-policies --show
```

`DEFAULT` inclut les algorithmes `sk-*`. **`FIPS` ne les inclut pas**, et aucune modification de `sshd_config` ne l'emportera. Sur un hôte en mode FIPS, SSH FIDO2 n'est pas une option.

### Installer la clé publique

Depuis votre poste de travail :

```bash
ssh-copy-id -i ~/.ssh/id_ecdsa_sk.pub utilisateur@serveur
```

### Imposer la vérification du PIN côté serveur

Le `verify-required` côté client peut être contourné par une clé créée sans lui. Pour imposer la règle là où cela compte, ajoutez un fichier de configuration complémentaire :

```bash
sudo tee /etc/ssh/sshd_config.d/50-fido.conf <<'EOF'
PubkeyAuthOptions verify-required
EOF

sudo sshd -t && sudo systemctl reload sshd
```

`sshd -t` valide la configuration avant le rechargement. Ne sautez jamais cette étape sur un hôte distant.

:::warning[verify-required s'applique à toutes les clés publiques]
`PubkeyAuthOptions verify-required` rejette **toutes** les clés publiques non FIDO, y compris celle avec laquelle vous êtes actuellement connecté. Ne l'activez qu'une fois votre clé FIDO2 confirmée fonctionnelle, ou restreignez-la avec un bloc `Match`.
:::

## Configuration du serveur : Debian 11, 12 et Ubuntu

Debian n'a pas de politique cryptographique système, ce qui rend les choses plus simples que sur RHEL.

### Vérifier les algorithmes

```bash
sudo sshd -T | grep -i pubkeyacceptedalgorithms
```

Les algorithmes `sk-*` sont activés par défaut sur Debian 11 et versions ultérieures. S'ils manquent, c'est que quelque chose dans `/etc/ssh/sshd_config` a explicitement restreint la liste - cherchez une ligne `PubkeyAcceptedAlgorithms` et rajoutez-les plutôt que de remplacer la valeur par défaut :

```
PubkeyAcceptedAlgorithms +sk-ecdsa-sha2-nistp256@openssh.com
```

Le `+` initial ajoute à l'ensemble par défaut. Sans lui, vous remplacez toute la liste, ce qui exclura tous les autres types de clés.

### Installer la clé publique et imposer le PIN

```bash
ssh-copy-id -i ~/.ssh/id_ecdsa_sk.pub utilisateur@serveur
```

```bash
sudo tee /etc/ssh/sshd_config.d/50-fido.conf <<'EOF'
PubkeyAuthOptions verify-required
EOF

sudo sshd -t && sudo systemctl reload sshd
```

Sur Debian 11, le répertoire `sshd_config.d` existe mais n'est pas toujours activé. Vérifiez que `/etc/ssh/sshd_config` contient bien `Include /etc/ssh/sshd_config.d/*.conf` près du début ; sinon, placez la directive dans le fichier principal.

## Tester sans vous verrouiller dehors

L'ordre est ici tout l'enjeu. Ne sautez pas l'étape 1.

1. **Gardez votre session actuelle ouverte.** Ne la fermez pas avant la fin.
2. **Dans un second terminal**, connectez-vous avec la nouvelle clé :
   ```bash
   ssh -i ~/.ssh/id_ecdsa_sk utilisateur@serveur
   ```
   Votre PIN doit vous être demandé, puis la présentation de l'appareil.
3. **Une fois seulement que cela fonctionne**, retirez l'ancienne clé publique d'`~/.ssh/authorized_keys` sur le serveur.
4. **Confirmez que la connexion par mot de passe est désactivée**, pour que l'ancienne voie ne puisse pas non plus servir :
   ```bash
   sudo sshd -T | grep -i passwordauthentication
   ```
5. **Alors seulement**, fermez la session d'origine.

Si l'étape 2 échoue, vous disposez toujours d'une session fonctionnelle pour tout annuler.

## Enregistrez un second appareil avant de vous reposer dessus

C'est ce qui transforme une bonne idée en dispositif sûr.

Un identifiant SSH FIDO2 existe sur un seul appareil, ne peut pas être copié, et n'est **pas** inclus dans une sauvegarde Seedkeeper d'appareil à appareil - cette procédure ne couvre que le gestionnaire de mots de passe. Perdez la carte et cet identifiant a disparu.

Générez une seconde clé sur un appareil de secours et autorisez les deux :

```bash
ssh-keygen -t ecdsa-sk -O resident -O verify-required \
  -O application=ssh:prod-servers-backup \
  -f ~/.ssh/id_ecdsa_sk_backup

ssh-copy-id -i ~/.ssh/id_ecdsa_sk_backup.pub utilisateur@serveur
```

Conservez l'appareil de secours ailleurs que dans votre sacoche. Et sur les serveurs que vous ne pouvez pas vous permettre de perdre, gardez une voie d'accès hors bande disponible : une console d'hébergeur, une interface IPMI, ou un clavier physique.

Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour le même raisonnement appliqué aux comptes web.

## Passer à un nouvel ordinateur

Comme l'identifiant est résident, il n'y a rien à copier :

```bash
cd ~/.ssh
ssh-keygen -K
```

Présentez l'appareil, saisissez le PIN, et les fichiers de référence sont écrits localement. Renommez-les si vous préférez, et c'est terminé.

C'est l'avantage pratique de `-O resident` sur le comportement par défaut. Sans cette option, perdre le fichier de référence revient à perdre l'accès, même si le matériel est intact.

## FAQ

<details>
<summary>Puis-je utiliser une clé de sécurité matérielle pour SSH ?</summary>

Oui. OpenSSH 8.2 et versions ultérieures prennent en charge les clés FIDO2 via les types `ecdsa-sk` et `ed25519-sk`. La clé privée est générée à l'intérieur de l'appareil et n'en sort jamais : le fichier présent sur votre disque n'est qu'une référence, inutilisable seule.

</details>

<details>
<summary>La Seedkeeper PRO fonctionne-t-elle avec ed25519-sk ?</summary>

Non. La Seedkeeper PRO implémente uniquement ES256 : c'est donc `ecdsa-sk` qu'il faut utiliser. Une demande `ed25519-sk` échouera, l'appareil ne prenant pas en charge l'algorithme EdDSA - voir [Device Capabilities](/docs/developers/device-capabilities#cryptography).

</details>

<details>
<summary>RHEL 8 prend-il en charge les clés SSH FIDO2 ?</summary>

Non. RHEL 8 embarque OpenSSH 8.0, antérieur à la prise en charge FIDO. RHEL 9 embarque la 8.7 et fonctionne. Vérifiez avec `ssh -V` sur le serveur avant toute chose.

</details>

<details>
<summary>Qu'est-ce qu'une clé SSH résidente ?</summary>

Un identifiant stocké intégralement sur la clé de sécurité elle-même, récupérable sur n'importe quelle machine avec `ssh-keygen -K`. Vous pouvez ainsi vous connecter depuis un nouvel ordinateur sans recopier de fichiers.

</details>

<details>
<summary>Que se passe-t-il si je perds la clé de sécurité ?</summary>

Vous perdez cet identifiant SSH, la clé privée n'ayant existé nulle part ailleurs. Générez une seconde clé sur un appareil de secours et ajoutez les deux clés publiques à `authorized_keys` avant de vous reposer dessus.

</details>

<details>
<summary>Puis-je utiliser SSH si le serveur est en mode FIPS ?</summary>

Généralement pas avec FIDO2. Les algorithmes `sk-*` ne font pas partie de la politique cryptographique FIPS sur RHEL : le serveur les refusera. Vérifiez la politique effective avec `update-crypto-policies --show` avant de déployer.

</details>

<details>
<summary>Pourquoi mon appareil n'apparaît-il pas dans fido2-token -L ?</summary>

Soit `pcscd` n'est pas démarré, soit le lecteur n'est pas reconnu, soit votre distribution a compilé `libfido2` sans la prise en charge PC/SC. Testez d'abord le lecteur avec `pcsc_scan` pour distinguer ces cas.

</details>

## Articles liés

- [Comment se connecter à Linux avec une clé de sécurité](/docs/tutorials/privacy-security-tools/linux-login-with-a-security-key)
- [Comment déverrouiller un disque LUKS avec une clé de sécurité](/docs/tutorials/privacy-security-tools/unlock-luks-with-a-security-key)
- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues)
- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
