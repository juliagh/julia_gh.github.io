var bubbles = [];
var bubble;
var score = 0;
var num = 20;
var left = num;
function setup() {
  createCanvas(550, 550);
  for (let i = 0; i < num; i++) {
    var x = random(width - 10);
    var y = random(height - 10);
    var r = random(40, 100);
    var b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}


function mouseOver() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}


function mousePressed() {
  for (var i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
      score += 1;
      left-=1;
    }
  }
}


function draw() {
  background(28, 8, 73, 50);
  for (var i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
  
  textSize(40);
  textFont('courier new');
  text(score, 150, 50);
  text("Score:", 0, 50);
  text("Remaining:", 0, 100);
  text(left, 240, 100);
  if (score == 20) {
    text("YOU WIN!", 200, 250);
  }
}


class Bubble {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(sx, sy) {
    let d = dist(sx, sy, this.x, this.y);
    if (d < this.diameter) {
      return this.diameter
    } 
  }

  move() {
    this.x = this.x + random(-4, 4);
    this.y = this.y + random(-4, 4);
  }

  show() {
    fill(this.brightness, 50);
    stroke(255);
    strokeWeight(2);
    ellipse(this.x, this.y, this.diameter);
  }
}