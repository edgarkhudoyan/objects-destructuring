// How to pass arguments in sum function?
'use strict';
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

let [x, y, z] = numbers;

console.log(sum(x, y, z)); // prints 6
