let elements;
let tableau;
let liste;
let elementChoisi;

function preload() {
  liste = loadJSON('./element.json');
}

function setup() {
	createCanvas(700, 700);
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
  // flèches pour les lanthanides/actinides
  line(122, 280, 122, 400);
  line(122, 400, 130, 400);

  line(109, 327, 109, 456);
  line(109, 456, 130, 456);


  translate(21, 0);
  for (let e of elements) {
		e.show();
  }
  pop();

  if (elementChoisi) {
    textSize(24);
    text(elementChoisi.nom, 10, 550);
  }
}

function mouseClicked() {
  for (let e of elements) {
		e.selectionne = false;
    if ((mouseX -21 < e.x + 35 && mouseX -21 > e.x && mouseY < e.y + 50 && mouseY > e.y)) {
			e.selectionne = true;
      elementChoisi = {
        ...e
      };
    }
  }
}