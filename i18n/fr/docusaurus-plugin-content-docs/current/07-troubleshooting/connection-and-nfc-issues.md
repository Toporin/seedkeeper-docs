---
title: "Problèmes de connexion et NFC"
description: "L'appareil n'est pas détecté, le scan échoue en cours de route, ou le lecteur ne voit rien. Les causes courantes, dans l'ordre où il vaut la peine de vérifier."
keywords: [Seedkeeper non détectée, NFC ne fonctionne pas, carte non lue, problème lecteur de carte, échec du scan, emplacement antenne NFC]
sidebar_position: 1
sidebar_label: "Problèmes de connexion et NFC"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Pourquoi ma Seedkeeper n'est-elle pas détectée par mon téléphone ?", a: "Le plus souvent, c'est le placement ou une coque. Déplacez lentement la carte sur le dos du téléphone pour trouver l'antenne, retirez toute coque épaisse ou à dos métallique, et écartez les autres cartes sans contact."},
  {q: "Où se trouve l'antenne NFC de mon téléphone ?", a: "Sur iPhone, en haut au dos. Sur Android, cela varie selon le modèle : zone de l'appareil photo, centre, ou tiers inférieur. Déplacer lentement la carte sur le dos la trouve plus vite qu'en tapotant, et Scanner votre Seedkeeper montre les positions habituelles sur un schéma."},
  {q: "Pourquoi le scan échoue-t-il en cours de route ?", a: "L'appareil a bougé et le champ s'est rompu. Posez le téléphone sur une table, maintenez la carte contre lui, et gardez la position pendant toute l'opération plutôt que de la retirer à la première vibration."},
  {q: "Puis-je utiliser ma Seedkeeper en USB ?", a: "Non. L'appareil ne prend en charge que le NFC et le contact ISO 7816. Sur un ordinateur, il vous faut un lecteur de cartes à puce à contact pour la carte, ou un lecteur NFC pour l'un ou l'autre format."},
  {q: "Pourquoi le site web ne me propose-t-il pas ma clé de sécurité ?", a: "Le site restreint peut-être l'enregistrement à l'authentificateur intégré de l'appareil. Cherchez « Utiliser un autre appareil », « Clé de sécurité » ou « Autres options » dans l'invite du navigateur, et essayez un navigateur fondé sur Chromium."},
]} />

import GetSupport from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_get-support.mdx';

<p class="doc-subtitle">Quand l'appareil n'est pas détecté</p>

<div class="tldr">

Neuf fois sur dix, c'est le placement et non le matériel. Déplacez lentement l'appareil sur le dos du téléphone jusqu'à ce qu'il accroche, maintenez-le immobile pendant toute l'opération, et retirez toute coque épaisse. Sur ordinateur, vérifiez que le lecteur est bien reconnu par le système avant de suspecter la carte.

</div>

## Commencez ici

Avant toute chose, trois vérifications qui résolvent la plupart des cas :

<img src="/img/diagrams/nfc-three-checks.svg" alt="Trois vérifications avant de dépanner : NFC activé, rien entre l'appareil et le lecteur, et appareil maintenu immobile" style={{width: '100%', maxWidth: 'none', margin: '1.5rem 0'}} />

1. **Le NFC est-il activé ?** Sur Android : Paramètres → Appareils connectés → Préférences de connexion → NFC. Sur iPhone, il est toujours actif, mais l'application doit être au premier plan.
2. **Y a-t-il quelque chose entre l'appareil et le lecteur ?** Une coque épaisse, une plaque métallique, un portefeuille contenant d'autres cartes, un support magnétique.
3. **Le maintenez-vous immobile ?** Le NFC exige un contact continu pendant toute l'opération, pas une simple tape.

## L'appareil n'est pas détecté du tout

### Sur un téléphone

