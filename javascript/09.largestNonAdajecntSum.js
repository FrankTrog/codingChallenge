// javascript/09.largestNonAdajecntSum.js
// 250209 HARD
/*
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
*/

function largestNonAdajacentSum(intList) {
    let largestSum = 0;
    for (var i = 0; i < intList.length; i++) {
        let testSum = 0;
        for (var j = 0; j < intList.length; j++) {
            if (j < i - 1 || j > i + 1) {
                testSum += intList[j];
            }
        }
        largestSum = largestSum > testSum ? largestSum : testSum;
    }
    return largestSum;
}

const intList = [2, 4, 6, 2, 5];
console.log(largestNonAdajacentSum(intList)); // 13

// Follow-up

function largestNonAdjacentSum2(intList) {
    let inclusive = 0;
    let exclusive = 0;

    for (let i = 0; i < intList.length; i++) {
        let newExclusive = Math.max(inclusive, exclusive);
        inclusive = exclusive + intList[i];
        exclusive = newExclusive;
    }

    return Math.max(inclusive, exclusive);
}

console.log(largestNonAdjacentSum2(intList)); // 13
console.log(largestNonAdjacentSum2([5, 2, 6, 4, 2])); // 13