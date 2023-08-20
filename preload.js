let road;
let cow;
let car;
let soundCollision;
let soundPoints;
let soundtrack;

function preload(){
  road = loadImage("img/road.png");
  cow = loadImage("img/cow.png");
  car = [
     loadImage("img/carBlack.png")
    ,loadImage("img/carYellow.png")
    ,loadImage("img/carGreen.png")
    ,loadImage("img/carBlack.png")
    ,loadImage("img/carYellow.png")
    ,loadImage("img/carGreen.png")
  ]
  soundCollision = loadSound("sound/collision.mp3");
  soundPoints = loadSound("sound/points.wav");
  soundtrack = loadSound("sound/soundtrack.mp3");
}