
//load html code to preview area
async function toggleSource() {
  let sourceLoaded = false;
  const button = document.getElementById("toggleButton");
  const output = document.getElementById("htmlPreviewArea");
  const wrapper = document.getElementById("htmlWrap");
  if (!output.hidden) {
    output.hidden = true;
    button.textContent = "View HTML source code";
    wrapper.classList.remove("open");
    return;
  }

  output.hidden = false;
  output.style.textAlign = "left";
  button.textContent = "Hide HTML source code";
  wrapper.classList.add("open");

  if (sourceLoaded) return;

  output.textContent = "Loading…";

  try {
    const response = await fetch(location.href, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const body = doc.querySelector("body");

    if (!body) throw new Error("No <main> element found");

    body.querySelectorAll("script").forEach(script => {
      script.remove()
    });
    output.textContent = body.innerHTML;
    sourceLoaded = true;
  } catch (error) {
    output.textContent = `Could not load source: ${error.message}`;
  }
}

// get current url
// set path with page name as placeholder
function loadFileNames() {
  const openedPage = window.location.pathname;
  const cssFile = openedPage.replace(
    /\/pages\/([^/]+)\.html/,
    (_, pageName) => `../${pageName}/${pageName}.css`
  )
  const cssObjData = document.getElementById("cssObject");
  cssObjData.setAttribute("data",cssFile);
  const jsFile = openedPage.replace(
    /\/pages\/([^/]+)\.html/,
    (_, pageName) => `../${pageName}/${pageName}.js`
  )
  const jsObjData = document.getElementById("jsObject");
  jsObjData.setAttribute("data",jsFile);
}
window.onload = function() {loadFileNames();}