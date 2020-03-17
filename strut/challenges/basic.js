function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    
    return arr.shift();
    // Only change code above this line
    
   }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  
  var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line

if (strokes==1) {
return "Hole-in-one!";
} else if (strokes <= par - 2) {
return "Eagle"; 
} else if (strokes == par - 1) {
return "Birdie";
} else if (strokes == par) {
return "Par";
} else if (strokes == par + 1)  {
return "Bogey";
} else if (strokes == par + 2) {
return "Double Bogey";
} else if (strokes >= par + 3) {
return "Go Home!";
} else {
return "change me!";
}

  // Only change code above this line
}

golfScore(4, 1);
golfScore(4, 2);
golfScore(5, 2);
golfScore(4, 3);
golfScore(4, 4);
golfScore(1, 1);
golfScore(5, 5);
golfScore(4, 5);
golfScore(4, 6);
golfScore(4, 7);
golfScore(5, 9);
