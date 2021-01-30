class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            
        }
        this.body = Bodies.circle(x,y,radius,options);
      this.x = x;
      this.y = y;
      this.radius=radius;
      this.image=loadImage("Plucking+mangoes(1)/Plucking mangoes/mango.png")
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y,40,40);
        pop();
    }

}