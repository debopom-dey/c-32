class Hexagon {
    constructor(x, y,r) {
        var options = {
          isStatic:false,
          friction :1,
          restitution:0
        }
        this.x = x;
        this.y = y;
        this.r=r;
        this.image = loadImage("hexagon.png");
        this.body = Bodies.circle(x, y ,r,options);
        World.add(world, this.body);
      }
      display(){
       
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}
