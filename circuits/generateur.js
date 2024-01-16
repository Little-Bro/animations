class Generateur {
  constructor() {
    this.x = 300;
    this.y = 100;
  }
  draw() {
    push();
    stroke(0);
    strokeWeight(2);
    fill('white');
    circle(this.x, this.y, 40);
    fill('black');
    textSize(24);
    text('G', this.x - 10, this.y + 10);

    
    // plus sign
    line(this.x - 30, this.y - 20, this.x - 20, this.y - 20);
    line (this.x - 25, this.y - 25, this.x - 25, this.y - 15);

    // minus sign
    line(this.x + 30, this.y - 20, this.x + 20, this.y - 20);
    pop();
  }
}