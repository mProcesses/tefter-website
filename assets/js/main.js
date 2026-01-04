// Table scroll indicator handler
document.addEventListener('DOMContentLoaded', function() {
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
});

