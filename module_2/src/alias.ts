
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

// Type Aliases allow defining types with a custom name (an Alias)

type Employee = {
    company: string,   
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string    // ? is used to indicate optional type 
}


const employee: Employee ={
    company: "Staff Asia",
    name: "Tawsif",
    age: 27,
    isMarried: false
}

type OperationType = (x:number, y:number)=>number

const calculate = (number1:number, number2:number, operation:OperationType)=>{
    return operation(number1, number2)
}


calculate(10,20,(x,y)=> x+y);
calculate(10,20,(x,y)=> x*y);

