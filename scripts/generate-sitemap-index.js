
/**
 * Script to generate a sitemap index file that references both English and Spanish sitemaps
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://docs.edenia.com';
const BUILD_DIR = path.join(__dirname, '../build');

function generateSitemapIndex() {
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/es/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

  const sitemapIndexPath = path.join(BUILD_DIR, 'sitemap-index.xml');
  
  try {
    fs.writeFileSync(sitemapIndexPath, sitemapIndexContent, 'utf8');
    console.log('✅ Sitemap index generated successfully at:', sitemapIndexPath);
    console.log('📄 Submit this URL to Google Search Console:', `${SITE_URL}/sitemap-index.xml`);
  } catch (error) {
    console.error('❌ Error generating sitemap index:', error);
    process.exit(1);
  }
}

// Check if build directory exists
if (!fs.existsSync(BUILD_DIR)) {
  console.error('❌ Build directory not found. Please run "npm run build" first.');
  process.exit(1);
}

// Check if individual sitemaps exist
const enSitemap = path.join(BUILD_DIR, 'sitemap.xml');
const esSitemap = path.join(BUILD_DIR, 'es', 'sitemap.xml');

if (!fs.existsSync(enSitemap)) {
  console.error('❌ English sitemap not found at:', enSitemap);
  process.exit(1);
}

if (!fs.existsSync(esSitemap)) {
  console.error('❌ Spanish sitemap not found at:', esSitemap);
  process.exit(1);
}

console.log('🔍 Found sitemaps:');
console.log('  - English:', enSitemap);
console.log('  - Spanish:', esSitemap);
console.log('');

generateSitemapIndex();
