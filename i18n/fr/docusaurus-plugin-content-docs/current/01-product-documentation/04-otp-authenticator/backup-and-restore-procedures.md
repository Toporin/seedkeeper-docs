---
title: "Sauvegarde et restauration des codes OTP"
description: "Les secrets OTP sont en écriture seule sur le secure element et ne peuvent pas être clonés. Ajoutez chaque code sur tous vos appareils en même temps."
keywords: [sauvegarde OTP, TOTP sur deux appareils, impossible d'exporter OTP, conserver QR code, restaurer codes 2FA]
sidebar_position: 4
sidebar_label: "Sauvegarde et restauration des codes OTP"
---

import FaqSchema from '@site/src/components/FaqSchema';

<FaqSchema items={[
  {q: "Puis-je exporter ou cloner mes codes OTP d'un appareil à un autre ?", a: "Non. Le secure element de la Seedkeeper PRO n'autorise que l'écriture des secrets OTP, jamais leur relecture."},
  {q: "Quelle est la meilleure façon de sauvegarder un nouveau code OTP ?", a: "L'ajouter à tous vos appareils Seedkeeper PRO en même temps, ou conserver le QR code ou le secret d'origine en lieu sûr pour plus tard."},
  {q: "Je n'ai configuré qu'un seul appareil et je veux maintenant une sauvegarde. Que faire ?", a: "Il vous faudra générer un nouvel identifiant depuis le service et l'ajouter aux deux appareils en même temps."},
]} />

<p class="doc-subtitle">Protégez vos codes OTP avant d'en avoir besoin</p>

<div class="tldr">

Vous ne pouvez ni cloner ni exporter des codes OTP d'une Seedkeeper PRO vers une autre - le secure element ne permet que d'y écrire les codes, jamais de les relire. Pour disposer des mêmes codes sur plusieurs appareils, ajoutez chaque code à tous vos appareils en même temps, ou conservez le QR code ou le secret d'origine pour le reconfigurer plus tard.

</div>

## Vue d'ensemble

Les codes OTP d'une Seedkeeper PRO sont, par conception, **en écriture seule**. Le secret partagé qui se trouve derrière chaque code peut être inscrit dans le secure element, mais jamais relu - la même protection matérielle qui garde vos codes en sécurité signifie aussi qu'il n'existe aucun moyen de les copier vers un autre appareil par la suite.

Ce secret partagé explique également en quoi l'OTP diffère d'une passkey, qui ne comporte aucun secret détenu par les deux parties - voir [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp#le-problème-du-secret-partagé). C'est différent de votre gestionnaire de mots de passe, qui prend bien en charge la sauvegarde d'appareil à appareil - voir [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery).

## Configurer une sauvegarde correctement

### Ajouter le même code sur plusieurs appareils à la fois

Si vous possédez déjà plusieurs Seedkeeper PRO, l'approche la plus simple consiste à ajouter chaque nouveau code OTP sur tous vos appareils en même temps, pendant que le QR code ou le secret de configuration du service est encore affiché à l'écran.

### Ou conserver le QR code ou le secret d'origine

Si vous n'avez qu'un seul appareil pour l'instant, conservez une copie du QR code de configuration (une capture d'écran suffit) ou la clé secrète partagée elle-même, et rangez-la en lieu sûr. Vous pourrez vous en servir pour configurer un équipement secondaire plus tard, le jour où vous en aurez un.

<div class="download-row">

<div>
<img src="/img/screenshots/gmail-otp-qr-example.png" alt="QR code de configuration OTP Gmail" className="doc-diagram" style={{maxWidth: '200px'}} />
<p style={{textAlign: 'center', fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-600)'}}>Code OTP Gmail</p>
</div>

<div>
<img src="/img/screenshots/microsoft365-otp-qr-example.png" alt="QR code de configuration OTP Microsoft 365" className="doc-diagram" style={{maxWidth: '200px'}} />
<p style={{textAlign: 'center', fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-600)'}}>Code OTP Microsoft 365</p>
</div>

</div>

:::warning[Protégez ce QR code ou ce secret aussi bien que le code lui-même]
Quiconque a accès au QR code ou au secret d'origine peut générer les mêmes codes OTP que votre Seedkeeper PRO - conservez-le avec le même soin que l'identifiant lui-même.
:::

## Si vous n'avez pas conservé de sauvegarde

Si vous avez ajouté un code sur un seul appareil sans conserver le QR code ou le secret d'origine, et que vous obtenez plus tard une seconde Seedkeeper PRO, il n'existe aucun moyen de migrer l'identifiant existant. À la place :

1. Connectez-vous au compte et supprimez l'identifiant OTP d'origine
2. Configurez un nouvel identifiant OTP pour ce compte
3. Ajoutez ce nouveau code sur les **deux** Seedkeeper PRO en même temps

## FAQ

<details>
<summary>Puis-je exporter ou cloner mes codes OTP d'un appareil à un autre ?</summary>

Non. Le secure element de la Seedkeeper PRO n'autorise que l'écriture des secrets OTP, jamais leur relecture. Voir la [Vue d'ensemble](#vue-densemble) ci-dessus.

</details>

<details>
<summary>Quelle est la meilleure façon de sauvegarder un nouveau code OTP ?</summary>

L'ajouter à tous vos appareils Seedkeeper PRO en même temps, ou conserver le QR code ou le secret d'origine en lieu sûr pour plus tard. Voir [Configurer une sauvegarde correctement](#configurer-une-sauvegarde-correctement) ci-dessus.

</details>

<details>
<summary>Je n'ai configuré qu'un seul appareil et je veux maintenant une sauvegarde. Que faire ?</summary>

Il vous faudra générer un nouvel identifiant depuis le service et l'ajouter aux deux appareils en même temps. Voir [Si vous n'avez pas conservé de sauvegarde](#si-vous-navez-pas-conservé-de-sauvegarde) ci-dessus.

</details>

## Articles liés

- [Ajouter un compte TOTP](/docs/product-documentation/otp-authenticator/adding-a-totp-account)
- [Gérer vos comptes OTP](/docs/product-documentation/otp-authenticator/managing-otp-entries)
- [Sauvegarde et récupération](/docs/product-documentation/getting-started/backup-and-recovery)
- [Passkey vs OTP](/docs/security-academy/passkeys/passkey-vs-otp)
- [Accès OTP perdu](/docs/troubleshooting/lost-otp-access)