**Trouvez l'antenne.** Elle n'est pas là où la plupart des gens l'imaginent. Sur iPhone, elle se situe en haut au dos. Sur Android, cela varie énormément selon le modèle : zone de l'appareil photo, centre, ou tiers inférieur. [Scanner votre Seedkeeper](/docs/product-documentation/getting-started/first-setup-guide#scanner-votre-seedkeeper) contient des schémas pour les deux, y compris les positions Android courantes.

Déplacez lentement la carte sur le dos du téléphone plutôt que de tapoter un endroit. Quand elle accroche, arrêtez de bouger.

**Retirez la coque.** Les coques épaisses, les étuis portefeuille et tout ce qui contient du métal bloquent entièrement le champ. Testez sans elle avant de conclure quoi que ce soit.

**Écartez les autres cartes.** Une carte bancaire ou un titre de transport à côté de la Seedkeeper trouble le lecteur, qui voit plusieurs étiquettes et n'en choisit souvent aucune.

**Essayez la bague différemment.** Une bague a une antenne plus petite qu'une carte et demande un placement plus proche et plus précis. Tenez-la à plat contre le téléphone plutôt que sur la tranche.

### Sur un ordinateur

**Vérifiez le lecteur, pas la carte.** Confirmez d'abord que le système d'exploitation voit le lecteur : sur Windows, il apparaît dans le Gestionnaire de périphériques sous Lecteurs de cartes à puce ; sur Linux, il faut que `pcscd` soit démarré.

<details>
<summary>Vérifier ou installer pcscd sous Linux</summary>

`pcscd` est le démon carte à puce. Sous Linux, rien ne dialogue avec un lecteur à contact ou NFC sans lui : un `pcscd` absent ou arrêté ressemble donc exactement à une carte défectueuse.

```bash
# installer le démon et les pilotes de lecteur
sudo apt-get install pcscd

# le démarrer maintenant, et automatiquement à chaque démarrage
sudo systemctl enable pcscd.service
sudo systemctl start pcscd.service

# confirmer qu'il fonctionne
sudo systemctl status pcscd.service
```

C'est la dernière commande qui répond à la question. Cherchez **active (running)** dans la sortie - toute autre valeur, et le lecteur ne sera jamais vu.

S'il fonctionne et que le lecteur n'est toujours pas détecté, listez ce que le démon voit réellement :

```bash
pcsc_scan
```

Il affiche les lecteurs connectés et réagit quand vous présentez une carte. Aucun lecteur listé signifie un problème de pilote ou d'USB plutôt qu'un problème Seedkeeper. Sur les distributions autres que Debian et Ubuntu, le paquet s'appelle généralement `pcsc-lite` ou `pcsc-tools`.

</details>

**Insérez la carte à fond**, puce en premier et vers le haut sur la plupart des lecteurs à contact.

**Une bague exige un lecteur NFC**, pas un lecteur à contact. Il n'existe aucune fente dans laquelle elle rentre.

**Il n'y a pas de voie USB.** L'appareil ne parle que NFC et contact ISO 7816 - un simple port USB ne le détectera jamais, quel que soit l'adaptateur employé. Voir [Device Capabilities](/docs/developers/device-capabilities#transports).

## Le scan démarre, puis échoue

Presque toujours un mouvement. Le champ se rompt et l'opération s'interrompt en cours de route.

- **Gardez la position pendant toute l'opération**, pas seulement jusqu'à la vibration du téléphone. Une sauvegarde ou une réinitialisation prend plusieurs secondes.
- **Posez le téléphone sur une table** et maintenez la carte contre lui, plutôt que de tenir les deux en l'air.
- **Réessayez plutôt que de supposer un dommage.** Un scan échoué laisse l'appareil inchangé dans presque tous les cas.

Si une opération a été interrompue, vérifiez le résultat avant de la répéter. Un import inachevé a pu être écrit ou non - ouvrez la liste des secrets et regardez.

## L'application indique que la carte n'est pas reconnue

**Vérifiez que vous utilisez la bonne application.** Les mots de passe, les notes et les seed phrases sont dans la Seedkeeper App. Les passkeys et les codes OTP sont dans la Seedkeeper PRO App. Chacune n'affiche rien d'utile quand on la pointe vers les données de l'autre - voir [Téléchargements](/docs/product-documentation/getting-started/download).

**Vérifiez la gamme.** Les passkeys et l'OTP exigent une Seedkeeper PRO. Un appareil Classic ne fonctionne qu'avec la Seedkeeper App.

**Vérifiez l'authenticité** si vous suspectez l'appareil lui-même : Card's Information → Verify Authenticity le compare au certificat de Satochip - voir [Réglages de l'appareil](/docs/product-documentation/getting-started/device-settings).

