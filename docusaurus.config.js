// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seedkeeper',
  tagline: 'Own your digital life.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://docs.seedkeeper.io',
  baseUrl: '/',
  noIndex: false,

  organizationName: 'Toporin', 
  projectName: 'seedkeeper-docs', 

  onBrokenLinks: 'throw',
  markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'throw',
  },
},
  onBrokenAnchors: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'fr'],
  localeConfigs: {
    en: {
      label: 'English',
      htmlLang: 'en',
    },
    fr: {
      label: 'Français',
      htmlLang: 'fr-FR',
    },
  },
},

plugins: [
  [
    'docusaurus-plugin-llms',
    {
      title: 'Seedkeeper Documentation',
      description:
        'Documentation for Seedkeeper and Seedkeeper PRO hardware security devices: setup, password manager, FIDO2 passkeys, TOTP codes, service tutorials, and the security concepts behind them.',

      docsDir: 'docs',

      // ---- What to generate -------------------------------------
      generateLLMsTxt: true,        // /llms.txt - index of links
      generateLLMsFullTxt: true,    // /llms-full.txt - everything, one file
      generateMarkdownFiles: true,  // a .md twin next to every HTML page

      // Keeps the .md twins at the same path as the HTML, so
      // /docs/glossary/passkey  ->  /docs/glossary/passkey.md
      preserveDirectoryStructure: true,

      // Links in llms.txt point at the .md twins rather than the HTML,
      // which is what the llmstxt.org spec asks for.
      addMdExtension: true,

      // ---- Content cleaning -------------------------------------
      // Essential here: nearly every page starts with imports for
      // FaqSchema and the CTA partials. They are noise to a model.
      excludeImports: true,

      // Our headings are never followed by a repeat of themselves.
      removeDuplicateHeadings: false,

      // ---- Reading order ----------------------------------------
      // The leading `*` absorbs the numeric folder prefixes, so this
      // keeps working if you renumber a section.
      includeOrder: [
        '*product-documentation/**/*',
        '*security-academy/**/*',
        '*tutorials/**/*',
        '*security-guides/**/*',
        '*troubleshooting/**/*',
        '*business/**/*',
        '*developers/**/*',
        '*glossary/**/*',
      ],
      includeUnmatchedLast: true,

      // ---- Orientation for the model ----------------------------
      rootContent: `Seedkeeper and Seedkeeper PRO are open-source hardware security devices in card and ring form, built by Satochip S.R.L. (Belgium). They store passwords, seed phrases, FIDO2 passkeys and TOTP codes on an EAL6+ certified secure element, with no cloud service and no user account.

How this documentation is organised:
- Product Documentation: how to use the device and its apps
- Security Academy: the concepts, explained without jargon
- Tutorials: per-service setup guides for passkeys and 2FA
- Security Guides: practical checklists and action plans
- Troubleshooting: symptoms, causes and what is recoverable
- Business: deployment, compliance and fleet management
- Developers: device capabilities, WebAuthn and FIDO2 integration
- Glossary: short definitions of every term used above

Key facts: Seedkeeper PRO is FIDO2 Level 1 certified (certificate FA001202600016, AAGUID 328dec20-698f-5d33-aed3-97daba53b1b0), holds up to 90 discoverable credentials and 50 OTP credentials, and communicates over NFC and ISO 7816 contact only. Firmware is AGPLv3.`,

      logLevel: 'normal',
    },
  ],
],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
		  showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      colorMode: {
    	defaultMode: 'dark',
    	disableSwitch: false,       
    	respectPrefersColorScheme: false,
  	},
      navbar: {
        title: 'Seedkeeper',
        logo: {
          alt: 'Seedkeeper',
          src: 'img/logo.png',
	  href: 'https://docs.seedkeeper.io',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'https://seedkeeper.io/shop',
            label: 'Shop now',
            position: 'right',
			className: 'navbar-shop-button',
			target: '_blank',
          },
		  {
			type: 'localeDropdown',
			position: 'right',
		  },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Shop',
            items: [
              {
                label: 'Buy a Seedkeeper Classic',
                to: 'https://seedkeeper.io/shop',
              },
              {
                label: 'Buy a Seedkeeper PRO',
                to: 'https://seedkeeper.io/shop',
              },
              {
                label: 'Compare the products',
                to: 'https://seedkeeper.io/seedkeeper-classic-vs-pro',
              },			  
			  
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X',
                to: 'https://x.com/seedkeeper_io',
              },
              {
                label: 'Telegram',
                to: 'https://t.me/Satochip',
              },
			  {
                label: 'Github',
                to: 'https://github.com/Toporin',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
			  {
                label: 'Privacy Policy',
                to: 'https://seedkeeper.io/privacy-policy',
              },
              {
                label: 'Terms and Conditions',
                to: 'https://seedkeeper.io/terms-and-conditions',
              },
              {
                label: 'Refund and Return Policy',
                to: 'https://seedkeeper.io/refund-and-return-policy',
              },
            ],
          },
        ],
        copyright: `All rights reserved – Satochip ® S.R.L. - ${new Date().getFullYear()}<br />A Belgium based company registered under number BE0770730524`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;