// HorizScroll 

/* insert pdf document cv */
window.onload = function() {
    if(PDFObject.supportsPDFs){
        console.log("Your browser supports PDFs, now embedding files.");
        const option = {
            height: "30rem",
            width: "100%"
        }
        PDFObject.embed("/HorizScroll/horizScroll.css","#PDFView1", option);
        PDFObject.embed("/HorizScroll/horizScroll.js","#PDFView2", option);
        PDFObject.embed("/pages/HorizScroll.html","#PDFView3", option);
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