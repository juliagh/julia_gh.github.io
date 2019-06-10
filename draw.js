function preload() {
  gif_loadImg = loadImage("spideywins.gif");
}

function draw() {
  strokeWeight(3);
  stroke("black");
  //if you lose
  if (health <= 0) {
    background(0);
    fill("white");
    text("GAME OVER. \nSCORE " + score, 200, 200, 200, 50);
    return;
  }
  //if you win
  if (score >= 3 && health > 0) {
    background(0);
    gif_createImg = createImg("spideywins.gif");
    gif_createImg.position(0, 0, width, height);
    text("Peter finished his hw and now can go kickass with Iron Man \n" + "although everyone knows Cap is on the right side of this fight.", 20, 300)
    fill("white");
    return;
  }
  
  //draw background
  background(255);
  image(backgroundImage, 0, 0, width, height);

  //make keys work for game
  if (keyIsDown(LEFT_ARROW)) {
    mainCharacter.xSpeed -= 1.0;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    mainCharacter.xSpeed += 1.0;
  }
  
  //update spidey
  mainCharacter.update();
  mainCharacter.draw();
  mainCharacter.updateMC();

  //draw health bar
  fill("red");
  stroke("black");
  rect(10, 10, health * 2, 20);

  //draw score
  fill("red");
  textSize(20);
  text(score, width - 40, 10, 40, 20);


  var anyCatAlive = false;

  for (var i = 0; i < monsterArray.length; i++) {
    if (monsterArray[i].isDead) {
      //do nothing! (because monster is dead)
    } else {
      //if monster alive then update it
      anyCatAlive = true;
      monsterArray[i].update();
      monsterArray[i].moveBadGuy();
      monsterArray[i].draw();
    }
  }

  if (anyCatAlive === false) {
    for (var i = 0; i < 3; i++) {
      //add new monsters when after they die
      var newMonster = new Character(monsterPlacement * i, 325, 60);
      newMonster.isMonster = true;
      monsterArray.push(newMonster);
    }
  }

}

function keyPressed() {
  //&& mainCharacter.y >= 260
  if (key === " " && mainCharacter.y >= 260) {
    //JUMP!
    mainCharacter.ySpeed -= 10.0;
  }
}

  