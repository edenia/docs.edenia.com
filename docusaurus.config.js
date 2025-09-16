/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Sistemas Edenia Developer Hub | Web3 & AI Documentation",
  tagline: "Build the future with Web3 and AI - Expert guides, tutorials, and best practices",
  url: "https://docs.edenia.com",
  baseUrl: "/", // Base URL for your project */
  // Used for publishing and more
  projectName: "docs.edenia.com",
  organizationName: "edenia",
  favicon: "img/favicon/favicon.ico",

  i18n: {
    defaultLocale: "en", // Idioma por defecto
    locales: ["en", "es"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en",
        direction: "ltr",
        calendar: "gregory",
        path: "en",
      },
      es: {
        label: "Español",
        htmlLang: "es-CR",
        direction: "ltr",
        calendar: "gregory",
        path: "es",
      },
    },
  },

  //scripts: ['https://buttons.github.io/buttons.js','../../scripts/languageSelector.js'],
  themeConfig: {
    // Essential metadata for SEO and social sharing
    metadata: [
      {
        name: "description",
        content: "Official developer documentation for Sistemas Edenia. Master Web3, blockchain and AI development with production-ready code examples, in-depth tutorials, and expert guidance from Costa Rica's leading Web3 development team."
      },
      {
        name: "keywords",
        content: "Sistemas Edenia, Web3 development, blockchain documentation, smart contracts, AI development, artificial intelligence, developer guides, Costa Rica tech, decentralized apps, dApps, DeFi, technical documentation"
      },
      {
        name: "author",
        content: "Sistemas Edenia"
      },
      {
        name: "robots",
        content: "index, follow"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      },
      {
        name: "theme-color",
        content: "#1a1a1a"
      },
      // Additional SEO metadata
      {
        property: "og:locale:alternate",
        content: "es_CR"
      },
      // Schema.org hints
      {
        name: "application-name",
        content: "Sistemas Edenia Developer Hub"
      },
      {
        name: "apple-mobile-web-app-title",
        content: "Edenia Dev Hub"
      },
      {
        name: "generator",
        content: "Docusaurus v2"
      }
    ],
    
    // Open Graph metadata for social sharing
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://docs.edenia.com",
      siteName: "Sistemas Edenia Developer Hub",
      title: "Sistemas Edenia Developer Hub | Web3 & AI Documentation",
      description: "Start building with Sistemas Edenia's comprehensive developer documentation. Access production-ready code, expert tutorials, and best practices for Web3, blockchain, and AI development.",
      image: {
        url: "https://docs.edenia.com/img/developer_guides_preview_image.png",
        width: 1200,
        height: 630,
        alt: "Sistemas Edenia Documentation"
      },
      imageWidth: 1200,
      imageHeight: 630,
      imageType: "image/png"
    },
    
    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      site: "@EdeniaWeb3",
      creator: "@EdeniaWeb3",
      title: "Sistemas Edenia Developer Hub | Web3 & AI Docs",
      description: "Build cutting-edge Web3 and AI applications with @EdeniaWeb3. Access expert guides, code examples, and join our developer community 🚀",
      image: "https://docs.edenia.com/img/developer_guides_preview_image.png",
      imageAlt: "Sistemas Edenia Web3 Development Documentation"
    },
    
    // Global image for SEO
    image: "img/developer_guides_preview_image.png",
    
    navbar: {
      logo: {
        alt: "Sistemas Edenia Logo",
        src: "/img/EdeniaLogo.png",
        srcDark: "/img/Edenia_Logo.svg",
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
        { to: "https://edenia.com/", label: "Website", position: "left" },
        {
          type: "localeDropdown",
          position: "right",
        },
        // {
        //   href: "https://docs.edenia.com/es/",
        //   label: "Español",
        //   position: "right",
        // },
        {
          to: "search",
        },
      ],
    },
    colorMode: {
      defaultMode: "dark",
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
      copyright: `Copyright © ${new Date().getFullYear()} <a title="Sistemas Edenia Internacional S.A." href="https://edenia.com" target="_blank">EDENIA</a>`, // You can also put own HTML here.
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
      "@docusaurus/preset-classic",
      {
        docs: {
          // Docs folder path relative to website dir.
          path: "./docs",
          routeBasePath: "docs",
          // Sidebars file relative to website dir.
          editUrl: "https://github.com/edenia/docs.edenia.com/tree/master/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        pages: {
          path: "src/pages", // donde viven tus páginas React/MDX
          routeBasePath: "/", // las páginas se servirán en /
          include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/search/**", "**/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);

            // Add hreflang attributes for multilingual SEO
            return items.map((item) => {
              const isDefaultLocale = !item.url.includes("/es/");
              const alternateUrl = isDefaultLocale
                ? `https://docs.edenia.com/es${item.url.replace(
                    "https://docs.edenia.com",
                    ""
                  )}`
                : item.url.replace("/es/", "/");

              return {
                ...item,
                links: [
                  {
                    lang: isDefaultLocale ? "en" : "es",
                    url: item.url,
                  },
                  {
                    lang: isDefaultLocale ? "es" : "en",
                    url: alternateUrl,
                  },
                ],
              };
            });
          },
        },
      },
    ],
  ],

  // Google Analytics GA4 Plugin Configuration - Enhanced
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-LQ520C8K0N", // Edenia GA4 Measurement ID
        anonymizeIP: true,
      }
    ],
    // Plugin personalizado para metadatos i18n
    require.resolve('./plugins/i18n-metadata')
  ],

  scripts: [],
};
module.exports = siteConfig;