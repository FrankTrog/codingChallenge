// /javascript/04.returnMissingPositiveInteger.js
// 250201
/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

function findMissingPositiveInteger(searchArray = []) {
    if (searchArray.length == 0) return 1;

    // Sort and remove values < 0
    let sortedAndFilteredArray = [...searchArray].sort((a, b) => a - b)
        .filter(item => item >= 0);
    if (sortedAndFilteredArray.length == 0) return 1;
    if (sortedAndFilteredArray.length == 1) return sortedAndFilteredArray[0] + 1;

    for (let i = 0; i < sortedAndFilteredArray.length - 1; i++) {
        let currentNum = sortedAndFilteredArray[i];
        let nextNum = sortedAndFilteredArray[i + 1];

        if (currentNum + 1 < nextNum) {
            return currentNum + 1;
        }
    }
    return sortedAndFilteredArray[sortedAndFilteredArray.length - 1] + 1;
}

const intAr = [3, 4, -1, 1];
console.log(intAr, findMissingPositiveInteger(intAr));

const intAr2 = [1, 2, 0];
console.log(intAr2, findMissingPositiveInteger(intAr2));

const intAr3 = [];
console.log(intAr3, findMissingPositiveInteger(intAr3));

const intAr4 = [0];
console.log(intAr4, findMissingPositiveInteger(intAr4));

const intAr5 = [1];
console.log(intAr5, findMissingPositiveInteger(intAr5));

const intAr6 = [-1];
console.log(intAr6, findMissingPositiveInteger(intAr6));