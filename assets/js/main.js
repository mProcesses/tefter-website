// Table scroll indicator handler
document.addEventListener('DOMContentLoaded', function() {
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

    const normalizePath = (p) => {
      if (!p || p === '') return '/';
      return p.startsWith('/') ? p : `/${p}`;
    };

    const stripLangPrefix = (p, lang) => {
      const prefix = `/${lang}`;
      if (p === prefix) return '/';
      if (p.startsWith(`${prefix}/`)) return p.slice(prefix.length) || '/';
      return p;
    };

    langLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetLang = link.dataset.lang;
        if (!targetLang) return;

        e.preventDefault();

        // Path relative to baseurl
        let path = window.location.pathname || '/';
        if (baseurl && path.startsWith(baseurl)) {
          path = path.slice(baseurl.length) || '/';
        }
        path = normalizePath(path);

        // Remove any non-default language prefix from current path (e.g. /sr/...)
        const languages = Array.from(langLinks).map(l => l.dataset.lang).filter(Boolean);
        languages.forEach((l) => {
          if (l && l !== defaultLang) {
            path = stripLangPrefix(path, l);
          }
        });

        // Build target path
        let targetPath = path;
        if (targetLang !== defaultLang) {
          targetPath = normalizePath(`/${targetLang}${path === '/' ? '/' : path}`);
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

