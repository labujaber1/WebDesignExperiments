// Carousels
/* insert pdf document cv */
window.onload = function() {
  if(PDFObject.supportsPDFs){
      console.log("Your browser supports PDFs, now embedding files.");
      const option = {
          height: "30rem",
          width: "100%"
      }
      PDFObject.embed("./Carousels/carousels.css","#PDFView1", option);
      PDFObject.embed("./Carousels/carousels.js","#PDFView2", option);
      PDFObject.embed("./pages/Carousels.html","#PDFView3", option);
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


/* search image folder and save files to json file */
/* Add text data such as heading, description in json file for each image file */


// Function to get file names and paths for images in a folder and save to a JSON file
/*const getImageFiles = (folderPath,jsonFile) => {
    
    // create module file to get file list return array
    // Read the contents of the specified folder
    const fs = require("fs");
    const files = fs.readdirSync(folderPath);
  
    // Filter the files to only include images
    const imageFiles = files.filter((file) => {
      const extension = file.split(".").pop();
      return ["jpg", "jpeg", "png", "gif"].includes(extension);
    });
  
    // Create an array to store the file names and paths
    const imageData = [];
  
    // Iterate over the image files and add their names and paths to the array
    imageFiles.forEach((file) => {
      imageData.push({
        name: file,
        path: `${folderPath}/${file}`,
      });
    });
  
    const dataFile = jsonFile;

    // Check if the JSON file exists
    if (fs.existsSync(dataFile)) {
      // If the file exists, read its contents
      const existingData = JSON.parse(fs.readFileSync(dataFile));
  
      // Append the new image data to the existing data
      const updatedData = [...existingData, ...imageData];
  
      // Save the updated data to the JSON file
      const json = JSON.stringify(updatedData);
      fs.writeFileSync(dataFile, json);
    } else {
      // If the file does not exist, create it and save the image data
      const json = JSON.stringify(imageData);
      fs.writeFileSync(dataFile, json);
    }
  
    // Log a success message
    console.log("Image data saved to " + dataFile);
};
const folderPath = "./Carousels/images/carousel1/";
const jsonFile = "carousel1.json";
// Example usage
getImageFiles(folderPath,jsonFile);*/


/* Print each json object to carousel */

