let flavors = [
  "Banana",
  "Kiwi",
  "Tangerine",
  "Grapefruit",
  "Pluot",
  "Mint",
  "Coconut",
  "Walnut",
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
  "Corriander",
  "Potato",
  "Scallion",
  "Beer",
  "Honeydew",
  "Aubergine",
  "Flax",
  "Sourdough",
  "Shrimp",
  "Sunblock",
  "Glitter",
  "Bacon",
  "Yeast",
  "Yam",
  "Corn",
  "Unicorn",
  "Taco",
  "Chorizo",
  "Cough Syrup",
  "Scallops",
  "Tumeric",
  "Saffron",
  "Pumpkin Spice",
  "Cardamom",
  "Ginger",
  "Durian",
  "Tofu",
  "Truffle",
  "Crab",
  "Nostalgia",
  "Ennui",
  "Shawarma",
  "Garbanzo Bean",
  "Foie Gras",
  "Wasabi"
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



var capture = $('#screencap')

$("#screencap-btn").click(function(e) {
    e.preventDefault()
  
    domtoimage.toPng(document.getElementById('screencap'), { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
        });
})