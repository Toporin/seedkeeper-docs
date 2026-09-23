---
title: "Guide de cybersécurité familiale"
description: "Protéger des gens qui n'ont rien demandé : comptes partagés, enfants, proches moins à l'aise, et ce qu'il advient de vos comptes après vous."
keywords: [cybersécurité familiale, protéger ma famille en ligne, sécurité des enfants en ligne, arnaques parents âgés, comptes familiaux partagés, héritage numérique]
sidebar_position: 5
sidebar_label: "Guide de cybersécurité familiale"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Comment protéger ma famille en ligne sans devenir son service informatique ?", a: "Misez sur les habitudes plutôt que sur les outils : personne de légitime ne demande un mot de passe ou un code, chaque compte a son propre mot de passe, et l'authentification à deux facteurs va sur la messagerie et la banque. Mettez cela en place une fois et la charge continue est faible."},
  {q: "Quelle est la meilleure façon de partager un mot de passe en famille ?", a: "Utilisez la fonction famille ou partage du service quand elle existe. Là où un mot de passe partagé est inévitable, traitez-le comme semi-public : jamais réutilisé, ne protégeant jamais rien d'important, et changé quand quelqu'un s'en va."},
  {q: "Comment protéger des parents âgés des arnaques téléphoniques ?", a: "Enseignez une seule règle - raccrocher et rappeler sur un numéro que l'on a cherché soi-même - et convenez d'une question de vérification pour tout ce qui touche à l'argent ou aux identifiants. Le clonage de voix a rendu peu fiable la reconnaissance d'une voix familière."},
  {q: "Qu'advient-il de mes comptes si je meurs ?", a: "Sans préparation, souvent rien de récupérable. Configurez les contacts légataires là où les services en proposent, et laissez une voie d'accès physique - une lettre scellée ou un appareil hors ligne avec son PIN - plutôt que de compter sur les services d'assistance."},
  {q: "À quel âge les enfants devraient-ils avoir leurs propres comptes ?", a: "Cela dépend davantage de la supervision que de l'âge. Les plus jeunes sont mieux servis par des comptes familiaux et un contrôle parental ; des comptes indépendants ont du sens dès qu'un enfant comprend pourquoi un mot de passe ne se partage pas."},
]} />

<p class="doc-subtitle">La sécurité pour des gens qui n'ont rien demandé</p>

<div class="tldr">

Se sécuriser soi-même est un problème résolu : il suffit de suivre une liste. Sécuriser un foyer est un problème humain - les mesures doivent survivre à des proches qui n'adopteront pas de gestionnaire de mots de passe, à des enfants qui ne liront pas un avertissement, et à la possibilité que vous ne soyez plus là pour expliquer quoi que ce soit.

</div>

## Commencez par les comptes partagés

Chaque foyer compte une poignée de comptes utilisés par plusieurs personnes : streaming, achats en ligne, stockage cloud familial, parfois la banque.

Ce sont généralement les éléments les plus faibles que vous possédez, car un mot de passe connu de quatre personnes est un mot de passe noté à quatre endroits et prononcé régulièrement à voix haute.

Deux mesures aident :

- **Utilisez les fonctions famille ou partage** là où elles existent. La plupart des services proposent des profils distincts ou des comptes membres, ce qui vaut mieux qu'un identifiant unique qui circule.
- **Là où un mot de passe partagé est inévitable**, traitez-le comme semi-public : ne le réutilisez jamais, ne le laissez jamais protéger quoi que ce soit d'important, et changez-le quand quelqu'un quitte le foyer.

## Protégez la personne, pas seulement le compte

Les mesures techniques comptent ici moins qu'une habitude, enseignée une fois et répétée.

**Personne de légitime ne demande jamais un mot de passe ou un code à usage unique.** Ni la banque, ni l'administration fiscale, ni le support Microsoft, ni un policier au téléphone. Quiconque le fait est un attaquant, aussi calme et officiel paraisse-t-il.

La seconde moitié de l'habitude compte autant : **raccrochez et rappelez sur un numéro que vous avez cherché vous-même**. Toute attaque d'ingénierie sociale dépend du maintien de la conversation.

Dites explicitement que vous appeler d'abord est toujours le bon réflexe, et que cela ne vous agacera jamais. Les gens se font avoir en partie parce qu'ils sont gênés de vérifier.

Voir [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked) pour comprendre comment ces approches sont construites.

## Les proches plus âgés

Deux ajustements font une différence disproportionnée.

**Retirez le SMS comme second facteur quand vous le pouvez.** Les arnaques vocales et le SIM swapping visent tous deux ce point, et une application d'authentification ou une clé matérielle n'est pas sensiblement plus difficile à utiliser une fois configurée. Voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

**Convenez d'une étape de vérification.** Une question à laquelle vous seuls pouvez répondre, utilisée chaque fois qu'il est question d'argent ou d'identifiants dans une conversation. C'est aujourd'hui la réponse pratique au clonage de voix, qui a fait de « ça ressemblait exactement à sa voix » un signal peu fiable.

Évitez le piège d'ajouter des mesures qu'ils ne peuvent pas utiliser. Une sécurité qu'on contourne vaut moins que pas de sécurité du tout, car elle produit de la confiance sans protection.

