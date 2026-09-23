---
title: "Les attaques courantes contre les mots de passe"
description: "De la force brute à l'ingénierie sociale - les façons dont les mots de passe sont réellement compromis, de la plus fréquente à la plus rare."
keywords: [attaques mot de passe, cassage de mot de passe, force brute, attaque par dictionnaire, credential stuffing, phishing, ingénierie sociale, SIM swapping, NIS2]
sidebar_position: 5
sidebar_label: "Les attaques courantes contre les mots de passe"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Quelle différence entre une fuite de données et le phishing ?", a: "Une fuite survient chez l'entreprise ; le phishing vous vise directement, par un faux message ou un faux site web."},
  {q: "Un mot de passe solide me protège-t-il du phishing ?", a: "Non. Si vous le saisissez dans une fausse page, sa solidité n'a aucune importance puisque vous l'avez livré volontairement. Ce sont les passkeys, et non la solidité du mot de passe, qui protègent contre cela."},
  {q: "Le Wi-Fi public est-il toujours dangereux ?", a: "Pas toujours, car la plupart des pages de connexion sont chiffrées par défaut. Mais il supprime une couche de protection dont vous disposeriez autrement, en particulier face aux faux portails captifs."},
  {q: "Pourquoi l'ingénierie sociale devient-elle plus fréquente ?", a: "Parce qu'elle est souvent plus simple que n'importe quelle attaque technique : elle vise la confiance et le sentiment d'urgence plutôt que les défenses d'un système, ce qu'aucune solidité de mot de passe ne peut corriger."},
]} />

<p class="doc-subtitle">Les voies d'entrée, de la plus fréquente à la plus rare</p>

<div class="tldr">

La plupart des mots de passe volés ne sont pas « piratés » au sens spectaculaire du terme : ils sont devinés, divulgués lors d'une fuite ailleurs, livrés via une fausse page de connexion, ou simplement demandés par téléphone. Voici comment chaque méthode fonctionne réellement, à peu près par ordre de fréquence.

</div>

## Force brute et attaques par dictionnaire

L'approche la plus élémentaire : un programme essaie simplement un mot de passe après l'autre jusqu'à ce que l'un fonctionne. Une attaque par **force brute** pure teste toutes les combinaisons possibles ; une **attaque par dictionnaire** est plus fine et commence par les mots réels, les motifs courants et les mots de passe déjà divulgués, puisque les gens sont prévisibles.

C'est précisément pour cela que la longueur et le hasard comptent autant - voir [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password). Un mot de passe court et courant peut tomber en quelques secondes ; un mot de passe long et aléatoire peut rester hors d'atteinte pendant des siècles avec le même matériel.

## Fuites de données et credential stuffing

Plutôt que de casser quoi que ce soit, les attaquants attendent souvent que quelqu'un d'autre fasse le travail : une entreprise subit une fuite, et des millions de couples e-mail et mot de passe se mettent à circuler. Ces mêmes identifiants sont ensuite testés automatiquement contre d'autres services, une technique appelée **credential stuffing**.

C'est la première raison pour laquelle la réutilisation des mots de passe est dangereuse - voir [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous) pour le détail du déroulement.

## Phishing : e-mails et faux sites web

Le phishing se dispense entièrement du cassage ou de la fuite : il vous demande simplement votre mot de passe, sous une apparence légitime. Un e-mail convaincant affirme que votre compte nécessite une « vérification urgente », renvoie vers une fausse page de connexion identique à la vraie, et capture tout ce que vous saisissez.

Les kits de phishing actuels clonent une page de connexion au pixel près, et certains interceptent même les codes de double authentification en temps réel. C'est exactement la faiblesse que les [passkeys](/docs/glossary/passkey) sont conçues pour combler : une passkey est cryptographiquement liée à l'adresse du vrai site, elle ne fonctionne donc tout simplement pas sur un site sosie, aussi convaincant soit-il. Voir [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey).

**Sauriez-vous repérer laquelle de ces deux pages tente de voler vos identifiants Microsoft 365 ?**

