---
title: "Qu'est-ce qu'un mot de passe solide ?"
description: "Un mot de passe solide est long, aléatoire et propre à un seul compte. Ce qui rend réellement un mot de passe difficile à casser, et comment en créer un."
keywords: [mot de passe solide, exemples de mot de passe fort, longueur mot de passe, passphrase, entropie mot de passe, générateur de mot de passe]
sidebar_position: 2
sidebar_label: "Qu'est-ce qu'un mot de passe solide ?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quelle longueur doit avoir un mot de passe solide ?", a: "Au moins 12 à 16 caractères pour la plupart des comptes, davantage pour tout ce qui est particulièrement sensible."},
  {q: "Faut-il inclure des symboles et des chiffres ?", a: "Cela aide un peu, mais c'est bien moins important que la longueur et le hasard. Les règles de complexité produisent souvent des motifs prévisibles qui facilitent le travail des attaquants."},
  {q: "Est-il prudent de laisser un gestionnaire générer mes mots de passe ?", a: "Oui, c'est même l'approche recommandée : elle supprime la tendance humaine aux motifs prévisibles, que personne ne parvient à éviter en inventant un mot de passe soi-même."},
  {q: "Plusieurs mots aléatoires sont-ils vraiment plus solides qu'un mot de passe court et complexe ?", a: "Oui, très largement, à condition que les mots soient tirés au hasard et non choisis par vous. Cinq mots aléatoires sont des milliers de fois plus résistants que huit caractères aléatoires."},
  {q: "Un mot de passe solide me protège-t-il du phishing ?", a: "Non. La solidité ne protège que contre les tentatives de devinette. Si vous saisissez un mot de passe dans une fausse page, sa longueur et son caractère aléatoire n'ont aucune importance puisque vous l'avez livré vous-même. Seule une passkey, liée au domaine réel, s'y oppose."},
  {q: "Puis-je réutiliser un mot de passe solide sur un site de confiance ?", a: "Non. La réutilisation annule entièrement le bénéfice de la solidité, puisqu'une fuite n'importe où met en danger tous les comptes concernés."},
]} />

import BuySeedkeeperPro from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-seedkeeper-pro.mdx';

<p class="doc-subtitle">Longueur, hasard et unicité - dans cet ordre</p>

<div class="tldr">

Un [mot de passe](/docs/glossary/password) solide est long, imprévisible, et utilisé sur un seul compte. La longueur compte davantage que les règles de complexité sur les caractères spéciaux, et réutiliser un mot de passe, même solide, en annule l'essentiel de la valeur. La solidité ne reste toutefois que la moitié de la réponse : un mot de passe demeure [quelque chose que vous savez](/docs/security-academy/authentication/authentication-factors-explained), et toute cette catégorie peut être livrée.

</div>

## Les trois choses qui comptent vraiment

Oubliez un instant le « doit contenir une majuscule et un symbole » : c'est une vieille règle empirique, pas la véritable mesure de la solidité. Ce qui détermine réellement la difficulté à casser un mot de passe tient en trois points.

### 1. La longueur

Chaque caractère supplémentaire rend un mot de passe exponentiellement plus difficile à deviner par force brute. Un mot de passe de 8 caractères est cassé par du matériel actuel en quelques heures ; un mot de passe de 16 caractères peut demander des siècles, avec le même jeu de caractères. **La longueur est le facteur de solidité le plus déterminant.**

### 2. Le hasard

Les motifs prévisibles sont la première chose qu'essaient les attaquants : `Password123!`, le nom de votre animal, votre année de naissance, les suites de clavier comme `azerty`. Un mot de passe réellement aléatoire - qui ne repose ni sur un mot, ni sur un motif, ni sur une information personnelle - ne peut pas être court-circuité par ces techniques de devinette courantes.

### 3. L'unicité

