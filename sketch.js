var canvas;
var music;
var planeOne,planeTwo,planeThree,planeFour;
var box;



function preload(){

    music = loadSound("music.mp3");
    

}


function setup(){
    canvas = createCanvas(500,600);

    //create 4 different surfaces
   
    

 
     planeOne=createSprite(60,590,100,10);
     planeOne.shapeColor="red";

     planeTwo=createSprite(180,590,100,10);
     planeTwo.shapeColor="orange";


     planeThree=createSprite(300,590,100,10);
     planeThree.shapeColor="yellow";


     planeFour=createSprite(420,590,100,10);
     planeFour.shapeColor="green";


     box=createSprite(200,200,15,15);
     box.shapeColor="white";
     box.velocityX=6;
     box.velocityY=6;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    

    

    music.play();

    
if(planeTwo.isTouching(box)){

        box.shapeColor= rgb(225,128,0);
        box.velocityX=0;
        box.velocityY=0;
        music.stop();


    }


    if(planeThree.isTouching(box) && box.bounceOff(planeThree)){

          
       box.shapeColor="yellow";
       


    }

    if(planeFour.isTouching(box) && box.bounceOff(planeFour)){


      box.shapeColor="green";




    }


    if(planeOne.isTouching(box) && box.bounceOff(planeOne)){

        box.shapeColor="red";


    }

        
    

          
        
        
 
 
     
 


   
    

    
 drawSprites();
    //add condition to check if box touching surface and make it box
}









