---
title: "Les passkeys sont-elles plus sûres ?"
description: "Oui - les passkeys éliminent le phishing, les fuites et la réutilisation. La réponse honnête couvre aussi ce qu'elles ne corrigent pas."
keywords: [passkeys plus sûres, sécurité des passkeys, risques passkey, passkey piratable, passkey matérielle vs synchronisée, sécurité FIDO2, authentification NIS2]
sidebar_position: 7
sidebar_label: "Les passkeys sont-elles plus sûres ?"
---

import FaqSchema from '@site/src/components/FaqSchema';
import BuySeedkeeperPro from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-seedkeeper-pro.mdx';

<FaqSchema items={[
  {q: "Les passkeys sont-elles plus sûres que les mots de passe ?", a: "Oui. Elles éliminent le phishing, le credential stuffing, la réutilisation et la force brute en tant que catégories d'attaque au lieu de les rendre plus difficiles, et leur solidité ne dépend pas des choix de la personne qui les utilise."},
  {q: "Une passkey peut-elle être volée à distance ?", a: "Pas une passkey liée au matériel. La clé privée ne quitte jamais le secure element : il n'y a donc rien à copier sur votre téléphone ou votre ordinateur pour un logiciel malveillant. Les passkeys synchronisées sont exposées à tout ce qui compromet le compte cloud qui les détient."},
  {q: "Que se passe-t-il si quelqu'un vole ma Seedkeeper PRO ?", a: "Il lui faut encore votre PIN FIDO, vérifié à l'intérieur du secure element et qui verrouille l'appareil après plusieurs échecs. L'appareil seul ne suffit pas."},
  {q: "Les passkeys synchronisées sont-elles mauvaises ?", a: "Non, elles sont bien plus sûres que les mots de passe et c'est ce que la plupart des gens utiliseront. Elles concentrent simplement tous les identifiants dans un unique compte cloud, alors que les passkeys liées au matériel n'existent nulle part ailleurs que sur l'appareil."},
  {q: "Quel est le plus grand risque avec les passkeys ?", a: "Perdre tous les appareils enregistrés sans en avoir de secours, et devoir se rabattre sur une voie de récupération potentiellement plus faible que la passkey elle-même. C'est un problème d'anticipation qui se règle en dix minutes, pas un défaut de la technologie."},
  {q: "Si les passkeys sont si bonnes, pourquoi mon compte a-t-il encore un mot de passe ?", a: "Parce que les services le conservent comme voie de récupération, et que la plupart n'autorisent pas sa suppression. Votre compte est protégé par la voie d'accès la plus solide disponible, pas par celle que vous préférez utiliser."},
  {q: "Est-ce que cela vaut la peine si j'utilise déjà un gestionnaire de mots de passe et la 2FA ?", a: "Oui, sur les comptes qui comptent. Un gestionnaire règle la réutilisation et la solidité, la 2FA règle les mots de passe divulgués, mais ni l'un ni l'autre n'arrête le phishing en temps réel. Seul le lien au domaine le fait."},
  {q: "Les passkeys sont-elles assez sûres pour une entreprise ?", a: "Elles en deviennent progressivement le standard de référence, précisément parce qu'elles ne dépendent pas du jugement du personnel sous pression. Les organisations peuvent en outre imposer des identifiants liés au matériel et exclure les coffres-forts cloud personnels."},
  {q: "Les passkeys suffisent-elles à satisfaire NIS2 ?", a: "NIS2 ne nomme aucune technologie. L'article 21(2)(j) exige une authentification multifacteur ou continue lorsque cela est approprié, et l'authentification n'est qu'une des dix catégories de mesures de cet article : les passkeys couvrent donc une partie de l'obligation, pas sa totalité. C'est sur les comptes à privilèges et les accès distants qu'elles aident le plus, et les identifiants liés au matériel permettent en outre de prouver quels appareils ont été utilisés."},
]} />

<p class="doc-subtitle">La réponse honnête, réserves comprises</p>

<div class="tldr">

**Oui.** Une [passkey](/docs/glossary/passkey) supprime les trois façons dont les identifiants sont réellement volés - phishing, fuites de données et réutilisation - et le fait structurellement plutôt qu'en demandant aux utilisateurs d'être prudents.

Mais « plus sûre » n'est pas inconditionnel. Une passkey ne vaut que l'endroit où réside sa clé privée, et pour la plupart des comptes, le point le plus faible n'est plus la passkey - c'est la voie de récupération derrière elle.

</div>

