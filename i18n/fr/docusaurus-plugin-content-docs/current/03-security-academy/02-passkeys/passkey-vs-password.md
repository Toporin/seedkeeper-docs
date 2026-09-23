---
title: "Passkey vs mot de passe"
description: "Passkeys et mots de passe comparés sur le phishing, les fuites, la réutilisation et la récupération - y compris les deux points où le mot de passe gagne."
keywords: [passkey vs mot de passe, passkey meilleure que mot de passe, passkey, mot de passe, authentification résistante au phishing, FIDO2, connexion sans mot de passe, passkey matérielle, NIS2 MFA]
sidebar_position: 5
sidebar_label: "Passkey vs mot de passe"
---

import FaqSchema from '@site/src/components/FaqSchema';
import BuySeedkeeperPro from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-seedkeeper-pro.mdx';

<FaqSchema items={[
  {q: "Pourquoi acheter un appareil matériel alors que mon téléphone propose des passkeys gratuitement ?", a: "Parce qu'ils protègent des choses différentes. Une passkey de téléphone ou de cloud met le phishing en échec tout aussi bien, mais la clé est recopiée sur tous vos appareils et gardée par un compte chez un fournisseur : ce compte devient alors la cible. Une passkey matérielle existe sur une seule puce qui ne peut pas l'exporter, fonctionne sur des ordinateurs qui ne vous appartiennent pas, et ne place personne d'autre dans la chaîne."},
  {q: "Les passkeys synchronisées sont-elles mauvaises ?", a: "Non. Elles sont bien plus sûres que les mots de passe et c'est ce que la plupart des gens utiliseront. Elles concentrent simplement tous les identifiants dans un unique compte cloud, alors que les passkeys liées au matériel n'existent nulle part ailleurs que sur l'appareil."},
  {q: "Quelle est la principale différence entre une passkey et un mot de passe ?", a: "Un mot de passe est un secret partagé transmis au service à chaque connexion. Une passkey est une clé privée qui ne quitte jamais votre appareil : le service ne détient qu'une clé publique correspondante et vérifie une signature. Rien qui vaille la peine d'être volé n'est jamais envoyé ni stocké."},
  {q: "Les passkeys sont-elles réellement plus sûres que les mots de passe ?", a: "Oui. Elles éliminent le phishing, le credential stuffing, la réutilisation et la force brute en tant que catégories d'attaque, au lieu de les rendre plus difficiles. Les risques restants, la perte d'appareil et les voies de récupération de compte, se traitent en enregistrant un second appareil."},
  {q: "Dois-je supprimer mon mot de passe une fois une passkey ajoutée ?", a: "En général vous ne le pouvez pas, et souvent vous ne devriez pas. La plupart des services conservent le mot de passe comme voie de récupération et n'autorisent pas sa suppression. Lorsque la suppression est possible et qu'un second appareil est enregistré, la retirer ferme effectivement une voie d'attaque réelle."},
  {q: "Une passkey est-elle plus solide qu'un très long mot de passe aléatoire ?", a: "Oui, mais pas pour la raison attendue. Un mot de passe généré de 20 caractères est déjà hors de portée de la force brute. L'avantage est qu'une passkey ne peut être ni hameçonnée, ni divulguée lors d'une fuite, ni réutilisée, ce qui correspond à la façon dont les mots de passe sont réellement compromis."},
  {q: "Ai-je encore besoin d'un gestionnaire de mots de passe si j'utilise des passkeys ?", a: "Oui, pour des années encore. La plupart de vos comptes continueront d'utiliser des mots de passe, qui doivent rester longs, uniques et générés."},
  {q: "Que se passe-t-il si un service qui stocke ma passkey se fait pirater ?", a: "L'attaquant obtient une clé publique, qui ne permet de se connecter nulle part. C'est l'avantage structurel sur les mots de passe, où une base de hachés compromise mène directement à des comptes compromis."},
  {q: "NIS2 impose-t-elle les passkeys ?", a: "Pas nommément. L'article 21(2)(j) exige une authentification multifacteur ou continue lorsque cela est approprié, et la directive est neutre technologiquement. Ce que les orientations attendent de plus en plus est une MFA résistante au phishing sur les accès à privilèges et distants, ce que les passkeys FIDO2 sont la façon standard de fournir."},
  {q: "Puis-je utiliser une passkey sur un ordinateur qui n'est pas le mien ?", a: "Oui, avec un authentificateur itinérant comme la Seedkeeper PRO : présentez-la ou connectez-la, saisissez votre PIN, et rien ne reste sur cette machine. Une passkey stockée dans le matériel intégré d'un téléphone ou d'un portable ne peut pas voyager ainsi."},
  {q: "Que faire si je perds l'appareil qui contient mes passkeys ?", a: "Si un second appareil est enregistré, vous vous connectez avec lui et vous retirez celui qui est perdu. Sinon, vous vous rabattez sur la procédure de récupération du service. Les dix minutes passées à enregistrer un appareil de secours font toute la différence."},
]} />