Un mot de passe solide utilisé sur cinq comptes différents ne vaut que ce que vaut le moins sûr de ces cinq services. Si un seul est compromis, les attaquants essaieront ce même mot de passe partout ailleurs - une technique appelée **credential stuffing**. Un mot de passe solide mais réutilisé n'est pas vraiment solide. Voir [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous) pour en observer les conséquences concrètes.

## Pourquoi « ajoutez un symbole » n'est pas la vraie réponse

De nombreux sites exigent encore un mélange de majuscules, minuscules, chiffres et symboles. Ce n'est pas faux à proprement parler - cela ajoute un peu de hasard - mais l'effet se retourne souvent : les gens répondent à ces règles de façon prévisible (`Password1!` est un motif extrêmement courant), ce qui rend en réalité les mots de passe *plus* faciles à deviner, pas moins.

Un mot de passe long et généré aléatoirement, composé uniquement de minuscules, est souvent plus solide qu'un mot de passe court qui satisfait techniquement toutes les règles de complexité.

Il faut savoir où se situe le plafond de cette approche. La solidité protège contre les tentatives de devinette, et rien d'autre. Un mot de passe parfaitement généré de 30 caractères saisi dans une fausse page convaincante est livré aussi facilement que `123456` - voir [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password) pour la méthode d'authentification qui comble cet écart.

## Mettez-vous à l'épreuve

**Quatre mots de passe, quatre niveaux de protection très différents. Lequel demanderait le plus de temps à un attaquant ?**

| | Mot de passe |
|---|---|
| **A** | `J&nn1e_1987!` |
| **B** | `Xk7#pR2$` |
| **C** | `Password123456789!` |
| **D** | `velvet-tractor-orange-mountain-copper` |

<details>
<summary>Afficher la réponse</summary>

**D l'emporte, et de loin.** Celui qui a l'air d'avoir été tapé par quelqu'un qui abandonnait est le seul qu'un attaquant ne puisse pas atteindre.

Voici comment chacun résiste à une attaque hors ligne testant 100 milliards de propositions par seconde - un chiffre réaliste pour une base divulguée et une grappe de GPU louée :

- **A - `J&nn1e_1987!`** tombe en quelques minutes. Onze caractères, une majuscule, des chiffres et deux symboles, et il échoue quand même : c'est un prénom, une année de naissance et des substitutions prévisibles. Les outils de cassage ne devinent pas caractère par caractère, ils appliquent précisément ces règles aux mots du dictionnaire en priorité - voir [Force brute et attaques par dictionnaire](/docs/security-academy/password-security/how-passwords-are-cracked#force-brute-et-attaques-par-dictionnaire).
- **B - `Xk7#pR2$`** tient environ une journée. Huit caractères réellement aléatoires, aucun motif exploitable - mais huit seulement. C'est le mot de passe que produisent la plupart des règles de complexité, et il est déjà à portée.
- **C - `Password123456789!`** tombe en quelques secondes. Dix-huit caractères, et toutes les listes de cassage de la planète le contiennent déjà. La longueur sans le hasard n'apporte rien.
- **D - `velvet-tractor-orange-mountain-copper`** demanderait environ neuf ans. Cinq mots ordinaires, aucun symbole à retenir, rien à consulter - et plusieurs milliers de fois plus solide que B.

La leçon suit l'ordre énoncé plus haut : **la longueur bat la complexité, et le hasard bat les deux**. Ce qui vous protège, c'est le nombre de possibilités qu'un attaquant doit parcourir, pas l'aspect rébarbatif du mot de passe.

Une condition, et c'est celle que tout le monde manque : les mots doivent être tirés **au hasard**, par des dés ou par un générateur, jamais choisis par vous. Une phrase que vous avez inventée suit les motifs de votre propre esprit, et ces motifs sont devinables. Ajoutez un sixième mot et les neuf ans deviennent des dizaines de milliers d'années.

C'est précisément ce que produit le générateur **Easy to Read** de votre Seedkeeper - voir l'encadré ci-dessous.

