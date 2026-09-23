---
title: "Erreurs d'import"
description: "L'application refuse une seed phrase, signale un manque d'espace, ou rejette une entrée. Ce que signifie chaque erreur et comment y remédier."
keywords: [seed phrase invalide, erreur somme de contrôle BIP39, mémoire pleine, échec import, Seedkeeper plus d'espace, mnémonique rejeté]
sidebar_position: 8
sidebar_label: "Erreurs d'import"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Pourquoi l'application indique-t-elle que ma seed phrase est invalide ?", a: "Elle a échoué à la validation BIP39 : généralement un mot mal orthographié, des mots dans le mauvais ordre, une phrase incomplète, ou la mauvaise liste de langue. Ce contrôle existe pour détecter les erreurs de transcription tant que vous pouvez encore les corriger."},
  {q: "Puis-je stocker une seed phrase non BIP39 ?", a: "Oui, sous forme de note sécurisée plutôt que de Mnemonic Phrase. Les graines Electrum, les phrases Monero et les clés privées brutes s'enregistrent en texte libre, avec la même protection mais sans le contrôle de format."},
  {q: "Que signifie le point d'exclamation rouge quand j'ajoute un secret ?", a: "L'appareil n'a plus de mémoire. Il dispose de 8 Ko partagés entre tous les secrets : vérifiez l'occupation en haut de Card's Information et supprimez les entrées dont vous n'avez plus besoin."},
  {q: "Combien de mots de passe tiennent sur une Seedkeeper ?", a: "Une centaine environ, selon la quantité de libellé et de détails que vous conservez pour chacun. Les notes longues et les seed phrases consomment nettement plus qu'une entrée de mot de passe courte."},
  {q: "J'ai importé un secret et il est erroné. Puis-je le modifier ?", a: "Non. Le secure element ne peut pas modifier des données enregistrées, seulement en créer ou en supprimer. Recopiez les informations, supprimez l'entrée, et recréez-la avec vos corrections."},
]} />

import GetSupport from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_get-support.mdx';

<p class="doc-subtitle">Quand l'application refuse ce que vous enregistrez</p>

<div class="tldr">

Trois erreurs en expliquent la quasi-totalité : une seed phrase qui échoue à la **somme de contrôle BIP39**, un appareil **à court d'espace**, et un scan interrompu avant la fin de l'écriture. Les deux premières sont l'application qui vous protège, pas qui dysfonctionne.

</div>

## « Votre seed phrase est invalide »

L'application valide chaque mnémonique au regard du standard BIP39 avant de l'enregistrer, et refuse tout ce qui échoue. Ce refus est délibéré : une erreur détectée pendant la saisie coûte trente secondes, la même erreur détectée des années plus tard pendant une récupération coûte tout.

Vérifiez, dans cet ordre :

**L'orthographe.** Chaque mot doit provenir exactement de la liste BIP39. `recieve` n'est pas un mot ; `receive` en est un.

**L'ordre des mots.** La phrase est une séquence ordonnée, pas un ensemble. Les mêmes mots dans un autre ordre forment une phrase différente - et souvent une phrase valide correspondant au portefeuille vide de quelqu'un d'autre.

**L'exhaustivité.** 12, 15, 18, 21 ou 24 mots. Onze mots ne seront jamais validés.

**La langue.** Les listes de mots BIP39 existent en plusieurs langues et ne sont pas interchangeables. Une phrase française ne sera pas validée par la liste anglaise.

**S'il s'agit bien de BIP39.** Electrum utilise son propre schéma, Monero un format à 25 mots, et certains portefeuilles ont le leur. Aucun de ceux-ci n'est validé par BIP39 - voir ci-dessous.

