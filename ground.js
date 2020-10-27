class ground
{
    constructor(x,y,w,h){

        var options={
            isStatic = true,
            friction = 0.1
        }
        this.x = x;
        this.y = y;
        this.groundWidth = 800;
        this.groundHeight = 20;

    }
    display(){
        var groundPos=this.body.position;	

        push()
        translate(groundPos.x, groundPos.y);
        imageMode(CENTER)
        strokeWeight(4);
        fill(255,255,0)
        //rect(0,0,this.w, this.h);
        image(this.image);
        pop()
        
    }
}
