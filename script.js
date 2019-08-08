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
  "Fig"
]

function soRandom(items) {
  return Math.floor(Math.random() * (items))
}  

function generateName(){
 let firstFlavor = flavors[soRandom(flavors.length)]
 let secondFlavor = flavors[soRandom(flavors.length)]
 $('#name-display').text(`${firstFlavor}-${secondFlavor}`)
 // return(`${firstFlavor}-${secondFlavor}`)
}


$(document).ready(function() {
    generateName()
});

$("#generate-name-btn").click(function() {
    generateName()
});