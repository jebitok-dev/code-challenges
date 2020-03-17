var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "The "+myNoun+" very "+myAdjective+" and it "+myVerb+" very "+myAdverb+".";
// Only change code above this line


var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[2][1];

var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
myArray.push(["dog", 3]); //add item to end of array
var removedFromMyArray = myArray.pop(); //remove last item of array
var removedFromMyArray = myArray.shift(); //remove first item of a array
myArray.unshift(["paul", 35]);

console.log(wordBlanks);
console.log(myArray);
console.log(myData);
console.log(removedFromMyArray);

var myGlobal = 10;//global scope

function fun1() {
oopsGlobal = 5; //global scope
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
console.log(processArg(7))