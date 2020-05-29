// BEJLWKFJLKJFLKWEJFLF

// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function divideEvenly(a, b) {
    if (Number.isInteger(a / b)) {
        return true;
    }
    else {
        return false;
    }
}

// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".

const helloName = name => "Hello " + name + "!";