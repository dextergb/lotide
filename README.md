# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dextergb/lotide`

**Require it:**

`const _ = require('@dextergb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: will take in two arrays and console.log an appropriate message to the console.
* `assertEqual`: compare the two values it takes in and print out a message telling us if they match or not.
* `assertObjectsEqual`: will take in two objects and console.log an appropriate message to the console.
* `countLetters`: take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly`: take in a collection of items and return counts for a specific subset of those items.
* `eqArrays`: a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. 
* `eqObjects`: will take in two objects and returns true or false, based on a perfect match.
* `findKey`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `head`: returns the first item in the array.
* `letterPositions`: will return all the indices (zero-based positions) in the string where each character is found.
* `map`: will return a new array based on the results of the callback function.
* `middle`: will take in an array and return the middle-most element(s) of the given array.
* `tail`: returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil`: a function that will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without`: will return a subset of a given array, removing unwanted elements.