//keyof guard

function add(param1:string|number, param2:string|number){
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1 + param2;
    }
    else{
        return param1.toString() + param2.toString();
    }
}

add(1,2);
add('1','2');

// in guard

type NormalUserType={
    name:string;
}

type AdminUserType={
    name: string;
    role: 'admin';
}


function getUser(user:NormalUserType | AdminUserType):string{ 
    if('role'in user){
        return `I am an Admin. Role: ${user.role}`
    }
    else return `I am a normal user`
}

const normalUser1:NormalUserType = {
    name: 'John'
}

const adminUser1:AdminUserType = {
    name:'Tony',
    role: 'admin'
}


// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));

// instanceof guard

class AnimalClass{
    name:string;
    species: string;

    constructor(name:string, species:string){
        this.name = name;
        this.species = species;
    }

    makeSound(){
        console.log('I am making sound');
    }
}

class Dog extends AnimalClass{
    constructor(name:string, species:string){
        super(name, species)
    }
    makeBark(){
        console.log('I am barking');
    }
}
class Cat extends AnimalClass{
    constructor(name:string, species:string){
        super(name, species)
    }
    makeMeaw(){
        console.log('I am Meawing');
    }
}

function isDog(animal:AnimalClass):animal is Dog{
    return animal instanceof Dog;
}

function isCat(animal:AnimalClass):animal is Cat{
    return animal instanceof Cat
}

function getAnimal(animal:AnimalClass){
  isDog(animal)? animal.makeBark() : isCat(animal) ? animal.makeMeaw() : animal.makeSound();     
}


const animal1 = new Dog('Hundu', 'Dog');
const animal2 = new Cat('Persian', 'Cat');

getAnimal(animal1);
getAnimal(animal2);