<p class="doc-subtitle">Deux façons de prouver qui vous êtes, comparées en détail</p>

<div class="tldr">

Un mot de passe est un secret que vous et le service détenez tous les deux : l'une ou l'autre partie peut donc le laisser fuiter. Une [passkey](/docs/glossary/passkey) est une clé privée que vous seul détenez, que le service peut vérifier mais ne possède jamais.

Cette seule différence structurelle élimine le phishing, le credential stuffing et l'exposition aux fuites - non pas en les rendant plus difficiles, mais en supprimant ce qu'ils attaquent. Le mot de passe conserve deux avantages : il fonctionne sur tous les services, et il ne nécessite aucun appareil.

</div>

## La différence en une phrase

**Un mot de passe est quelque chose que vous envoyez. Une passkey est quelque chose dont vous prouvez la possession sans jamais l'envoyer.**

Tout le reste de cette comparaison en découle.

Un mot de passe est **symétrique**. Vous le connaissez, le service le connaît, et se connecter consiste à le transmettre. Deux exemplaires existent, tous deux dignes d'être volés, et vous n'avez aucun contrôle sur la façon dont le service protège le sien.

Une passkey est **asymétrique**. Votre appareil détient une clé privée, le service ne détient que la clé publique correspondante. Se connecter consiste à prouver mathématiquement que vous détenez la clé privée, sans la révéler. L'exemplaire du service est sans valeur pour un attaquant : il permet de vérifier une signature, jamais d'en produire une.

## Ce qu'est réellement chacun des deux

**Un mot de passe** est une chaîne de caractères choisie par un humain et stockée, idéalement hachée, sur les serveurs du service. Il existe depuis les années 1960 et reste la façon par défaut de se connecter à peu près partout. Sa sécurité dépend de trois choses que vous contrôlez : la longueur, le hasard, et le fait de ne pas le réutiliser. Voir [Qu'est-ce qu'un mot de passe ?](/docs/security-academy/password-security/what-is-a-password).

**Une passkey** est une paire de clés cryptographiques générée par votre appareil au moment où vous vous enregistrez auprès d'un service, selon le standard ouvert [FIDO2](/docs/glossary/fido2). La clé privée reste sur l'appareil qui l'a créée. La clé publique part vers le service. Rien de tout cela n'est choisi, retenu ou saisi par un humain. Voir [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey).

## Passkey vs mot de passe : comparaison complète

| | Mot de passe | Passkey |
|---|---|---|
| **Ce que stocke le service** | Un haché de votre secret | Une clé publique, inutile seule |
| **Peut être hameçonné** | ❌ Oui - le saisir dans une fausse page le livre | ✅ Non - lié au domaine réel, ne répond pas ailleurs |
| **Exposé par une fuite de données** | ❌ Oui - les hachés fuitent et sont cassés hors ligne | ✅ Non - il n'y a aucun secret à laisser fuiter |
| **Peut être réutilisé d'un site à l'autre** | ❌ Oui, et la plupart des gens le font | ✅ Impossible - une paire de clés par service |
| **Peut être deviné ou forcé** | ❌ Oui, s'il est court ou prévisible | ✅ Non - les clés ne sont pas choisies par un humain |
| **Peut être intercepté en transit** | ❌ Possible sur une connexion compromise | ✅ Aucun secret n'est jamais transmis |
| **La sécurité dépend des choix de l'utilisateur** | ❌ Oui, fortement | ✅ Non - identique pour tout le monde |
| **Vous devez le retenir** | ❌ Oui, ou le déléguer à un gestionnaire | ✅ Non - l'appareil le détient |
| **Fonctionne sur tous les services** | ✅ Universellement | ❌ Seulement là où c'est pris en charge, en progression rapide |
| **Nécessite un appareil présent** | ✅ Non | ❌ Oui - l'authentificateur doit être là |
| **Récupération en cas de perte** | ✅ Lien de réinitialisation par e-mail ou téléphone | ❌ Exige un second appareil enregistré à l'avance |
| **Menace principale** | Phishing et credential stuffing | Perdre tous les appareils enregistrés d'un coup |

