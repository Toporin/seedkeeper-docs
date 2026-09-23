---
title: "Comment sécuriser Bitwarden avec une passkey"
description: "Connectez-vous à Bitwarden et déchiffrez votre coffre-fort avec une passkey Seedkeeper PRO, en remplacement du mot de passe maître au quotidien."
keywords: [passkey bitwarden, connexion bitwarden passkey, clé de sécurité bitwarden, bitwarden sans mot de passe maître, bitwarden PRF, hmac-secret]
sidebar_position: 2
sidebar_label: "Sécuriser Bitwarden avec une passkey"
tags: [bitwarden, passkey, privacy-security-tools]
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Se connecter avec une passkey déverrouille-t-il aussi mon coffre-fort ?", a: "Oui, lorsque vous activez l'option Utiliser pour le chiffrement du coffre-fort à l'enregistrement et que vous utilisez un navigateur fondé sur Chromium. La Seedkeeper PRO prend en charge l'extension hmac-secret derrière WebAuthn PRF, celle qu'utilise Bitwarden pour dériver la clé de déchiffrement."},
  {q: "J'ai activé la passkey mais Bitwarden réclame toujours mon mot de passe maître. Pourquoi ?", a: "Deux causes probables : le chiffrement du coffre-fort n'était pas activé au moment de la création de la passkey, ou votre navigateur n'expose pas l'extension prf. Les navigateurs Chromium le font ; la prise en charge de Firefox et Safari est inégale."},
  {q: "Puis-je oublier mon mot de passe maître une fois que cela fonctionne ?", a: "Non. Il reste la voie de récupération si vous perdez toutes vos passkeys enregistrées, et Bitwarden ne peut pas le réinitialiser à votre place. Conservez-le en lieu sûr et hors ligne plutôt que de vous fier à votre mémoire."},
  {q: "Cela remplace-t-il aussi la connexion en deux étapes ?", a: "Oui. Se connecter avec une passkey contourne entièrement la connexion en deux étapes. C'est différent de l'usage d'une passkey comme méthode 2FA, qui est une fonctionnalité Bitwarden distincte."},
  {q: "Puis-je ajouter plusieurs Seedkeeper PRO en secours ?", a: "Oui, jusqu'à 5 passkeys par compte."},
  {q: "Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?", a: "Les deux mettent le phishing en échec : la réponse honnête est que cela dépend de ce que vaut le compte. Une passkey synchronisée est recopiée sur tous les appareils de votre compte cloud, et ce compte devient la nouvelle cible. Une passkey Seedkeeper PRO existe sur une seule puce certifiée qui ne peut pas l'exporter, sans aucun fournisseur dans la chaîne - ce qui compte quand le compte protège le coffre-fort contenant tous vos autres mots de passe."},
]} />

import WhyHardware from '@site/i18n/fr/docusaurus-plugin-content-docs/current/02-tutorials/_why-hardware.mdx';

<p class="doc-subtitle">Se connecter à Bitwarden sans votre mot de passe maître</p>

<p class="platform-note">Web</p>

<div class="tldr">

Depuis les paramètres de sécurité de Bitwarden, activez « Se connecter avec une clé d'accès », choisissez une clé de sécurité plutôt que la biométrie intégrée de votre appareil, puis connectez votre Seedkeeper PRO pour l'enregistrer.

Activez **Utiliser pour le chiffrement du coffre-fort** pendant l'enregistrement et votre Seedkeeper PRO déchiffre également le coffre - une présentation et un PIN remplacent alors entièrement le mot de passe maître au quotidien.

</div>

## Vue d'ensemble

Bitwarden propose en réalité trois fonctionnalités [passkey](/docs/glossary/passkey) distinctes - il vaut la peine de savoir laquelle est traitée ici :

- **Stocker les passkeys d'autres services** dans votre coffre-fort Bitwarden (Bitwarden agissant comme gestionnaire de passkeys) - ce n'est pas l'objet de ce guide.
- **Se connecter à Bitwarden lui-même avec une passkey** - c'est l'objet de ce guide.
- **Utiliser une passkey comme 2FA** sur votre compte Bitwarden (configuration distincte) - ce n'est pas l'objet de ce guide.

Se connecter avec une passkey contourne entièrement la connexion en deux étapes habituelle de Bitwarden - votre Seedkeeper PRO couvre l'authentification en une seule étape, sans que votre mot de passe maître soit nécessaire pour vous connecter. Cela ne fonctionne actuellement que dans l'extension navigateur de Bitwarden (navigateurs fondés sur Chromium) et dans l'application web - pas dans les applications mobiles ni de bureau.

