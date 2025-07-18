/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.


const siteConfig = {
  title: "Edenia Web3 Development",
  tagline: "Developer Documentation for Edenia Web3 Development",
  url: "https://docs.edenia.com",
  baseUrl: "/", // Base URL for your project */
  // Used for publishing and more
  projectName: "docs.edenia.com",
  organizationName: "edenia",
  favicon: "img/favicon/favicon.ico",
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      es: {
        label: 'Español',
      },
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'default',
        path: 'docs/guide',
        routeBasePath: 'guide',
        sidebarPath: require.resolve('./sidebarsGuide.js'),
        editUrl: 'https://github.com/edenia/docs.edenia.com/edit/master/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],

  

  
  //scripts: ['https://buttons.github.io/buttons.js','../../scripts/languageSelector.js'],
  themeConfig: {
    image: "img/metaImg.jpg",
    navbar: {
      logo: {
        alt: "EOS Costa Rica Logo",
        src: "/img/byw-horizontal-transparent.png",
        srcDark:
          "/img/byw-horizontal-transparent-white.png",
      },
      items: [
        {
          to: '/guide/open-source-guidelines',
          label: 'Developer Guidelines',
          position: 'left',
        },
        {
          to: '/guide/eos-learn/eosio-protocol',
          label: 'Learn EOSIO + Antelope',
          position: 'left',
        },
        {
          to: '/guide/tutorials/markdown-guide',
          label: 'Tutorials',
          position: 'left',
        },
        { to: '/guide/tools/glossary', label: 'Tools', position: 'left' },
        {
          to: '/guide/community-resources/eosio-networks',
          label: 'Community',
          position: 'left',
        },
        { to: 'https://eoscostarica.io/', label: 'Website', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
        { to: 'search' },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    footer: {
      logo: {
        alt: "EOS Costa Rica Logo",
        src: "/img/byw-horizontal-transparent.png",
        href: "https://docs.edenia.com/",
      },
      links: [
        {
          title: "EOS Costa Rica",
          items: [
            {
              label: "Engineering Culture",
              to: "/guide/engineering-culture",
            },
            {
              label: "Open Source Projects",
              to: "/guide/open-source-projects",
            },
            {
              label: "Open Source Guidelines",
              to: "/guide/open-source-guidelines",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Meetup",
              href: "https://www.meetup.com/es/EOS-Costa-Rica/",
            },
            {
              label: "Telegram channels",
              href: "https://t.me/eoscr",
            },
            {
              label: "GitHub",
              href: "https://github.com/eoscostarica/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/eoscostarica/",
            },
            {
              label: "Medium",
              href: "https://medium.com/@eoscostarica",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/eoscostarica",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a title="Edenia Web3 Development" href="https://edenia.com" target="_blank">EDENIA</a>`, // You can also put own HTML here.
    },
    //Algolia integration
    algolia: {
      apiKey: "b385fd20b79dbd8086bb917c038de56e",
      appId: "BH4D9OD16A",
      indexName: "eoscostarica",
      placeholder: "Search",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  trailingSlash: false,
  presets: [
    [
     '@docusaurus/preset-classic',
    {
      docs: false, // desactiva el docs “por defecto”
      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/edenia/docs.edenia.com/edit/master/blog/',
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
      googleAnalytics: {
        trackingID: 'UA-173987-66',
      },
      sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: [],
        filename: 'sitemap.xml',
        },
      },
    ],
  ],

  scripts: [],
};
module.exports = siteConfig;
