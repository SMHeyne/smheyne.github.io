const images = document.querySelectorAll(".gallery_item img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        //run modal function
        imgModal(imgSrc);
    });
});
//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the main section or the parent element
    document.querySelector(".whiteBackground").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeButton = document.createElement("button");
    closeButton.setAttribute("class", "closeButton");
    closeButton.innerHTML = "X";

    //close function
    closeButton.onclick = () => {
        modal.remove();
    };
    window.onkeyup = function (event) {
        if (event.keyCode == 27) {
            modal.remove();
        }
    }

    modal.append(newImage, closeButton);
};