<img src="/img/screenshots/phishing-lookalike-domain.png" alt="Deux pages de connexion Microsoft visuellement identiques, côte à côte, ne différant que par une lettre manquante dans le nom de domaine" style={{width: '80%', maxWidth: 'none'}} />

<details>
<summary>Afficher la réponse</summary>

La première, en haut. La page elle-même est une copie parfaite : même logo, même mise en page, mêmes boutons, même cadenas. La seule différence se trouve dans la barre d'adresse : `micosoft.com` au lieu de `microsoft.com`. Une lettre manquante.

C'est ce qu'on appelle un domaine sosie ou typosquatté, et c'est la chose la plus difficile à repérer à l'œil nu, surtout sur un téléphone où la barre d'adresse est tronquée. Notez que l'icône du cadenas ne prouve rien ici : elle signifie seulement que la connexion est chiffrée, et n'importe qui peut obtenir un certificat pour un domaine qu'il possède, y compris un attaquant.

Une passkey ne se serait pas laissé tromper. Votre appareil vérifie le domaine caractère par caractère avant de signer quoi que ce soit, et refuse de répondre à un domaine pour lequel il n'a pas été enregistré. Il n'y a aucune alerte à écarter et aucun jugement à porter.

</details>

## Interception sur Wi-Fi public

Un réseau Wi-Fi ouvert - de ceux sans mot de passe, courants dans les aéroports, les cafés et les hôtels - permet potentiellement à toute autre personne connectée d'intercepter le trafic non chiffré qui y transite. Si vous vous connectez à un site mal chiffré, ou si un attaquant parvient à faire passer votre appareil par un faux « portail captif » imitant le vrai, votre mot de passe peut être capturé en transit sans que rien ne vous alerte.

La plupart des sites modernes utilisent un chiffrement (HTTPS) qui protège des interceptions basiques, mais l'astuce du faux portail vise précisément le moment qui précède l'entrée en vigueur de cette protection.

## Ingénierie sociale

Voici celle qui se passe presque entièrement de technique - et elle devient de plus en plus fréquente parce qu'elle est souvent plus simple que n'importe quelle attaque technique. L'ingénierie sociale consiste à manipuler une personne pour qu'elle livre volontairement un accès.

Une version typique : quelqu'un appelle en se présentant comme le support informatique, d'un ton calme et officiel, signale une « activité inhabituelle » sur votre compte et explique qu'il doit vous « vérifier » - ce qui revient à vous faire lire à voix haute un mot de passe ou un code à usage unique. Une autre version arrive sous la forme d'un message urgent d'un « collègue » ou d'un « supérieur », qui vous presse d'agir vite avant d'avoir eu le temps de réfléchir. Les deux reposent sur la même chose : créer de l'urgence ou de l'autorité pour que vous sautiez vos précautions habituelles.

Aucune solidité de mot de passe ni aucune technologie ne protège de cela. La seule vraie défense est une habitude : un support informatique légitime et un service sérieux n'ont jamais besoin que vous leur lisiez votre mot de passe ou un code à usage unique. Si quelqu'un le demande, c'est le signal d'alarme.

## Autres vecteurs d'attaque

Quelques méthodes moins fréquentes mais bien réelles complètent le tableau :

- **Enregistreurs de frappe et logiciels malveillants** - un logiciel installé discrètement sur votre appareil qui enregistre tout ce que vous tapez, mots de passe compris, avant même que vous ne validiez.
- **Regard par-dessus l'épaule** - quelqu'un qui vous regarde simplement saisir votre mot de passe, sur place ou en visioconférence.
- **SIM swapping** - un attaquant convainc votre opérateur mobile de transférer votre numéro vers sa propre carte SIM, ce qui lui permet d'intercepter les codes de vérification par SMS. C'est l'argument le plus fort contre le SMS comme second facteur - voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## Ce que cela signifie pour une organisation

Chacune de ces attaques est un risque personnel autant qu'un risque d'entreprise, car les identifiants concernés restent rarement d'un seul côté de cette frontière.

