---
title: "Les facteurs d'authentification expliqués"
description: "Ce que vous savez, ce que vous possédez, ce que vous êtes - les trois catégories dont relève toute méthode d'authentification, et l'intérêt de les mêler."
keywords: [facteurs d'authentification, ce que vous savez possédez êtes, connaissance possession inhérence, authentification multifacteur, types d'authentification]
sidebar_position: 1
sidebar_label: "Les facteurs d'authentification expliqués"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quels sont les trois facteurs d'authentification ?", a: "Quelque chose que vous savez (mots de passe, codes PIN), quelque chose que vous possédez (un téléphone, une clé de sécurité), et quelque chose que vous êtes (empreinte, visage). Une véritable authentification multifacteur combine deux catégories différentes, et non deux méthodes issues de la même."},
  {q: "Un mot de passe assorti d'une question secrète constitue-t-il une authentification à deux facteurs ?", a: "Non. Les deux sont des facteurs de connaissance : une seule page de phishing peut donc recueillir les deux. Deux facteurs de la même catégorie ajoutent plus de confort pour l'attaquant que de sécurité pour vous."},
  {q: "Quel est le facteur le plus solide ?", a: "La possession, quand le secret réside dans un matériel qui ne peut pas l'exporter. Un mot de passe peut être hameçonné à distance et une donnée biométrique ne peut pas être changée une fois compromise, alors qu'un secure element exige un vol physique et refuse encore de fonctionner sans son PIN."},
  {q: "La connexion biométrique est-elle un facteur distinct de mon appareil ?", a: "En pratique, généralement non. Votre empreinte déverrouille habituellement un identifiant stocké sur l'appareil plutôt que d'être transmise où que ce soit : ce que le service reçoit réellement est une preuve de possession assortie de la preuve qu'une vérification locale a réussi."},
]} />

<p class="doc-subtitle">Les trois catégories dont tout relève</p>

<div class="tldr">

Toute façon de prouver qui vous êtes appartient à l'une de ces trois catégories : quelque chose que vous **savez** (un mot de passe, un PIN), quelque chose que vous **possédez** (un téléphone, une clé de sécurité), ou quelque chose que vous **êtes** (une empreinte, un visage). La vraie sécurité vient de la combinaison de catégories, non de l'empilement de deux éléments issus de la même.

</div>

## Pourquoi les catégories comptent plus que les méthodes

Il existe des dizaines de méthodes d'authentification et seulement trois catégories sous-jacentes. C'est la partie utile, car chaque catégorie échoue à sa manière.

- **Ce que vous savez** peut être deviné, hameçonné ou divulgué - ce n'est que de l'information, et l'information se copie parfaitement.
- **Ce que vous possédez** doit être volé physiquement, ou son contenu extrait, ce qui est bien plus difficile à grande échelle.
- **Ce que vous êtes** ne peut être ni oublié ni laissé à la maison, mais ne peut pas non plus être changé une fois compromis.

Un attaquant qui met en échec une catégorie doit encore affronter les autres. C'est toute la logique de [l'authentification multifacteur](/docs/security-academy/authentication/what-is-mfa), et cela explique pourquoi deux mots de passe ne sont pas deux fois plus sûrs qu'un seul.

## Quelque chose que vous savez

Les facteurs de connaissance sont les plus anciens et restent les plus répandus : mots de passe, codes PIN, questions secrètes, schémas de déverrouillage.

Leur faiblesse est structurelle. Tout ce dont vous pouvez vous souvenir, on peut aussi vous tromper pour que vous le saisissiez ailleurs, et tout ce qu'un service stocke peut fuiter. Voir [Qu'est-ce qu'un mot de passe ?](/docs/security-academy/password-security/what-is-a-password) et [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked).

Les questions secrètes méritent un avertissement particulier : le nom de jeune fille de votre mère et la rue où vous avez grandi ne sont pas des secrets, ce sont des résultats de recherche. Traitez-les comme des mots de passe supplémentaires et enregistrez des réponses aléatoires plutôt que les vraies.

## Quelque chose que vous possédez

Les facteurs de possession prouvent que vous détenez un objet précis : un téléphone qui reçoit un code, une application qui en génère un, ou une clé de sécurité matérielle.

Leur solidité varie énormément, et la différence vaut la peine d'être comprise :

| Méthode | Catégorie | Faiblesse |
|---|---|---|
| Code SMS | Ce que vous possédez (un numéro) | Le numéro peut être transféré à un attaquant - voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp) |
| Application d'authentification | Ce que vous possédez (un appareil) | Le secret réside dans le stockage d'une application, sur un téléphone polyvalent |
| Clé de sécurité matérielle | Ce que vous possédez (une puce) | Doit être volée physiquement, et exige encore un PIN |