## La réponse courte

Sur les attaques qui se produisent réellement, les passkeys ne sont pas marginalement meilleures que les mots de passe. **Elles éliminent des catégories entières.**

- **Le phishing cesse de fonctionner**, parce que l'identifiant refuse de répondre à tout autre domaine que le sien.
- **Les fuites de données cessent d'avoir de l'importance**, parce que le service n'a jamais détenu qu'une clé publique.
- **La réutilisation devient impossible**, parce qu'une paire de clés distincte est générée pour chaque service.
- **Deviner et forcer cessent d'être pertinents**, parce qu'il n'y a rien de choisi par un humain à deviner.

Ces quatre points couvrent les principales façons dont les comptes sont compromis - voir [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked). Les passkeys ne rendent pas ces attaques plus difficiles. Elles suppriment ce qui est attaqué.

C'est un type d'amélioration de sécurité rare, et cela mérite d'être dit clairement avant les réserves.

## Une passkey peut-elle être piratée ?

Pas au sens où on l'entend habituellement. Il n'existe aucun moyen connu de déduire une clé privée d'une clé publique, aucun mot de passe à casser, et rien de transmis pendant la connexion qui serait utile en cas d'interception.

Ce qui peut mal tourner est d'une autre nature, et il y a quatre réponses honnêtes.

**Un appareil compromis.** Si un logiciel malveillant contrôle l'ordinateur depuis lequel vous vous connectez, il peut agir à l'intérieur de votre session une fois que vous vous êtes authentifié. Une passkey prouve que vous étiez présent ; elle ne surveille pas ce qui se passe ensuite. C'est vrai de toutes les méthodes d'authentification jamais conçues.

**La récupération de compte.** Presque tous les services conservent une solution de repli - un lien par e-mail, un mot de passe, un appel au support. Ce repli est une voie d'accès légitime à votre compte, et les attaquants le savent. Un compte doté d'une passkey solide mais d'une boîte mail de récupération faible est protégé par cette boîte mail.

**L'ingénierie sociale.** Personne n'a besoin de votre clé privée s'il peut vous convaincre d'enregistrer la sienne. Un appel téléphonique assuré vous demandant de « réenregistrer votre clé de sécurité » attaque la personne, pas le protocole.

**Le reste de vos comptes.** La prise en charge des passkeys reste partielle : la plupart de vos connexions demeurent des mots de passe pour l'instant. Votre exposition globale est déterminée par votre compte le plus faible, pas par le meilleur.

Aucun de ces points n'est un défaut des passkeys. Trois d'entre eux sont des raisons de tenir le reste de votre sécurité en ordre, et le quatrième - la récupération - fait l'objet de la section suivante.

## La question qui tranche vraiment

Si les passkeys ferment les attaques traditionnelles, la suite honnête est : où le risque se déplace-t-il ?

Il se déplace vers deux endroits. **Où la clé privée est stockée**, et **comment vous revenez si vous la perdez**.

### Où réside la clé

C'est la distinction qui détermine quelle part de la protection décrite plus haut vous recevez réellement, et la plupart des articles la passent sous silence.

**Les passkeys synchronisées** résident dans un coffre-fort logiciel - iCloud Keychain, Google Password Manager, un gestionnaire de mots de passe - et sont recopiées entre vos appareils via le cloud de ce fournisseur. Pratique, et une vraie amélioration par rapport aux mots de passe. Mais la clé privée existe à plusieurs endroits à la fois, et l'ensemble est gardé par votre compte chez ce fournisseur. Ce compte est généralement protégé par un mot de passe, ce qui ajoute un maillon à une chaîne que vous cherchiez à raccourcir. Compromettez-le et vous compromettez toutes les passkeys qu'il contient.

**Les passkeys liées au matériel** sont générées à l'intérieur d'un [secure element](/docs/glossary/secure-element) et ne peuvent physiquement pas en sortir. Aucune copie cloud, aucun compte fournisseur dans la chaîne, et aucune voie d'export, pas même pour quelqu'un qui tiendrait l'appareil. La Seedkeeper PRO fonctionne ainsi, sur une puce certifiée EAL6+ et [FIDO2 Level 1](/docs/security-academy/passkeys/what-is-fido2#seedkeeper-pro--certifiée-fido2-level-1) par la FIDO Alliance, avec un firmware publié sous AGPLv3 pour que l'implémentation puisse être auditée plutôt que crue sur parole.

