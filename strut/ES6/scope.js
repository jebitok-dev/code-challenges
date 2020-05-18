const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
 s[0] = 2
 s[1] = 5
 s[2] = 7
  // Using s = [2, 5, 7] would be invalid
  // Only change code above this line
}
console.log(editInPlace());

/*Object.freeze to prevent mathematical constants from changing. 
You need to freeze the MATH_CONSTANTS */

// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit =  fahrenheit;
  }
  //getter 
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);  }
  //setter 
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//Promise
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
})

//handling fulfilled promise
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  //do something with the result.
  console.log(result);
});
makeServerRequest.then(error => {
  console.log(error);
});

function addTogether() {
  var args = arguments;
  var a = args[0];
  var b = args[1];
function isNum(num) {
  return Number.isInteger(num);
}

if(isNum(a)) {
  if(isNum(b))
  return a + b;
  else if(!b)
  return function(b) {
    if(isNum(b))
  return a + b;
  }
}
}

addTogether(2,3);


//Algorithm scritping : Make Person
var Person = function(firstAndLast) {
  let nameArr = firstAndLast.split(" ");

  this.getFirstName = function() {
    let firstName = nameArr[0];
    return firstName;
  };
  this.getLastName = function() {
    let lastName = nameArr[1]
    return lastName;
  };
  this.getFullName = function() {
    const fullName = nameArr.join(" ");
    return fullName;
  };
  this.setFirstName = function(firstName) {
    nameArr[0] = firstName;
  };
  this.setLastName = function(lastName) {
    nameArr[1] = lastName;
  };
  this.setFullName = function(firstAndLast) {
    nameArr = firstAndLast.split(" ");
  }
};

var bob = new Person('Bob Ross');
bob.getFullName();

//map of debris Math.
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for( var i = 0; i < arr.length; i++) {
    arr[i].orbitalPeriod = Math.round((2 * Math.PI)* Math.sqrt(Math.pow((earthRadius+ arr[i].avgAlt),3)/GM))
    delete arr[i].avgAlt;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