## Les passkeys sont-elles meilleures que les mots de passe ?

**Oui - sur toutes les attaques qui compromettent réellement les comptes en pratique.** L'amélioration est structurelle plutôt que graduelle : les passkeys ne rendent pas ces attaques plus difficiles, elles suppriment ce qui est attaqué.

### Le phishing

C'est la différence décisive.

Un mot de passe peut être saisi dans n'importe quel champ de texte. Les kits de phishing actuels clonent les pages de connexion au pixel près, et la seule défense est votre capacité à repérer un mauvais domaine dans une barre d'adresse - un jugement que les attaquants sont extrêmement doués pour mettre en échec. Essayez vous-même sur la fausse page Microsoft dans [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked#phishing--e-mails-et-faux-sites-web).

Une passkey est liée définitivement, dès l'enregistrement, au domaine exact du service. Quand une fausse page la réclame, le domaine ne correspond pas et le navigateur ne transmet même jamais la demande à votre appareil. Il n'y a aucune alerte à écarter, aucun avertissement à ignorer, et rien que vous puissiez faire de travers.

**Le mot de passe vous demande de détecter l'attaque. La passkey rend l'attaque impossible à mener.**

### Les fuites de données

Quand un service détenant des mots de passe subit une fuite, les conséquences retombent sur ses utilisateurs : les hachés circulent, les plus faibles sont cassés en quelques heures, et chaque compte où ce mot de passe était réutilisé devient accessible.

Quand un service détenant des passkeys subit une fuite, l'attaquant obtient une liste de clés publiques. Il n'y a rien à casser, rien à réutiliser, et rien qui donne accès où que ce soit. Votre sécurité ne dépend plus du soin avec lequel une entreprise que vous n'avez jamais rencontrée conserve votre secret - puisque vous ne lui en avez jamais confié.

### La réutilisation

La réutilisation des mots de passe est l'habitude la plus dommageable en sécurité personnelle, et c'est pourquoi une fuite unique en entraîne beaucoup d'autres. Voir [Pourquoi réutiliser un mot de passe est dangereux](/docs/security-academy/password-security/why-password-reuse-is-dangerous).

Vous ne pouvez pas réutiliser une passkey, même délibérément. Une paire de clés neuve est générée pour chaque service : deux comptes ne partagent jamais rien, et rien ne les relie entre eux. L'habitude n'est pas découragée, elle est structurellement impossible.

### La solidité

La solidité d'un mot de passe est une variable que vous fixez, et la plupart des gens la fixent mal. La solidité d'une passkey est déterminée par la cryptographie et identique pour tout le monde.

Ce point est sous-estimé : **les passkeys protègent le mieux exactement les personnes que les mots de passe protègent le moins**. Il n'existe aucune façon d'en configurer une mal, aucun raccourci à prendre quand on est pressé, et aucune habitude à tenir sur des années.

## Là où le mot de passe l'emporte encore

Une comparaison dont un camp remporte toutes les manches n'est pas une analyse. Deux avantages réels demeurent.

**Une prise en charge universelle.** Tous les services de la planète acceptent un mot de passe. L'adoption des passkeys progresse vite - Google, Microsoft, Amazon, PayPal, GitHub et bien d'autres les prennent en charge aujourd'hui - mais la couverture reste partielle, et le restera des années. Nos [tutoriels](/docs/category/google/) couvrent les services où vous pouvez basculer dès maintenant.

**Aucun appareil nécessaire.** Un mot de passe réside dans votre mémoire : vous pouvez donc vous connecter depuis un portable emprunté, les poches vides. Une passkey exige la présence physique de son authentificateur. Cette exigence est précisément ce qui la rend impossible à voler à distance, et cela reste une contrainte réelle.

Il existe un troisième point, moins un avantage qu'un avertissement : **la récupération fonctionne différemment**. Un mot de passe oublié est un désagrément que résout un lien de réinitialisation. Un authentificateur matériel perdu, sans second appareil enregistré, est un vrai problème. C'est une question d'anticipation, pas un défaut - et cela se règle en dix minutes. Voir [Stratégie de récupération des passkeys](/docs/product-documentation/passkeys/passkey-recovery-strategy).

## Les passkeys peuvent-elles remplacer complètement les mots de passe ?

Pas encore, et pas d'un seul coup.

Deux obstacles. D'abord la couverture : la plupart de vos comptes ne proposent pas de passkeys. Ensuite, plus subtil, **la plupart des services qui en proposent conservent le mot de passe comme voie de récupération** - et souvent ne vous laissent pas le supprimer. Google, par exemple, propose de contourner le mot de passe plutôt que de le retirer. Voir [Remplacer les mots de passe par des passkeys sur Google](/docs/tutorials/google/replace-passwords-with-passkeys-on-google).

Cela compte plus qu'il n'y paraît. **Un compte est protégé par la voie d'accès la plus solide disponible, pas par celle que vous préférez utiliser.** Une passkey sur un compte dont le mot de passe fonctionne toujours, et dont la réinitialisation passe par une boîte mail non protégée, est gardée par cette boîte mail.

La conclusion pratique n'a rien de décourageant, c'est simplement un ordre d'opérations : sécurisez d'abord la voie de récupération, et tout ce qui en dépend s'améliore ensuite.

## Toutes les passkeys ne sont pas stockées de la même façon

Voici l'étape que la plupart des comparatifs escamotent, et elle change la réponse.

Décider d'utiliser des passkeys n'est qu'une moitié de décision. L'autre moitié est **où réside la clé privée** - et ce choix détermine quelle part de la protection décrite plus haut vous obtenez réellement. Il existe trois options, et elles ne sont pas équivalentes.

| | Intégrée au téléphone ou au portable | Synchronisée dans un coffre-fort cloud | Appareil matériel dédié |
|---|---|---|---|
| **Exemples** | Touch ID, Windows Hello | iCloud Keychain, Google Password Manager, gestionnaires de mots de passe | Seedkeeper PRO |
| **Résistance au phishing** | ✅ Totale | ✅ Totale | ✅ Totale |
| **Où la clé existe** | Sur ce seul appareil | Recopiée sur tous les appareils du compte | Sur une seule puce, jamais ailleurs |
| **Peut-elle être extraite** | ❌ Non, mais liée à la sécurité de l'appareil | ❌ Pas directement - mais le compte du coffre peut être compromis | ✅ Physiquement impossible, aucune voie d'export |
| **Fonctionne sur l'ordinateur d'autrui** | ❌ Non | ⚠️ Uniquement avec le coffre installé et déverrouillé | ✅ Oui - présentez ou connectez, rien ne reste |
| **Survit à la perte du téléphone** | ❌ Identifiants perdus | ✅ Restaurés depuis le cloud | ✅ L'appareil est indépendant de tout téléphone |
| **Qui d'autre est dans la chaîne** | Le fabricant de l'appareil | Le fournisseur du coffre et votre compte chez lui | Personne |
| **Maillon le plus faible** | La méthode de déverrouillage de l'appareil | Le compte cloud qui protège le coffre | Perdre l'appareil sans avoir enregistré de secours |

Les trois mettent le phishing en échec, et les trois constituent une amélioration sérieuse par rapport aux mots de passe. **La différence tient à ce dont dépendent vos identifiants.**

**Intégrée au téléphone ou au portable.** La clé réside dans le matériel sécurisé de cette machine et ne voyage pas. Excellent dans son périmètre - mais vous avez désormais des identifiants distincts sur chaque appareil, aucun utilisable sur un ordinateur professionnel ou emprunté, et tous perdus avec l'appareil.

**Synchronisée dans un coffre-fort cloud.** Pratique, et l'option vers laquelle la plupart des gens iront par défaut. La contrepartie est que vos passkeys existent à plusieurs endroits à la fois et que l'ensemble est gardé par un unique compte chez un fournisseur. Ce compte devient la cible d'un attaquant, et il est généralement protégé par... un mot de passe. La chaîne compte un maillon de plus qu'il n'y paraît.

**Matériel dédié.** La clé est générée à l'intérieur d'un [secure element](/docs/glossary/secure-element) et ne peut physiquement pas en sortir. Aucune copie cloud, aucun compte fournisseur, aucune fonction d'export, et rien qu'un logiciel malveillant présent sur votre ordinateur puisse atteindre. Elle voyage également : la même carte ou la même bague fonctionne sur votre téléphone, votre portable, et une machine qui n'est pas la vôtre.

### La place de la Seedkeeper PRO

La Seedkeeper PRO relève de la troisième option, dans une carte ou une bague que vous portez.

Ses clés privées sont générées sur un secure element certifié EAL6+ et n'en sortent jamais, sur du matériel [certifié FIDO2 Level 1](/docs/security-academy/passkeys/what-is-fido2#seedkeeper-pro--certifiée-fido2-level-1) par la FIDO Alliance. Elle contient jusqu'à 90 passkeys, en plus de vos codes TOTP et de vos mots de passe, sur un objet sans batterie, sans écran et sans connexion réseau propre. Rien de vos identifiants ne transite par Satochip, ni par qui que ce soit d'autre.

**À qui cela s'adresse réellement :**

- **Aux personnes dont les comptes représentent de l'argent ou de vrais ennuis** - avoirs en crypto, administration d'entreprise, données clients, tout ce dont la prise de contrôle n'est pas un simple désagrément.
- **À quiconque se connecte sur des machines qui ne lui appartiennent pas** - postes partagés, portable d'un client, ordinateur professionnel qui n'acceptera pas un coffre-fort cloud personnel.
- **Aux organisations qui doivent prouver quel matériel a été utilisé**, ou exclure entièrement les coffres-forts cloud personnels des comptes de l'entreprise - voir [Pour les organisations](#pour-les-organisations) ci-dessous.
- **À quiconque préfère n'avoir aucun fournisseur cloud dans la chaîne**, pour la raison qu'il jugera suffisante.

**À qui cela ne s'adresse probablement pas :** si vos comptes sont ordinaires, si vous ne vous connectez jamais que depuis votre propre téléphone, et si vous êtes à l'aise avec l'idée que votre fournisseur cloud détienne les clés, une passkey synchronisée est déjà une vraie amélioration par rapport à votre situation actuelle et ne coûte rien. C'est un choix raisonnable, et cette page ne prétendra pas le contraire.

Le résumé honnête est que les trois options se distinguent par ce que vous acceptez de dépendre. Une passkey synchronisée dépend d'une entreprise. Une passkey matérielle dépend d'un objet dans votre poche, et du fait que vous en ayez enregistré un second.

<BuySeedkeeperPro />

## Laquelle utiliser, et quand

L'objectif réaliste n'est pas le remplacement mais la superposition. Les deux cohabitent sur la même Seedkeeper PRO, et c'est pourquoi la transition n'impose pas de choisir.

**1. Commencez par votre messagerie.** Votre boîte mail est la voie de réinitialisation de tous vos autres comptes. Une passkey à cet endroit relève le plancher de tout le reste.

**2. Ensuite les comptes qui font mal.** Banque, stockage cloud, dépôts de code, tout ce qui contient de l'argent, des documents d'identité ou des données clients.

**3. Gardez l'OTP là où les passkeys ne sont pas proposées.** Un mot de passe assorti d'un [code à usage unique](/docs/security-academy/authentication/what-is-otp) est une nette amélioration par rapport au mot de passe seul, même s'il reste hameçonnable. Voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp) et [Qu'est-ce que la 2FA ?](/docs/security-academy/authentication/what-is-2fa).

