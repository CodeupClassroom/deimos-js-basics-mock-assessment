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
 */

function isTrue(x) {
    return x === true;
}

// isFalse

function isFalse(x){
    return x === false;
}


// not

function not(x){
    return !x;
}


// addOne

function addOne(x) {
    var x = parseFloat(x);
    return x + 1;
}


// isEven

function isEven(x) {
    var x = parseFloat(x);
   if (x % 2 == 0) {
       return true }
   else { return false
   }
}


// isIdentical

function isIdentical(x,y) {
  if (x === y) {
      return true }
  else { return false
  }
}


// isEqual

function isEqual(x,y) {
    if (x == y) {
        return true }
    else { return false
    }
}

// or

function or(x,y) {
    return x || y;
}


// and

function and(x,y) {
    return (x && y);
}


// concat

function concat(x,y) {
    var x = String(x);
    var y = String(y);
    return x + y;
}
