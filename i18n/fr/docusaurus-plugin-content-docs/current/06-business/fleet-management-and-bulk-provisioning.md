---
title: "Gestion de flotte et provisionnement en volume"
description: "Configurer des appareils à l'échelle avant qu'ils n'atteignent les utilisateurs : ce qui se scripte, ce qui ne se scripte pas, et les erreurs qui coûtent cher."
keywords: [provisionnement en volume clés de sécurité, gestion de flotte, seedkeeper-manager, configuration PIN scriptée, inventaire d'appareils, déploiement de masse FIDO2]
sidebar_position: 4
sidebar_label: "Gestion de flotte et provisionnement en volume"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Pouvons-nous préenregistrer des passkeys avant de remettre les appareils aux collaborateurs ?", a: "Non. Une passkey est créée par le service lors de l'enregistrement, sur l'appareil présent à cet instant : les utilisateurs doivent donc enregistrer la leur. Les PIN et les identifiants OTP peuvent être provisionnés à l'avance."},
  {q: "Pouvons-nous gérer les appareils à distance une fois remis ?", a: "Non. Il n'y a ni agent, ni canal MDM, ni mise à jour par les airs : l'appareil n'a aucune radio au-delà du champ du lecteur. La gestion passe par un accès physique avec un lecteur."},
  {q: "Combien de tentatives de PIN incorrectes verrouillent un appareil ?", a: "Huit échecs consécutifs verrouillent l'applet FIDO, et la récupération implique de le réinitialiser, ce qui efface toutes les passkeys stockées sur l'appareil. Un script de provisionnement ne doit jamais réessayer à l'aveugle."},
  {q: "Pouvons-nous copier des identifiants OTP entre deux appareils ?", a: "Non. Les secrets OTP sont en écriture seule sur le secure element. Si un identifiant doit exister sur un appareil principal et un appareil de secours, écrivez-le sur les deux lors de la même passe de provisionnement."},
  {q: "Devons-nous définir le PIN, ou laisser l'utilisateur le faire ?", a: "Définissez-en un temporaire pour le transit, puis faites-le changer immédiatement par l'utilisateur à la réception. Un PIN connu de celui qui a provisionné l'appareil ne fonctionne pas comme second facteur."},
  {q: "De quels lecteurs avons-nous besoin ?", a: "De lecteurs de cartes à puce à contact ou de lecteurs NFC. Il n'existe aucune voie USB HID : confirmez la couverture en lecteurs de votre parc avant de commander des appareils à grande échelle."},
]} />

<p class="doc-subtitle">Configurer de nombreux appareils sans en briquer aucun</p>

<div class="tldr">

Les appareils peuvent être configurés depuis un script avant d'atteindre les utilisateurs, avec la [bibliothèque Python et le CLI](/docs/developers/python-library-and-cli). Deux contraintes façonnent tout le reste : l'applet FIDO se verrouille après **8 tentatives de PIN incorrectes**, et les secrets OTP sont **en écriture seule** - un identifiant non écrit pendant le provisionnement ne pourra pas être ajouté à un second appareil plus tard.

</div>

## Ce que vous pouvez faire avant de remettre un appareil

`seedkeeper-manager` pilote l'appareil via un lecteur à contact ou NFC : tout ce qu'un administrateur ferait à la main peut donc être scripté.

- Définir un PIN FIDO initial
- Relever la longueur minimale du PIN au-delà des quatre chiffres par défaut
- Charger des identifiants OTP
- Lire l'état de l'appareil et confirmer la cohérence d'un lot
- Réinitialiser un applet vers un point de départ connu

Détail technique complet dans [Python Library and CLI](/docs/developers/python-library-and-cli).

## Ce que vous ne pouvez pas faire de façon centralisée

Être clair sur la frontière fait gagner du temps de planification.

**Les passkeys ne peuvent pas être préenregistrées.** Une passkey est créée par le service au moment de l'enregistrement, sur l'appareil présent à cet instant. Il n'existe aucun moyen d'en charger une à l'avance - voir [Comment fonctionnent les passkeys](/docs/security-academy/passkeys/how-passkeys-work). Les utilisateurs enregistrent la leur, sur vos services, depuis leur propre poste.

**Il n'y a pas de gestion à distance.** Ni agent, ni canal MDM, ni mise à jour par les airs. L'appareil n'a aucune radio au-delà du champ du lecteur, ce qui est une propriété de sécurité et une contrainte opérationnelle à la fois.

**Vous ne pouvez rien relire.** Les clés privées et les secrets OTP ne peuvent être extraits par personne, vous compris. L'inventaire consiste à consigner ce que vous avez écrit, pas à interroger l'appareil plus tard.

## Les deux contraintes qui mordent

### Huit tentatives de PIN incorrectes verrouillent l'applet

La récupération implique une réinitialisation, qui efface toutes les passkeys de l'appareil. Dans un script de provisionnement, cela fait huit bugs d'écart avec l'effacement d'un lot entier.

**Validez la saisie du PIN avant de l'envoyer, et ne réessayez jamais dans une boucle.** Une tentative échouée doit arrêter le script et signaler l'appareil, pas déclencher un nouvel essai.

### Les secrets OTP sont en écriture seule

Vous pouvez écrire une graine TOTP dans le secure element et ne jamais la relire. La conséquence de provisionnement est précise :

