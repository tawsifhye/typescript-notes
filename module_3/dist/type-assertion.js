"use strict";
// Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own. 
let var_test;
var_test = 'test_me';
var_test.toUpperCase();
var_test = 20;
var_test.toFixed(3);
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return param;
    }
}
const kgToGramResult = kgToGram(20);
const kgToGramResult2 = kgToGram('20');
try {
}
catch (err) {
    console.log(err.message);
}
