let rx = 0;
let ry = 0;
let dx = 0;
let dy = 0;

let g = (w, h) => {
  let g = createGraphics(w, h);
  g.colorMode(HSB, 1, 1, 1);
  return g;
}

let buffer1, buffer2, circs;
let pBuffer, sky;
let baseColor;
let size = 500;
let size2 = Math.hypot(size, size);
function setup (){
  pixelDensity(1);
  createCanvas(0, 0, WEBGL);
  colorMode(HSB, 1, 1, 1);
  windowResized();
  
  buffer1 = g(size, size);
  buffer2 = g(size, size);
  
  pBuffer = g(size2, size2);
  sky = loadImage("https://www.cs.unm.edu/~bmatthews1/hosted/TychoSkymapII.t5_04096x02048.jpg");
}

let init = () => {
  baseColor = color(random(), random()*.5 + .5, random()*.1 + .2);
  
  circs = [];
  for (let i = 0; i < 50; i++){
    let r = random(10, 30);
    let x = random(size);
    let y = random(size);
    let col = color(0, .07);
    let blend = BLEND;
    if (random() < .5){
      col = color(random(), 1, random(), .04);
      blend = ADD;
    }
    circs.push({x, y, r, col, blend});
  }
}

let updatePlanet = () => {
  buffer1.push();
  buffer1.noStroke();
  for (let circ of circs){
    buffer1.blendMode(circ.blend);
    buffer1.fill(circ.col);
    buffer1.ellipse(circ.x, circ.y, circ.r);
  }
  buffer1.pop();
  
  buffer2.clear();
  for (let i = 0; i < size; i++){
    let n = 1+((noise(i/100,1e5,frameCount/100)-.5)*3);
    buffer2.image(buffer1, i, n, 1, size, i, 0, 1, size);
    buffer2.image(buffer1, i, n-size, 1, size, i, 0, 1, size);
    buffer2.image(buffer1, i, n+size, 1, size, i, 0, 1, size);
  }
  
  buffer1.push();
  buffer1.clear();
  buffer1.blendMode(ADD);
  for (let i = 0; i < size; i++){
    let n = 1+((noise(-i/100,-1e6,-frameCount/100)-.5)*3);
    buffer1.image(buffer2, n, i, size, 1, 0, i, size, 1);
    buffer1.image(buffer2, n-size, i, size, 1, 0, i, size, 1);
    buffer1.image(buffer2, n+size, i, size, 1, 0, i, size, 1);
  }
  buffer1.pop();
  
  pBuffer.push();
  pBuffer.background(baseColor);
  pBuffer.translate(size2/2, size2/2);
  pBuffer.blendMode(ADD);
  pBuffer.imageMode(CENTER);
  pBuffer.rotate(-PI/4);
  for (let i = 0; i < 3; i++){
    pBuffer.image(buffer1, 0, 0);
    pBuffer.image(buffer1,  0,  size);
    pBuffer.image(buffer1,  size, 0);
    pBuffer.image(buffer1, -size, 0);
    pBuffer.image(buffer1,  0, -size);
  }
  pBuffer.pop();
}

function draw(){
  background(0);
  
  updatePlanet();
  
  rotateX(ry);
  rotateY(rx);
  if (!mouseIsPressed) rx -= .001;
  
  texture(sky);
  sphere(min(width, height)*4, 60, 40);
  
  noFill();
  ambientLight(.2, .2, .03);
  pointLight(1, 0, 1, 10000, -10000, 10000);
  pointLight(1, 0, .8, 10000, -10000, 10000);
  texture(pBuffer);
  sphere(min(width, height)*.3, 60, 40);
  sphere(min(width, height)*.3, 60, 40);
  
  rx += dx;
  ry += dy;
  dx *= .9;
  dy *= .9;
}

function keyReleased(evt){
  if (evt.key === " ") init();
}

function touchMoved(){
  dx = (mouseX - pmouseX)/100;
  dy = (pmouseY - mouseY)/100;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  init();
}