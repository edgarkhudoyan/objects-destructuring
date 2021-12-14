// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
'use strict';
function getVoteCount(obj) {
  let obj1 = {
    upvotes: obj.upvotes,
    downvotes: obj.downvotes,
  };

  return obj1.upvotes - obj1.downvotes;
}

getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0
