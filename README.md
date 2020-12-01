# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@yourthy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function assertArraysEqual(...)`: (Compares the contents of an array and returns whether they're equal or not)
* `function assertEqual(...)`: (Simple function to compare whether one value is equal to another)
* `function assertObjects(...)`: (Compares the contents of an array and returns whether they're equal or not)
* `function eqArrays(...)`: (Another function to compare the contents of two arrays)
* `function eqObjects(...)`: (Another function to compare the contents of two objects)
* `function countLetters(...)`: (Stores and counts the letters in a string and how many times they appear)
* `function countOnly(...)`: (Takes a list of items and a list of items to count and returns the frequency of the item)
* `function findKey(...)`: (Given an object, the function returns a key, given the value to look for)
* `function head(...)`: (Returns the first element in an array)
* `function letterPositions(...)`: (Given a string, this function returns an object with the letters in the string and what indices each letter is at)
* `function map(...)`: (Given an array of strings, this function will return the first letter of each string)
* `function middle(...)`: (Given an array of integers, this function will return the sorted middle integer)
* `function tail(...)`: (Given an array of strings, this function will remove the last element and return the modified array)
* `function takeUntil(...)`: (Given an array (integers or strings), this function will return the elements of the array up to a stopping condition specified by user)
* `function without(...)`: (A function that will remove an specific element in an array (both given by user))
