//Closure inside function scope
// var plus = (function () {
//     var counter = 0;
//     return function () {
//         counter += 1;
//         return counter;
//     }
// })();

// console.log(plus());//1
// console.log(plus());//2
// console.log(plus());//3

//class scope
class Pet {
    constructor () {
        let property = 1;
        this.something = 2;
    }
    method () {
        console.log(this.property());
        console.log(this.somthing());
    }
}