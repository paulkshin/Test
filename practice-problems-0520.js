// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
// squared(5) ➞ 25
// squared(9) ➞ 81
// squared(100) ➞ 10000

function squared(b) {
	return b*b;
}

// Create a function that takes the number of wins, 
// draws and losses and calculates the number of points a football team has obtained so far. 
// A win receives 3 points, a draw 1 point and a loss 0 points.

function points(wins, draws, losses) {
    return (wins * 3) + (draws * 1) + (losses * 0);
}

// Given two numbers, return true if the sum of both numbers is less than 100. 
// Otherwise return false.

function sum(a, b) {
    if ((a + b) < 100) {
        return true;
    }
    else {
        return false;
    }
}
