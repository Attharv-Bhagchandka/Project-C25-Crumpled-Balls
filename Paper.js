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
        super(this.x, this.y, (this.r-20)/2, options);
        this.image = loadImage("paper.png");
		World.add(world, this.body);
	}
	display(){	
        push()
        imageMode(CENTER);
        image(this.image, x, y, this.r);
		super.display();
        pop()
	}
}