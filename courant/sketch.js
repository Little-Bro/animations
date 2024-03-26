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
  text('Portion de fil de cuivre', width/2 - 125, 100);
  textSize(18);
  text('Cliquer pour fermer le circuit', width/2 - 125, height - 30)
  image(fil, 150, 150);
  //image(fleche, 600, 500);
  for (let a of atomes) {
		a.show();
  }
  //line(600, 510, 680, 565);
}

function mousePressed() {
  courant = !courant;
  console.log('x: ' +mouseX+ ', y: ' +mouseY);
}