class Atome {
	constructor(protons, neutrons) {
    let offset = 30;
		this.protons = protons;
		this.neutrons = neutrons;
    this.electrons = this.protons;
    this.protonsPos = [];
    this.neutronsPos = [];
    this.electronsPos = [];
    this.thetas = [];
    this.rayons = [];
    this.electronsObj = [];
    
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
      if (i == 0 || i == 1)
      	this.electronsObj.push(new Electron(100));
      else if (i > 1 && i <= 9)
        this.electronsObj.push(new Electron(200));
      else
        this.electronsObj.push(new Electron(300));
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
			this.electronsObj[i].show();
    }    
  }
  
  checkBoundaries() {
      if (this.tej) {
				this.rayons[0] += 5;
        if (this.rayons[0] > 500) {
          this.tej = false;
        }
      }
    if (this.comeIn) {
      this.rayons[this.electronsPos.length-1] -= 5;
      if (this.rayons[this.electronsPos.length-1] < 100) {
        this.comeIn = false;
      }
    }
  }
  
  ionise(number, type) {
    if (type == 'cation') {
			nbElectrons -= number;
      this.electronsObj[this.electronsObj.length - 1].electronSortant = true;
    }
    else if (type == 'anion') {
      nbElectrons += number;	
      for (let i = 0; i < number; i++) {
      	this.electronsObj.push(new Electron(900));
        this.electronsObj[this.electronsObj.length - 1].electronEntrant = true;
      }
      this.electrons += number;
    }
  }
}