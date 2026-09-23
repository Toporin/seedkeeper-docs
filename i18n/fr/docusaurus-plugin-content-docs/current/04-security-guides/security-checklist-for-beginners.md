---
title: "Liste de contrôle sécurité pour débutants"
description: "Dix choses à faire, par ordre d'efficacité. Sans jargon, sans connaissances préalables, et la plupart prennent moins de cinq minutes chacune."
keywords: [liste de contrôle sécurité, cybersécurité pour débutants, comment être en sécurité en ligne, sécurité en ligne de base, protéger mes comptes]
sidebar_position: 1
sidebar_label: "Liste de contrôle sécurité pour débutants"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Par où commencer en matière de sécurité en ligne ?", a: "Par votre compte e-mail. C'est la voie de réinitialisation de presque tout ce que vous possédez : le sécuriser protège donc tous les comptes qui en dépendent."},
  {q: "Ai-je vraiment besoin d'un gestionnaire de mots de passe ?", a: "Si vous voulez des mots de passe uniques partout, oui. Des dizaines de longs mots de passe aléatoires ne peuvent pas être mémorisés : sans gestionnaire, les gens se rabattent sur la réutilisation, l'habitude la plus dommageable en sécurité personnelle."},
  {q: "L'authentification à deux facteurs vaut-elle le dérangement ?", a: "Oui, et elle dérange moins qu'il n'y paraît : la plupart des services ne la demandent que sur un nouvel appareil. Elle bloque l'immense majorité des prises de contrôle automatisées, qui reposent sur le fait qu'un mot de passe divulgué suffise."},
  {q: "Comment savoir si mon mot de passe a fuité ?", a: "Vérifiez votre adresse e-mail sur haveibeenpwned.com, une base gratuite de notification de fuites. Si elle y figure, considérez ce mot de passe et tous les comptes qui l'utilisent encore comme compromis."},
  {q: "Dois-je noter mes mots de passe ?", a: "Sur papier, chez vous, c'est bien mieux que de réutiliser un mot de passe partout : la menace réaliste est un attaquant à distance, pas un cambrioleur lisant votre carnet. Un gestionnaire de mots de passe reste préférable."},
]} />

<p class="doc-subtitle">Commencez ici, par ordre de ce qui compte vraiment</p>

<div class="tldr">

La plupart des gens n'ont pas besoin de plus de connaissances en sécurité - ils ont besoin d'une liste courte, dans le bon ordre, qu'ils terminent réellement. La voici : dix étapes, classées selon le risque que chacune supprime. Les trois premières comptent davantage que tout le reste réuni.

</div>

## Comment utiliser cette liste

Descendez du haut vers le bas et arrêtez-vous dès que vous manquez de temps. L'ordre est délibéré : chaque étape supprime plus de risque que la suivante, donc une liste inachevée reste une liste utile.

Rien ici ne suppose que vous connaissiez quoi que ce soit à la sécurité. Là où une étape touche à un point qui mérite d'être compris, un lien est proposé - mais vous pouvez accomplir chaque point sans en suivre un seul.

## 1. Sécurisez d'abord votre messagerie

Votre boîte mail est la voie de réinitialisation de presque tous vos autres comptes. Quiconque la contrôle peut demander une réinitialisation de mot de passe à peu près partout et recevoir le lien lui-même.

C'est donc la cible la plus précieuse dont vous disposez, et l'endroit où passer vos dix premières minutes.

- Donnez-lui un mot de passe long et unique, qui n'existe nulle part ailleurs
- Activez l'authentification à deux facteurs - voir [Qu'est-ce que la 2FA ?](/docs/security-academy/authentication/what-is-2fa)
- Si votre fournisseur prend en charge les passkeys, ajoutez-en une : [Google](/docs/tutorials/google/enable-passkey-on-google), [Outlook](/docs/tutorials/microsoft/enable-passkeys-on-outlook)

## 2. Cessez de réutiliser vos mots de passe

Une seule fuite chez un service auquel vous vous souvenez à peine de vous être inscrit livre aux attaquants un mot de passe fonctionnel partout ailleurs où vous l'avez employé. C'est ainsi que se produisent la plupart des prises de contrôle de comptes, et cela n'a rien à voir avec l'ingéniosité du mot de passe.

Vérifiez si vous êtes déjà concerné sur **haveibeenpwned.com** - gratuit, et tenu par un chercheur en sécurité plutôt que par une entreprise qui vous vend quelque chose. Changez ensuite tout ce qui y apparaît.

Voir [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous).

## 3. Utilisez un gestionnaire de mots de passe

Les étapes 1 et 2 sont impossibles à tenir de mémoire. Des dizaines de comptes, chacun avec un long mot de passe différent, n'est pas un problème de discipline - c'est une arithmétique qui ne fonctionne pas.

Un gestionnaire de mots de passe les génère et les conserve pour que vous n'ayez jamais à en retenir aucun. Les gestionnaires cloud sont pratiques ; les outils hors ligne et les appareils matériels vous tiennent entièrement hors de la chaîne d'un fournisseur. Voir [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained) pour choisir.

## 4. Activez l'authentification à deux facteurs là où cela compte

Pas partout d'un coup. Commencez par les comptes dont une prise de contrôle ferait réellement mal : banque, stockage cloud, tout ce qui contient des documents ou des coordonnées de paiement.

