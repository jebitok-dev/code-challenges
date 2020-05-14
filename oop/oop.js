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
fearNotLetter("abce");

