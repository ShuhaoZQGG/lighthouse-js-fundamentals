function lastIndexOf(list, num){
  let index = -1;
  for(let i = list.length - 1; i >= 0; i--){
    if (list[i] === num){
      index = i;
      i = -1; // end the loop if the answer is found
    }
    else{
      index = -1;
    }
  }
  return index;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);