let fil, noyau, fleche;
let courant;
let atomes = [];

function preload() {
	fil = loadImage('./fil.png');
	noyau = loadImage('./noyau.png');
  fleche = loadImage('./fleche.png');
}

function setup() {
  createCanvas(800, 800);
  atomes.push(new Atome(350 , 350));
  atomes.push(new Atome(400 , 425));
  atomes.push(new Atome(450 , 350));
  atomes.push(new Atome(300 , 260));
  courant = false;
}

function draw() {
  background(255);
  rect(0, 0, width, height);
  textSize(24);
  textStyle(BOLD);
  text('Portion de fil de cuivre', width/2 - 125, 100);
  textSize(18);
  //textStyle(NORMAL);
  text('Cliquer pour ouvrir / fermer l\'interrupteur', width/2 - 150, height - 30);
  textStyle(NORMAL);
  image(fil, 150, 150);
  for (let a of atomes) {
		a.show();
  }
  // legende
  textSize(12);
  image(noyau, 33, height - 160, 30, 30);
  text(': noyau d\'un atome de cuivre', 70, height - 140);
  push();
  noStroke();
  fill(0, 0, 255);
  circle(50, height - 105, 10);
  fill(0);
  text(': électron "libre" le plus éloigné du noyau', 70, height - 100);
  pop();
}

function mousePressed() {
  courant = !courant;
  console.log('x: ' +mouseX+ ', y: ' +mouseY);
}