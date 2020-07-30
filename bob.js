class Bob{
    constructor(x,y,r)
    {
        var opt={
           isStatic:true,
            restitution:0.9,
            friction:0.5,
            density:0.6
        }
        this.body=Bodies.circle(x,y,r,opt)
        this.r=r
        World.add(world,this.body)
    }
    display()
    {
        var pos =this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle)
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r)
    pop();
    }
}