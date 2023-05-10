// In class-based, object-oriented programming, a constructor (abbreviation: ctor) is a special type of function called to create an object. It prepares the new object for use, often accepting arguments that the constructor uses to set required member variables.

// npx ts-node-dev --respawn ./src/inheritance.ts

class Animal{
    constructor(
        public name:string, 
        public species:string, 
        public sound:string
        ){}
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);  
    }
}
const dog = new Animal('German Shepard', 'Dog', 'Barking');



class PersonObj {
    name:string;
    age:number;
    address:string;
    constructor(name:string, age:number, address:string){
        this.name =  name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours:number){
            return `This ${this.name} will sleep for ${this.age}`
           } 
}