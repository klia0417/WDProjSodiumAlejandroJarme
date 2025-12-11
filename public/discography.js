/**
 * discography.js
 * Handles dynamic content display for album tracklists.
 */

const albums = {
    // Keys must match the exact strings used in the onclick attributes in discography.html
    "READY TO BE": { 
        release: "March 10, 2023", 
        tracks: ["SET ME FREE", "MOONLIGHT SUNRISE", "BLAME IT ON ME", "WALLFLOWER", "CRAZY STUPID LOVE", "GOT THE THRILLS", "SET ME FREE (English Version)"] 
    },
    "BETWEEN 1&2": { 
        release: "August 26, 2022", 
        tracks: ["Talk that Talk", "Queen of Hearts", "Basics", "Trouble", "Brave", "Gone", "When We Were Kids"] 
    },
    // You can add more albums here
    "FORMULA OF LOVE": {
        release: "November 12, 2021",
        tracks: ["SCIENTIST", "MOONLIGHT", "ICON", "CRUEL", "REAL YOU", "F.I.L.A", "PUSH & PULL", "CACTUS", "LAST WALTZ"]
    }
};

function showAlbum(name){
    // Retrieve album data using the provided name (key)
    const album = albums[name];
    
    // Safety check: if album name doesn't exist, exit
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

    // Insert the generated HTML into the placeholder div
    document.getElementById('albumInfo').innerHTML = output;
}

// Optional: Automatically display the first album on page load for a better user experience
document.addEventListener('DOMContentLoaded', () => {
    // Get the keys (album names) from the albums object
    const firstAlbumName = Object.keys(albums)[0];
    if (firstAlbumName) {
        showAlbum(firstAlbumName);
    }
});
