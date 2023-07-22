let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')

navToggle.addEventListener('click', onNavToggleClicked)

function onNavToggleClicked()
{
    toggleHamburger();
    togglePagesMenu();
}

function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'))
}

function togglePagesMenu(){
    const allPagesMenu = document.getElementById("allPages");

    if(window.getComputedStyle(allPagesMenu).visibility === "collapse")
    {
        allPagesMenu.style.display = "flex";
        allPagesMenu.style.visibility = "visible";
    }
    else
    {
        allPagesMenu.style.display = "none";
        allPagesMenu.style.visibility = "collapse";
    }

}