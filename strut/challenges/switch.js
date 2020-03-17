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

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
      answer = "Mid";
      break;
  case 7:
  case 8:
  case 9:
      answer = "High";
      break;
}


  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(5));
console.log(sequentialSizes(8));

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
  case "bob":
  answer = "Marley";
  break;
  case 42:
  answer = "The Answer";
  break;
  case 1:
  answer = "There is no #1";
  break;
  case 99:
  answer = "Missed me by this much!";
  break;
  case 7:
  answer = "Ate Nine";
  break;
}
 
  return answer;
}

console.log(chainToSwitch(7));

var count = 0;

function cc(card) {
  // Only change code below this line
switch(card){
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
count+=1;
break;
case 7:
case 8:
case 9:
count+=0;
break;
case 10:
case "J":
case "Q":
case "K":
case "A":
count-=1;
break;

}

if (count <=0){
return count + " Hold";
}
else {
return count + " Bet";
}

return count;
  // Only change code above this line
}

console.log(cc(2))
 console.log(cc(3)); 
 console.log(cc(7));
  console.log(cc('K')); 
  console.log(cc('A'));

function abTest(a, b) {
  // Only change code below this line
if (a < 0 || b < 0) 
return undefined;
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));