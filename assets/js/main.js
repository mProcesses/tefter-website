function tefterNormalizePath(p) {
  if (!p || p === '') return '/';
  return p.startsWith('/') ? p : `/${p}`;
}

function tefterStripLangPrefix(p, lang) {
  const prefix = `/${lang}`;
  if (p === prefix) return '/';
  if (p.startsWith(`${prefix}/`)) return p.slice(prefix.length) || '/';
  return p;
}

function tefterBuildTargetPath({ baseurl, defaultLang, targetLang, currentPath, languages }) {
  let path = currentPath || '/';
  if (baseurl && path.startsWith(baseurl)) {
    path = path.slice(baseurl.length) || '/';
  }
  path = tefterNormalizePath(path);

  (languages || []).forEach((l) => {
    if (l && l !== defaultLang) path = tefterStripLangPrefix(path, l);
  });

  let targetPath = path;
  if (targetLang !== defaultLang) {
    targetPath = tefterNormalizePath(`/${targetLang}${path === '/' ? '/' : path}`);
  }
  return `${baseurl || ''}${targetPath}`.replace(/\/{2,}/g, '/');
}

function tefterDetectPreferredLang({ languages, defaultLang, navigatorLanguages }) {
  const langs = Array.isArray(languages) ? languages : [];
  const navLangs = Array.isArray(navigatorLanguages) ? navigatorLanguages : [];

  // Serbian first-pass: 'sr', 'sr-RS', etc.
  const wantsSr = navLangs.some((l) => typeof l === 'string' && l.toLowerCase().startsWith('sr'));
  if (wantsSr && langs.includes('sr')) return 'sr';

  return defaultLang;
}

function tefterGetStoredLang() {
  try {
    return window.localStorage.getItem('tefter_preferred_lang');
  } catch {
    return null;
  }
}

function tefterSetStoredLang(lang) {
  try {
    window.localStorage.setItem('tefter_preferred_lang', lang);
  } catch {
    // ignore
  }
}

// Table scroll indicator handler
if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', function() {
  // Ensure fixed header doesn't cover content by setting a CSS var based on actual height
  const header = document.querySelector('.site-header');
  const setHeaderHeightVar = () => {
    if (!header) return;
    document.documentElement.style.setProperty('--site-header-height', `${header.offsetHeight}px`);
  };
  setHeaderHeightVar();
  window.addEventListener('resize', setHeaderHeightVar);

  const tableContainers = document.querySelectorAll('.table-scroll-container');
  
  tableContainers.forEach(container => {
    container.addEventListener('scroll', function() {
      if (this.scrollLeft > 10) {
        this.classList.add('scrolled');
      } else {
        this.classList.remove('scrolled');
      }
    });
  });
  
  // Language dropdown toggle for mobile/touch devices
  const languageDropdown = document.querySelector('.language-dropdown');
  const languageBtn = document.querySelector('.language-dropdown-btn');
  const languageContent = document.querySelector('.language-dropdown-content');
  
  if (languageBtn && languageContent) {
    let isOpen = false;
    
    // Toggle dropdown on button click
    languageBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      isOpen = !isOpen;
      languageContent.style.display = isOpen ? 'block' : 'none';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (languageDropdown && !languageDropdown.contains(e.target)) {
        isOpen = false;
        languageContent.style.display = 'none';
      }
    });
    
    // Prevent dropdown from closing when clicking inside
    languageContent.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // Language navigation (robust across polyglot URL rewriting)
  const langLinks = document.querySelectorAll('.language-option[data-lang]');
  if (langLinks.length > 0) {
    const baseurl = (document.body && document.body.dataset && document.body.dataset.baseurl) ? document.body.dataset.baseurl : '';
    const defaultLang = (document.body && document.body.dataset && document.body.dataset.defaultLang) ? document.body.dataset.defaultLang : 'en';

    const languages = Array.from(langLinks).map(l => l.dataset.lang).filter(Boolean);
    const storedLang = tefterGetStoredLang();
    const preferredLang = (storedLang && languages.includes(storedLang))
      ? storedLang
      : tefterDetectPreferredLang({
          languages,
          defaultLang,
          navigatorLanguages: (typeof navigator !== 'undefined' ? (navigator.languages || [navigator.language]) : [])
        });

    // Auto-select language (only redirects if we are not already on preferred language)
    if (preferredLang && preferredLang !== defaultLang) {
      let currentPath = window.location.pathname || '/';
      const currentPathRel = (baseurl && currentPath.startsWith(baseurl)) ? (currentPath.slice(baseurl.length) || '/') : currentPath;
      const isAlreadyPreferred = currentPathRel === `/${preferredLang}` || currentPathRel.startsWith(`/${preferredLang}/`);

      if (!isAlreadyPreferred) {
        const query = window.location.search || '';
        const hash = window.location.hash || '';
        const finalPath = tefterBuildTargetPath({
          baseurl,
          defaultLang,
          targetLang: preferredLang,
          currentPath: window.location.pathname || '/',
          languages
        });
        window.location.replace(`${finalPath}${query}${hash}`);
        return;
      }
    }

    langLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetLang = link.dataset.lang;
        if (!targetLang) return;

        e.preventDefault();
        tefterSetStoredLang(targetLang);

        // Path relative to baseurl
        let path = window.location.pathname || '/';
        if (baseurl && path.startsWith(baseurl)) {
          path = path.slice(baseurl.length) || '/';
        }
        path = tefterNormalizePath(path);

        // Remove any non-default language prefix from current path (e.g. /sr/...)
        languages.forEach((l) => {
          if (l && l !== defaultLang) path = tefterStripLangPrefix(path, l);
        });

        // Build target path
        let targetPath = path;
        if (targetLang !== defaultLang) {
          targetPath = tefterNormalizePath(`/${targetLang}${path === '/' ? '/' : path}`);
        }

        // Navigate (preserve origin; keep query/hash)
        const query = window.location.search || '';
        const hash = window.location.hash || '';
        const finalPath = `${baseurl || ''}${targetPath}`.replace(/\/{2,}/g, '/');
        window.location.assign(`${finalPath}${query}${hash}`);
      });
    });
  }
});

// Support simple Node-based tests without a DOM
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    tefterNormalizePath,
    tefterStripLangPrefix,
    tefterBuildTargetPath,
    tefterDetectPreferredLang
  };
}

