class Food {

    constructor() {
    
      this.button = createButton('Feed');
      this.image=loadImage("Images/Milk.png");
    }
    
  
    display(){
      var title = createElement('h2')
      title.html("Virtual Pet");
      title.position(displayWidth/2-50, 0);
      var x=80,y=100;

  
      image(this.image, 720,220,70,70);
      this.button.position(displayWidth/2+30, displayHeight/2);
      if(this.foodStock!==0){
for(var i=0;i<this.foodStock;i++){
if(i%10==0){
x=80
y=y+50
}
image(this.image,x,y,50,50);
}
      }
  
      
        
       
        
      
  
    }
  }
  