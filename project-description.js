
function toggleDescription(projectDescriptionId){
  const descriptionDiv = document.getElementById(projectDescriptionId);
  /* Übergeben der ID aus dem Button, der dort im html in der Funktion gesetzt wird */

    if (window.getComputedStyle(descriptionDiv).visibility === "collapse") {

        showDescription(projectDescriptionId);
    }
    else {
        hideDescription(projectDescriptionId);
    }
}

function showDescription(projectDescriptionId) {
  const descriptionDiv = document.getElementById(projectDescriptionId);

  descriptionDiv.style.visibility = "visible";
  descriptionDiv.style.display = "flex";
}

function hideDescription(projectDescriptionId) {
  const descriptionDiv = document.getElementById(projectDescriptionId);

  descriptionDiv.style.visibility = "collapse";
  descriptionDiv.style.display = "none";
}