## Rien ne se passe sur un site web

Si l'appareil fonctionne dans l'application mais qu'un site ne le réclame jamais :

**Le site ne propose peut-être que les authentificateurs de plateforme.** Certaines implémentations restreignent l'enregistrement à Touch ID ou Windows Hello et excluent silencieusement les clés externes. Cherchez une option du type **Utiliser un autre appareil**, **Clé de sécurité** ou **Autres options** dans l'invite du navigateur.

**Essayez un navigateur Chromium.** La prise en charge des clés externes en NFC y est la plus régulière.

**Vérifiez que le site prend réellement en charge les passkeys.** Tous ne le font pas, et certains ne les prennent en charge que dans leur application mobile ou seulement sur ordinateur - nos [tutoriels](/docs/category/tutorials) signalent la restriction service par service.

## Cela fonctionne parfois et parfois non

Généralement une dérive de placement plutôt qu'une panne intermittente. Deux choses aident :

- **Repérez l'endroit.** Une fois que vous avez trouvé où se situe l'antenne sur votre téléphone, retenez-le - la plupart des gens cherchent à quelques centimètres de là à chaque fois. Les [schémas](/docs/product-documentation/getting-started/first-setup-guide#scanner-votre-seedkeeper) réduisent la zone de recherche.
- **Vérifiez le niveau de batterie.** Certains téléphones réduisent la puissance NFC en mode économie d'énergie.

## FAQ

<details>
<summary>Pourquoi ma Seedkeeper n'est-elle pas détectée par mon téléphone ?</summary>

Le plus souvent, c'est le placement ou une coque. Déplacez lentement la carte sur le dos du téléphone pour trouver l'antenne, retirez toute coque épaisse ou à dos métallique, et écartez les autres cartes sans contact.

</details>

<details>
<summary>Où se trouve l'antenne NFC de mon téléphone ?</summary>

Sur iPhone, en haut au dos. Sur Android, cela varie selon le modèle - zone de l'appareil photo, centre, ou tiers inférieur. Déplacer lentement la carte sur le dos la trouve plus vite qu'en tapotant - et [Scanner votre Seedkeeper](/docs/product-documentation/getting-started/first-setup-guide#scanner-votre-seedkeeper) montre les positions habituelles sur un schéma.

</details>

<details>
<summary>Pourquoi le scan échoue-t-il en cours de route ?</summary>

L'appareil a bougé et le champ s'est rompu. Posez le téléphone sur une table, maintenez la carte contre lui, et gardez la position pendant toute l'opération plutôt que de la retirer à la première vibration.

</details>

<details>
<summary>Puis-je utiliser ma Seedkeeper en USB ?</summary>

Non. L'appareil ne prend en charge que le NFC et le contact ISO 7816. Sur un ordinateur, il vous faut un lecteur de cartes à puce à contact pour la carte, ou un lecteur NFC pour l'un ou l'autre format.

</details>

<details>
<summary>Pourquoi le site web ne me propose-t-il pas ma clé de sécurité ?</summary>

Le site restreint peut-être l'enregistrement à l'authentificateur intégré de l'appareil. Cherchez « Utiliser un autre appareil », « Clé de sécurité » ou « Autres options » dans l'invite du navigateur, et essayez un navigateur fondé sur Chromium.

</details>

## Articles liés

- [Scanner votre Seedkeeper](/docs/product-documentation/getting-started/first-setup-guide#scanner-votre-seedkeeper) - emplacements du lecteur NFC sur iPhone et Android
- [Guide de première configuration](/docs/product-documentation/getting-started/first-setup-guide)
- [Réglages de l'appareil](/docs/product-documentation/getting-started/device-settings)
- [Téléchargements](/docs/product-documentation/getting-started/download)
- [Device Capabilities](/docs/developers/device-capabilities)

<GetSupport />
