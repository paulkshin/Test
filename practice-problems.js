// PRACTICE PROBLEMS

// Create a function that takes two numbers as arguments and return their sum.

function sum(a, b) {
  return a + b;
}

sum(5, 6);

// Create a function that takes a string and returns it as an integer.

function strIntoInt (str) {
    console.log(parseInt(str));
    return parseInt(str);
}

strIntoInt("35");

// Write a function that takes an integer minutes and converts it to seconds.

//minutes can be 30, 60, 90, 120, 300
function convert(minutes) {
    console.log(minutes * 60);
    return minutes * 60;
}

convert(40);

// Create a function that takes an array and returns the first element.

function getFirstValue(arr) {
	return arr[0];
}

// Write a function that takes the base and height of a triangle and return its area.

function area(base, height) {
    return (base * height) / 2;
}

// Create a function that returns true when num1 is equal to num2; otherwise return false.

function sameNum(num1, num2) {
    if (num1 === num2) {
        return true;
    }
    else {
        return false;
    }
}