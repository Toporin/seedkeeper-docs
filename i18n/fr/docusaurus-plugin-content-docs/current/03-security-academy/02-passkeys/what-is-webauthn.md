---
title: "Qu'est-ce que WebAuthn ?"
description: "WebAuthn est l'API navigateur qui permet à un site de demander une signature cryptographique plutôt qu'un mot de passe. Son rôle dans chaque connexion."
keywords: [qu'est-ce que WebAuthn, WebAuthn expliqué, navigator.credentials, W3C WebAuthn, prise en charge navigateur, authentificateur itinérant, authentificateur de plateforme]
sidebar_position: 4
sidebar_label: "Qu'est-ce que WebAuthn ?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "WebAuthn est-il la même chose qu'une passkey ?", a: "Non. WebAuthn est l'API qu'utilise un site web ; une passkey est l'identifiant que cette API crée puis vérifie. Un site prend en charge WebAuthn, un utilisateur possède une passkey."},
  {q: "Dois-je installer quelque chose pour utiliser WebAuthn ?", a: "Non. C'est intégré à tous les navigateurs modernes."},
  {q: "Un site me demande d'installer quelque chose pour utiliser ma clé de sécurité. Est-ce normal ?", a: "Non. C'est l'un des signaux d'arnaque les plus nets que vous rencontrerez. WebAuthn est natif dans votre navigateur, et un authentificateur matériel n'a besoin d'aucun logiciel propre."},
  {q: "Un site web peut-il voir mes autres passkeys ?", a: "Non. Un site ne peut interroger que les identifiants qu'il a lui-même enregistrés : il ne peut donc pas découvrir quels autres services vous utilisez."},
  {q: "WebAuthn fonctionne-t-il sur mobile ?", a: "Oui, sur iOS comme sur Android, y compris avec un appareil NFC comme la Seedkeeper PRO présenté au dos du téléphone. Certains navigateurs anciens restreignent les transports disponibles, le comportement peut donc varier selon la combinaison."},
  {q: "Pourquoi un site demande-t-il parfois un PIN et parfois non ?", a: "Le site peut exiger une vérification de l'utilisateur, c'est-à-dire la preuve qu'il s'agit bien de vous et pas seulement de quelqu'un qui tient l'appareil. Votre authentificateur y répond par un PIN. Quand seule la présence de l'utilisateur est requise, une simple présentation suffit."},
]} />

<p class="doc-subtitle">La moitié navigateur du standard</p>

<div class="tldr">

WebAuthn est le standard web qui permet à un site de demander à votre navigateur une signature cryptographique plutôt qu'un mot de passe. Il définit deux opérations - créer un identifiant, et s'en servir - et il confie au navigateur la responsabilité de vérifier que le site qui demande est bien celui auquel appartient la [passkey](/docs/glossary/passkey). Il est intégré à tous les navigateurs modernes : il n'y a donc rien à installer.

</div>

## La version courte

WebAuthn - abréviation de Web Authentication - est une API. C'est-à-dire un ensemble défini d'instructions qu'un site web peut appeler, et auxquelles le navigateur sait répondre.

Il n'y en a que deux :

- `navigator.credentials.create()` - « crée-moi un nouvel identifiant pour ce compte »
- `navigator.credentials.get()` - « prouve que cet utilisateur détient l'identifiant que tu as créé précédemment »

C'est toute la surface du standard du point de vue d'un site web. Tout le reste - quel authentificateur répond, comment il vous vérifie, où la clé est stockée - échappe délibérément au contrôle et à la vue du site.

Si c'est vous qui construisez ce site, [WebAuthn Quickstart](/docs/developers/webauthn-quickstart) détaille les paramètres qui comptent et les réglages qui excluent silencieusement les clés matérielles.

## Pourquoi le navigateur se place au milieu

Le site web ne parle jamais à votre Seedkeeper PRO. Il parle à votre navigateur, et le navigateur parle à l'appareil. Cette indirection n'est pas un hasard technique, c'est le modèle de sécurité.

