// Functions - is a set of statements that either performs a task or Calculate and Returns a value
// We can use template literal to clean up concatenation.

//Performing a Task:
function greet (name, lastName) { 
    console.log ('Hello ' + name + ' ' + lastName)
}
greet('Mike', 'Dean'); 
greet ('James', 'Cruz');

// Calculating a Value:
// return - this keyword will return the value whoever calling the functions
function square (number) {
   return number * number;
} 
// We can use this value to initialize a variable
let number = square (2);
console.log(number); // 4

// or just simply call the function and add value in it

function square (number) {
    return number * number;
 } 
 console.log(square(2)); // 4

 // console.log - is a function call because of the ().
//  - You can pass a string: console.log('Hello JavaScript);
//  - You can also call another function: console.log (square(2));
