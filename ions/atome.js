class Atome {
	constructor(protons, neutrons) {
    let offset = 30;
    this.isAtom = true;
		this.protons = protons;
		this.neutrons = neutrons;
    this.electrons = this.protons;
    this.protonsPos = [];
    this.neutronsPos = [];
    this.electronsPos = [];
    this.thetas = [];
    
    // protons
    for (let i = 0; i < this.protons; i++) {
			let pos = createVector(width/2 + random(offset), height/2 + random(offset));
      this.protonsPos.push(pos);
    }
    
    // neutrons
    for (let i = 0; i < this.neutrons; i++) {
			let pos = createVector(width/2 + random(offset), height/2 + random(offset));
      this.neutronsPos.push(pos);
    }
    
    // electrons
    for (let i = 0; i < this.protons; i++) {
      this.thetas.push(random(0, TWO_PI));
    	let pos = createVector(width/2 + random(100, 250), height/2 + random(100, 250));
      this.electronsPos.push(pos);
    }
  }
  
  show() {
    noStroke();
    //neutrons
   	for (let i = 0; i < this.neutrons; i++) {
		  fill(0, 255, 0, 150);
      circle(this.neutronsPos[i].x, this.neutronsPos[i].y, 15);
      for (let j = 0; j < i; j++) {
				let d = dist(this.neutronsPos[i].x, this.neutronsPos[i].y, this.neutronsPos[j].x, this.neutronsPos[j].y)
        if (d < 10) {
        	this.neutronsPos[i].add(p5.Vector.random2D());
        }
      } 
    }
    // protons
    for (let i = 0; i < this.protons; i++) {
			fill(255, 0, 0, 150);
      stroke(255, 0, 0);
      circle(this.protonsPos[i].x, this.protonsPos[i].y, 15);
      stroke(1);
      line(this.protonsPos[i].x - 4, this.protonsPos[i].y, this.protonsPos[i].x + 4, this.protonsPos[i].y)
      line(this.protonsPos[i].x, this.protonsPos[i].y - 4, this.protonsPos[i].x, this.protonsPos[i].y + 4)
      for (let j = 0; j < i; j++) {
				let d = dist(this.protonsPos[i].x, this.protonsPos[i].y, this.protonsPos[j].x, this.protonsPos[j].y)
        if (d < 10) {
        	this.protonsPos[i].add(p5.Vector.random2D());
        }
      } 
    }
    stroke(0);
    
    // électrons
    for (let i = 0; i < this.electrons; i++) {
    	fill(0, 0, 255);
      let x1 = this.electronsPos[i].x;
      let y1 = this.electronsPos[i].y;
      let x2 = width/2;
      let y2 = height/2;
      let r = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
      let x = width/2 + r * cos(this.thetas[i]);
      let y = height/2 + r * sin(this.thetas[i]);
      circle(x, y, 10);
      line(x - 4, y, x + 4, y)
    }
  }
  
  ionise(number, type) {
    if (type == 'cation')
			this.electrons -= number;
    else if (type == 'anion') {
      this.electrons += number
			for (let i = 0; i < number; i++) {
        this.thetas.push(random(0, TWO_PI));
        let pos = createVector(width/2 + random(100, 250), height/2 + random(100, 250));
        this.electronsPos.push(pos);
    	}
    }
    ;
  }
}