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

var value = true;

function isTrue() {
if(value === true) {
    return value;
    }
}

function isFalse(value) {
if(value === false) {
    return true;
} else {
    return false;
}
}

function not(input) {
if(input === false || ".") {
    return true;
} else {
    return false;
}
}

function addOne(number) {
 return ("number" + 1);

}


function isEven(evenNumber) {
    if(evenNumber % 2 >= 0) {
        return true;
    } else {
        return false;
    }
}

function isIdentical(num1, num2) {
if(num1 === num2) {
    return true;
    } else {
    return false;
    }
}

function isEqual(num1, num2) {
    if(num1 == num2) {
        return true;
    } else {
        return false;
    }
}

function or(value1, value2) {
    return value1 || value2;
}

function and(value1, value2) {
    return value1 && value2;
}

function concat(value1, value2) {
    return "Code" + "up";
}

