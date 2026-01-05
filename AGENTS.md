# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
bundle install              # Install dependencies
bundle exec jekyll serve    # Local dev server at http://localhost:4000
bundle exec jekyll build    # Production build to _site/
```

## Project Structure

```
/
├── _config.yml              # Jekyll + polyglot configuration
├── _layouts/                # HTML templates (default.html, page.html)
├── _plugins/polyglot.rb     # Custom translation tag {% t key %}
├── _i18n/                   # Translation YAML files (en.yml, sr.yml, etc.)
├── assets/
│   ├── css/style.css        # All styles (1100+ lines)
│   └── js/main.js           # Language switcher, mobile UI
├── docs/                    # Developer documentation (excluded from build)
└── *.markdown               # Content pages (paired: file.markdown + file.sr.markdown)
```

## Multi-Language System

**Current languages:** English (default), Serbian (`/sr/`)

**Translation files:** `_i18n/{lang}.yml`

**Usage in templates:**
```liquid
{% t nav.home %}                              # Simple key
{% t footer.copyright year=site.time | date: "%Y" %}  # With variable
```

**Content file naming:**
- Default language: `page.markdown`
- Other languages: `page.{lang}.markdown` (e.g., `page.sr.markdown`)

**Required front matter:**
```yaml
---
layout: default
lang: en          # Language code
page_id: home     # Unique page identifier (same across translations)
permalink: /      # URL path
title: Page Title
description: SEO description
---
```

## Adding Translations

1. Add UI strings to `_i18n/en.yml` with nested keys
2. Add same keys to `_i18n/sr.yml` (and other language files)
3. Use `{% t key.subkey %}` in templates/content

## Adding New Pages

1. Create `newpage.markdown` with required front matter
2. Create `newpage.sr.markdown` with `lang: sr` and matching `page_id`
3. Add navigation link in `_layouts/default.html`
4. Add translation keys for new content

## CSS Patterns

- Responsive breakpoints: 1024px, 900px, 768px, 480px
- Classes: `.wrapper` (max 1200px), `.section`, `.card-grid`, `.btn-primary`/`.btn-secondary`
- Fixed header with glass-morphism effect
- Mobile hamburger menu (CSS-only, checkbox-based)

## Content Patterns

```html
<section class="section">
  <div class="wrapper">
    <h2 class="section-title">{% t page.section_title %}</h2>
    <div class="card-grid">
      <div class="card">...</div>
    </div>
  </div>
</section>
```

## Important Notes

- `_config.yml` changes require server restart
- Assets excluded from localization (shared across languages)
- `docs/` directory excluded from build
- hreflang tags auto-generated for SEO

## Commit & Pull Request Guidelines
- Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`).
- PRs include: purpose, linked issues, how to test (commands), config/secrets changes, and ensure lint/tests pass.
- For commit standards, see [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
- Always split up the commits into multiple small commits
- Keep the git commit in one line, no more that 120 characters
- Keep the PR descriptions short, and concise. Have one paragraph explaining what changed and why
