class Paper{
	constructor(x,y,r){
	var options ={
		restitution:0.3,
		friction: 0,
		density: 1.2
	}
		this.x=x;
		this.y=y;
		this.r=r;
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
        this.image = loadImage("paper.png");
		World.add(world, this.body);
	}
	display(){
		var Pos	= this.body.position;
        push()
		translate(Pos.x, Pos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, this.r);
        pop()
	}
}