Préférez une application d'authentification ou une clé matérielle aux codes SMS, car un numéro de téléphone peut être transféré à un attaquant sans le moindre piratage - voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## 5. Conservez vos codes de récupération

Quand vous activez l'authentification à deux facteurs, la plupart des services affichent une liste de codes de récupération à usage unique. Presque tout le monde ferme cet écran et le regrette plus tard.

Conservez-les ailleurs que sur votre téléphone et ailleurs que dans votre boîte mail - les deux endroits les plus susceptibles d'être indisponibles au moment où vous en aurez besoin.

## 6. Mettez vos appareils à jour

La plupart des attaques réussies exploitent des failles corrigées depuis des mois, contre des gens qui n'avaient pas installé le correctif.

Activez les mises à jour automatiques de votre téléphone, de votre ordinateur et de votre navigateur. C'est l'habitude de sécurité la plus rentable qui ne demande aucun effort continu de votre part.

## 7. Apprenez à repérer une fausse page de connexion

Le phishing ne casse rien - il demande poliment, déguisé en quelque chose auquel vous faites confiance. C'est la façon la plus courante de perdre un compte, et la plus difficile à détecter à l'œil nu.

Essayez la page Microsoft sosie dans [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked#phishing--e-mails-et-faux-sites-web) et voyez comment vous vous en sortez. La plupart des gens ne la repèrent pas, et c'est précisément le propos.

L'habitude fiable : ne vous connectez jamais depuis un lien reçu par e-mail. Saisissez l'adresse vous-même, ou utilisez un favori.

## 8. Méfiez-vous de l'urgence

Toute attaque d'ingénierie sociale contient le même ingrédient : une raison d'agir maintenant, avant de réfléchir.

Un appel inattendu de « votre banque », un message d'un collègue qui a soudain besoin d'un service, un avertissement annonçant la fermeture de votre compte aujourd'hui. Les vraies organisations ne fonctionnent pas ainsi, et aucun membre légitime d'un support ne vous demandera jamais de lire à voix haute un mot de passe ou un code à usage unique.

Raccrochez. Rappelez sur un numéro que vous avez cherché vous-même.

## 9. Verrouillez vos appareils

Vos comptes ne sont en sécurité que dans la mesure où l'est le téléphone ou l'ordinateur depuis lequel vous vous connectez. Activez un verrouillage d'écran, utilisez la biométrie quand elle est disponible, et activez le chiffrement intégral du disque - il l'est par défaut sur les téléphones récents et la plupart des ordinateurs portables.

## 10. Passez aux passkeys là où elles sont proposées

Les étapes ci-dessus limitent les dégâts d'un système qui n'a jamais été conçu pour cela. Une [passkey](/docs/security-academy/passkeys/what-is-a-passkey) supprime entièrement le secret partagé : rien à retenir, rien à saisir dans une fausse page, rien à laisser fuiter lors d'une compromission.

La prise en charge reste partielle : c'est donc une transition progressive plutôt qu'une bascule. Commencez par les comptes de l'étape 1 - voir [Passkey vs mot de passe](/docs/security-academy/passkeys/passkey-vs-password).

## Si vous ne faites que trois choses

Les étapes 1, 2 et 3. Messagerie sécurisée, aucun mot de passe réutilisé, un gestionnaire pour rendre l'ensemble tenable. Cela supprime la grande majorité du risque réaliste pour la plupart des gens, en moins d'une heure.

Tout le reste de cette liste mérite d'être fait. Rien de tout cela ne remplace ces trois étapes.

## FAQ

<details>
<summary>Par où commencer en matière de sécurité en ligne ?</summary>

Par votre compte e-mail. C'est la voie de réinitialisation de presque tout ce que vous possédez : le sécuriser protège donc tous les comptes qui en dépendent.

</details>

<details>
<summary>Ai-je vraiment besoin d'un gestionnaire de mots de passe ?</summary>

Si vous voulez des mots de passe uniques partout, oui. Des dizaines de longs mots de passe aléatoires ne peuvent pas être mémorisés : sans gestionnaire, les gens se rabattent sur la réutilisation, l'habitude la plus dommageable en sécurité personnelle.

</details>

<details>
<summary>L'authentification à deux facteurs vaut-elle le dérangement ?</summary>

Oui, et elle dérange moins qu'il n'y paraît - la plupart des services ne la demandent que sur un nouvel appareil. Elle bloque l'immense majorité des prises de contrôle automatisées, qui reposent sur le fait qu'un mot de passe divulgué suffise.

</details>

<details>
<summary>Comment savoir si mon mot de passe a fuité ?</summary>

Vérifiez votre adresse e-mail sur haveibeenpwned.com, une base gratuite de notification de fuites. Si elle y figure, considérez ce mot de passe et tous les comptes qui l'utilisent encore comme compromis.

</details>

<details>
<summary>Dois-je noter mes mots de passe ?</summary>

Sur papier, chez vous, c'est bien mieux que de réutiliser un mot de passe partout - la menace réaliste est un attaquant à distance, pas un cambrioleur lisant votre carnet. Un gestionnaire de mots de passe reste préférable.

</details>

## Articles liés

- [Sécurisez votre vie numérique en 30 minutes](/docs/security-guides/secure-your-digital-life-in-30-minutes)
- [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous)
- [Qu'est-ce que la 2FA ?](/docs/security-academy/authentication/what-is-2fa)
- [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked)
- [Guide de sécurité du smartphone](/docs/security-guides/smartphone-security-guide)
