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