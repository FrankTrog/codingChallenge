// /javascript/01.checkListForSumMatch.js
// 250129
/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

const numList = [10, 15, 3, 7];
const sumToMatch = 17;

function checkForSumInList(list, target) {
    for (let i = 0; i < numList.length; i++) {
        for (let j = i + 1; j < numList.length; j++) {
            if (i != j && numList[i] + numList[j] === target) {
                return true;
            }
        }
    }
    return false;
}

console.log(checkForSumInList(numList, sumToMatch));