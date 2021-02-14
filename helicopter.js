class Helicopter{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.image=loadImage("helicopter.png");
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)      
        World.add(world,this.body);
    }
    display(){
        strokeWeight(4);
        stroke("red");
  
       
        fill(255);
        imageMode(CENTER);
        rectMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
  
    }


    move(){
	if(keyCode === 38){
        camera.position.y = camera.position.y+10;
        
        
    }
    
    if(keyCode === 40){
        camera.position.y = camera.position.y-10;
    }

    if(keyCode === 39){
        camera.position.x = camera.position.x-10;
    }

    if(keyCode === 37){
        camera.position.x=camera.position.x+10;
    }
}

}