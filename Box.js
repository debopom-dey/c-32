class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.0,
          
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
        var angle = this.body.angle;
        var pos =this.body.position;
         push();
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
          
      }
      else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        rect(this.rect, this.body.position.x, this.body.position.y, width,height)
        pop();
      }
      
}
score (){
  if(this.visiblity<0&&this.visiblity>-105){
  score++
  
  }
}
}