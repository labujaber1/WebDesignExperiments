document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("[data-target]");
    const sections = document.querySelectorAll(".page-section");
    const introSection = document.getElementById("intro");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            sections.forEach((section) => {
                section.style.visibility = "hidden";
                section.style.opacity = "0";
            });
            introSection.style.visibility = "visible";
            introSection.style.opacity = "1";

            const selectedSection = document.getElementById(link.dataset.target);

            if (selectedSection) {
              introSection.style.visibility = "hidden";
              introSection.style.opacity = "0";
                selectedSection.style.visibility = "visible";
                selectedSection.style.opacity = "1";
            }
        });
    });
});