Il y a une seconde couche à configurer en même temps : votre Seedkeeper PRO peut aussi **déchiffrer le coffre-fort**, pas seulement prouver qui vous êtes. Voir [Déverrouiller le coffre-fort, pas seulement se connecter](#déverrouiller-le-coffre-fort-pas-seulement-se-connecter) ci-dessous.

:::note[Votre mot de passe maître reste votre voie de récupération]
Vous pouvez ajouter jusqu'à 5 passkeys par compte. Même avec le déchiffrement du coffre-fort activé, le mot de passe maître demeure le moyen de rentrer si vous perdez toutes vos passkeys enregistrées - gardez-le donc solide et conservé en lieu sûr plutôt que de l'oublier.

Une [note sécurisée](/docs/product-documentation/password-manager/creating-secure-notes) sur une Seedkeeper est un bon emplacement : hors ligne, adossée au matériel, et disponible même si tous vos navigateurs ont disparu.
:::

<WhyHardware />

## Instructions pas à pas

### Étape 1 : aller dans Paramètres → Sécurité

Dans l'application web Bitwarden, rendez-vous dans **Paramètres** → **Sécurité**.

### Étape 2 : sélectionner Mot de passe maître

### Étape 3 : activer la connexion par clé d'accès

Sous **Se connecter avec une clé d'accès**, sélectionnez **Activer** (ou **Nouvelle clé d'accès** si vous en avez déjà une). Saisissez votre mot de passe maître lorsqu'on vous le demande.

### Étape 4 : choisir une clé de sécurité plutôt que votre appareil

Votre navigateur privilégiera par défaut la biométrie de votre appareil (comme Touch ID). Il peut être nécessaire d'annuler cette invite pour choisir une clé de sécurité matérielle à la place.

### Étape 5 : connecter votre Seedkeeper PRO

Insérez votre Seedkeeper PRO, ou approchez-la d'un lecteur NFC.

### Étape 6 : saisir votre PIN

Fournissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) pour finaliser l'enregistrement.

### Étape 7 : la nommer et activer le chiffrement du coffre-fort

Saisissez un nom pour votre passkey. Avant de confirmer, activez **Utiliser pour le chiffrement du coffre-fort** - c'est ce qui permet à l'appareil de déchiffrer votre coffre en plus de vous connecter.

Sélectionnez ensuite **Activer**.

:::tip[Activez-le maintenant, pas plus tard]
L'option de chiffrement du coffre-fort n'est proposée qu'à la création de la passkey. Si vous la sautez, la passkey ne servira qu'à la connexion, et l'activer ensuite impose de supprimer cette passkey et d'en enregistrer une nouvelle.
:::

<img src="/img/screenshots/bitwarden-passkey-created-mockup.png" alt="Clé d'accès créée avec succès dans Bitwarden, avec l'option Utiliser pour le chiffrement du coffre-fort" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

Vous pouvez désormais vous connecter à Bitwarden avec votre Seedkeeper PRO plutôt qu'avec votre mot de passe maître.

## Déverrouiller le coffre-fort, pas seulement se connecter

Se connecter et déchiffrer le coffre-fort sont deux choses différentes chez Bitwarden, et il vaut la peine de comprendre pourquoi.

Votre coffre-fort est chiffré avec une clé dérivée de votre mot de passe maître. Prouver votre identité avec une passkey vous fait franchir la porte ; sans quoi que ce soit dont dériver une clé de déchiffrement, Bitwarden devrait encore réclamer le mot de passe maître pour ouvrir le coffre derrière.

**PRF résout cela.** Le mécanisme permet à Bitwarden de dériver un secret stable depuis votre passkey - la même valeur à chaque fois, produite à l'intérieur du secure element et qui n'en sort jamais. Ce secret devient la clé de déchiffrement du coffre-fort : c'est donc le matériel lui-même qui l'ouvre.

Résultat pratique : **présentez votre Seedkeeper PRO, saisissez votre PIN, et vous êtes dans le coffre.** Aucun mot de passe maître nulle part dans le parcours.

### Ce que cela demande

| Prérequis | État |
|---|---|
| L'authentificateur prend en charge `hmac-secret` | ✅ La Seedkeeper PRO le fait - voir [Device Capabilities](/docs/developers/device-capabilities#ctap2-extensions) |
| Le navigateur expose l'extension WebAuthn `prf` | ✅ Navigateurs fondés sur Chromium - Chrome, Edge, Brave |
| **Utiliser pour le chiffrement du coffre-fort** activé à l'enregistrement | À vous de voir, voir [Étape 7](#étape-7--la-nommer-et-activer-le-chiffrement-du-coffre-fort) |

La prise en charge hors Chromium reste inégale : Firefox et Safari peuvent donc vous connecter sans déverrouiller le coffre. C'est une limite du navigateur, pas de l'appareil.

### Pourquoi cela compte plus ici qu'ailleurs

Un gestionnaire de mots de passe est le seul compte qui garde tous les autres. Déplacer sa clé de déchiffrement de quelque chose que vous retenez - qui peut être hameçonné, deviné ou divulgué - vers quelque chose qui n'existe qu'à l'intérieur d'un secure element certifié change d'un coup la sécurité de tout le contenu du coffre.

