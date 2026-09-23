---
title: "Qu'est-ce que l'OTP ?"
description: "Un mot de passe à usage unique est un code valable une seule fois. Son fonctionnement, la différence entre codes à compteur et codes temporels."
keywords: [qu'est-ce que l'OTP, mot de passe à usage unique, OTP définition, HOTP, TOTP, code à usage unique]
sidebar_position: 4
sidebar_label: "Qu'est-ce que l'OTP ?"
---

import FaqSchema from '@site/src/components/FaqSchema';
import BuySeedkeeperPro from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-seedkeeper-pro.mdx';

<FaqSchema items={[
  {q: "Qu'est-ce qu'un mot de passe à usage unique ?", a: "Un code court, généralement à six chiffres, valable pour une seule connexion ou pendant une courte fenêtre. Il est calculé à partir d'un secret partagé avec le service lors de la configuration, de sorte que les deux parties produisent le même code sans aucune connexion réseau."},
  {q: "Quelle est la différence entre OTP et TOTP ?", a: "L'OTP est le concept général du code à usage unique. Le TOTP en est l'implémentation temporelle précise, où le code change toutes les trente secondes. Presque toutes les applications d'authentification produisent des codes TOTP."},
  {q: "Pourquoi les codes OTP fonctionnent-ils sans internet ?", a: "Parce que votre appareil et le service détiennent le même secret et appliquent le même algorithme à l'heure courante. Aucun des deux n'a besoin de contacter l'autre pour s'accorder sur la réponse."},
  {q: "Les codes OTP peuvent-ils être hameçonnés ?", a: "Oui. Un code est une information que vous lisez et saisissez : une fausse page de connexion peut donc le recueillir et le relayer vers le vrai service à l'intérieur de la fenêtre de validité. Seuls des identifiants liés au domaine, comme les passkeys, l'empêchent."},
  {q: "Un OTP est-il la même chose qu'un code SMS ?", a: "Un code SMS est une façon d'acheminer un mot de passe à usage unique, mais une façon faible, car elle dépend de votre numéro de téléphone plutôt que d'un secret détenu par votre appareil."},
]} />

<p class="doc-subtitle">Un mot de passe qui ne fonctionne qu'une fois</p>

<div class="tldr">

Un mot de passe à usage unique est un code valable une seule fois, ou pendant une courte fenêtre. Il est généré à partir d'un secret partagé entre vous et le service lors de la configuration, de sorte que les deux parties calculent la même réponse indépendamment, sans aucun réseau. L'OTP est ce qui constitue le second facteur dans la plupart des dispositifs de [2FA](/docs/security-academy/authentication/what-is-2fa).

</div>

## La définition

Un OTP est un code court - généralement six chiffres - qui authentifie une seule tentative de connexion puis devient sans valeur.

Cette expiration est tout l'intérêt. Un mot de passe ordinaire reste valable jusqu'à ce que vous le changiez : quiconque le capture une fois peut le réutiliser indéfiniment. Un mot de passe à usage unique capturé après usage répond à une question que plus personne ne posera.

## Comment le code est généré

Lors de la configuration, le service génère un **secret** aléatoire et vous le communique, normalement via un QR code. À partir de là, les deux parties détiennent le même secret et peuvent calculer les codes indépendamment. Aucune connexion réseau n'est nécessaire à aucun moment, ce qui explique qu'un authentificateur fonctionne en mode avion.

Le code lui-même est produit en combinant le secret avec une **valeur mobile**, et le choix de cette valeur donne les deux familles d'OTP :

**À compteur (HOTP).** La valeur mobile est un compteur incrémenté à chaque code généré. Le code reste valable jusqu'à son utilisation. Rare aujourd'hui, surtout présent dans les jetons matériels bancaires.

**Temporel (TOTP).** La valeur mobile est l'heure courante, découpée en tranches de trente secondes. Le code change de lui-même et expire que vous l'utilisiez ou non. C'est ce qu'implémentent pratiquement toutes les applications d'authentification et tous les authentificateurs matériels - voir [Qu'est-ce que le TOTP ?](/docs/security-academy/authentication/what-is-totp) et [OTP vs TOTP](/docs/security-academy/authentication/otp-vs-totp).

