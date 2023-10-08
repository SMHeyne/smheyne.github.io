function toggleHomeMenu(checkbox) {
  const projectDiv = document.getElementById("allProjects");
  const contactDiv = document.getElementById("contactInfo");

  if(checkbox.checked)
  {
    console.log("true = button left");

    contactDiv.style.display = "none";
    contactDiv.style.visibility = "hidden";
  }
  else
  {
    console.log("false");

    contactDiv.style.display = "contents";
    contactDiv.style.visibility = "visible";

  }
}