Le navigateur est le seul acteur de la chaîne à savoir avec certitude quel site est réellement affiché. C'est lui qui a résolu le domaine, validé le certificat TLS et dessiné la barre d'adresse. C'est donc l'endroit approprié pour appliquer la règle qui compte : **un identifiant ne peut être utilisé que sur l'origine pour laquelle il a été créé**.

Quand une page appelle `get()`, le navigateur compare l'origine demandeuse au domaine enregistré de l'identifiant avant de transmettre quoi que ce soit. Pas de correspondance, pas de requête. Votre appareil n'est même jamais sollicité, et c'est pourquoi il n'y a aucune alerte à mal interpréter ni aucune décision que vous puissiez prendre de travers.

C'est la même vérification que celle décrite dans [Comment fonctionnent les passkeys](/docs/security-academy/passkeys/how-passkeys-work#la-vérification-de-domaine-cest-tout-le-secret), vue du côté du navigateur plutôt que du protocole.

## Ce que le site apprend, et ce qu'il n'apprend pas

WebAuthn est conçu pour que le site obtienne une preuve sans obtenir d'information.

Un site qui mène une authentification à bien apprend trois choses : qu'un identifiant qu'il avait enregistré a été utilisé, que l'utilisateur a été vérifié par l'authentificateur, et que tout l'échange s'est déroulé sur son propre domaine. Il n'apprend ni votre PIN, ni votre empreinte, ni votre clé privée, ni quoi que ce soit qui lui permettrait de se faire passer pour vous ailleurs.

Il ne peut pas non plus énumérer vos autres identifiants. Un site ne peut interroger que les identifiants qu'il a lui-même enregistrés : il n'existe donc aucun moyen de sonder votre navigateur pour obtenir la liste des services que vous utilisez. À comparer avec un mot de passe, que le site reçoit intégralement et dont il faut ensuite espérer qu'il le traite correctement.

## Deux familles d'authentificateurs

WebAuthn se moque délibérément du type d'appareil qui répond, mais il distingue deux familles.

- **Les authentificateurs de plateforme** sont intégrés à l'appareil que vous utilisez : Windows Hello, Touch ID, le matériel sécurisé d'un téléphone Android. Pratiques, toujours présents, et liés à cette seule machine.
- **Les authentificateurs itinérants** sont des appareils distincts qui se connectent en USB, NFC ou Bluetooth, et qui peuvent passer d'un ordinateur à un téléphone. La Seedkeeper PRO en fait partie.

La différence pratique tient à la portabilité et à l'indépendance. Un authentificateur de plateforme lie votre identité à un appareil sur lequel vous naviguez aussi, relevez vos mails et installez des logiciels. Un authentificateur itinérant conserve l'identifiant sur du matériel qui ne fait rien d'autre, et vous permet de l'emporter sur n'importe quelle machine - ce qui le rend aussi utilisable sur un poste partagé ou professionnel.

## Rien à installer

L'une des réussites les plus discrètes de WebAuthn est de ne nécessiter ni plugin, ni extension, ni pilote.

Son prédécesseur, U2F, exigeait à l'origine des extensions de navigateur, ce qui le limitait aux utilisateurs prêts à en installer une. WebAuthn est devenu une Recommandation du W3C en 2019 et a été livré nativement dans Chrome, Firefox, Safari et Edge. Il est aujourd'hui présent sur pratiquement tous les navigateurs actuels, sur ordinateur comme sur mobile.

Cela compte plus qu'il n'y paraît. Un mécanisme de sécurité ne protège que les personnes qui l'utilisent réellement, et tout ce qui exige une installation en perd la plupart dès la première étape.

