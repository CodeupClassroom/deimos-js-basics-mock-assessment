"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// 1.
function isTrue(x) {
    return (x === true);
}
// 2.
function isFalse(x) {
    return (x === false);
}
// 3.
function not(x){
    return (!x)
}
// 4.
function addOne(x) {
    return (parseFloat(++x));
}
// 5.
function isEven(x) {
    return (parseFloat(x) % 2 === 0);
}
// 6.
function isIdentical(x, y) {
    if(x === y){
        return true;
    } else {
        return false;
    }
}
// 7.
function isEqual(x, y) {
    return (x == y);
}
// 8.
function or(x, y) {
    return (x || y);
}
// 9.
function and(x, y) {
    return (x && y);
}
// 10.
function concat(x, y) {
    return ('' + x + y);
}