Cela supprime aussi la friction quotidienne qui pousse les gens vers des mots de passe maîtres faibles.

## Gérer vos passkeys

Rendez-vous dans **Paramètres** → **Sécurité** → **Mot de passe maître** pour voir vos passkeys enregistrées.

<img src="/img/screenshots/bitwarden-passkeys-list-mockup.png" alt="Liste des clés d'accès dans Bitwarden, avec leur état de chiffrement" className="mockup-image" style={{width: '100%', maxWidth: 'none'}} />

- **Supprimer** : sélectionnez **Supprimer** à côté de la passkey. Cela la déconnecte de Bitwarden - l'identifiant lui-même reste sur votre Seedkeeper PRO.
- **En ajouter une autre** : répétez les étapes ci-dessus pour un appareil de secours - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

:::note[Restrictions]
La connexion par clé d'accès n'est pas disponible si votre organisation impose l'authentification unique (SSO), le SSO avec appareils de confiance, ou utilise Key Connector.
:::

## Où cela s'inscrit

Bitwarden et une Seedkeeper PRO résolvent des problèmes voisins plutôt que concurrents : le coffre-fort contient des centaines d'identifiants avec remplissage automatique, tandis que la clé matérielle contrôle qui y accède - et, avec le chiffrement du coffre activé, détient la clé qui l'ouvre.

Conserver votre mot de passe maître sur l'appareil comme note sécurisée complète le dispositif : le matériel gère l'accès quotidien, et le même objet détient la voie de récupération dont vous n'avez désormais que rarement besoin. Voir [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained) pour la façon dont les deux se combinent.

## Ressources officielles Bitwarden

- [Se connecter et déverrouiller avec des clés d'accès](https://bitwarden.com/help/login-with-passkeys/)

## FAQ

<details>
<summary>Se connecter avec une passkey déverrouille-t-il aussi mon coffre-fort ?</summary>

Oui, lorsque vous activez **Utiliser pour le chiffrement du coffre-fort** à l'enregistrement et que vous utilisez un navigateur fondé sur Chromium. La Seedkeeper PRO prend en charge l'extension `hmac-secret` derrière WebAuthn PRF, celle qu'utilise Bitwarden pour dériver la clé de déchiffrement du coffre. Voir [Déverrouiller le coffre-fort, pas seulement se connecter](#déverrouiller-le-coffre-fort-pas-seulement-se-connecter) ci-dessus.

</details>

<details>
<summary>J'ai activé la passkey mais Bitwarden réclame toujours mon mot de passe maître. Pourquoi ?</summary>

Deux causes probables : le chiffrement du coffre-fort n'était pas activé au moment de la création de la passkey, ou votre navigateur n'expose pas l'extension `prf`. Les navigateurs Chromium le font ; la prise en charge de Firefox et Safari est inégale.

</details>

<details>
<summary>Puis-je oublier mon mot de passe maître une fois que cela fonctionne ?</summary>

Non. Il reste la voie de récupération si vous perdez toutes vos passkeys enregistrées, et Bitwarden ne peut pas le réinitialiser à votre place. Conservez-le en lieu sûr et hors ligne plutôt que de vous fier à votre mémoire.

</details>

<details>
<summary>Cela remplace-t-il aussi la connexion en deux étapes ?</summary>

Oui - se connecter avec une passkey contourne entièrement la connexion en deux étapes. C'est différent de l'usage d'une passkey comme méthode 2FA, qui est une fonctionnalité Bitwarden distincte.

</details>

<details>
<summary>Puis-je ajouter plusieurs Seedkeeper PRO en secours ?</summary>

Oui, jusqu'à 5 passkeys par compte - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) pour la configuration recommandée.

</details>

<details>
<summary>Pourquoi enregistrer une Seedkeeper PRO plutôt que la passkey intégrée de mon téléphone ?</summary>

Les deux mettent le phishing en échec : la réponse honnête est que cela dépend de ce que vaut le compte. Une passkey synchronisée est recopiée sur tous les appareils de votre compte cloud, et ce compte devient la nouvelle cible. Une passkey Seedkeeper PRO existe sur une seule puce certifiée qui ne peut pas l'exporter, sans aucun fournisseur dans la chaîne - ce qui compte quand le compte protège le coffre-fort contenant tous vos autres mots de passe. Voir [Toutes les passkeys ne sont pas stockées de la même façon](/docs/security-academy/passkeys/passkey-vs-password#toutes-les-passkeys-ne-sont-pas-stockées-de-la-même-façon).

</details>

## Articles liés

- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Comment sécuriser Proton avec une passkey](/docs/tutorials/privacy-security-tools/secure-proton-with-a-passkey)
- [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
