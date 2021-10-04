// Equality Operator:

// Strict Equality Operator - ensure that it has a same 'Type' and 'Value'
//
// console.log (1 === 1); // true
// console.log ('1' === 1); // false

// Lose Equality Operator - doesn't care about the type matching
//  - if the type don't match it will convert the type you have with right side to matcvh what we have on left side.
// This opertor will look on the value left side which is string
// Then it will automatically convert what you have on the right side to a string that's why it becomes true.
// console.log ('1' == '1');
console.log ('1' == 1); // true

console.log (1 == 1); // true