
// Landing page theme start
/* insert pdf document cv */
window.onload = function() {
    if(PDFObject.supportsPDFs){
        console.log("Your browser supports PDFs, now embedding files.");
        const option = {
            height: "30rem",
            width: "100%"
        }
        PDFObject.embed("./css/style.css","#PDFView1", option);
        PDFObject.embed("./js/javascript.js","#PDFView2", option);
        PDFObject.embed("./index.txt","#PDFView3", option);
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
// Landing page theme end ###############


// Page 2 start

// Page 2 end #################


// Page 3 start 

// Page 3 end ##################


// Page 4 start

// Page 4 end ##############



