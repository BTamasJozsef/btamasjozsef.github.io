var audio = document.getElementById("audio");
var playPauseButton = document.getElementById("playPause");
var muteButton = document.getElementById("mute");
var currentTimeDisplay = document.getElementById("currentTime");
var durationDisplay = document.getElementById("duration");
var progressBar = document.getElementById("progressBar");
var progressIndicator = document.getElementById("progressIndicator");

playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<img src="images/icons/paused.png" width="24" height="24">';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<img src="images/icons/play.png" width="24" height="24">';
    }
});

muteButton.addEventListener("click", function () {
    audio.muted = !audio.muted;
    muteButton.innerHTML = audio.muted ? '<img src="images/icons/muted.png" width="24" height="24">' : '<img src="images/icons/speaker.png" width="24" height="24">';
});

audio.addEventListener("timeupdate", function () {
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    var progress = (currentTime / duration) * 100;
    
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
    progressIndicator.style.width = progress + "%";
});

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}