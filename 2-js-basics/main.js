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

// Task 12

// const longitude = document.querySelector(".user-longitude");
// const latitude = document.querySelector(".user-latitude");
// navigator.geolocation.getCurrentPosition((position) => {
//     longitude.innerHTML = position.coords.longitude;
//     latitude.innerHTML = position.coords.latitude;
// });

// Task 13