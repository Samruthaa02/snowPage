const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow = [];
var maxSnow = 50;
var mans;
var rand;



function preload(){
  bgimg=loadImage("snowbackground.jpg")
}


function setup(){
   var canvas = createCanvas(800,800);

   engine = Engine.create();
   world = engine.world;

  mans=new man(400,550);

   for(var i = 0; i < maxSnow; i++){
      snow.push(new createSnow(random(0,800), random(0,800)));
   }
}

function draw(){
   Engine.update(engine);
   background(bgimg); 
   mans.display();

   textSize(100);
  fill(255,99,71)
  //text(mouseX+","+mouseY,mouseX,mouseY)

   
   textSize(40);
   fill(0)
   text("press space to find the message",100,100)
  
   if(keyCode === 32){
    textSize(90);
    fill(255,99,71)
    text("help me",450,500)
   }
   else
   //textSize(70);
   text("uryc zr",500,600)

   for(var i = 0; i < maxSnow; i++){
    snow[i].display();
    snow[i].update();
}
   }


   


   


