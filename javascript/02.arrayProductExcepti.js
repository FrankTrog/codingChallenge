// javascript/02.arrayProductExcepti.js
// 250130
/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/


const inputAr = [1, 2, 3, 4, 5];
const result = [];

for (var i = 0; i < inputAr.length; i++) {
    let product = 1;
    for (var j = 0; j < inputAr.length; j++) {
        if (i != j) product *= inputAr[j];
    }
    result.push(product)
}

console.log(result);

// Follow up
// My initial version didn't solve it utilizing division. 
// Research shows that this can be accomplished utilizing division using the example below. 

const result2 = [];
for (var k = 0; k < inputAr.length; k++) {
    let product = 1;
    for (var l = 0; l < inputAr.length; l++) {
        product *= inputAr[l];
    }
    result2.push(product / inputAr[k]);
}

console.log(result2);