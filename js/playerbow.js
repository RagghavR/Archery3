class Bow {
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
        if (keyIsDown(RIGHT_ARROW) && this.a < -PI*0.45){
            this.a = this.a + 0.02
        }
        if (keyIsDown(LEFT_ARROW) && this.a > -PI*0.65){
            this.a = this.a - 0.02
        }
        var pos = this.body.position;
        push()
        translate(this.x-25,this.y)
        rotate(this.a)
        image(this.image, 0,0, this.w, this.h);
        pop()
    }
}