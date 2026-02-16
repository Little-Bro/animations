let arrows;
let columns, space;
let hasAttractor;
let attractorNegative, attractedNegative;
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
  attractorNegative = true;
  attractedNegative = false;
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
  flyAway = attractorNegative == attractedNegative;
  for (let i = 0; i < attracted.length; i++) {
    attracted[i].show();
    attracted[i].moveTowards(attractor.pos.x, attractor.pos.y);
    if (attracted[i].showArrows) {
      attracted[i].force.show(attractor.pos.x, attractor.pos.y, attracted[i].pos.x, attracted[i].pos.y);
      attracted[i].force.pointingAway = flyAway;      
    }
    if (attracted[i].hasCollided) {
      attracted.splice(attracted[i], 1);
    }
  }
    
    if (!hasAttractor) {
      forceOnMouse.pointingAway = flyAway;
      if (attractedNegative)
        ballOnMouse('attracted', 'blue');
      else 
        ballOnMouse('attracted', 'red');    
    } else {
      if (attractorNegative)
        ballOnMouse('attractor', 'blue');
      else 
        ballOnMouse('attractor', 'red');
    }

  if (attractor) {
    attractor.show();
    unitVector.show(mouseX, mouseY);
    unitVector.len = 5;
    fieldOnMouse.pointingAway = !attractorNegative;  
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
      if (attractorNegative)
        attractor = new Ball('attractor', 'minus', mouseX, mouseY);
      else
        attractor = new Ball('attractor', 'plus', mouseX, mouseY);
      unitVector = new Arrow(mouseX, mouseY, false, true);
      fieldOnMouse = new Arrow(mouseX, mouseY);
      forceOnMouse = new Arrow(mouseX, mouseY, true);
    } else {
      if (attractedNegative)
        attracted.push(new Ball('attracted', 'minus', mouseX, mouseY));
      else
        attracted.push(new Ball('attracted', 'plus', mouseX, mouseY));
    }    
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (attractor) {
      attractor.charge = attractor.charge == 'plus' ? 'minus' : 'plus';
    }
    attractorNegative = !attractorNegative;
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < columns; j++) {
        arrows[i][j].pointingAway = !arrows[i][j].pointingAway;
      }
    }
  } else if (keyCode == 67) {
    attractedNegative = !attractedNegative;
    for (let a of attracted) {
      a.charge = a.charge == 'plus' ? 'minus' : 'plus';
    }
  }
  return false;
}

function ballOnMouse(type, colour) {
    push();
    noStroke();
    let size = type == 'attractor' ? 20 : 10;
    let cyanCol = color(136, 252, 240);
    let redCol = color(232, 85, 85);
    col = colour == 'blue' ? cyanCol : redCol;
    fill(col);
    circle(mouseX, mouseY, size);
    pop();
}