Une clé matérielle est la plus solide des trois, parce que le secret est généré à l'intérieur d'un secure element et ne peut pas être relu - ni par un logiciel malveillant, ni par l'application, ni par celui qui la ramasse.

## Quelque chose que vous êtes

Les facteurs d'inhérence mesurent votre corps : empreinte digitale, visage, iris, voix.

Deux choses sont couramment mal comprises ici.

**La biométrie déverrouille généralement un appareil plutôt qu'elle n'authentifie auprès d'un service.** Quand vous utilisez Face ID pour vous connecter quelque part, votre visage n'est envoyé nulle part - il déverrouille un identifiant détenu localement. C'est exactement ainsi que fonctionnent les [passkeys](/docs/glossary/passkey), et c'est pourquoi une Seedkeeper PRO remplace cette étape de déverrouillage par un PIN sans aucune perte de sécurité.

**On ne révoque pas une empreinte digitale.** Un mot de passe divulgué se change en une minute. Un gabarit biométrique compromis l'est définitivement, et c'est pourquoi les systèmes sérieux stockent une représentation mathématique plutôt qu'une image, et la conservent sur l'appareil.

## Combiner les catégories est tout l'enjeu

Deux facteurs de la même catégorie n'apportent pas grand-chose. Un mot de passe assorti d'une question secrète, ce sont deux choses que vous savez, et une seule page de phishing recueille les deux.

Un mot de passe assorti d'un code à usage unique relève véritablement de deux catégories - connaissance et possession - et c'est pourquoi la [2FA](/docs/security-academy/authentication/what-is-2fa) fonctionne aussi bien contre les identifiants divulgués.

Une [passkey](/docs/security-academy/passkeys/what-is-a-passkey) a ceci de singulier qu'elle réunit deux catégories en un seul geste : l'appareil est quelque chose que vous possédez, et le PIN qui le déverrouille est quelque chose que vous savez. C'est pourquoi elle peut remplacer entièrement le mot de passe plutôt que de se poser par-dessus.

## Et la localisation, et le comportement ?

Certains systèmes ajoutent des signaux contextuels : d'où vous vous connectez, à quelle heure, comment vous tapez au clavier ou déplacez une souris. On les décrit parfois comme un quatrième et un cinquième facteur.

Ils sont utiles comme signaux de risque, et faibles comme facteurs. La localisation peut être falsifiée, et le comportement relève de la probabilité plutôt que d'une réponse par oui ou par non. Traitez-les comme un moyen de décider quand réclamer un vrai facteur, non comme un substitut à celui-ci.

## FAQ

<details>
<summary>Quels sont les trois facteurs d'authentification ?</summary>

Quelque chose que vous savez (mots de passe, codes PIN), quelque chose que vous possédez (un téléphone, une clé de sécurité), et quelque chose que vous êtes (empreinte, visage). Une véritable authentification multifacteur combine deux catégories différentes, et non deux méthodes issues de la même.

</details>

<details>
<summary>Un mot de passe assorti d'une question secrète constitue-t-il une authentification à deux facteurs ?</summary>

Non. Les deux sont des facteurs de connaissance : une seule page de phishing peut donc recueillir les deux. Deux facteurs de la même catégorie ajoutent plus de confort pour l'attaquant que de sécurité pour vous.

</details>

<details>
<summary>Quel est le facteur le plus solide ?</summary>

La possession, quand le secret réside dans un matériel qui ne peut pas l'exporter. Un mot de passe peut être hameçonné à distance et une donnée biométrique ne peut pas être changée une fois compromise, alors qu'un secure element exige un vol physique et refuse encore de fonctionner sans son PIN.

</details>

<details>
<summary>La connexion biométrique est-elle un facteur distinct de mon appareil ?</summary>

En pratique, généralement non. Votre empreinte déverrouille habituellement un identifiant stocké sur l'appareil plutôt que d'être transmise où que ce soit : ce que le service reçoit réellement est une preuve de possession assortie de la preuve qu'une vérification locale a réussi.

</details>

## Articles liés

- [Qu'est-ce que la MFA ?](/docs/security-academy/authentication/what-is-mfa)
- [Qu'est-ce que la 2FA ?](/docs/security-academy/authentication/what-is-2fa)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Qu'est-ce qu'un mot de passe ?](/docs/security-academy/password-security/what-is-a-password)
