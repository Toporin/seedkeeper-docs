---
title: "Passkey vs OTP"
description: "Les codes à usage unique ajoutent un second facteur ; les passkeys remplacent le mot de passe. Pourquoi l'OTP reste hameçonnable, et pourquoi garder les deux."
keywords: [passkey vs OTP, passkey vs 2FA, TOTP, mot de passe à usage unique, 2FA hameçonnable, authentificateur matériel, FIDO2, authentification à deux facteurs, MFA résistante au phishing]
sidebar_position: 6
sidebar_label: "Passkey vs OTP"
---

import FaqSchema from '@site/src/components/FaqSchema';
import BuySeedkeeperPro from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-seedkeeper-pro.mdx';

<FaqSchema items={[
  {q: "Une passkey vaut-elle mieux que la 2FA ?", a: "Ce ne sont pas les mêmes catégories. L'authentification à deux facteurs renforce un mot de passe ; une passkey le supprime. Une passkey résiste au phishing d'une façon dont un code à usage unique est incapable : là où les deux sont proposées, la passkey est le choix le plus solide."},
  {q: "Les codes 2FA peuvent-ils être hameçonnés ?", a: "Oui. Une fausse page de connexion peut demander votre mot de passe puis votre code, et relayer les deux vers le vrai site à l'intérieur de la fenêtre de validité. C'est la pratique courante des kits de phishing, pas un cas marginal."},
  {q: "Si j'ai une passkey, ai-je encore besoin de l'OTP sur ce compte ?", a: "En général non : la passkey couvre déjà ce que l'OTP protégeait. Conservez-le si le service autorise encore la connexion par mot de passe en repli, car un compte ne vaut que sa voie d'accès la plus faible."},
  {q: "Une application d'authentification est-elle plus sûre que les codes SMS ?", a: "Oui, nettement. Le SMS est exposé au SIM swapping, où un attaquant convainc un opérateur de transférer votre numéro. Un secret TOTP détenu sur un secure element n'y est pas exposé du tout."},
  {q: "Pourquoi utiliser un appareil matériel plutôt qu'une application d'authentification ?", a: "Trois raisons pratiques : les secrets ne peuvent pas être relus, même par un logiciel malveillant présent sur votre téléphone ; vos codes ne sont pas prisonniers d'un seul combiné ni de l'écosystème d'un fournisseur ; et le même objet fonctionne sur n'importe quel téléphone ou ordinateur, y compris ceux qui ne vous appartiennent pas."},
  {q: "Qu'advient-il de mes codes si je perds ou change de téléphone ?", a: "Avec une Seedkeeper PRO, rien : les secrets sont sur l'appareil, pas sur le téléphone. Avec une application, tout dépend de la sauvegarde configurée au préalable, et c'est là que la plupart des gens se font piéger."},
  {q: "Quelqu'un peut-il voler mes codes TOTP sans toucher à mon appareil ?", a: "Si l'exemplaire du secret détenu par le service fuite lors d'une compromission, oui : il peut générer les mêmes codes que vous. C'est le coût structurel d'un secret partagé."},
  {q: "Pourquoi ne puis-je pas copier mes comptes OTP vers une seconde Seedkeeper PRO ?", a: "Parce que les secrets sont inscrits dans le secure element et ne peuvent jamais être relus, la propriété même qui les protège du vol. Pour détenir des codes identiques sur deux appareils, ajoutez-les depuis le même QR code sur les deux en même temps."},
  {q: "Un code à usage unique compte-t-il comme une MFA résistante au phishing ?", a: "Non. Un code TOTP est une information que vous lisez et saisissez : il peut donc être relayé à un attaquant en temps réel. Il compte comme authentification multifacteur, mais pas comme authentification multifacteur résistante au phishing, une distinction qui compte lorsqu'une réglementation ou un assureur exige précisément la seconde."},
  {q: "L'OTP est-il obsolète maintenant que les passkeys existent ?", a: "Absolument pas. La prise en charge des passkeys reste partielle, et l'OTP protège la grande majorité des comptes qui n'ont pas d'autre option. C'est le bon outil pour une tâche que les passkeys ne peuvent pas encore accomplir."},
]} />

<p class="doc-subtitle">Un second facteur et un remplacement ne sont pas la même chose</p>

