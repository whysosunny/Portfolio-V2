var playBtn = document.getElementById("play-btn");
var audio = document.getElementsByTagName("audio")[0];
var progressContainer = document.getElementById("progress-container");
var progressBar = document.getElementById("progress");
var audioDuration = audio.duration;

playBtn.addEventListener("click", function() {
    audio.play();
});


function updateProgress(sec,total) {
    return ((sec * 100)/total) + "%";
}

audio.addEventListener("timeupdate", function() {
    console.log("sunny");
    var currentTime = audio.currentTime;
    progressBar.style.width = updateProgress(currentTime,audioDuration);
    console.log(progressBar.style.width);
});

progressContainer.addEventListener("click",function(e) {
    var seekPosition = (e.offsetX * 100)/500;
    progressBar.style.width = seekPosition + "%";
    audio.currentTime = Math.round(seekPosition * audioDuration/100);
});




//Set smooth transition.

//Click to seek