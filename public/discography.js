/**
 * discography.js
 * Handles dynamic content display for album tracklists.
 */

const albums = {
    // Keys must exactly match the strings used in the onclick attributes in HTML
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
    // Retrieve album data using the provided name (key)
    const album = albums[name];
    
    // Safety check
    if (!album) {
        document.getElementById('albumInfo').innerHTML = 
            `<p style="color: red;">Error: Album "${name}" not found.</p>`;
        return;
    }

    // Build the HTML output string
    let output = `<h3>${name}</h3>`;
    output += `<p><strong>Release Date:</strong> ${album.release}</p>`;
    output += `<h4>Tracklist:</h4>`;
    output += `<ul>`;

    // Loop through the tracks and append list items
    album.tracks.forEach(track => {
        output += `<li>${track}</li>`;
    });
    
    output += `</ul>`;

    // Insert the generated HTML into the placeholder div (id="albumInfo")
    document.getElementById('albumInfo').innerHTML = output;
}

// Optional: Automatically display the first album on page load
document.addEventListener('DOMContentLoaded', () => {
    // Get the key of the first album
    const firstAlbumName = Object.keys(albums)[0];
    if (firstAlbumName) {
        showAlbum(firstAlbumName);
    }
});
