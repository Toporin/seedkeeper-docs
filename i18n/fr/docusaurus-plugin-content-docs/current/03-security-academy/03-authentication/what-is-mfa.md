---
title: "Qu'est-ce que la MFA ?"
description: "L'authentification multifacteur consiste à prouver son identité avec au moins deux catégories de preuves. Ce qui compte, ce qui ne compte pas, et ses limites."
keywords: [qu'est-ce que la MFA, authentification multifacteur, MFA définition, MFA vs 2FA, MFA résistante au phishing, MFA adaptative]
sidebar_position: 2
sidebar_label: "Qu'est-ce que la MFA ?"
---

import FaqSchema from '@site/src/components/FaqSchema';
import BuySeedkeeperPro from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-seedkeeper-pro.mdx';

<FaqSchema items={[
  {q: "Qu'est-ce que l'authentification multifacteur ?", a: "Un processus d'authentification qui exige des preuves issues d'au moins deux catégories différentes - quelque chose que vous savez, quelque chose que vous possédez, quelque chose que vous êtes - avant d'accorder l'accès. Deux preuves de la même catégorie ne conviennent pas."},
  {q: "Quelle est la différence entre MFA et 2FA ?", a: "La 2FA est une MFA comportant exactement deux facteurs. La MFA est le terme plus large et en autorise davantage. Dans les produits grand public, les deux mots sont employés indifféremment, car presque toute la MFA grand public utilise deux facteurs."},
  {q: "La MFA suffit-elle à protéger mon compte ?", a: "Elle ferme l'attaque la plus fréquente, celle du mot de passe volé ou divulgué, mais pas toutes. Une MFA fondée sur des codes reste hameçonnable en temps réel, et une voie de récupération faible peut la contourner entièrement."},
  {q: "Qu'est-ce qu'une MFA résistante au phishing ?", a: "Une authentification qui ne peut pas être relayée à un attaquant, parce que rien ne s'affiche que vous puissiez recopier et que l'identifiant vérifie lui-même le domaine du site. En pratique, cela signifie des passkeys FIDO2 ou des clés de sécurité matérielles."},
  {q: "La MFA me ralentit-elle à chaque connexion ?", a: "En général non. La plupart des services mémorisent les appareils de confiance et ne demandent le second facteur que sur un nouvel appareil ou pour une action sensible. Une clé matérielle est d'ailleurs plus rapide en pratique que la saisie d'un code avant expiration."},
]} />

<p class="doc-subtitle">Plus d'une sorte de preuve</p>

<div class="tldr">

L'authentification multifacteur exige au moins deux éléments de preuve issus de **catégories différentes** - connaissance, possession, inhérence - avant d'accorder l'accès. Elle fonctionne parce qu'un attaquant qui vole votre mot de passe n'a toujours rien à présenter pour la seconde catégorie. Toutes les MFA ne se valent pas : un code à usage unique peut être relayé par une fausse page, une [passkey](/docs/glossary/passkey) non.

</div>

## La définition

La MFA désigne un processus d'authentification qui exige des preuves issues d'**au moins deux des trois catégories de facteurs** décrites dans [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained).

C'est le mot « différentes » qui fait tout le travail. Demander un mot de passe puis une question secrète n'est pas de la MFA, quel que soit le nombre d'écrans affichés - c'est une seule catégorie demandée deux fois.

## Pourquoi cela fonctionne

Presque toutes les compromissions de comptes à grande échelle commencent par un identifiant que l'attaquant n'a pas eu à vous voler personnellement : divulgué lors de la fuite de quelqu'un d'autre, deviné parce qu'il était réutilisé, ou saisi dans une fausse page convaincante. Voir [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous).

La MFA brise cette chaîne. Un mot de passe issu d'une base divulguée ne vaut rien à lui seul si le service réclame également quelque chose que l'attaquant ne détient pas physiquement. C'est pourquoi activer la MFA reste systématiquement le changement de sécurité le plus rentable que la plupart des gens puissent faire.

## MFA et 2FA ne sont pas tout à fait la même chose

**L'authentification à deux facteurs est une MFA comportant exactement deux facteurs.** La MFA est le terme général et en autorise davantage. Dans l'usage courant, les deux mots sont employés indifféremment, et pour une bonne raison : presque toute la MFA grand public est de la 2FA. Voir [Qu'est-ce que la 2FA ?](/docs/security-academy/authentication/what-is-2fa).

La distinction compte en entreprise, où une action sensible peut exiger trois facteurs, ou lorsqu'un document de politique dit délibérément « multifacteur » pour ne pas plafonner l'exigence à deux.

## Toutes les MFA ne se valent pas

C'est le point qui a le plus évolué ces dernières années, et celui que la plupart des orientations soulignent désormais.

**Une MFA hameçonnable** repose sur le fait que vous lisiez quelque chose et le saisissiez ailleurs : un code SMS, un code par e-mail, un code [TOTP](/docs/security-academy/authentication/what-is-totp) issu d'une application. Une fausse page de connexion peut demander votre mot de passe puis votre code, et relayer les deux vers le vrai site à l'intérieur de la fenêtre de validité. Elle met en échec les identifiants divulgués. Elle ne met pas en échec une fausse page convaincante.

**Une MFA résistante au phishing** supprime le jugement à porter. Une [passkey](/docs/security-academy/passkeys/what-is-a-passkey) est liée cryptographiquement au domaine réel : un site sosie ne produit aucune correspondance et votre appareil n'est même jamais sollicité - voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#pourquoi-lotp-reste-hameçonnable).

Les deux constituent de nettes améliorations par rapport à un mot de passe seul. Une seule ferme l'attaque qui piège réellement les gens.

## Là où la MFA échoue encore

Être honnête sur les failles est ce qui rend la recommandation crédible.

- **La fatigue MFA.** Les notifications push qui demandent seulement « approuver ou refuser » peuvent être envoyées en rafale jusqu'à ce que quelqu'un approuve par épuisement. Les invites à correspondance de chiffres existent précisément pour corriger cela.
- **La récupération de compte.** Un compte doté d'une MFA solide mais d'une voie de réinitialisation faible est protégé par cette voie de réinitialisation. Les attaquants le savent.
- **Le vol de session.** La MFA prouve qui a ouvert la session ; un logiciel malveillant présent sur la machine peut agir à l'intérieur ensuite.
- **Le SIM swapping.** Si le second facteur est un numéro de téléphone, il peut être transféré vers la SIM d'un attaquant - voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

Rien de tout cela ne plaide contre la MFA. Cela plaide pour en choisir la bonne forme et pour tenir la voie de récupération aussi solide que la porte d'entrée.

## Par où commencer

Si vous activez la MFA sur vos comptes, l'ordre compte davantage que l'exhaustivité :

1. **Votre messagerie d'abord.** C'est la voie de réinitialisation de tout le reste.
2. **Tout ce qui contient de l'argent ou de l'identité.** Banque, plateformes d'échange, portails administratifs.
3. **Tout ce qui donne accès à d'autres personnes.** Comptes professionnels, panneaux d'administration, dépôts de code.
4. **Préférez les passkeys là où elles existent**, une application d'authentification à défaut, et le SMS uniquement quand c'est la seule option.

Une Seedkeeper PRO couvre les deux étapes intermédiaires : les [codes TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account) sur du matériel plutôt que dans une application de téléphone, et les [passkeys](/docs/product-documentation/passkeys/creating-your-first-passkey) là où le service les prend en charge.

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Qu'est-ce que l'authentification multifacteur ?</summary>

Un processus d'authentification qui exige des preuves issues d'au moins deux catégories différentes - quelque chose que vous savez, quelque chose que vous possédez, quelque chose que vous êtes - avant d'accorder l'accès. Deux preuves de la même catégorie ne conviennent pas.

</details>

<details>
<summary>Quelle est la différence entre MFA et 2FA ?</summary>

La 2FA est une MFA comportant exactement deux facteurs. La MFA est le terme plus large et en autorise davantage. Dans les produits grand public, les deux mots sont employés indifféremment, car presque toute la MFA grand public utilise deux facteurs.

</details>

<details>
<summary>La MFA suffit-elle à protéger mon compte ?</summary>

Elle ferme l'attaque la plus fréquente, celle du mot de passe volé ou divulgué, mais pas toutes. Une MFA fondée sur des codes reste hameçonnable en temps réel, et une voie de récupération faible peut la contourner entièrement.

</details>

<details>
<summary>Qu'est-ce qu'une MFA résistante au phishing ?</summary>

Une authentification qui ne peut pas être relayée à un attaquant, parce que rien ne s'affiche que vous puissiez recopier et que l'identifiant vérifie lui-même le domaine du site. En pratique, cela signifie des passkeys FIDO2 ou des clés de sécurité matérielles.

</details>

<details>
<summary>La MFA me ralentit-elle à chaque connexion ?</summary>

En général non. La plupart des services mémorisent les appareils de confiance et ne demandent le second facteur que sur un nouvel appareil ou pour une action sensible. Une clé matérielle est d'ailleurs plus rapide en pratique que la saisie d'un code avant expiration.

</details>

## Articles liés

- [Qu'est-ce que la 2FA ?](/docs/security-academy/authentication/what-is-2fa)
- [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer)
