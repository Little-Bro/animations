class Lampe {
  constructor(y) {
    this.x = 300;
    this.y = 100 + y;
    this.on = true;
  }

  draw() {
    push();
    strokeWeight(2);
    if (this.on) {
      stroke(0);
      fill('yellow');
    }
    else {
      stroke(0, 0, 0, 100);
      fill('white');
    }
    circle(this.x, this.y, 40);
    line(this.x - 14, this.y - 14, this.x + 14, this.y + 14);
    line(this.x - 14, this.y + 14, this.x + 14, this.y - 14);
    line();
    pop();
  }

  update() {
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < 20 && mouseIsPressed)
      this.on = !this.on;
  }
}