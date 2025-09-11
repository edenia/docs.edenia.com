/**
 * Enhanced Google Analytics 4 Tracking for Edenia Web3 Development
 * This script provides advanced analytics tracking including:
 * - Custom event tracking
 * - Scroll depth tracking
 * - Download tracking
 * - External link tracking
 * - Search tracking
 * - Enhanced eCommerce events
 */

(function() {
  'use strict';

  // Configuration
  const GA4_CONFIG = {
    // Enhanced measurement events
    scrollDepth: [25, 50, 75, 90, 100],
    timeOnPage: [30, 60, 120, 300], // seconds
    downloadExtensions: ['.pdf', '.doc', '.docx', '.zip', '.tar.gz', '.exe'],
    externalDomains: ['github.com', 'medium.com', 'linkedin.com', 'twitter.com', 'x.com'],
    
    // Custom dimensions
    customDimensions: {
      page_category: 'page_category',
      content_type: 'content_type',
      user_type: 'user_type',
      language: 'language',
      section: 'section'
    }
  };

  // Utility functions
  const utils = {
    // Get page category based on URL
    getPageCategory: function() {
      const path = window.location.pathname;
      if (path.includes('/docs/')) return 'documentation';
      if (path.includes('/tutorials/')) return 'tutorial';
      if (path.includes('/tools/')) return 'tool';
      if (path.includes('/community/')) return 'community';
      return 'general';
    },

    // Get content type
    getContentType: function() {
      const path = window.location.pathname;
      if (path.endsWith('.html')) return 'page';
      if (path.includes('/search')) return 'search';
      return 'documentation';
    },

    // Get user type (new vs returning)
    getUserType: function() {
      return localStorage.getItem('ga4_user_type') || 'new';
    },

    // Set user type
    setUserType: function(type) {
      localStorage.setItem('ga4_user_type', type);
    },

    // Get language
    getLanguage: function() {
      return document.documentElement.lang || 'en';
    },

    // Get section
    getSection: function() {
      const path = window.location.pathname;
      const segments = path.split('/').filter(Boolean);
      return segments[0] || 'home';
    }
  };

  // Enhanced GA4 tracking functions
  const ga4Tracker = {
    // Initialize GA4 with advanced configuration
    initGA4: function() {
      if (typeof gtag !== 'undefined') {
        // Configure cross-domain tracking
        gtag('config', 'G-XXXXXXXXXX', {
          // Cross-domain tracking
          linker: {
            domains: ['edenia.com', 'docs.edenia.com']
          },
          // Custom parameters for better tracking
          custom_map: {
            'custom_parameter_1': 'page_category',
            'custom_parameter_2': 'content_type',
            'custom_parameter_3': 'user_type'
          },
          // Enhanced measurement
          send_page_view: true,
          // Data retention (26 months)
          data_retention: 26,
          // Privacy settings
          anonymize_ip: true,
          // Enhanced measurement events
          enhanced_measurement: {
            scrolls: true,
            outbound_clicks: true,
            site_search: true,
            video_engagement: true,
            file_downloads: true,
            form_interactions: true
          }
        });
      }
    },
    // Track custom events
    trackEvent: function(eventName, parameters = {}) {
      if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
          ...parameters,
          // Add custom dimensions
          custom_parameter_1: utils.getPageCategory(),
          custom_parameter_2: utils.getContentType(),
          custom_parameter_3: utils.getUserType(),
          language: utils.getLanguage(),
          section: utils.getSection()
        });
      }
    },

    // Track scroll depth
    trackScrollDepth: function() {
      let maxScroll = 0;
      const scrollDepths = GA4_CONFIG.scrollDepth;
      let trackedDepths = [];

      const handleScroll = function() {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          // Track milestone scroll depths
          scrollDepths.forEach(depth => {
            if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
              trackedDepths.push(depth);
              ga4Tracker.trackEvent('scroll_depth', {
                scroll_depth: depth,
                page_path: window.location.pathname
              });
            }
          });
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
    },

    // Track time on page
    trackTimeOnPage: function() {
      const startTime = Date.now();
      const timeIntervals = GA4_CONFIG.timeOnPage;

      timeIntervals.forEach(seconds => {
        setTimeout(() => {
          ga4Tracker.trackEvent('time_on_page', {
            time_seconds: seconds,
            page_path: window.location.pathname
          });
        }, seconds * 1000);
      });
    },

    // Track downloads
    trackDownloads: function() {
      document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link || !link.href) return;

        const href = link.href;
        const isDownload = GA4_CONFIG.downloadExtensions.some(ext => 
          href.toLowerCase().includes(ext)
        );

        if (isDownload) {
          const fileName = href.split('/').pop();
          ga4Tracker.trackEvent('file_download', {
            file_name: fileName,
            file_extension: fileName.split('.').pop(),
            link_url: href,
            page_path: window.location.pathname
          });
        }
      });
    },

    // Track external links
    trackExternalLinks: function() {
      document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link || !link.href) return;

        const href = link.href;
        const isExternal = GA4_CONFIG.externalDomains.some(domain => 
          href.includes(domain)
        );

        if (isExternal) {
          ga4Tracker.trackEvent('click_external_link', {
            link_url: href,
            link_domain: new URL(href).hostname,
            link_text: link.textContent.trim(),
            page_path: window.location.pathname
          });
        }
      });
    },

    // Track search queries
    trackSearch: function() {
      // Track Algolia search
      if (typeof docsearch !== 'undefined') {
        document.addEventListener('click', function(e) {
          const searchResult = e.target.closest('.DocSearch-Hit');
          if (searchResult) {
            const title = searchResult.querySelector('.DocSearch-Hit-title');
            const content = searchResult.querySelector('.DocSearch-Hit-content');
            
            if (title) {
              ga4Tracker.trackEvent('search_result_click', {
                search_term: title.textContent.trim(),
                result_position: Array.from(searchResult.parentNode.children).indexOf(searchResult) + 1,
                page_path: window.location.pathname
              });
            }
          }
        });
      }
    },

    // Track form submissions
    trackFormSubmissions: function() {
      document.addEventListener('submit', function(e) {
        const form = e.target;
        if (form.tagName === 'FORM') {
          ga4Tracker.trackEvent('form_submit', {
            form_id: form.id || 'unnamed_form',
            form_class: form.className,
            page_path: window.location.pathname
          });
        }
      });
    },

    // Track video interactions (if any)
    trackVideoInteractions: function() {
      document.addEventListener('click', function(e) {
        const video = e.target.closest('video');
        if (video) {
          ga4Tracker.trackEvent('video_interaction', {
            video_src: video.src,
            video_duration: video.duration,
            action: e.type,
            page_path: window.location.pathname
          });
        }
      });
    },

    // Track page engagement
    trackPageEngagement: function() {
      let engagementStartTime = Date.now();
      let isEngaged = false;

      const engagementEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
      
      const startEngagement = function() {
        if (!isEngaged) {
          isEngaged = true;
          engagementStartTime = Date.now();
        }
      };

      const endEngagement = function() {
        if (isEngaged) {
          const engagementTime = Date.now() - engagementStartTime;
          if (engagementTime > 10000) { // 10 seconds minimum
            ga4Tracker.trackEvent('page_engagement', {
              engagement_time_ms: engagementTime,
              page_path: window.location.pathname
            });
          }
          isEngaged = false;
        }
      };

      engagementEvents.forEach(event => {
        document.addEventListener(event, startEngagement, { passive: true });
      });

      // Track engagement end on page unload
      window.addEventListener('beforeunload', endEngagement);
    },

    // Enhanced eCommerce tracking
    trackEcommerce: function() {
      // Track documentation views as "content views"
      ga4Tracker.trackEvent('view_item', {
        item_id: window.location.pathname,
        item_name: document.title,
        item_category: utils.getPageCategory(),
        item_category2: utils.getContentType(),
        value: 1,
        currency: 'USD'
      });
    },

    // Initialize all tracking
    init: function() {
      // Initialize GA4 with advanced configuration
      this.initGA4();

      // Set user type
      if (!localStorage.getItem('ga4_user_type')) {
        utils.setUserType('new');
      } else {
        utils.setUserType('returning');
      }

      // Initialize all tracking features
      this.trackScrollDepth();
      this.trackTimeOnPage();
      this.trackDownloads();
      this.trackExternalLinks();
      this.trackSearch();
      this.trackFormSubmissions();
      this.trackVideoInteractions();
      this.trackPageEngagement();
      this.trackEcommerce();

      // Track page view with enhanced data
      this.trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        content_group1: utils.getPageCategory(),
        content_group2: utils.getContentType(),
        content_group3: utils.getLanguage()
      });

      console.log('🚀 Enhanced GA4 tracking initialized for Edenia Web3 Development');
      console.log('📊 Features enabled: Cross-domain, Enhanced measurement, Custom events, eCommerce');
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      ga4Tracker.init();
    });
  } else {
    ga4Tracker.init();
  }

  // Export for external use
  window.EdeniaGA4 = ga4Tracker;

})();
