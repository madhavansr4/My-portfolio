var tablinks = document.getElementsByClassName("tablink");
var tabconts = document.getElementsByClassName("tabcont");
function opentab(tabnames){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcont of tabconts){
        tabcont.classList.remove("tab1");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabnames).classList.add("tab1")
}


var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxNYGxiitU40cn3hmyyU_7AAL9McOUNUetsTbjcbNEqLyAknpAouFEwqNywKv1aatG0/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent sucessfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
// try.js
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const texts = document.querySelectorAll('.slider h3, .slider p'); // Select all h3 and p elements
let currentIndex = 0;

function showSlide(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });

    texts.forEach((text, i) => {
        text.style.display = i === index ? 'block' : 'none';
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);


