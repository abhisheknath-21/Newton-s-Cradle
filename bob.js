class Bob{
    constructor(x,y,r) {
      var options={
         isStatic:false, 
         restitution:1.0, 
         friction:0.5, 
         density:1.0
        } 
                                           
         this.x=x;     
         this.y=y;  
         this.r=r;
         this.body=Bodies.circle(this.x, this.y, this.r/2, options)
         World.add(world, this.body);   
         }       
     display(){    
      var paperpos=this.body.position; 
      push()
      translate(paperpos.x, paperpos.y);                            
      rectMode(CENTER);    
      strokeWeight(3); 
      fill(255,0,255);               
      circle(0,0,this.r, this.r);
      pop()
    }
  }
    