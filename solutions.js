"use strict";

function isTrue(x) {
    if (x === true) {
        return true;
    } else {
        return false;
    }
}


function isFalse(x) {
    if (x === false) {
        return true;
    } else {
        return false;
    }
}

 function not(x) {
     return !x;
 }

function addOne(x) {
    if (x == Infinity) {
        return Infinity;
    } else {
        var y = parseInt(x);
        return y + 1;
    }
}

function isEven(x) {
   if (x % 2 === 0) {
       return true;
   } else {
       return false;
   }
}

function isIdentical(x, y) {
    return x === y;
}

function isEqual(x, y){
    return x == y;
}

function or(x, y) {
    return x || y;
}

function and(x, y) {
    return x && y;
}
 function concat(x, y) {
    if (typeof x === "string") {
   var z = x.concat(y);
   return z;
 } else {
    return x + "" + y;
    }
 }

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
