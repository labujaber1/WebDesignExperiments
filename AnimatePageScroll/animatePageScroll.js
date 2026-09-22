const pages = document.querySelectorAll('.section');
  const totalPages = pages.length;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / scrollHeight; // 0 to 1

    // Identify pages involved
    const exactPage = scrollProgress * totalPages;
    const currentPageIndex = Math.floor(exactPage);
    const nextPageIndex = Math.min(currentPageIndex + 1, totalPages - 1);
    
    // Loop pages and set opacity
    pages.forEach((page, index) => {
      if (index === currentPageIndex) {
        // Show current page
        page.style.opacity = 1;
      } else if (index === nextPageIndex) {
        // Remove next page
        page.style.opacity = 0;
      } else {
        // Other pages hidden just in case
        page.style.opacity = 0;
      }
    });
  });

  // Initialize
  window.dispatchEvent(new Event('scroll'));