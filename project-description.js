
function toggleDescription(clickedElement) {
  const parentElement = findParentProjectDiv(clickedElement);
  
  if (parentElement === null)
  {
    console.error(`Could not find parent of clicked element: ${clickedElement}`);
    return;
  }

  const projectPreviewDiv = parentElement.getElementsByClassName("projectPreviewDiv")[0];
  const descriptionDiv = parentElement.getElementsByClassName("descriptionDiv")[0];
  const toggleDescriptionButton = parentElement.getElementsByClassName("toggleDescriptionButton")[0];
  
  if (window.getComputedStyle(descriptionDiv).visibility === "collapse") {
    showDescription(descriptionDiv, projectPreviewDiv, parentElement);
    toggleDescriptionButton.innerText = "Show less";
  }
  else {
    hideDescription(descriptionDiv, projectPreviewDiv, parentElement);
    toggleDescriptionButton.innerText = "Read more";
  }
}

/***
 * @param {HTMLElement} element 
 */

function findParentProjectDiv(element)
{
  let parentElement = element.parentElement;

  while (parentElement !== null && !parentElement.classList.contains('projectDiv'))
  {
    parentElement = parentElement.parentElement;
  }

  return parentElement;
}

function showDescription(descriptionDiv, projectPreviewDiv, projectDiv) {
  descriptionDiv.style.visibility = "visible";
  descriptionDiv.style.display = "flex";
  
  projectPreviewDiv.style.display = "none";
  projectPreviewDiv.style.visibility = "collapse";

  projectDiv.classList.remove("oneThird");
  projectDiv.classList.add("fullWidth");
  projectDiv.style.background = "rgba(255, 217, 107, 0.2)";
}

function hideDescription(descriptionDiv, projectPreviewDiv, projectDiv) {
  descriptionDiv.style.visibility = "collapse";
  descriptionDiv.style.display = "none";

  projectPreviewDiv.style.visibility = "visible";
  projectPreviewDiv.style.display = "block";

  projectDiv.classList.add("oneThird");
  projectDiv.classList.remove("fullWidth");
  projectDiv.style.background = "none";
  projectDiv.scrollIntoView(true);
}
