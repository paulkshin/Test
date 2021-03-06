// In this challenge, you must verify the equality of two different given parameters: a and b.

// Both the value and the type of parameters need to be tested in order to have a matching equality. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

// // Implement a function that returns true if the parameters are equal, and false if they are different.

function checkEquality(a, b) {
    if (a === b) {
          return true;
      }
      else {
          return false;
      }
  }

//   You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. 
// Create variables a and b from the given array using the ES6 destructuring assignment syntax (check the Resources tab for more examples), where a === 1 and b === 2.

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a);
console.log(b);

// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(n) {
	if (n % 5 === 0) {
		return true;
	}
	else {
		return false;
	}
}

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
	if (str1.length === str2.length) {
		return true;
	}
	else {
		return false;
	}
}
