// How to take arguments in sum function?
'use strict';

function sum(args) {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}
sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
