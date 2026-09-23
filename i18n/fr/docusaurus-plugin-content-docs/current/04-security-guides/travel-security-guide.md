---
title: "Guide de sécurité en voyage"
description: "Contrôles aux frontières, Wi-Fi d'hôtel, ordinateurs partagés et téléphone qu'on peut perdre. Quoi préparer avant de partir et comment se comporter sur place."
keywords: [sécurité en voyage, sécurité numérique à l'étranger, wifi hôtel, fouille d'appareil à la frontière, voyager avec de la crypto, téléphone perdu à l'étranger]
sidebar_position: 4
sidebar_label: "Guide de sécurité en voyage"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Que faire avant de voyager avec mes appareils ?", a: "Assurez-vous que rien dont vous dépendez n'existe en un seul exemplaire : codes de récupération conservés ailleurs que sur le téléphone, second authentificateur ou QR codes d'origine sauvegardés, et second appareil passkey enregistré."},
  {q: "Le Wi-Fi d'hôtel est-il sûr ?", a: "Généralement, le trafic étant chiffré par défaut. Les vrais risques sont les faux portails captifs imitant la page de connexion et les réseaux qui laissent les autres clients atteindre votre appareil, deux points que couvrent un VPN et un profil de réseau public."},
  {q: "Puis-je utiliser en sécurité l'ordinateur du centre d'affaires d'un hôtel ?", a: "Supposez que tout ce qui y est tapé est enregistré. Si vous n'avez pas le choix, utilisez la navigation privée et déconnectez-vous ensuite, et privilégiez une passkey matérielle, qui authentifie sans laisser d'identifiant sur la machine."},
  {q: "Mes codes à deux facteurs fonctionneront-ils à l'étranger ?", a: "Les codes d'application oui, puisqu'ils n'ont besoin d'aucun réseau. Les codes SMS souvent non, l'itinérance et les SIM locales rompant leur acheminement, ce qui est une bonne raison d'abandonner le SMS avant de partir."},
  {q: "Que faire si mon téléphone est volé en voyage ?", a: "Verrouillez-le à distance, changez le mot de passe de votre messagerie depuis un autre appareil, révoquez son accès sur vos comptes, puis contactez votre opérateur au sujet de la SIM. Les comptes comptent plus que le matériel."},
]} />

import BuyBackupDevice from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_buy-backup-device.mdx';

<p class="doc-subtitle">Préparez avant de partir, comportez-vous une fois sur place</p>

<div class="tldr">

Voyager modifie votre modèle de menace de trois façons : vous emportez tout avec vous, vous utilisez des réseaux et des machines que vous ne contrôlez pas, et perdre un appareil signifie le perdre loin de chez vous. L'essentiel du travail se fait avant le départ, et la préparation la plus utile consiste à s'assurer que rien de ce dont vous avez besoin n'existe en un seul exemplaire.

</div>

## Avant de partir

### Assurez-vous que rien n'existe en un seul exemplaire

C'est la préparation qui compte le plus, et celle que les gens sautent.

Un téléphone volé dans une ville que vous ne connaissez pas, avec votre application d'authentification dessus et sans sauvegarde, vous verrouille hors de vos propres comptes au moment où vous êtes le moins en mesure d'y faire face.

- **Les codes de récupération**, conservés ailleurs que sur le téléphone
- **Un second appareil d'authentification**, ou au minimum les QR codes d'origine conservés en lieu sûr - voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures)
- **Un second appareil passkey enregistré** si vous dépendez des passkeys - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)

<BuyBackupDevice />

### Réduisez ce que vous emportez

La protection la plus simple consiste à ne pas avoir les données avec soi.

Emportez les comptes que vous utiliserez réellement et laissez le reste. Déconnectez-vous de ce dont vous n'avez pas besoin. Si vous détenez de la crypto, demandez-vous si l'appareil qui la contient a besoin de voyager - voir [Liste de contrôle sécurité pour les utilisateurs de crypto](/docs/security-guides/security-checklist-for-crypto-users).

### Vérifiez que vos appareils sont à jour

Mises à jour, chiffrement intégral du disque activé, verrouillage d'écran avec un vrai PIN plutôt que quatre chiffres. Voir [Guide de sécurité du smartphone](/docs/security-guides/smartphone-security-guide).

### Sachez que votre numéro de téléphone sera peu fiable

L'itinérance, une SIM locale ou un changement d'eSIM rompent tous l'authentification à deux facteurs par SMS - parfois silencieusement. Tout ce qui repose encore sur le SMS devrait être basculé vers une application d'authentification ou une passkey avant le départ, pas depuis un aéroport.

Cela vaut la peine d'être fait de toute façon : voir [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp).

## Une fois sur place

### Wi-Fi d'hôtel et d'aéroport

Moins dangereux que le folklore ne le suggère, la majorité du trafic étant chiffrée. Deux risques réels subsistent.

Les **faux portails captifs** imitent la page de connexion du réseau pour récolter des identifiants. Un réseau qui vous demande de vous connecter avec un compte e-mail plutôt qu'un numéro de chambre est un signal d'alarme.

Les **réseaux trop permissifs** laissent les autres clients voir votre appareil. Définissez le réseau comme public plutôt que privé sur votre ordinateur portable, ce qui désactive le partage de fichiers.

