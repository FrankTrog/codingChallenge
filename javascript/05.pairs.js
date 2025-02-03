// /javascript/05.pairs.js
// 250202
/*
This problem was asked by Jane Street and is considered medium difficulty.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.
*/

function cons(a, b) {
    function pair(f) {
        return f(a, b)
    }
    return pair
}

function car(pair) {
    if (typeof pair !== 'function') {
        throw new Error("Argument to car must be a pair (function).");
    }
    return pair((a, b) => a);
}

function cdr(pair) {
    if (typeof pair !== 'function') {
        throw new Error("Argument to cdr must be a pair (function).");
    }
    return pair((a, b) => b);
}

const myPair = cons(2, 3);
console.log(car(myPair)); // 2
console.log(cdr(myPair)); // 3

const arrayPair = cons([1, 2, 3], { name: "Frank" })
console.log(car(arrayPair)); // [1,2,3]
console.log(cdr(arrayPair)); // { name : "Frank" }

const functionPair = cons(() => console.log("test"), true)
console.log(typeof car(functionPair)); // 'function'
console.log(cdr(functionPair)); // true

const nestedPair = cons(1, cons(2, cons(3, null)));
console.log(car(nestedPair)); // 1
console.log(car(cdr(nestedPair))); // 2
console.log(car(cdr(cdr(nestedPair)))); // 3
console.log(cdr(cdr(cdr(nestedPair)))); // null

const nil = null;
const emptyPair = cons(nil, nil);
console.log(car(emptyPair)); // null
console.log(cdr(emptyPair)); // null


console.log(car()); // error
console.log(cdr()); // error