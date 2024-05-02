
function slidePage(pageName) {
    const pageContainer = document.getElementById('slider-page-container');
    
    pageContainer.classList.add('slide-left');
    
    fetch(pageName)
      .then(response => response.text())
      .then(data => {
        
        setTimeout(() => {
            pageContainer.innerHTML = data;
            pageContainer.classList.remove('slide-left');
            pageContainer.classList.add('slide-right');
            
            // Set a timeout to remove the slide-right class after the slide-in animation completes
            setTimeout(() => {
              pageContainer.classList.remove('slide-right');
            }, 1000); // Adjust the timing to match the transition duration in CSS
          }, 1000); // Adjust the timing to match the transition duration in CSS
        })
      .catch(error => console.error('Error loading page:', error));
  }