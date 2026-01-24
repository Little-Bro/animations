class Arrow {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.angle = 0;
    this.len = 10;
    this.d;
    this.fromColor = color(0,0,255);
    this.toColor = color(255,0,0);
  }
  show(x, y) {
    push();
    if (this.pos.x > x)
      this.angle = PI + atan((y - this.pos.y)/(x - this.pos.x));
    else
      this.angle = atan((y - this.pos.y)/(x - this.pos.x));    

    this.d = dist(x, y, this.pos.x, this.pos.y);
    this.len = map(this.d, 0, 700, 15, 0);
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    line(0, 0, this.len, 0);
    line(this.len, 0, this.len - this.len/5, this.len/5);
    line(this.len, 0, this.len - this.len/5, -this.len/5);
    pop();
  }
}