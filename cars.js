let wCar = 30;
let hCar = 30;

let xinicial    = 600;
let xCar        = [600, 600, 600,-wCar, -wCar, -wCar];
let yCar        = [ 45, 100, 155,  210,   265,   320];
let velocityCar = [ -2,-2.5,  -3,    2,   2.5,     3];
let score = 0

function showCar(){
  for( i=0;  i < car.length; i++ ){
    image(car[i], xCar[i], yCar[i],  wCar, hCar)
  }
}
function moveCar(){
  for( i=0; i < car.length; i++ ){
    if(xCar[i] < -wCar){
      xCar[i] = w;
      }
    if(xCar[i] > w){
      xCar[i] = -wCar;
      }
    xCar[i] += velocityCar[i];
  }
 }

 function collision(){

  let collided = false;

  for( i=0; i < car.length; i++ ){
    collided = collideRectRect(xCar[i], yCar[i], wCar, hCar, xCow, yCow, wCow, hCow )
    if(collided){
      soundCollision.play();
      xCow = initialXCow;
      yCow = initialYCow;
        if(score >0){
          score--
        }
    }
  }

  if(yCow < 8){
    score++;
    soundPoints.play();
    xCow = w/2;
    yCow = h - 33;
  }
}


