const albums = {
  "READY TO BE": {
    release: "March 10, 2023",
    tracks: ["SET ME FREE", "MOONLIGHT SUNRISE", "BLAME IT ON ME"]
  },
  "BETWEEN 1&2": {
    release: "August 26, 2022",
    tracks: ["Talk that Talk", "Queen of Hearts", "Basics"]
  }
};

function showAlbum(name) {
  const album = albums[name];
  if (!album) return;

  let output = `
    <h3>${name}</h3>
    <p><strong>Release Date:</strong> ${album.release}</p>
    <ul>
  `;

  album.tracks.forEach(track => {
    output += `<li>${track}</li>`;
  });

  output += `</ul>`;

  document.getElementById("albumInfo").innerHTML = output;
}
