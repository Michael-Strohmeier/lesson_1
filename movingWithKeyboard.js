function setup() {
  createCanvas(400, 400);
  player = new Player();
}

function draw() {
  background(220);
  player.draw();
}

class Player {
  constructor() {
    this.x = 200;
    this.y = 200;
  }
  
  move() {
    // https://p5js.org/reference/#/p5/keyCode
    // 65 == "A"
    if (keyIsDown(65)) {
      // move left
      this.x -= 3;
      //this.x = this.x - 1.5;
    }
   
    if (keyIsDown(68)) {
      // move right
      this.x += 3;
    }
   
    if (keyIsDown(83)) {
      // move down
      this.y += 3;
    }
   
    if (keyIsDown(87)) {
      // move up
      this.y -= 3;
    }
    
  }
  
  draw() {
    this.move();
    ellipse(this.x, this.y, 75);
    
    textSize(30);
    textAlign(CENTER, CENTER);
    
    let x = int(this.x);
    let y = int(this.y);
    text(x + ", " + y, this.x, this.y);
  }
}
