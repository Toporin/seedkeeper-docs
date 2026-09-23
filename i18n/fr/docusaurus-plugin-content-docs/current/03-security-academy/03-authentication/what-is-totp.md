---
title: "Qu'est-ce que le TOTP ?"
description: "Le TOTP génère un code à six chiffres toutes les trente secondes à partir d'un secret partagé et de l'heure courante. Fonctionnement, et rôle de l'horloge."
keywords: [qu'est-ce que le TOTP, mot de passe à usage unique temporel, algorithme TOTP, RFC 6238, code application authentification, code 30 secondes]
sidebar_position: 5
sidebar_label: "Qu'est-ce que le TOTP ?"
---

import FaqSchema from '@site/src/components/FaqSchema';
import BuySeedkeeperPro from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-seedkeeper-pro.mdx';

<FaqSchema items={[
  {q: "Que signifie TOTP ?", a: "Time-based One-Time Password, soit mot de passe à usage unique fondé sur le temps. C'est un standard ouvert défini par la RFC 6238, ce qui explique que n'importe quel authentificateur conforme fonctionne avec n'importe quel service conforme."},
  {q: "Pourquoi mon code TOTP change-t-il toutes les 30 secondes ?", a: "Parce que le code est calculé à partir de l'heure courante découpée en fenêtres de trente secondes. Quand la fenêtre avance, l'entrée change et le code aussi, que le précédent ait été utilisé ou non."},
  {q: "Pourquoi mon code TOTP est-il refusé ?", a: "Généralement un problème d'horloge : si l'heure de votre appareil s'écarte trop de celle du serveur, les codes ne correspondent plus. Vérifiez les réglages d'heure de l'appareil, et saisissez le code avant la fermeture de la fenêtre."},
  {q: "Le TOTP nécessite-t-il une connexion internet ?", a: "Non. Votre appareil et le service calculent le code indépendamment à partir d'un secret partagé et de l'heure courante : rien n'est transmis pendant la génération."},
  {q: "Le TOTP est-il plus sûr que les codes SMS ?", a: "Oui, nettement. Le SMS dépend de votre numéro de téléphone, qui peut être transféré à un attaquant par SIM swapping. Un secret TOTP est détenu par votre appareil et n'est pas exposé à cette attaque."},
]} />

<p class="doc-subtitle">Les six chiffres qui changent toutes les trente secondes</p>

<div class="tldr">

Le TOTP - Time-based One-Time Password - génère un nouveau code en combinant un secret partagé lors de la configuration avec l'heure courante, découpée en fenêtres de trente secondes. Votre appareil et le service calculent la même réponse indépendamment, sans aucun réseau. C'est le standard ouvert derrière pratiquement toutes les applications d'authentification.

</div>

## Comment cela fonctionne

Trois ingrédients produisent un code TOTP.

**Le secret.** Une valeur aléatoire que le service génère au moment où vous configurez l'authentification à deux facteurs, transmise sous forme de QR code. Les deux parties en conservent une copie.

**L'heure.** L'heure courante, divisée en fenêtres fixes - trente secondes par convention. Tout le monde utilisant le même numéro de fenêtre obtient la même entrée.

**L'algorithme.** Le secret et le numéro de fenêtre sont combinés par un hachage à clé, et le résultat est tronqué à six chiffres.

Comme les deux parties connaissent le secret et savent lire une horloge, elles aboutissent aux mêmes six chiffres sans jamais communiquer. C'est pourquoi un authentificateur fonctionne sans réseau, sans données mobiles et sans compte.

Le TOTP est défini par la **RFC 6238**, un standard public, ce qui explique qu'un code produit par n'importe quel authentificateur conforme soit accepté par n'importe quel service conforme. Une Seedkeeper PRO implémente le même standard qu'une application de téléphone - voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account).

## Pourquoi l'horloge compte

La seule particularité opérationnelle du TOTP : votre appareil et le serveur doivent être à peu près d'accord sur l'heure.

