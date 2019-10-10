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

function isTrue(anything){
    if(anything === true){
        return true;
    } else {
        return false;
    }
}

function isFalse(anything){
    if(anything === false){
        return true;
    } else {
        return false;
    }
}

function not(any){
    return !any;
}

function addOne(num){
    if(num <= 0 || num > 0){
        return num + 1;
    }
}

function isEven(num){
    if(num % 2 === 0){
        return true;{
            if(num === false){
                return false;
            }
        }
    } else {
        return false;
    }
}

function isIdentical(a, b){
    if(a === b){
        return true;
    } else {
        return false;
    }
}

function isEqual(a,b) {
    if(a == b){
        return true;
    }else {
        return false;
    }
}

function or(a,b) {
    return a || b;
}

function and(a,b){
    return a && b;
}

function concat(a,b){
    return a + b;
}


