function add(num1:number, num2:number):number{
    return num1+ num2;
}

add(2, 3);


const addArrow = (num1:number, num2:number):number=> num1 + num2;

const num = [1,3,6,9];

const newNum = num.map((ele:number) => ele*ele );

const person :{
    name: string,
    balance: number
    addBalance(money:number): number,
    showBalance():void,
}={
    name: "Tawsif",
    balance: 10,
    addBalance(money){
        return this.balance+money
    },
    showBalance(){
        console.log(this.name,'current balance', this.balance);
    }
}