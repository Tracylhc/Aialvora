import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { tools } from '../src/data/tools.ts';
import { categories } from '../src/data/categories.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.aialvora.com';
const TODAY = new Date().toISOString().split('T')[0];

const urls = [
  { loc: '/', priority: '1.0', changefreq: 'daily' },
  { loc: '/tools', priority: '0.9', changefreq: 'daily' },
  { loc: '/ranking', priority: '0.8', changefreq: 'weekly' },
  { loc: '/tutorials', priority: '0.7', changefreq: 'weekly' },
  { loc: '/prompts', priority: '0.7', changefreq: 'weekly' },
  { loc: '/workflows', priority: '0.7', changefreq: 'weekly' },
  { loc: '/news', priority: '0.7', changefreq: 'weekly' },
  { loc: '/submit', priority: '0.5', changefreq: 'monthly' },
  { loc: '/privacy', priority: '0.3', changefreq: 'monthly' },
];

categories.forEach((category) => {
  urls.push({
    loc: `/category/${category.id}`,
    priority: '0.8',
    changefreq: 'weekly',
  });
});

tools.forEach((tool) => {
  urls.push({
    loc: `/tool/${tool.id}`,
    priority: '0.8',
    changefreq: 'weekly',
  });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

console.log(`✅ Sitemap generated: ${outputPath}`);
console.log(`📊 Total URLs: ${urls.length}`);
