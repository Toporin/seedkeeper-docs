---
title: "Comment se connecter à Linux avec une clé de sécurité"
description: "Utilisez votre Seedkeeper PRO pour la connexion locale et sudo sous Linux avec pam-u2f. Debian et RHEL, et les pièges de verrouillage à éviter."
keywords: [pam-u2f, connexion Linux clé de sécurité, sudo FIDO2, pamu2fcfg, PAM FIDO2, clé matérielle bureau Linux, u2f_keys]
sidebar_position: 4
sidebar_label: "Connexion Linux avec une clé de sécurité"
tags: [linux, pam, fido2, privacy-security-tools]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je utiliser une clé de sécurité pour me connecter à Linux ?", a: "Oui, via le module pam-u2f maintenu par Yubico. Il s'intègre à PAM : il fonctionne donc pour la connexion graphique, la console, sudo, et tout ce qui s'authentifie via PAM."},
  {q: "pam-u2f remplace-t-il mon mot de passe ?", a: "Cela dépend de votre configuration. Déclarez le module en required et il devient un second facteur aux côtés de votre mot de passe ; déclarez-le en sufficient et la clé seule vous connecte."},
  {q: "Cela fonctionne-t-il avec un appareil NFC ?", a: "Oui, mais il vous faut pcscd démarré et un lecteur connecté. La Seedkeeper PRO n'ayant pas d'interface USB, un lecteur de cartes à puce à contact ou un lecteur NFC n'est pas optionnel ici."},
  {q: "Que se passe-t-il si je perds la clé ou qu'elle n'est pas détectée ?", a: "Si le module est déclaré en required et qu'aucun repli n'existe, vous êtes verrouillé dehors. Gardez toujours un shell root ouvert pendant la configuration, testez d'abord sur sudo, et enregistrez un second appareil."},
  {q: "Où l'enregistrement est-il stocké ?", a: "Par défaut dans ~/.config/Yubico/u2f_keys pour chaque utilisateur. Un fichier système sous /etc est préférable lorsque le répertoire personnel est chiffré ou sur un partage réseau."},
  {q: "Cela fonctionne-t-il à travers SSH ?", a: "Non, et c'est délibéré. PAM s'exécute sur le serveur, et il n'a aucun moyen d'atteindre une clé de sécurité connectée à un client distant. Utilisez plutôt des clés SSH FIDO2."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Votre carte ou votre bague comme facteur de connexion</p>

<p class="platform-note">Desktop</p>

<div class="tldr">

Le module **pam-u2f** permet à un appareil FIDO2 de vous authentifier auprès de PAM - ce qui couvre la connexion graphique, les consoles virtuelles, `sudo`, le déverrouillage de session, et tout ce qui s'authentifie via PAM sur le système.

Deux choses déterminent si cela se passe bien : un lecteur fonctionnel avec `pcscd` démarré, et un repli que vous gardez disponible pendant la configuration.

</div>

## Vue d'ensemble

PAM - le cadre des modules d'authentification enfichables - est ce que Linux consulte chaque fois que quelque chose a besoin de savoir qui vous êtes. `pam-u2f` ajoute un appareil FIDO2 à cette conversation.

Résultat : votre Seedkeeper PRO devient soit un second facteur par-dessus votre mot de passe, soit un remplacement de celui-ci, selon un seul mot-clé dans un fichier de configuration.

<WhyHardware />

:::warning[À lire avant toute modification]
Une erreur dans un fichier de configuration PAM peut vous verrouiller hors de votre propre machine, `sudo` compris. Tout au long de ce guide :

- **Gardez un shell root ouvert** dans un terminal séparé, et ne le fermez pas avant que tout soit vérifié.
- **Testez d'abord sur `sudo`**, jamais sur la connexion graphique.
- **Connaissez votre voie de secours** - une clé USB live, ou le mode mono-utilisateur.
:::

## Avant de commencer

### Un lecteur, et pcscd démarré

La Seedkeeper PRO parle NFC et ISO 7816 à contact, sans interface USB HID. Un simple port USB ne la verra jamais - voir [Device Capabilities](/docs/developers/device-capabilities#transports).

```bash
# Debian, Ubuntu
sudo apt install pcscd pcsc-tools libfido2-1 fido2-tools
sudo systemctl enable --now pcscd

# RHEL, Fedora, Rocky
sudo dnf install pcsc-lite pcsc-tools libfido2 fido2-tools
sudo systemctl enable --now pcscd
```

Confirmez que l'appareil est visible avant d'aller plus loin :

```bash
fido2-token -L
```

Présentez votre Seedkeeper PRO. Un périphérique PC/SC doit apparaître. Si rien ne s'affiche, arrêtez-vous ici et réglez ce point d'abord - voir [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues).

### Un PIN FIDO défini sur l'appareil

Enregistrez avec vérification du PIN et vous obtenez une véritable connexion à deux facteurs depuis un seul objet : la carte est quelque chose que vous possédez, le PIN quelque chose que vous savez. Voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

### Le module lui-même

```bash
# Debian, Ubuntu
sudo apt install libpam-u2f

# Fedora
sudo dnf install pam-u2f

# RHEL, Rocky, Alma - via EPEL
sudo dnf install epel-release
sudo dnf install pam-u2f
```

## Étape 1 : enregistrer votre appareil

`pamu2fcfg` produit une ligne décrivant votre appareil, que PAM comparera ensuite.

L'endroit où cette ligne est stockée est une vraie décision, pas un détail.

### Utiliser un fichier système

```bash
sudo mkdir -p /etc/seedkeeper
pamu2fcfg | sudo tee /etc/seedkeeper/u2f_keys
sudo chmod 644 /etc/seedkeeper/u2f_keys
```

Présentez l'appareil et saisissez votre PIN lorsqu'on vous le demande. Le fichier contient désormais une ligne unique commençant par votre nom d'utilisateur.

Deux raisons d'en faire le choix par défaut :

- **Il est lisible au moment de la connexion.** Un fichier par utilisateur situé dans le répertoire personnel ne l'est pas, si ce répertoire est chiffré, sur un partage réseau, ou simplement pas encore monté - c'est-à-dire exactement le moment où PAM en a besoin.
- **Vous choisissez le chemin.** N'importe quel emplacement sous `/etc` convient, tant que la ligne PAM y pointe.

Pour ajouter un **second appareil** - et vous devriez - ajoutez à la suite plutôt que d'écraser :

```bash
pamu2fcfg -n | sudo tee -a /etc/seedkeeper/u2f_keys
```

L'option `-n` omet le nom d'utilisateur, ce qui est le format correct pour les entrées supplémentaires. Vérifiez le résultat :

```bash
cat /etc/seedkeeper/u2f_keys
```

Vous voulez **une ligne par utilisateur**, commençant par ce nom d'utilisateur, chaque appareil étant séparé par un deux-points. Deux lignes distinctes pour le même utilisateur ne fonctionneront pas.

Chaque ligne PAM des étapes suivantes devra alors porter `authfile=/etc/seedkeeper/u2f_keys`.

:::note[Le chemin par défaut par utilisateur est un chemin Yubico]
Sans `authfile=`, `pam_u2f` cherche dans `~/.config/Yubico/u2f_keys` - un chemin compilé dans le module plutôt qu'une convention renommable. Le pointer ailleurs avec `authfile=` est la façon supportée de le déplacer, et le fichier système ci-dessus en est la version la plus propre.
:::

## Étape 2 : tester d'abord sur sudo

C'est l'endroit sûr pour commencer, car un échec ne vous coûte rien tant qu'un shell root reste ouvert ailleurs.

Modifiez `/etc/pam.d/sudo` et ajoutez cette ligne **au-dessus** du `@include common-auth` existant (Debian) ou `auth substack system-auth` (RHEL) :

```
auth required pam_u2f.so cue authfile=/etc/seedkeeper/u2f_keys
```

`cue` affiche une invite vous demandant de présenter l'appareil, ce qui vaut la peine - sans elle, le terminal se contente de s'interrompre sans explication.

Maintenant, dans un **autre terminal** :

```bash
sudo -k          # oublier l'identifiant en cache
sudo echo ok
```

Votre mot de passe doit vous être demandé, puis la présentation de votre Seedkeeper PRO.

**En cas d'échec**, retirez la ligne depuis le shell root que vous avez gardé ouvert, et consultez `journalctl -e` pour en connaître la raison avant de réessayer.

## Étape 3 : choisir required ou sufficient

Un seul mot-clé change tout le modèle.

| Mot-clé | Comportement | Résultat |
|---|---|---|
| `required` | Mot de passe **et** clé | Véritable double facteur |
| `sufficient` | La clé seule suffit, mot de passe en repli | Confort, sécurité moindre |

```
# mot de passe + clé
auth required pam_u2f.so cue authfile=/etc/seedkeeper/u2f_keys

# clé OU mot de passe
auth sufficient pam_u2f.so cue authfile=/etc/seedkeeper/u2f_keys
```

**`required` est la configuration qui a du sens.** `sufficient` laisse le mot de passe comme voie alternative : le compte reste donc protégé par le mot de passe, la clé ne fait que gagner du temps.

Options utiles du module :

```
auth required pam_u2f.so cue pinverification=1 userpresence=1 authfile=/etc/seedkeeper/u2f_keys
```

- `cue` - inviter l'utilisateur à présenter l'appareil
- `pinverification=1` - exiger le PIN FIDO, pas seulement la présence
- `userpresence=1` - exiger un contact physique
- `nouserok` - **à éviter**. Cette option laisse passer les utilisateurs sans enregistrement, ce qui annule silencieusement tout le dispositif
- `authfile=/etc/seedkeeper/u2f_keys` - le fichier partagé de l'étape 1, et **obligatoire** si vous n'utilisez pas le chemin par défaut par utilisateur du module

`man pam_u2f` liste l'ensemble des options de votre version installée.

## Étape 4 : étendre aux autres voies de connexion

Uniquement une fois que `sudo` a fonctionné de façon fiable pendant un moment.

| Quoi | Fichier | Distribution |
|---|---|---|
| Connexion en console | `/etc/pam.d/login` | Toutes |
| Connexion graphique GNOME | `/etc/pam.d/gdm-password` | Debian, Ubuntu, Fedora |
| Connexion graphique KDE | `/etc/pam.d/sddm` | Toutes |
| Déverrouillage de session | `/etc/pam.d/gnome-screensaver` ou `/etc/pam.d/kde` | Variable |
| Tout d'un coup | `/etc/pam.d/common-auth` | Debian, Ubuntu |
| Tout d'un coup | `/etc/pam.d/system-auth` | RHEL, Fedora |

Modifier `common-auth` ou `system-auth` applique la règle à tous les consommateurs PAM du système d'un seul geste. C'est aussi la façon la plus rapide de vous verrouiller entièrement dehors : faites-le en dernier, et gardez ce shell root ouvert.

:::danger[system-auth sur RHEL est géré par authselect]
Sur RHEL et Fedora, modifier `/etc/pam.d/system-auth` directement fonctionne jusqu'à ce qu'`authselect` régénère le fichier et efface silencieusement votre modification. Utilisez plutôt un profil personnalisé :

```bash
sudo authselect create-profile my-u2f -b sssd
# modifiez le modèle system-auth du profil, puis
sudo authselect select custom/my-u2f
```
:::

## Ce que cela ne couvre pas

**SSH.** PAM s'exécute sur le serveur, et ne peut pas atteindre une clé connectée à un client distant. C'est une limite du modèle, pas une erreur de configuration - utilisez plutôt des clés SSH FIDO2, voir [Comment sécuriser SSH avec une clé de sécurité](/docs/tutorials/privacy-security-tools/secure-ssh-with-a-security-key).

**Le chiffrement intégral du disque au démarrage.** Le disque est déverrouillé avant que PAM n'existe. C'est un mécanisme distinct - voir [Comment déverrouiller un disque LUKS avec une clé de sécurité](/docs/tutorials/privacy-security-tools/unlock-luks-with-a-security-key).

**Le mot de passe de root lui-même.** `pam-u2f` dans `common-auth` ne change pas le comportement de `su` sans configurer également `/etc/pam.d/su`.

## Enregistrez un second appareil

Le même raisonnement que partout ailleurs sur ce site, avec une conséquence plus nette : ici, perdre la clé peut signifier perdre la machine.

Ajoutez un second appareil à la même ligne dans `/etc/seedkeeper/u2f_keys` comme indiqué à l'étape 1, conservez-le ailleurs que dans votre sacoche, et vérifiez qu'il fonctionne avant de vous reposer dessus. Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

## FAQ

<details>
<summary>Puis-je utiliser une clé de sécurité pour me connecter à Linux ?</summary>

Oui, via le module `pam-u2f` maintenu par Yubico. Il s'intègre à PAM : il fonctionne donc pour la connexion graphique, la console, `sudo`, et tout ce qui s'authentifie via PAM.

</details>

<details>
<summary>pam-u2f remplace-t-il mon mot de passe ?</summary>

Cela dépend de votre configuration. Déclarez le module en `required` et il devient un second facteur aux côtés de votre mot de passe ; déclarez-le en `sufficient` et la clé seule vous connecte. Voir [Choisir required ou sufficient](#étape-3--choisir-required-ou-sufficient) ci-dessus.

</details>

<details>
<summary>Cela fonctionne-t-il avec un appareil NFC ?</summary>

Oui, mais il vous faut `pcscd` démarré et un lecteur connecté. La Seedkeeper PRO n'ayant pas d'interface USB, un lecteur de cartes à puce à contact ou un lecteur NFC n'est pas optionnel ici.

</details>

<details>
<summary>Que se passe-t-il si je perds la clé ou qu'elle n'est pas détectée ?</summary>

Si le module est déclaré en `required` et qu'aucun repli n'existe, vous êtes verrouillé dehors. Gardez toujours un shell root ouvert pendant la configuration, testez d'abord sur `sudo`, et enregistrez un second appareil.

</details>

<details>
<summary>Où l'enregistrement est-il stocké ?</summary>

Le chemin par défaut du module est `~/.config/Yubico/u2f_keys`, compilé dans `pam_u2f`. Le pointer vers un fichier système tel que `/etc/seedkeeper/u2f_keys` avec l'option `authfile=` est à la fois plus propre et plus fiable, puisqu'il est lisible avant le montage du répertoire personnel.

</details>

<details>
<summary>Cela fonctionne-t-il à travers SSH ?</summary>

Non, et c'est délibéré. PAM s'exécute sur le serveur, et il n'a aucun moyen d'atteindre une clé de sécurité connectée à un client distant. Utilisez plutôt des clés SSH FIDO2.

</details>

## Articles liés

- [Comment sécuriser SSH avec une clé de sécurité](/docs/tutorials/privacy-security-tools/secure-ssh-with-a-security-key)
- [Comment déverrouiller un disque LUKS avec une clé de sécurité](/docs/tutorials/privacy-security-tools/unlock-luks-with-a-security-key)
- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Device Capabilities](/docs/developers/device-capabilities)
- [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues)
- [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained)
