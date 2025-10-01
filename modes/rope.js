class Rope {
  constructor(start, end, y, factor) {
    this.start = start;
    this.end = end;
    this.y = y;
    this.factor = factor;
    this.active = false;
  }
  show() {
    push();
    strokeWeight(1.5);
    if (this.active) {
      let anchorY = this.y + this.factor * sin(0.5 * t);
      let len = this.factor / 4;
      bezier(this.start, this.y, this.start + len / 4, anchorY, this.end - len / 4, anchorY, this.end, this.y);      
    }
    else {
      line(this.start, this.y, this.end, this.y);
    }
    strokeWeight(1);
    fill('red');
    circle(this.start, this.y, 5);
    circle(this.end, this.y, 5);
    pop();
  }
}