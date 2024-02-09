// SinglePageTheme 

/* insert pdf document cv */
window.onload = function() {
  if(PDFObject.supportsPDFs){
      console.log("Your browser supports PDFs, now embedding files.");
      const option = {
          height: "30rem",
          width: "100%"
      }
      PDFObject.embed("../SinglePageTheme/singlePageTheme.css","#PDFView1", option);
      PDFObject.embed("../SinglePageTheme/singlePageTheme.js","#PDFView2", option);
      PDFObject.embed("../pages/SinglePageTheme.txt","#PDFView3", option);
  }
  else {
      alert("Your browser does not support PDFs, cannot insert files.");
  }
}
/* low priority data - hide/show employment history if required */
function expand(pdfNum) {
  var pdf = document.getElementById("PDFView" + pdfNum);
  if (pdf.style.display === "flex" ){
      pdf.style.display = "none";
  }
  else {
      pdf.style.display = "flex";
  }
}


// Changing color schemes at set timed intervals such as minute for testing and day for production 

  // Define the color schemes
  const colorSchemes = [ 
    [ 
    {id: 'nav_inline_text', backgroundColor: 'text-bg-success'},
    {id: 'header_container1', backgroundColor: 'text-bg-danger'},
    {id: 'header_container2', backgroundColor: 'text-bg-warning'},
    {id: 'header_container3', backgroundColor: 'text-bg-secondary'},
    {id: 'col1_image_text', backgroundColor: 'bg-info-subtle'},
    {id: 'col2_image_text', backgroundColor: 'bg-success-subtle'},
    {id: 'col3_image_text', backgroundColor: 'bg-info-subtle'},
    {id: 'col4_image_text', backgroundColor: 'bg-success-subtle'},
    {id: 'icons_container1', backgroundColor: 'bg-body-secondary'},
    {id: 'icons_container2', backgroundColor: 'bg-body-tertiary'},
    {id: 'icons_container3', backgroundColor: 'bg-body-secondary'}
    ],
    [      
      {id: 'nav_inline_text', backgroundColor: 'text-bg-danger'},
      {id: 'header_container1', backgroundColor: 'text-bg-dark'},
      {id: 'header_container2', backgroundColor: 'text-bg-info'},
      {id: 'header_container3', backgroundColor: 'text-bg-light'},
      {id: 'col1_image_text', backgroundColor: 'bg-dark-subtle'},
      {id: 'col2_image_text', backgroundColor: 'bg-light'},
      {id: 'col3_image_text', backgroundColor: 'bg-dark-subtle'},
      {id: 'col4_image_text', backgroundColor: 'bg-light'},
      {id: 'icons_container1', backgroundColor: 'bg-body-tertiary'},
      {id: 'icons_container2', backgroundColor: 'bg-body-secondary'},
      {id: 'icons_container3', backgroundColor: 'bg-body-tertiary'} 
    ],
    [ 
          
      {id: 'nav_inline_text', backgroundColor: 'text-bg-warning'},
      {id: 'header_container1', backgroundColor: 'text-bg-success'},
      {id: 'header_container2', backgroundColor: 'text-bg-danger'},
      {id: 'header_container3', backgroundColor: 'text-bg-dark'},
      {id: 'col1_image_text', backgroundColor: 'bg-warning-subtle'},
      {id: 'col2_image_text', backgroundColor: 'bg-dark-subtle'},
      {id: 'col3_image_text', backgroundColor: 'bg-warning-subtle'},
      {id: 'col4_image_text', backgroundColor: 'bg-dark-subtle'},
      {id: 'icons_container1', backgroundColor: 'bg-warning-subtle'},
      {id: 'icons_container2', backgroundColor: 'bg-info-subtle'},
      {id: 'icons_container3', backgroundColor: 'bg-warning-subtle'} 
    ],
  ];


// Function to remove the bootstrap 5 classes from an element that contains bg
// assistance from Bito AI
const removeColorScheme = (elementId) => {
  const element = document.getElementById(elementId);
  console.log("Remove Element id = " + elementId.toString() 
  + " ,element = "+ element );
  if (element && element instanceof HTMLElement && element.classList) {
    const classesToRemove = [...element.classList].filter(className => className.includes('bg'));
    element.classList.remove(...classesToRemove);
  }
};

  // Function to change the color scheme of an element
const addColorScheme = (elementId, backgroundColor) => {
  const element = document.getElementById(elementId);
  console.log("Change Element id = " + elementId.toString()
  + " ,element = "+ element + " ,background colour = "+ backgroundColor);
  if (element) {
    element.classList.add(backgroundColor);
  }
};


// Function to change the color schemes every minute
const updateColorSchemes = () => {
  // Get the current minute
  const currentTime = new Date().getMinutes();

  // Get the current hour
  //const currentTime = new Date().getHours();
  console.log("currentTime = " + currentTime);

  // Calculate the index of the color scheme for 1 minute change
  const colorSchemeIndex = currentTime % colorSchemes.length;
  console.log("ColorScheme length = " + colorSchemes.length);
  console.log("colorScheme index = " + colorSchemeIndex);

  // Get the color scheme array
  const schemeArr = colorSchemes[colorSchemeIndex];
  console.log("scheme = " + schemeArr.toString());


  // Iterate through a color scheme array
  schemeArr.forEach((scheme)=> {
      console.log("scheme id = "+ scheme.id);
      console.log("scheme backgroundColor = "+ scheme.backgroundColor);
      
      // Remove color scheme classes from the current element
      removeColorScheme(scheme.id);

      // Apply color scheme classes to the current element
      addColorScheme(scheme.id, scheme.backgroundColor);
    
  });
};
// Call the updateColorSchemes function initially
updateColorSchemes();

// Call the updateColorSchemes function every minute
setInterval(updateColorSchemes, 60 * 1000);

// Call the updateColorSchemes function every 24 hours
//setInterval(updateColorSchemes, 24 * 60 * 60 * 1000);

// Code kept on server-side as client naturally will not be on the landing page long enough 
// for effect to happen daily. Can consider having it client-side if timed interval set in minutes.