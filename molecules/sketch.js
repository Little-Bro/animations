let moleculeAffichee;
let formule;

function setup() {
	createCanvas(500, 500, WEBGL);
  moleculeAffichee = 'Eau';
  //camera(0, 0, 50*sqrt(3), 0, 0, 0, 0, 1, 0);
  //perspective(PI / 3.0, width / height, 0.1, 500);
}

function draw() {
	background(200);
  //rotateX(0.01 * frameCount);
  //rotateY(0.01 * frameCount);
	orbitControl(5, 5, 5, {freeRotation: true});
  orbitControl();
  if (moleculeAffichee == 'Eau') {
    noStroke();
    push();
    fill(255, 0, 0)
    sphere(40);
    pop();
    push();
    translate(45, 45, 0);
    sphere(25);
    pop();
    push();
    translate(-45, 45, 0);
    sphere(25);
    translate(0, 0);
    pop();
  } else if (moleculeAffichee == 'Dihydrogène') {
		push();
    translate(-25, 0, 0);
    sphere(25);
    pop();
    push();
    translate(25, 0, 0);
    sphere(25);
    pop();
  } else if (moleculeAffichee == 'Dioxygène') {
		push();
    fill(255, 0, 0);
    translate(-25, 0, 0);
    sphere(40);
    pop();
    push();
    fill(255, 0, 0);
    translate(25, 0, 0);
    sphere(40);
    pop();
  } else if (moleculeAffichee == 'Méthane') {
		push();
    fill(0);
    sphere(35);
    pop();
    // boule du haut
    push();
    translate(0, -55, 0);
    sphere(25);
    pop();
    // boule devant
    push();
    translate(0, 30, 40);
    sphere(25);
    pop();
    // boule à gauche derrière
    push();
    translate(-35, 30, -30);
    sphere(25);
    pop();
    // boule à droite derrière
    push();
    translate(35, 30, -30);
    sphere(25);
    pop();
  }
}