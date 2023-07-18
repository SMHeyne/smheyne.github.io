
function toggleDescription(projectDescriptionId, button, projectDivId){
  const descriptionDiv = document.getElementById(projectDescriptionId);
  const projectDiv = document.getElementById(projectDivId);
  /* Übergeben der ID aus dem Button, der dort im html in der Funktion gesetzt wird */

    if (window.getComputedStyle(descriptionDiv).visibility === "collapse") {

        showDescription(projectDescriptionId);
        button.innerText = "Show less";
        projectDiv.classList.remove("oneThird");
        projectDiv.classList.add("twoThirds");
        projectDiv.style.background = "#FFD96B66";

    }
    else {
        hideDescription(projectDescriptionId);
        button.innerText = "Read more";
        projectDiv.classList.add("oneThird");
        projectDiv.classList.remove("twoThirds");
        projectDiv.style.background = "none";
    }
}

function showDescription(projectDescriptionId) {
  const descriptionDiv = document.getElementById(projectDescriptionId);

  descriptionDiv.style.visibility = "visible";
  descriptionDiv.style.display = "block";
}

function hideDescription(projectDescriptionId) {
  const descriptionDiv = document.getElementById(projectDescriptionId);

  descriptionDiv.style.visibility = "collapse";
  descriptionDiv.style.display = "none";
}
