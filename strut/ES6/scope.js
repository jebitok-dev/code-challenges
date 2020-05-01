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