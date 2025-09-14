const path = require('path');

module.exports = function i18nMetadataPlugin(context, options) {
  const { siteDir, i18n } = context;
  
  return {
    name: 'i18n-metadata-plugin',
    
    configureWebpack(config, isServer) {
      return {};
    },
    
    postBuild({ siteConfig, routesPaths, outDir, locale }) {
      // Este hook se ejecuta después del build, podemos usar otro enfoque
    },
    
    injectHtmlTags({ locale }) {
      // Aplicar metadatos específicos para cada idioma
      const metadata = getMetadataForLocale(locale);
      
      return {
        headTags: [
          // Metadatos HTML con data-rh="true" para sobrescribir los de Docusaurus
          {
            tagName: 'meta',
            attributes: {
              'data-rh': 'true',
              name: 'description',
              content: metadata.description
            }
          },
          {
            tagName: 'meta',
            attributes: {
              'data-rh': 'true',
              name: 'keywords',
              content: metadata.keywords
            }
          },
          {
            tagName: 'meta',
            attributes: {
              'data-rh': 'true',
              name: 'author',
              content: metadata.author
            }
          },
          // Open Graph
          {
            tagName: 'meta',
            attributes: {
              'data-rh': 'true',
              property: 'og:title',
              content: metadata.ogTitle
            }
          },
          {
            tagName: 'meta',
            attributes: {
              'data-rh': 'true',
              property: 'og:description',
              content: metadata.ogDescription
            }
          },
          {
            tagName: 'meta',
            attributes: {
              'data-rh': 'true',
              property: 'og:locale',
              content: metadata.ogLocale
            }
          },
          {
            tagName: 'meta',
            attributes: {
              'data-rh': 'true',
              property: 'og:site_name',
              content: metadata.siteName
            }
          },
          // Twitter Card
          {
            tagName: 'meta',
            attributes: {
              'data-rh': 'true',
              name: 'twitter:title',
              content: metadata.twitterTitle
            }
          },
          {
            tagName: 'meta',
            attributes: {
              'data-rh': 'true',
              name: 'twitter:description',
              content: metadata.twitterDescription
            }
          },
          // Hreflang alternates para SEO multiidioma
          {
            tagName: 'link',
            attributes: {
              rel: 'alternate',
              hreflang: locale === 'es' ? 'en' : 'es',
              href: locale === 'es' ? 'https://docs.edenia.com/' : 'https://docs.edenia.com/es/'
            }
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'alternate',
              hreflang: 'x-default',
              href: 'https://docs.edenia.com/'
            }
          }
        ]
      };
    }
  };
};

function getMetadataForLocale(locale) {
  const metadata = {
    en: {
      description: "Comprehensive developer documentation for Web3, blockchain, and AI technologies. Learn EOSIO, Antelope, smart contracts, and modern development practices with Edenia's expert guides and tutorials.",
      keywords: "Web3, blockchain, EOSIO, Antelope, smart contracts, developer documentation, AI, artificial intelligence, tutorials, guides, Edenia, Costa Rica",
      author: "Sistemas Edenia Web3 Development",
      ogTitle: "Sistemas Edenia Web3 Development - Developer Documentation",
      ogDescription: "Comprehensive developer documentation for Web3, blockchain, and AI technologies. Expert guides, tutorials, and best practices for modern development.",
      ogLocale: "en_US",
      siteName: "Sistemas Edenia Web3 Development",
      twitterTitle: "Sistemas Edenia Web3 Development - Developer Documentation",
      twitterDescription: "Comprehensive developer documentation for Web3, blockchain, and AI technologies. Expert guides and tutorials."
    },
    es: {
      description: "Documentación completa para desarrolladores de Web3, blockchain e IA. Aprende EOSIO, Antelope, contratos inteligentes y prácticas modernas de desarrollo con las guías y tutoriales expertos de Edenia.",
      keywords: "Web3, blockchain, EOSIO, Antelope, contratos inteligentes, documentación para desarrolladores, IA, inteligencia artificial, tutoriales, guías, Edenia, Costa Rica",
      author: "Sistemas Edenia Web3 Development",
      ogTitle: "Sistemas Edenia Web3 Development - Documentación para Desarrolladores",
      ogDescription: "Documentación completa para desarrolladores de Web3, blockchain e IA. Guías expertas, tutoriales y mejores prácticas para el desarrollo moderno.",
      ogLocale: "es_ES",
      siteName: "Sistemas Edenia Web3 Development",
      twitterTitle: "Sistemas Edenia Web3 Development - Documentación para Desarrolladores",
      twitterDescription: "Documentación completa para desarrolladores de Web3, blockchain e IA. Guías expertas y tutoriales."
    }
  };
  
  return metadata[locale] || metadata.en;
}
