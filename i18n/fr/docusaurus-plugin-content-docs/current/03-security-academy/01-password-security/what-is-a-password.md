---
title: "Qu'est-ce qu'un mot de passe ?"
description: "Un mot de passe est une chaîne de caractères secrète servant à prouver votre identité. Voici comment il fonctionne, et pourquoi."
keywords: [qu'est-ce qu'un mot de passe, définition mot de passe, fonctionnement mot de passe, hachage, secret partagé, bases de l'authentification]
sidebar_position: 1
sidebar_label: "Qu'est-ce qu'un mot de passe ?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Un code PIN est-il la même chose qu'un mot de passe ?", a: "Pas tout à fait. Un PIN est généralement plus court et uniquement numérique, et il est souvent lié à un appareil précis plutôt qu'à un compte en ligne. L'idée sous-jacente, un secret partagé servant à prouver son identité, est la même."},
  {q: "Un site web peut-il voir mon vrai mot de passe ?", a: "Un site bien conçu n'en a pas besoin : il stocke un haché à la place. Les sites mal conçus conservent parfois les mots de passe en clair, ce qui explique en partie la gravité des fuites."},
  {q: "Quelle est la différence entre un mot de passe et une passkey ?", a: "Un mot de passe est un secret partagé que vous transmettez au service à chaque connexion : l'une ou l'autre partie peut le laisser fuiter. Une passkey est une clé privée qui ne quitte jamais votre appareil, le service ne détenant qu'une clé publique servant à vérifier une signature."},
  {q: "Qu'est-ce que le hachage d'un mot de passe ?", a: "Une transformation à sens unique appliquée à votre mot de passe avant son stockage, afin que le service puisse vérifier une connexion sans conserver le mot de passe lui-même. Les services actuels utilisent des fonctions délibérément lentes comme bcrypt, scrypt ou Argon2 plutôt que des fonctions rapides comme SHA-256."},
  {q: "Pourquoi certains sites limitent-ils la longueur ou les caractères d'un mot de passe ?", a: "Il s'agit généralement de contraintes techniques dépassées plutôt que de choix de sécurité, et c'est souvent le signe que le site ne hache pas correctement les mots de passe. Les bonnes pratiques actuelles n'imposent aucune limite haute significative."},
]} />

<p class="doc-subtitle">Les bases pour prouver que c'est bien vous</p>

<div class="tldr">

Un mot de passe est un secret que vous et un service connaissez tous les deux. Quand vous le saisissez, le service le compare à ce qu'il détient : si les deux correspondent, vous entrez. C'est la méthode la plus ancienne, et toujours la plus répandue, pour prouver son identité en ligne.

</div>

## La définition simple

Un mot de passe est une chaîne de caractères - lettres, chiffres, symboles, ou un mélange - que vous seul, en théorie, connaissez. Vous le créez en vous inscrivant à un service, et vous le ressaisissez chaque fois que vous voulez vous connecter. Le service compare ce que vous avez tapé à ce qu'il a stocké et, en cas de correspondance, vous laisse passer.

C'est toute l'idée : un secret partagé, connu de vous seul et du service, utilisé comme preuve de votre identité.

## Comment fonctionne réellement un mot de passe

Quand vous définissez un mot de passe, la plupart des services sérieux ne le stockent pas en clair. Ils le font passer par une fonction mathématique à sens unique appelée **hachage**, qui transforme « MonChien2024! » en quelque chose comme `a94a8fe5ccb19ba61c4c0873d391e987982fbbd3`. C'est ce haché qui est réellement enregistré.

Tous les hachages ne se valent pas, et la différence détermine combien de temps une base de données divulguée résiste à une attaque. Les fonctions généralistes comme SHA-1 ou SHA-256 ont été conçues pour être rapides, ce qui est exactement l'inverse de ce qu'il faut ici : rapide signifie qu'un attaquant peut tester des milliards de propositions par seconde. Les pratiques actuelles reposent sur des fonctions délibérément lentes et gourmandes en mémoire : **bcrypt**, **scrypt** et **Argon2**, la référence actuelle. Une base hachée avec Argon2 coûte à un attaquant plusieurs ordres de grandeur de plus qu'une base hachée avec SHA-256.

Lors d'une connexion ultérieure, le service hache ce que vous venez de saisir et compare les deux hachés. S'ils correspondent, vous êtes vérifié - sans que le service ait jamais eu besoin de stocker votre véritable mot de passe. C'est pourquoi une entreprise peut affirmer « nous ne connaissons pas votre mot de passe » même après une fuite de données : ce qui a fuité, idéalement, ce sont les hachés et non les mots de passe.

Tous les services ne le font pas correctement, ce qui explique en partie la fréquence des fuites - mais c'est un autre sujet, voir [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password).

## Pourquoi les mots de passe existent