<div class="tldr">

Un code à usage unique est un **second facteur** : il se pose par-dessus un mot de passe, et les deux restent nécessaires. Une [passkey](/docs/glossary/passkey) est un **remplacement** : elle retire entièrement le mot de passe de l'équation.

L'OTP est une nette amélioration par rapport au mot de passe seul, mais il reste hameçonnable - un code est une information que vous lisez et saisissez, il peut donc être relayé à un attaquant en temps réel. Une passkey ne le peut pas. Utilisez les passkeys là où elles sont prises en charge, l'OTP partout ailleurs : c'est pourquoi la Seedkeeper PRO fait les deux sur un seul appareil.

</div>

## La différence en une phrase

**L'OTP prouve que vous détenez un second secret. Une passkey prouve que vous détenez le seul secret qui compte, sans le révéler.**

La comparaison ne prend son sens qu'une fois compris que ces deux technologies se situent à des endroits différents du parcours de connexion.

**[L'OTP](/docs/security-academy/authentication/what-is-otp)** - un mot de passe à usage unique, généralement un code [TOTP](/docs/security-academy/authentication/what-is-totp) à six chiffres renouvelé toutes les trente secondes - a été conçu pour colmater une faiblesse précise : un mot de passe volé ne devrait pas suffire à entrer. Il suppose que le mot de passe existe toujours, et ajoute un second obstacle derrière lui.

**Une passkey** a été conçue pour supprimer la faiblesse plutôt que de la colmater. Il ne reste aucun mot de passe à voler, donc aucun second obstacle n'est nécessaire pour en compenser un.

C'est pourquoi « lequel est le meilleur » est le mauvais cadrage. L'un suppose que le mot de passe reste. L'autre suppose qu'il s'en va.

## Ce qu'est réellement chacun des deux

**Un mot de passe à usage unique (OTP)** est un code numérique court, valable pendant une brève fenêtre, généré à partir d'un secret partagé entre vous et le service lors de la configuration. La forme la plus répandue est le TOTP, où le code est fonction de ce secret et de l'heure courante - ce qui explique qu'il fonctionne sans aucune connexion réseau. Vous et le service détenez le même secret et calculez la même réponse, chacun de votre côté.

**Une passkey** est une paire de clés cryptographiques créée par votre appareil au moment où vous vous enregistrez auprès d'un service, selon le standard ouvert [FIDO2](/docs/glossary/fido2). La clé privée ne quitte jamais l'appareil ; le service ne détient que la clé publique correspondante. Rien n'est affiché, rien n'est saisi, et aucun secret n'est partagé entre les deux parties. Voir [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey).

## Passkey vs OTP : comparaison complète

| | OTP (code TOTP) | Passkey |
|---|---|---|
| **Rôle dans la connexion** | Second facteur, par-dessus un mot de passe | Remplace le mot de passe |
| **Ce que stocke le service** | Le même secret que vous | Une clé publique, inutile seule |
| **Résiste au phishing** | ❌ Non - un code peut être relayé en temps réel | ✅ Oui - lié au domaine |
| **Protège d'un mot de passe divulgué** | ✅ Oui - le code reste exigé | ✅ Oui - il n'y a pas de mot de passe |
| **Vulnérable à une fausse page de connexion** | ❌ Oui - vous y saisissez le code vous-même | ✅ Non - l'appareil ne répond pas |
| **Exposé si le service est compromis** | ❌ Oui - un secret divulgué génère vos codes indéfiniment | ✅ Non - aucun secret n'est détenu |
| **Exige de saisir quelque chose** | ❌ Oui, avant expiration | ✅ Non - une présentation et un PIN |
| **Fonctionne hors ligne** | ✅ Oui | ✅ Oui |
| **Prise en charge par les services** | ✅ Très large et mature | ❌ En progression rapide, encore partielle |
| **Menace principale** | Phishing en temps réel et vol du secret | Perdre tous les appareils enregistrés d'un coup |

## Pourquoi l'OTP reste hameçonnable

C'est le point que la plupart des gens comprennent de travers, et il vaut la peine d'être précis.

**Un code TOTP est une information.** Si une fausse page convaincante vous demande votre mot de passe puis votre code, vous fournissez les deux - et un attaquant qui les relaie vers le vrai site à l'intérieur de la même fenêtre de trente secondes est entré. Ce n'est pas théorique. C'est ainsi que fonctionnent les kits de phishing commerciaux aujourd'hui, et tout l'échange prend quelques secondes.

Observez la forme du problème : elle est identique à celle du mot de passe. Tout ce que vous pouvez lire et saisir, on peut vous tromper pour que vous le lisiez et le saisissiez ailleurs. La protection repose sur votre capacité à identifier correctement le site, c'est-à-dire précisément le jugement que les attaquants savent mettre en échec. Essayez la fausse page dans [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked#phishing--e-mails-et-faux-sites-web) et voyez comment vous vous en sortez.

Une passkey supprime ce jugement. Rien n'est affiché que vous puissiez recopier, et la vérification de domaine a lieu dans le navigateur avant même que votre appareil ne soit sollicité - voir [Comment fonctionnent les passkeys](/docs/security-academy/passkeys/how-passkeys-work#la-vérification-de-domaine-cest-tout-le-secret).

**Rien de tout cela ne rend l'OTP inutile.** Il met en échec toutes les attaques reposant sur un mot de passe divulgué ou réutilisé, c'est-à-dire la plupart d'entre elles. Il ne met simplement pas en échec celle qui repose sur le fait de vous tromper.

## Le problème du secret partagé

Il existe une seconde différence, plus discrète, qui compte davantage qu'il n'y paraît.

Quand vous configurez le TOTP, le service génère un secret et vous le communique via un QR code. À partir de cet instant, **les deux parties détiennent le même secret**. Si l'exemplaire du service fuite lors d'une compromission, un attaquant peut générer vos codes indéfiniment - sans jamais toucher votre appareil, et sans que vous ayez le moindre moyen de vous en apercevoir.

Une passkey n'a aucun secret partagé susceptible de fuiter. Le service détient une clé publique, qui ne produit rien d'utile à elle seule.

C'est aussi pourquoi le matériel sérieux traite les secrets OTP avec précaution. Sur une Seedkeeper PRO, les secrets sont inscrits dans le secure element et ne peuvent pas être relus - aucun export, aucune migration, aucune copie. C'est excellent pour la sécurité, et cela signifie qu'un second appareil s'anticipe plutôt qu'il ne se rattrape. Voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

## Pas des rivaux, une séquence

En pratique, ce sont deux étapes du même parcours, et la plupart des gens vivront avec les deux pendant des années.

**Là où les passkeys sont prises en charge, utilisez-les.** Google, Microsoft, Amazon, PayPal, GitHub et une liste qui s'allonge les acceptent aujourd'hui.

**Là où elles ne le sont pas, utilisez un mot de passe assorti d'un OTP.** C'est une amélioration substantielle par rapport au mot de passe seul, et cela reste la bonne réponse pour la majorité des services.

**Évitez les codes SMS partout où vous avez le choix.** Ils sont vulnérables au SIM swapping, où un attaquant convainc un opérateur de transférer votre numéro vers sa propre carte SIM. Un TOTP applicatif ou matériel est strictement supérieur - voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp) pour comprendre pourquoi le mode d'acheminement change tout.

