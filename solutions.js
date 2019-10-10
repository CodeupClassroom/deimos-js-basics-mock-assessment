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

//@ Exactly Equal to true
const isTrue = input => input === true;

//@ is equal to false is both type and value
const isFalse = input => input === false;

//@ returns the boolean opposite of input
const not = input => !input;

//@ return input +1
const addOne = input => Number(input) + 1;

//@ if the input is even
const isEven = input => input === false ? false : Number(input) % 2 === 0

//@ equal in type and value
const isIdentical = (a,b) => a === b;

//@ equal only in value NOT type
const isEqual = (a,b) => a == b ;

//@ a or b
const or = (a,b) => a || b;

//@ returns the result of &&
const and = (a,b) => a && b;

//@ concat if numbers or strings
const concat = (a,b) => a.toString() + b.toString();


