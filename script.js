const songs = [
  "Black Coffee & David Guetta - Drive feat. Delilah Montagu",
  "Chris Lorenzo - California Dreamin (feat. High Jinx)",
  "Spherical Aberration (Jiggler Remix)",
  "Tinlicker & Helsloot - Tell Me (feat. Hero Baldwin)",
  "ZHU, Nero - Dreams"
]

function createSongList() {
  const list = document.createElement("ol");
  for(let i=0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list
}

document.getElementById("songList").appendChild(createSongList());