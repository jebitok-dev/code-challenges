// //number to string
// //var num = 15;
// function numberToString(num) {
//     //var num = 15
//     return num.toString();
// }
     
// console.log(numberToString(15));

let Pancake = function () {
    this.Pancake = 0;
    this.bake = function () {
        console.log("Baking the pancake");
        this.number++;
      //  console.log(this.number())
    };
}

let pancake = new Pancake

pancake.bake();
pancake.bake();
pancake.bake();
console.log(Pancake.constructor());
// console.log(Pancake.number())

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i+=1) {
  if (arr[i] > 0) {
  sum += arr[i]
  }
} 
return sum;
};

console.log(positiveSum([5, -4, 3, 2, -1]));