**4. Générez tous les mots de passe restants.** Longs, uniques, produits par une machine, stockés sur le secure element plutôt que dans un navigateur. Voir [Qu'est-ce qu'un mot de passe solide ?](/docs/security-academy/password-security/what-is-a-strong-password).

**5. Enregistrez un second appareil** sur tout ce dont vous ne pouvez pas vous permettre de perdre l'accès, avant d'en avoir besoin.

## Pour les organisations

Le calcul change dans une entreprise, et généralement en faveur des passkeys.

Les attaques fondées sur les mots de passe - phishing, credential stuffing, identifiants réutilisés depuis des comptes personnels - représentent une large part des compromissions, et aucune formation du personnel ne comble de façon fiable une faille qui repose sur le jugement humain sous pression. Une authentification résistante au phishing retire purement et simplement ce jugement de l'équation.

Il existe aussi un argument opérationnel qui convainc généralement plus vite que l'argument sécurité : les réinitialisations de mot de passe représentent un coût permanent et mesurable pour tout service d'assistance, et les passkeys suppriment cette catégorie de tickets au lieu de la réduire.

### Les passkeys et NIS2

Pour les organisations entrant dans le champ de la directive européenne NIS2, l'authentification n'est pas seulement un choix de sécurité mais un choix réglementaire.

