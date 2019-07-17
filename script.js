let firstNames = [
  "Tater",
  "Chanum",
  "Channing",
  "Tasty",
  "Tater Tot",
  "Chancey",
  "Tastey",
  "Turgid",
  "Churlish",
  "Mark Wahlberg",
  "Choo Choo",
  "Chandelier",
  "Chutney",
  "Hamming",
  "Hammy",
  "Toe Jam",
  "Chinning",
  "Toe Jam",
  "Chimney",
  "Charlie's",
  "Possum",
  "Chitty Chitty",
  "Curly",
  "Chowder",
  "Chuggachugga",
  "Poodle",
  "Chunnel",
  "Jittery",
  "Chunky",
  "Chunder",
  "Lady Chatterley's",
  "Chat",
  "Charming",
  "Chanting"
]

let lastNames = [
  "Tainting",
  "Tiny Tim",
  "Tum Tum",
  "Chanson",
  "Channel",
  "Tater Tot",
  "Turtle Toy",
  "Tates",
  "Toodles",
  "Train Train",
  "Tangles",
  "Chattanooga",
  "Tang Tang",
  "Trawler",
  "Totes",
  "Taterball",
  "Tamper",
  "Tablet",
  "Turkey",
  "Tootin'",
  "Mankell",
  "Tantrum",
  "Titter Tada",
  "Tang Bang",
  "Tada",
  "Tube Top",
  "TOOT TOOT!",
  "Muscle",
  "Atom",
  "Tilts",
  "Tatum",
  "Chatum",
  "💪💪💪"
]

function soRandom(items) {
  return Math.floor(Math.random() * (items))
}  

function generateName(){
    $("#first-name-display").text(firstNames[soRandom(firstNames.length)])
    $("#last-name-display").text(lastNames[soRandom(lastNames.length)])
}

$(document).ready(function() {
    generateName()
});

$("#generate-name-btn").click(function() {
    generateName()
});