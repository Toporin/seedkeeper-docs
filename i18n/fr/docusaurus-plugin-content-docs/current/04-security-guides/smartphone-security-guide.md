---
title: "Guide de sécurité du smartphone"
description: "Votre téléphone contient votre messagerie, vos codes et votre identité. Comment le verrouiller, ce qui le menace vraiment, et les habitudes qui comptent."
keywords: [sécurité smartphone, guide sécurité téléphone, sécurité iPhone, sécurité Android, téléphone perdu, 2FA mobile, SIM swapping]
sidebar_position: 3
sidebar_label: "Guide de sécurité du smartphone"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Mon smartphone est-il vraiment sécurisé ?", a: "iOS et Android modernes sont bien durcis. Le risque tient à la concentration plutôt qu'à une faiblesse : un appareil unique contenant votre boîte mail, vos codes à usage unique et vos moyens de paiement donne beaucoup à un attaquant en une seule compromission."},
  {q: "Un PIN à six chiffres vaut-il mieux qu'un PIN à quatre ?", a: "Oui, nettement. Quatre chiffres donnent dix mille combinaisons, ce qui protège peu face à quelqu'un qui tient l'appareil. Six chiffres en donnent cent fois plus, pour un confort quasi inchangé."},
  {q: "Dois-je utiliser mon téléphone pour l'authentification à deux facteurs ?", a: "C'est bien mieux que pas de second facteur du tout. Mais si le téléphone contient aussi votre gestionnaire de mots de passe et votre boîte mail, une seule compromission atteint tout, ce qui explique que certains conservent le second facteur sur un matériel séparé."},
  {q: "Le Wi-Fi public est-il sûr ?", a: "Globalement, oui, le trafic étant désormais chiffré par défaut. Le risque restant est un faux portail captif imitant la page de connexion du réseau : considérez comme suspect tout réseau qui réclame des identifiants de compte."},
  {q: "Que faire en premier si mon téléphone est volé ?", a: "Verrouillez-le à distance via Localiser mon iPhone ou Localiser mon appareil, puis changez le mot de passe de votre messagerie depuis un autre appareil. Votre boîte mail est la voie qu'un attaquant emprunterait pour atteindre tous vos autres comptes."},
]} />

<p class="doc-subtitle">L'appareil qui contient tout le reste</p>

<div class="tldr">

Votre téléphone est l'endroit où se rejoignent votre messagerie, vos codes à usage unique et souvent vos moyens de paiement. Cette concentration est pratique, et elle signifie qu'un seul appareil compromis ouvre beaucoup de portes. Un verrouillage d'écran solide, un numéro de téléphone protégé et une saine méfiance envers ce que vous installez couvrent l'essentiel du risque réel.

</div>

## Pourquoi le téléphone est le point faible

Non parce que les téléphones sont peu sûrs - iOS et Android modernes sont réellement durcis. Mais à cause de ce qui s'y accumule.

Votre boîte mail, qui réinitialise tous vos autres comptes. Votre application d'authentification, qui produit les codes protégeant ces comptes. Vos applications bancaires. Vos photos, qui pour beaucoup de gens contiennent des documents et, bien trop souvent, une seed phrase.

Un attaquant qui atteint tout cela d'un coup obtient considérablement plus que ne lui donnerait un mot de passe isolé.

## Verrouillez l'appareil correctement

**Utilisez un PIN à six chiffres au minimum**, pas quatre, et pas un schéma. Quatre chiffres représentent dix mille combinaisons, ce qui ne vaut rien face à quelqu'un qui tient le téléphone. Les schémas sont pires : ils laissent des traces et se lisent facilement par-dessus l'épaule.

