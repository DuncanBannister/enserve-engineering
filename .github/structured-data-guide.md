# Structured Data Implementation Guide

## What is Structured Data?

Structured data is code that you add to your website to help search engines understand your content better. It uses a standardized vocabulary (Schema.org) to describe things like businesses, products, services, articles, etc.

## Why Use Structured Data?

1. **Rich Snippets** - Enhanced search results with ratings, prices, images
2. **Better Understanding** - Search engines understand your content context
3. **Voice Search** - Better compatibility with Alexa, Google Assistant
4. **Knowledge Panels** - Your business info in Google's knowledge panel
5. **SEO Benefits** - Improved click-through rates and visibility

## Search Results Enhancement Example

```
🔍 Enserve Engineering Services
⭐⭐⭐⭐⭐ 4.8 (Reviews) • Industrial Services
📍 Johannesburg, Gauteng
📞 +27-11-xxx-xxxx • Open now
Complete valve solutions for Africa's industrial sector
Services: Valve Supply • LDAR • Refurbishment
```

## Implementation in Astro + Layout Structure

### 1. Organization Schema (Homepage)

```javascript
// src/pages/index.astro
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Enserve Engineering Services",
  "url": "https://enserve.co.za",
  "logo": "https://enserve.co.za/logo.png",
  "description": "Leading valve solutions provider in Africa",
  "foundingDate": "2000",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ZA",
    "addressLocality": "Johannesburg",
    "addressRegion": "Gauteng"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+27-11-xxx-xxxx",
    "contactType": "Customer Service",
    "availableLanguage": ["English", "Afrikaans"]
  },
  "sameAs": [
    "https://linkedin.com/company/enserve",
    "https://twitter.com/enserve"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog", 
    "name": "Industrial Valve Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Valve Supply",
          "description": "Quality valve supply from leading manufacturers",
          "provider": {
            "@type": "Organization",
            "name": "Enserve Engineering"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "LDAR Services",
          "description": "Leak Detection and Repair using E-Soft software"
        }
      }
    ]
  }
};
```

### 2. Service Schema (Services Page)

```javascript
// src/pages/services.astro
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Industrial Valve Solutions",
  "description": "Comprehensive valve supply, refurbishment and maintenance services",
  "provider": {
    "@type": "Organization",
    "name": "Enserve Engineering Services",
    "url": "https://enserve.co.za"
  },
  "areaServed": {
    "@type": "Country",
    "name": "South Africa"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Valve Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Valve Supply",
        "description": "Quality valve supply from global manufacturers"
      },
      {
        "@type": "Service", 
        "name": "Valve Refurbishment",
        "description": "Expert refurbishment to extend valve life"
      }
    ]
  }
};
```

### 3. Article Schema (Blog Posts)

```javascript
// src/pages/blog/valve-maintenance-guide.astro
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to Industrial Valve Maintenance",
  "description": "Learn best practices for maintaining industrial valves",
  "image": "https://enserve.co.za/blog/valve-maintenance.jpg",
  "author": {
    "@type": "Organization",
    "name": "Enserve Engineering"
  },
  "publisher": {
    "@type": "Organization", 
    "name": "Enserve Engineering",
    "logo": {
      "@type": "ImageObject",
      "url": "https://enserve.co.za/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-20",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://enserve.co.za/blog/valve-maintenance-guide"
  }
};
```

### 4. FAQ Schema (FAQ Page)

```javascript
// src/pages/faq.astro
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of valves do you supply?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We supply ball valves, gate valves, globe valves, butterfly valves, and check valves from leading manufacturers for industrial applications."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer valve refurbishment services?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Yes, we provide comprehensive valve refurbishment services to extend the life of your valves and reduce replacement costs."
      }
    },
    {
      "@type": "Question",
      "name": "What is LDAR and do you provide these services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LDAR stands for Leak Detection and Repair. We provide advanced LDAR solutions using E-Soft software for accurate detection and regulatory compliance."
      }
    }
  ]
};
```

### 5. Local Business Schema (Contact Page)

