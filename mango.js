class mango {
constructor(x,y,w,h){
var options={
    isStatic = true,
    restitution = 0,
    friction = 1
}
this.x = x;
this.y = y;
}
display(){
    push()
        translate(mangoPos.x, mangoPos.y);
        imageMode(CENTER)
        strokeWeight(4);
        fill(255,255,0)
        //rect(0,0,this.w, this.h);
        image(this.image);
        pop()
}
}