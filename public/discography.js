/**
 * discography.js
 * Handles dynamic content display for album tracklists.
 */

const albums = {
    // --- FULL ALBUMS ---
    "FORMULA OF LOVE": { 
        release: "November 12, 2021", 
        tracks: [
            "SCIENTIST (Title Track)", 
            "MOONLIGHT", 
            "ICON", 
            "CRUEL", 
            "REAL YOU", 
            "F.I.L.A (Fall In Love Again)", 
            "LAST WALTZ",
            "ESPRESSO",
            "REWIND",
            "CACTUS",
            "PUSH & PULL",
            "HELLO",
            "1, 3, 2",
            "CANDY",
            "The Feels (Korean ver.)",
            "SCIENTIST (R3HAB Remix)",
        ] 
    },
    "EYES WIDE OPEN": {
        release: "October 26, 2020",
        tracks: [
            "I CAN'T STOP ME (Title Track)",
            "HELL IN HEAVEN",
            "UP NO MORE",
            "DO WHAT WE LIKE",
            "BRING IT BACK",
            "BELIEVER",
            "QUEEN",
            "GO HARD",
            "SHOT CLOCK",
            "HANDLE IT",
            "DEPEND ON YOU",
            "SAY SOMETHING",
            "BEHIND THE MASK"
        ]
    },
    "TWICETAGRAM": {
        release: "October 30, 2017",
        tracks: [
            "LIKEY (Title Track)",
            "TURTLE",
            "MISSING YOU",
            "WOW",
            "FFW",
            "DING DONG",
            "REWIND",
            "LOOK AT ME",
            "LOVE LINE",
            "JALJAYO GOOD NIGHT",
            "ONLY YOU",
            "24/7",
            "GREASY"
        ]
    },

    // --- MINI ALBUMS (EPs) ---
    "WITH YOU-TH": {
        release: "February 23, 2024",
        tracks: [
            "ONE SPARK (Title Track)",
            "I GOT YOU",
            "RUSH",
            "NEW NEW",
            "BLOOM",
            "YOU GET ME"
        ]
    },
    "READY TO BE": { 
        release: "March 10, 2023", 
        tracks: [
            "SET ME FREE (Title Track)", 
            "MOONLIGHT SUNRISE", 
            "BLAME IT ON ME", 
            "WALLFLOWER", 
            "CRAZY STUPID LOVE", 
            "GOT THE THRILLS", 
            "SET ME FREE (English Version)"
        ] 
    },
    "BETWEEN 1&2": { 
        release: "August 26, 2022", 
        tracks: [
            "Talk that Talk (Title Track)", 
            "Queen of Hearts", 
            "Basics", 
            "Trouble", 
            "Brave", 
            "Gone", 
            "When We Were Kids"
        ] 
    },
    "TASTE OF LOVE": {
        release: "June 11, 2021",
        tracks: [
            "ALCOHOL-FREE (Title Track)",
            "FIRST TIME",
            "SCANDAL",
            "CONGRATULATIONS",
            "BABY BLUE LOVE",
            "SOS"
        ]
    },
    "MORE & MORE": {
        release: "June 1, 2020",
        tracks: [
            "MORE & MORE (Title Track)",
            "OXYGEN",
            "FIREWORK",
            "BEGINNING",
            "DON'T CALL ME AGAIN",
            "SWEET SUMMER DAY",
            "SHADOW"
        ]
    },
    "FANCY YOU": {
        release: "April 22, 2019",
        tracks: [
            "FANCY (Title Track)",
            "STUCK IN MY HEAD",
            "GIRLS LIKE US",
            "HOT",
            "TURN IT UP",
            "STRAWBERRY"
        ]
    },
    "YES OR YES": {
        release: "November 5, 2018",
        tracks: [
            "YES OR YES (Title Track)",
            "SAY YOU LOVE ME",
            "LALALA",
            "YOUNG & WILD",
            "SUNSET",
            "AFTER MOON",
            "BDZ (Korean ver.)"
        ]
    },
    "SUMMER NIGHTS": {
        release: "July 9, 2018",
        tracks: [
            "DANCE THE NIGHT AWAY (Title Track)",
            "CHILLAX",
            "SHOT THRU THE HEART",
            "DUCKY",
            "DEJA VU",
            "SAY YES"
        ]
    },
    "WHAT IS LOVE?": {
        release: "April 9, 2018",
        tracks: [
            "WHAT IS LOVE? (Title Track)",
            "SWEET TALKER",
            "HO!",
            "DEAREST MY LOVE",
            "BE AS ONE (Korean ver.)"
        ]
    },
    "TWICECOASTER: LANE 1": {
        release: "October 24, 2016",
        tracks: [
            "TT (Title Track)",
            "1 TO 10",
            "PONYTAIL",
            "JELLY JELLY",
            "PIT-A-PAT",
            "NEXT PAGE",
            "ONE IN A MILLION"
        ]
    },
    "PAGE TWO": {
        release: "April 25, 2016",
        tracks: [
            "CHEER UP (Title Track)",
            "PRECIOUS LOVE",
            "TOUCHDOWN",
            "READY TO TALK",
            "TUK TOK",
            "WOOHOO",
            "I'M GONNA BE A STAR"
        ]
    },
    "THE STORY BEGINS": {
        release: "October 20, 2015",
        tracks: [
            "LIKE OOH-AHH (Title Track)",
            "DO IT AGAIN",
            "GOING CRAZY",
            "TRUTH",
            "CANDY BOY",
            "LIKE A FOOL"
        ]
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

// Automatically display the first album (FORMULA OF LOVE) on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstAlbumName = Object.keys(albums)[0];
    if (firstAlbumName) {
        showAlbum(firstAlbumName);
    }
});
