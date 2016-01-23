// MINIMUM


function min(x, y) {
  if (x < y) {
    return x;
  }
  else {
    return y;
  }
}



// RECURSION

function isEven(N) {
  if (N % 2 === 0 ) {
    return true;
  }
  else {
    return false;
  }
 }


// BEAN COUNTING

function countBs(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      count += 1;
    }
   }
  return count;
}

function countChar(string, x) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
   if (string.charAt(i) === x) {
      count += 1;
    }
   }
  return count;
}
// Note that this last function still needs some work, as counts either lower or upper case, not both
