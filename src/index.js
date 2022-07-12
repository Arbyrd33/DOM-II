import './less/index.less'

// const body = document.querySelector('body');
// body.addEventListener('mouseover', event => {console.log("a", event)})
// This is really fun but annoying so I'm going to comment it out now. I can do it!

const header = document.querySelector(".main-navigation");

const navContainer = document.querySelector(".nav-container");


navContainer.addEventListener('mouseover', function(){
    navContainer.style.backgroundColor = "#B3D4E1";
});
navContainer.addEventListener('mouseleave', function(){
    navContainer.style.backgroundColor = "white";
})

const music = new Audio('https://dl.dropboxusercontent.com/s/52mmjhv4w77q8zd/The%20Adults%20Are%20Talking.mp3');

document.addEventListener('click', function(){
    music.play()
    music.loop = false;
})

