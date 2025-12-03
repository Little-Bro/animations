let balls;
let refRouge, refBleu;
let ref;

function setup() {
  createCanvas(500, 500);
  changeRef = false;
  ref = "";
  limit = 0;
  trace = [];
  balls = [];
  balls.push(new Ball(200, 200, "red", "circle"));
  balls.push(new Ball(100, 100, "green", ""));
  balls.push(new Ball(300, 200, "blue", "line"));
  balls.push(new Ball(400, 200, "yellow", "line"));
  refRouge = createCheckbox('Référentiel rouge', false);
  refBleu = createCheckbox('Référentiel bleu', false);
}

function draw() {
  strokeWeight(3);
  rect(0, 0, width, height);
  if (refRouge.checked()) {
  translate(width/2 - balls[0].x,height/2 - balls[0].y);
  if (ref == "red")
    drawRel("red"); 
  refBleu.checked(false);
  } 
  if (refBleu.checked()) {
    translate(width/2 - balls[2].x,height/2 - balls[2].y);
    if (ref == "blue")
      drawRel("blue"); 
    refRouge.checked(false);
  } 
  if (!refRouge.checked() && !refBleu.checked()) {
    if (ref == "green") {
      drawRel("green");
    }
  }
  push();
  for (let b of balls) {
    b.update();
    b.show();
  }
  pop();
}

function mousePressed() {
  for (let b of balls) {
    b.trace = [];
    b.limit = 0;
  }
}

function drawRel(col) {
  let chosen;
  if (col == "red")
    chosen = balls[0];
  else if (col == "blue") 
    chosen = balls[2];
  else if (col == "green")
    chosen = balls[1];
  for (let b of balls) {
    if (b.col != col) {
      if (b.limit < 600) {
        b.trace.push(createVector(b.x - chosen.x, b.y - chosen.y));
        b.limit++;
      }
      for (let pos of b.trace) {
        push();
        stroke(b.col);
        circle(chosen.x + pos.x, chosen.y + pos.y, 3);
        pop();
      }
    }
  }
}

function keyReleased() {
  if (key === 't') {
    if (refRouge.checked()) {
      ref = "red";
    }
    if (refBleu.checked()) {
      ref = "blue";
    }
    if (!refRouge.checked() && !refBleu.checked()) {
      ref = "green";
    }
  }
}
