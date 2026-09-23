---
title: "OTP vs TOTP"
description: "L'OTP est le concept général, le TOTP la version temporelle que presque tout le monde utilise. Les différences avec le HOTP à compteur, et lequel vous avez."
keywords: [OTP vs TOTP, HOTP vs TOTP, compteur ou temps, différence OTP TOTP, types de mot de passe à usage unique]
sidebar_position: 6
sidebar_label: "OTP vs TOTP"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quelle est la différence entre OTP et TOTP ?", a: "L'OTP est le concept général du code à usage unique. Le TOTP est l'implémentation précise où le code est dérivé d'un secret partagé et de l'heure courante, et change toutes les trente secondes. Tout code TOTP est un OTP."},
  {q: "Quelle est la différence entre HOTP et TOTP ?", a: "Le HOTP dérive le code d'un compteur qui s'incrémente à chaque usage : le code reste valable jusqu'à son utilisation. Le TOTP le dérive de l'heure courante, il expire donc automatiquement. C'est le TOTP qu'implémentent aujourd'hui presque tous les authentificateurs."},
  {q: "Lequel est le plus sûr, HOTP ou TOTP ?", a: "Le TOTP, en pratique. Ses codes expirent d'eux-mêmes : un code capturé et jamais utilisé devient sans valeur en trente secondes, alors qu'un code HOTP inutilisé peut rester valable indéfiniment."},
  {q: "Comment savoir quel type utilise mon authentificateur ?", a: "Si le code change tout seul avec un compte à rebours, c'est du TOTP. S'il ne change que lorsque vous appuyez sur un bouton et reste ensuite figé, c'est du HOTP."},
]} />

<p class="doc-subtitle">L'un est la catégorie, l'autre est la méthode</p>

<div class="tldr">

Ce ne sont pas des concurrents. **L'OTP** est l'idée générale du code à usage unique ; le **TOTP** est l'implémentation précise où le code est dérivé de l'heure courante et change toutes les trente secondes. L'autre implémentation, le **HOTP**, utilise un compteur à la place. Si vous utilisez une application d'authentification, vous avez du TOTP.

</div>

## La relation en une ligne

**Tout code TOTP est un OTP. Tout OTP n'est pas un TOTP.**

L'OTP décrit ce que fait le code : il fonctionne une fois, puis il est consommé. Le TOTP décrit comment il est produit : à partir d'un secret partagé et de l'heure courante. Voir [Qu'est-ce que l'OTP ?](/docs/security-academy/authentication/what-is-otp) pour le concept général.

Demander « OTP ou TOTP » revient un peu à demander « véhicule ou voiture ». La comparaison utile porte sur les deux façons d'en construire un.

## Les deux implémentations

Les deux partent du même secret partagé. Elles ne diffèrent que par la valeur mobile qui lui est combinée.

| | HOTP (à compteur) | TOTP (temporel) |
|---|---|---|
| **Valeur mobile** | Un compteur, incrémenté par code | L'heure courante, par fenêtres de 30 secondes |
| **Standard** | RFC 4226 | RFC 6238 |
| **Le code expire** | ❌ Non - valable jusqu'à usage | ✅ Oui - toutes les 30 secondes |
| **Nécessite une horloge synchronisée** | ✅ Non | ❌ Oui, approximativement |
| **Peut se désynchroniser** | ❌ Oui, si des codes sont générés sans être utilisés | ✅ Non - le temps ne se désynchronise jamais |
| **Répandu aujourd'hui** | Rare, quelques jetons bancaires | Pratiquement universel |
| **Faiblesse principale** | Un code généré reste valable indéfiniment | Une fenêtre de 30 secondes suffit largement à un relais |

## Pourquoi le TOTP l'a emporté

Trois raisons, et elles se cumulent.

**Les codes expirent d'eux-mêmes.** Un code HOTP généré et jamais utilisé reste valable indéfiniment - une capture d'écran de l'an dernier fonctionne encore. Un code TOTP est mort en trente secondes, que vous vous en serviez ou non.

**Aucun compteur à désynchroniser.** Le HOTP se casse d'une façon précise et agaçante : appuyez quelques fois sur le bouton sans rien valider, et votre compteur prend de l'avance sur celui du serveur. Les serveurs compensent en vérifiant une plage de valeurs à venir, mais poussez suffisamment loin et le jeton doit être resynchronisé. Le temps n'a pas ce problème - les deux parties lisent la même horloge.

**Rien à conserver.** Une implémentation TOTP n'a pas à persister un compteur qui doit rester cohérent, ce qui la rend nettement plus simple à réussir, en logiciel comme en matériel.

## Lequel avez-vous ?

Presque certainement du TOTP.

**Vous avez du TOTP** si votre code change tout seul toutes les trente secondes, généralement avec un anneau de compte à rebours. Toutes les applications d'authentification fonctionnent ainsi, une Seedkeeper PRO également - voir [Qu'est-ce que le TOTP ?](/docs/security-academy/authentication/what-is-totp).

**Vous avez du HOTP** si vous appuyez sur un bouton d'un petit jeton dédié et que le code y reste jusqu'à ce que vous l'utilisiez. Certaines banques et d'anciens systèmes d'entreprise en délivrent encore.

**Ni l'un ni l'autre** si le code arrive par SMS ou par e-mail. Ce sont des mots de passe à usage unique acheminés par un canal plutôt que générés localement, et ils portent un risque entièrement différent - voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## Ce qu'aucun des deux ne corrige

Les deux sont des mots de passe à usage unique : ils partagent donc les mêmes deux limites structurelles.

Le secret est un **secret partagé**, détenu par vous et par le service. Si l'exemplaire du service fuite, un attaquant peut générer vos codes sans toucher à votre appareil.

Et les deux sont **une information que vous lisez et saisissez**, ce qui signifie que les deux peuvent être relayés en temps réel par une fausse page convaincante. Voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp).

Choisir le TOTP plutôt que le HOTP, c'est choisir la meilleure de deux bonnes options. Choisir une passkey là où elle est proposée, c'est changer de catégorie.

## FAQ

<details>
<summary>Quelle est la différence entre OTP et TOTP ?</summary>

L'OTP est le concept général du code à usage unique. Le TOTP est l'implémentation précise où le code est dérivé d'un secret partagé et de l'heure courante, et change toutes les trente secondes. Tout code TOTP est un OTP.

</details>

<details>
<summary>Quelle est la différence entre HOTP et TOTP ?</summary>

Le HOTP dérive le code d'un compteur qui s'incrémente à chaque usage : le code reste valable jusqu'à son utilisation. Le TOTP le dérive de l'heure courante, il expire donc automatiquement. C'est le TOTP qu'implémentent aujourd'hui presque tous les authentificateurs.

</details>

<details>
<summary>Lequel est le plus sûr, HOTP ou TOTP ?</summary>

Le TOTP, en pratique. Ses codes expirent d'eux-mêmes : un code capturé et jamais utilisé devient sans valeur en trente secondes, alors qu'un code HOTP inutilisé peut rester valable indéfiniment.

</details>

<details>
<summary>Comment savoir quel type utilise mon authentificateur ?</summary>

Si le code change tout seul avec un compte à rebours, c'est du TOTP. S'il ne change que lorsque vous appuyez sur un bouton et reste ensuite figé, c'est du HOTP.

</details>

## Articles liés

- [Qu'est-ce que l'OTP ?](/docs/security-academy/authentication/what-is-otp)
- [Qu'est-ce que le TOTP ?](/docs/security-academy/authentication/what-is-totp)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