L'ordre est ce qui compte : l'OTP n'est pas un concurrent des passkeys, c'est le filet qui couvre tout ce qu'elles n'ont pas encore atteint. Quiconque vous dit d'en choisir un décrit un choix que vous n'avez pas à faire.

Une nuance compte en environnement réglementé. Un code à usage unique satisfait à une exigence formulée comme « utiliser une authentification multifacteur » - ce que fait la directive européenne NIS2 à l'article 21(2)(j). Il ne satisfait pas à une exigence formulée comme « utiliser une authentification multifacteur résistante au phishing », direction vers laquelle les orientations des autorités de contrôle évoluent pour les comptes à privilèges et les accès distants. Si votre organisation entre dans le champ, c'est cette distinction qu'il faut vérifier. Voir [Les passkeys et NIS2](/docs/security-academy/passkeys/passkey-vs-password#les-passkeys-et-nis2).

## Où résident vos codes OTP compte aussi

Décider d'utiliser l'OTP n'est qu'une moitié de décision. L'autre moitié est ce qui génère les codes - et les options diffèrent plus que la plupart des gens ne l'imaginent.

| | Application d'authentification sur téléphone | Appareil matériel dédié |
|---|---|---|
| **Exemples** | Google Authenticator, Authy, Microsoft Authenticator | Seedkeeper PRO |
| **Où résident les secrets** | Dans le stockage d'une application, sur un téléphone polyvalent | Sur un secure element certifié, en écriture seule |
| **Exposé aux logiciels malveillants du téléphone** | ⚠️ Dépend de l'intégrité du téléphone | ✅ Non - les secrets sont illisibles, même pour l'application |
| **Lié à un seul téléphone** | ❌ Oui, et à son système d'exploitation | ✅ Non - fonctionne avec n'importe quel téléphone ou ordinateur |
| **Lié à un compte fournisseur** | ⚠️ Souvent, pour la sauvegarde cloud | ✅ Aucun compte, aucun cloud, aucun fournisseur |
| **Survit à la perte du téléphone** | ⚠️ Uniquement si la sauvegarde cloud était activée | ✅ L'appareil est indépendant de tout téléphone |
| **Nécessite une batterie** | ❌ Oui | ✅ Non |
| **Code auditable** | ❌ Majoritairement propriétaire | ✅ Firmware open source |

