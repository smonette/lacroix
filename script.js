let flavors = [
  "Apple", 
  "Asparagus",
  "Aubergine",
  "Bacon",
  "Baja Blast",
  "Banana",
  "Beer",
  "Bell Pepper",
  "Cardamom",
  "Celery",
  "Chorizo",
  "Citron",
  "Clémentine",
  "Coconut",
  "Corn",
  "Corriander",
  "Cough Syrup",
  "Crab",
  "Durian",
  "Ennui",
  "Fig",
  "Flax",
  "Foie Gras",
  "Framboise",
  "Garbanzo Bean",
  "Garlic Bread",
  "Ginger",
  "Glitter",
  "Grapefruit",
  "Honeydew",
  "Kiwi",
  "L'orange",
  "Loofah",
  "Lychee",
  "Malort",
  "Matcha",
  "Mint",
  "Muskmelon",
  "Nectarine",
  "Nostalgia",
  "Pickle",
  "Pluot",
  "Potato",
  "Pumpkin Spice",
  "Rosemary",
  "Saffron",
  "Scallion",
  "Scallops",
  "Shawarma",
  "Shrimp",
  "Sourdough",
  "Strawberry",
  "Sunblock",
  "Taco",
  "Tangerine",
  "Tofu",
  "Truffle",
  "Tumeric",
  "Unicorn",
  "Walnut",
  "Wasabi",
  "Watermelon",
  "Yam",
  "Yeast",
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
  "#ffbe61",
  "#F47C7C"
]

function randomize(items) {
  return Math.floor(Math.random() * (items.length))
}  

function randomColor(){
  let selectedColor = colors[randomize(colors)]
   $('body, #screencap').css("background", selectedColor)
}

function generateName(){
 let firstFlavor = flavors[randomize(flavors)]
 let secondFlavor = flavors[randomize(flavors)]
 let newFlavors = [
    `${firstFlavor} - ${secondFlavor}`,
    `${firstFlavor} & ${secondFlavor}`,
    `Fresh ${firstFlavor}`,
    `Exotic ${firstFlavor}`,
    `${secondFlavor} Essence`,
    `Essence of ${secondFlavor}`
  ]

    $('#name-display').text(newFlavors[randomize(newFlavors)])
    randomColor()
    setTimeout(updateScreencap, 0);
}


$(document).ready(function() {
    generateName()
})

$("#generate-name-btn").click(function() {
    generateName()
})