## Enfants et adolescents

L'âge change ce qui compte davantage que ne le fait la technologie.

**Les jeunes enfants** ont besoin de limites de compte et de supervision plus que de fonctions de sécurité. Comptes familiaux, contrôle parental, et aucun accès indépendant à quoi que ce soit contenant des coordonnées de paiement.

**Les adolescents** ont besoin de la même compréhension que vous donneriez à un adulte, car ils contourneront tout ce qu'ils jugeront déraisonnable. Les sujets qui les concernent vraiment : les prises de contrôle de comptes sur les plateformes de jeu et les réseaux sociaux, le fait qu'un mot de passe partagé atteint tous leurs comptes, et la réalité que tout ce qui est envoyé à quelqu'un d'autre a définitivement échappé à leur contrôle.

L'authentification à deux facteurs sur leurs comptes principaux est la chose la plus utile que vous puissiez mettre en place pour eux.

## Fixez le socle du foyer

Faites-le une fois, pour chaque appareil de la maison :

- **Mises à jour automatiques activées**, partout
- **Verrouillage d'écran** avec un PIN d'au moins six chiffres
- **Le mot de passe du Wi-Fi domestique changé** par rapport à celui livré avec la box
- **Un réseau invité** pour les visiteurs et les objets connectés, les tenant à l'écart du réseau qu'utilisent vos ordinateurs

Rien de tout cela ne demande d'attention continue, et c'est précisément pourquoi cela fonctionne pour un foyer.

## Anticipez l'accès après vous

C'est la partie que les familles découvrent au pire moment possible.

Si vous êtes la personne qui gère les comptes, réfléchissez à ce qui se passe quand quelqu'un d'autre en aura besoin. La plupart des services cloud rendent cela délibérément difficile, et une famille en deuil qui argumente avec un service d'assistance est un dénouement que vous pouvez éviter à peu de frais.

- **Utilisez les fonctions de contact légataire** là où elles existent - Apple, Google et Microsoft en proposent tous une.
- **Laissez une voie d'accès physique.** Une enveloppe scellée confiée à une personne de confiance, ou un appareil hors ligne remis avec son PIN, contourne entièrement le service d'assistance. Voir [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained).
- **Notez ce qui existe**, pas les mots de passe : quels comptes comptent, où se trouvent les éléments de récupération, qui contacter. Une liste d'emplacements est bien moins dangereuse à laisser traîner qu'une liste d'identifiants.

Si vous détenez de la crypto, cela compte davantage, car il n'existe aucun service d'assistance du tout - voir [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase).

## Ce qui fonctionne vraiment

Les foyers n'adoptent pas de politiques de sécurité. Ils adoptent des habitudes, et seulement si ces habitudes sont peu nombreuses et manifestement raisonnables.

Trois qui survivent au contact de vraies familles :

1. **Personne ne demande votre mot de passe ni votre code.** Raccrochez et rappelez.
2. **Chaque compte a son propre mot de passe**, faute de quoi une seule fuite les atteint tous.
3. **L'authentification à deux facteurs sur la messagerie et la banque**, configurée une fois par celui qui est le plus à l'aise pour le faire.

Tout le reste est optionnel. Ces trois-là ne le sont pas.

## FAQ

<details>
<summary>Comment protéger ma famille en ligne sans devenir son service informatique ?</summary>

Misez sur les habitudes plutôt que sur les outils : personne de légitime ne demande un mot de passe ou un code, chaque compte a son propre mot de passe, et l'authentification à deux facteurs va sur la messagerie et la banque. Mettez cela en place une fois et la charge continue est faible.

</details>

<details>
<summary>Quelle est la meilleure façon de partager un mot de passe en famille ?</summary>

Utilisez la fonction famille ou partage du service quand elle existe. Là où un mot de passe partagé est inévitable, traitez-le comme semi-public : jamais réutilisé, ne protégeant jamais rien d'important, et changé quand quelqu'un s'en va.

</details>

<details>
<summary>Comment protéger des parents âgés des arnaques téléphoniques ?</summary>

Enseignez une seule règle - raccrocher et rappeler sur un numéro que l'on a cherché soi-même - et convenez d'une question de vérification pour tout ce qui touche à l'argent ou aux identifiants. Le clonage de voix a rendu peu fiable la reconnaissance d'une voix familière.

</details>

<details>
<summary>Qu'advient-il de mes comptes si je meurs ?</summary>

Sans préparation, souvent rien de récupérable. Configurez les contacts légataires là où les services en proposent, et laissez une voie d'accès physique - une lettre scellée ou un appareil hors ligne avec son PIN - plutôt que de compter sur les services d'assistance.

</details>

<details>
<summary>À quel âge les enfants devraient-ils avoir leurs propres comptes ?</summary>

Cela dépend davantage de la supervision que de l'âge. Les plus jeunes sont mieux servis par des comptes familiaux et un contrôle parental ; des comptes indépendants ont du sens dès qu'un enfant comprend pourquoi un mot de passe ne se partage pas.

</details>

## Articles liés

- [Liste de contrôle sécurité pour débutants](/docs/security-guides/security-checklist-for-beginners)
- [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked)
- [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Guide de sécurité du smartphone](/docs/security-guides/smartphone-security-guide)