**Les deux sont plus sûres qu'un mot de passe. Elles ne sont pas également sûres.** La différence ne tient pas à la cryptographie, identique dans les deux cas - elle tient au nombre d'endroits où votre clé existe et à qui d'autre se tient dans la chaîne. Voir [Toutes les passkeys ne sont pas stockées de la même façon](/docs/security-academy/passkeys/passkey-vs-password#toutes-les-passkeys-ne-sont-pas-stockées-de-la-même-façon) pour la comparaison complète.

### Comment revenir

C'est là que se situe désormais l'essentiel du risque réel des passkeys, et c'est la partie que les gens négligent.

Une passkey liée au matériel ne peut pas être restaurée depuis une sauvegarde - la clé qu'un attaquant ne peut pas extraire, vous ne le pouvez pas non plus. Perdez le seul appareil qui la détient, sans rien d'autre d'enregistré, et vous vous rabattez sur la procédure de récupération du service. Qui est souvent un lien par e-mail. Lui-même souvent protégé par un mot de passe.

La solution n'a rien de spectaculaire et prend une dizaine de minutes : **enregistrez un second appareil sur les comptes qui comptent, avant d'en avoir besoin.** Faites-le et l'arbitrage disparaît - une protection de niveau matériel avec un exemplaire de secours dans un tiroir. Négligez-le et vous aurez posé une serrure solide sur une porte dont l'entrée de service est faible. Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy) et [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy).

## Et si quelqu'un vole l'appareil ?

Une inquiétude légitime, et la réponse explique pourquoi les authentificateurs matériels exigent un PIN.

La seule possession ne suffit pas. Une Seedkeeper PRO volée exige toujours le PIN FIDO, vérifié à l'intérieur du secure element plutôt que par une application, et qui verrouille l'appareil après plusieurs échecs. Il n'existe aucun moyen de le forcer depuis l'extérieur ni de lire les clés sur la puce.

C'est le couple classique qui fait son travail : **quelque chose que vous possédez, quelque chose que vous savez** - les deux catégories exposées dans [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained). Un voleur en détient une moitié. Pendant ce temps, vous utilisez votre second appareil enregistré pour retirer celui qui est perdu de vos comptes - ce qui est toute la raison de l'avoir enregistré à l'avance.

## Plus sûres pour qui ?

Une dimension que les tableaux comparatifs manquent complètement.

La sécurité d'un mot de passe dépend presque entièrement de la personne qui l'utilise. A-t-elle choisi quelque chose de long ? L'a-t-elle réutilisé ? A-t-elle repéré la fausse page un lundi matin à 7 heures ? De bonnes habitudes produisent de bons résultats, et la plupart des gens, la plupart du temps, n'ont pas de bonnes habitudes - non par négligence, mais parce que le système leur demande quelque chose de déraisonnable.

La sécurité d'une passkey ne varie pas ainsi. L'utilisateur distrait et l'utilisateur méticuleux reçoivent la même cryptographie, le même lien au domaine, la même immunité à la réutilisation. Il n'existe aucune façon de mal la configurer, aucun raccourci disponible quand on est pressé, et aucune discipline à tenir sur une décennie.

**Les passkeys protègent le mieux exactement les personnes que les mots de passe protègent le moins.** C'est sans doute le point le plus sous-estimé de toute la comparaison, et l'argument le plus solide pour les déployer dans une organisation plutôt que de former les gens davantage.