**Activez la biométrie** pour le confort quotidien, en gardant le PIN comme repli. Le visage et l'empreinte déverrouillent l'identifiant stocké sur l'appareil - ils ne sont envoyés nulle part, c'est le même modèle que celui des passkeys. Voir [Les facteurs d'authentification expliqués](/docs/security-academy/authentication/authentication-factors-explained).

**Réglez un verrouillage automatique court**, de trente secondes à une minute. L'intervalle entre le moment où vous posez le téléphone et celui où il se verrouille est exactement celui où un opportuniste s'en saisit.

**Masquez le contenu des notifications sur l'écran verrouillé.** Les codes à usage unique y apparaissent couramment, lisibles par quiconque tient le téléphone sans même le déverrouiller.

## Protégez votre numéro de téléphone

C'est la partie que la plupart des guides sautent, et elle met en échec des mesures de sécurité que vous avez soigneusement mises en place.

Le **SIM swapping** consiste, pour un attaquant, à convaincre votre opérateur mobile de transférer votre numéro vers une SIM qu'il contrôle. Aucun logiciel malveillant, aucun accès à votre appareil - juste un appel convaincant à un conseiller. Chaque code SMS lui parvient ensuite.

Deux mesures aident :

- **Demandez à votre opérateur un code de portabilité ou un verrouillage de compte.** La plupart en proposent un ; presque personne ne l'active.
- **Abandonnez les codes SMS** partout où une alternative existe. Voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## Soyez attentif aux applications

**N'installez que depuis les boutiques officielles.** Les applications installées hors boutique sur Android et les profils de configuration sur iOS sont la principale voie d'entrée des logiciels malveillants sur un téléphone.

**Revoyez les autorisations de temps à autre.** Une application lampe torche qui réclame vos contacts vous renseigne sur son modèle économique. Les deux plateformes vous permettent de voir quelles applications ont accédé à quoi, et révoquer un accès casse rarement quelque chose que vous utilisez réellement.

**Supprimez ce dont vous ne vous servez pas.** Chaque application installée est du code auquel vous faites confiance, et les applications abandonnées cessent de recevoir des correctifs de sécurité tout en conservant leurs autorisations.

## Mettez à jour, et laissez faire

Activez les mises à jour automatiques du système et des applications, puis cessez d'y penser. L'écart entre la publication d'un correctif et son installation est la fenêtre dans laquelle travaillent les attaquants, et la refermer ne vous coûte rien.

## Wi-Fi public et recharge

Le **Wi-Fi** est moins dangereux qu'autrefois, la majorité du trafic étant chiffrée. L'astuce qui subsiste est le faux portail captif - une page imitant l'écran de connexion du réseau pour capturer des identifiants. Considérez comme suspect tout réseau qui vous demande de vous connecter avec un compte.

Les **bornes de recharge USB publiques** peuvent, en principe, transporter des données autant que du courant. La réponse pratique est une prise murale et votre propre chargeur, ou un câble qui ne transporte que l'alimentation.

## Où réside votre second facteur

Si votre téléphone contient à la fois votre gestionnaire de mots de passe et votre application d'authentification, un téléphone compromis ou perdu emporte les deux d'un coup. Deux façons de rompre cette concentration :

**Sortez le second facteur du téléphone.** Un authentificateur matériel génère vos codes sur un objet séparé, sans réseau, sans système d'exploitation et sans rien à installer - voir [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account).

**Utilisez les passkeys là où elles sont proposées.** Une passkey matérielle fonctionne sur n'importe quel téléphone que vous approchez d'elle : remplacer un combiné ne touche donc pas du tout à vos identifiants - voir [Utiliser vos passkeys sur plusieurs appareils](/docs/product-documentation/passkeys/using-passkeys-across-devices).

## Avant de le perdre

Mettez cela en place maintenant, car après il sera trop tard.

- **Activez Localiser mon iPhone ou Localiser mon appareil.** Les deux permettent le verrouillage et l'effacement à distance.
- **Assurez-vous que vos codes de récupération sont ailleurs.** S'ils n'existent que sur le téléphone, un téléphone perdu vous verrouille hors des comptes qu'ils protégeaient.
- **Gardez une sauvegarde**, pour que remplacer l'appareil soit un désagrément plutôt qu'une perte.

Si le téléphone disparaît : verrouillez-le à distance, puis changez le mot de passe de votre compte e-mail depuis un autre appareil. Cet ordre compte - la boîte mail est ce qu'un attaquant utiliserait pour atteindre tout le reste. La même séquence s'applique à une clé de sécurité perdue - voir [Appareil perdu ou volé](/docs/troubleshooting/lost-device).

## FAQ

<details>
<summary>Mon smartphone est-il vraiment sécurisé ?</summary>

iOS et Android modernes sont bien durcis. Le risque tient à la concentration plutôt qu'à une faiblesse : un appareil unique contenant votre boîte mail, vos codes à usage unique et vos moyens de paiement donne beaucoup à un attaquant en une seule compromission.

</details>

<details>
<summary>Un PIN à six chiffres vaut-il mieux qu'un PIN à quatre ?</summary>

Oui, nettement. Quatre chiffres donnent dix mille combinaisons, ce qui protège peu face à quelqu'un qui tient l'appareil. Six chiffres en donnent cent fois plus, pour un confort quasi inchangé.

</details>

<details>
<summary>Dois-je utiliser mon téléphone pour l'authentification à deux facteurs ?</summary>

C'est bien mieux que pas de second facteur du tout. Mais si le téléphone contient aussi votre gestionnaire de mots de passe et votre boîte mail, une seule compromission atteint tout - ce qui explique que certains conservent le second facteur sur un matériel séparé.

</details>

<details>
<summary>Le Wi-Fi public est-il sûr ?</summary>

Globalement, oui, le trafic étant désormais chiffré par défaut. Le risque restant est un faux portail captif imitant la page de connexion du réseau : considérez comme suspect tout réseau qui réclame des identifiants de compte.

</details>

<details>
<summary>Que faire en premier si mon téléphone est volé ?</summary>

Verrouillez-le à distance via Localiser mon iPhone ou Localiser mon appareil, puis changez le mot de passe de votre messagerie depuis un autre appareil. Votre boîte mail est la voie qu'un attaquant emprunterait pour atteindre tous vos autres comptes.

</details>

## Articles liés

- [Liste de contrôle sécurité pour débutants](/docs/security-guides/security-checklist-for-beginners)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Guide de sécurité en voyage](/docs/security-guides/travel-security-guide)
- [Utiliser vos passkeys sur plusieurs appareils](/docs/product-documentation/passkeys/using-passkeys-across-devices)
- [Les attaques courantes contre les mots de passe](/docs/security-academy/password-security/how-passwords-are-cracked)
