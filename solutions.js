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
function isTrue(n) {
    if (n === true) {
        return true;
    }
    else {
        return false;
    }
}
function isFalse(n) {
    if (n === false) {
        return true;
    }
    else {
        return false;
    }
}
function not(n) {
    return !n;
}
function addOne(n) {
    if (n === Infinity) {
        return Infinity;3
    }
    return parseInt(n) + 1;
}
function isEven(n) {
    if (typeof n === "number" || typeof n === "string") {

        if (n % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
function isIdentical(n, m) {
    if (n === m) {
        return true;
    }
    else {
        return false;
    }
}
function isEqual(n, m) {
    if (n == m) {
        return true;
    }
    else {
        return false;
    }
}
function or(n, m) {
    return (n || m);
}

function and(n, m) {
    return (n && m);
}
function concat(n, m) {
    return n.toString() + m.toString();
}
