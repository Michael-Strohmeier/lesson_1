
function setup() {
  createCanvas(400, 400);
  
  // eyeRight
  eyeLeft = new Eye(200-30, 200);
  eyeRight = new Eye(200+30, 200);
}

function draw() {
  background(220, 220, 220);
  
  push();
  // face
  noStroke();
  fill(59, 217, 214);
  ellipse(200, 200, 200);
  pop();
  
  push();
  //left eye
  noStroke();
  fill(255, 255, 100);
  ellipse(200-30, 200, 45);
  pop();
  
  push();
  // right eye
  noStroke();
  fill(255, 255, 100);
  ellipse(200+30, 200, 45);
  pop();
  
  push();
  // mouth
  rectMode(CENTER);
  rect(200, 255, 30, 10, 4);
  pop();
  
  eyeLeft.draw();
  eyeRight.draw();
}

class Eye {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  update() {
    
  }
  
  draw() {
    let x = this.x - (200 - mouseX);
    
    if (x > this.x + 15) {
      x = this.x + 15;
    } 
    else if (x < this.x - 15) {
      x = this.x - 15;
    }
    
    push();
    fill(0);
    ellipse(x, this.y, 10);
    pop();
  }
}
