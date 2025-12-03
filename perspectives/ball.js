class Ball {
  constructor(x, y, col, mov) {
    this.x = x;
    this.y = y;
    this.col = col;
    this.mov = mov;
    this.theta = 0;
    this.startX = x;
    this.startY = y;
    this.trace = [];
    this.limit = 0;
    this.chosen = true;
  }
  show() {
    push();
    fill(this.col);
    strokeWeight(2);
    circle(this.x, this.y, 25);
    pop();
  }
  update() {
    switch(this.mov) {
      case "circle":
        this.theta += PI/300;
        this.x = this.startX + 50 * cos(this.theta);
        this.y = this.startY + 50 * sin(this.theta);
      break;
      case "line":
        this.theta += PI/100;
        this.y += 2 * sin(this.theta);
      default:
      break;
    }
  }
  
}