Aucun de ces quatre mots de passe ne devrait jamais être utilisé : ils sont publiés sur cette page.

</details>

## La façon la plus simple de bien faire

Les humains sont mauvais pour produire du hasard sur commande : livré à vous-même, vous vous appuierez inconsciemment sur des motifs, des mots ou des choses que vous connaissez déjà. La solution fiable consiste à cesser de créer des mots de passe à la main et à laisser un outil s'en charger.

C'est exactement le rôle d'un générateur de mots de passe : il produit un mot de passe long et réellement aléatoire, sans motif mémorisable qu'un attaquant puisse exploiter - et puisque ce n'est pas vous qui devez le retenir, la longueur cesse d'être un inconvénient.

:::tip[Générez et stockez des mots de passe solides avec Seedkeeper]
Votre Seedkeeper vous permet de générer un mot de passe solide au moment de créer une nouvelle entrée, et de le stocker directement sur le secure element de votre carte ou de votre bague - jamais sur votre téléphone ni sur votre ordinateur.

Vous choisissez la recette : minuscules, majuscules et symboles pour une chaîne entièrement aléatoire, ou **Easy to Read** pour un mot de passe composé de mots comme `velvet-tractor-orange-mountain` - le modèle gagnant du quiz ci-dessus, tiré au hasard correctement plutôt qu'inventé par vous. Les deux se combinent, ce qui donne par exemple `velvet-tractor$-orange@-mountain` lorsque les symboles sont activés.

Voir [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password) pour l'essayer.
:::

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Quelle longueur doit avoir un mot de passe solide ?</summary>

Au moins 12 à 16 caractères pour la plupart des comptes, davantage pour tout ce qui est particulièrement sensible. Voir [La longueur](#1-la-longueur) ci-dessus.

</details>

<details>
<summary>Faut-il inclure des symboles et des chiffres ?</summary>

Cela aide un peu, mais c'est bien moins important que la longueur et le hasard - voir [Pourquoi « ajoutez un symbole » n'est pas la vraie réponse](#pourquoi--ajoutez-un-symbole--nest-pas-la-vraie-réponse) ci-dessus.

</details>

<details>
<summary>Est-il prudent de laisser un gestionnaire générer mes mots de passe ?</summary>

Oui, c'est même l'approche recommandée, puisqu'elle supprime la tendance humaine aux motifs prévisibles. Voir [La façon la plus simple de bien faire](#la-façon-la-plus-simple-de-bien-faire) ci-dessus.

</details>

<details>
<summary>Plusieurs mots aléatoires sont-ils vraiment plus solides qu'un mot de passe court et complexe ?</summary>

Oui, très largement - à condition que les mots soient tirés au hasard et non choisis par vous. Voir [Mettez-vous à l'épreuve](#mettez-vous-à-lépreuve) ci-dessus, et [Passphrase](/docs/glossary/passphrase).

</details>

<details>
<summary>Un mot de passe solide me protège-t-il du phishing ?</summary>

Non. La solidité ne protège que contre les tentatives de devinette. Si vous saisissez un mot de passe dans une fausse page, sa longueur et son caractère aléatoire n'ont aucune importance puisque vous l'avez livré vous-même. Seule une passkey, liée au domaine réel, s'y oppose - voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer).

</details>

<details>
<summary>Puis-je réutiliser un mot de passe solide sur un site de confiance ?</summary>

Non. La réutilisation annule entièrement le bénéfice de la solidité, puisqu'une fuite n'importe où met en danger tous les comptes concernés. Voir [L'unicité](#3-lunicité) ci-dessus.

</details>

## Articles liés

- [Qu'est-ce qu'un mot de passe ?](/docs/security-academy/password-security/what-is-a-password)
- [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous)
- [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password)
- [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked)
- [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained)
- [Qu'est-ce que la 2FA ?](/docs/security-academy/authentication/what-is-2fa)
