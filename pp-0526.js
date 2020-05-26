// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
    return ++num;
}

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function animals(chickens, cows, pigs) {
    return (chickens * 2) + (cows * 4) + (pigs * 4);
}

// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
    const str1 = firstName;
    const str2 = lastName;
    return str2.concat(", ", str1);
}