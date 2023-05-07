"use strict";
const conObject1 = (myInfo) => {
    const companyName = "Staff Asia";
    return (Object.assign(Object.assign({}, myInfo), { companyName }));
};
const myInfo_t = {
    name: "Tawsif",
    salary: 2000,
    city: 'Sylhet',
    age: 25
};
const res2 = conObject1(myInfo_t);
console.log(res2);
