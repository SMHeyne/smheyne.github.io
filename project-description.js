
function toggleDescription(projectDescriptionId, button, projectDivId, projectPreviewID){
  const descriptionDiv = document.getElementById(projectDescriptionId);
  const projectDiv = document.getElementById(projectDivId);

  /* Übergeben der ID aus dem Button, der dort im html in der Funktion gesetzt wird */

    if (window.getComputedStyle(descriptionDiv).visibility === "collapse") {

        showDescription(projectDescriptionId, projectPreviewID);
        button.innerText = "Show less";
        projectDiv.classList.remove("oneThird");
        projectDiv.classList.add("fullWidth");
        projectDiv.style.background = "rgba(255, 217, 107, 0.2)";

    }
    else {
        hideDescription(projectDescriptionId, projectPreviewID);
        button.innerText = "Read more";
        projectDiv.classList.add("oneThird");
        projectDiv.classList.remove("fullWidth");
        projectDiv.style.background = "none";
    }
}

function showDescription(projectDescriptionId, projectPreviewID) {
  const descriptionDiv = document.getElementById(projectDescriptionId);
  const projectPreviewDiv = document.getElementById(projectPreviewID)

  descriptionDiv.style.visibility = "visible";
  descriptionDiv.style.display = "flex";
  
  projectPreviewDiv.style.display = "none";
  projectPreviewDiv.style.visibility = "collapse";
}

function hideDescription(projectDescriptionId, projectPreviewID) {
  const descriptionDiv = document.getElementById(projectDescriptionId);
  const projectPreviewDiv = document.getElementById(projectPreviewID)
  
  descriptionDiv.style.visibility = "collapse";
  descriptionDiv.style.display = "none";

  projectPreviewDiv.style.visibility = "visible";
  projectPreviewDiv.style.display = "block";
}
