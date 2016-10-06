 var numSquares = 6;
 var colors = generateRandomColors(numSquares);

 var squares = document.querySelectorAll(".square");
 var pickedColor = pickColor();
 var colorDisplay = document.getElementById("colorDisplay");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 var resetButton = document.querySelector("#reset");
 var easyBtn = document.querySelector("#easyBtn");
 var hardBtn = document.querySelector("#hardBtn");


 easyBtn.addEventListener("click", function() {
     hardBtn.classList.remove("selected");
     easyBtn.classList.add("selected");
     numSquares = 3;
     colors = generateRandomColors(numSquares);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     for (var i = 0; i < squares.length; i++) {
         if (colors[i]) {
             squares[i].style.background = colors[i];
         } else {
             squares[i].style.display = "none";
         }
     }
     messageDisplay.textContent = "";
 });

 hardBtn.addEventListener("click", function() {
     hardBtn.classList.add("selected");
     easyBtn.classList.remove("selected");
     numSquares = 6;
     colors = generateRandomColors(numSquares);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     for (var i = 0; i < squares.length; i++) {
         squares[i].style.background = colors[i];
         squares[i].style.display = "block";
     }
     messageDisplay.textContent = "";
 });

 resetButton.addEventListener("click", function() {
     //generate all new clolor
     // alert("clicked");
     colors = generateRandomColors(numSquares);
     // pick a new color 
     pickedColor = pickColor();
     // colorDisplay to match picked color
     colorDisplay.textContent = pickedColor;
     //change clor of squares
     for (var i = 0; i < squares.length; i++) {
         //add initial color to squares
         squares[i].style.background = colors[i];
     }
     h1.style.background = "steelblue";
     messageDisplay.textContent = "";
 })

 colorDisplay.textContent = pickedColor;

 for (var i = 0; i < squares.length; i++) {
     //add initial color to squares
     squares[i].style.background = colors[i];
     //add click liseners to squares
     squares[i].addEventListener("click", function() {
         //grab color  of clicked square
         var clickedColor = this.style.background;
         //compare color to pickedcolor
         if (clickedColor === pickedColor) {
             messageDisplay.textContent = "correct!";
             resetButton.textContent = "Play again?"
             changeColors(clickedColor);
             h1.style.background = clickedColor;
         } else {
             this.style.background = "#232323";
             messageDisplay.textContent = "Try again";
         }
     });
 }

 function changeColors(color) {
     //loop through all squers
     for (var i = 0; i < squares.length; i++) {
         //change each color to matc given color
         squares[i].style.background = color;
     }
 }

 function pickColor() {
     var random = Math.floor(Math.random() * colors.length);
     return colors[random];
 }

 function generateRandomColors(num) {
     //make an array
     var arr = [];
     // add num rendom clors to array
     for (var i = 0; i < num; i++) {
         //get rendom clolor
         arr.push(randomColor());
     }
     //return that array
     return arr;
 }

 function randomColor() {
     //pick a "red" from 0 - 255
     var r = Math.floor(Math.random() * 256);
     //pick a "red" from 0 - 255
     var g = Math.floor(Math.random() * 256);
     //pick a "red" from 0 - 255
     var b = Math.floor(Math.random() * 256);
     "rgb(r, g, b)"
     return "rgb(" + r + ", " + g + ", " + b + ")";

 }
