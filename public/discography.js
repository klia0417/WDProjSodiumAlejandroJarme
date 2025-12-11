/**
 * discography.js
 * Handles dynamic content display for album tracklists.
 */

const albums = {
    "READY TO BE": { 
        release: "March 10, 2023", 
        tracks: ["SET ME FREE", "MOONLIGHT SUNRISE", "BLAME IT ON ME", "WALLFLOWER", "CRAZY STUPID LOVE", "GOT THE THRILLS", "SET ME FREE (English Version)"] 
    },
    "BETWEEN 1&2": { 
        release: "August 26, 2022", 
        tracks: ["Talk that Talk", "Queen of Hearts", "Basics", "Trouble", "Brave", "Gone", "When We Were Kids"] 
    },
    "FORMULA OF LOVE": {
        release: "November 12, 2021",
        tracks: ["SCIENTIST", "MOONLIGHT", "ICON", "CRUEL", "REAL YOU", "F.I.L.A", "PUSH & PULL", "CACTUS", "LAST WALTZ"]
    }
};

function showAlbum(name){
    const album = albums[name];
    
    if (!album) {
        document.getElementById('albumInfo').innerHTML = 
            `<p style="color: red;">Error: Album "${name}" not found.</p>`;
        return;
    }

    let output = `<h3>${name}</h3>`;
    output += `<p><strong>Release Date:</strong> ${album.release}</p>`;
    output += `<h4>Tracklist:</h4>`;
    output += `<ul>`;

    album.tracks.forEach(track => {
        output += `<li>${track}</li>`;
    });
    
    output += `</ul>`;

    document.getElementById('albumInfo').innerHTML = output;
}

// Automatically display the first album on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstAlbumName = Object.keys(albums)[0];
    if (firstAlbumName) {
        showAlbum(firstAlbumName);
    }
});
