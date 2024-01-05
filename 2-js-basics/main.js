// First three buttons
function hideSquare(){
   document.getElementById("black-square").style.display = "none"; 
}

function removeSquare(){
    const square = document.getElementById("black-square");
    square.remove();
}

function makeHidden(){
    const element = document.getElementById("black-square");
    element.classList.add("hidden");
}

// Makes square visible/hidden
function changeVisibility(){
    // Make actions with higher square
    const element = document.getElementById("black-square");
    element.classList.add("hidden");
    if(element.style.visibility == "hidden"){
        element.style.visibility = "visible";
    }else {
        element.style.visibility = "hidden";
    }

    // Make actions with 5 squares
    const elements = document.querySelectorAll(".black-square");
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.add("hidden");
        if(elements[i].style.visibility == "hidden"){
            elements[i].style.visibility = "visible";
        }else {
            elements[i].style.visibility = "hidden";
        }
    }
}

function hideByInput(){
   const selector = document.getElementById("text-box").value;
   const elements = document.querySelectorAll(selector);
   for(let i = 0; i < elements.length; i++) {
    elements[i].classList.add("hidden"); 
   }
}

// Actions with yellow square (task 5)
const yellowSquare = document.querySelector(".yellow-square");
yellowSquare.addEventListener("click", alertGreetingMessage);

function alertGreetingMessage() {
    alert("Привіт");
    yellowSquare.removeEventListener("click", alertGreetingMessage);
    yellowSquare.addEventListener("click", hideYellowSquare);
}

function hideYellowSquare() {
    yellowSquare.classList.add("hidden");
}

// Actions with red square (task 6)
const redSquareButton = document.querySelector(".red-square-button");
const redSquare = document.querySelector(".red-square");
redSquareButton.addEventListener("mouseover", showRedSquare);
redSquareButton.addEventListener("mouseout", hideRedSquare);

function showRedSquare() {
    redSquare.style.visibility = "visible";
}

function hideRedSquare(){
    redSquare.style.visibility = "hidden";
}

// Actions with input checkbox (task 7)
const greenSquare = document.querySelector(".green-square");
const greenSquareInput = document.querySelector(".green-square-text-box");

greenSquareInput.addEventListener("focus", showGreenSquare);
greenSquareInput.addEventListener("input", hideGreenSquare);

function showGreenSquare() {
    greenSquare.style.visibility = "visible";
}

function hideGreenSquare() {
    greenSquare.style.visibility = "hidden";
}

// Task 8 (Adding an image by inserting link and click button)
const imageAddingButton = document.querySelector(".add-image-button");
const imageAddingInput = document.querySelector(".image-adding-text-box");

imageAddingButton.addEventListener("click", addImage);

function addImage() {
    const link = imageAddingInput.value;
    const img = document.createElement("img");
    img.src = link;
    document.body.appendChild(img);
}

// Task 9

const imagesAddingButton = document.querySelector(".add-images-button");
imagesAddingButton.addEventListener("click", addImagesToAllLinks);


function addImagesToAllLinks() {
    const imageAddingArea = document.querySelector(".image-adding-text-area").value;
    const textArea = imageAddingArea.split("\n")
    for(let link of textArea){
        let img = document.createElement("img");
        img.src = link;
        document.body.appendChild(img);
    }
}

// Task 10
const page = document.querySelector("body");
// page.style.backgroundColor = "blue";
const x = document.querySelector(".x-coordinate");
const y = document.querySelector(".y-coordinate");

function updateDisplay(){
    x.innerText = event.x;
    y.innerText = event.y;
}

page.addEventListener("mousemove", updateDisplay, false);
page.addEventListener("mouseenter", updateDisplay, false);
page.addEventListener("mouseleave", updateDisplay, false);

// Task 11

const browserLanguage = document.querySelector(".browser-language");
browserLanguage.innerHTML = navigator.language || navigator.userLanguage;

// Task 12 -- commented because 

// const longitude = document.querySelector(".user-longitude");
// const latitude = document.querySelector(".user-latitude");
// navigator.geolocation.getCurrentPosition((position) => {
//     longitude.innerHTML = position.coords.longitude;
//     latitude.innerHTML = position.coords.latitude;
// });

// Task 13
// Local storage
const firstText = document.getElementById("first-text");
firstText.addEventListener("input", updateLocalStorage);

function updateLocalStorage() {
    localStorage.setItem("firstText", firstText.innerHTML);
}

function setFromLocalStorage() {
    const storedValue = localStorage.getItem("firstText");
    firstText.innerHTML = storedValue;
}

// Session storage
const secondText = document.getElementById("second-text");
secondText.addEventListener("input", updateSessionStorage);

function updateSessionStorage() {
    sessionStorage.setItem("secondText",secondText.innerHTML);
}

function setFromSessionStorage () {
    const storedValue = sessionStorage.getItem("secondText");
    secondText.innerHTML = storedValue;
}

// Cookie
const thirdText = document.getElementById("third-text");
thirdText.addEventListener("input", updateCookie);

function updateCookie(){
    document.cookie = `thirdText=${encodeURIComponent(thirdText.innerHTML)}`;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function setFromCookie () {
    const storedValue = getCookie("thirdText");
    thirdText.innerHTML = storedValue;
}

// Task 14
const upButton = document.querySelector(".go-up-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.documentElement.scrollTop + window.innerHeight > document.documentElement.scrollHeight - 200){
        upButton.style.display = "block";
    }else {
        upButton.style.display = "none"; 
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Task 15 
const externalBlock = document.querySelector(".external-block");
const internalBlock = document.querySelector(".internal-block");
externalBlock.addEventListener("click",showFirstMessage);
internalBlock.addEventListener("click",showSecondMessage);

function showFirstMessage() {
    alert("First message");
}

function showSecondMessage() {
    event.stopPropagation();
    alert("Second message");
}

// Task 16

const greySquare = document.querySelector(".grey-square");
greySquare.addEventListener("click",hideGreySquare);

function showSquare() {
    greySquare.style.display = "block";
    disableScroll();
}

function disableScroll() {
    document.body.style.overflow = "hidden";
}

function hideGreySquare () {
    document.body.style.overflow = "auto";
    greySquare.style.display = "none";
}

// Task 17 

const dropZone = document.getElementById("drop-zone");

dropZone.addEventListener("dragenter", (event) => {
    event.preventDefault();
    dropZone.classList.add("file-upload-over");
});

dropZone.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dropZone.classList.remove("file-upload-over");
});

dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
});

function fileSelected() {
  dropZone.classList.add("file-upload-after-choose");
}