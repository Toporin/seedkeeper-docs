---
title: "Python Library and CLI"
description: "seedkeeper-manager configure les applets FIDO2 et OTP depuis Python ou la ligne de commande. À quoi il sert, et où le provisionnement demande de l'attention."
keywords: [seedkeeper-manager, bibliothèque Python FIDO2, CTAP2 python, provisionnement clés de sécurité, FIDO2 ligne de commande, configuration en volume]
sidebar_position: 5
sidebar_label: "Python Library and CLI"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "À quoi sert seedkeeper-manager ?", a: "À configurer les applets FIDO2 et OTP d'une Seedkeeper PRO depuis Python ou la ligne de commande : définir des PIN, charger des identifiants OTP, inspecter l'état de l'appareil, et automatiser tout cela sur de nombreux appareils."},
  {q: "Ai-je besoin de cette bibliothèque pour accepter les passkeys sur mon site ?", a: "Non. Authentifier des utilisateurs exige WebAuthn standard et aucun code Seedkeeper. Cette bibliothèque sert à piloter du matériel que vous détenez."},
  {q: "Quel matériel faut-il pour l'exécuter ?", a: "Un lecteur de cartes à puce à contact ou un lecteur NFC. L'appareil n'a pas d'interface USB HID : un simple port USB ne suffit pas."},
  {q: "Combien de tentatives de PIN échouées avant le verrouillage ?", a: "Huit échecs consécutifs verrouillent l'applet FIDO. La récupération impose de le réinitialiser, ce qui efface définitivement toutes les passkeys stockées sur l'appareil."},
  {q: "Puis-je copier des identifiants OTP d'un appareil à un autre ?", a: "Non. Les secrets OTP sont en écriture seule sur le secure element. Pour disposer du même identifiant sur deux appareils, écrivez-le sur les deux tant que vous détenez encore le secret d'origine."},
]} />

<p class="doc-subtitle">Configurer des appareils depuis un script</p>

<div class="tldr">

[`seedkeeper-manager`](https://github.com/Toporin/seedkeeper-manager) est une bibliothèque Python et un outil en ligne de commande pour configurer les applets FIDO2 et OTP d'une Seedkeeper PRO. Servez-vous-en pour le provisionnement, l'outillage interne et l'automatisation - pas pour authentifier des utilisateurs, ce qui n'exige aucun code.

</div>

## À quoi il sert

Cette bibliothèque pilote l'appareil. C'est le bon outil quand vous êtes celui qui tient le matériel, et le mauvais quand vous authentifiez celui de quelqu'un d'autre.

Usages typiques :

- **Provisionner des appareils avant de les distribuer** - définir un PIN FIDO, relever la longueur minimale de PIN, charger des identifiants OTP
- **Outillage interne** - scripter tout ce qu'un administrateur ferait autrement à la main dans une application
- **Inspection** - lire `authenticatorGetInfo`, énumérer les credentials, vérifier l'état des applets
- **Tests** - éprouver le comportement CTAP2 depuis une suite de tests

Si vous ajoutez la connexion par passkey à un service, vous n'en avez pas besoin. Voir [WebAuthn Quickstart](/docs/developers/webauthn-quickstart).

## Se le procurer

```bash
git clone https://github.com/Toporin/seedkeeper-manager
```

L'installation, les dépendances et la référence des commandes actuelles vivent dans le README du dépôt. Cette page ne les duplique pas délibérément - une copie ici dériverait en une ou deux versions, et une référence périmée vaut moins que pas de référence du tout.

## Ce qu'il faut pour l'exécuter

Un **lecteur de cartes à puce à contact** ou un **lecteur NFC**. Il n'existe aucune voie USB HID sur cet appareil, et c'est la première chose qui surprend ceux qui viennent des clés de sécurité USB.

Sous Linux, cela signifie `pcscd` démarré et votre lecteur reconnu. Sous Windows et macOS, la pile carte à puce intégrée s'en charge généralement. Si l'appareil n'est pas détecté, vérifiez que le lecteur est visible du système avant de déboguer la bibliothèque.

## Ce qui mord pendant le provisionnement

La bibliothèque est simple. C'est le provisionnement à l'échelle qui recèle les problèmes intéressants - voir [Gestion de flotte et provisionnement en volume](/docs/business/fleet-management-and-bulk-provisioning) pour le versant opérationnel du même travail.

### Le verrouillage de PIN survient à huit tentatives

L'applet FIDO se verrouille après **8 tentatives de PIN consécutives échouées**, et la récupération implique de réinitialiser l'applet, ce qui en efface toutes les passkeys.

Dans un script, cela fait huit bugs d'écart avec l'effacement d'un lot entier. Validez la saisie du PIN avant de l'envoyer, et ne réessayez jamais à l'aveugle dans une boucle.

### Une réinitialisation est irréversible

Réinitialiser un applet le ramène à son état d'usine sans annulation possible. Dans un pipeline automatisé, rendez l'étape de réinitialisation explicite et distincte plutôt qu'un effet de bord d'une réexécution.

### Les trois applets sont indépendants

FIDO2, OTP et le gestionnaire de mots de passe ont chacun leur propre PIN et leur propre état - voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin). En réinitialiser un ne touche pas aux autres, et un script de provisionnement doit être explicite sur celui qu'il configure.

