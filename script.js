const songs = [
  "Black Coffee & David Guetta - Drive feat. Delilah Montagu.mp3",
  "Chris Lorenzo - California Dreamin (feat. High Jinx).mp3",
  "Spherical Aberration (Jiggler Remix).mp3",
  "Tinlicker & Helsloot - Tell Me (feat. Hero Baldwin).mp3",
  "ZHU, Nero - Dreams.mp3"
];

const player = document.getElementById("player");

function createSongList() {
  const list = document.createElement("ol");
  for(let i=0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
};

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

songList.onclick = function (e) {
  const source = document.getElementById("source");
  source.src = "songs/" + e.target.innerText;
  document.querySelector("#currentSong").innerText = `Now Playing: ${e.target.innerText}`;

  player.load();
  player.play();
};

function playAudio() {
  if(player.readyState) {
    player.play();
  }
}

function pauseAudio() {
  player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
  const volume = e.target.value;
  player.volume = volume;
}

function updateProgress() {
  if(player.currentTime > 0) {
    const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
  }
}