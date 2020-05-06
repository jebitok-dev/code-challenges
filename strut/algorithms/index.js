function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
//TitleCase first letter of string
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

titleCase("I'm a little tea pot");
//splice & slice arrays
function frankenSplice(arr1, arr2, n) {
let locArray = arr2.slice();
for (let i = 0; i < arr1.length; i++) {
  locArray.splice(n, 0, arr1[i]);
  n++;
}
return locArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
//falsey
function bouncer(arr) {
  let newArray = [];
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);


