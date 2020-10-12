class Shooter{
    constructor(x,y,radius){
     
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        
        
        World.add(world , this.body);
    }

    display(){
        var pos = this.body.position;
        fill ("green")
        circle (pos.x, pos.y, this.radius*2);
    }
}