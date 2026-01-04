# Multi-Language Implementation Guide for Tefter Website

## 🌍 Recommended Approach: Jekyll Polyglot Plugin

---

## 📋 Step 1: Install Polyglot Plugin

### Update Gemfile

Add to your `Gemfile`:

```ruby
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-polyglot"
end
```

### Install

```bash
bundle install
```

---

## 📋 Step 2: Configure _config.yml

Add to your `_config.yml`:

```yaml
# Multi-language configuration
languages: ["en", "de", "fr"]  # English, German, French
default_lang: "en"
exclude_from_localization: ["assets", "js", "css"]
parallel_localization: true

# Language names for display
language_names:
  en: "English"
  de: "Deutsch"
  fr: "Français"

# Plugin configuration
plugins:
  - jekyll-feed
  - jekyll-polyglot
```

---

## 📋 Step 3: Create Language Files Structure

### Directory Structure

```
tefter-web/
├── _i18n/
│   ├── en.yml                    # English translations
│   ├── de.yml                    # German translations
│   ├── fr.yml                    # French translations
│   ├── en/                       # English content
│   │   ├── platform.md
│   │   ├── tefter-exchange.md
│   │   ├── tefter-apps.md
│   │   ├── solutions.md
│   │   ├── why-tefter.md
│   │   ├── security.md
│   │   └── contact.md
│   ├── de/                       # German content
│   │   ├── platform.md
│   │   ├── tefter-exchange.md
│   │   └── ...
│   └── fr/                       # French content
│       ├── platform.md
│       └── ...
```

---

## 📋 Step 4: Create Translation Files

### _i18n/en.yml

```yaml
nav:
  home: "Home"
  platform: "Platform"
  tx: "Tefter Exchange (TX)"
  apps: "Tefter Apps"
  solutions: "Solutions"
  why: "Why Tefter"
  security: "Security & Governance"
  contact: "Contact / Demo"

global:
  book_demo: "Book a demo"
  see_how: "See how it works"
  learn_more: "Learn more"
  back_home: "Back to home"
  
footer:
  copyright: "© 2025 Tefter Exchange Platform. All rights reserved."
  
hero:
  tagline: "One platform. Two layers. Any scale."
  
cta:
  book_demo: "Book a demo"
  talk_expert: "Talk to an expert"
```

### _i18n/de.yml

```yaml
nav:
  home: "Startseite"
  platform: "Plattform"
  tx: "Tefter Exchange (TX)"
  apps: "Tefter Apps"
  solutions: "Lösungen"
  why: "Warum Tefter"
  security: "Sicherheit & Governance"
  contact: "Kontakt / Demo"

global:
  book_demo: "Demo buchen"
  see_how: "Wie es funktioniert"
  learn_more: "Mehr erfahren"
  back_home: "Zurück zur Startseite"
  
footer:
  copyright: "© 2025 Tefter Exchange Platform. Alle Rechte vorbehalten."
  
hero:
  tagline: "Eine Plattform. Zwei Schichten. Jede Größe."
  
cta:
  book_demo: "Demo buchen"
  talk_expert: "Mit Experten sprechen"
```

### _i18n/fr.yml

```yaml
nav:
  home: "Accueil"
  platform: "Plateforme"
  tx: "Tefter Exchange (TX)"
  apps: "Applications Tefter"
  solutions: "Solutions"
  why: "Pourquoi Tefter"
  security: "Sécurité et Gouvernance"
  contact: "Contact / Démo"

global:
  book_demo: "Réserver une démo"
  see_how: "Comment ça marche"
  learn_more: "En savoir plus"
  back_home: "Retour à l'accueil"
  
footer:
  copyright: "© 2025 Tefter Exchange Platform. Tous droits réservés."
  
hero:
  tagline: "Une plateforme. Deux couches. Toute échelle."
  
cta:
  book_demo: "Réserver une démo"
  talk_expert: "Parler à un expert"
```

---

## 📋 Step 5: Update Layout with Language Switcher

### _layouts/default.html

