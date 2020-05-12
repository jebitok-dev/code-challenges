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

function sentensify(str) {
  // Only change code below this line
return str.split(/\W/).join(" ");

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");

var globalTitle = "Winter Is Coming";

//currying
// Only change code below this line
function urlSlug(title) {
return title
  .split(/\W/)
  .filter(obj => {
    return obj !== "";
  })
  .join("-")
  .toLowerCase();

}
// Only change code above this line
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4]);

function spinalCase(str) {
var regex = /\s+|_+/g;
str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
return str.replace(regex, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
