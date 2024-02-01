/* Display images */

/* insert pdf document cv */
window.onload = function() {
    PDFObject.embed("/DisplayImages/images/IEEE User Data Privacy_CamAnalytica.pdf","#PDFView1");
    PDFObject.embed("/DisplayImages/images/qrcodes_on_id_cards.pdf","#PDFView2");
}
  
/* low priority data - hide/show employment history if required */
function expand(pdfNum) {
    var pdf = document.getElementById("PDFView"+pdfNum);
    if (pdf.style.display === "flex" ){
        pdf.style.display = "none";
    }
    else {
        pdf.style.display = "flex";
    }
}