//Create each array for the 4 Avengers movies
var avengersRed = ["Iron Man", "Scarlet Witch", "Vision", "Thor"]
var avengersBlue = ["Captain Marvel", "Quicksilver", "Captain America", "Spiderman", "Loki", "Nebula"]
var avengersBlack = ["Black Panther", "Winter Soldier", "Black Widow", "Hawkeye"]
var avengersGreen = ["Gamora", "Hulk", "Vers"]
//Create variable to change words
var update = {
  a: 0,
  b: 0,
  c: 0,
  d: 0
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(192);
  //Write text on canvas
  textSize(30);
  textStyle(ITALIC);
  textFont('Georgia');
  fill(183, 15, 15);
  text(avengersRed[update.a], 5, 50);
  fill(51, 53, 204);
  text(avengersBlue[update.b], 5, 150);
  fill(0);
  text(avengersBlack[update.c], 5, 250);
  fill(63, 168, 42);
  text(avengersGreen[update.d], 5, 350);
  //Background A
  textSize(500);
  textStyle(NORMAL);
  textFont('Times New Roman');
  fill(240, 255, 255, 100);
  text("A", 35, 375);
}

function mousePressed() {
  //Update variable(words)
  update.a += 1
  update.b += 1
  update.c += 1
  update.d += 1
  //Go back to the 0th item when reaches end
  if (update.a == avengersRed.length) {
    update.a = 0
  }

  if (update.b == avengersBlue.length) {
    update.b = 0
  }

  if (update.c == avengersBlack.length) {
    update.c = 0
  }

  if (update.d == avengersGreen.length) {
    update.d = 0
  }
}