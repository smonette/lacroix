let flavors = [
  "Cherry",
  "Acai",
  "Pomegranate",
  "Banana",
  "Kiwi",
  "Tangerine",
  "Aubergine",
  "Grapefruit",
  "Peach",
  "Pear",
  "Mint",
  "Corriander",
  "Potato",
  "Scallion",
  "Beer",
  "Coconut",
  "Sunblock",
  "Glitter",
  "Watermelon",
  "Strawberry",
  "Nectarine",
  "Rosemary",
  "Muskmelon",
  "Citron",
  "Clémentine",
  "Framboise",
  "L'orange",
  "Lychee",
  "Fig",
  "Yam",
  "Honeydew",
  "Corn",
  "Unicorn"
]

let colors = [
  "#5f02e7",
  "#39d6f9",
  "#e72b6d",
  "#73cda4",
  "#772485",
  "#976029",
  "#3cca2c",
  "#febf08",
  "#e2cf9a"
]

function soRandom(items) {
  return Math.floor(Math.random() * (items.length))
}  

function randomColor(){
  let selectedColor = colors[soRandom(colors)]
   $('#can-image:after').css("background", selectedColor)
}

function generateName(){
 let firstFlavor = flavors[soRandom(flavors)]
 let secondFlavor = flavors[soRandom(flavors)]
 $('#name-display').text(`${firstFlavor}-${secondFlavor}`)
 randomColor()
}


$(document).ready(function() {
    generateName()
});

$("#generate-name-btn").click(function() {
    generateName()
});