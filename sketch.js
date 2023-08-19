let w = 600;
let h = 400;

let road;

let cow;
let xCow = w/2;
let yCow = h - 33;
let wCow = 30;
let hCow = 30;
let velocityCow = 5;

let carBlack;

let carYellow;

let carGreen;

function preload(){
  cow = loadImage("img/cow.png");
  carBlack = loadImage("img/carBlack.png");
  carYellow = loadImage("img/carYellow.png");
  carGreen = loadImage("img/carGreen.png");
  road = loadImage("img/road.png");
}

function setup(){
  createCanvas(w, h);
}

function draw(){
  background(road);
  image(cow, xCow, yCow, wCow, hCow);
  moveCow();
}

function moveCow(){

  if(keyIsDown(RIGHT_ARROW)){
    xCow += velocityCow;
  }
  if(keyIsDown(LEFT_ARROW)){
    xCow -= velocityCow;
  }
  if(keyIsDown(UP_ARROW)){
    yCow -= velocityCow;
  }
  if(keyIsDown(DOWN_ARROW)){
    yCow += velocityCow;
  } 
  xCow = constrain(xCow, 0, w-wCow);
  yCow = constrain(yCow, 0, h-hCow);
}



