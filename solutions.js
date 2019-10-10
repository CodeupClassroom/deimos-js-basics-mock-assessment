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


//#2

function isTrue(x) {
    if (x === "true") {
        return true;
    } else {
        return false;
    }
}

//#3
function isFalse(x){
    if (x === "false") {
        return true;
    } else {
        return false;
    }
}
//#4
//return
function not(x){
    var b = !x;
    return b;
}


//#5 !!!!!!!!!!

function addOne (x) {
    if (!isNaN(x)) {
        return x + 1;
    } else {
        return x;
    }
}

//#6
function isEven(x) {
    if (x % 2 == 0){
        return true;
    } else  {
        return false;
    }
}
//#7
function isIdentical(x,y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
}
//#7
function isEqual(x,y) {
    if (x == y) {
        return true;
    } else {
        return false;
    }
}

//#8
function or(x,y){
    return x || y;
}

//#8
function and(x,y){
    return x && y;
}
//#9 !!!!!!!!!!!!!!!!!!!!!!
function concat(x,y) {
    if (isNaN(x && y)) {
        return (x + y)
    } else {
        return (x.toString() + y.toString());
    }
}



