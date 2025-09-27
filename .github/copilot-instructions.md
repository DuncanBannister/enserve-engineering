# Copilot Instructions: Astro.js + React Best Practices

## Project Context
This project uses **Astro.js** as the main framework with **React components** for interactive elements. We prioritize performance through selective hydration and static rendering where possible.

## Core Principles

### 1. **SEO-First Development**
- Always consider SEO impact in every component and page
- Ensure proper semantic HTML structure
- Optimize for Core Web Vitals and page speed
- Implement comprehensive meta tags and structured data

### 2. **Static-First Approach**
- Default to static HTML/CSS rendering
- Only add JavaScript/hydration when interactivity is required
- Prefer Astro components for display-only content

### 3. **Selective Hydration Strategy**
```astro
<!-- Critical interactive elements -->
<Navbar client:load />

<!-- Below-fold interactive content -->
<ContactForm client:visible />

<!-- Non-critical interactive elements -->
<Footer client:idle />

<!-- Pure display content (NO directive) -->
<AboutSection />
```

### 4. **Component Classification**
**Static (no client directive needed):**
- Headers, hero sections (without interactive buttons)
- Text content, testimonials
- Image galleries, logos
- Pure informational sections

**Interactive (needs client directive):**
- Navigation menus with dropdowns
- Forms, buttons with complex logic
- Carousels, tabs, accordions
- Search functionality

## SEO Best Practices

### Layout Component SEO Enhancement
```astro
---
// src/layouts/Layout.astro
import { Navbar } from '../components/react/navbar';

interface Props {
  title: string;
  description: string;
  canonicalURL: URL;
  image?: string;
  keywords?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: object;
}

const { 
  title, 
  description, 
  canonicalURL, 
  image = '/og-default.jpg',
  keywords,
  type = 'website',
  structuredData
} = Astro.props;

// Ensure absolute URL for social media
const absoluteImage = image.startsWith('http') ? image : new URL(image, Astro.site).href;
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <!-- SEO Meta Tags -->
  <title>{title}</title>
  <meta name="description" content={description} />
  {keywords && <meta name="keywords" content={keywords} />}
  <link rel="canonical" href={canonicalURL} />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={absoluteImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Enserve Engineering" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={canonicalURL} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={absoluteImage} />
  
  <!-- Additional SEO Meta Tags -->
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Enserve Engineering" />
  <meta name="language" content="en" />
  
  <!-- Favicons -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  
  <!-- Sitemap -->
  <link rel="sitemap" href="/sitemap-index.xml" />
  
  <!-- Performance Optimization -->
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />
  <link rel="dns-prefetch" href="//d22po4pjz3o32e.cloudfront.net" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Structured Data -->
  {structuredData && (
    <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
  )}
</head>
<body>
  <!-- Skip to content for accessibility -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded">
    Skip to main content
  </a>
  
  <Navbar client:load />
  <slot />
</body>
</html>
```

### Semantic HTML Structure
```astro
---
// Always use proper semantic HTML elements
---

<!-- ✅ Good: Semantic structure -->
<article>
  <header>
    <h1>Main Page Title</h1>
    <p>Page description or subtitle</p>
  </header>
  
  <main>
    <section aria-labelledby="services-heading">
      <h2 id="services-heading">Our Services</h2>
      <div>
        <!-- Service content -->
      </div>
    </section>
  </main>
</article>

<!-- ❌ Bad: Generic div structure -->
<div>
  <div>
    <div>Main Page Title</div>
  </div>
  <div>
    <!-- Content without semantic meaning -->
  </div>
</div>
```

### Image Optimization
```astro
---
// Use Astro's built-in image optimization
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- ✅ Optimized images with proper alt text -->
<Image
  src={heroImage}
  alt="Industrial valve manufacturing facility showing quality control processes"
  width={1200}
  height={600}
  format="webp"
  quality={85}
  loading="lazy"
  decoding="async"
/>

<!-- For dynamic/external images -->
<img
  src="https://example.com/image.jpg"
  alt="Descriptive alt text that explains the image context"
  width="800"
  height="400"
  loading="lazy"
  decoding="async"
/>
```

