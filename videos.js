/* For the show Video Button on each thumbnail*/
function toggleVideo(videoElementId, thumbnailToggleButton){
    const videoDiv = document.getElementById(videoElementId);

    if (window.getComputedStyle(videoDiv).visibility === "collapse") {

        showVideo(videoElementId);
        thumbnailToggleButton.style.visibility = "collapse";
        thumbnailToggleButton.style.display = "none";
    }
    else {
        hideVideo(videoElementId);
        thumbnailToggleButton.style.visibility = "visible";
        thumbnailToggleButton.style.display = "block";
    }
}

function showVideo(videoContainerId){
    const videoContainer = document.getElementById(videoContainerId);
    const videoElement = videoContainer.getElementsByTagName("video")[0];

    videoElement.currentTime = 0;
    videoContainer.style.visibility = "visible";
    videoContainer.style.display = "block";
    videoElement.play();
}

/*For the close Button on each video*/

function hideVideo(videoContainerId, thumbnailShowID){
    const videoContainer = document.getElementById(videoContainerId);
    const videoElement = videoContainer.getElementsByTagName("video")[0];
    
    videoContainer.style.visibility = "collapse";
    videoContainer.style.display = "none";
    videoElement.pause();

    const thumbnailToggleVideo = document.getElementById(thumbnailShowID);
    thumbnailToggleVideo.style.visibility = "visible";
    thumbnailToggleVideo.style.display = "inline";
}
