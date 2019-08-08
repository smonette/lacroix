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
  "Yeast",
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






function randomize(items) {
  return Math.floor(Math.random() * (items.length))
}  

function randomColor(){
  let selectedColor = colors[randomize(colors)]
   $('body').css("background", selectedColor)
}

function generateName(){
 let firstFlavor = flavors[randomize(flavors)]
 let secondFlavor = flavors[randomize(flavors)]
 let newFlavors = [
    `${firstFlavor} - ${secondFlavor}`,
    `${firstFlavor} & ${secondFlavor}`,
    `Fresh ${firstFlavor}`,
    `Exotic ${firstFlavor}`,
    `Essence of ${secondFlavor}`
  ]

 $('#name-display').text(newFlavors[randomize(newFlavors)])
 randomColor()
}


$(document).ready(function() {
    generateName()
});

$("#generate-name-btn").click(function() {
    generateName()
});