### Relume Component SEO Enhancement
```javascript
// When using Relume components, always enhance with SEO elements
export function Services({ services, seoData }) {
  return (
    <section aria-labelledby="services-heading">
      {/* Add proper heading hierarchy */}
      <header>
        <p className="mb-3 font-semibold md:mb-4">{seoData.category}</p>
        <h2 id="services-heading" className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          {seoData.title}
        </h2>
        <p className="md:text-md">{seoData.description}</p>
      </header>

      <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8">
        {services.map((service, index) => (
          <article key={index} className="service-item">
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src={service.image}
                alt={`${service.title} - ${service.description}`}
                className="rounded-image"
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              {service.title}
            </h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

### Structured Data Implementation
```astro
---
// Add structured data for better search engine understanding
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Enserve Engineering Services",
  "url": "https://enserve.co.za",
  "logo": "https://enserve.co.za/logo.png",
  "description": "Complete valve solutions for Africa's industrial sector",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ZA"
  },
  "sameAs": [
    "https://linkedin.com/company/enserve",
    "https://twitter.com/enserve"
  ]
};
---

<!-- JSON-LD structured data -->
<script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
```

### Page Speed Optimization
```astro
---
// Implement proper resource loading
---

<!-- Critical CSS inline -->
<style>
  /* Critical above-the-fold styles */
  .hero { /* ... */ }
</style>

<!-- Non-critical CSS -->
<link rel="preload" href="/styles/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- Preload important assets -->
<link rel="preload" href="/fonts/main-font.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/images/hero.webp" as="image">

<!-- DNS prefetch for external resources -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//d22po4pjz3o32e.cloudfront.net">
```

## File Structure Guidelines

### Recommended Structure
```
src/
├── components/
│   ├── astro/          # Static Astro components
│   │   ├── Header.astro
│   │   └── LogoGrid.astro
│   └── react/          # Interactive React components
│       ├── Navbar.jsx
│       └── ContactForm.jsx
├── pages/
│   └── index.astro     # Main pages (Astro files)
└── react-pages/        # Legacy/imported React components
    └── home/
        └── components/
```

### Page Structure Pattern
```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import { Footer } from '../components/react/footer.jsx';
import Page from '../react-pages/home/index.jsx';

// SEO Metadata
const pageTitle = "Complete Valve Solutions for Africa | Enserve Engineering";
const description = "Leading valve supply, refurbishment, and LDAR services across Africa. Quality engineering solutions for industrial applications with 20+ years expertise.";
const canonicalURL = new URL('/', Astro.site);
const keywords = "valve solutions, industrial valves, LDAR services, valve refurbishment, Africa, engineering";
const ogImage = "/og-home.jpg";

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Enserve Engineering Services",
  "url": "https://enserve.co.za",
  "logo": "https://enserve.co.za/logo.png",
  "description": description,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ZA"
  },
  "sameAs": [
    "https://linkedin.com/company/enserve"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Valve Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Valve Supply",
          "description": "Quality valve supply from leading global manufacturers"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Valve Refurbishment", 
          "description": "Expert refurbishment services to extend valve life"
        }
      }
    ]
  }
};
---

<Layout
  title={pageTitle}
  description={description}
  canonicalURL={canonicalURL}
  keywords={keywords}
  image={ogImage}
  type="website"
  structuredData={structuredData}
>
  <!-- Skip navigation implemented in Layout -->
  <main id="main-content" class="flex flex-col min-h-screen">
    <Page client:visible />
  </main>
  <Footer client:visible />
