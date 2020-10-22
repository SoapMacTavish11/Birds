class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x=mouseX;
      pos.y=mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("Red");
      strokeWeight(4);
      stroke("Blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  