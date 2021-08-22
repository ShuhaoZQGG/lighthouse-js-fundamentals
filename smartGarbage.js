function smartGarbage(string, object){
  if (string === "recycling" || string === "waste" || string === "compost"){
    object[string] ++;
  }
  return object;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