Contexte dans [Qu'est-ce que BIP39 ?](/docs/security-academy/seed-phrases/what-is-bip39).

## Enregistrer quelque chose qui n'est pas du BIP39

Utilisez une **note sécurisée** plutôt que l'option Mnemonic Phrase.

Une graine Electrum, une phrase Monero, une clé privée brute ou tout autre élément de récupération s'enregistre en texte libre : même secure element, même PIN, mêmes garanties hors ligne, sans le contrôle de format - voir [Créer des notes sécurisées](/docs/product-documentation/password-manager/creating-secure-notes).

Un compromis mérite d'être connu : une note accepte tout, elle ne vérifie donc rien. Vous perdez le filet de sécurité de la somme de contrôle, ce qui implique de transcrire avec le soin qu'elle vous aurait autrement apporté.

## « Plus d'espace » ou un point d'exclamation rouge

Votre appareil dispose de **8 Ko partagés entre tous les secrets**. Quand il est plein, tenter une nouvelle entrée produit une notification NFC avec un point d'exclamation rouge et une erreur de mémoire.

Vérifiez l'occupation actuelle en haut de **Card's Information** : version du firmware, nombre de secrets, octets utilisés et octets disponibles - voir [Réglages de l'appareil](/docs/product-documentation/getting-started/device-settings).

En pratique, cela représente une centaine de mots de passe, selon la quantité de libellé et de détails que vous attachez à chacun. Les seed phrases et les notes longues consomment sensiblement plus qu'une entrée de mot de passe courte.

Pour libérer de l'espace :

- **Supprimez les entrées dont vous n'avez plus besoin** - voir [Supprimer un mot de passe](/docs/product-documentation/password-manager/deleting-a-password)
- **Raccourcissez les notes longues**, le texte libre étant le plus gros consommateur
- **Déplacez les secrets rarement utilisés vers un second appareil**, qu'il vaut de toute façon la peine d'avoir

Notez que les identifiants OTP et les passkeys résident dans des applets distincts dotés de leurs propres limites - 50 et 90 respectivement - et ne consomment pas la mémoire du gestionnaire de mots de passe.

## L'import a été interrompu

Si la carte a bougé pendant le dernier scan, l'écriture a pu s'achever ou non.

**Vérifiez avant de réessayer.** Ouvrez la liste des secrets et cherchez l'entrée. Importer deux fois le même secret est sans danger mais laisse un doublon qu'il faudra nettoyer.

Pour l'éviter : posez le téléphone sur une table, maintenez la carte contre lui, et gardez-la en place jusqu'à la confirmation de l'application - voir [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues).

## L'entrée a été enregistrée mais elle est erronée

**Vous ne pouvez pas la modifier.** Le secure element peut créer et supprimer, jamais modifier sur place. Corriger une entrée signifie recopier les informations, la supprimer, la recréer - voir [Modifier un mot de passe](/docs/product-documentation/password-manager/editing-a-password).

**Vérifiez que vous ne regardez pas une entrée plus ancienne.** Les secrets sont listés du plus récent au plus ancien, et un doublon issu d'un import interrompu se trouvera en haut tandis que l'original sera plus bas.

## L'entrée n'apparaît pas dans la liste

**L'ordre de tri.** Du plus récent au plus ancien, toujours. Un secret ajouté il y a quelque temps se trouve plus bas que vous ne le pensez.

**La recherche n'apparaît que lorsque la liste est longue.** La barre de recherche s'affiche dès que vos secrets ne tiennent plus sur un seul écran - voir [Organiser vos mots de passe](/docs/product-documentation/password-manager/organizing-passwords).

**Le mauvais appareil.** Avec deux cartes identiques, c'est plus fréquent qu'il n'y paraît. Nommez-les dans Card's Information.

## FAQ

<details>
<summary>Pourquoi l'application indique-t-elle que ma seed phrase est invalide ?</summary>

Elle a échoué à la validation BIP39 - généralement un mot mal orthographié, des mots dans le mauvais ordre, une phrase incomplète, ou la mauvaise liste de langue. Ce contrôle existe pour détecter les erreurs de transcription tant que vous pouvez encore les corriger.

</details>

<details>
<summary>Puis-je stocker une seed phrase non BIP39 ?</summary>

Oui, sous forme de note sécurisée plutôt que de Mnemonic Phrase. Les graines Electrum, les phrases Monero et les clés privées brutes s'enregistrent en texte libre, avec la même protection mais sans le contrôle de format.

</details>

<details>
<summary>Que signifie le point d'exclamation rouge quand j'ajoute un secret ?</summary>

L'appareil n'a plus de mémoire. Il dispose de 8 Ko partagés entre tous les secrets - vérifiez l'occupation en haut de Card's Information et supprimez les entrées dont vous n'avez plus besoin.

</details>

<details>
<summary>Combien de mots de passe tiennent sur une Seedkeeper ?</summary>

Une centaine environ, selon la quantité de libellé et de détails que vous conservez pour chacun. Les notes longues et les seed phrases consomment nettement plus qu'une entrée de mot de passe courte.

</details>

<details>
<summary>J'ai importé un secret et il est erroné. Puis-je le modifier ?</summary>

Non. Le secure element ne peut pas modifier des données enregistrées, seulement en créer ou en supprimer. Recopiez les informations, supprimez l'entrée, et recréez-la avec vos corrections.

</details>

## Articles liés

- [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Créer des notes sécurisées](/docs/product-documentation/password-manager/creating-secure-notes)
- [Modifier un mot de passe](/docs/product-documentation/password-manager/editing-a-password)
- [Réglages de l'appareil](/docs/product-documentation/getting-started/device-settings)
- [Qu'est-ce que BIP39 ?](/docs/security-academy/seed-phrases/what-is-bip39)

<GetSupport />