Le phishing et le credential stuffing figurent régulièrement parmi les points d'entrée les plus fréquents dans les incidents signalés, et c'est pourquoi la directive européenne **NIS2** place l'authentification et le contrôle d'accès parmi les mesures de gestion des risques que les entités concernées doivent adopter au titre de l'article 21(2). Cette même directive impose des délais de notification courts dès la détection d'un incident - une alerte précoce sous 24 heures - ce qui change le calcul : une attaque réussie n'est plus seulement un problème opérationnel, mais un problème réglementaire, avec un chronomètre.

Les attaques qui comptent le plus ici sont les deux qu'aucune hygiène de mot de passe ne résout. Le phishing et l'ingénierie sociale visent tous deux la personne, pas le mot de passe, et c'est pourquoi la réponse durable est une authentification qui ne peut pas être livrée : voir [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer) et [Les passkeys et NIS2](/docs/security-academy/passkeys/passkey-vs-password#les-passkeys-et-nis2).

## Comment vous protéger concrètement

La plupart de ces attaques ont un point commun : elles visent quelque chose que vous savez (un mot de passe) ou quelque chose que vous possédez et qui peut être détourné (comme les codes SMS). La réponse la plus solide combine plusieurs éléments :

- **Des mots de passe longs, uniques et générés** pour tout ce qu'une attaque par force brute ou une fuite pourrait viser - voir [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained).
- **Des passkeys là où elles existent**, puisqu'elles sont immunisées contre le phishing et ne peuvent pas être réutilisées d'un site à l'autre par conception - voir [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password).
- **Une MFA résistante au phishing sur tout ce qui est à privilèges**, en gardant à l'esprit qu'un code à usage unique peut être relayé en temps réel, contrairement à une passkey - voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp).
- **Une saine méfiance envers l'urgence** - le phishing comme l'ingénierie sociale reposent sur le fait de vous presser.
- **Éviter les connexions sensibles sur un Wi-Fi ouvert**, ou utiliser un VPN si vous n'avez pas le choix.

## FAQ

<details>
<summary>Quelle différence entre une fuite de données et le phishing ?</summary>

Une fuite survient chez l'entreprise ; le phishing vous vise directement, par un faux message ou un faux site web. Voir [Fuites de données et credential stuffing](#fuites-de-données-et-credential-stuffing) et [Phishing : e-mails et faux sites web](#phishing--e-mails-et-faux-sites-web) ci-dessus.

</details>

<details>
<summary>Un mot de passe solide me protège-t-il du phishing ?</summary>

Non - si vous le saisissez dans une fausse page, sa solidité n'a aucune importance puisque vous l'avez livré volontairement. Ce sont les passkeys, et non la solidité du mot de passe, qui protègent contre cela. Voir [Phishing : e-mails et faux sites web](#phishing--e-mails-et-faux-sites-web) ci-dessus.

</details>

<details>
<summary>Le Wi-Fi public est-il toujours dangereux ?</summary>

Pas toujours - la plupart des pages de connexion sont chiffrées par défaut - mais il supprime une couche de protection dont vous disposeriez autrement, en particulier face aux faux portails captifs. Voir [Interception sur Wi-Fi public](#interception-sur-wi-fi-public) ci-dessus.

</details>

<details>
<summary>Pourquoi l'ingénierie sociale devient-elle plus fréquente ?</summary>

Parce qu'elle est souvent plus simple que n'importe quelle attaque technique - elle vise la confiance et le sentiment d'urgence plutôt que les défenses d'un système, ce qu'aucune solidité de mot de passe ne peut corriger. Voir [Ingénierie sociale](#ingénierie-sociale) ci-dessus.

</details>

## Articles liés

- [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password)
- [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Qu'est-ce que la MFA ?](/docs/security-academy/authentication/what-is-mfa)
- [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained)
- [Bonnes pratiques de sécurité](/docs/product-documentation/getting-started/security-best-practices)
