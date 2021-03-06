function isTouching(ob1, ob2){
    if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
      && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
      && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
      && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
        return true;
    }
    else 
    return false;
  }
  
  function bounceOff(x,y){
    if (isTouching(x,y)){
      x.velocityX = x.velocityX*-1;
      x.velocityY = x.velocityY*-1;
      y.velocityX = y.velocityX*-1;
      y.velocityY = y.velocityY*-1;
    }
  }