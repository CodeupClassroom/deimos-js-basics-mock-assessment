"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iife is, don't worry about it :)
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

//TODO: Define a function named 'isTrue' that takes in any input and returns true if the input provided is exactly equal to true in value and boolean in data type.

function isTrue(x) {
    return x === true;
}

//TODO: Define a function named 'isFalse' that takes in a value and returns true if and only if the argument provided false.

function isFalse(x) {
    return x === false;
}

//TODO: Define a function named 'not' that takes in any input and returns the boolean opposite of the provided input.

function not(x) {
    return !x;
}

//TODO: Define a function named 'addOne' that takes in a single input. If the input is a number or a numeric string, return the value plus one.

function addOne(x) {
    return parseFloat(x) + 1;
}

//TODO: Define a function named 'isEven' that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.

function isEven(x) {
    return parseFloat(x) % 2 === 0;
}

//TODO: Define a function named 'isIdentical' that takes in two input arguments. If each input is equal both in data type and in value, then return true. If the values are not the same data type or not the same value, return false.

function isIdentical(a, b) {
    return a === b;
}

//TODO: Define a function named 'isEqual' that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.

function isEqual(a, b) {
    return a == b;
}

//TODO: Define a function named 'or' that takes in two input arguments. The output returned should be the result of an or operation on both inputs.

function or(a , b) {
    return a || b;
}

//TODO: Define a function named 'and' that takes in two input arguments and returns the result of a logical and operation of both inputs.

function and(a, b) {
    return a && b;
}

//TODO: Define a function named 'concat' that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.

function concat(a , b) {
    return a.toString() + b.toString();
}