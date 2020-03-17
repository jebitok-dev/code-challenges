function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
  switch(val) {
    case 1:
    answer = "alpha";
    //console.log(ALPHA);
     break;
    case 2:
    answer = "beta";
      break;
    case 3:
    answer = "gamma";
     break;
    case 4:
    answer = "delta";
      break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  console.log(caseInSwitch(1));
  console.log(caseInSwitch(2));
  console.log(caseInSwitch(3));
  console.log(caseInSwitch(4));
  
  function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
switch(val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff";
  break;
}


  // Only change code above this line
  return answer;
}

console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff(4));
console.log(switchOfStuff("d"));
