var mainCharacter;
var gravity = 9.8 / 30.0;
var backgroundImage;
var mainCharacterImage;
var monsterImage;
var groundOffset = 100;
var monsterArray = [];
var health = 100;
var score = 0;
var monsterPlacement;
var gif_loadImg;
var button;

function setup() {
  createCanvas(800, 400);
  background(255);
  
  monsterPlacement = random(100, 250);
  mainCharacter = new Character(700, 200, 60);
  backgroundImage = loadImage("./spideysweb2.png");
  mainCharacterImage = loadImage("./spidey3.png");
  monsterImage = loadImage("./hw.png");

  //create new monsters
  for (var i = 0; i < 4; i++) {
  var newMonster = new Character(monsterPlacement*i, 325, 60);
    newMonster.isMonster = true;
    monsterArray.push(newMonster);
  }

}

