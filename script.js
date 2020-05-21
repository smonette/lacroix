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
  "Wasabi",
  "Loofah",
  "Malort",
  "Pickle",
  "Bell Pepper",
  "Garlic Bread",
  "Celery",
  "Asparagus"
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

// Screenshot tool by @Potch
let canvas = document.createElement('canvas');
function updateScreencap() {
    let el = document.getElementById('screencap');
    let elStyle = getComputedStyle(el);
    canvas.width = el.offsetWidth;
    canvas.height = el.offsetHeight;
  
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = getComputedStyle(document.body).backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let logo = document.querySelector('.logo');
    ctx.drawImage(logo, canvas.width / 2 - logo.width / 2, parseInt(elStyle.paddingTop), logo.width, logo.height);
    
    let name = document.querySelector('#name-display');
    let nameTop = name.offsetTop - el.offsetTop + name.offsetHeight / 2;
    let nameStyle = getComputedStyle(name);
    ctx.font = nameStyle.fontWeight + ' ' + nameStyle.fontSize + ' ' + nameStyle.fontFamily;
    ctx.fillStyle = nameStyle.color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name.innerText, canvas.width / 2, nameTop);
    
    let dataUrl = canvas.toDataURL();
    let link = document.querySelector('#screencap-btn');
    link.download = 'lacroix.png'
    link.href = dataUrl;
}