const container = document.getElementById('scrollContainer');

  const sections = [
    document.getElementById('section1'),
    document.getElementById('section2'),
    document.getElementById('section3')
  ];

  // Function to update visibility when scrolled section reaches top
  // opacity = 1 when 
  function updateSections() {
    const scrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    sections.forEach((section, index) => {
      // Calculate section's position in scroll
      const sectionTop = index * containerHeight;
      const distance = Math.abs(scrollTop - sectionTop);
      // Set opacity based on distance
      // Sections in view have opacity close to 1
      // Sections further away fade out
      const opacity = Math.max(1 - distance / containerHeight, 0);
      
      section.style.opacity = opacity;
      //console.log('index = ', index, ', scrollTop = ', scrollTop, ', containerHeight = ', containerHeight, ', sectionTop = ', sectionTop);
      //console.log('index = ', index, ', distance = ', distance, ', opacity = ', opacity);
      
    });
  }

  // Overlap sections and come into view on scroll
  function sectionsOverlap() {

  }
  // Initialize
  updateSections();

  // Add scroll event
  container.addEventListener('scroll', () => {
    requestAnimationFrame(updateSections);
  });