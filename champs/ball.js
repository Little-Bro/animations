class Ball {
  constructor(type, x, y) {
    this.type = type;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(1, 0);
    this.showArrows = true;
    this.size = type == 'attractor' ? 20 : 10;
    this.d;
    this.field = new Arrow(this.pos.x, this.pos.y);
    this.force = new Arrow(this.pos.x, this.pos.y, true);
    // angling the acceleration vector towards the attractor
    this.angle = 0;
    if (this.type == 'attracted') {
      if (this.pos.x > attractor.pos.x)
        this.angle = PI + atan((attractor.pos.y - this.pos.y)/(attractor.pos.x - this.pos.x));
      else
        this.angle = atan((attractor.pos.y - this.pos.y)/(attractor.pos.x - this.pos.x)); 
      this.angle = flyAway ? this.angle + PI : this.angle; 
      this.acc.rotate(this.angle);
    }
  }
  show() {
    push();
    noStroke();
    if (this.type == 'attractor') 
      fill(136, 252, 240);
    else {
      fill(232, 85, 85);
    }
    circle(this.pos.x, this.pos.y, this.size);
    pop();
  }
  moveTowards(x, y) {
    // calculating distance between attractor and attracted
    let d = dist(x, y, this.pos.x, this.pos.y);  
    this.acc.normalize();
    // accelerating the attracted particle
    // until it hits the attractor
    if (d > 15) {
      this.acc.setMag(5/(d));
      this.vel.add(this.acc);
      this.pos.add(this.vel);    
    } else {
      this.showArrows = false;
    }
  }
}