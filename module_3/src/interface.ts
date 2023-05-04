//Interface should be only used for object types  

interface IUser{
    name: string,
    age: number
}

interface extendedUser extends IUser{
    role: string
}

// Declaring function type with TYpe Alias vs Interface 
type addNumbersType = (num1:number, num2:number) => number;

interface IAddNumbers {
    (num1:number, num2:number):number;
}

type rollNumbersType = number[];

interface IRollNumbers {
    [index:number]: number
}

const rollNumbers:rollNumbersType = [10,20,50]
const rollNumbers2:IRollNumbers = [10,20,50];