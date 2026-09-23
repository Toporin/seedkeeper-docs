---
title: "Problèmes de sauvegarde et de restauration"
description: "L'appairage échoue, la copie s'arrête, ou l'équipement secondaire semble vide. Ce que signifie chaque symptôme et ce que la sauvegarde ne couvre pas."
keywords: [échec sauvegarde, restaurer Seedkeeper, équipement secondaire vide, échec appairage, sauvegarde d'appareil à appareil, sauvegarde ne fonctionne pas]
sidebar_position: 7
sidebar_label: "Problèmes de sauvegarde et de restauration"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "La sauvegarde copie-t-elle mes passkeys ?", a: "Non. Une passkey liée au matériel n'existe que sur l'appareil qui l'a créée et ne peut pas être copiée. Pour utiliser un second appareil, enregistrez-le séparément auprès de chaque service."},
  {q: "La sauvegarde copie-t-elle mes codes OTP ?", a: "Non. Les secrets OTP sont en écriture seule sur le secure element et ne peuvent pas être relus. Ajoutez chaque code sur les deux appareils en même temps, ou conservez le QR code d'origine."},
  {q: "Pourquoi la sauvegarde s'arrête-t-elle au dernier scan ?", a: "L'appareil a bougé et le champ s'est rompu. Le dernier scan porte le transfert de données lui-même : maintenez l'équipement secondaire immobile contre le téléphone jusqu'à ce que l'application confirme la fin."},
  {q: "Mon équipement secondaire semble vide. Que s'est-il passé ?", a: "Le plus souvent, vous tenez l'autre appareil : deux cartes sont identiques, nommez-les donc dans Card's Information. Sinon, la copie ne s'est pas achevée, et rejouer la séquence la terminera."},
  {q: "Comment restaurer sur un nouvel appareil ?", a: "Lancez la même procédure de sauvegarde avec votre appareil survivant comme équipement maître et le nouveau comme équipement secondaire. L'appareil qui détient les données est toujours le maître."},
  {q: "Dois-je refaire toute la sauvegarde après avoir ajouté un mot de passe ?", a: "Lancez les mêmes quatre scans : la sauvegarde est incrémentale, seul ce qui est nouveau est copié. Cela vaut la peine après tout ce que vous ne voudriez pas perdre."},
]} />

import GetSupport from '@site/i18n/fr/docusaurus-plugin-content-docs/current/_get-support.mdx';

<p class="doc-subtitle">Quand l'appairage refuse d'aboutir</p>

<div class="tldr">

La sauvegarde est une opération **d'appareil à appareil** en quatre scans : maître, secondaire, maître à nouveau, secondaire à nouveau. La plupart des échecs viennent du troisième ou du quatrième scan, rompu parce que l'appareil a bougé. Et un point à connaître avant de commencer : la sauvegarde ne couvre que le gestionnaire de mots de passe - les passkeys et les identifiants OTP ne sont pas copiés.

</div>

## Ce que la sauvegarde couvre réellement

Le malentendu le plus fréquent, et il vaut mieux le dissiper avant un problème qu'après.

| Données | Copiées par la sauvegarde ? |
|---|---|
| Mots de passe | ✅ Oui |
| Notes sécurisées | ✅ Oui |
| Seed phrases et descripteurs | ✅ Oui |
| **Passkeys** | ❌ **Non** - enregistrez chaque appareil séparément |
| **Identifiants OTP** | ❌ **Non** - en écriture seule, non copiables |

Si vous avez configuré une sauvegarde puis constaté que vos passkeys manquaient sur le second appareil, rien n'a mal tourné. Une passkey liée au matériel ne peut pas être copiée, par conception - voir [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy). Idem pour l'OTP - voir [Sauvegarde et restauration des codes OTP](/docs/product-documentation/otp-authenticator/backup-and-restore-procedures).

## La procédure, pour mémoire

Quatre scans, dans l'ordre, depuis le menu à 3 points → **Make a Backup** :

1. Scannez l'**équipement maître** - celui qui détient vos secrets
2. Scannez l'**équipement secondaire** - les deux échangent une clé pour chiffrer le transfert
3. Scannez de nouveau le **maître** - cela prépare la sauvegarde
4. Scannez de nouveau le **secondaire**, et **maintenez-le en place pendant toute la copie**

Procédure complète dans [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery).

## L'appairage échoue à l'étape 1 ou 2

Généralement un problème de détection plutôt qu'un problème de sauvegarde.

Vérifiez d'abord les bases - placement, coque, autres cartes à proximité - dans [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues).

**Confirmez que vous pouvez déverrouiller les deux appareils.** La sauvegarde exige le PIN de chacun, et un appareil que vous ne pouvez pas ouvrir ne peut pas être sauvegardé.

