var myArray = [];

// Only change code below this line
var i = 5;
while(i >= 0) {
myArray.push(i);
i--;
}
console.log(myArray);

var myArray2 = [];

// Only change code below this line
for (var i = 1; i <= 5; i++) {
  myArray2.push(i);
}
console.log(myArray2);

var myArray3 = [];

// Only change code below this line
for (var i = 1; i < 10; i+=2) {
  myArray3.push(i);
}

console.log((myArray3))

//nested arrays
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      console.log(product *= arr[i][j]);
    }
  }
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

  //DO..WHILE LOOP
var myArray = [];
var i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
  
function sum(arr, n) {
    // Only change code below this line
  if (n <= 0) {
  return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
    // Only change code above this line
  }
  