**L'article 21(2)(j)** de la directive (UE) 2022/2555 cite l'authentification multifacteur ou continue parmi les mesures de gestion des risques que les entités doivent adopter, assortie de la formule **« lorsque cela est approprié »**. La directive est délibérément neutre technologiquement : elle ne nomme ni FIDO2, ni les passkeys, ni aucun autre mécanisme.

Ce qui a évolué, c'est l'interprétation d'« approprié ». Les orientations des autorités de contrôle et les référentiels sectoriels distinguent de plus en plus l'authentification multifacteur **résistante au phishing** du reste, et la traitent comme le standard attendu pour les comptes à privilèges et les accès distants - les deux cas où un identifiant compromis fait le plus de dégâts. Un code à usage unique satisfait à la lettre d'une exigence de MFA ; il ne satisfait pas à la résistance au phishing, pour les raisons exposées dans [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#pourquoi-lotp-reste-hameçonnable).

Les passkeys FIDO2 constituent la façon mature et normalisée d'atteindre ce niveau d'exigence, et les identifiants liés au matériel vont plus loin en rendant l'authentificateur lui-même vérifiable par attestation - une organisation peut ainsi démontrer, et non simplement affirmer, quels appareils ont été utilisés.

:::note[Ceci est un éclairage, pas un avis juridique]
NIS2 est une directive : ce qui s'applique à vous relève de la transposition de votre pays et des obligations propres à votre secteur. En Belgique, le cadre est administré par le Centre pour la Cybersécurité Belgique. Considérez ce qui précède comme un point de départ pour une conversation avec la personne en charge de votre conformité, et non comme un substitut à celle-ci.
:::

