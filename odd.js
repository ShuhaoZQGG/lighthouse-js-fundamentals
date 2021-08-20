const isOdd = function(num){
  return num % 2 != 0;
}

const threeIsOdd = isOdd(3);
const eightIsOdd = isOdd(8);

console.log("3 is odd: " + threeIsOdd);
console.log("8 is odd: " + eightIsOdd);