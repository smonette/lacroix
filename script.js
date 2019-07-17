/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
let firstNames = [
  "Tater",
  "Chanum",
  "Tasty",
  "Tater Tot",
  "Chancey",
  "Tastey",
  "Turgid",
  "Tiny Tim",
  "Tum Tum",
  "Churlish",
  "Mark Wahlberg",
  "Choo Choo"
]

let lastNames = [
  "Chanting",
  "Chancey",
  "Tainting",
  "Chanson",
  "Channel",
  "Tater Tot",
  "Turtle Toy",
  "Tates",
  "Toodles",
  "Train Train"
]

function soRandom(items) {
  return Math.floor(Math.random() * (items))
}  

function generateName(){
    $("#first-name-display").text(firstNames[soRandom(firstNames.length)])
    $("#last-name-display").text(firstNames[soRandom(firstNames.length)])
}


$(document).ready(function() {
    generateName()
});

$( "#generate-name-btn" ).click(function() {
  generateName()
});