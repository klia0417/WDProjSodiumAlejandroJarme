# 💫 OnceVerse
### "Your ultimate guide to TWICE"

![OnceVerse Logo](images/logo1.png)

---

## 🌐 Website Description

**OnceVerse** is an interactive fan guide dedicated to the world of **TWICE**, the global K-pop sensation.  
The website is designed to be a one-stop destination for ONCEs (TWICE fans) — featuring detailed profiles, discographies, music video galleries, and exclusive trivia about each member.  

Whether you’re a long-time fan or just discovering TWICE, OnceVerse celebrates their journey through music, visuals, and unforgettable moments that made them one of the most iconic girl groups of the generation.

---

## 🧭 Website Outline (5 Pages)

| Page | Description |
|------|--------------|
| **Home** | Welcomes visitors with a TWICE banner, along with special homepage navigation buttons that provide quick access to key sections like About, Members, Discography, and Gallery. |
| **About** | Explains the group’s formation, milestones, and achievements from 2015 to present. |
| **Members** | Displays profiles of all nine members — photos, birthdays, positions, and fun facts. |
| **Discography** | Lists albums, title tracks, and release years with album cover previews. |
| **Gallery** | Contains photos, music videos, and highlight clips from concerts or performances. |

---

# TWICE Website Wireframes

## Home Page
![Home Page Wireframe](images/home.png)

## About Page
![About Page Wireframe](images/about.png)

## Members Page
![Members Page Wireframe](images/members.png)

## Discography Page
![About Page Wireframe](images/discography.png)

## Gallery Page
![About Page Wireframe](images/gallery.png)

---

## ⚙️ JavaScript Integration

JavaScript will be used on the **Discography** page for interactive album previews.

When users hover or click on an album cover, it will:
- Display the album name, release date, and tracklist dynamically.
- Allow users to switch between albums without reloading the page.

**Example Script:**
```js
const albums = {
  'READY TO BE': ['SET ME FREE', 'MOONLIGHT SUNRISE', 'BLAME IT ON ME'],
  'BETWEEN 1&2': ['Talk that Talk', 'Queen of Hearts', 'Basics']
};

function showAlbum(name) {
  const trackList = albums[name];
  let output = `<h3>${name}</h3><ul>`;
  trackList.forEach(track => {
    output += `<li>${track}</li>`;
  });
  output += '</ul>';
  document.getElementById('albumInfo').innerHTML = output;
}
