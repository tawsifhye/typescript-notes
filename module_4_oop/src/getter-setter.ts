class BankAccount{
    id:number;
    name:string;
    private _balance:number;

    constructor(id:number, name:string, balance:number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    get balance():number{
        return this._balance;
    }
    set deposit(amount:number){
        this._balance = this._balance+amount;
    }
}


const myAcc = new BankAccount(94,'Tawsif', 9000);

myAcc.deposit =3000
console.log(myAcc.balance);