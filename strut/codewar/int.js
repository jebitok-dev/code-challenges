//converting roman number to interger
var convertToRoman = function(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
    var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

// test here
convertToRoman(36);

    function convertToRoman(num) {
        var romans = ["I", "V", "X", "L", "C", "D", "M"],
          ints = [],
          romanNumber = [],
          numeral = "",
          i;
        while (num) {
          ints.push(num % 10);
          num = Math.floor(num / 10);
        }
        for (i = 0; i < ints.length; i++) {
          units(ints[i]);
        }
        function units() {
          numeral = romans[i * 2];
          switch (ints[i]) {
            case 1:
              romanNumber.push(numeral);
              break;
            case 2:
              romanNumber.push(numeral.concat(numeral));
              break;
            case 3:
              romanNumber.push(numeral.concat(numeral).concat(numeral));
              break;
            case 4:
              romanNumber.push(numeral.concat(romans[i * 2 + 1]));
              break;
            case 5:
              romanNumber.push(romans[i * 2 + 1]);
              break;
            case 6:
              romanNumber.push(romans[i * 2 + 1].concat(numeral));
              break;
            case 7:
              romanNumber.push(romans[i * 2 + 1].concat(numeral).concat(numeral));
              break;
            case 8:
              romanNumber.push(
                romans[i * 2 + 1]
                  .concat(numeral)
                  .concat(numeral)
                  .concat(numeral)
              );
              break;
            case 9:
              romanNumber.push(romans[i * 2].concat(romans[i * 2 + 2]));
          }
        }
        return romanNumber
          .reverse()
          .join("")
          .toString();
      }
      
      // test here
      convertToRoman(97);

      function convertToRoman(num) {
        var romans = ["I", "V", "X", "L", "C", "D", "M"],
          ints = [],
          romanNumber = [],
          numeral = "",
          i;
        while (num) {
          ints.push(num % 10);
          num = Math.floor(num / 10);
        }
        for (i = 0; i < ints.length; i++) {
          units(ints[i]);
        }
        function units() {
          numeral = romans[i * 2];
          switch (ints[i]) {
            case 1:
              romanNumber.push(numeral);
              break;
            case 2:
              romanNumber.push(numeral.concat(numeral));
              break;
            case 3:
              romanNumber.push(numeral.concat(numeral).concat(numeral));
              break;
            case 4:
              romanNumber.push(numeral.concat(romans[i * 2 + 1]));
              break;
            case 5:
              romanNumber.push(romans[i * 2 + 1]);
              break;
            case 6:
              romanNumber.push(romans[i * 2 + 1].concat(numeral));
              break;
            case 7:
              romanNumber.push(romans[i * 2 + 1].concat(numeral).concat(numeral));
              break;
            case 8:
              romanNumber.push(
                romans[i * 2 + 1]
                  .concat(numeral)
                  .concat(numeral)
                  .concat(numeral)
              );
              break;
            case 9:
              romanNumber.push(romans[i * 2].concat(romans[i * 2 + 2]));
          }
        }
        return romanNumber
          .reverse()
          .join("")
          .toString();
      }
      
      // test here
      convertToRoman(97);