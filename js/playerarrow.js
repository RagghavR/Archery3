class Arrow {
    constructor(x, y, w, h,a ) {
      var props = {
        restitution : 0.8,
        friction : 0.7,
        density : 1,
        isStatic : true
      };
      this.image = loadImage("assets/arrow.png");
      this.w = w
      this.h = h
      this.a = a
      this.body = Bodies.rectangle(x,y,w,h,props);
      World.add(world, this.body);
    }
    shoot(){
        var vector = p5.Vector.fromAngle(playerbow.a)
        vector.mult(15)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:vector.x, y:vector.y})
    }    
    display() {
      var pos = this.body.position;
      push()
      translate(pos.x, pos.y);
      rotate(this.a);
      imageMode(CENTER);
      image(this.image, 0,0, this.w,this.h);
     pop()
    }
  }