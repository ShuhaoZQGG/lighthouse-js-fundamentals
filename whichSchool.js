const whichSchool  = function (age) {
  // Your code in here ...
  let answer;

  if (age < 13){
    answer = "Elementary School";
  }
  else if (age <= 18 && age >= 13){
    answer = ("Secondary School");
  }
  else{
    answer = ("Lighthouse Labs");
  }

  return answer;
}

console.log(whichSchool(13));