C'est aussi pourquoi les régulateurs ont commencé à pointer dans la même direction. La directive européenne NIS2 cite l'authentification multifacteur parmi les mesures de gestion des risques exigées à l'article 21(2)(j), et les orientations actuelles lisent de plus en plus « approprié » comme signifiant **résistant au phishing** sur les comptes à privilèges et les accès distants - un niveau que les codes à usage unique n'atteignent pas. Voir [Les passkeys et NIS2](/docs/security-academy/passkeys/passkey-vs-password#les-passkeys-et-nis2).

## Alors, les passkeys sont-elles plus sûres ? Le verdict

**Oui - à une condition près.**

Une passkey est plus sûre qu'un mot de passe dans toutes les situations où les identifiants sont réellement volés, et elle y parvient sans dépendre de votre vigilance. Pour les passkeys liées au matériel sur un secure element certifié, c'est l'authentification la plus solide généralement accessible aux particuliers comme aux organisations aujourd'hui.

La condition est d'anticiper votre récupération. Non parce que les passkeys sont fragiles - parce qu'elles sont assez solides pour que la voie de retour devienne le maillon faible. Et un maillon faible reste un maillon faible, où qu'il se situe.

Classement, du plus faible au plus solide :

1. Un mot de passe réutilisé
2. Un mot de passe long, unique et généré
3. Un mot de passe assorti d'un [code à usage unique](/docs/security-academy/authentication/what-is-otp) - voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
4. Une passkey synchronisée dans un coffre-fort cloud
5. Une passkey liée au matériel sur un secure element certifié, avec un second appareil enregistré

La plupart des gens se situent quelque part dans les trois premiers. Gagner deux places vaut bien une après-midi.

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Les passkeys sont-elles plus sûres que les mots de passe ?</summary>

Oui. Elles éliminent le phishing, le credential stuffing, la réutilisation et la force brute en tant que catégories d'attaque au lieu de les rendre plus difficiles, et leur solidité ne dépend pas des choix de la personne qui les utilise. Voir [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password).

</details>

<details>
<summary>Une passkey peut-elle être volée à distance ?</summary>

Pas une passkey liée au matériel. La clé privée ne quitte jamais le secure element : il n'y a donc rien à copier sur votre téléphone ou votre ordinateur pour un logiciel malveillant. Les passkeys synchronisées sont exposées à tout ce qui compromet le compte cloud qui les détient.

</details>

<details>
<summary>Que se passe-t-il si quelqu'un vole ma Seedkeeper PRO ?</summary>

Il lui faut encore votre PIN FIDO, vérifié à l'intérieur du secure element et qui verrouille l'appareil après plusieurs échecs. L'appareil seul ne suffit pas. Voir [Et si quelqu'un vole l'appareil ?](#et-si-quelquun-vole-lappareil-) ci-dessus.

</details>

<details>
<summary>Les passkeys synchronisées sont-elles mauvaises ?</summary>

Non - elles sont bien plus sûres que les mots de passe et c'est ce que la plupart des gens utiliseront. Elles concentrent simplement tous les identifiants dans un unique compte cloud, alors que les passkeys liées au matériel n'existent nulle part ailleurs que sur l'appareil. Choisissez selon ce que vous coûterait la perte du compte.

</details>

<details>
<summary>Quel est le plus grand risque avec les passkeys ?</summary>

Perdre tous les appareils enregistrés sans en avoir de secours, et devoir se rabattre sur une voie de récupération potentiellement plus faible que la passkey elle-même. C'est un problème d'anticipation qui se règle en dix minutes, pas un défaut de la technologie.

</details>

<details>
<summary>Si les passkeys sont si bonnes, pourquoi mon compte a-t-il encore un mot de passe ?</summary>

Parce que les services le conservent comme voie de récupération, et que la plupart n'autorisent pas sa suppression. C'est la réserve ci-dessus mise en pratique : votre compte est protégé par la voie d'accès la plus solide disponible, pas par celle que vous préférez utiliser.

</details>

<details>
<summary>Est-ce que cela vaut la peine si j'utilise déjà un gestionnaire de mots de passe et la 2FA ?</summary>

Oui, sur les comptes qui comptent. Un gestionnaire règle la réutilisation et la solidité, la 2FA règle les mots de passe divulgués, mais ni l'un ni l'autre n'arrête le phishing en temps réel. Seul le lien au domaine le fait.

</details>

<details>
<summary>Les passkeys sont-elles assez sûres pour une entreprise ?</summary>

Elles en deviennent progressivement le standard de référence, précisément parce qu'elles ne dépendent pas du jugement du personnel sous pression. Les organisations peuvent en outre imposer des identifiants liés au matériel et exclure les coffres-forts cloud personnels - voir [Configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id) et [Sécurité et conformité pour les organisations](/docs/business/security-compliance-for-organizations).

</details>

<details>
<summary>Les passkeys suffisent-elles à satisfaire NIS2 ?</summary>

NIS2 ne nomme aucune technologie. L'article 21(2)(j) exige une authentification multifacteur ou continue « lorsque cela est approprié », et l'authentification n'est qu'une des dix catégories de mesures de cet article - les passkeys couvrent donc une partie de l'obligation, pas sa totalité. C'est sur les comptes à privilèges et les accès distants qu'elles aident le plus, et les identifiants liés au matériel permettent en outre de prouver quels appareils ont été utilisés. La transposition nationale et les obligations propres à votre secteur déterminent ce qui s'applique à vous.

</details>

## Articles liés

- [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy)
- [Qu'est-ce que la MFA ?](/docs/security-academy/authentication/what-is-mfa)
- [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained)
