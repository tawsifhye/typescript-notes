"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
const addArrow = (num1, num2) => num1 + num2;
const num = [1, 3, 6, 9];
const newNum = num.map((ele) => ele * ele);
const person = {
    name: "Tawsif",
    balance: 10,
    addBalance(money) {
        return this.balance + money;
    },
    showBalance() {
        console.log(this.name, 'current balance', this.balance);
    }
};
// defalt parameater
// use default value on the last parameter to avoid error 
function add_1(num1, num2 = 10) {
    return num1 + num2;
}
add_1(2, 3);
//spread operator
const myFriends = ['chandler', 'joey', 'ross'];
const newFriends = ['monica', 'rachel', 'pheobe'];
myFriends.push(...newFriends);
//rest operator
//while using an array as a function parameter.
const greetFriends = (...friends) => console.log();
//name alias 
const myBestFriend = {
    fullName: "Abul Bashar",
    age: 24
};
const { fullName: myName } = myBestFriend;
console.log(myName);
