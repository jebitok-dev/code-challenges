function randomFraction() {

    // Only change code below this line
  Math.random(); 
    return 0.67;
}  
console.log(randomFraction());

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  
  }
  
  //var myRandom = 
  console.log(randomRange(5, 15));

  //CONVERTING STR TO INTERGER
  function convertToInteger(str) {
    return parseInt(str)
    }
    
    console.log(convertToInteger("56"));
    //Use the parseInt Function with a Radix
    /*The radix variable says that "11" is in the binary system, or base 2. 
    This example converts the string "11" to an integer 3.
    parseInt(string, radix);*/
    function convertToInteger(str, radix) {
        return parseInt(str, 2);
        }
           
        console.log(convertToInteger("10011"));

 function checkSign(num) {
      return num > 0 ? "positive" : num < 0 ?"negative"  : "zero"
          
      }
          
console.log(checkSign(10));

function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArr = countdown(n - 1);
    countArr.unshift(n);
    return countArr
  }
  return;
}
// Only change code above this line
console.log(countdown(5)); // [5, 4, 3, 2, 1]

  /*loop syntax (for or while or higher order functions
   such as forEach, map, filter, or reduce)*/ 
   
   function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum  ? [startNum] :
    [...rangeOfNumbers(startNum, endNum - 1), endNum]
  };

  console.log(rangeOfNumbers(1, 5));
  
        