let arrows;
let columns, space;
let hasAttractor;
let attractor, attracted;
let targetX, targetY;
let seeIsoLines;

function setup() {
  createCanvas(600,600);
  columns = 14;
  space = 3 * columns;
  arrows = make2DArray(columns, columns);
  hasAttractor = true;
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
  }

  if (hasAttractor) 
    ballOnMouse('blue');
  else 
    ballOnMouse('red');

  if (attractor) {
    attractor.show();
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
    } else {
      attracted.push(new Ball('attracted', mouseX, mouseY));
    }    
  }
}

function ballOnMouse(colour) {
    push();
    noStroke();
    let size = colour == 'blue' ? 20 : 10;
    fill(colour);
    circle(mouseX, mouseY, size);
    pop();
}