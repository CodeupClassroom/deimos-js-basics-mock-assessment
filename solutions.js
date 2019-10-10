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


function isTrue(input){
    var returnMessage = (input === true);
    return returnMessage;
}

function isFalse(input){
    var returnMessage = (input === false);
    return returnMessage;
}

function not(input){
    var returnMessage = !input;
    return returnMessage;
}

function addOne(num){
    var returnMessage = parseFloat(num) + 1;
    return returnMessage;
}

function isEven(x){
    var returnMessage = parseInt(x) % 2 === 0;
    return returnMessage;
}

function isIdentical(input1 , input2){
    var returnMessage = input1 === input2;
    return returnMessage;
}

function isEqual(input1 , input2){
    var returnMessage = input1 == input2;
    return returnMessage;
}

function or(input1 , input2){
    var returnMessage = input1 || input2;
    return returnMessage;
}

function and(input1 , input2){
    var returnMessage = input1 && input2;
    return returnMessage;
}

function concat(input1 , input2){
    var returnMessage = input1.toString() + input2.toString();
    return returnMessage;
}