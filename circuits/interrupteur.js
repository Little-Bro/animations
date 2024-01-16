class Interrupteur {
  constructor() {
    this.x1 = 150;
    this.y1 = 150;
    this.x2 = 150;
    this.y2 = 200;
    this.closed = true;
  }

  draw() {
    push();
    if (this.closed){
      stroke(0);
      line(this.x1, this.y1, this.x2, this.y2);
      circle(this.x1, this.y1, 4);
      circle(this.x2, this.y2, 4);
    }
    else {
      stroke(255);
      line(this.x1, this.y1, this.x2, this.y2);
      stroke(0, 0, 0, 100);
      line(this.x1, this.y1, this.x2 + 20, this.y2 - 5);
      fill(0, 0, 0, 100);
      circle(this.x1, this.y1, 4);
      circle(this.x2, this.y2, 4);
      stroke(0);
    }
    // fill(0);
    // stroke(0);

    pop();
  }

  update() {
  }
}