## Le secret partagé est le compromis

C'est la propriété structurelle qu'il vaut la peine de comprendre, car tout le reste en découle.

**Vous et le service détenez le même secret.** Cette symétrie est ce qui permet de vérifier le code hors ligne, et c'est aussi la faiblesse : si l'exemplaire du service fuite lors d'une compromission, un attaquant peut générer vos codes indéfiniment sans jamais toucher votre appareil, et sans que vous vous en aperceviez.

À comparer avec une [passkey](/docs/glossary/passkey), où le service ne détient qu'une clé publique qui ne produit rien à elle seule. Voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#le-problème-du-secret-partagé).

## L'OTP n'est pas résistant au phishing

Un code à usage unique est une information que vous lisez et saisissez. Une fausse page convaincante peut vous le demander et le relayer vers le vrai site à l'intérieur de la fenêtre de validité - c'est exactement ainsi que fonctionnent les kits de phishing commerciaux.

Cela ne rend pas l'OTP inutile pour autant. Il met en échec toutes les attaques fondées sur un mot de passe divulgué ou réutilisé, c'est-à-dire la plupart d'entre elles. Il ne met simplement pas en échec l'attaque qui vous vise directement. Voir [Pourquoi l'OTP reste hameçonnable](/docs/security-academy/passkeys/passkey-vs-otp#pourquoi-lotp-reste-hameçonnable).

## L'endroit où réside le secret compte

Décider d'utiliser l'OTP n'est qu'une moitié de décision. L'autre moitié est ce qui détient le secret.

- **Une application d'authentification** le conserve dans le stockage d'une application, sur un téléphone qui navigue aussi sur le web et installe des logiciels. Acceptable sur un téléphone sain, beaucoup moins sur un téléphone compromis. Les applications à sauvegarde cloud ajoutent en outre un compte fournisseur à la chaîne.
- **Un authentificateur matériel** l'inscrit dans un secure element où il ne peut jamais être relu - ni par un logiciel malveillant, ni par l'application qui l'y a placé. Une Seedkeeper PRO fonctionne ainsi, ce qui explique aussi que les secrets OTP ne puissent pas être clonés d'un appareil à l'autre. Voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Qu'est-ce qu'un mot de passe à usage unique ?</summary>

Un code court, généralement à six chiffres, valable pour une seule connexion ou pendant une courte fenêtre. Il est calculé à partir d'un secret partagé avec le service lors de la configuration, de sorte que les deux parties produisent le même code sans aucune connexion réseau.

</details>

<details>
<summary>Quelle est la différence entre OTP et TOTP ?</summary>

L'OTP est le concept général du code à usage unique. Le TOTP en est l'implémentation temporelle précise, où le code change toutes les trente secondes. Presque toutes les applications d'authentification produisent des codes TOTP.

</details>

<details>
<summary>Pourquoi les codes OTP fonctionnent-ils sans internet ?</summary>

Parce que votre appareil et le service détiennent le même secret et appliquent le même algorithme à l'heure courante. Aucun des deux n'a besoin de contacter l'autre pour s'accorder sur la réponse.

</details>

<details>
<summary>Les codes OTP peuvent-ils être hameçonnés ?</summary>

Oui. Un code est une information que vous lisez et saisissez : une fausse page de connexion peut donc le recueillir et le relayer vers le vrai service à l'intérieur de la fenêtre de validité. Seuls des identifiants liés au domaine, comme les passkeys, l'empêchent.

</details>

<details>
<summary>Un OTP est-il la même chose qu'un code SMS ?</summary>

Un code SMS est une façon d'acheminer un mot de passe à usage unique, mais une façon faible, car elle dépend de votre numéro de téléphone plutôt que d'un secret détenu par votre appareil. Voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

</details>

## Articles liés

- [Qu'est-ce que le TOTP ?](/docs/security-academy/authentication/what-is-totp)
- [OTP vs TOTP](/docs/security-academy/authentication/otp-vs-totp)
- [Qu'est-ce que la 2FA ?](/docs/security-academy/authentication/what-is-2fa)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
