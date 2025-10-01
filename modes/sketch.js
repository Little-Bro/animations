let t;
let polySynth;
let start, end, len;
let points, corde;
let ropes;
let r0;
let r1, r2;
let r3, r4, r5;
let r6, r7, r8, r9
let r10, r11, r12, r13, r14;
let portee;

function preload() {
  portee = loadImage('./portee.jpg');
}

function setup() {
  createCanvas(600, 600);
  userStartAudio();
  t = 0;
  polySynth = new p5.PolySynth();
  ropes = [];
  start = 50;
  end = 180;

  for (let i = 1; i < 6; i++) {
    for (j = 1; j <= i; j++) { 
      let factor = j % 2 ? -50 : 50;
      let r = new Rope(start + (j - 1) * (end - start) / i, start + j * (end - start) / i, 70 + (i - 1) * 100, factor);
      ropes.push(r);
    }
  }
}

function draw() {
  background(255);
  rect(0, 0, width, height);
  image(portee, 260, 140);
  
  t += 0.5;
  for (const r of ropes) {
    r.active = false;
    if (mouseX > 50 && mouseX < 180){
      if (mouseY > r.y - 20 && this.mouseY < r.y + 20)
        r.active = true;   
    }
    if (keyIsPressed && keyCode == ENTER)
       r.active = true;   
    r.show(); 
  }

  if (ropes[0].active) {
    push();
    fill('black');
    ellipse(450, 395, 16, 12);
    pop();
  }
    if (ropes[1].active) {
      push();
      fill('black');
      strokeWeight(2);
      line(435, 260, 465, 260);
      ellipse(450, 260, 16, 12);
      pop();
  } 
    if (ropes[3].active) {
      push();
      fill('black');
      ellipse(450, 229, 16, 12);
      pop();
  } 
    if (ropes[6].active) {
      push();
      fill('black');
      ellipse(450, 203, 16, 12);
      pop();
  } 
    if (ropes[10].active) {
      push();
      fill('black');
      ellipse(450, 187, 16, 12);
      pop();
  }  
}

function mousePressed() {
    if (ropes[0].active)
      polySynth.play('C3', 1, 0, 1.5);
    if (ropes[1].active)
      polySynth.play('C4', 0.05, 0, 1.5);
    if (ropes[3].active)
      polySynth.play('G4', 0.05, 0, 1.5);
    if (ropes[6].active)
      polySynth.play('C5', 0.05, 0, 1.5);
    if (ropes[10].active)
      polySynth.play('E5', 0.05, 0, 1.5);
}

function keyPressed() {
  if (keyCode == ENTER) {
    polySynth.play('C3', 1, 0, 1.5);
    polySynth.play('C4', 0.05, 0, 1.5);
    polySynth.play('G4', 0.05, 0, 1.5);
    polySynth.play('C5', 0.05, 0, 1.5);
    polySynth.play('E5', 0.05, 0, 1.5);
  }
}


