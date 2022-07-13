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
    navContainer.style.backgroundColor = "#FFEBCD";
})

const music = new Audio('https://dl.dropboxusercontent.com/s/52mmjhv4w77q8zd/The%20Adults%20Are%20Talking.mp3');

document.addEventListener('click', function(){
    music.play()
    music.loop = false;
})


const button = document.querySelectorAll('.btn')


button[1].style.color = "aquamarine"
// don't read into this I was just practicing with node lists


for (let i = 0; i<button.length; i++){
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

const body = document.querySelector("body");
const heading = document.querySelector(".logo-heading")
const navLinks = document.querySelectorAll(".nav-link");

function darkMode(){
    body.style.color = "white";
    body.style.backgroundColor = "black";
    header.style.backgroundColor = "black";
    heading.style.color = "#E7874D";
    for (let i = 0; i < navLinks.length; i++){
        navLinks[i].style.color = "#E7874D"
    }
}
function lightMode(){
    body.style.color = "black";
    body.style.backgroundColor = "white";
    header.style.backgroundColor = "white";
    heading.style.color = "#E7874D";
    for (let i = 0; i < navLinks.length; i++){
        navLinks[i].style.color = "#E7874D"
    }
}

window.addEventListener('keydown', event => {
    if (event.key === "Enter") {
        darkMode();
    } else if (event.key === "Alt") {
        lightMode();
    }
})

const intro = document.querySelector('.intro');
console.log(intro);
const ivCont = document.querySelector('.inverse-content');
const contPick = document.querySelector('.content-pick');
const footer = document.querySelector('.footer');
// header.style.borderBottom = "2px dashed green";


function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}
function rainbowBorders(cb) {
    let r = cb(255);
    let g = cb(255);
    let b = cb(255);
    header.style.borderBottom = `2px dashed rgb(${r}, ${g}, ${b})`
    intro.style.borderBottom = `2px dashed rgb(${r}, ${g}, ${b})`
    ivCont.style.borderBottom = `2px dashed rgb(${r}, ${g}, ${b})`
    contPick.style.borderTop = `2px dashed rgb(${r}, ${g}, ${b})`
    footer.style.borderTop = `2px dashed rgb(${r}, ${g}, ${b})`
}
// I can clearly see that there's a more elegant way of doing this, however when I comment out the above code and replace it with
const home = document.querySelector('.home');
// functions....(){
    // home.style.borderBottom = `2px dashed rgb(${r}, ${g}, ${b})`
// }
// it acts like there's not even code there. It's really irksome. I've done querySelectorAll as well and tried 
// home.children.style.borderBottom = `2px dashed rgb(${r}, ${g}, ${b})`
// with that as well, to no avail. Messy code for now. 

document.addEventListener('keyup', event => {
    rainbowBorders(randomInteger);
});