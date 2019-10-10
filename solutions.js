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

function isTrue (input) {
    return input === true;
}

function isFalse (value) {
    return value === false;
}

function isEven (input) {
    return parseInt(input) % 2 === 0;
}

function isIdentical (a,b) {
    return a === b;
}

function isEqual (a,b) {
    return a == b;
}

function or (a,b) {
    return a || b;
}

function and (a,b) {
    return a && b;
}

function concat (a,b) {
    var c = a.toString();
    var d = b.toString();
    return c + d;
}

function addOne (x) {
    return (parseFloat(x) + 1);
}

function not (input) {
    return input = !input;
}
