class Element {
	constructor(x, y, z, args) {
		this.x = x;
    this.y = y;
    this.z = z;
    this.symbole = args[0];
    this.orbitale = args[1];
    this.nom = args[2];
    this.metal = args[3];
    this.selectionne = false;
  }
  show() {
    push();
    if (choix == 'orbitales') {
      if (this.orbitale == 's') {
        fill(255, 226, 191);
      } else if (this.orbitale == 'p') {
        fill(205, 255, 204);
      } else if (this.orbitale == 'd') {
        fill(204, 246, 255);
      } else if (this.orbitale == 'f') {
        fill(252, 189, 251);
      }
    } else if (choix == 'metaux') {
      switch (this.metal) {
        case 'non métal':
          fill(252, 170, 83);
          break;
        case 'alcalin':
          fill(97, 166, 244);
          break;
        case 'alcalino-terreux':
          fill(252, 207, 5);
          break;
        case 'métal de transition':
          fill(162, 232, 242);
          break;
        case 'métal pauvre':
          fill(247, 99, 76);
          break;      
        case 'métalloïde':
          fill(188, 249, 127);
          break; 
        case 'halogène':
          fill(245, 249, 127);
          break; 
        case 'gaz noble':
          fill(92, 188, 158);
          break;    
        case 'lanthanide':
          fill(143, 114, 224);
          break; 
        case 'actinide':
          fill(224, 139, 188);
          break;  
      } 
    }

    if (this.selectionne) {
			//stroke('red');
      fill('yellow');
    }
    rect(this.x, this.y, 35, 50);
    fill('black');
    textStyle(NORMAL);
    textAlign(CENTER);
    textSize(18);
    let xsymbole = this.symbole.length == 1 ? this.x + 11 : this.x + 5;
    text(this.symbole, this.x + 17, this.y + 25);
    let xNumAtom = this.z.toString().length == 1 ? this.x + 12 : this.x + 7;
      
    text(this.z + 1, this.x + 17, this.y + 45);
    pop();
  }
}