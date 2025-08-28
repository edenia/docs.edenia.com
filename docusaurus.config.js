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
  
    i18n: {
    defaultLocale: 'en',           // Idioma por defecto
    locales: ['en', 'es'],     
    localeConfigs: {
        en: {
        label: 'English',    
      },
      es: {
        label: 'Español',
      },
    },
  },
  //scripts: ['https://buttons.github.io/buttons.js','../../scripts/languageSelector.js'],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    image: "img/developer_guides_preview_image.png",
    navbar: {
      logo: {
        alt: "Sistemas Edenia Logo",
        src: "/img/EdeniaLogo.png",
        srcDark:
          "/img/Edenia_Logo.svg",
      },
      items: [
        /*{
          href: 'https://docs.edenia.com/es/',
          label: 'Inicio',
          position: 'left',
        },*/
        {
          to: "docs/open-source-guidelines",
          label: "Developer Guidelines",
          position: "left",
        },
        {
          to: "docs/blockchain-web3",
          label: "Blockchain & Web3",
          position: "left",
        },
        {
          to: "docs/artificial-intelligence",
          label: "Artificial Intelligence",
          position: "left",
        },
        {
          to: "docs/tutorials/markdown-guide",
          label: "Tutorials",
          position: "left",
        },
        { to: "docs/tools/glossary", label: "Tools", position: "left" },
        {
          to: "docs/community-resources/eosio-networks",
          label: "Community",
          position: "left",
        },
        { to: "https://edenia.com/", 
          label: "Website", 
          position: "left" 
        },
        { 
          type: 'localeDropdown', 
          position: 'right' 
        },
        // {
        //   href: "https://docs.edenia.com/es/",
        //   label: "Español",
        //   position: "right",
        // },
        { 
          to: "search" 
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    footer: {
      logo: {
        alt: "Sistemas Edenia Logo",
        src: "/img/Edenia_Logo.svg",
        href: "https://docs.edenia.com/",
      },
      links: [
        {
          title: "Sistemas Edenia",
          items: [
            {
              label: "Engineering Culture",
              to: "/docs/engineering-culture",
            },
            {
              label: "Open Source Projects",
              to: "/docs/open-source-projects",
            },
            {
              label: "Open Source Guidelines",
              to: "/docs/open-source-guidelines",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Meetup",
            //   href: "https://www.meetup.com/es/EOS-Costa-Rica/",
            // },
            {
              label: "Telegram channels",
              href: "https://t.me/eoscr",
            },
            {
              label: "GitHub",
              href: "https://github.com/edenia/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/edeniaweb3/",
            },
            {
              label: "Medium",
              href: "https://medium.com/@eoscostarica",
            },
            {
              label: "X",
              href: "https://x.com/EdeniaWeb3",
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
  onBrokenLinks: 'ignore',
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // Docs folder path relative to website dir.
          path: "./docs",
          routeBasePath: 'docs',
          // Sidebars file relative to website dir.
          editUrl:
            "https://github.com/edenia/docs.edenia.com/tree/master/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        pages: {
          path: 'src/pages',       // donde viven tus páginas React/MDX
          routeBasePath: '/',      // las páginas se servirán en /
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-173987-66",
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