**Vérifiez que vous ne scannez pas deux fois le même appareil.** Deux cartes sont identiques. Nommez-les dans Card's Information pour que l'application vous dise laquelle est laquelle - voir [Réglages de l'appareil](/docs/product-documentation/getting-started/device-settings).

## La copie s'arrête en cours d'étape 4

L'échec le plus fréquent, et presque toujours un mouvement.

Le dernier scan est le plus long des quatre : c'est là que se déroule le transfert de données lui-même. Retirer la carte quand le téléphone vibre, ou décaler légèrement la position, rompt le champ et interrompt la copie.

- **Posez le téléphone sur une table**, maintenez l'équipement secondaire contre lui, et ne bougez ni l'un ni l'autre avant que l'application ne confirme la fin.
- **Retirez la coque** pour cette opération si elle est épaisse.
- **Reprenez depuis le début.** Une copie partielle n'est pas dommageable - la sauvegarde étant incrémentale, rejouer toute la séquence complète ce qui manque.

## L'équipement secondaire semble vide ensuite

Trois possibilités, par ordre de probabilité :

**Vous regardez le mauvais appareil.** Réellement courant avec deux cartes identiques. Vérifiez le libellé dans Card's Information.

**La copie ne s'est pas achevée.** Relancez les quatre scans et guettez la confirmation à la fin.

**Vous cherchez des passkeys ou des codes OTP.** Ceux-là ne sont pas copiés - voir le tableau ci-dessus.

## L'équipement maître est plein

Si le maître signale un manque d'espace, la notification NFC affiche un point d'exclamation rouge accompagné d'une erreur de mémoire.

L'appareil dispose de 8 Ko partagés entre tous les secrets, soit environ une centaine de mots de passe selon le niveau de détail que vous conservez pour chacun. Vérifiez l'occupation en haut de Card's Information.

Pour libérer de l'espace, supprimez les secrets dont vous n'avez plus besoin - voir [Supprimer un mot de passe](/docs/product-documentation/password-manager/deleting-a-password). Rappelez-vous qu'il n'y a pas de fonction de modification : mettre à jour une entrée signifie copier, supprimer, recréer - voir [Modifier un mot de passe](/docs/product-documentation/password-manager/editing-a-password).

## Restaurer après une perte

Il n'existe pas d'opération de restauration distincte. Vous lancez la même procédure de sauvegarde, avec votre équipement secondaire survivant comme **maître** et le nouvel appareil comme **secondaire**.

C'est le sens qui induit les gens en erreur. L'appareil qui détient vos données est toujours le maître, quel que soit le rôle qu'il jouait à l'origine.

## Garder la sauvegarde à jour

La sauvegarde est incrémentale : la rejouer après avoir ajouté des secrets ne copie que ce qui est nouveau, elle ne repart pas de zéro.

Prenez-en l'habitude après avoir ajouté quoi que ce soit d'important. Une sauvegarde d'il y a six mois restaure un appareil tel qu'il était il y a six mois.

## FAQ

<details>
<summary>La sauvegarde copie-t-elle mes passkeys ?</summary>

Non. Une passkey liée au matériel n'existe que sur l'appareil qui l'a créée et ne peut pas être copiée. Pour utiliser un second appareil, enregistrez-le séparément auprès de chaque service.

</details>

<details>
<summary>La sauvegarde copie-t-elle mes codes OTP ?</summary>

Non. Les secrets OTP sont en écriture seule sur le secure element et ne peuvent pas être relus. Ajoutez chaque code sur les deux appareils en même temps, ou conservez le QR code d'origine.

</details>

<details>
<summary>Pourquoi la sauvegarde s'arrête-t-elle au dernier scan ?</summary>

L'appareil a bougé et le champ s'est rompu. Le dernier scan porte le transfert de données lui-même : maintenez l'équipement secondaire immobile contre le téléphone jusqu'à ce que l'application confirme la fin.

</details>

<details>
<summary>Mon équipement secondaire semble vide. Que s'est-il passé ?</summary>

Le plus souvent, vous tenez l'autre appareil - deux cartes sont identiques, nommez-les donc dans Card's Information. Sinon, la copie ne s'est pas achevée, et rejouer la séquence la terminera.

</details>

<details>
<summary>Comment restaurer sur un nouvel appareil ?</summary>

Lancez la même procédure de sauvegarde avec votre appareil survivant comme équipement maître et le nouveau comme équipement secondaire. L'appareil qui détient les données est toujours le maître.

</details>

<details>
<summary>Dois-je refaire toute la sauvegarde après avoir ajouté un mot de passe ?</summary>

Lancez les mêmes quatre scans - la sauvegarde est incrémentale, seul ce qui est nouveau est copié. Cela vaut la peine après tout ce que vous ne voudriez pas perdre.

</details>

## Articles liés

- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
- [Problèmes de connexion et NFC](/docs/troubleshooting/connection-and-nfc-issues)
- [Stratégie de sauvegarde des passkeys](/docs/product-documentation/passkeys/passkey-backup-strategy)
- [Réglages de l'appareil](/docs/product-documentation/getting-started/device-settings)
- [Appareil perdu ou volé](/docs/troubleshooting/lost-device)

<GetSupport />
