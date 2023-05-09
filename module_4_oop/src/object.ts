// In class-based, object-oriented programming, a constructor (abbreviation: ctor) is a special type of function called to create an object. It prepares the new object for use, often accepting arguments that the constructor uses to set required member variables.

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