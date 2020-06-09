// DEBUGGING

// Add two console.log() statements to check the typeof each of the two variables seven and three in the code.
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line

console.log(typeof seven);
console.log(typeof three);

// one of the most prevalent bugs in coding are syntax or mispelled words. 
Fix the two pair errors in the code.
// before:
let myArray = [1, 2, 3;
    let arraySum = myArray.reduce((previous, current =>  previous + current);
    console.log(`Sum of array values is: ${arraySum}`);
// after
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  (previous + current));
console.log("Sum of array values is: ${arraySum}");


// Fix the string so it either uses different quotes for the href value, or escape the existing ones. 
// Keep the double quote marks around the entire string.

// BEFORE
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);

// AFTER
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);


