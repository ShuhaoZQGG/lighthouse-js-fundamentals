const ageCalculator = function(name, birthday, currentYear){
  const age = currentYear - birthday;
  return (name + " is " + age + " years " + "old.");
}

console.log(ageCalculator("Suzie", 1983, 2015));