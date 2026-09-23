---
title: "Les erreurs courantes avec les seed phrases"
description: "La poignée d'erreurs derrière presque tous les portefeuilles perdus - photos dans le cloud, faux support, et copie unique que personne n'a jamais testée."
keywords: [erreurs seed phrase, portefeuille crypto perdu, arnaque seed phrase, faux support portefeuille, photo seed phrase, erreurs sécurité crypto]
sidebar_position: 5
sidebar_label: "Les erreurs courantes avec les seed phrases"
---

import FaqSchema from '@site/src/components/FaqSchema';
import BuyBackupDevice from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-backup-device.mdx';

<FaqSchema items={[
  {q: "Quelle est la façon la plus courante de perdre une seed phrase ?", a: "La conserver sur quelque chose de connecté à internet : une photo de téléphone, une application de notes synchronisée, ou un fichier cloud. Ces supports se synchronisent et se sauvegardent automatiquement, et des outils automatisés recherchent activement les phrases exposées."},
  {q: "Conserver une seed phrase électroniquement est-il toujours une erreur ?", a: "Non : ce qui compte est la connectivité, pas le support. Un téléphone ou un coffre-fort cloud est dangereux parce qu'il est en réseau, exécute des logiciels quelconques et se synchronise automatiquement. Un secure element n'a ni réseau, ni système d'exploitation, ni moyen de libérer le secret sans l'appareil et son PIN, ce qui le place clairement du bon côté de cette frontière."},
  {q: "Le support d'un portefeuille demandera-t-il un jour ma seed phrase ?", a: "Jamais, en aucune circonstance. Un support légitime n'en a pas besoin et ne vous contacte pas en premier. Quiconque la demande est un attaquant, aussi compétent et patient paraisse-t-il."},
  {q: "Est-il prudent de couper ma seed phrase en deux ?", a: "Non, sauf si vous utilisez un schéma conçu pour cela. Un découpage improvisé donne une avance considérable à quiconque détient une partie, et rend la perte de l'une ou l'autre fatale à l'ensemble."},
  {q: "Puis-je utiliser la phrase de récupération imprimée sur une carte fournie avec mon portefeuille ?", a: "Non. Celui qui l'a imprimée peut accéder au portefeuille à tout moment. Initialisez toujours l'appareil vous-même et générez une phrase neuve dont vous avez vu la création."},
  {q: "Dois-je tester la sauvegarde de ma seed phrase ?", a: "Oui, une fois. Les erreurs de transcription et les écritures ambiguës ne se révèlent que lors d'une restauration, et les découvrir au moment où vous avez réellement besoin de la sauvegarde est trop tard."},
  {q: "Que faire si ma seed phrase a déjà été exposée ?", a: "Considérez le portefeuille comme compromis. Générez un portefeuille entièrement neuf sur un appareil de confiance et transférez-y immédiatement tous les actifs : une phrase ne peut être ni changée ni révoquée."},
]} />

<p class="doc-subtitle">Les erreurs qui vident les portefeuilles</p>

<div class="tldr">

Presque personne ne perd un portefeuille à cause de la cryptographie. On le perd à cause d'une photo synchronisée dans le cloud, d'une phrase saisie dans une fausse page convaincante, d'une copie unique détruite par un incendie, ou d'une sauvegarde que personne n'a jamais testée. Chacune des erreurs ci-dessous est ordinaire, évitable et définitive.

</div>

## La conserver sur quoi que ce soit de connecté

La plus fréquente, et de loin.

Une photo dans votre pellicule, une note dans une application synchronisée, un fichier texte sur le bureau, un message que vous vous adressez, une entrée dans un gestionnaire de mots de passe cloud. Chacun paraît anodin parce que l'appareil semble privé. Il ne l'est pas : les photothèques et les applications de notes se synchronisent automatiquement, les fichiers supprimés persistent dans les sauvegardes, et un seul compte cloud compromis expose tout d'un coup.

Des outils automatisés scrutent en permanence les dépôts publics, les espaces de stockage exposés et les textes collés en ligne à la recherche de tout ce qui correspond au motif de mots [BIP39](/docs/security-academy/seed-phrases/what-is-bip39). Une phrase qui atteint l'internet ouvert est généralement vidée plus vite qu'une personne ne pourrait réagir.

**À la place :** conservez-la quelque part qui ne puisse atteindre aucun réseau.

Le papier et le métal conviennent, et ils partagent une faiblesse : quiconque les trouve peut les lire. Un **secure element** comble cet écart, car c'est du matériel conçu pour une seule tâche et rien d'autre.

