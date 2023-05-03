
// ternary operator

const age:number = 22;

const isAdult = age >=18 ? 'Yes' : 'No'

// Nullish Coeslancing Operator: Set value depending on null or undefined type
//Works only for Null and Undefined, doesn't work on other falsey value
// ?? Nullish Coeslancing operator


const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? 'Guest';