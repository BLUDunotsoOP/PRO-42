var iss ;
var spaceCraft;
var sp1,sp2,sp3,sp4;
var issI;
var bg1;
var hasDocked = false;

function preload(){

  sp1 = loadImage("spacecraft1.png");
  sp2 = loadImage("spacecraft2.png");
  sp3 = loadImage("spacecraft3.png");
  sp4 = loadImage("spacecraft4.png");
  issI = loadImage("iss.png");
  bg1 = loadImage("spacebg.jpg");
}




function setup() {
  createCanvas(1405,600);
  
  iss = createSprite(330, 130);
  iss.addImage("abc",issI);
  iss.scale= 0.5;

  spaceCraft =createSprite(285,240);
  spaceCraft.addImage("abc",sp1);
  spaceCraft.scale = 0.3;

}

function draw() {
  
  background(bg1); 
  
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+ random(-1,1);
    if(keyDown(UP_ARROW)){

      spaceCraft .y = spaceCraft.y - 2;
    }
    if(keyDown(LEFT_ARROW)){
      spaceCraft.addImage(sp4);
      spaceCraft.x = spaceCraft.x - 1;

    }
    if(keyDown(RIGHT_ARROW)){
      spaceCraft.addImage(sp3)
      spaceCraft.x += 1;
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(sp2);
    }
  }

  if(spaceCraft.y <=(iss.y + 70) && spaceCraft.x <= (iss.x - 10)){
     hasDocked = true;
     textSize(25);
     fill("white");
     text("yu loser!!!, now go play subway surfers",200,300);
  }
  
  
  
  
  
  
  drawSprites();
}