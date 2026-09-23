---
title: "Qu'est-ce que FIDO2 ?"
description: "FIDO2 est le standard ouvert derrière chaque passkey, bâti sur WebAuthn et CTAP2. Ce qu'il couvre, et pourquoi la Seedkeeper PRO est certifiée FIDO2 Level 1."
keywords: [qu'est-ce que FIDO2, FIDO2 expliqué, FIDO Alliance, CTAP2, WebAuthn, certification FIDO2, FIDO2 Level 1, standard clé de sécurité]
sidebar_position: 3
sidebar_label: "Qu'est-ce que FIDO2 ?"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "FIDO2 est-il la même chose qu'une passkey ?", a: "Non. FIDO2 est le standard ; une passkey est un identifiant créé conformément à celui-ci. À peu près la relation qu'entretiennent une langue et une phrase écrite dans cette langue."},
  {q: "Ai-je besoin de connaître tout cela pour utiliser une passkey ?", a: "Pas du tout. Cet article explique ce qui se trouve dessous ; au quotidien, vous présentez votre appareil et vous saisissez un PIN."},
  {q: "U2F est-il obsolète ?", a: "Pas obsolète, mais supplanté. Les clés U2F fonctionnent toujours comme second facteur sur les services qui les prennent en charge, et les authentificateurs FIDO2 restent rétrocompatibles. Ce qu'U2F ne peut pas faire, c'est remplacer purement et simplement le mot de passe."},
  {q: "La Seedkeeper PRO est-elle certifiée FIDO2 ?", a: "Oui. La Seedkeeper PRO est certifiée FIDO2 Level 1 par la FIDO Alliance, sous le numéro de certificat FA001202600016, vérifiable dans l'annuaire public de certification. Son secure element porte en outre une certification Common Criteria EAL6+."},
  {q: "Une certification Level 1 signifie-t-elle une sécurité moindre qu'un Level 2 ?", a: "Elle signifie un périmètre différent, pas un produit plus faible. Le Level 1 couvre la justesse de l'implémentation FIDO face aux attaques logicielles ; les niveaux supérieurs ajoutent des exigences de résistance aux attaques matérielles, ce que traite dans le cas de la Seedkeeper PRO la certification EAL6+ du secure element."},
  {q: "Une passkey créée aujourd'hui fonctionnera-t-elle encore dans dix ans ?", a: "C'est précisément à cela que sert la normalisation. La spécification est versionnée et rétrocompatible, et elle est maintenue par un consortium plutôt que par un éditeur unique susceptible de l'abandonner."},
]} />

<p class="doc-subtitle">Le standard ouvert qui rend les passkeys possibles</p>

<div class="tldr">

FIDO2 est le standard ouvert sur lequel repose chaque [passkey](/docs/glossary/passkey). Il associe deux spécifications : WebAuthn, qui permet à un site web de demander une signature à votre navigateur, et CTAP2, qui permet à votre navigateur de dialoguer avec un authentificateur physique. Il est publié par la FIDO Alliance et le W3C, et n'appartient à aucune entreprise - c'est pourquoi une Seedkeeper PRO fonctionne avec Google, Microsoft et des milliers d'autres services sans qu'aucun d'eux ne soit partenaire.

</div>

## Ce qu'est réellement FIDO2

FIDO2 n'est ni un produit, ni une entreprise, ni un logiciel. C'est une spécification - un document public décrivant comment l'authentification devrait fonctionner, que chacun est libre d'implémenter.

Il existe parce que l'industrie est parvenue à la même conclusion à peu près au même moment : les secrets partagés ne passent pas l'échelle en toute sécurité. Si chaque service avait inventé sa propre solution, on aurait obtenu un enchevêtrement de connexions incompatibles. Les principaux éditeurs de navigateurs, fabricants de systèmes d'exploitation et constructeurs de matériel se sont donc entendus sur un langage commun.

Résultat : l'authentification est devenue interopérable. Un appareil conforme au standard fonctionne avec un service conforme au standard, sans que ni l'un ni l'autre n'ait besoin de connaître l'existence de l'autre.

## Qui le publie

Deux organismes se partagent le travail, un détail qui mérite d'être connu car il explique la scission au sein même du standard.

