//test()
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 
// Returns true

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; //flag(g-multiple, i-any case-lower/uppercase)
let result = twinkleStar.match(starRegex); // Change this line
//multiple vowels(alphabetic)
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
//match all characters in string using /-/
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
//lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z].*?>/; // Change this line
let result = text.match(myRegex);
//greedy matching /t[a-z]*i/ "titanic" => [titani]
// \s-count white spaces | \S- non-whitespace
// \w - words \W- non-words | \d- numbers \D- non-numbers

//match passwords that are greater than 5 characters long, do not begin with
// numbers, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
//removing spaces at end front and end of string
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
