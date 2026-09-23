---
title: "Organiser vos mots de passe"
description: "Les quatre types de secrets que stocke Seedkeeper, le fonctionnement de la recherche et du filtrage, et pourquoi la liste est toujours triée du plus récent."
keywords: [organiser mots de passe, types de secrets Seedkeeper, rechercher secrets, filtrer par type, mot de passe descripteur seed phrase note]
sidebar_position: 5
sidebar_label: "Organiser vos mots de passe"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je réorganiser mes secrets manuellement ?", a: "Non. Les secrets sont toujours listés du plus récent au plus ancien. Utilisez plutôt la recherche et le filtrage pour trouver ce dont vous avez besoin."},
  {q: "Pourquoi la barre de recherche n'apparaît-elle pas ?", a: "Elle n'apparaît qu'à partir du moment où vos secrets ne tiennent plus tous sur le premier écran."},
  {q: "Quelle différence entre une Note et un Descripteur ?", a: "Une Note est un champ de texte libre pour tout ce que vous souhaitez conserver. Un Descripteur définit spécifiquement un portefeuille crypto."},
]} />

<p class="doc-subtitle">Retrouver ce dont vous avez besoin, même dans une longue liste</p>

<div class="tldr">

Seedkeeper conserve quatre types de secrets, chacun avec sa propre icône. Dès que vous en avez suffisamment, une barre de recherche apparaît et vous permet de chercher par libellé ou de filtrer par type. Les secrets sont toujours listés du plus récent au plus ancien, sans réorganisation manuelle possible.

</div>

## Vue d'ensemble

### Les types de secrets et leurs icônes

| Icône | Type | Description |
|---|---|---|
| <img src="/img/icons/badge-password.svg" alt="Icône mot de passe" width="36" /> | Password | Un mot de passe de connexion |
| <img src="/img/icons/badge-seedphrase.svg" alt="Icône seed phrase" width="36" /> | Seed Phrase | Une [seed phrase](/docs/glossary/seed-phrase) |
| <img src="/img/icons/badge-descriptor.svg" alt="Icône descripteur" width="36" /> | [Descriptor](/docs/glossary/descriptor) | Définit un portefeuille crypto |
| <img src="/img/icons/badge-note.svg" alt="Icône note" width="36" /> | Note | Un champ de texte libre pour tout ce que vous souhaitez conserver |

### Recherche et filtrage

<img src="/img/icons/search-bar-illustration.svg" alt="Barre de recherche dans la Seedkeeper App" className="doc-diagram" style={{maxWidth: '350px'}} />

La barre de recherche n'apparaît qu'à partir du moment où vos secrets ne tiennent plus tous sur le premier écran. Elle vous permet de :
- Rechercher par **libellé**
- **Filtrer par type** - par exemple n'afficher que vos notes

### Ordre de tri

Les secrets sont toujours listés **du plus récent au plus ancien** - le dernier secret créé apparaît en haut de la liste. Il n'existe pas de réorganisation manuelle : utilisez la recherche et le filtrage pour retrouver ce dont vous avez besoin dans une longue liste.

## FAQ

<details>
<summary>Puis-je réorganiser mes secrets manuellement ?</summary>

Non. Les secrets sont toujours listés du plus récent au plus ancien. Utilisez plutôt la [recherche et le filtrage](#recherche-et-filtrage) pour trouver ce dont vous avez besoin.

</details>

<details>
<summary>Pourquoi la barre de recherche n'apparaît-elle pas ?</summary>

Elle n'apparaît qu'à partir du moment où vos secrets ne tiennent plus tous sur le premier écran. Voir [Recherche et filtrage](#recherche-et-filtrage) ci-dessus.

</details>

<details>
<summary>Quelle différence entre une Note et un Descripteur ?</summary>

Une Note est un champ de texte libre pour tout ce que vous souhaitez conserver. Un Descripteur définit spécifiquement un portefeuille crypto. Voir [Les types de secrets et leurs icônes](#les-types-de-secrets-et-leurs-icônes) ci-dessus.

</details>

## Articles liés

- [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password)
- [Créer des notes sécurisées](/docs/product-documentation/password-manager/creating-secure-notes)
- [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases)
- [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained)
- [Erreurs d'import](/docs/troubleshooting/import-errors)
