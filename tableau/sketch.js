let elements;
let tableau;
let liste;
let elementChoisi;
let orbitales, metaux;
let choix;

function preload() {
  liste = loadJSON('./element.json');
}

function setup() {
	createCanvas(700, 700);
  //choix = 'metaux';
  metaux = createCheckbox('métaux / non-métaux', true);

  elements = [];
  // remplissage du tableau périodique
  //H
  elements.push(new Element(5, 5, 0, Object.values(liste)[0]));
  //He
  elements.push(new Element(617, 5, 1, Object.values(liste)[1]));
  //Li
  elements.push(new Element(5, 55, 2, Object.values(liste)[2]));
  //Be
  elements.push(new Element(41, 55, 3, Object.values(liste)[3]));
  //B -> Ne
  for (let i = 4; i < 10; i++) {
		elements.push(new Element(293 + i * 36, 55, i, Object.values(liste)[i]))
  }
  //Na
  elements.push(new Element(5, 105, 10, Object.values(liste)[10]));
  //Mg
  elements.push(new Element(41, 105, 11, Object.values(liste)[11]));
  //Al -> Ar
  for (let i = 12; i < 18; i++) {
		elements.push(new Element(i * 36 + 5, 105, i, Object.values(liste)[i]))
  }
  //K -> Kr
  for (let i = 18; i < 36; i++) {
		elements.push(new Element(i * 36 - 643, 155, i, Object.values(liste)[i]))
  }
  //Rb -> Xe
    for (let i = 36; i < 54; i++) {
		elements.push(new Element(i * 36 - 1291, 205, i, Object.values(liste)[i]))
  }
  //Cs -> Ba
  for (let i = 54; i < 56; i++) {
    elements.push(new Element(i * 36 - 1939, 255, i, Object.values(liste)[i]))
  }
  //La -> Lu
  for (let i = 56; i < 71; i++) {
    elements.push(new Element(i * 36 - 1903, 375, i, Object.values(liste)[i]))
  }
  //Hf -> Rn
  for (let i = 71; i < 86; i++) {
    elements.push(new Element(i * 36 - 2443, 255, i, Object.values(liste)[i]))
  }
  //Fr -> Ra
  for (let i = 86; i < 88; i++) {
    elements.push(new Element(i * 36 - 3091, 305, i, Object.values(liste)[i]))
  }
  //Ac -> Lr
  for (let i = 88; i < 103; i++) {
    elements.push(new Element(i * 36 - 3055, 435, i, Object.values(liste)[i]))
  }
  //Rf -> Og
  for (let i = 103; i < 118; i++) {
    elements.push(new Element(i * 36 - 3595, 305, i, Object.values(liste)[i]))
  }

}

function draw() {
  // rect(0, 0, width, height);
  background(255);
  push();
  
  if (metaux.checked()) {
    choix = 'metaux';
  } else {
    choix = 'orbitales';
  }

  // flèches pour les lanthanides/actinides
  line(122, 280, 122, 400);
  line(122, 400, 130, 400);

  line(109, 327, 109, 456);
  line(109, 456, 130, 456);

  // légendes
  textAlign(CENTER);
  if (choix == 'orbitales') {
    push();
    translate(0, 10);
    //s
    fill(255, 226, 191);
    rect(150, 5 , 15);
    fill(0);
    text('bloc s', 190, 17);
    //p
    fill(205, 255, 204);
    rect(150, 25 , 15);
    fill(0);
    text('bloc p', 190, 37);
    //d
    fill(204, 246, 255);
    rect(220, 5 , 15);
    fill(0);
    text('bloc d', 260, 17);
    //f
    fill(252, 189, 251);
    rect(220, 25 , 15);
    fill(0);
    text('bloc f', 260, 37);
    pop();
  } else if (choix == 'metaux') {
    push();
    translate(-20, 0);
    // métaux
    textStyle(BOLD);
    text('métaux', 170, 17);
    textStyle(NORMAL);
    textSize(12);
    // alcalins
    fill(97, 166, 244);
    rect(150, 25 , 15);
    fill(0);
    text('alcalins', 190, 37);
    // alcalino-terreux
    fill(252, 207, 5);
    rect(150, 45 , 15);
    fill(0);
    text('alcalino-terreux', 210, 57);
    // métaux de transition
    fill(162, 232, 242);
    rect(150, 65 , 15);
    fill(0);
    text('métaux de transition', 224, 77);
    // métaux pauvres
    fill(247, 99, 76);
    rect(150, 85 , 15);
    fill(0);
    text('métaux pauvres', 212, 97);
    // lanthanides
    fill(143, 114, 224);
    rect(150, 105 , 15);
    fill(0);
    text('lanthanides', 202, 117);
    // actinides
    fill(224, 139, 188);
    rect(150, 125 , 15);
    fill(0);
    text('actinides', 194, 137);
    // métalloïdes
    fill(188, 249, 127);
    rect(458, 25 , 15);
    fill(0);
    text('métalloïdes', 510, 37);
    // non métaux
    push();
    translate(25, 0);
    textStyle(BOLD);
    text('non métaux', 300, 17);
    textStyle(NORMAL);
    textSize(12);
    // autres
    fill(252, 170, 83);
    rect(270, 25 , 15);
    fill(0);
    text('autres', 306, 37);
    // halogènes
    fill(245, 249, 127);
    rect(270, 45 , 15);
    fill(0);
    text('halogènes', 318, 57);
    // gaz nobles
    fill(92, 188, 158);
    rect(270, 65 , 15);
    fill(0);
    text('gaz nobles', 318, 77);
    pop();
    pop();
  }

  // groupes 
  textAlign(CENTER);
  fill(108, 144, 252);
  text('1', 44, 10);;
  text('2', 80, 60);
  for (let i = 0; i < 10; i++) {
    text(i+3, 115 + i * 36, 160);
  }
  for (let i = 0; i < 5; i++) {
    text(i+13, 476 + i * 36, 60);
  }
  text('18', 656, 10)
  // périodes
  fill(252, 108, 108);
  for (let i = 0; i < 7; i++) {
    text(i+1, 15, 45 + 50 * i);
  }
  // affichage du tableau
  translate(21, 10);
  for (let e of elements) {
		e.show();
  }
  pop();

  // description de l'élément sélectionné
  if (elementChoisi) {
    push();
    textSize(24);
    textStyle(BOLD);
    text(elementChoisi.nom + ' (' + (elementChoisi.z+1) + ')', 5, 550);
    textStyle(NORMAL);
    text(elementChoisi.metal, 5, 580);
    textSize(16);
    text('masse atomique : ', 5, 620);
    text('configuration électronique : ' + elementChoisi.configuration, 5, 640);
    let etat = 'solide';
    if (elementChoisi.symbole == 'Hg' || elementChoisi.symbole == 'Br')
      etat = 'liquide'
    if (['H', 'He', 'N', 'O', 'F', 'Ne', 'Cl', 'Ar', 'Kr', 'Xe', 'Rn'].includes(elementChoisi.symbole))
      etat = 'gazeux';
    text(etat + ' à 0°C et 101.3kPa', 5, 660);
    pop();
  }
}

function mouseClicked() {
  for (let e of elements) {
		e.selectionne = false;
    if ((mouseX -21 < e.x + 35 && mouseX -21 > e.x && mouseY - 10 < e.y + 50 && mouseY - 10> e.y)) {
			e.selectionne = true;
      elementChoisi = {
        ...e
      };
    }
  }
}