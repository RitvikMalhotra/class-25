class log extends baseClass{
constructor(x,y,width,height,angle){
super(x,y,width,height,angle);
this.image = loadImage("sprites/wood2.png")  
Matter.Body.setAngle(this.body,angle);
}   


display(){
super.display();


}
}