class Arrow {
  constructor(parentX, parentY, parentWidth, parentHeight, parentColor, dir) {
    this.x = parentX;
    this.y = parentHeight;
    this.parentX = parentX;
    this.parentY = parentY;
    this.parentWidth = parentWidth;
    this.parentHeight = parentHeight;
    this.moveSpeed = 2,5;
    this.dir = dir;
  }
  draw(index) {
    push();
    translate(this.x, this.y);
    strokeWeight(3);
    if (index == 0)
      stroke(0);
    else if (index == 1)
      stroke(0, 0, 255);
    else if (index == 2)
      stroke(255, 0, 0);
    if (this.dir == 'LEFT') {
      line(0, 0, 5, -5);
      line(0, 0, 5, 5);
    } else if (this.dir == 'RIGHT') {
      line(0, 0, -5, 5);
      line(0, 0, -5, -5);      
    } else if (this.dir == 'UP') {
      line(0, 0, -5, 5);
      line(0, 0, 5, 5);      
    } else if (this.dir == 'DOWN') {
      line(0, 0, -5, -5);
      line(0, 0, 5, -5);      
    } else {
      noStroke();
    }
    pop();
  }

  update(courant) {
    push();
    if (courant) {
      if (this.x < this.parentWidth + 150 && this.y == this.parentHeight + 100) {
        this.x += this.moveSpeed;
        this.dir = 'RIGHT';
      }
      else if (this.x > this.parentX && this.y == 100) {
        this.x -= this.moveSpeed;
        this.dir = 'LEFT';
      }
      if (this. x == this.parentWidth + 150 && this.y > this.parentY) {
        this.y -= this.moveSpeed;
        this.dir = 'UP';
      }
      else if (this.x == 150 && this.y < this.parentHeight + 100) {
        this.y += this.moveSpeed;
        this.dir = 'DOWN';
      }         
    } else {
      this.dir = 'None';
    }
    pop();
  }
}