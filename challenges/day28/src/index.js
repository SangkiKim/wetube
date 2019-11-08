import "./styles.css";

const videoPlayer = document.getElementById("videoPlayer");
const playBtn = document.getElementById("jsPlayBtn");
const playIcon = document.getElementById("playIcon");
const volumeBtn = document.getElementById("jsMuteBtn");
const volumeIcon = document.getElementById("volumeIcon");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const controlBar = document.getElementById("controlBar");

const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};

function getCurrentTime() {
  currentTime.innerHTML = formatDate(videoPlayer.currentTime);
  if (videoPlayer.ended) {
    videoPlayer.play();
    setTotalTime();
  }
}

function setTotalTime() {
  const totalTimeString = formatDate(videoPlayer.duration);
  totalTime.innerHTML = totalTimeString;
  setInterval(getCurrentTime, 1000);
}

function handleSetMute() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeIcon.className = "fas fa-volume-down";
  } else {
    videoPlayer.muted = true;
    volumeIcon.className = "fas fa-volume-mute";
  }
}

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playIcon.className = "fas fa-pause";
  } else {
    videoPlayer.pause();
    playIcon.className = "fas fa-play";
  }
}

document.body.onkeypress = function(e) {
  if (e.which === 32) {
    e.preventDefault();
    play_pause_video();
  }
};

function play_pause_video() {
  handlePlayClick();
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleSetMute);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
}

var mouseStartedMoving = false;
var mouseMoved = false;
const MINIMUM_MOUSE_MOVE_TIME = 2000;

setInterval(() => {
  if (!mouseMoved && mouseStartedMoving) {
    controlBar.style.opacity = 0;
    document.body.style.cursor = "none";
    mouseStartedMoving = false;
  }
  mouseMoved = false;
}, MINIMUM_MOUSE_MOVE_TIME);

videoPlayer.onmousemove = function(ev) {
  mouseStartedMoving = true;
  mouseMoved = true;
  controlBar.style.opacity = 1;
  document.body.style.cursor = "auto";
};

init();
