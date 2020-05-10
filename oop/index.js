const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }

const squareList = arr => {
  // Only change code below this line
return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, []);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
return [].concat(arr).sort(function (a, b) {
  return a - b;
})


  // Only change code above this line
}
nonMutatingSort(globalArray);
