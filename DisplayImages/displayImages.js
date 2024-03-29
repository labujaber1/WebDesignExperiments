/* Display images */
  
/* insert pdf document cv */
window.onload = function() {
    if(PDFObject.supportsPDFs){
        console.log("Your browser supports PDFs, now embedding files.");
        const option = {
            height: "30rem",
            width: "100%"
        }
        PDFObject.embed("../DisplayImages/displayImages.css","#PDFView1", option);
        PDFObject.embed("../DisplayImages/displayImages.js","#PDFView2", option);
        PDFObject.embed("../pages/DisplayImages.txt","#PDFView3", option);
        PDFObject.embed("../DisplayImages/images/IEEE User Data Privacy_CamAnalytica.pdf","#PDFView4");
        PDFObject.embed("../DisplayImages/images/qrcodes_on_id_cards.pdf","#PDFView5");
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