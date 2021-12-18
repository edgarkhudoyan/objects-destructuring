// Create a function that takes infinite count of elements, operator and prints their sum. If there's no operator, then default should be +
'use strict';

function allSum(...nums) {
  return nums.reduce((total, cur) => total + cur);
}

console.log(allSum(5, 6, 7, 10, 4));
