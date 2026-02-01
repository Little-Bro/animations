let arrows;
let columns, space;
let hasAttractor;
let attractor, attracted;
let targetX, targetY;
let seeIsoLines;
let fieldOnMouse, forceOnMouse;
let unitVector;
let flyAway;


function setup() {
  createCanvas(600,600);
  columns = 14;
  space = 3 * columns;
  arrows = make2DArray(columns, columns);
  hasAttractor = true;
  flyAway = false;
  attracted = [];
  seeIsoLines = createCheckbox('Voir des lignes de niveau de distance', false);
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < columns; j++) {
      arrows[i][j] = new Arrow(20 + i * space, 20 + j * space);
    }
  }
}

function draw() {
  background(255);
  rect(0, 0, width, height);
  targetX = hasAttractor ? mouseX : attractor.pos.x;
  targetY = hasAttractor ? mouseY : attractor.pos.y;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < columns; j++) {
      arrows[i][j].show(targetX, targetY);
    }
  }
  for (let a of attracted) {
    a.show();
    a.moveTowards(attractor.pos.x, attractor.pos.y);
    if (a.showArrows) {
      a.field.show(attractor.pos.x, attractor.pos.y, a.pos.x, a.pos.y);
      a.force.show(attractor.pos.x, attractor.pos.y, a.pos.x, a.pos.y);
      a.field.pointingAway = flyAway;   
      a.force.pointingAway = flyAway;      
    }
  }

  if (hasAttractor) 
    ballOnMouse('blue');
  else {
    ballOnMouse('red');
  }

  if (attractor) {
    attractor.show();
    unitVector.show(mouseX, mouseY);
    unitVector.len = 5;
    fieldOnMouse.show(attractor.pos.x, attractor.pos.y, mouseX, mouseY);
    forceOnMouse.show(attractor.pos.x, attractor.pos.y, mouseX, mouseY);
    if (seeIsoLines.checked()) {
      for (let i = 1; i < 4; i++) {
        push();
        noFill();
        circle(attractor.pos.x, attractor.pos.y, exp(i) * 30);
        pop();
      } 
    }
  }
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    if (hasAttractor) {
      hasAttractor = false;
      attractor = new Ball('attractor', mouseX, mouseY);
      unitVector = new Arrow(mouseX, mouseY, false, true);
      fieldOnMouse = new Arrow(mouseX, mouseY);
      forceOnMouse = new Arrow(mouseX, mouseY, true);
    } else {
      attracted.push(new Ball('attracted', mouseX, mouseY));
    }    
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < columns; j++) {
        arrows[i][j].pointingAway = !arrows[i][j].pointingAway;
      }
    }
    fieldOnMouse.pointingAway = !fieldOnMouse.pointingAway;
    forceOnMouse.pointingAway = !forceOnMouse.pointingAway;
    flyAway = !flyAway;
  }
  return false;
}

function ballOnMouse(colour) {
    push();
    noStroke();
    let size = colour == 'blue' ? 20 : 10;
    let cyanCol = color(136, 252, 240);
    let redCol = color(232, 85, 85);
    col = colour == 'blue' ? cyanCol : redCol;
    fill(col);
    circle(mouseX, mouseY, size);
    pop();
}