**Sur votre téléphone.** Les secrets résident dans le stockage d'une application, sur un appareil qui navigue aussi sur le web, installe des logiciels et relève des mails. Sur un téléphone sain, c'est acceptable. Sur un téléphone compromis, non - et les applications à sauvegarde cloud ajoutent un compte fournisseur à la chaîne, qui devient une cible à part entière.

**Sur du matériel dédié.** Le secret est inscrit dans le secure element et ne peut être relu par personne, y compris par l'application qui l'y a placé. Il n'y a aucune synchronisation cloud à compromettre et aucun compte à hameçonner.

### Pourquoi générer vos TOTP depuis une Seedkeeper PRO

La plupart des gens finissent avec leurs codes enfermés dans un téléphone précis, d'un fournisseur précis, sans issue. La Seedkeeper PRO repose sur l'hypothèse inverse.

**Elle n'est pas liée à votre téléphone personnel.** Les codes résident sur la carte ou la bague, pas dans le stockage d'une application. Changez de téléphone, cassez-en un, passez d'iPhone à Android - vos codes ne sont pas affectés, puisqu'ils n'ont jamais été sur le téléphone.

**Elle n'est liée ni à une marque ni à un écosystème.** Aucun compte à créer, aucun cloud avec lequel se synchroniser, aucune connexion fournisseur entre vous et vos propres codes. Rien de vos identifiants ne transite par Satochip.

**Elle est réellement portable.** Une carte dans votre portefeuille ou une bague à votre doigt fonctionne face à n'importe quel téléphone NFC et n'importe quel ordinateur. Y compris une machine professionnelle, un poste partagé ou le portable d'un collègue - des situations où installer une application d'authentification personnelle est gênant ou interdit.

**Elle est open source.** Le firmware est publié sous AGPLv3 et peut être lu, audité et vérifié par quiconque. Une sécurité qu'on vous demande de croire sur parole n'est pas une sécurité, et c'est exactement ce que demandent la plupart des applications d'authentification.

**Elle n'a ni batterie ni écran.** Rien à recharger, rien à casser, rien qui fuite sur un écran de verrouillage. L'appareil fait une seule chose.

**Et elle couvre les deux étapes à la fois.** Mots de passe, secrets TOTP et jusqu'à 90 passkeys sur un unique secure element EAL6+, [certifié FIDO2 Level 1](/docs/security-academy/passkeys/what-is-fido2#seedkeeper-pro--certifiée-fido2-level-1). La [Seedkeeper PRO App](/docs/product-documentation/otp-authenticator/adding-a-totp-account) gère la partie OTP ; les passkeys fonctionnent directement via le navigateur, sans aucune application.

Ce dernier point est l'argument pratique. Un appareil ne gérant que les passkeys laisserait aujourd'hui la plupart de vos comptes découverts. Un appareil ne gérant que l'OTP laisserait le problème du phishing entier. La transition entre les deux étapes prend des années, et un seul objet la couvre en totalité.

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Une passkey vaut-elle mieux que la 2FA ?</summary>

