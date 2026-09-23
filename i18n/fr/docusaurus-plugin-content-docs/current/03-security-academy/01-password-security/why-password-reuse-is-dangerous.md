---
title: "Pourquoi réutiliser un mot de passe est dangereux"
description: "Réutiliser un mot de passe signifie qu'une seule fuite, n'importe où, peut ouvrir tous les comptes qui le partagent. Voici comment cela se déroule."
keywords: [réutilisation mot de passe, credential stuffing, fuite de données, prise de contrôle de compte, mots de passe uniques, have i been pwned, NIS2]
sidebar_position: 3
sidebar_label: "Pourquoi réutiliser un mot de passe est dangereux"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Qu'est-ce que le credential stuffing ?", a: "La technique automatisée consistant à prendre un couple e-mail et mot de passe divulgué et à le tester sur des dizaines d'autres services à la fois."},
  {q: "Un mot de passe solide me protège-t-il du risque lié à la réutilisation ?", a: "Non. La solidité et l'unicité protègent contre des menaces différentes : l'attaquant ne devine pas votre mot de passe, il le possède déjà grâce à la fuite."},
  {q: "Comment savoir si l'un de mes mots de passe a déjà fuité ?", a: "Le service de référence est Have I Been Pwned (haveibeenpwned.com), une base de notification de fuites gratuite maintenue par le chercheur en sécurité Troy Hunt et utilisée aussi bien par des gouvernements que par des éditeurs de navigateurs. Saisissez une adresse e-mail et il vous indique dans quelles fuites connues elle apparaît. Si la vôtre y figure, considérez ce mot de passe, et tous les comptes qui l'utilisent encore, comme compromis."},
  {q: "La réutilisation de mots de passe à titre personnel met-elle mon employeur en danger ?", a: "Oui, et c'est l'une des voies d'entrée les plus fréquentes dans une entreprise. Un compte personnel dont le mot de passe est partagé avec un compte professionnel signifie qu'une fuite chez un service grand public peut livrer un accès d'entreprise à un attaquant."},
  {q: "Puis-je réutiliser un mot de passe sur des sites « sans importance » ?", a: "Pas vraiment : beaucoup de ces sites détiennent votre adresse e-mail, qui est souvent la véritable cible. Un attaquant n'a pas besoin de votre mot de passe bancaire s'il peut le réinitialiser depuis une boîte mail compromise."},
]} />

<p class="doc-subtitle">Une fuite, tous les comptes</p>

<div class="tldr">

Quand vous réutilisez un [mot de passe](/docs/glossary/password) d'un site à l'autre, une fuite chez l'un d'eux livre aux attaquants la clé de tous les autres. C'est l'une des toutes premières causes de prise de contrôle de compte - et cela n'a rien à voir avec la solidité du mot de passe lui-même.

</div>

## Comment cela se déroule réellement

Imaginons que vous utilisiez le même mot de passe pour un forum auquel vous vous êtes inscrit il y a des années et pour votre messagerie. Le forum subit une fuite - cela arrive en permanence, à des entreprises de toutes tailles. Votre adresse e-mail et votre mot de passe, présents dans la base de ce forum, se retrouvent entre les mains d'attaquants, souvent regroupés avec des millions d'autres identifiants volés, puis vendus ou partagés en ligne.

À partir de là, les attaquants font tourner des outils automatisés qui reprennent ce même couple e-mail et mot de passe et le testent, à grande échelle, contre Gmail, des sites bancaires, Amazon et des milliers d'autres services. C'est ce qu'on appelle le **credential stuffing**, et cela n'exige de casser quoi que ce soit : il suffit que vous ayez utilisé ce mot de passe ailleurs.

Si votre messagerie fait partie des comptes ainsi ouverts, les dégâts s'aggravent très vite : un attaquant ayant accès à votre e-mail peut réinitialiser le mot de passe de presque tous vos autres comptes.

## Pourquoi cela contourne les mots de passe « solides »

C'est ce qui surprend le plus : **la solidité du mot de passe ne vous protège pas ici.** Un mot de passe de 20 caractères parfaitement aléatoire est tout aussi dangereux à réutiliser qu'un mot de passe faible, parce que l'attaquant ne le devine pas - il le possède déjà, en clair, grâce à la fuite. Voir [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password) pour comprendre contre quoi la solidité protège réellement, et pourquoi c'est un problème distinct de la réutilisation.

La solidité empêche quelqu'un de deviner votre mot de passe. L'unicité empêche quelqu'un qui le possède déjà de s'en servir ailleurs.

## Pourquoi les gens réutilisent quand même

Ce n'est pas de la négligence, c'est de l'arithmétique. Si vous employez un mot de passe unique pour chaque compte et que vous en avez, de façon réaliste, plusieurs dizaines, cela fait plusieurs dizaines de mots de passe à retenir. La mémoire humaine ne fonctionne pas ainsi : les gens se rabattent donc sur une poignée de mots de passe, ou sur de légères variations d'un seul, réutilisés partout.

