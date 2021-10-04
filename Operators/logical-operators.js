// Logical Operator - this operator makes decision based on multiple conditions.

// Three types of JavaScript Operators:
// 1. Logical AND (&&)
// 2. Logical OR (||)
// 3. Logical NOT ()

// 1. Logical AND (&&)
// Returns True if both operands are True.
console.log(true && true); // true
console.log(false && true); // false


// Application for approving loans, Checking the eligibilty.
// Make sure that the applicant have a high income and good credit score.
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan); // True

// 2. Logical OR (||)
// Returns TRUE if one of the operands is TRUE.
// As long as you have 1 true operand the result will be TRUE.
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan); // true

// 3. NOT (!)
// if the applicant is not eligible for loan, their application will be refuse
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

// if the eligibleForLoan is true, ! operator will convert it to false
let applicationRefused = !eligibleForLoan;

console.log('Eligible', eligibleForLoan);
console.log('Refused', applicationRefused);