Un VPN est réellement utile ici, surtout parce qu'il vous évite d'avoir à juger chaque réseau individuellement.

### Ordinateurs partagés ou empruntés

Centres d'affaires d'hôtels, cybercafés, portable d'un collègue. Supposez que tout ce qui y est tapé est enregistré, car cela pourrait l'être.

Si vous devez vous y connecter :

- Ne saisissez jamais un mot de passe que vous utilisez ailleurs
- Utilisez une fenêtre de navigation privée, et déconnectez-vous explicitement
- Privilégiez une passkey sur un appareil que vous transportez - l'identifiant ne le quitte jamais, et rien n'est laissé sur la machine. Voir [Utiliser vos passkeys sur plusieurs appareils](/docs/product-documentation/passkeys/using-passkeys-across-devices)

C'est la situation où un authentificateur itinérant prend tout son sens : une carte ou une bague fonctionne sur une machine à laquelle vous ne faites pas confiance sans rien y déposer.

### Vigilance physique

Peu glorieux et efficace. Le regard par-dessus l'épaule est une réalité dans les aéroports et les cafés, les téléphones disparaissent des tables, et les sacoches d'ordinateur sont prises dans les porte-bagages.

Utilisez un filtre de confidentialité si vous travaillez sur du matériel sensible en public, et ne laissez pas vos appareils sans surveillance, même brièvement.

## Passages de frontière

Les règles varient énormément selon les pays, et c'est une question juridique autant que technique - ce qui suit est un éclairage, pas un conseil.

Certaines juridictions peuvent exiger que vous déverrouilliez un appareil, et le refus a des conséquences allant du retard au refus d'entrée. Votre position est meilleure si vous l'avez anticipée que si vous improvisez au guichet.

Les principes généraux que la plupart des voyageurs trouvent utiles : connaître les règles de votre destination avant de partir, comprendre qu'un appareil que vous n'emportez pas ne peut pas être fouillé, et savoir qu'un appareil éteint se trouve généralement dans un état plus protégé qu'un appareil déverrouillé depuis son démarrage.

Pour tout ce qui dépasse le voyage personnel ordinaire - journalisme, travail juridique, matériel commercial sensible - faites-vous conseiller en fonction de votre situation et de votre destination.

## Si quelque chose tourne mal

L'ordre compte. Procédez dans cette séquence :

1. **Verrouillez l'appareil à distance** via Localiser mon iPhone ou Localiser mon appareil
2. **Changez le mot de passe de votre messagerie** depuis un autre appareil - c'est la voie de réinitialisation de tout le reste
3. **Révoquez l'accès de l'appareil** sur les comptes où il était enregistré : passkeys, sessions actives, appareils de confiance. Voir [Appareil perdu ou volé](/docs/troubleshooting/lost-device)
4. **Contactez votre opérateur** si la SIM a disparu, pour empêcher son usage pour les codes SMS
5. **Ensuite seulement**, occupez-vous du téléphone lui-même

L'instinct pousse à commencer par le matériel. Les comptes comptent davantage.

## FAQ

<details>
<summary>Que faire avant de voyager avec mes appareils ?</summary>

Assurez-vous que rien dont vous dépendez n'existe en un seul exemplaire : codes de récupération conservés ailleurs que sur le téléphone, second authentificateur ou QR codes d'origine sauvegardés, et second appareil passkey enregistré.

</details>

<details>
<summary>Le Wi-Fi d'hôtel est-il sûr ?</summary>

Généralement, le trafic étant chiffré par défaut. Les vrais risques sont les faux portails captifs imitant la page de connexion et les réseaux qui laissent les autres clients atteindre votre appareil, deux points que couvrent un VPN et un profil de réseau public.

</details>

<details>
<summary>Puis-je utiliser en sécurité l'ordinateur du centre d'affaires d'un hôtel ?</summary>

Supposez que tout ce qui y est tapé est enregistré. Si vous n'avez pas le choix, utilisez la navigation privée et déconnectez-vous ensuite - et privilégiez une passkey matérielle, qui authentifie sans laisser d'identifiant sur la machine.

</details>

<details>
<summary>Mes codes à deux facteurs fonctionneront-ils à l'étranger ?</summary>

Les codes d'application oui, puisqu'ils n'ont besoin d'aucun réseau. Les codes SMS souvent non, l'itinérance et les SIM locales rompant leur acheminement - ce qui est une bonne raison d'abandonner le SMS avant de partir.

</details>

<details>
<summary>Que faire si mon téléphone est volé en voyage ?</summary>

Verrouillez-le à distance, changez le mot de passe de votre messagerie depuis un autre appareil, révoquez son accès sur vos comptes, puis contactez votre opérateur au sujet de la SIM. Les comptes comptent plus que le matériel.

</details>

## Articles liés

- [Guide de sécurité du smartphone](/docs/security-guides/smartphone-security-guide)
- [Liste de contrôle sécurité pour les utilisateurs de crypto](/docs/security-guides/security-checklist-for-crypto-users)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [SMS vs TOTP](/docs/security-academy/authentication/sms-vs-totp)
- [Utiliser vos passkeys sur plusieurs appareils](/docs/product-documentation/passkeys/using-passkeys-across-devices)
