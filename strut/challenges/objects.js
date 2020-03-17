//adding & deleting an object property
var myName = {
    "name": "jay",
    "fav": "play",
    "friends": "many!"
}
myName.day = "Tuesday"
delete myName.fav;
console.log(myName);

function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    return lookup[val];
  
    // Only change code above this line
    return result;
  }
  
  console.log(phoneticLookup("charlie"));
  
  var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {
    // Only change code below this line
    if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp]
    } else if (myObj.hasOwnProperty[checkProp] !== true) {
      return "Not Found";
    }
    // Only change code above this line
  }
  
  console.log(checkObj("gift"));

  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
  