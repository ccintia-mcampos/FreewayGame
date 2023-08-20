let w = 600;
let h = 400;

function setup(){
  createCanvas(w, h);
}

function draw(){
  background(road);
  showCow();
  moveCow();
  showCar();
  moveCar();
}