Ce n'est pas un problème de discipline à résoudre par la volonté, mais un problème structurel qui appelle une réponse structurelle.

## La solution : ne plus être celui qui retient

La solution pratique consiste à vous retirer entièrement de l'étape « mémorisation ». Un gestionnaire de mots de passe génère et conserve un mot de passe unique pour chaque compte : la réutilisation cesse alors d'être tentante, puisque vous n'alliez de toute façon en retenir aucun.

:::tip[Générez un mot de passe unique pour chaque compte avec Seedkeeper]
Chaque fois que vous créez un mot de passe avec votre Seedkeeper, il est généré à neuf et stocké sur le secure element de l'appareil - jamais réutilisé, jamais quelque chose que vous devez mémoriser. Voir [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password) pour l'essayer.
:::

## La réutilisation est aussi un problème d'organisation

Tout ce qui précède décrit un risque personnel, mais le même mécanisme est l'une des voies les plus fréquentes par lesquelles les entreprises se font compromettre.

Un collaborateur réutilise un mot de passe entre un site grand public et un compte professionnel. Le site grand public subit une fuite. Les identifiants circulent, sont testés automatiquement contre des services d'entreprise, et l'un d'eux fonctionne. Aucun logiciel malveillant, aucune faille exploitée, aucune sophistication - juste un mot de passe qui existait à deux endroits.

C'est pourquoi la directive européenne **NIS2** traite le contrôle d'accès et l'authentification comme des obligations de gestion des risques plutôt que comme de bonnes pratiques. L'article 21(2) les cite parmi les mesures que les entités concernées doivent adopter, et l'article 21(2)(j) couvre spécifiquement [l'authentification multifacteur](/docs/security-academy/authentication/what-is-mfa) ou continue. La sensibilisation aide, mais elle demande aux gens de tenir une discipline pour laquelle la mémoire humaine n'a jamais été conçue - et c'est pourquoi les réponses durables sont structurelles : des identifiants générés que personne ne mémorise, et une authentification résistante au phishing sur les accès à privilèges et distants. Voir [Pourquoi des clés matérielles pour votre entreprise](/docs/business/why-hardware-keys-for-your-business) et [Les passkeys et NIS2](/docs/security-academy/passkeys/passkey-vs-password#les-passkeys-et-nis2).

## Les passkeys suppriment la tentation

Pour vos comptes les plus importants, les [passkeys](/docs/glossary/passkey) vont plus loin : elles sont cryptographiquement uniques à chaque service par conception, de sorte que la réutilisation d'un site à l'autre n'est pas seulement déconseillée, elle est techniquement impossible. Voir [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey).

## FAQ

<details>
<summary>Qu'est-ce que le credential stuffing ?</summary>

La technique automatisée consistant à prendre un couple e-mail et mot de passe divulgué et à le tester sur des dizaines d'autres services à la fois. Voir [Comment cela se déroule réellement](#comment-cela-se-déroule-réellement) ci-dessus.

</details>

<details>
<summary>Un mot de passe solide me protège-t-il du risque lié à la réutilisation ?</summary>

Non - la solidité et l'unicité protègent contre des menaces différentes. Voir [Pourquoi cela contourne les mots de passe « solides »](#pourquoi-cela-contourne-les-mots-de-passe--solides-) ci-dessus.

</details>

<details>
<summary>Comment savoir si l'un de mes mots de passe a déjà fuité ?</summary>

Le service de référence est **Have I Been Pwned** (haveibeenpwned.com), une base de notification de fuites gratuite maintenue par le chercheur en sécurité Troy Hunt et utilisée aussi bien par des gouvernements que par des éditeurs de navigateurs. Saisissez une adresse e-mail et il vous indique dans quelles fuites connues elle apparaît. Si la vôtre y figure, considérez ce mot de passe - et tous les comptes qui l'utilisent encore - comme compromis.

</details>

<details>
<summary>La réutilisation de mots de passe à titre personnel met-elle mon employeur en danger ?</summary>

Oui, et c'est l'une des voies d'entrée les plus fréquentes dans une entreprise. Un compte personnel dont le mot de passe est partagé avec un compte professionnel signifie qu'une fuite chez un service grand public peut livrer un accès d'entreprise à un attaquant. Voir [La réutilisation est aussi un problème d'organisation](#la-réutilisation-est-aussi-un-problème-dorganisation) ci-dessus.

</details>

<details>
<summary>Puis-je réutiliser un mot de passe sur des sites « sans importance » ?</summary>

Pas vraiment - beaucoup de ces sites détiennent votre adresse e-mail, qui est souvent la véritable cible. Un attaquant n'a pas besoin de votre mot de passe bancaire s'il peut le réinitialiser depuis une boîte mail compromise.

</details>

## Articles liés

- [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password)
- [Créer un nouveau mot de passe](/docs/product-documentation/password-manager/creating-a-new-password)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password)
- [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked)
- [Qu'est-ce que la MFA ?](/docs/security-academy/authentication/what-is-mfa)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