Si l'horloge d'un appareil dérive de plus d'une fenêtre ou deux, ses codes cessent d'être acceptés. Les serveurs tolèrent généralement un petit écart en vérifiant les fenêtres adjacentes, mais un téléphone réglé sur le mauvais fuseau horaire, ou un appareil dont l'horloge est morte, produira des codes qui ont l'air justes et ne fonctionnent nulle part.

Une Seedkeeper PRO n'a ni batterie ni horloge propre. Elle prend l'heure du téléphone ou de l'ordinateur auquel elle est connectée au moment où vous demandez un code, ce qui écarte entièrement le problème de dérive - une chose de moins à entretenir.

## Pourquoi le code expire

La fenêtre de trente secondes limite la durée d'utilité d'un code capturé. Quelqu'un qui le lit par-dessus votre épaule, ou qui l'intercepte en transit, dispose d'une occasion très brève.

C'est une véritable amélioration, et c'est aussi la raison pour laquelle le TOTP n'est pas résistant au phishing : trente secondes, c'est une éternité pour un relais automatisé. Une fausse page qui recueille votre code et le transmet au vrai service le fait en moins d'une seconde - voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#pourquoi-lotp-reste-hameçonnable).

## Ce contre quoi le TOTP protège, et ce contre quoi il ne protège pas

**Il protège contre :** les bases de mots de passe divulguées, le credential stuffing, la réutilisation de mots de passe, la force brute, et quiconque obtient votre mot de passe sans détenir également votre appareil. Cela couvre la grande majorité des prises de contrôle de comptes réelles.

**Il ne protège pas contre :** le phishing en temps réel, un service compromis laissant fuiter le secret lui-même, ou un logiciel malveillant sur le téléphone qui détient vos secrets.

## Renforcer les points faibles

Deux mesures pratiques traitent l'essentiel du risque résiduel.

**Gardez le secret hors d'un appareil polyvalent.** Dans une application d'authentification, le secret réside dans le stockage d'une application, sur un téléphone qui navigue aussi sur le web. Sur une Seedkeeper PRO, il est inscrit dans le secure element et ne peut jamais être relu.

**Ajoutez un PIN d'accès.** Par défaut, quiconque scanne l'appareil peut voir les codes. Définir un PIN d'accès OTP comble cette faille - voir [Définir un PIN d'accès OTP](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin).

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Que signifie TOTP ?</summary>

Time-based One-Time Password, soit mot de passe à usage unique fondé sur le temps. C'est un standard ouvert défini par la RFC 6238, ce qui explique que n'importe quel authentificateur conforme fonctionne avec n'importe quel service conforme.

</details>

<details>
<summary>Pourquoi mon code TOTP change-t-il toutes les 30 secondes ?</summary>

Parce que le code est calculé à partir de l'heure courante découpée en fenêtres de trente secondes. Quand la fenêtre avance, l'entrée change et le code aussi, que le précédent ait été utilisé ou non.

</details>

<details>
<summary>Pourquoi mon code TOTP est-il refusé ?</summary>

Généralement un problème d'horloge : si l'heure de votre appareil s'écarte trop de celle du serveur, les codes ne correspondent plus. Vérifiez les réglages d'heure de l'appareil, et saisissez le code avant la fermeture de la fenêtre.

</details>

<details>
<summary>Le TOTP nécessite-t-il une connexion internet ?</summary>

Non. Votre appareil et le service calculent le code indépendamment à partir d'un secret partagé et de l'heure courante : rien n'est transmis pendant la génération.

</details>

<details>
<summary>Le TOTP est-il plus sûr que les codes SMS ?</summary>

Oui, nettement. Le SMS dépend de votre numéro de téléphone, qui peut être transféré à un attaquant par SIM swapping. Un secret TOTP est détenu par votre appareil et n'est pas exposé à cette attaque.

</details>

## Articles liés

- [Qu'est-ce que l'OTP ?](/docs/security-academy/authentication/what-is-otp)
- [OTP vs TOTP](/docs/security-academy/authentication/otp-vs-totp)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
