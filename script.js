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
  "Sourdough",
  "Shrimp",
  "Sunblock",
  "Glitter",
  "Queso",
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
 let newFlavors = [
    `${firstFlavor} - ${secondFlavor}`,
    `${firstFlavor} & ${secondFlavor}`,
    `Fresh ${firstFlavor}`,
    `Exotic ${firstFlavor}`,
    `Essence of ${secondFlavor}`
  ]

 $('#name-display').text(newFlavors[soRandom(newFlavors)])
 randomColor()
}


$(document).ready(function() {
    generateName()
});

$("#generate-name-btn").click(function() {
    generateName()
});