```html
<!DOCTYPE html>
<html lang="{{ site.active_lang }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
  <meta name="format-detection" content="telephone=no">
  <title>{{ page.title }} | {{ site.title }}</title>
  <meta name="description" content="{{ page.description | default: site.description }}">
  
  <!-- hreflang tags for SEO -->
  {% for lang in site.languages %}
    <link rel="alternate" hreflang="{{ lang }}" href="{{ site.url }}{% if lang != site.default_lang %}/{{ lang }}{% endif %}{{ page.url }}" />
  {% endfor %}
  
  <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
</head>
<body>
  <header class="site-header">
    <div class="wrapper">
      <a class="site-title" href="{{ '/' | relative_url }}">Tefter</a>
      
      <!-- Language Switcher -->
      <div class="language-switcher">
        {% for lang in site.languages %}
          {% if lang == site.active_lang %}
            <span class="lang-active">{{ site.language_names[lang] }}</span>
          {% else %}
            <a href="{% if lang == site.default_lang %}/{% else %}/{{ lang }}/{% endif %}{{ page.url }}" class="lang-link">
              {{ site.language_names[lang] }}
            </a>
          {% endif %}
        {% endfor %}
      </div>
      
      <nav class="site-nav">
        <input type="checkbox" id="nav-trigger" class="nav-trigger" />
        <label for="nav-trigger">
          <span class="menu-icon">
            <svg viewBox="0 0 18 15" width="18px" height="15px">
              <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.484C18,14.305,17.335,15,16.516,15H1.484 C0.665,15,0,14.305,0,13.484l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.484L18,13.484z"/>
            </svg>
          </span>
        </label>
        <div class="trigger">
          <a class="page-link" href="{{ '/' | relative_url }}">{% t nav.home %}</a>
          <a class="page-link" href="{{ '/platform/' | relative_url }}">{% t nav.platform %}</a>
          <a class="page-link" href="{{ '/tefter-exchange/' | relative_url }}">{% t nav.tx %}</a>
          <a class="page-link" href="{{ '/tefter-apps/' | relative_url }}">{% t nav.apps %}</a>
          <a class="page-link" href="{{ '/solutions/' | relative_url }}">{% t nav.solutions %}</a>
          <a class="page-link" href="{{ '/why-tefter/' | relative_url }}">{% t nav.why %}</a>
          <a class="page-link" href="{{ '/security/' | relative_url }}">{% t nav.security %}</a>
          <a class="page-link cta" href="{{ '/contact/' | relative_url }}">{% t nav.contact %}</a>
        </div>
      </nav>
    </div>
  </header>

  <main class="page-content" aria-label="Content">
    {{ content }}
  </main>

  <footer class="site-footer">
    <div class="wrapper">
      <p>{% t footer.copyright %}</p>
    </div>
  </footer>
  <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
</body>
</html>
```

---

## 📋 Step 6: Add Language Switcher CSS

### assets/css/style.css

Add this to your CSS file:

```css
/* Language Switcher */
.language-switcher {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  margin-right: 20px;
}

.lang-link {
  color: #424242;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.lang-link:hover {
  background-color: #f5f5f5;
  color: #0066cc;
}

.lang-active {
  color: #0066cc;
  font-weight: 700;
  padding: 5px 10px;
  font-size: 14px;
}

/* Mobile Language Switcher */
@media screen and (max-width: 768px) {
  .language-switcher {
    order: -1;
    margin-left: 0;
    margin-right: auto;
  }
  
  .site-header .wrapper {
    flex-wrap: nowrap;
  }
}
```

---

## 📋 Step 7: Move Content to _i18n Folders

### Example: _i18n/en/platform.md

```markdown
---
layout: page
title: Platform
permalink: /platform/
description: A Platform for Operations and Exchange — Built for Enterprise Reliability
---

<section class="section">
  <div class="wrapper section-center">
    <h1 class="section-title">A Platform for Operations and Exchange — Built for Enterprise Reliability</h1>
    <p class="section-copy">
      Tefter's two-layer architecture ensures your business runs uninterrupted...
    </p>
  </div>
</section>
<!-- Rest of content -->
```

### Example: _i18n/de/platform.md

```markdown
---
layout: page
title: Plattform
permalink: /platform/
description: Eine Plattform für Betrieb und Austausch — Gebaut für Enterprise-Zuverlässigkeit
---

<section class="section">
  <div class="wrapper section-center">
    <h1 class="section-title">Eine Plattform für Betrieb und Austausch — Gebaut für Enterprise-Zuverlässigkeit</h1>
    <p class="section-copy">
      Die zweischichtige Architektur von Tefter stellt sicher, dass Ihr Geschäft ununterbrochen läuft...
    </p>
  </div>
</section>
<!-- Rest of content in German -->
```

---

## 📋 Step 8: Using Translations in Content

### In Markdown Files

```markdown
## {% t global.book_demo %}

<a href="/contact/" class="btn btn-primary">{% t cta.book_demo %}</a>
```

### In Layouts

```html
<p>{% t hero.tagline %}</p>
<a href="/contact/">{% t global.book_demo %}</a>
```

---

## 🔍 Step 9: URL Structure

After implementation, your URLs will be:

**English (default)**
- `https://tefter.com/`
- `https://tefter.com/platform/`
- `https://tefter.com/tefter-exchange/`

**German**
- `https://tefter.com/de/`
- `https://tefter.com/de/platform/`
- `https://tefter.com/de/tefter-exchange/`

**French**
- `https://tefter.com/fr/`
- `https://tefter.com/fr/platform/`
- `https://tefter.com/fr/tefter-exchange/`

---

## 🚀 Step 10: Build and Test

### Build site

```bash
bundle exec jekyll serve
```

### Test language switching

1. Navigate to `http://localhost:4000` (English)
2. Click language switcher to switch to German: `http://localhost:4000/de/`
3. Click language switcher to switch to French: `http://localhost:4000/fr/`

---

## 🎯 Best Practices

