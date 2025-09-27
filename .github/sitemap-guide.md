# XML Sitemap Implementation Guide for Astro

## What is a Sitemap.xml?

An XML sitemap is a file that lists all the important pages on your website, helping search engines discover and crawl your content more efficiently. Think of it as a roadmap for search engine bots.

## Why Do You Need a Sitemap?

### 1. **Faster Discovery**
- Search engines find new pages quicker
- Ensures all your pages get indexed
- Particularly important for new websites

### 2. **Better Crawling**
- Tells search engines which pages are most important
- Indicates how often pages change
- Helps with large or complex site structures

### 3. **SEO Benefits**
- Improves indexation rate
- Better search visibility
- Faster ranking of new content

### 4. **Analytics**
- Track which pages are being crawled
- Identify indexation issues
- Monitor sitemap performance in Search Console

## What a Sitemap Looks Like

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://enserve.co.za/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://enserve.co.za/about</loc>
    <lastmod>2024-01-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://enserve.co.za/services</loc>
    <lastmod>2024-01-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

## Astro Sitemap Implementation

### Step 1: Install the Sitemap Integration

```bash
# Install Astro's official sitemap integration
npm install @astrojs/sitemap

# Or using yarn
yarn add @astrojs/sitemap
```

### Step 2: Update astro.config.mjs

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // REQUIRED: Your website's base URL
  site: 'https://enserve.co.za',
  
  integrations: [
    react(),
    tailwind(),
    sitemap({
      // Optional: Customize sitemap generation
      customPages: [
        // Add pages that aren't in src/pages/
        'https://enserve.co.za/external-page',
      ],
      
      // Optional: Filter out certain pages
      filter: (page) => {
        // Exclude admin pages, drafts, etc.
        return !page.includes('/admin') && 
               !page.includes('/draft') &&
               !page.includes('/private');
      },
      
      // Optional: Customize individual entries
      serialize(item) {
        // Customize priority and change frequency
        if (item.url === 'https://enserve.co.za/') {
          return {
            ...item,
            priority: 1.0,
            changefreq: 'weekly'
          };
        }
        
        if (item.url.includes('/blog/')) {
          return {
            ...item,
            priority: 0.7,
            changefreq: 'monthly'
          };
        }
        
        if (item.url.includes('/services')) {
          return {
            ...item,
            priority: 0.9,
            changefreq: 'monthly'
          };
        }
        
        return item;
      }
    })
  ],
  
  output: 'static', // or 'server' for SSR
});
```

### Step 3: Build Your Site

```bash
# The sitemap will be automatically generated during build
npm run build

# Check the dist/ folder for sitemap files:
# - sitemap-index.xml (main sitemap)
# - sitemap-0.xml (actual URLs)
```

## Advanced Configuration Examples

### For Large Sites (Multiple Sitemaps)

```javascript
// astro.config.mjs - Advanced configuration
sitemap({
  // Split into multiple sitemaps if you have many pages
  entryLimit: 45000, // Max URLs per sitemap file
  
  customPages: [
    'https://enserve.co.za/special-landing-page',
  ],
  
  serialize(item) {
    // Homepage - Highest priority
    if (item.url === 'https://enserve.co.za/') {
      return {
        url: item.url,
        lastmod: item.lastmod,
        priority: 1.0,
        changefreq: 'weekly'
      };
    }
    
    // Main service pages - High priority
    const servicePages = ['/services', '/about', '/contact'];
    if (servicePages.some(page => item.url.includes(page))) {
      return {
        url: item.url,
        lastmod: item.lastmod,
        priority: 0.9,
        changefreq: 'monthly'
      };
    }
    
    // Blog posts - Medium priority
    if (item.url.includes('/blog/')) {
      return {
        url: item.url,
        lastmod: item.lastmod,
        priority: 0.7,
        changefreq: 'monthly'
      };
    }
    
    // Other pages - Standard priority
    return {
      url: item.url,
      lastmod: item.lastmod,
      priority: 0.6,
      changefreq: 'yearly'
    };
  }
})
```

### Excluding Pages from Sitemap

```javascript
// Method 1: Using filter function
sitemap({
  filter: (page) => {
    // Exclude specific pages/patterns
    const excludePatterns = [
      '/admin',
      '/private',
      '/draft',
      '/404',
      '/thank-you',
      '/temp'
    ];
    
    return !excludePatterns.some(pattern => page.includes(pattern));
  }
})

