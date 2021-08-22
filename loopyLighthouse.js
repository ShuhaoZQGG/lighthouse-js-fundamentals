function loopyLighthouse(range,multiples,words){
  let array = [];
  for (let i = range[0]; i <= range[1]; i++){
    array.push(i);
  }

  for(let j = 0; j <= array.length - 1; j++){
    if (array[j] % multiples[0] === 0 && array[j] % multiples[1] === 0){
      array[j] = words[0] + words[1]
    }
    else if (array[j] % multiples[0] === 0){
      array[j] = words[0];
    }
    else if (array[j] % multiples[1] === 0){
      array[j] = words[1];
    }
    console.log(array[j])
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);