:::warning[N'installez jamais rien pour utiliser une passkey]
Aucun site légitime ne vous demandera jamais d'installer un plugin, une extension ou un pilote pour vous connecter avec votre Seedkeeper PRO. WebAuthn est intégré à votre navigateur, et un authentificateur matériel n'a besoin de rien d'autre.

Si une page vous indique qu'un téléchargement est nécessaire pour utiliser votre clé de sécurité, considérez cela comme une attaque. Les faux « assistants d'authentification » sont un vecteur connu de diffusion de logiciels malveillants, et la demande elle-même est le signal d'alarme - quelle que soit l'apparence professionnelle de la page.

La seule exception que vous pourrez rencontrer : les extensions de gestionnaires de mots de passe qui stockent leurs propres passkeys synchronisées. Ce sont des logiciels légitimes que vous avez choisi d'installer vous-même, et ils ne sont jamais un prérequis pour utiliser un appareil physique.
:::

## Sa place dans le standard

WebAuthn couvre le trajet du site web au navigateur. Le trajet du navigateur à l'authentificateur relève d'une spécification distincte, **CTAP2**. Ni l'une ni l'autre ne sert à grand-chose seule, et ensemble elles forment [FIDO2](/docs/glossary/fido2).

La répartition des rôles est nette : WebAuthn est publié par le W3C et parle le langage du web ; CTAP2 est publié par la FIDO Alliance et parle le langage du matériel. Voir [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2) pour la façon dont les deux organismes se partagent le travail.

## FAQ

<details>
<summary>WebAuthn est-il la même chose qu'une passkey ?</summary>

Non. WebAuthn est l'API qu'utilise un site web ; une passkey est l'identifiant que cette API crée puis vérifie. Un site « prend en charge WebAuthn », un utilisateur « possède une passkey ».

</details>

<details>
<summary>Dois-je installer quelque chose pour utiliser WebAuthn ?</summary>

Non. C'est intégré à tous les navigateurs modernes. Voir [Rien à installer](#rien-à-installer) ci-dessus.

</details>

<details>
<summary>Un site me demande d'installer quelque chose pour utiliser ma clé de sécurité. Est-ce normal ?</summary>

Non. C'est l'un des signaux d'arnaque les plus nets que vous rencontrerez. WebAuthn est natif dans votre navigateur, et un authentificateur matériel n'a besoin d'aucun logiciel propre. Voir [Rien à installer](#rien-à-installer) ci-dessus.

</details>

<details>
<summary>Un site web peut-il voir mes autres passkeys ?</summary>

Non. Un site ne peut interroger que les identifiants qu'il a lui-même enregistrés : il ne peut donc pas découvrir quels autres services vous utilisez. Voir [Ce que le site apprend, et ce qu'il n'apprend pas](#ce-que-le-site-apprend-et-ce-quil-napprend-pas) ci-dessus.

</details>

<details>
<summary>WebAuthn fonctionne-t-il sur mobile ?</summary>

Oui, sur iOS comme sur Android, y compris avec un appareil NFC comme la Seedkeeper PRO présenté au dos du téléphone. Certains navigateurs anciens restreignent les transports disponibles, le comportement peut donc varier selon la combinaison.

</details>

<details>
<summary>Pourquoi un site demande-t-il parfois un PIN et parfois non ?</summary>

Le site peut exiger une **vérification de l'utilisateur**, c'est-à-dire la preuve qu'il s'agit bien de vous et pas seulement de quelqu'un qui tient l'appareil. Votre authentificateur y répond par un PIN. Quand seule la **présence de l'utilisateur** est requise, une simple présentation suffit. Cette distinction recoupe les catégories décrites dans [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained).

</details>

## Articles liés

- [Qu'est-ce que FIDO2 ?](/docs/security-academy/passkeys/what-is-fido2)
- [Comment fonctionnent les passkeys](/docs/security-academy/passkeys/how-passkeys-work)
- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Utiliser vos passkeys sur plusieurs appareils](/docs/product-documentation/passkeys/using-passkeys-across-devices)
- [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained)
- [WebAuthn Quickstart](/docs/developers/webauthn-quickstart)