La distinction qu'il vaut la peine de formuler précisément est que « numérique » est le mauvais mot pour désigner ce qui rend un stockage dangereux. Le risque n'est pas qu'un secret soit détenu électroniquement - c'est que les appareils polyvalents sont connectés en permanence, exécutent des logiciels que vous n'avez pas écrits, et se synchronisent sans demander. Un secure element n'a rien de tout cela : aucune pile réseau, aucun système d'exploitation, aucune application, aucune sauvegarde automatique, rien à mettre à jour. La phrase est inscrite dans du matériel certifié et n'est libérée que lorsque l'appareil est physiquement présent et qu'un PIN est saisi. Il n'existe aucune voie de fuite, parce qu'il n'y a nulle part où aller.

C'est ce qu'est une Seedkeeper : une puce certifiée EAL6+ qui détient votre phrase, votre passphrase optionnelle et votre descripteur de portefeuille ensemble - illisible pour qui la trouve, indifférente au feu et à l'eau d'une façon que le papier n'est pas, et assez petite pour être réellement rangée quelque part de sensé. Voir [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases) et [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase).

## La saisir dans un site web

Il n'existe aucune raison légitime pour un site web de demander votre seed phrase. Aucune.

Ni pour la « valider », ni pour « synchroniser » votre portefeuille, ni pour « réclamer un airdrop », ni pour « restaurer l'accès », ni pour vérifier si elle est compromise. Toute page qui la demande la vole, y compris celles qui ressemblent exactement au portefeuille que vous utilisez - voir l'exemple de domaine sosie dans [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked#phishing--e-mails-et-faux-sites-web).

Le seul endroit où une phrase devrait jamais être saisie est votre propre logiciel de portefeuille ou votre propre matériel, lors d'une restauration que vous avez initiée vous-même.

## Faire confiance à un support qui vous a contacté

Un proche parent de l'erreur précédente, et la raison pour laquelle beaucoup de gens perdent des fonds tout en étant prudents.

Vous exposez un problème sur un forum ou un Discord. Quelques minutes plus tard, quelqu'un de serviable vous envoie un message privé. Il est patient, il connaît le produit, il vous guide vers un « outil de vérification ». Ou bien un e-mail bien conçu annonce un problème de sécurité avec votre portefeuille et vous demande de confirmer votre phrase de récupération.

**Aucun membre légitime d'un support ne demandera jamais votre seed phrase**, et un vrai support ne vous contacte pas en premier. Quiconque le fait est, sans exception, un attaquant.

## N'en garder qu'une seule copie

L'erreur qui produit les pertes les plus silencieuses, parce qu'il n'y a personne à blâmer.

Une feuille de papier unique est à un incendie, une inondation, un déménagement ou un rangement trop zélé de la perte définitive. Les fonds restent visibles sur la chaîne pour toujours, et hors d'atteinte.

**À la place :** au moins deux copies, dans des lieux physiques différents, sur des supports qui survivent à l'eau et à la chaleur.

<BuyBackupDevice />

## Ne jamais tester la sauvegarde

Écrire une phrase et la ranger est une hypothèse, pas une sauvegarde.

Des mots sont mal transcrits. Une écriture manuscrite devient ambiguë des années plus tard - un `1` qui pourrait être un `7`, un `l` qui pourrait être un `I`. Les mots 8 et 9 se retrouvent intervertis. Rien de tout cela n'apparaît avant le jour où vous en avez réellement besoin, c'est-à-dire au pire moment possible pour le découvrir.

**À la place :** restaurez la phrase une fois dans un portefeuille, vérifiez que les adresses correspondent, puis rangez-la. Une demi-heure aujourd'hui contre tout le reste plus tard.

## Conserver la passphrase à côté de la phrase

Si vous utilisez une passphrase BIP39, elle existe pour que trouver les mots ne suffise pas.

Écrite sur la même feuille, dans la même boîte, dans le même tiroir, elle ne protège rien. Elle n'est un second facteur que si elle se trouve à un second endroit.

Son revers coûte tout aussi cher : une passphrase dont vous ne vous souvenez plus fait perdre les fonds aussi complètement qu'une phrase perdue, sans message d'erreur et sans moyen de savoir que vous l'avez saisie légèrement de travers. Voir [Qu'est-ce que BIP39 ?](/docs/security-academy/seed-phrases/what-is-bip39#la-passphrase-optionnelle).

## Réordonner ou « ranger » les mots

La phrase est une séquence ordonnée. Classer les mots par ordre alphabétique pour les retrouver plus facilement, ou les écrire dans une grille sans numéroter les positions, la détruit.

Les mêmes douze mots dans un ordre différent produisent un portefeuille valide et vide qui n'est pas le vôtre - et la somme de contrôle l'acceptera souvent en silence.

**À la place :** numérotez chaque mot, explicitement, dans l'ordre où le portefeuille les a affichés.

## La découper naïvement

Couper une phrase de 24 mots en deux moitiés et les cacher séparément semble astucieux. C'est pire qu'une copie unique, dans les deux sens.

Quelqu'un qui détient douze de vos mots a considérablement moins de travail que quelqu'un qui n'en détient aucun. Et perdre l'une ou l'autre moitié fait tout perdre : vous avez donc doublé les façons d'échouer tout en affaiblissant le secret.

Des schémas conçus pour cela existent et sont mathématiquement solides, mais un découpage improvisé n'en fait pas partie.

## Utiliser une phrase générée par quelqu'un d'autre

N'utilisez jamais un portefeuille qui arrive avec une phrase déjà écrite sur une carte, aussi officiel que paraisse l'emballage. Celui qui l'a imprimée peut vider le portefeuille quand il le décide - souvent des années plus tard, une fois que vous l'aurez alimenté.

Cela vaut également pour les phrases générées par un site web, ou par tout appareil que vous n'avez pas initialisé vous-même. Une phrase n'est vôtre que si vous avez vu sa création sur du matériel que vous contrôlez.

## Ne pas décider de ce qui se passe après vous

Ce n'est pas une erreur de sécurité, mais cela fait perdre tout autant.

Si vous êtes la seule personne à pouvoir atteindre la phrase, les actifs disparaissent avec vous. Décidez délibérément s'ils doivent pouvoir être récupérés par quelqu'un d'autre, et laissez-lui de quoi agir sans en laisser assez pour un inconnu qui trouverait la même note.

## FAQ

<details>
<summary>Quelle est la façon la plus courante de perdre une seed phrase ?</summary>

La conserver sur quelque chose de connecté à internet - une photo de téléphone, une application de notes synchronisée, ou un fichier cloud. Ces supports se synchronisent et se sauvegardent automatiquement, et des outils automatisés recherchent activement les phrases exposées.

</details>

<details>
<summary>Conserver une seed phrase électroniquement est-il toujours une erreur ?</summary>

Non - ce qui compte est la connectivité, pas le support. Un téléphone ou un coffre-fort cloud est dangereux parce qu'il est en réseau, exécute des logiciels quelconques et se synchronise automatiquement. Un secure element n'a ni réseau, ni système d'exploitation, ni moyen de libérer le secret sans l'appareil et son PIN, ce qui le place clairement du bon côté de cette frontière.

</details>

<details>
<summary>Le support d'un portefeuille demandera-t-il un jour ma seed phrase ?</summary>

Jamais, en aucune circonstance. Un support légitime n'en a pas besoin et ne vous contacte pas en premier. Quiconque la demande est un attaquant, aussi compétent et patient paraisse-t-il.

</details>

<details>
<summary>Est-il prudent de couper ma seed phrase en deux ?</summary>

Non, sauf si vous utilisez un schéma conçu pour cela. Un découpage improvisé donne une avance considérable à quiconque détient une partie, et rend la perte de l'une ou l'autre fatale à l'ensemble.

</details>

<details>
<summary>Puis-je utiliser la phrase de récupération imprimée sur une carte fournie avec mon portefeuille ?</summary>

Non. Celui qui l'a imprimée peut accéder au portefeuille à tout moment. Initialisez toujours l'appareil vous-même et générez une phrase neuve dont vous avez vu la création.

</details>

<details>
<summary>Dois-je tester la sauvegarde de ma seed phrase ?</summary>

Oui, une fois. Les erreurs de transcription et les écritures ambiguës ne se révèlent que lors d'une restauration, et les découvrir au moment où vous avez réellement besoin de la sauvegarde est trop tard.

</details>

<details>
<summary>Que faire si ma seed phrase a déjà été exposée ?</summary>

Considérez le portefeuille comme compromis. Générez un portefeuille entièrement neuf sur un appareil de confiance et transférez-y immédiatement tous les actifs - une phrase ne peut être ni changée ni révoquée.

</details>

## Articles liés

- [Comment conserver une seed phrase en sécurité](/docs/security-academy/seed-phrases/how-to-securely-store-a-seed-phrase)
- [Qu'est-ce qu'une seed phrase ?](/docs/security-academy/seed-phrases/what-is-a-seed-phrase)
- [Qu'est-ce que BIP39 ?](/docs/security-academy/seed-phrases/what-is-bip39)
- [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked)
- [Enregistrer une seed phrase](/docs/product-documentation/password-manager/storing-seed-phrases)
