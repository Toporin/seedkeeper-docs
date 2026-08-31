import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

const SHOP_URL = 'https://seedkeeper.io/shop/';
const LOGO_URL = '/img/logo.png';            
const SOCIAL_PROFILES = [
  'https://github.com/Toporin',
  'https://x.com/seedkeeper_io',
  'https://t.me/Satochip',
];

const ENTRY_POINTS = [
  {
    label: 'Getting Started',
    title: 'You have a device in hand',
    body:
      'Install the app, scan your card or ring, choose a PIN, and set up a backup before you store anything real.',
    to: '/docs/product-documentation/getting-started/first-setup-guide',
    cta: 'Set up your Seedkeeper',
  },
  {
    label: 'Security Academy',
    title: 'You want to understand the why',
    body:
      'What a passkey actually is, why one-time codes can still be phished, how a seed phrase works. No prior knowledge assumed.',
    to: '/docs/security-academy/passkeys/what-is-a-passkey',
    cta: 'Start with passkeys',
  },
  {
    label: 'Tutorials',
    title: 'You want to secure one service',
    body:
      'Step-by-step guides for Google, Microsoft, Amazon, PayPal, GitHub and twenty more - passkeys where they exist, TOTP everywhere else.',
    to: '/docs/category/tutorials',
    cta: 'Find your service',
  },
  {
    label: 'Business',
    title: 'You are deciding for a team',
    body:
      'The case for phishing-resistant hardware, a rollout plan that survives real users, and what NIS2 expects of authentication.',
    to: '/docs/business/why-hardware-keys-for-your-business',
    cta: 'Read the business case',
  },
];

// Secondary destinations - useful, but not what a first-time visitor needs.
const SECONDARY = [
  { label: 'Security Guides', to: '/docs/security-guides/security-checklist-for-beginners' },
  { label: 'Troubleshooting', to: '/docs/troubleshooting/connection-and-nfc-issues' },
  { label: 'Developers', to: '/docs/developers/developer-overview' },
  { label: 'Glossary', to: '/docs/category/glossary' },
];

function EntryCard({ label, title, body, to, cta }) {
  return (
    <Link to={to} className={styles.card}>
      <span className={styles.cardLabel}>{label}</span>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardBody}>{body}</p>
      <span className={styles.cardCta}>
        {cta}
        <svg
          className={styles.cardArrow}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}

function StructuredData({url, title}) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': url + '/#organization',
        name: 'Satochip',
        legalName: 'Satochip S.R.L.',
        url: url,
        logo: url + LOGO_URL,
        sameAs: SOCIAL_PROFILES,
      },
      {
        '@type': 'WebSite',
        '@id': url + '/#website',
        url: url,
        name: title + ' Documentation',
        description:
          'Documentation for Seedkeeper and Seedkeeper PRO hardware security devices: setup, password manager, passkeys, OTP codes, and the security concepts behind them.',
        publisher: {'@id': url + '/#organization'},
        inLanguage: 'en',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: url + '/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const url = siteConfig.url.replace(/\/$/, '');

  return (
    <Layout
      title="Seedkeeper Documentation - Passkeys, Passwords and 2FA on Hardware"
      description="Official documentation for Seedkeeper and Seedkeeper PRO: device setup, password manager, FIDO2 passkeys, TOTP codes, service tutorials and the security concepts behind them.">
      <Head>
        <meta
          name="keywords"
          content="Seedkeeper, Seedkeeper PRO, hardware security key, FIDO2, passkeys, TOTP, password manager, seed phrase, NFC security key, Satochip"
        />
      </Head>
      <StructuredData url={url} title={siteConfig.title} />

      <main className={styles.main}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>Seedkeeper Documentation</h1>
          <p className={styles.heroTagline}>
            Passwords, FIDO2 passkeys and one-time codes on a card or a ring -
            stored on an EAL6+ certified secure element, with no cloud and no
            account. Whatever brought you here, start below.
          </p>
        </header>

        <section className={styles.grid} aria-label="Where to start">
          {ENTRY_POINTS.map((item) => (
            <EntryCard key={item.label} {...item} />
          ))}
        </section>

        <section className={styles.secondary} aria-label="Other sections">
          <span className={styles.secondaryLabel}>Also here</span>
          <ul className={styles.secondaryList}>
            {SECONDARY.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Same markup and global classes as the CTA partials used in the
            docs, so the visual language stays identical across the site. */}
        <div className="cta-box">
          <div className="cta-text">
            <p>
              <strong>Don&apos;t have one yet?</strong>
            </p>
            <p>
              Seedkeeper PRO stores your passwords, your TOTP codes and passkeys on a single certified secure element. No subscription, no account, and nothing about your credentials passes through us.
            </p>
            <a
              href={SHOP_URL}
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                className="cta-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false">
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              Get your Seedkeeper
            </a>
          </div>
          <div className="cta-visual">
            <img
              src="/img/product/seedkeeper-pro-card-ring.png"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