</Layout>
```

## Client Directives Best Practices

### When to Use Each Directive

**`client:load`** - Immediate hydration on page load
- Navigation menus
- Critical interactive elements above the fold
- Components that affect layout/UX immediately

**`client:visible`** - Hydrate when component enters viewport
- Forms below the fold
- Interactive galleries/carousels
- Feature sections with complex interactions

**`client:idle`** - Hydrate when browser becomes idle
- Footer interactions
- Non-critical features
- Analytics/tracking components

**`client:only="react"`** - Skip SSR, client-side only
- Components with browser-only dependencies
- Third-party widgets that don't SSR well

**No directive** - Static HTML only
- Headers, text sections
- Logo grids, testimonials
- Pure display components

## React Component Guidelines

### Remove Next.js Specific Code
```javascript
// ❌ Remove from React components


// ✅ Standard React component for Astro
import React from "react";
import { Button } from "@relume_io/relume-ui";

export function MyComponent() {
  return (
    <section>
      {/* Component content */}
    </section>
  );
}
```

### Component Props Pattern
```javascript
// React components should accept props for customization
export function Hero({ title, description, image, buttons }) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt="" />
      <div>
        {buttons.map((button, index) => (
          <Button key={index} {...button} />
        ))}
      </div>
    </section>
  );
}
```

### Astro Component Conversion
```astro
---
// src/components/astro/Hero.astro
// Convert static React components to Astro for better performance + SEO

export interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttons?: Array<{title: string, href: string, variant?: string}>;
}

const { title, description, image, imageAlt, buttons = [] } = Astro.props;
---

<section itemscope itemtype="https://schema.org/WebPageElement">
  <div class="container">
    <header>
      <h1 itemprop="headline">{title}</h1>
      <p itemprop="description">{description}</p>
    </header>
    
    <figure>
      <img 
        src={image} 
        alt={imageAlt}
        width="1200"
        height="600"
        loading="eager"
        decoding="sync"
        itemprop="image"
      />
    </figure>
    
    {buttons.length > 0 && (
      <div class="button-group">
        {buttons.map((button) => (
          <a 
            href={button.href}
            class={`btn ${button.variant || 'primary'}`}
            rel={button.href.startsWith('http') ? 'noopener' : undefined}
          >
            {button.title}
          </a>
        ))}
      </div>
    )}
  </div>
</section>

