class Roof {
    constructor(x, y, width, height) {
      var options = {
          isStatic : true,
          restitution :0,
          friction: 0.5,
          density:1.2,
      }
      this.body = Bodies.rectangle(x, y, 1000, 20, options);
      this.width = 450;
      this.height = 30;

      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER);
      fill("yellow");

      rect(380, 50, this.width, this.height);
    }
  };