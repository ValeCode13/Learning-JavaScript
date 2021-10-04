// Functions - one of the fundamental building blocks in JavaScript
// - set of statments that performs a task or calculates a value

// { } - represents the body of function. You put all the statement here and define all the logic.

// Goal: Display a message to console:
function greet () {
    console.log('Hello JavaScript');
}
greet();

// Functions can have inputs.
// You can add variables b/w (). Refer to this as 'Parameter'
// And the 'name' parameter is only maeningful inside this function
// Now when calling the greet function you have to pass a value inside the () - greet ('Mike')

// Goal: Display Name of the Person
function greet (name) {  
    console.log ('Hello ' + name)
}
greet('Mike'); 
// (name) is the parameter of greet function
// 'Mike' is an argument to the greet function
// Argument - is the actual value that we supply for the parameter

// You can use this function with different input/argument:
function greet (name) { 
    console.log ('Hello ' + name)
}
greet('Mike'); 
greet ('James');

// Functions can have multiple parameters:
function greet (name, lastName) { 
    console.log ('Hello ' + name + ' ' + lastName)
}
greet('Mike', 'Dean'); 
greet ('James', 'Cruz');

// The default value of variables in JS is undefined. - this happens when you don't supply a value

