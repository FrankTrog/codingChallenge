// javascript/10.jobSchedulerFunction.js
// 250209 Medium
/*
This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

jobScheduler(logTheTime, 500);

function logTheTime() {
    console.log(new Date());
}

function jobScheduler(fName, delay) {
    if (typeof fName === "function" && typeof delay === "number" && delay > 0) {
        setTimeout(fName, delay);
    }
}