<style>
  /* Component-scoped CSS */
  section {
    padding: 2rem 5%;
  }
  
  h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    line-height: 1.1;
  }
  
  .btn {
    /* Accessible button styles */
    min-height: 44px; /* Touch target size */
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
</style>
```

## Performance Optimization Rules

### JavaScript Bundle Optimization
1. **Minimize hydrated components** - Only hydrate what needs JavaScript
2. **Use appropriate client directives** - Don't use `client:load` for everything
3. **Convert static components** - Move display-only components to Astro
4. **Code split large components** - Use `client:visible` for below-fold content

### CSS and Styling
1. **Use Tailwind consistently** - Maintain design system
2. **Prefer Astro components** for CSS-only animations
3. **Minimize inline styles** in React components
4. **Leverage Astro's scoped styles** when possible

### Core Web Vitals Focus
1. **Largest Contentful Paint (LCP)** - Optimize hero images and critical content
2. **Cumulative Layout Shift (CLS)** - Always specify image dimensions
3. **First Input Delay (FID)** - Minimize JavaScript execution time
4. **Interaction to Next Paint (INP)** - Optimize event handlers

### Image Optimization Rules
```astro
<!-- ✅ Always specify dimensions to prevent layout shift -->
<img src="/image.jpg" alt="Description" width="800" height="600" loading="lazy" />

<!-- ✅ Use Astro's Image component for local images -->
<Image src={localImage} alt="Description" width={800} height={600} />

<!-- ✅ Proper alt text for SEO and accessibility -->
<img src="/valve-system.jpg" alt="Industrial valve system installation showing quality control processes" />

<!-- ❌ Avoid: Generic or empty alt text -->
<img src="/image.jpg" alt="image" />
<img src="/image.jpg" alt="" />

<!-- ✅ Use appropriate loading attributes -->
<img src="/hero.jpg" loading="eager" /> <!-- Above fold -->
<img src="/gallery.jpg" loading="lazy" /> <!-- Below fold -->
```

## Common Patterns

### Navigation Component
```astro
---
// Always interactive, needs immediate hydration
import { Navbar } from "../components/react/Navbar";
---

<Navbar client:load />
```

### Content Sections with Buttons
```astro
---
// Has interactive buttons, but can lazy load
import { ServicesSection } from "../components/react/ServicesSection";
---

<ServicesSection client:visible />
```

### Pure Display Content
```astro
---
// No interactivity, keep as static Astro
import LogoGrid from "../components/astro/LogoGrid.astro";
---

<LogoGrid />
```

## Error Prevention

### Common Mistakes to Avoid
1. **Don't use `client:load` everywhere** - This negates Astro's benefits
2. **Don't forget client directives** - Interactive React components need them
3. **Don't over-convert to Astro** - Keep complex interactive logic in React
4. **Don't use browser APIs** in static components without proper checks

### Debugging Hydration Issues
```astro
<!-- If component doesn't work, check: -->
<!-- 1. Does it need a client directive? -->
<InteractiveComponent client:load />

<!-- 2. Are all dependencies installed? -->
<!-- 3. Is the component exported correctly? -->
<!-- 4. Are there browser-only APIs being used? -->
```

## Migration Strategy

### Converting Existing React-Heavy Sites
1. **Phase 1**: Add client directives to existing structure
2. **Phase 2**: Identify truly static components
3. **Phase 3**: Convert static components to Astro
4. **Phase 4**: Optimize client directive usage

### Performance Measurement
- Measure JavaScript bundle size before/after
- Check Core Web Vitals (LCP, CLS, FID/INP)
- Test on mobile devices and slow connections
- Aim for 60-80% reduction in JavaScript for static-heavy sites
- Use tools: Lighthouse, PageSpeed Insights, WebPageTest
- Monitor search rankings and organic traffic

### Required Assets for SEO
```
public/
├── favicon.svg              # Primary favicon
├── favicon-16x16.png       # 16x16 PNG fallback
├── favicon-32x32.png       # 32x32 PNG fallback  
├── apple-touch-icon.png    # 180x180 for iOS
├── og-default.jpg          # 1200x630 default OG image
├── og-home.jpg             # Page-specific OG images
├── og-about.jpg            # 1200x630 for proper social sharing
└── robots.txt              # Search engine directives
```

### robots.txt Example
```txt
# public/robots.txt
User-agent: *
Allow: /

# Block admin areas
Disallow: /admin/
Disallow: /private/

# Point to sitemap
Sitemap: https://enserve.co.za/sitemap-index.xml
```

## Dependencies and Setup

### Required Packages
```json
{
  "dependencies": {
    "astro": "^latest",
    "@astrojs/react": "^latest",
    "@astrojs/tailwind": "^latest",
    "react": "^18",
    "react-dom": "^18"
  }
}
```

### Astro Config
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static', // or 'server' for SSR
});
```

---

## Quick Reference

**Static Content** → Astro Component (no JS) + SEO optimization
**Interactive Content** → React Component + Client Directive + accessibility
**Critical Interactive** → `client:load` + proper focus management
**Below Fold Interactive** → `client:visible` + performance monitoring
**Non-Critical Interactive** → `client:idle` + progressive enhancement

**SEO Priorities:**
1. **Technical SEO** - Fast loading, mobile-friendly, crawlable
2. **On-Page SEO** - Proper titles, descriptions, headings, alt text
3. **Content SEO** - Relevant, valuable, well-structured content
4. **User Experience** - Fast, accessible, intuitive navigation

Remember: **Astro's superpower is shipping zero JavaScript by default. Only add JS when you need it. Always optimize for both users and search engines.**