// Method 2: In individual pages, add to frontmatter
---
# src/pages/private-page.astro
# This won't be included in sitemap due to filter above
---
```

## Manual Sitemap Control (Advanced)

If you need more control, you can create a custom sitemap endpoint:

```javascript
// src/pages/sitemap.xml.js
export async function GET() {
  const pages = [
    {
      url: 'https://enserve.co.za/',
      lastmod: '2024-01-15',
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: 'https://enserve.co.za/about',
      lastmod: '2024-01-10', 
      changefreq: 'yearly',
      priority: '0.8'
    },
    {
      url: 'https://enserve.co.za/services',
      lastmod: '2024-01-12',
      changefreq: 'monthly', 
      priority: '0.9'
    },
    // Add more pages...
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
```

## Priority and Change Frequency Guidelines

### Priority Values (0.0 to 1.0)
- **1.0** - Homepage, most important landing pages
- **0.9** - Main service/product pages, about page
- **0.8** - Secondary important pages, contact
- **0.7** - Blog posts, news articles
- **0.6** - Archive pages, categories
- **0.5** - Standard pages
- **0.3** - Less important pages
- **0.1** - Least important pages

### Change Frequency
- **always** - Pages that change every time they're accessed
- **hourly** - Very dynamic content
- **daily** - News sites, blogs with daily updates
- **weekly** - Blogs, frequently updated pages
- **monthly** - Regular business updates
- **yearly** - Static pages like About Us
- **never** - Archived content

## robots.txt Integration

Make sure your `public/robots.txt` points to your sitemap:

```txt
# public/robots.txt
User-agent: *
Allow: /

# Block admin/private areas
Disallow: /admin/
Disallow: /private/
Disallow: /draft/

# Point to sitemap
Sitemap: https://enserve.co.za/sitemap-index.xml
```

## Submitting to Search Engines

### 1. Google Search Console
1. Go to Search Console
2. Navigate to "Sitemaps" section
3. Enter: `sitemap-index.xml`
4. Click "Submit"

### 2. Bing Webmaster Tools  
1. Access Bing Webmaster Tools
2. Go to "Sitemaps" section
3. Submit: `https://enserve.co.za/sitemap-index.xml`

### 3. Direct HTTP Ping (Optional)
```bash
# Notify Google of sitemap updates
curl "https://www.google.com/ping?sitemap=https://enserve.co.za/sitemap-index.xml"

# Notify Bing
curl "https://www.bing.com/ping?sitemap=https://enserve.co.za/sitemap-index.xml"
```

## Monitoring and Maintenance

### Regular Checks
- **Weekly**: Check Search Console for sitemap errors
- **Monthly**: Verify all important pages are included
- **After major updates**: Resubmit sitemap to search engines

### Common Issues to Watch For
- **Missing pages** - Important content not in sitemap
- **404 errors** - Dead links in sitemap
- **Wrong URLs** - Incorrect domain or paths
- **File size limits** - Sitemaps over 50MB need splitting

### Search Console Monitoring
```markdown
Monitor these metrics:
- [ ] Number of submitted URLs
- [ ] Number of indexed URLs  
- [ ] Sitemap errors/warnings
- [ ] Last processed date
- [ ] Coverage issues
```

## Example Site Structure & Sitemap

### Your Site Structure
```
src/pages/
├── index.astro          # https://enserve.co.za/
├── about.astro          # https://enserve.co.za/about
├── services.astro       # https://enserve.co.za/services  
├── contact.astro        # https://enserve.co.za/contact
├── blog/
│   ├── index.astro      # https://enserve.co.za/blog
│   └── post-1.astro     # https://enserve.co.za/blog/post-1
└── services/
    ├── valve-supply.astro    # https://enserve.co.za/services/valve-supply
    └── ldar-services.astro   # https://enserve.co.za/services/ldar-services
```

### Generated Sitemap Structure
```
sitemap-index.xml        # Main sitemap file (points to others)
├── sitemap-0.xml        # Contains all your page URLs
```

## Implementation Checklist

### Initial Setup
- [ ] Install @astrojs/sitemap
- [ ] Add site URL to astro.config.mjs
- [ ] Configure sitemap integration
- [ ] Build site and verify sitemap generation

### Configuration  
- [ ] Set appropriate priorities
- [ ] Configure change frequencies
- [ ] Filter out unwanted pages
- [ ] Test sitemap accessibility

### Submission
- [ ] Update robots.txt with sitemap URL
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify submission successful

### Ongoing Maintenance
- [ ] Monitor Search Console regularly
- [ ] Update after major site changes
- [ ] Check for 404 errors in sitemap
- [ ] Review indexation rates

## Pro Tips

1. **Don't Overdo Priority** - Use priority sparingly; most pages should be 0.5-0.8
2. **Be Realistic with Change Frequency** - Match actual update patterns
3. **Include Only Important Pages** - Quality over quantity
4. **Monitor Performance** - Track how sitemap affects indexation
5. **Update After Major Changes** - Resubmit when you add new sections
6. **Use HTTPS URLs** - Always use secure URLs in sitemap
7. **Check File Size** - Keep individual sitemaps under 50MB

The sitemap will automatically update every time you build your site, ensuring search engines always have the latest information about your pages!