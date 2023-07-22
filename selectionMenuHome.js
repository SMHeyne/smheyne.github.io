

function toggleHomeMenu(button){
    const projects = document.getElementById("seeProjects");
    const contactInfo = document.getElementById("seeContactInfo");

    const projectDiv = document.getElementById("allProjects");
    const contactDiv = document.getElementById("contactInfo");

    if(button.id == "seeProjects")
    {
        projects.classList.add("currentSelectionMenuHome");
        contactInfo.classList.remove("currentSelectionMenuHome");

        projectDiv.style.display = "flex";
        projectDiv.style.visibility = "visible";

        contactDiv.style.display = "none";
        contactDiv.style.visibility = "hidden";

    }
    if(button.id == "seeContactInfo")
    {
        contactInfo.classList.add("currentSelectionMenuHome");
        projects.classList.remove("currentSelectionMenuHome");

        contactDiv.style.display = "contents";
        contactDiv.style.visibility = "visible";

        projectDiv.style.display = "none";
        projectDiv.style.visibility = "hidden";

    }


}