Les déploiements peuvent imposer spécifiquement des identifiants liés au matériel, en rejetant les passkeys synchronisées dans des comptes cloud personnels, en n'autorisant que des identifiants d'appareils approuvés. Voir [Configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id), et [Pourquoi des clés matérielles pour votre entreprise](/docs/business/why-hardware-keys-for-your-business) pour l'argumentaire à porter en interne.

## Ce ne sont pas vraiment des rivaux

Présenter la question comme « passkey contre mot de passe » aide à comprendre les mécanismes et induit légèrement en erreur en pratique.

Personne ne bascule en une après-midi. Ce qui se produit réellement est progressif : des passkeys là où elles sont prises en charge, des mots de passe solides et générés partout ailleurs, des codes à usage unique comme terrain intermédiaire - le tout sur un seul appareil, sur le même secure element.

La Seedkeeper PRO est conçue pour cette réalité plutôt que pour une migration du tout ou rien : mots de passe et notes sécurisées d'un côté, passkeys et OTP de l'autre, jusqu'à 90 passkeys sur une puce certifiée [EAL6+ et FIDO2 Level 1](/docs/security-academy/passkeys/what-is-fido2#seedkeeper-pro--certifiée-fido2-level-1).

<BuySeedkeeperPro />

## FAQ

<details>
<summary>Pourquoi acheter un appareil matériel alors que mon téléphone propose des passkeys gratuitement ?</summary>

Parce qu'ils protègent des choses différentes. Une passkey de téléphone ou de cloud met le phishing en échec tout aussi bien, mais la clé est recopiée sur tous vos appareils et gardée par un compte chez un fournisseur - ce compte devient alors la cible. Une passkey matérielle existe sur une seule puce qui ne peut pas l'exporter, fonctionne sur des ordinateurs qui ne vous appartiennent pas, et ne place personne d'autre dans la chaîne. Que cela en vaille la peine dépend de ce que valent vos comptes. Voir [Toutes les passkeys ne sont pas stockées de la même façon](#toutes-les-passkeys-ne-sont-pas-stockées-de-la-même-façon) ci-dessus.

</details>

<details>
<summary>Les passkeys synchronisées sont-elles mauvaises ?</summary>

