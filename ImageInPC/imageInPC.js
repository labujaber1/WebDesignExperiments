// ImageInPC


/*courtesy of https://alvarotrigo.com/blog/css-animations-scroll/*/
/* fade in image effect from left, right and bottom */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);


  /* insert pdf document cv */
window.onload = function() {
  if(PDFObject.supportsPDFs){
      console.log("Your browser supports PDFs, now embedding files.");
      const option = {
          height: "30rem",
          width: "100%"
      }
      PDFObject.embed("./ImageInPC/imageInPC.css","#PDFView1", option);
      PDFObject.embed("./ImageInPC/imageInPC.js","#PDFView2", option);
      PDFObject.embed("./pages/ImageInPC.html","#PDFView3", option);
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