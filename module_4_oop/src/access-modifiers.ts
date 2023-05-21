// Access modifiers are keywords that can be used to control the visibility of fields, methods, and constructors in a class. The four access modifiers in Java are public, protected, default, and private.


class BankAccount{
    id:number;
    name:string;
    private _balance:number;

    constructor(id:number, name:string, balance:number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance(){
        console.log(`My Current Balance is ${this._balance}`);
    }
    addDeposit(amount:number){
        this._balance = this._balance + amount;
    }
}

export {};