var audio = new Howl({
    urls: ['music/eyes.mp3']
});

var playBtn = document.getElementById("play-btn");
var pauseBtn = document.getElementById("pause-btn");
var progressContainer = document.getElementById("progress-container");
var progressBar = document.getElementById("progress");
var nextBtn = document.getElementById("next");
var audioDuration = audio.duration;

playBtn.addEventListener("click", function() {
    audio.play();
});

pauseBtn.addEventListener("click", function() {
    audio.pause();
});

function updateProgress(sec,total) {
    progressBar.style.width = ((sec * 100)/total) + "%";
}

