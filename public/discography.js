const albums = {

    "THE STORY BEGINS": {
        release: "October 20, 2015",
        tracks: [
            "Like OOH-AHH (Title Track)",
            "Do It Again",
            "Going Crazy",
            "Truth",
            "Candy Boy",
            "Like a Fool"
        ]
    },
    "PAGE TWO": {
        release: "April 25, 2016",
        tracks: [
            "Cheer Up (Title Track)",
            "Precious Love",
            "Touchdown",
            "Ready to Talk",
            "Tuk Tok",
            "Woohoo",
            "I'm Gonna Be a Star"
        ]
    },
    "TWICECOASTER: LANE 1": {
        release: "October 24, 2016",
        tracks: [
            "TT (Title Track)",
            "1 to 10",
            "Ponytail",
            "Jelly Jelly",
            "Pit-A-Pat",
            "Next Page",
            "One in a Million"
        ]
    },
    "TWICECOASTER: LANE 2": { 
        release: "February 20, 2017",
        tracks: [
            "Knock Knock (Title Track)",
            "Ice Cream",
            "Someone Like Me",
            "Going Crazy",
            "TT (Remix)"
        ]
    },
    "SIGNAL": { 
        release: "May 15, 2017",
        tracks: [
            "SIGNAL (Title Track)",
            "Only You",
            "Hold Me Tight",
            "Eye Eye Eyes",
            "Someone Like Me",
            "21:29"
        ]
    },
    "TWICETAGRAM": {
        release: "October 30, 2017",
        tracks: [
            "Likey (Title Track)",
            "Turtle",
            "Missing You",
            "Wow",
            "FFW",
            "Ding Dong",
            "Rewind",
            "Look at Me",
            "Love Line",
            "Jaljayo Good Night",
            "Only You",
            "24/7",
            "Greasy"
        ]
    },
    "WHAT IS LOVE?": {
        release: "April 9, 2018",
        tracks: [
            "What Is Love? (Title Track)",
            "Sweet Talker",
            "Ho!",
            "Dearest My Love",
            "Be As One (Korean ver.)"
        ]
    },
    "SUMMER NIGHTS": {
        release: "July 9, 2018",
        tracks: [
            "Dance The Night Away (Title Track)",
            "Chillax",
            "Shot Thru The Heart",
            "Ducky",
            "Deja Vu",
            "Say Yes"
        ]
    },
    "YES OR YES": {
        release: "November 5, 2018",
        tracks: [
            "Yes or Yes (Title Track)",
            "Say You Love Me",
            "LALALA",
            "Young & Wild",
            "Sunset",
            "After Moon",
            "BDZ (Korean ver.)"
        ]
    },
    "FANCY YOU": {
        release: "April 22, 2019",
        tracks: [
            "Fancy (Title Track)",
            "Stuck in My Head",
            "Girls Like Us",
            "Hot",
            "Turn It Up",
            "Strawberry"
        ]
    },
    "MORE & MORE": {
        release: "June 1, 2020",
        tracks: [
            "More & More (Title Track)",
            "Oxygen",
            "Firework",
            "Beginning",
            "Don't Call Me Again",
            "Sweet Summer Day",
            "Shadow"
        ]
    },
    "EYES WIDE OPEN": {
        release: "October 26, 2020",
        tracks: [
            "I Can't Stop Me (Title Track)",
            "Hell in Heaven",
            "Up No More",
            "Do What We Like",
            "Bring It Back",
            "Believer",
            "Queen",
            "Go Hard",
            "Shot Clock",
            "Handle It",
            "Depend On You",
            "Say Something",
            "Behind The Mask"
        ]
    },
    "TASTE OF LOVE": {
        release: "June 11, 2021",
        tracks: [
            "Alcohol-Free (Title Track)",
            "First Time",
            "Scandal",
            "Congratulations",
            "Baby Blue Love",
            "SOS"
        ]
    },
    "FORMULA OF LOVE": { 
        release: "November 12, 2021", 
        tracks: [
            "Scientist (Title Track)", 
            "Moonlight", 
            "Icon", 
            "Cruel", 
            "Real You", 
            "F.I.L.A (Fall In Love Again)", 
            "Last Waltz",
            "Espresso",
            "Rewind",
            "Cactus",
            "Push & Pull",
            "Hello",
            "1, 3, 2",
            "Candy",
            "The Feels (Korean ver.)",
            "Scientist (R3HAB Remix)"
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
    "READY TO BE": { 
        release: "March 10, 2023", 
        tracks: [
            "Set Me Free (Title Track)", 
            "Moonlight Sunrise", 
            "Blame It On Me", 
            "Wallflower", 
            "Crazy Stupid Love", 
            "Got The Thrills", 
            "Set Me Free (English Version)"
        ] 
    },
    "WITH YOU-TH": {
        release: "February 23, 2024",
        tracks: [
            "One Spark (Title Track)",
            "I Got You",
            "Rush",
            "New New",
            "Bloom",
            "You Get Me"
        ]
    },
    "THIS IS FOR": { 
        release: "March 15, 2025", 
        tracks: [
            "This Is For (Title Track)",
            "Me+You",
            "Shining",
            "Together",
            "Forever"
        ]
    },
    "TEN: THE STORY GOES ON": { 
        release: "October 20, 2025", 
        tracks: [
            "Ten (Title Track)",
            "Heartbeat",
            "Runaway",
            "Glow Up",
            "Euphoria",
            "Replay"
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

document.addEventListener('DOMContentLoaded', () => {
    const firstAlbumName = Object.keys(albums)[0];
    if (firstAlbumName) showAlbum(firstAlbumName);
});
