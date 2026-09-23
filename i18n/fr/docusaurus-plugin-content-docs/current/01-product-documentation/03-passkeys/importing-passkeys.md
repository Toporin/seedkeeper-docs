---
title: "Ajouter une nouvelle passkey"
description: "Une passkey ne s'importe pas : elle est créée par le service lui-même. Comment vérifier la compatibilité et enregistrer votre Seedkeeper PRO sur un site."
keywords: [ajouter passkey, importer passkey, annuaire passkeys, quels services acceptent les passkeys, enregistrer clé de sécurité]
sidebar_position: 4
sidebar_label: "Ajouter une nouvelle passkey"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je importer une passkey depuis un autre appareil ou une autre application ?", a: "Non. Chaque passkey est créée directement par le service que vous sécurisez et enregistrée sur votre Seedkeeper PRO à cet instant. Il n'existe pas d'étape d'import distincte."},
  {q: "Comment savoir si un service prend en charge les passkeys ?", a: "Consultez l'annuaire des passkeys de la FIDO Alliance ou passkeys.directory."},
  {q: "Ai-je besoin de mon PIN de passkey pour cela ?", a: "Oui. Voir Définir votre PIN de passkey si ce n'est pas encore fait."},
]} />

<p class="doc-subtitle">Enregistrer votre Seedkeeper PRO comme passkey sur un service compatible</p>

<div class="tldr">

Il n'existe pas d'« import » de passkey. Vérifiez plutôt que le service que vous voulez utiliser prend en charge les passkeys, puis configurez-en une directement depuis les réglages de sécurité de ce service, en scannant votre Seedkeeper PRO lorsqu'on vous le demande.

</div>

## Vue d'ensemble

Contrairement aux mots de passe, les passkeys ne sont pas créées dans la Seedkeeper App puis déplacées ailleurs : chaque passkey est créée directement par le site web ou l'application que vous sécurisez, et enregistrée à cet instant sur le secure element de votre Seedkeeper PRO. La véritable première étape n'est donc pas d'« importer » quoi que ce soit, mais de vérifier si le service prend en charge les passkeys, puis d'en configurer une depuis ce service.

## Instructions pas à pas

### Étape 1 : vérifier que le service prend en charge les passkeys

Tous les sites et applications n'en proposent pas encore. Consultez l'un de ces annuaires :
- [Annuaire des passkeys de la FIDO Alliance](https://fidoalliance.org/passkeys-directory/)
- [passkeys.directory](https://passkeys.directory/)

### Étape 2 : se connecter et ouvrir les réglages de sécurité

Connectez-vous au service comme d'habitude, puis cherchez ses réglages de sécurité ou de connexion - c'est généralement là que se trouvent les options de passkey.

### Étape 3 : suivre le parcours de configuration du service

La plupart des services rendent cela intuitif : cherchez une option du type « Add a passkey » ou « Set up passkey sign-in ». Lorsqu'on vous propose d'utiliser une clé de sécurité, scannez votre Seedkeeper PRO et saisissez votre [PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin).

:::tip[Des guides pas à pas existent déjà pour les services courants]
Consultez la section [Tutoriels](/docs/category/tutorials) - plus de vingt services couverts, de Google et Microsoft à Amazon, PayPal, GitHub et Dropbox.
:::

## FAQ

<details>
<summary>Puis-je importer une passkey depuis un autre appareil ou une autre application ?</summary>

Non. Chaque passkey est créée directement par le service que vous sécurisez et enregistrée sur votre Seedkeeper PRO à cet instant - il n'existe pas d'étape d'import distincte.

</details>

<details>
<summary>Comment savoir si un service prend en charge les passkeys ?</summary>

Consultez l'[annuaire des passkeys de la FIDO Alliance](https://fidoalliance.org/passkeys-directory/) ou [passkeys.directory](https://passkeys.directory/). Voir [Étape 1](#étape-1--vérifier-que-le-service-prend-en-charge-les-passkeys) ci-dessus.

</details>

<details>
<summary>Ai-je besoin de mon PIN de passkey pour cela ?</summary>

Oui - voir [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin) si ce n'est pas encore fait.

</details>

## Articles liés

- [Créer votre première passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
- [Définir votre PIN de passkey](/docs/product-documentation/passkeys/setting-up-your-passkey-pin)
- [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password)
- [Tutoriels](/docs/category/tutorials)
