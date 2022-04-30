/* For the show Video Button on each thumbnail*/
function toggleVideo(videoElementId){
    const videoDiv = document.getElementById(videoElementId);
    
    if (window.getComputedStyle(videoDiv).visibility === "collapse") {
       
        showVideo(videoElementId);
    }
    else {
        hideVideo(videoElementId);
    }        
}

/*Needs to automatically close all other videos when a new one is shown*/

function showVideo(videoElementId){
    const videoDiv = document.getElementById(videoElementId);
    const videoElement = videoDiv.getElementsByTagName("video")[0];

    videoElement.currentTime = 0;    
    videoDiv.style.visibility = "visible";
    videoElement.play();
}

/*For the close Button on each video*/

function hideVideo(videoElementId){
    const videoDiv = document.getElementById(videoElementId);
    const videoElement = videoDiv.getElementsByTagName("video")[0];

    videoDiv.style.visibility = "collapse";
    videoElement.pause();
}