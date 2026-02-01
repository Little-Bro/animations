class Arrow {
  constructor(x, y, isForce, isUnitVector) {
    this.pos = createVector(x, y);
    this.angle = 0;
    this.len = 10;
    this.d;
    this.isForce = isForce;
    this.isUnitVector = isUnitVector;
    this.pointingAway = false;
  }
  show(x, y, updatedX, updatedY) {
    push();
    if (arguments.length == 4) {
      this.pos.x = updatedX;
      this.pos.y = updatedY;
    }

    if (this.pos.x > x)
      this.angle = PI + atan((y - this.pos.y)/(x - this.pos.x));
    else
      this.angle = atan((y - this.pos.y)/(x - this.pos.x));    

    this.d = dist(x, y, this.pos.x, this.pos.y);
    this.len = map(this.d, 0, 700, 15, 0);
    if (this.isForce) {
      this.len *= 2;
      stroke(125, 107, 244); 
    }
    if (this.isUnitVector) {
      this.len = 10;
      stroke(46, 165, 38);
    }
    translate(this.pos.x, this.pos.y);
    this.angle = this.pointingAway ? this.angle + PI : this.angle;
    rotate(this.angle);
    line(0, 0, this.len, 0);
    line(this.len, 0, this.len - this.len/5, this.len/5);
    line(this.len, 0, this.len - this.len/5, -this.len/5);
    pop();
  }
}