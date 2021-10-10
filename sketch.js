var sea,seaImg
var ship,shipImg
function preload(){
  seaImg=loadImage("sea.png");
  shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200);
sea.addImage("sea",seaImg);
sea.scale=0.5;
sea.velocityX=-5;

ship=createSprite(200,200,50,50);
ship.addAnimation("ship",shipImg);
ship.scale=0.5;



}

function draw() {
  background("blue");
 drawSprites();
  sea.velocityX=-5;


}