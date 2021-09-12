class Computerbow {
    constructor(x,y,w,h,a){
        var options = {
            isStatic: true
          };
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
        this.body = Bodies.rectangle(x, y, w, h,options);
        this.image = loadImage("assets/playerArcher.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(this.x-20,this.y)
        rotate(this.a)
        imageMode(CENTER);
        image(this.image, 0,0, this.w, this.h);
        pop()
    }
}