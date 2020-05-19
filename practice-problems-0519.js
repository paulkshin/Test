// MAY 19 2020

// Write a function that converts hours into seconds.

function convertToSeconds(hours) {
    return hours * 3600;
}

// Create a function that evaluates an equation.

function eq(evaluate) {
    return eval(evaluate);
}

// Create a function that takes height and width and finds the perimeter of a rectangle.

function perimeter(height, width) {
    return ((height * 2) + (width * 2));
}

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
// **(side1 + side2) - 1 = maximum range of third edge.

function thirdEdge(side1, side2) {
    return (side1 + side2) - 1;
}

// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

function profitableGamble(prob, prize, pay) {
    if (prob * prize > pay) {
        return true;
    }
    else {
        return false;
    }
}

// Create a function that takes an array of numbers and returns the smallest number in the set.

function findSmallestNum(arr) {
    return Math.min(...arr);
}

// Create a function that counts the number of syllables a word has. 
// Each syllable is separated with a dash -.

function numberSyllables(word) {
    return word.split("-").length;
}