Ce ne sont pas les mêmes catégories. [L'authentification à deux facteurs](/docs/security-academy/authentication/what-is-2fa) renforce un mot de passe ; une passkey le supprime. Une passkey résiste au phishing d'une façon dont un code à usage unique est incapable : là où les deux sont proposées, la passkey est le choix le plus solide.

</details>

<details>
<summary>Les codes 2FA peuvent-ils être hameçonnés ?</summary>

Oui. Une fausse page de connexion peut demander votre mot de passe puis votre code, et relayer les deux vers le vrai site à l'intérieur de la fenêtre de validité. C'est la pratique courante des kits de phishing, pas un cas marginal. Voir [Pourquoi l'OTP reste hameçonnable](#pourquoi-lotp-reste-hameçonnable) ci-dessus.

</details>

<details>
<summary>Si j'ai une passkey, ai-je encore besoin de l'OTP sur ce compte ?</summary>

En général non - la passkey couvre déjà ce que l'OTP protégeait. Conservez-le si le service autorise encore la connexion par mot de passe en repli, car un compte ne vaut que sa voie d'accès la plus faible.

</details>

<details>
<summary>Une application d'authentification est-elle plus sûre que les codes SMS ?</summary>

Oui, nettement. Le SMS est exposé au SIM swapping, où un attaquant convainc un opérateur de transférer votre numéro. Un secret TOTP détenu sur un secure element n'y est pas exposé du tout.

</details>

<details>
<summary>Pourquoi utiliser un appareil matériel plutôt qu'une application d'authentification ?</summary>

Trois raisons pratiques : les secrets ne peuvent pas être relus, même par un logiciel malveillant présent sur votre téléphone ; vos codes ne sont pas prisonniers d'un seul combiné ni de l'écosystème d'un fournisseur ; et le même objet fonctionne sur n'importe quel téléphone ou ordinateur, y compris ceux qui ne vous appartiennent pas. Voir [Pourquoi générer vos TOTP depuis une Seedkeeper PRO](#pourquoi-générer-vos-totp-depuis-une-seedkeeper-pro) ci-dessus.

</details>

<details>
<summary>Qu'advient-il de mes codes si je perds ou change de téléphone ?</summary>

Avec une Seedkeeper PRO, rien - les secrets sont sur l'appareil, pas sur le téléphone. Avec une application, tout dépend de la sauvegarde configurée au préalable, et c'est là que la plupart des gens se font piéger.

</details>

<details>
<summary>Quelqu'un peut-il voler mes codes TOTP sans toucher à mon appareil ?</summary>

Si l'exemplaire du secret détenu par le service fuite lors d'une compromission, oui - il peut générer les mêmes codes que vous. C'est le coût structurel d'un secret partagé. Voir [Le problème du secret partagé](#le-problème-du-secret-partagé) ci-dessus.

</details>

<details>
<summary>Pourquoi ne puis-je pas copier mes comptes OTP vers une seconde Seedkeeper PRO ?</summary>

Parce que les secrets sont inscrits dans le secure element et ne peuvent jamais être relus - la propriété même qui les protège du vol. Pour détenir des codes identiques sur deux appareils, ajoutez-les depuis le même QR code sur les deux en même temps. Voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

</details>

<details>
<summary>Un code à usage unique compte-t-il comme une MFA résistante au phishing ?</summary>

Non. Un code TOTP est une information que vous lisez et saisissez : il peut donc être relayé à un attaquant en temps réel. Il compte comme authentification multifacteur, mais pas comme authentification multifacteur résistante au phishing - une distinction qui compte lorsqu'une réglementation ou un assureur exige précisément la seconde.

</details>

<details>
<summary>L'OTP est-il obsolète maintenant que les passkeys existent ?</summary>

Absolument pas. La prise en charge des passkeys reste partielle, et l'OTP protège la grande majorité des comptes qui n'ont pas d'autre option. C'est le bon outil pour une tâche que les passkeys ne peuvent pas encore accomplir.

</details>

## Articles liés

- [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password)
- [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Définir un PIN d'accès OTP](/docs/product-documentation/otp-authenticator/setting-up-otp-access-pin)
- [Qu'est-ce que le TOTP ?](/docs/security-academy/authentication/what-is-totp)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Qu'est-ce que la 2FA ?](/docs/security-academy/authentication/what-is-2fa)