### 1. **Translation Quality**
- ✅ Use professional translation services for business content
- ✅ Don't rely solely on machine translation
- ✅ Have native speakers review

### 2. **SEO Optimization**
- ✅ Use hreflang tags (included in layout above)
- ✅ Translate meta descriptions
- ✅ Translate page titles
- ✅ Keep URL structure consistent

### 3. **Content Parity**
- ✅ Keep all language versions up to date
- ✅ Maintain same structure across languages
- ✅ Update all versions when adding new content

### 4. **User Experience**
- ✅ Language switcher visible on all pages
- ✅ Remember user's language preference (with cookies)
- ✅ Auto-detect browser language (optional)

---

## 🌟 Alternative: Simpler Manual Approach

If you want a simpler approach without plugins:

### Directory Structure

```
tefter-web/
├── en/
│   ├── index.html
│   ├── platform.html
│   └── ...
├── de/
│   ├── index.html
│   ├── platform.html
│   └── ...
├── fr/
│   ├── index.html
│   └── ...
```

### Pros
- ✅ Simple, no plugins needed
- ✅ Full control over URLs
- ✅ Easy to understand

### Cons
- ❌ Manual duplication
- ❌ No automatic fallbacks
- ❌ More maintenance overhead

---

## 📊 Which Languages to Support?

Based on your target markets:

### Priority 1 (EU Markets)
- 🇬🇧 **English** - Default, international business language
- 🇩🇪 **German** - Large market, hosted in Brussels (close proximity)
- 🇫🇷 **French** - Brussels official language, Belgium market

### Priority 2 (Expansion)
- 🇪🇸 **Spanish** - Growing market
- 🇮🇹 **Italian** - European market
- 🇳🇱 **Dutch** - Belgium market (Flemish)

### Consider Later
- 🇵🇱 **Polish** - Eastern European expansion
- 🇵🇹 **Portuguese** - Iberian market

---

## 💡 Translation Services Recommendations

### Professional Translation
1. **DeepL Pro** - Best for European languages
2. **Lokalise** - Translation management platform
3. **Smartling** - Enterprise translation management
4. **Gengo** - Human translators

### Translation Memory
- Store translations in translation memory system
- Reuse common phrases across pages
- Maintain consistency

---

## 🔧 Maintenance Workflow

### When adding new content:

1. Write content in English (default)
2. Extract translatable strings to YAML files
3. Send to translators
4. Add translated content to respective language folders
5. Test all language versions
6. Deploy

### Use Version Control
- Tag releases by language
- Track translation status
- Maintain translation changelog

---

## 🎉 Benefits of Multi-Language

### Business Benefits
- 📈 Reach broader European market
- 🎯 Better local SEO rankings
- 💼 Improve conversion rates (native language trust)
- 🌍 Competitive advantage in local markets

### SEO Benefits
- 🔍 Rank for local search terms
- 🌐 Separate rankings per language
- 📊 Better user engagement metrics
- 🚀 Reduced bounce rate (users find content in their language)

---

## ⚠️ Common Pitfalls to Avoid

1. **Don't mix languages on same page** - Keep each page in one language
2. **Don't forget meta tags** - Translate all meta descriptions
3. **Don't use flags alone** - Use language names (EN, DE, FR)
4. **Don't auto-redirect** - Let users choose their language
5. **Don't forget mobile** - Language switcher must work on mobile

---

## 📝 Next Steps

1. ✅ Decide which languages to support
2. ✅ Install and configure Polyglot plugin
3. ✅ Create translation YAML files
4. ✅ Move content to _i18n folders
5. ✅ Update layout with language switcher
6. ✅ Get professional translations
7. ✅ Test thoroughly
8. ✅ Deploy

---

## 🚀 Estimated Timeline

- **Setup & Configuration**: 2-4 hours
- **Content Migration**: 1-2 days
- **Translation** (per language): 1-2 weeks (depending on service)
- **Testing & QA**: 1-2 days
- **Total**: 2-3 weeks per additional language

---

## 💰 Estimated Costs

- **Plugin**: Free (Jekyll Polyglot)
- **Translation** (per language):
  - Website content (~10,000 words): €500-1,000
  - Professional review: €200-400
  - Maintenance: €100-200/month
  
**Total per language**: €800-1,600 initial + ongoing maintenance

---

## 📚 Resources

- [Jekyll Polyglot Documentation](https://github.com/untra/polyglot)
- [Jekyll Multiple Languages Guide](https://jekyllrb.com/docs/step-by-step/10-multilingual/)
- [Google Multi-Regional and Multilingual Sites](https://developers.google.com/search/docs/specialty/international)
- [hreflang Best Practices](https://support.google.com/webmasters/answer/189077)

---

## ✅ Summary

**Recommended**: Use Jekyll Polyglot plugin for clean, maintainable multi-language support.

**Quick Start**:
1. Add `gem "jekyll-polyglot"` to Gemfile
2. Configure languages in _config.yml
3. Create _i18n folder structure
4. Add translation files
5. Update layout with language switcher

Your Tefter website will be **ready for global markets!** 🌍✨

