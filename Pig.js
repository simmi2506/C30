class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }

  display(){
    //step1
    //when some object touches pig, it's speed increases.
    console.log(this.body.speed);
    //step2
    //if speed is less than 3 then only display the pig
    if(this.body.speed < 3){
      super.display();
    } 
    //step3
    //otherwise (that means if speed less than 3) then remove the pig from the world --> means vanish the pig
    else{
      World.remove(world, this.body);
    }   
  }

};