### Les secrets OTP sont en écriture seule

Vous pouvez écrire une graine TOTP dans le secure element et vous ne pourrez jamais la relire. C'est la propriété de sécurité, et elle a une conséquence de provisionnement : **si vous avez besoin du même identifiant sur deux appareils, écrivez-le sur les deux tant que vous détenez encore le secret**. Il n'existe aucune migration ensuite - voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

Le stockage est plafonné à **50 identifiants OTP** par appareil.

### Relever la longueur minimale du PIN

`setMinPINLength` est pris en charge : un déploiement peut donc exiger plus que les 4 chiffres par défaut. Cela s'applique par appareil, et a donc sa place dans le script de provisionnement plutôt que dans un document de politique que personne n'exécute.

### Retrait de la carte en cours d'opération

Les opérations NFC échouent quand la carte bouge. Traitez cela comme une situation attendue plutôt que comme une exception, surtout dans une boucle sur de nombreux appareils - un appareil à moitié configuré vaut moins qu'un appareil non configuré.

## Travailler depuis la bibliothèque plutôt que depuis le CLI

Le CLI est une fine couche par-dessus la bibliothèque : tout ce que fait le CLI est donc accessible par programme. Pour un pipeline de provisionnement, la bibliothèque est généralement le meilleur point d'entrée : vous obtenez des erreurs structurées au lieu d'analyser une sortie, et vous pouvez maintenir une connexion ouverte sur plusieurs opérations plutôt que de vous reconnecter à chaque fois.

## Vérifier les capacités d'un appareil

Lire `authenticatorGetInfo` depuis un appareil que vous détenez est la façon faisant autorité de confirmer ce qu'il prend en charge. Tout ce que publie [Device Capabilities](/docs/developers/device-capabilities) peut être vérifié ainsi plutôt que pris pour argent comptant.

## FAQ

<details>
<summary>À quoi sert seedkeeper-manager ?</summary>

À configurer les applets FIDO2 et OTP d'une Seedkeeper PRO depuis Python ou la ligne de commande - définir des PIN, charger des identifiants OTP, inspecter l'état de l'appareil, et automatiser tout cela sur de nombreux appareils.

</details>

<details>
<summary>Ai-je besoin de cette bibliothèque pour accepter les passkeys sur mon site ?</summary>

Non. Authentifier des utilisateurs exige WebAuthn standard et aucun code Seedkeeper. Cette bibliothèque sert à piloter du matériel que vous détenez.

</details>

<details>
<summary>Quel matériel faut-il pour l'exécuter ?</summary>

Un lecteur de cartes à puce à contact ou un lecteur NFC. L'appareil n'a pas d'interface USB HID : un simple port USB ne suffit pas.

</details>

<details>
<summary>Combien de tentatives de PIN échouées avant le verrouillage ?</summary>

Huit échecs consécutifs verrouillent l'applet FIDO. La récupération impose de le réinitialiser, ce qui efface définitivement toutes les passkeys stockées sur l'appareil.

</details>

<details>
<summary>Puis-je copier des identifiants OTP d'un appareil à un autre ?</summary>

Non. Les secrets OTP sont en écriture seule sur le secure element. Pour disposer du même identifiant sur deux appareils, écrivez-le sur les deux tant que vous détenez encore le secret d'origine.

</details>

## Articles liés

- [Device Capabilities](/docs/developers/device-capabilities)
- [Repositories](/docs/developers/repositories)
- [FIDO2 Integration Guide](/docs/developers/fido2-integration-guide)
- [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- [Gestion de flotte et provisionnement en volume](/docs/business/fleet-management-and-bulk-provisioning)