Avant les mots de passe, « prouver son identité » à un système informatique passait par l'accès physique : vous étiez assis devant le terminal, donc vous étiez forcément autorisé. Dès lors que les systèmes ont dû être partagés ou accessibles à distance, il a fallu remplacer cette présence physique par autre chose. Un secret partagé était la solution la plus simple : peu coûteuse à mettre en œuvre, facile à expliquer, et sans matériel particulier.

Cette simplicité est précisément la raison pour laquelle les mots de passe ont tenu plus de soixante ans, alors même que de meilleures options sont apparues.

## Le problème des mots de passe

Les mots de passe ont une faiblesse structurelle : ce ne sont que de l'information. Et tout ce qui n'est que de l'information peut être copié, deviné, volé ou divulgué - sans que vous en sachiez jamais rien.

- **Il faut les retenir.** Ce qui pousse les gens vers des mots de passe courts, simples ou réutilisés - voir [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password) pour ce que cela coûte réellement.
- **Ils peuvent être hameçonnés.** Une fausse page de connexion convaincante peut vous amener à saisir votre vrai mot de passe au mauvais endroit.
- **Ils peuvent fuiter en masse.** Quand la base de données d'une entreprise est compromise, chaque mot de passe réutilisé devient une clé pour tous les autres comptes qui l'emploient.
- **Ils peuvent être devinés.** Un mot de passe faible ou courant est cassé par des outils automatisés en quelques secondes.

Rien de tout cela ne rend les mots de passe inutiles - des milliards de comptes s'en remettent à eux sans incident chaque jour. Cela signifie en revanche qu'un mot de passe seul est souvent insuffisant pour tout ce que vous tenez vraiment à protéger.

## Ce qui vient ensuite

Deux évolutions sont nées de ces faiblesses :

- **[L'authentification à deux facteurs (2FA)](/docs/security-academy/authentication/what-is-2fa)** ajoute une seconde preuve par-dessus votre mot de passe - généralement un code à usage unique - de sorte qu'un mot de passe divulgué ne suffit plus à entrer. Elle fonctionne parce que cette seconde preuve relève d'une catégorie différente - voir [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained).
- **[Les passkeys](/docs/glossary/passkey)** vont plus loin et suppriment entièrement le secret partagé, en le remplaçant par de la cryptographie qui ne peut être ni hameçonnée ni divulguée de la même manière. Voir [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey) pour le fonctionnement, et [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password) pour une comparaison directe.

Les mots de passe ne disparaîtront pas du jour au lendemain, mais comprendre comment ils fonctionnent - et où ils atteignent leurs limites - est le premier pas vers quelque chose de mieux là où cela compte le plus.

## FAQ

<details>
<summary>Un code PIN est-il la même chose qu'un mot de passe ?</summary>

Pas tout à fait. Un PIN est généralement plus court et uniquement numérique, et il est souvent lié à un appareil précis plutôt qu'à un compte en ligne. L'idée sous-jacente - un secret partagé servant à prouver son identité - est la même.

</details>

<details>
<summary>Un site web peut-il voir mon vrai mot de passe ?</summary>

Un site bien conçu n'en a pas besoin : il stocke un haché à la place, comme expliqué dans [Comment fonctionne réellement un mot de passe](#comment-fonctionne-réellement-un-mot-de-passe) ci-dessus. Les sites mal conçus conservent parfois les mots de passe en clair, ce qui explique en partie la gravité des fuites.

</details>

<details>
<summary>Quelle est la différence entre un mot de passe et une passkey ?</summary>

Un mot de passe est un secret partagé que vous transmettez au service à chaque connexion : l'une ou l'autre partie peut le laisser fuiter. Une passkey est une clé privée qui ne quitte jamais votre appareil, le service ne détenant qu'une clé publique servant à vérifier une signature. Voir [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password).

</details>

<details>
<summary>Qu'est-ce que le hachage d'un mot de passe ?</summary>

Une transformation à sens unique appliquée à votre mot de passe avant son stockage, afin que le service puisse vérifier une connexion sans conserver le mot de passe lui-même. Les services actuels utilisent des fonctions délibérément lentes comme bcrypt, scrypt ou Argon2 plutôt que des fonctions rapides comme SHA-256. Voir [Comment fonctionne réellement un mot de passe](#comment-fonctionne-réellement-un-mot-de-passe) ci-dessus.

</details>

<details>
<summary>Pourquoi certains sites limitent-ils la longueur ou les caractères d'un mot de passe ?</summary>

Il s'agit généralement de contraintes techniques dépassées plutôt que de choix de sécurité - et c'est souvent le signe que le site ne hache pas correctement les mots de passe. Les bonnes pratiques actuelles n'imposent aucune limite haute significative.

</details>

## Articles liés

- [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password)
- [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked)
- [Qu'est-ce que la 2FA ?](/docs/security-academy/authentication/what-is-2fa)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
