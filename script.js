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
  "Flax",
  "Shrimp",
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
  "Apple", 
  "Yam",
  "Honeydew",
  "Corn",
  "Unicorn",
  "Taco",
  "Donut"
]

let colors = [
  "#DED29E",
  "#DABFDE",
  "#C1BBDD",
  "#ACECD5",
  "#F47C7C",
  "#F7F48B",
  "#A1DE93",
  "#F7F48B",
  "#F47C7C"
]

function soRandom(items) {
  return Math.floor(Math.random() * (items.length))
}  

function randomColor(){
  let selectedColor = colors[soRandom(colors)]
   $('body').css("background", selectedColor)
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