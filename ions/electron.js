class Electron {
	constructor(r, theta) {
		this.r = r;
    this.theta = random(0, TWO_PI);
    this.electronSortant = false;
    this.electronEntrant = false;
  }
  show() {
    this.theta += PI/200;
    let x = width/2 + this.r * cos(this.theta);
    let y = height/2 + this.r * sin(this.theta);
    if (this.electronSortant)
      this.r += 5;
    if (this.electronEntrant && this.r >= 305)
      this.r -= 5;
    fill(0, 0, 255);
		circle(x, y, 10);
    line(x - 4, y, x + 4, y)
  }
}