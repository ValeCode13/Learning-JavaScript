// Two Category of types:

//  1.Primative/Value types
// - Strings
// - Number
// - Boolean
// - undefined
// - null

// 2. Reference Type
// - Object
// - Array
// - Function

// Object in JS is like an object in real life 
// Like a Person - it has name, age and address. - These are the propertie of a person. 


let person = { 
    name: 'Bryant',
    age: 13
};
// Dot Notation
person.name = 'Marco'

// Bracket Notation
let selection = 'name';
person ['name'] = 'James';

console.log(person);
// {} - represents object literal
// keys (inside the {}) - are the properties of this object ( name and age ).
// Dot Notation is cleaner and easier.