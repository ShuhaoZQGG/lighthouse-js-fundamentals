function concat(list1, list2){
  if (list1 == [] && list2 == []){
    return [];
  }

  else if (list2 == []){
    return list1;
  }

  else if(list1 == []){
    return list2;
  }
  else{
    for(let i = 0; i < list2.length; i++){
      list1.push(list2[i]);
    }
    return list1;
  }
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);