// Using bracket notation, we have now reset the item at index 1 from "b", to "not b anymore".

// In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides "b".

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "not b anymore";
// Only change code above this line
console.log(myArray);

// We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
// SETUP:
function mixedNumbers(arr) {
    // Only change code below this line
  
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
  
// ANSWER:
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
  