/* The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on
needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
Given the after-tax income as ati, what you are supposed to do is to make a function that will return an
object that shows how much a person needs to spend on needs, wants, and savings. */
'use strict';

// let sum = 50;

function fiftyThirtyTwenty(sum) {
  const strategy = {
    Needs: sum / 2,
    Wants: Math.floor(sum / 3.3),
    Savings: sum / 5,
  };

  return strategy;
}

fiftyThirtyTwenty(50000);
