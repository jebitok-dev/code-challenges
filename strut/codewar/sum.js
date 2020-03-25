//squareSum([1,2,2]) should return 9

//SOLUTION 1
function squareSum(numbers)
{ 
  var totalSum = 0;
  for (i=0;i<numbers.length;i++)
  {
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}

//ERROR
function squareSum(numbers){
    var a = numbers[0]+numbers[1];
    var b = numbers[2];
    var powReturn =0;
    powReturn = Math.pow(a,b);
    return powReturn;
}

//SOLUTION 2
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }
  
  //finding odd numbers
  function findOdd(A) {
    for (var i = 0; i < A.length; i++) {
      var count = 0;
      for (var j = 0; j < A.length; j++) {
        if (A[i] === A[j]) {
          count++
        }
      }
      if (count % 2 !== 0) {
        return A[i];
      }
    }
  }
  
  findOdd([2,5,7,3,7,5,2,2,3]); 
