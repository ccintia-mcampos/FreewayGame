const initialXCow = w/2;
const initialYCow = h - 33;

let xCow = initialXCow;
let yCow = initialYCow;
let wCow = 30;
let hCow = 30;
let velocityCow = 5;

function showCow(){
  image(cow, xCow, yCow, wCow, hCow);
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