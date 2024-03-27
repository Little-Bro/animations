let boucles = [];
let generateur, lampe, interrupteur;
let consigne;

function setup() {
  createCanvas(700, 550);
  consigne = createP("Cliquez sur les lampes pour les dévisser.<br>Cliquez sur l'interrupteur pour l'\ouvrir ou le fermer.")
  generateur = new Generateur();
  interrupteur = new Interrupteur();
  // génération des boucles
  for (let i = 0; i < 3; i++) {
    let boucle = new Boucle(i * 120 + 150, new Lampe(i * 120 + 150), i);
    boucles.push(boucle);
  }
}

function draw() {
  background(255);
  // texte
  push();
  noStroke();
  textSize(19);
  boucles[0].courant ? fill(0) : fill(0, 0, 0, 100);
  text('boucle principale', 500, 100);
  boucles[1].courant ? fill(0, 0, 255) : fill(0, 0, 255, 100);
  text('boucle 2', 500, 150);
  boucles[2].courant ? fill(255, 0, 0) : fill(255, 0, 0, 100);
  text('boucle 3', 500, 200);
  pop();

  boucles.forEach(function(b, i) {
    for (let a of b.arrows) {
      if (b.courant)
        a.draw(i);
    }
    b.draw();
    b.update();
  })
    generateur.draw();
    interrupteur.draw();
}

function mouseClicked() {
  for (let b of boucles) {
    let distanceToLamp = dist(mouseX, mouseY, b.dipole.x, b.dipole.y);
    if (distanceToLamp < 20 && interrupteur.closed) {
      b.dipole.on = !b.dipole.on;
      b.courant = !b.courant;
    }
  }
  if (mouseX >= interrupteur.x1 - 20 && mouseX < interrupteur.x1 + 20) {
    if (mouseY <= interrupteur.y2 && mouseY >= interrupteur.y1) {
      interrupteur.closed = !interrupteur.closed;
      for (let b of boucles) {
        if (!interrupteur.closed) {
          b.dipole.on = false;
          b.courant = false;
        } else {
            b.dipole.on = true;
            b.courant = true;
        }
      }
    }
  }
}