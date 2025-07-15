/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.


const siteConfig = {
  title: "EOSIO + Antelope Documentation",
  tagline: "Developer Documentation for EOSIO + Antelope Blockchain Networks",
  url: "https://guide.edenia.com",
  baseUrl: "/", // Base URL for your project */
  //cname: "guide.eoscostarica.io",
  // Used for publishing and more
  projectName: "guide.edenia.com",
  organizationName: "edenia",
  favicon: "img/favicon/favicon.ico",
  trailingSlash: false,

  // configuración de plugins de docs para dos idiomas
  plugins: [
    // Inglés bajo /guides
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guide',  // id del plugin inglés
        path: 'docs/guide',  //ruta a docs/guides
        routeBasePath: 'guide',  // basePath /guides
        sidebarPath: require.resolve('./sidebarsGuide.js'),  //sidebar guía inglés

        editUrl: 'https://github.com/eoscostarica/guide.eoscostarica.io/edit/master/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    // Español bajo /guias
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guias',  //  id del plugin español
        path: 'docs/guias',  // ruta a docs/guias
        routeBasePath: 'guias',  // basePath /guias
        sidebarPath: require.resolve('./sidebarsGuias.js'),  // sidebar guía español
        editUrl: 'https://github.com/eoscostarica/guide.eoscostarica.io/edit/master/',
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
        /*{
          href: 'https://guias.eoscostarica.io/',
          label: 'Inicio',
          position: 'left',
        },*/
        {
          to: '/guide/open-source-guidelines',  // ruta inglés
          label: 'Developer Guidelines',
          position: 'left',
          docsPluginId: 'guide',  // pluginId inglés
        },
        
        {
          to: "docs/eos-learn/eosio-protocol",
          label: "Learn EOSIO + Antelope",
          position: "left",
          docsPluginId: 'guide',  // pluginId inglés
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

 //enlace docs español
 {
  to: '/guias/pautas-para-codigo-abierto',  // ruta español
  label: 'Guías',
  position: 'left',
  docsPluginId: 'guias',  // pluginId español
},



        { to: "https://eoscostarica.io/", label: "Website", position: "left" },
        {
          href: "https://guias.eoscostarica.io/",
          label: "Español",
          position: "right",
        },
        { to: "search" },
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
        href: "https://guide.eoscostarica.io/",
      },
      links: [
        {
          title: "EOS Costa Rica",
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
        editUrl: 'https://github.com/eoscostarica/guide.eoscostarica.io/edit/master/blog/',
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
