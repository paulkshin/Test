// JULY 3 2020

// Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr) {
  return arr.join("");
}

// Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(num, exp) {
  return Math.pow(num, exp);
}

// Write a function to reverse an array.

function reverse(arr) {
  return arr.reverse();
}

// Create a function that finds the index of a given item.

function search(arr, item) {
  return arr.indexOf(item);
}

// Booleans can also be written as integers, where 1 = True and 0 = False. Make a function that returns the opposite of the boolean given.

function flipBool(b) {
  if (b) {
    return 0;
  }
  return 1;
}

// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(word) {
  if (word.endsWith("n")) {
    return true;
  } else {
    return false;
  }
}

// Create a function that takes an array and a string as arguments and return the index of the string.

function findIndex(arr, str) {
  return arr.indexOf(str);
}

// Create a function to concatenate two integer arrays.

function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

// Create a function that returns the total number of parameters passed in.

function numberArgs(/* fill-in */) {
  return arguments.length;
}
