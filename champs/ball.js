class Ball {
  constructor(type, x, y) {
    this.type = type;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(1, 0);
    this.size = type == 'attractor' ? 20 : 10;
    this.d;
    // angling the acceleration vector towards the attractor
    this.angle = 0;
    if (this.type == 'attracted') {
      if (this.pos.x > attractor.pos.x)
        this.angle = PI + atan((attractor.pos.y - this.pos.y)/(attractor.pos.x - this.pos.x));
      else
        this.angle = atan((attractor.pos.y - this.pos.y)/(attractor.pos.x - this.pos.x)); 
      this.acc.rotate(this.angle);
    }
  }
  show() {
    push();
    noStroke();
    if (this.type == 'attractor') 
      fill('blue');
    else
      fill('red');
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
    }
  }
}