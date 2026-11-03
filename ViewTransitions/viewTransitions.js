// no code yet

//load headers and footers
/*async function loadIncludes() {
    try {
        const headerResponse = await fetch('../viewTransitions/VT-header.html');
        const footerResponse = await fetch('../viewTransitions/VT-footer.html');
        
        if (headerResponse.ok) {
            document.getElementById('header').innerHTML = await headerResponse.text();
        }
        
        if (footerResponse.ok) {
            document.getElementById('footer').innerHTML = await footerResponse.text();             
        }
                    
    } catch (error) {
        console.error('Error loading includes:', error);
    }
} 
        
// Load includes when page is ready
document.addEventListener('DOMContentLoaded', loadIncludes);*/

async function loadHeaderFooter() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    fetch('../viewTransitions/VT-header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok retrieving header');
        }
        return response.text();
    })
    .then(html => {
        //add header to innerHTML using a slide in view transition from display:none;
        header.innerHTML = html;
       
        
    })
    .catch(error => {
        header.innerHTML = '<p>Error loading header</p>';
        console.error('Error loading header:', error);
    });
    fetch('../viewTransitions/VT-footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok retrieving footer');
        }
        return response.text();
    })
    .then(html => {
        footer.innerHTML = html;
    })
    .catch(error => {
        footer.innerHTML = '<p>Error loading footer</p>';
        console.error('Error loading footer:', error);
    });
}
document.addEventListener('DOMContentLoaded', loadHeaderFooter);
   
