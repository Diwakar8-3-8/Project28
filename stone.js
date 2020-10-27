class stone{
    constructor(x,y,w,h){
        var options={
            isStatic = true,
            restitution = 0,
            friction = 1,
            density = 1.2 
        }
        this.x = x;
        this.y = y;
        this.groundWidth = w;
        this.groundHeight = h;
    }
    
        push()
        translate(stonePos.x, stonePos.y);
        imageMode(CENTER)
         //rect(0,0,this.w, this.h);
        image(this.image);
        pop()
}