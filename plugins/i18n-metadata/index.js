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
      description: "Official developer documentation for Sistemas Edenia. Master Web3, blockchain and AI development with production-ready code examples, in-depth tutorials, and expert guidance from Costa Rica's leading Web3 development team.",
      keywords: "Sistemas Edenia, Web3 development, blockchain documentation, smart contracts, AI development, artificial intelligence, developer guides, Costa Rica tech, decentralized apps, dApps, DeFi, technical documentation",
      author: "Sistemas Edenia",
      ogTitle: "Sistemas Edenia Developer Hub | Web3 & AI Documentation",
      ogDescription: "Start building with Sistemas Edenia's comprehensive developer documentation. Access production-ready code, expert tutorials, and best practices for Web3, blockchain, and AI development.",
      ogLocale: "en_US",
      siteName: "Sistemas Edenia Developer Hub",
      twitterTitle: "Sistemas Edenia Developer Hub | Web3 & AI Documentation",
      twitterDescription: "Start building with Sistemas Edenia's comprehensive developer documentation. Access production-ready code, expert tutorials, and best practices for Web3, blockchain, and AI development."
    },
    es: {
      description: "Documentación oficial para desarrolladores de Sistemas Edenia. Domina el desarrollo de Web3, blockchain e IA con ejemplos de código listos para producción, tutoriales detallados y orientación experta del equipo líder de desarrollo Web3 de Costa Rica.",
      keywords: "Sistemas Edenia, desarrollo Web3, documentación blockchain, contratos inteligentes, desarrollo IA, inteligencia artificial, guías para desarrolladores, tecnología Costa Rica, aplicaciones descentralizadas, dApps, DeFi, documentación técnica",
      author: "Sistemas Edenia",
      ogTitle: "Sistemas Edenia Developer Hub | Documentación Web3 e IA",
      ogDescription: "Comienza a desarrollar con la documentación completa para desarrolladores de Sistemas Edenia. Accede a código listo para producción, tutoriales expertos y mejores prácticas para desarrollo Web3, blockchain e IA.",
      ogLocale: "es_ES",
      siteName: "Sistemas Edenia Developer Hub",
      twitterTitle: "Sistemas Edenia Developer Hub | Documentación Web3 e IA",
      twitterDescription: "Comienza a desarrollar con la documentación completa para desarrolladores de Sistemas Edenia. Accede a código listo para producción, tutoriales expertos y mejores prácticas para desarrollo Web3, blockchain e IA."
    }
  };
  
  return metadata[locale] || metadata.en;
}
