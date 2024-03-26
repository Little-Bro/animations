class Atome {
	constructor(x, y) {
		this.x = x;
    this.y = y;
    this.r = 30;
    this.theta = random(0, TWO_PI);
    this.ex = 0;
    this.ey = 0;
  }
  show() {
    push();
    if (!courant) {
      this.theta += PI / 100;
      this.ex = this.x + this.r * cos(this.theta);
      this.ey = this.y + this.r * sin(this.theta);
    } else {
			this.ex += 2.5;
      this.ey += 2;
    }
    
    if (this.ex > 450 && this.ey > 450) {
			this.ex = random(250, 350);
      this.ey = random(250, 350);
    }
    
    imageMode(CENTER);
    image(noyau, this.x, this.y, 30, 30);
    noStroke();
    fill(0, 0, 255);
    circle(this.ex, this.ey, 10);
    pop();
  }
}