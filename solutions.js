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

function isTrue(statement){
    return statement === true;
}

function isFalse(statement){
    return statement === false;
}

function not(statement){
    return !statement;
}

function addOne(num){
    if(num === Infinity){
        return Infinity + 1;
    }
    return parseInt(num) + 1;
}

function isEven(num){
    return parseInt(num) % 2 === 0;
}

function isIdentical(statement1, statement2){
    return statement1 === statement2;
}

function isEqual(statement1, statement2){
    return statement1 == statement2;
}

function or(statement1, statement2){
    return statement1 || statement2;
}

function and(statement1, statement2){
    return statement1 && statement2;
}

function concat(statement1, statement2){
    if (typeof statement1 == 'boolean' && typeof statement2 == 'boolean'){
        return String(statement1) + String(statement2);
    }
    else if(typeof statement1 == 'number' && typeof statement2 == 'number'){
        return String(statement1) + String(statement2);
    }
    else {
        return statement1 + statement2;
    }
}