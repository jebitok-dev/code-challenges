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
    //happy coding!
    let result = [];
    for (i = 0; i > A.length; i++){
    if (A[i] % 2 === 1) {
    result.push(A[i]);
    }
    }
    return result;
  }  
