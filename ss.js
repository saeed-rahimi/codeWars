"use strict";

const points = (arr) => {
    return arr
      .map((e) => e.split(":").map(Number))
      .reduce((sum, e) => {
        if (e[0] > e[1]) {
          return sum + 3;
        } else if (e[0] === e[1]) {
          return sum + 1;
        } else {
          return sum;
        }
      }, 0);
  };
console.log(
  points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]
    
  )
);
// function calculateScore(pairs) {
//     let totalScore = 0;
//     pairs.forEach(pair => {
//         let [first, second] = pair.split(":").map(Number);
//         console.log(typeof first,typeof second);

//         if (first > second) {
//             totalScore += 3;
//         } else if (first === second) {
//             totalScore += 1;
//         }

//     });
//     return totalScore;
// }
//  console.log( calculateScore(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
