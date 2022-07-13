import './less/index.less'

// const body = document.querySelector('body');
// body.addEventListener('mouseover', event => {console.log("a", event)})
// This is really fun but annoying so I'm going to comment it out now. I can do it!

const header = document.querySelector(".main-navigation");

const navContainer = document.querySelector(".nav-container");


navContainer.addEventListener('mouseenter', function(){
    navContainer.style.backgroundColor = "#B3D4E1";
});
navContainer.addEventListener('mouseleave', function(){
    navContainer.style.backgroundColor = "white";
})

const music = new Audio('https://dl.dropboxusercontent.com/s/52mmjhv4w77q8zd/The%20Adults%20Are%20Talking.mp3');

document.addEventListener('click', function(){
    music.play()
    music.loop = false;
    console.log("Now Playing  --  The Adults are Talking - The Strokes")
})


const button = document.querySelectorAll('.btn')
console.log(button);
console.log(button[1])
button[1].style.color = "aquamarine"

console.log(button.length)
for (let i = 0; i<button.length; i++){
    console.log(button[i]);
    button[i].addEventListener('mousedown', function(event){
        event.target.style.backgroundColor = "red";
        event.target.style.color = "white";
    })
    button[i].addEventListener('mouseup', function(event){
        event.target.style.backgroundColor = "#15A2B8"
        event.target.style.color = "white";
        console.log("Man, this doesn't do anything for you, and you can't hover over the buttons to make 'em white anymore.")
    })
}


