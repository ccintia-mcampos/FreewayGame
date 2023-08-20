const w = 600;
const h = 400;

function setup(){
  createCanvas(w, h);
  soundtrack.loop();  
}

function draw(){
  background(road);
  showCow();
  moveCow();
  showCar();
  moveCar();
  collision();
  scoring();
   
}