**Si un identifiant doit exister sur deux appareils, écrivez-le sur les deux tant que vous détenez encore le secret.** Il n'existe aucune migration ensuite, ni aucun moyen de copier d'un appareil à l'autre - voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

Pour un modèle à deux appareils par personne, cela signifie provisionner les deux unités dans la même passe.

## Un flux de provisionnement praticable

1. **Déballer et étiqueter.** Consignez le numéro de série ou l'étiquette d'inventaire avant toute chose, et gardez l'appariement principal/secours ensemble.
2. **Définir un PIN temporaire**, identique sur tout le lot, uniquement pour que l'appareil ne reste pas ouvert pendant le transit.
3. **Relever la longueur minimale du PIN** si votre politique exige plus de quatre chiffres.
4. **Écrire les identifiants OTP partagés**, sur les deux appareils d'une paire, dans la même passe.
5. **Vérifier.** Relisez l'état des appareils et confirmez la cohérence du lot avant l'emballage.
6. **Remettre, et faire changer le PIN immédiatement par l'utilisateur.**

Cette dernière étape compte plus qu'il n'y paraît. Un PIN connu de celui qui a provisionné l'appareil n'est pas un second facteur - la possession et la connaissance se trouveraient chez la même personne. Faites-en la première chose que fait l'utilisateur, et confirmez que c'est fait.

## L'inventaire

Tenez une ligne par appareil : numéro de série ou étiquette d'inventaire, principal ou secours, à qui il a été remis, date de remise, statut.

C'est le registre que vous ne pourrez pas reconstituer plus tard, car l'appareil ne vous le dira pas. Deux questions surgissent lors de chaque incident - *qui détient l'appareil X* et *quels appareils détient la personne Y* - et les deux sont triviales si vous l'avez noté au moment de la remise.

Voir [Arrivées et départs des collaborateurs](/docs/business/employee-onboarding-and-offboarding) pour l'usage de cet inventaire tout au long du cycle de vie.

## Les lecteurs

Le blocage pratique de la plupart des déploiements.

L'appareil parle **NFC et contact ISO 7816**, sans voie USB HID - voir [Device Capabilities](/docs/developers/device-capabilities#transports). À confirmer avant de commander à grande échelle :

- Vos postes fixes ont-ils des lecteurs à contact, ou fournirez-vous des lecteurs NFC ?
- Les portables en service ont-ils quoi que ce soit ?
- Votre poste de provisionnement dispose-t-il d'un lecteur qui traite un lot complet de façon fiable ?

Les cartes fonctionnent dans n'importe quel lecteur à contact. Cartes et bagues fonctionnent sur n'importe quel lecteur NFC. Ni les unes ni les autres ne fonctionnent dans un port USB.

## Tester le lot

Avant la distribution, prélevez quelques appareils au hasard et confirmez de bout en bout : PIN accepté, une passkey s'enregistre contre un vrai service, un code OTP est validé.

Un lot provisionné mais jamais testé est un lot que vous déboguerez devant les utilisateurs.

## FAQ

<details>
<summary>Pouvons-nous préenregistrer des passkeys avant de remettre les appareils aux collaborateurs ?</summary>

Non. Une passkey est créée par le service lors de l'enregistrement, sur l'appareil présent à cet instant : les utilisateurs doivent donc enregistrer la leur. Les PIN et les identifiants OTP peuvent être provisionnés à l'avance.

</details>

<details>
<summary>Pouvons-nous gérer les appareils à distance une fois remis ?</summary>

Non. Il n'y a ni agent, ni canal MDM, ni mise à jour par les airs - l'appareil n'a aucune radio au-delà du champ du lecteur. La gestion passe par un accès physique avec un lecteur.

</details>

<details>
<summary>Combien de tentatives de PIN incorrectes verrouillent un appareil ?</summary>

Huit échecs consécutifs verrouillent l'applet FIDO, et la récupération implique de le réinitialiser, ce qui efface toutes les passkeys stockées sur l'appareil. Un script de provisionnement ne doit jamais réessayer à l'aveugle.

</details>

<details>
<summary>Pouvons-nous copier des identifiants OTP entre deux appareils ?</summary>

Non. Les secrets OTP sont en écriture seule sur le secure element. Si un identifiant doit exister sur un appareil principal et un appareil de secours, écrivez-le sur les deux lors de la même passe de provisionnement.

</details>

<details>
<summary>Devons-nous définir le PIN, ou laisser l'utilisateur le faire ?</summary>

Définissez-en un temporaire pour le transit, puis faites-le changer immédiatement par l'utilisateur à la réception. Un PIN connu de celui qui a provisionné l'appareil ne fonctionne pas comme second facteur.

</details>

<details>
<summary>De quels lecteurs avons-nous besoin ?</summary>

De lecteurs de cartes à puce à contact ou de lecteurs NFC. Il n'existe aucune voie USB HID : confirmez la couverture en lecteurs de votre parc avant de commander des appareils à grande échelle.

</details>

## Articles liés

- [Python Library and CLI](/docs/developers/python-library-and-cli)
- [Arrivées et départs des collaborateurs](/docs/business/employee-onboarding-and-offboarding)
- [Déployer Seedkeeper PRO dans votre organisation](/docs/business/deploying-seedkeeper-pro-in-your-organization)
- [Device Capabilities](/docs/developers/device-capabilities)
