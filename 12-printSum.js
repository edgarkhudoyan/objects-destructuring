// Create a function that takes infinite count of elements, operator and prints their sum. If there's no operator, then default should be +
'use strict';

function allSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(allSum(5, 6, 7, 10, 4));