```javascript
// src/pages/contact.astro
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Enserve Engineering Services",
  "image": "https://enserve.co.za/office-photo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Industrial Road",
    "addressLocality": "Johannesburg", 
    "addressRegion": "Gauteng",
    "postalCode": "2000",
    "addressCountry": "ZA"
  },
  "telephone": "+27-11-xxx-xxxx",
  "email": "info@enserve.co.za",
  "url": "https://enserve.co.za",
  "openingHours": [
    "Mo-Fr 08:00-17:00"
  ],
  "priceRange": "$$",
  "description": "Professional industrial valve solutions and engineering services",
  "hasMap": "https://maps.google.com/your-business-location"
};
```

## How to Use in Your Pages

```astro
---
// Any page (e.g., src/pages/about.astro)
import Layout from '../layouts/Layout.astro';

// Define your structured data
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Enserve Engineering",
  // ... your schema data
};
---

<Layout
  title="About Enserve Engineering | Industrial Solutions"
  description="Learn about our 20+ years of valve engineering expertise"
  canonicalURL={new URL('/about', Astro.site)}
  structuredData={aboutSchema}
>
  <!-- Your page content -->
</Layout>
```

## Layout Implementation

Your `Layout.astro` should include this in the `<head>`:

```astro
<!-- Structured Data Injection -->
{structuredData && (
  <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
)}
```

## Common Schema Types for Industrial/Engineering

### Essential Schemas
- **Organization** - Company info, services, contact
- **Service** - Individual service offerings  
- **LocalBusiness** - Physical location, hours, contact

### Content Schemas
- **Article** - Blog posts, case studies, guides
- **FAQPage** - Common customer questions
- **WebPage** - General page information

### Advanced Schemas
- **Review/AggregateRating** - Customer testimonials
- **Event** - Webinars, conferences, training
- **JobPosting** - Career opportunities
- **Product** - If selling physical products

## Testing Your Structured Data

### 1. Google's Rich Results Test
- URL: `https://search.google.com/test/rich-results`
- Enter your page URL to see what Google understands
- Check for errors and warnings

### 2. Schema Markup Validator
- URL: `https://validator.schema.org/`
- Paste your JSON-LD code to validate syntax
- Ensures proper Schema.org compliance

### 3. Google Search Console
- Monitor "Enhancements" section
- Track rich results performance
- View structured data errors

## Implementation Strategy

### Phase 1: Essential (Week 1)
```markdown
- [ ] Organization schema on homepage
- [ ] LocalBusiness schema on contact page
- [ ] Service schema on main services page
```

### Phase 2: Content (Week 2-3)
```markdown  
- [ ] Article schema for blog posts
- [ ] FAQPage schema for FAQ section
- [ ] WebPage schema for key pages
```

### Phase 3: Advanced (Month 2)
```markdown
- [ ] Review schema for testimonials
- [ ] Event schema for webinars/events
- [ ] JobPosting schema for careers
```

## Expected Benefits Timeline

### Short Term (1-3 months)
- Enhanced search result appearance
- Better click-through rates
- More accurate business info in search
- Improved local search visibility

### Long Term (6-12 months)  
- Higher search rankings
- Voice search compatibility
- Knowledge panel appearances
- Featured snippets opportunities
- Increased organic traffic

## Monitoring and Maintenance

### Weekly Checks
- Google Search Console for errors
- Rich results performance metrics
- Click-through rate improvements

### Monthly Reviews
- Update structured data with new services
- Add schema to new content/pages
- Test new implementations

### Quarterly Audits
- Full site schema review
- Competitor analysis
- Schema trends and updates

## Quick Reference Schema Templates

### Basic Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization", 
  "name": "Your Company Name",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "description": "Brief company description"
}
```

### Basic Service
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Service Name",
  "description": "Service description",
  "provider": {
    "@type": "Organization",
    "name": "Your Company"
  }
}
```

### Basic Article  
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Organization", 
    "name": "Your Company"
  },
  "datePublished": "2024-01-15"
}
```

---

## Pro Tips

1. **Start Simple** - Begin with Organization schema, then expand
2. **Be Specific** - More detailed schemas perform better
3. **Stay Accurate** - Only include truthful, verifiable information
4. **Test Everything** - Always validate before publishing
5. **Monitor Performance** - Track improvements in Search Console
6. **Update Regularly** - Keep schemas current with business changes

Remember: Structured data is about helping search engines understand your content better, leading to enhanced visibility and better user experiences in search results.