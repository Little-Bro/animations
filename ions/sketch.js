let particule;
let nature;
let theta = 0;
let nbElectrons;
let peutIoniser;
let ionisationBouton;
let hydroBouton, sodiumBouton, chloreBouton;
let element;  

function setup() {
	createCanvas(700, 700);
  element = 'hydrogene';
  peutIoniser = true;
  particule = new Atome(1, 0);
  nbElectrons = particule.electrons;
  
  // bouton : ionisation
  ionisationBouton = createButton('Ionisation');
  ionisationBouton.mousePressed(() => ionisation());
}

function draw() {
  background(255);
  noFill();
  rect(0, 0, width, height);
  
  // mouvement des électrons
  for (let i = 0; i < particule.thetas.length; i++) {
		particule.thetas[i] += PI/200;
  }
  
  particule.show();
  particule.checkBoundaries();
  // TEXTE EN HAUT A GAUCHE
 	fill(0);
  textSize(24);
  textStyle(NORMAL);
  text('J\'ai', 10, 30);
  fill(255, 0, 0);
  text(`${particule.protons} ${particule.protons > 1 ? 'protons' : 'proton'}`, 55, 30);
  fill(0);
  text('et', 175, 30);
  fill(0, 0, 255);
  text(`${nbElectrons} ${nbElectrons > 1 ? 'électrons' : 'électron'}`, 205, 30);
  fill(0);
  text('je suis un', 340, 30);
  natureTexte = parseInt(particule.protons) == parseInt(nbElectrons) ? 'atome' : 'ion';
	textStyle(BOLD);
  text(natureTexte, 445, 30);
  textStyle(NORMAL);
  chargeElec = parseInt(particule.protons) - parseInt(nbElectrons);
  text(`Charge électrique :`, 10, 70);
 	let charge = chargeElec.toString().split("").reverse().join("") ;
  if (chargeElec > 0) {
	  fill(255, 0, 0);
  }
  else if (chargeElec < 0)
    fill(0, 0, 255);
  else 
    fill(0);
  
  text(`${chargeElec}`, 225, 70);
  if (chargeElec > 0)
    text('+', 250, 70);
  fill(0);
  
  // TEXTE EN BAS A DROITE
  textSize(30);
  let formule = '';
  if (element == 'sodium')
    formule = 'Na';
  else if (element == 'hydrogene')
    formule = 'H';
  else if (element == 'chlore')
    formule ='Cl';
  text(natureTexte + '   ' + formule, 500, 675);
  textSize(16);
  if (natureTexte == 'atome') {
		text(particule.protons, 588, 680);
		text(particule.protons + particule.neutrons, 588, 660);
  } else {
    if (chargeElec == 1) charge = '';
    if (chargeElec == -1) charge = '-'; 
    
		text(charge + `${chargeElec > 0 ? '+' : ''}`, 605, 665);
  }
  noFill();
  strokeWeight(0.1);
  circle(width/2, height/2, 200)
  circle(width/2, height/2, 400);
  circle(width/2, height/2, 600);
  //strokeWeight(1);
}

function makeAtom(nom, protons, neutrons) {
  element = nom;
  peutIoniser = true;
  for (const key in particule) {
    delete particule[key];
  }
  particule = new Atome(protons, neutrons);
  nbElectrons = particule.electrons;
}

function ionisation() {
  if (element == 'sodium' && peutIoniser) {
	  particule.ionise(1, 'cation');
  	peutIoniser = false;
  }
  else if (element == 'hydrogene' && peutIoniser) {
  	particule.ionise(1, 'cation');
  	peutIoniser = false;
  }
   else if (element == 'chlore' && peutIoniser) 
		particule.ionise(1, 'anion');
	  peutIoniser = false;
}