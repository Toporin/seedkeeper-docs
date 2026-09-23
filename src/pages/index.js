import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

const SHOP_URL = 'https://seedkeeper.io/shop/';
const LOGO_URL = '/img/logo.png';
const SOCIAL_PROFILES = [
  'https://github.com/Toporin',
  'https://x.com/seedkeeper_io',
  'https://t.me/Satochip',
];

function EntryCard({label, title, body, to, cta}) {
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

function StructuredData({url, title, locale, baseUrl}) {
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
        description: translate({
          id: 'home.schema.description',
          message:
            'Documentation for Seedkeeper and Seedkeeper PRO hardware security devices: setup, password manager, passkeys, OTP codes, and the security concepts behind them.',
          description: 'JSON-LD site description for search engines',
        }),
        publisher: {'@id': url + '/#organization'},
        inLanguage: locale,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate:
              url + baseUrl + 'search?q={search_term_string}',
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
  const {siteConfig, i18n} = useDocusaurusContext();
  const url = siteConfig.url.replace(/\/$/, '');
  const locale = i18n.currentLocale;
  const baseUrl = siteConfig.baseUrl;

  // Defined inside the component so translate() resolves per locale.
  const ENTRY_POINTS = [
    {
      id: 'gettingStarted',
      label: translate({
        id: 'home.entry.gettingStarted.label',
        message: 'Getting Started',
        description: 'Entry card label - Getting Started',
      }),
      title: translate({
        id: 'home.entry.gettingStarted.title',
        message: 'You have a device in hand',
        description: 'Entry card title - Getting Started',
      }),
      body: translate({
        id: 'home.entry.gettingStarted.body',
        message:
          'Install the app, scan your card or ring, choose a PIN, and set up a backup before you store anything real.',
        description: 'Entry card body - Getting Started',
      }),
      to: '/docs/product-documentation/getting-started/first-setup-guide',
      cta: translate({
        id: 'home.entry.gettingStarted.cta',
        message: 'Set up your Seedkeeper',
        description: 'Entry card call to action - Getting Started',
      }),
    },
    {
      id: 'academy',
      label: translate({
        id: 'home.entry.academy.label',
        message: 'Security Academy',
        description: 'Entry card label - Security Academy',
      }),
      title: translate({
        id: 'home.entry.academy.title',
        message: 'You want to understand the why',
        description: 'Entry card title - Security Academy',
      }),
      body: translate({
        id: 'home.entry.academy.body',
        message:
          'What a passkey actually is, why one-time codes can still be phished, how a seed phrase works. No prior knowledge assumed.',
        description: 'Entry card body - Security Academy',
      }),
      to: '/docs/security-academy/passkeys/what-is-a-passkey',
      cta: translate({
        id: 'home.entry.academy.cta',
        message: 'Start with passkeys',
        description: 'Entry card call to action - Security Academy',
      }),
    },
    {
      id: 'tutorials',
      label: translate({
        id: 'home.entry.tutorials.label',
        message: 'Tutorials',
        description: 'Entry card label - Tutorials',
      }),
      title: translate({
        id: 'home.entry.tutorials.title',
        message: 'You want to secure one service',
        description: 'Entry card title - Tutorials',
      }),
      body: translate({
        id: 'home.entry.tutorials.body',
        message:
          'Step-by-step guides for Google, Microsoft, Amazon, PayPal, GitHub and twenty more - passkeys where they exist, TOTP everywhere else.',
        description: 'Entry card body - Tutorials',
      }),
      to: '/docs/category/tutorials',
      cta: translate({
        id: 'home.entry.tutorials.cta',
        message: 'Find your service',
        description: 'Entry card call to action - Tutorials',
      }),
    },
    {
      id: 'business',
      label: translate({
        id: 'home.entry.business.label',
        message: 'Business',
        description: 'Entry card label - Business',
      }),
      title: translate({
        id: 'home.entry.business.title',
        message: 'You are deciding for a team',
        description: 'Entry card title - Business',
      }),
      body: translate({
        id: 'home.entry.business.body',
        message:
          'The case for phishing-resistant hardware, a rollout plan that survives real users, and what NIS2 expects of authentication.',
        description: 'Entry card body - Business',
      }),
      to: '/docs/business/why-hardware-keys-for-your-business',
      cta: translate({
        id: 'home.entry.business.cta',
        message: 'Read the business case',
        description: 'Entry card call to action - Business',
      }),
    },
  ];

  // Secondary destinations - useful, but not what a first-time visitor needs.
  const SECONDARY = [
    {
      id: 'securityGuides',
      label: translate({
        id: 'home.secondary.securityGuides',
        message: 'Security Guides',
        description: 'Secondary link - Security Guides',
      }),
      to: '/docs/security-guides/security-checklist-for-beginners',
    },
    {
      id: 'troubleshooting',
      label: translate({
        id: 'home.secondary.troubleshooting',
        message: 'Troubleshooting',
        description: 'Secondary link - Troubleshooting',
      }),
      to: '/docs/troubleshooting/connection-and-nfc-issues',
    },
    {
      id: 'developers',
      label: translate({
        id: 'home.secondary.developers',
        message: 'Developers',
        description: 'Secondary link - Developers',
      }),
      to: '/docs/developers/developer-overview',
    },
    {
      id: 'glossary',
      label: translate({
        id: 'home.secondary.glossary',
        message: 'Glossary',
        description: 'Secondary link - Glossary',
      }),
      to: '/docs/category/glossary',
    },
  ];

  return (
    <Layout
      title={translate({
        id: 'home.meta.title',
        message:
          'Seedkeeper Documentation - Passkeys, Passwords and 2FA on Hardware',
        description: 'Homepage browser tab title and meta title',
      })}
      description={translate({
        id: 'home.meta.description',
        message:
          'Official documentation for Seedkeeper and Seedkeeper PRO: device setup, password manager, FIDO2 passkeys, TOTP codes, service tutorials and the security concepts behind them.',
        description: 'Homepage meta description',
      })}>
      <Head>
        <meta
          name="keywords"
          content={translate({
            id: 'home.meta.keywords',
            message:
              'Seedkeeper, Seedkeeper PRO, hardware security key, FIDO2, passkeys, TOTP, password manager, seed phrase, NFC security key, Satochip',
            description: 'Homepage meta keywords, comma separated',
          })}
        />
      </Head>
      <StructuredData
        url={url}
        title={siteConfig.title}
        locale={locale}
        baseUrl={baseUrl}
      />

      <main className={styles.main}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>
            <Translate
              id="home.hero.title"
              description="Homepage main heading">
              Seedkeeper Documentation
            </Translate>
          </h1>
          <p className={styles.heroTagline}>
            <Translate
              id="home.hero.tagline"
              description="Homepage tagline under the main heading">
              Passwords, FIDO2 passkeys and one-time codes on a card or a ring -
              stored on an EAL6+ certified secure element, with no cloud and no
              account. Whatever brought you here, start below.
            </Translate>
          </p>
        </header>

        <section
          className={styles.grid}
          aria-label={translate({
            id: 'home.grid.ariaLabel',
            message: 'Where to start',
            description: 'Accessible label for the entry card grid',
          })}>
          {ENTRY_POINTS.map((item) => (
            <EntryCard key={item.id} {...item} />
          ))}
        </section>

        <section
          className={styles.secondary}
          aria-label={translate({
            id: 'home.secondary.ariaLabel',
            message: 'Other sections',
            description: 'Accessible label for the secondary link list',
          })}>
          <span className={styles.secondaryLabel}>
            <Translate
              id="home.secondary.label"
              description="Heading above the secondary link list">
              Also here
            </Translate>
          </span>
          <ul className={styles.secondaryList}>
            {SECONDARY.map((item) => (
              <li key={item.id}>
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
              <strong>
                <Translate
                  id="home.cta.heading"
                  description="Homepage shop call to action heading">
                  Don't have one yet?
                </Translate>
              </strong>
            </p>
            <p>
              <Translate
                id="home.cta.body"
                description="Homepage shop call to action body">
                Seedkeeper PRO stores your passwords, your TOTP codes and
                passkeys on a single certified secure element. No subscription,
                no account, and nothing about your credentials passes through
                us.
              </Translate>
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
              <Translate
                id="home.cta.button"
                description="Homepage shop button label">
                Get your Seedkeeper
              </Translate>
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
