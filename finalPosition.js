const moving = []  


const finalPosition = function(moves){
  const position = [];
  let x = 0;
  let y = 0;
  if(moves == []){
    return [0,0];
  }
  else{
    for (let move of moves){
      if (move === 'north'){
        y ++;
      }
      else if (move === 'south'){
        y--;
      }
      else if (move === 'east'){
        x++;
      }
      else if (move === 'west'){
        x--;
      }
    }
  }
  
  position.push(x);
  position.push(y);
  return position;
}

console.log(finalPosition(moving));