class Person{
    takeNap():void{
        console.log('I am sleeping 8hrs per day');
    }
}

class Student extends Person{
    takeNap(): void {
        console.log('I am sleeping 10hrs per day');
    }
}

class Developer extends Person{
    takeNap(): void {
        console.log('I am sleeping 5hrs per day');
    }
}


function getNap(param:Person){
param.takeNap();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();
// getNap(person1);
// getNap(person2);
// getNap(person3);


class Shape{
    getArea():number{
        return 0;
    }
}

class Circle extends Shape{
    radius:number;
    constructor(radius:number){
        super();
        this.radius = radius;
    }
    getArea(): number {
        return (Math.PI * this.radius * this.radius);
    }
}

class Rectangle extends Shape{
    width:number;
    height:number;

    constructor(width:number, height:number){
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

function getAreaOfShape(param:Shape){
    console.log(param.getArea());
}


getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(20, 30));