Non. Elles sont bien plus sûres que les mots de passe et c'est ce que la plupart des gens utiliseront. Elles concentrent simplement tous les identifiants dans un unique compte cloud, alors que les passkeys liées au matériel n'existent nulle part ailleurs que sur l'appareil. Choisissez selon ce que vous coûterait la perte du compte.

</details>

<details>
<summary>Quelle est la principale différence entre une passkey et un mot de passe ?</summary>

Un mot de passe est un secret partagé transmis au service à chaque connexion. Une passkey est une clé privée qui ne quitte jamais votre appareil - le service ne détient qu'une clé publique correspondante et vérifie une signature. Rien qui vaille la peine d'être volé n'est jamais envoyé ni stocké.

</details>

<details>
<summary>Les passkeys sont-elles réellement plus sûres que les mots de passe ?</summary>

Oui. Elles éliminent le phishing, le credential stuffing, la réutilisation et la force brute en tant que catégories d'attaque, au lieu de les rendre plus difficiles. Les risques restants - la perte d'appareil et les voies de récupération de compte - se traitent en enregistrant un second appareil.

</details>

<details>
<summary>Dois-je supprimer mon mot de passe une fois une passkey ajoutée ?</summary>

En général vous ne le pouvez pas, et souvent vous ne devriez pas. La plupart des services conservent le mot de passe comme voie de récupération et n'autorisent pas sa suppression. Lorsque la suppression est possible et qu'un second appareil est enregistré, la retirer ferme effectivement une voie d'attaque réelle.

</details>

<details>
<summary>Une passkey est-elle plus solide qu'un très long mot de passe aléatoire ?</summary>

Oui, mais pas pour la raison attendue. Un mot de passe généré de 20 caractères est déjà hors de portée de la force brute. L'avantage est qu'une passkey ne peut être ni hameçonnée, ni divulguée lors d'une fuite, ni réutilisée - ce qui correspond à la façon dont les mots de passe sont réellement compromis dans le monde réel.

</details>

<details>
<summary>Ai-je encore besoin d'un gestionnaire de mots de passe si j'utilise des passkeys ?</summary>

Oui, pour des années encore. La plupart de vos comptes continueront d'utiliser des mots de passe, qui doivent rester longs, uniques et générés. Voir [Les gestionnaires de mots de passe expliqués](/docs/security-academy/password-security/password-manager-explained).

</details>

<details>
<summary>Que se passe-t-il si un service qui stocke ma passkey se fait pirater ?</summary>

L'attaquant obtient une clé publique, qui ne permet de se connecter nulle part. C'est l'avantage structurel sur les mots de passe, où une base de hachés compromise mène directement à des comptes compromis.

</details>

<details>
<summary>NIS2 impose-t-elle les passkeys ?</summary>

Pas nommément. L'article 21(2)(j) exige une authentification multifacteur ou continue « lorsque cela est approprié », et la directive est neutre technologiquement. Ce que les orientations attendent de plus en plus est une MFA résistante au phishing sur les accès à privilèges et distants, ce que les passkeys FIDO2 sont la façon standard de fournir. Voir [Les passkeys et NIS2](#les-passkeys-et-nis2) ci-dessus.

</details>

<details>
<summary>Puis-je utiliser une passkey sur un ordinateur qui n'est pas le mien ?</summary>

Oui, avec un authentificateur itinérant comme la Seedkeeper PRO - présentez-la ou connectez-la, saisissez votre PIN, et rien ne reste sur cette machine. Une passkey stockée dans le matériel intégré d'un téléphone ou d'un portable ne peut pas voyager ainsi.

</details>

<details>
<summary>Que faire si je perds l'appareil qui contient mes passkeys ?</summary>

Si un second appareil est enregistré, vous vous connectez avec lui et vous retirez celui qui est perdu. Sinon, vous vous rabattez sur la procédure de récupération du service. Les dix minutes passées à enregistrer un appareil de secours font toute la différence. Voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy).

</details>

## Articles liés

- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Les passkeys sont-elles plus sûres ?](/docs/security-academy/passkeys/are-passkeys-safer)
- [Qu'est-ce qu'un mot de passe ?](/docs/security-academy/password-security/what-is-a-password)
- [Créer votre première passkey](/docs/product-documentation/passkeys/creating-your-first-passkey)
- [Qu'est-ce que la MFA ?](/docs/security-academy/authentication/what-is-mfa)
