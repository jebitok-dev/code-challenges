function pairElement(str) {
  var arr = []; 
var search = function(char) {
  switch (char) {
    case "A": 
      arr.push(["A", "T"]);
      break;
      case "T": 
      arr.push(["T", "A"]);
      break;
      case "C":
      arr.push(["C", "G"]);
      break;
      case "G":
      arr.push(["G", "C"]);
      break;
  }
};
for (var i = 0; i < str.length; i++) {
  search(str[i]);
}
return arr;
}

pairElement("GCG");

//missing letters
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce

function uniteUnique(arr) {
  var finalArr = [];
  for ( var i = 0; i < arguments.length; i++) {
    var arrArguments = arguments[i];
    for (var j = 0; j < arrArguments.length; j++)
{
  var indexValue = arrArguments[j];
  if (finalArr.indexOf(indexValue) < 0) {
    finalArr.push(indexValue)
  }
}
}
return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//converting html entities
function convertHTML(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&apos;");
  return str;
}

convertHTML("Dolce & Gabbana");

//sum all odd fibonnaci numbers
function sumFibs(num) {
  if (num < 0){
    return undefined;
  }
  var sumFibs = 0;
  for( var n1 = 0, n2 = 1, temp; n2 <= num; temp = n2, n2 += n1, n1 = temp) {
    sumFibs += n2 * (n2 % 2);
  }
  return sumFibs;
}

sumFibs(4);

function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var multiple = max;
  for (var i = max; i >= min; i--) {
    if (multiple % i !== 0) {
      multiple += max;
       i = max;
    }
  }
  return multiple;
}


smallestCommons([1,5]);

//steamrolled
function steamrollArray(arr) {
  var steamRolled =  [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      var subArray = steamrollArray(arr[i]);
      steamRolled = steamRolled.concat(subArray);
    } else {
      steamRolled.push(arr[i])
    }
  }
  return steamRolled;
}

steamrollArray([1, [2], [3, [[4]]]]);

function truthCheck(collection, pre) {
  for (var obj of arguments[0]) {
    if(!obj[arguments[1]]) {
      return false
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

