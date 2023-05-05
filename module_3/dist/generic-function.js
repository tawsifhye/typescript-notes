"use strict";
//Arrow Function
const createArray = (param) => {
    return [param];
};
const createArray2 = (param1, param2) => {
    return [param1, param2];
};
createArray('Bangladesh');
createArray(20);
createArray({ name: 'Bangladesh' });
createArray2('Bangladesh', 1971);
//Spread Operator
const createSpreadObject = (myInfo) => {
    const companyName = "Staff Asia";
    return (Object.assign(Object.assign({}, myInfo), { companyName }));
};
const myInfo = {
    name: "Tawsif",
    salary: 2000,
    city: 'Sylhet'
};
const res = createSpreadObject(myInfo);
console.log(res);
