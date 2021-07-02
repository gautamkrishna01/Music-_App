const music=document.querySelector("audio");
const img=document.querySelector("img")
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const songs=[{
     name:"ice-cream",
     title:"Black Pink",
     artist:"the loyalist",
},
{
     name:"Bad Liar",
     title:"Imagine Dragons",
     artist:"the loyalist",
},
{
     name:"Dancing with a stranger",
     title:" Sam smith",
     artist:"the loyalist",
},
{
     name:"Just a kiss",
     title:" Lady Antebellum",
     artist:"the loyalist",
},
{
     name:"Passenger",
     title:" Iggy pop",
     artist:"the loyalist",
},
{
     name:"Make me move",
     title:" Karra",
     artist:"the loyalist",
},
{
     name:"It aint me",
     title:" Selena Gomez",
     artist:"the loyalist",
},
{
     name:"On my",
     title:" Alan Walker",
     artist:"the loyalist",
},
];
let isPlaying="false"
// for play functionality
const playMusic =() => {
     isPlaying=true;
     music.play();
     play.classList.replace("fa-play", "fa-pause");
     img.classList.add("anime")
     
};

// for pause functionality
const  pauseMusic =() => {
     isPlaying=false;
     music.pause();
     play.classList.replace("fa-pause", "fa-play");
     img.classList.remove("anime")
     
};
play.addEventListener("click",()=>
{
    if(isPlaying)
    {
         pauseMusic();
    }
    else{
         playMusic();
    }
})
/// changing the music data
const loadSong = (songs) => {
     title.textContent=songs.title;
     artist.textContent=songs.artist;
    music.src="Music/"+songs.name+".mp3";
//     img.src="Images/"+songs.name+".jpg"
};
 songIndex = 0;
//loadSongs(songs[1]);
const nextSong = () => 
{
     songIndex=(songIndex - 1 + songs.length)%songs.length;
   loadSong(songs[songIndex]);
   playMusic();
}
const prevSong = () => 
{
     songIndex=(songIndex + 1) % songs.length;
   loadSong(songs[songIndex]);
   playMusic();
}
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);