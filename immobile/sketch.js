let pov;
let theta;
let earthImg;
let cloudX, cloudY;

function preload() {
	marioStandingImg = loadImage('./images/marioStanding.png');
	luigiStandingImg = loadImage('./images/luigiStanding.png');
	cloudImg = loadImage('./images/cloud.png');
	floorImg = loadImage('./images/floor.png');
	marioImg = loadImage('./images/mario.png');
	earthImg = loadImage('./images/earth.png');
	sunImg = loadImage('./images/sun.png');
  alienImg = loadImage('./images/alien.png');
  alienPlanetImg = loadImage('./images/alienPlanet.png');
}

function setup() {
  theta = 0;
	createCanvas(600, 600);
  rect(0, 0, 600, 600);
  pov = 'géocentrique';
  
  cloudY = random(50, height/2 - 100);
  cloudX = width;
}

function draw() {
	if (pov == 'géocentrique') {
    cloudX -= 0.7;
		drawGeoPov();
  } else {
		drawAlienPov();
  }
}

function drawGeoPov() {
  imageMode(CENTER);
  fill(49, 117, 206);
  rect(0, 0, 600, 600);
	line(0, height/2 + 60, width, height/2 + 60);
  moveCloud();
  imageMode(CORNER);
  image(floorImg, 0, height/2 + 60);
  imageMode(CENTER);
  image(marioStandingImg, 180, height/2 + 15);
  image(luigiStandingImg, width - 180, height/2 + 9);
}

function drawAlienPov() {
  imageMode(CENTER);

  strokeWeight(1);
  fill(0);
  rect(0, 0, 600, 600);
  
  
  // sun
  let sunX = width/2 - 100;
  let sunY = height /2 + 100;
  noStroke();
  fill(247, 70, 0);
  circle(sunX, sunY, 80);
  fill(247, 247, 0);
  circle(sunX, sunY, 70);
  fill(255);
  circle(sunX, sunY, 60);
  
  // earth
  theta += PI / 200;
  let earthX = sunX + 100 * cos(theta);
  let earthY = sunY + 100 * sin(theta);
  fill(0, 0, 255);
  push();
  translate(earthX, earthY);
  rotate(theta);
  image(earthImg, 0, 0);
  pop();
  
  // people
  let peopleX = earthX + 30 * cos(theta);
  let peopleY = earthY + 30 * sin(theta);
  fill(255);
  push();
  translate(peopleX, peopleY);
  rotate(theta + PI/2);
  image(marioImg, 0, 0);
  pop();
  
  
  // alien
  fill(195, 85, 255);
  alienX = width - 150;
  alienY = 150;
  image(alienPlanetImg, alienX, alienY);
  fill(0, 255, 0);
  image(alienImg, alienX, alienY - 30);
  
  // line of sight
  stroke(255, 0, 0);
//  line(peopleX, peopleY, alienX - 10, alienY - 33);
  stroke(0);
}

function mousePressed() {
	pov = pov == 'géocentrique' ? 'alien' : 'géocentrique';
}

function moveCloud() {
  if (cloudX + 100< 0) {
  	cloudX = width + 100;
		cloudY = random(50, height/2 - 100);
  }
	image(cloudImg, cloudX, cloudY);  
} 