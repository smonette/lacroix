let flavor1 = [
  "Acai",
  "Pomegranate",
  "Banana",
  "Kiwi",
  "Tangerine",
  "Grapefruit",
  "Pluot",
  "Mint",
  "Watermelon",
  "Strawberry",
  "Nectarine",
  "Muskmelon",
  "Citron",
  "Clémentine",
  "Framboise",
  "L'orange",
  "Lychee",
  "Fig",
  "Apple", 
  "Honeydew"
]

let flavor2 = [
  "Aubergine",
  "Corriander",
  "Potato",
  "Scallion",
  "Beer",
  "Walnut",
  "Flax",
  "Shrimp",
  "Sunblock",
  "Glitter",
  "Muskmelon",
  "Bacon",
  "Butter",
  "Yam",
  "Corn",
  "Unicorn",
  "Taco",
  "Chorizo",
  "Donut",
  "Cough Syrup"
]

let flavors = [
  "Acai",
  "Pomegranate",
  "Banana",
  "Kiwi",
  "Tangerine",
  "Aubergine",
  "Grapefruit",
  "Pluot",
  "Mint",
  "Corriander",
  "Potato",
  "Scallion",
  "Beer",
  "Coconut",
  "Walnut",
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
  "Bacon",
  "Clémentine",
  "Framboise",
  "L'orange",
  "Lychee",
  "Fig",
  "Butter",
  "Apple", 
  "Yam",
  "Honeydew",
  "Corn",
  "Unicorn",
  "Taco",
  "Chorizo",
  "Donut",
  "Cough Syrup"
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



// function generateNewName(){
//  let firstFlavor = flavors[soRandom(flavors)]
//  let secondFlavor = flavors[soRandom(flavors)]
//  $('#name-display').text(`${flavor1} - ${flavor2}`)
//  randomColor()
// }



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
 $('#name-display').text(`${firstFlavor} - ${secondFlavor}`)
 randomColor()
}


$(document).ready(function() {
    generateName()
});

$("#generate-name-btn").click(function() {
    generateName()
});