// The super keyword refers to superclass (parent) objects. It is used to call superclass methods, and to access the superclass constructor.
class Person {
    constructor(
        public name:string, 
        public age:number, 
        public address:string
        ){}
        makeSleep(hours:number){
            return `This ${this.name} will sleep for ${this.age}`
           } 
}

class Student extends Person{

    constructor(name:string, age:number, address:string,  public id:number){
        super(name,age, address);

    }
}

class Teacher extends Person{
    designation:string

    constructor(name:string, age:number, address: string, designation:string){
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(numbOfClasses:number){
        return `This ${this.name} will take ${numbOfClasses} classes`
    }
}



const teacher1 = new Teacher('Steve', 30, 'UK', 'Lecturer'); 
// console.log(teacher1.address);
const student1 = new Student('John', 25, 'USA', 94); 
console.log(student1.id);