- **La FIDO Alliance** est un consortium industriel fondé en 2013 pour résoudre exactement ce problème. Parmi ses membres figurent Apple, Google, Microsoft, Amazon, Visa, Mastercard et des centaines d'autres. Elle publie CTAP et gère le programme de certification.
- **Le W3C**, l'organisme qui normalise le web lui-même, publie WebAuthn. Celui-ci est devenu une Recommandation officielle du W3C en 2019, ce qui a rendu la prise en charge par les navigateurs universelle plutôt qu'optionnelle.

Aucun des deux ne vend quoi que ce soit. FIDO2 n'implique ni redevance ni gardien, et c'est tout l'intérêt.

## Les deux moitiés

FIDO2 couvre l'ensemble du trajet, du site web au matériel, réparti entre deux spécifications qui se rejoignent dans le navigateur.

**WebAuthn** régit la conversation entre le site web et le navigateur. C'est l'API qu'un site appelle pour dire « crée-moi un identifiant » ou « prouve que cet utilisateur est bien celui qu'il prétend être ». Elle porte également la vérification de domaine qui rend le phishing impossible. Voir [Qu'est-ce que WebAuthn ?](/docs/security-academy/passkeys/what-is-webauthn).

**CTAP2** - le Client to Authenticator Protocol - régit la conversation entre le navigateur et votre authentificateur, que la liaison passe par NFC, USB ou Bluetooth. C'est ce qui permet à votre Seedkeeper PRO de répondre à une simple présentation, quel que soit le téléphone ou l'ordinateur qu'elle touche.

En résumé : WebAuthn est la partie que voit le site web, CTAP2 la partie que voit votre appareil, et ensemble elles forment une chaîne ininterrompue. [Comment fonctionnent les passkeys](/docs/security-academy/passkeys/how-passkeys-work) détaille ce qui y circule.

## D'où il vient

FIDO2 n'est pas apparu de nulle part. C'est la deuxième génération d'un standard déjà déployé à grande échelle.

La première génération, **U2F**, est arrivée en 2014 uniquement comme [second facteur](/docs/security-academy/authentication/what-is-2fa) : vous saisissiez toujours un mot de passe, puis vous présentiez une clé pour confirmer. Cela fonctionnait bien, c'est toujours pris en charge, mais le mot de passe n'a jamais disparu.

FIDO2 est arrivé en 2018 avec la pièce manquante : la capacité, pour l'authentificateur, de stocker lui-même l'identité de l'utilisateur, et non plus seulement une confirmation. Cet unique ajout a transformé un second facteur en remplacement complet du mot de passe, et c'est ce que l'industrie a ensuite choisi de commercialiser sous le nom plus avenant de « passkey ».

Ces noms désignent des couches, pas des concurrents : une passkey est l'identifiant, FIDO2 est le standard qu'elle suit.

## Ce que signifie la certification

N'importe qui peut prétendre implémenter FIDO2. La certification est ce qui rend cette affirmation vérifiable.

La FIDO Alliance conduit un programme de tests à plusieurs niveaux d'assurance. Le **Level 1** constitue le socle : l'implémentation est testée pour son interopérabilité et pour sa résistance aux attaques logicielles à grande échelle - celles qui pourraient être menées à distance contre de nombreux utilisateurs à la fois. Les niveaux supérieurs ajoutent des exigences de résistance aux attaques physiques sur le matériel lui-même.

### Seedkeeper PRO : certifiée FIDO2 Level 1

La Seedkeeper PRO est **certifiée FIDO2 Level 1**, ce qui signifie que son implémentation a été testée de façon indépendante plutôt qu'auto-déclarée. Séparément, la puce sur laquelle elle repose porte une certification Common Criteria **EAL6+**, qui évalue le matériel du secure element lui-même. Ce sont deux choses différentes, mesurées par des organismes différents, et il vaut la peine de les lire comme complémentaires : l'une dit que le protocole est correctement implémenté, l'autre que le matériel protégeant les clés est difficile à attaquer physiquement.

<img src="/img/badges/fido-label-FA001202600016-FIDO2-L1.svg" alt="Badge FIDO Certified FIDO2 Level 1 de la Seedkeeper PRO, certificat FA001202600016" width="300" style={{maxWidth: '100%', height: 'auto', display: 'block', margin: '2rem 0'}} />

L'identifiant figurant sur le badge, `FA001202600016`, est le numéro de certificat. Il peut être consulté dans [l'annuaire public de certification de la FIDO Alliance](https://app.fido.cyber-pass.org/certificates/search), et c'est là toute la valeur d'une certification : n'importe qui peut vérifier l'affirmation sans avoir à nous croire sur parole.

Si vous souhaitez le profil technique complet plutôt que la seule certification - algorithmes pris en charge, extensions, limites de stockage, transports - voir [Device Capabilities](/docs/developers/device-capabilities).

## Pourquoi un standard ouvert change tout ici

Il est facile de considérer « standard ouvert » comme une case à cocher. En authentification, cela a des conséquences concrètes.

- **Aucune dépendance à un fournisseur.** Vos identifiants ne sont pas liés à l'écosystème d'un éditeur. Changer de téléphone, de navigateur ou de système d'exploitation ne vous en prive pas.
- **Aucune autorisation requise.** Un service n'a pas besoin de signer un accord avec Satochip pour qu'une Seedkeeper PRO y fonctionne. S'il prend en charge FIDO2, cela fonctionne.
- **Un examen public.** La spécification est publiée, relue et attaquée par des chercheurs du monde entier. Une sécurité qui repose sur le fait que personne ne regarde n'est pas une sécurité.
- **De la durabilité.** Un standard soutenu par toute une industrie survit à la feuille de route de n'importe quelle entreprise.

## FAQ

<details>
<summary>FIDO2 est-il la même chose qu'une passkey ?</summary>

Non. FIDO2 est le standard ; une passkey est un identifiant créé conformément à celui-ci. À peu près la relation qu'entretiennent une langue et une phrase écrite dans cette langue.

</details>

<details>
<summary>Ai-je besoin de connaître tout cela pour utiliser une passkey ?</summary>

Pas du tout. Cet article explique ce qui se trouve dessous ; au quotidien, vous présentez votre appareil et vous saisissez un PIN. Voir [Créer votre première passkey](/docs/product-documentation/passkeys/creating-your-first-passkey).

</details>

<details>
<summary>U2F est-il obsolète ?</summary>

Pas obsolète, mais supplanté. Les clés U2F fonctionnent toujours comme second facteur sur les services qui les prennent en charge, et les authentificateurs FIDO2 restent rétrocompatibles. Ce qu'U2F ne peut pas faire, c'est remplacer purement et simplement le mot de passe.

</details>

<details>
<summary>La Seedkeeper PRO est-elle certifiée FIDO2 ?</summary>

Oui. La Seedkeeper PRO est certifiée FIDO2 Level 1 par la FIDO Alliance, sous le numéro de certificat `FA001202600016`, vérifiable dans [l'annuaire public de certification](https://app.fido.cyber-pass.org/certificates/search). Son secure element porte en outre une certification Common Criteria EAL6+. Voir [Seedkeeper PRO : certifiée FIDO2 Level 1](#seedkeeper-pro--certifiée-fido2-level-1) ci-dessus.

</details>

<details>
<summary>Une certification Level 1 signifie-t-elle une sécurité moindre qu'un Level 2 ?</summary>

Elle signifie un périmètre différent, pas un produit plus faible. Le Level 1 couvre la justesse de l'implémentation FIDO face aux attaques logicielles ; les niveaux supérieurs ajoutent des exigences de résistance aux attaques matérielles, ce que traite dans le cas de la Seedkeeper PRO la certification EAL6+ du secure element. Voir [Seedkeeper PRO : certifiée FIDO2 Level 1](#seedkeeper-pro--certifiée-fido2-level-1) ci-dessus.

</details>

<details>
<summary>Une passkey créée aujourd'hui fonctionnera-t-elle encore dans dix ans ?</summary>

C'est précisément à cela que sert la normalisation. La spécification est versionnée et rétrocompatible, et elle est maintenue par un consortium plutôt que par un éditeur unique susceptible de l'abandonner.

</details>

## Articles liés

- [Qu'est-ce qu'une passkey ?](/docs/security-academy/passkeys/what-is-a-passkey)
- [Qu'est-ce que WebAuthn ?](/docs/security-academy/passkeys/what-is-webauthn)
- [Comment fonctionnent les passkeys](/docs/security-academy/passkeys/how-passkeys-work)
- [Configurer les passkeys dans Microsoft Entra ID](/docs/tutorials/microsoft/configure-passkeys-in-microsoft-entra-id)
- [Qu'est-ce que la MFA ?](/docs/security-academy/authentication/what-is-mfa)
- [Device Capabilities](/docs/developers/device-capabilities)
