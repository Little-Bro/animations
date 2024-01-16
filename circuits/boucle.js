class Boucle {
  constructor(longueur, dipole, index) {
    this.x = 150;
    this.y = 100;
    this.largeur = 300;
    this.longueur = longueur;
    this.courant = true;
    this.dipole = dipole;
    this.arrows = [];
    this.index = index;
    // for (let i = 0; i < 3; i++) {
    //   this.arrows.push(new Arrow(this.x, this.y + i * 20, this.largeur, this.longueur, 'DOWN'))
    // }
    this.arrows.push(new Arrow(this.x, this.y, this.largeur, this.longueur));
  }

  draw() {
    noFill();
    strokeWeight(2);
    if (this.courant)
      stroke(0, 0, 0);
    else 
      stroke(0, 0, 0, 50)
    rect(this.x, this.y, this.largeur, this.longueur);
    if (this.dipole) {
      this.dipole.draw();
    }
  }

  update() {
    if (this.courant) {
      for (let a of this.arrows) {
        a.update(this.courant);
      }
    }
  }
}