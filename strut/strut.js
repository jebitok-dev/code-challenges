var SequenceSum = (() => { // var = function ==> function expression
     SequenceSum = () => {} 
  
    SequenceSum.showSequence = function(count) { // Makes showSequence ==> Object
      var sum = 0; 
      var str = "";
      if (count === 0) {
        return "0=0";
      } else if (count < 0) {
        return count + "<0";
      } else {
        for (var i = 0; i < count; i++) {
          sum += i; 
          str += i + "+";
        }
      sum += count;
      str += count + " = " + sum;
      return str;
      }
    }
  
    return SequenceSum;
  
  })();
  
  SequenceSum.showSequence(0)
  SequenceSum.showSequence(6)
  SequenceSum.showSequence(-15)
  