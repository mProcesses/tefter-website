# Translation Implementation Guide

## 📋 What's Been Done

✅ **Infrastructure Complete**
- Jekyll Polyglot plugin configured
- 6 languages set up (EN, SR, DE, IT, ES, FR)
- Translation YAML files created for all languages
- Language switcher implemented in header
- SEO hreflang tags configured
- Mobile-responsive language selector

✅ **UI Translations Complete**
- Navigation menus (all 6 languages)
- Buttons and CTAs (all 6 languages)
- Footer text (all 6 languages)
- Common labels (all 6 languages)

✅ **Sample Page Created**
- Serbian home page (`_i18n/sr.md`) - **COMPLETE EXAMPLE**
- Demonstrates how translated pages should look

---

## 📝 How to Complete Translation

### For Each Language, Create These Files:

```
_i18n/
  ├── [lang]/
  │   ├── index.md              (home page)
  │   ├── platform.md
  │   ├── tefter-exchange.md
  │   ├── tefter-apps.md
  │   ├── solutions.md
  │   ├── why-tefter.md
  │   ├── security.md
  │   └── contact.md
```

### Languages Remaining:
- 🇷🇸 **Serbian (sr)** - Home page DONE, 7 more pages needed
- 🇩🇪 **German (de)** - All 8 pages needed
- 🇮🇹 **Italian (it)** - All 8 pages needed
- 🇪🇸 **Spanish (es)** - All 8 pages needed
- 🇫🇷 **French (fr)** - All 8 pages needed

---

## 🚀 Quick Start

### Step 1: Install Plugin

```bash
bundle install
```

If you get certificate errors:
```bash
brew reinstall openssl
bundle install
```

### Step 2: Test Current Setup

```bash
bundle exec jekyll serve
```

Visit:
- English: http://localhost:4000/
- Serbian: http://localhost:4000/sr/ (home page translated!)
- German: http://localhost:4000/de/ (UI only, needs content)

### Step 3: See What Works

✅ Language switcher in header
✅ Navigation translated
✅ Serbian home page fully translated
✅ URLs change per language

---

## 💡 Translation Process

### Option A: Professional Service (Recommended)

1. Export English content from markdown files
2. Send to translation service
3. Receive translations
4. Create `_i18n/[lang]/[page].md` files
5. Test and deploy

**Estimated cost per language**: €800-1,200
**Time**: 1-2 weeks per language

### Option B: Machine + Human Review

1. Use DeepL Pro for initial translation
2. Have native speaker review
3. Refine and adjust
4. Deploy

**Estimated cost per language**: €200-400
**Time**: 3-5 days per language

---

## 📖 Example: Serbian Home Page

Location: `_i18n/sr.md`

This file shows exactly how a translated page should be structured:
- Front matter with title and description
- All HTML and text translated
- Links updated to use `/sr/` prefix
- Same structure as English version

**Use this as template for all other pages!**

---

## 🎯 Recommended Priority

### Week 1: Serbian
1. Platform page (`_i18n/sr/platform.md`)
2. Contact page (`_i18n/sr/contact.md`)
3. Solutions page (`_i18n/sr/solutions.md`)

### Week 2: German
1. Home page (`_i18n/de.md`)
2. Platform page (`_i18n/de/platform.md`)
3. Contact page (`_i18n/de/contact.md`)

### Week 3-4: Italian, Spanish, French
- Same structure for each language
- Can be done in parallel

---

## 📞 Need Translation Help?

Contact these services:
- **DeepL Pro**: https://www.deepl.com/pro
- **Gengo**: https://gengo.com/
- **Serbian specialists**: ProLingua Belgrade, ITP Novi Sad

---

## ✅ Testing Checklist

For each translated page:
- [ ] Visit URL (e.g., `/sr/platform/`)
- [ ] Check all text is translated
- [ ] Verify links work
- [ ] Test language switcher
- [ ] Check mobile responsive
- [ ] Validate SEO tags

---

## 🎉 When Complete

All 6 languages fully functional!
- Better SEO rankings per language
- Reach local markets effectively
- Higher conversion rates
- Competitive advantage

---

Ready to translate? Start with Serbian using the home page example! 🚀

