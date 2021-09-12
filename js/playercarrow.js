class ComputerArrow {
  constructor(x, y, w, h,a) {
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
  display() {
    var pos = this.body.position;
    push()
    imageMode(CENTER);
    translate(pos.x,pos.y)
    rotate(this.a)
    image(this.image, 0,0, this.w,this.h);
   pop()
  }
}