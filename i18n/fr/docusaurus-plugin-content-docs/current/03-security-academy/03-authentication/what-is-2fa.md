---
title: "Qu'est-ce que la 2FA ?"
description: "L'authentification à deux facteurs ajoute une seconde preuve par-dessus votre mot de passe. Fonctionnement, quels facteurs préférer, et ses angles morts."
keywords: [qu'est-ce que la 2FA, authentification à deux facteurs, 2FA définition, second facteur, activer la 2FA, 2FA vs MFA]
sidebar_position: 3
sidebar_label: "Qu'est-ce que la 2FA ?"
---

import FaqSchema from '@site/src/components/FaqSchema';
import BuySeedkeeperPro from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-seedkeeper-pro.mdx';

<FaqSchema items={[
  {q: "Qu'est-ce que l'authentification à deux facteurs ?", a: "Un processus de connexion exigeant deux preuves de nature différente : quelque chose que vous savez, comme un mot de passe, et quelque chose que vous possédez, comme un code à usage unique ou une clé de sécurité. Un mot de passe volé ne suffit alors plus à accéder au compte."},
  {q: "La 2FA est-elle la même chose que la MFA ?", a: "La 2FA est une authentification multifacteur comportant exactement deux facteurs. La MFA est le terme général et en autorise davantage. Pour la plupart des comptes grand public, les deux signifient la même chose en pratique."},
  {q: "Quel type de 2FA choisir ?", a: "Une passkey ou une clé de sécurité là où le service les prend en charge, puisqu'elles résistent au phishing. Une application d'authentification ou un TOTP matériel partout ailleurs. N'utilisez le SMS que lorsque rien de mieux n'est proposé."},
  {q: "La 2FA peut-elle être contournée ?", a: "Une 2FA fondée sur des codes peut être mise en échec par un phishing en temps réel, où une fausse page relaie immédiatement votre mot de passe et votre code vers le vrai site. Une procédure de récupération de compte faible peut également la contourner. Les méthodes résistantes au phishing ferment la première faille."},
  {q: "Que se passe-t-il si je perds mon second facteur ?", a: "Vous vous rabattez sur les codes de récupération délivrés au moment de l'activation, ou sur la procédure de récupération du service. C'est pourquoi conserver ces codes en lieu sûr et hors ligne compte autant que d'activer la 2FA."},
]} />

<p class="doc-subtitle">Une seconde serrure sur la même porte</p>

<div class="tldr">

L'authentification à deux facteurs demande quelque chose que vous savez - généralement un mot de passe - et quelque chose que vous possédez, comme un code ou une clé de sécurité. Un mot de passe divulgué ne suffit alors plus à entrer. C'est le changement de sécurité le plus rentable que la plupart des gens puissent faire, et il en existe des variantes solides et des variantes faibles.

</div>

## Comment fonctionne la 2FA

Vous vous connectez avec votre mot de passe comme d'habitude. Avant de vous laisser passer, le service réclame une seconde preuve issue d'une autre catégorie : un code, une présentation de clé de sécurité, une invite sur votre téléphone.

Le mot de passe confirme que vous connaissez un secret. Le second facteur confirme que vous détenez un objet précis. Un attaquant à l'autre bout du monde peut obtenir le premier par une fuite ; le second exige d'être dans la même pièce que vous.

C'est toute l'idée, et c'est pourquoi la 2FA bloque l'immense majorité des prises de contrôle automatisées - voir [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous) pour le déroulement réel de ces attaques.

## Les seconds facteurs, du plus faible au plus solide

Tous les seconds facteurs n'offrent pas la même protection. En pratique, vous en rencontrerez quatre.

**Les codes par e-mail.** Le plus faible. Si votre messagerie est compromise - et c'est le compte que les attaquants visent en premier - le second facteur se trouve au même endroit que le lien de réinitialisation.

**Les codes SMS.** Mieux, mais liés à un numéro de téléphone plutôt qu'à un téléphone. Les numéros peuvent être transférés à un attaquant par SIM swapping, ce qui explique que les organismes de normalisation considèrent désormais le SMS comme une méthode à usage restreint. Voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

**Les codes d'authentification ([TOTP](/docs/security-academy/authentication/what-is-totp)).** Un code à six chiffres calculé à partir d'un secret partagé et de l'heure courante, sans aucun réseau. Solide, largement pris en charge, et le bon choix par défaut pour la plupart des comptes. Sur une Seedkeeper PRO, le secret réside dans le secure element plutôt que dans une application de téléphone - voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account).

**Les clés de sécurité et les passkeys.** La seule option qui résiste au phishing, parce que l'identifiant vérifie lui-même le domaine du site avant de répondre. Voir [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey).

## Ce contre quoi la 2FA ne protège pas

Deux angles morts méritent d'être connus, car c'est là que les attaques se sont déplacées.

**Le phishing en temps réel.** Une fausse page recueille votre mot de passe, puis votre code, et relaie les deux vers le vrai site à l'intérieur de la fenêtre de trente secondes. Votre 2FA a fonctionné exactement comme prévu et l'attaquant est entré quand même. Seuls des identifiants liés au domaine l'arrêtent - voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#pourquoi-lotp-reste-hameçonnable).

**La récupération de compte.** La plupart des services conservent une voie de repli pour ceux qui perdent leur second facteur. Cette voie est un accès légitime, et elle n'est souvent protégée que par l'accès à votre boîte mail.

## Où l'activer en priorité

Activer la 2FA partout d'un coup est un projet. L'activer dans le bon ordre prend dix minutes et capte l'essentiel du bénéfice :

1. **La messagerie**, parce qu'elle réinitialise tout le reste
2. **Les comptes financiers** - banque, PayPal, plateformes d'échange
3. **Tout ce qui contient des documents personnels ou des données clients**
4. **Les comptes sociaux**, qui servent à atteindre les personnes qui vous font confiance

## Conservez vos codes de récupération

Quand vous activez la 2FA, la plupart des services affichent une liste de codes de récupération à usage unique. Les gens ferment cet écran et le regrettent plus tard.

Conservez-les ailleurs que sur votre téléphone et ailleurs que dans votre boîte mail. Une [note sécurisée](/docs/product-documentation/password-manager/creating-secure-notes) sur une Seedkeeper est un bon emplacement : hors ligne, adossée au matériel, et disponible même si le téléphone qui héberge votre authentificateur a disparu.

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Qu'est-ce que l'authentification à deux facteurs ?</summary>

Un processus de connexion exigeant deux preuves de nature différente : quelque chose que vous savez, comme un mot de passe, et quelque chose que vous possédez, comme un code à usage unique ou une clé de sécurité. Un mot de passe volé ne suffit alors plus à accéder au compte.

</details>

<details>
<summary>La 2FA est-elle la même chose que la MFA ?</summary>

La 2FA est une authentification multifacteur comportant exactement deux facteurs. La MFA est le terme général et en autorise davantage. Pour la plupart des comptes grand public, les deux signifient la même chose en pratique.

</details>

<details>
<summary>Quel type de 2FA choisir ?</summary>

Une passkey ou une clé de sécurité là où le service les prend en charge, puisqu'elles résistent au phishing. Une application d'authentification ou un TOTP matériel partout ailleurs. N'utilisez le SMS que lorsque rien de mieux n'est proposé.

</details>

<details>
<summary>La 2FA peut-elle être contournée ?</summary>

Une 2FA fondée sur des codes peut être mise en échec par un phishing en temps réel, où une fausse page relaie immédiatement votre mot de passe et votre code vers le vrai site. Une procédure de récupération de compte faible peut également la contourner. Les méthodes résistantes au phishing ferment la première faille.

</details>

<details>
<summary>Que se passe-t-il si je perds mon second facteur ?</summary>

Vous vous rabattez sur les codes de récupération délivrés au moment de l'activation, ou sur la procédure de récupération du service. C'est pourquoi conserver ces codes en lieu sûr et hors ligne compte autant que d'activer la 2FA.

</details>

## Articles liés

- [Qu'est-ce que la MFA ?](/docs/security-academy/authentication/what-is-mfa)
- [Qu'est-ce que le TOTP ?](/docs/security-academy/authentication/what-is-totp)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
