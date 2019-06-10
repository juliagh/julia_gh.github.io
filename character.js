class Character {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.xSpeed = 2;
    this.width = width;
    this.color = "blue";
    this.isMonster = false;
    this.isDead = false;
    this.targetX = random()*width;
  }
  
  update(){ 
    //update both mainCharacter and monsters
	if(this.y+this.width*0.5 >= (height-groundOffset) && this.ySpeed > 0) 
    {
      this.ySpeed = this.ySpeed*(-0.4);
      this.y = height-this.width*0.5-groundOffset;
    }
   this.ySpeed += gravity;
   this.y += this.ySpeed;
    
  }
  
  
  updateMC() {
    //update only spiderman
    this.xSpeed *= 0.8;
   this.x += this.xSpeed;
  }
  
  moveBadGuy(){
    //update only the monsters
    if (this.x+this.width >= width || this.x <=0){
      this.xSpeed = this.xSpeed *-1.01;
    }
    
    this.x-=this.xSpeed;
    this.isTouchingMainCharacter();
  }
  
  isTouchingMainCharacter(){
    if(mainCharacter.x + mainCharacter.width >= this.x && mainCharacter.x <= this.x+this.width && mainCharacter.y + mainCharacter.width >= this.y && mainCharacter.y <= this.y+this.width){
      stroke("black");
      noFill();
      rect(this.x, this.y, this.width, this.width);

      if(mainCharacter.y - this.y < -30){
        this.isDead = true;
        mainCharacter.ySpeed = -2;
        score++;
      } else {
        health -= 0.3;
      }
    }
  }
  
  
  draw(){
    if(this.isMonster){
      image(monsterImage, this.x, this.y, this.width, this.width)
    } else {
      image(mainCharacterImage, this.x, this.y, this.width, this.width);
    }
  }
}
