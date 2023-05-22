//interface     

interface IVehicle {
    startEngine():void;
    stopEngine():void;
    move():void;
}

class Vehicle implements IVehicle{
    startEngine(): void {
        console.log("I am starting engine...");
    }
    stopEngine(): void {
        console.log("I am stopping Engine");
    }
    move(): void {
        console.log("I am moving Engine");
    }
    test(){
        console.log('I am for testing purpose');
    }
}

const v1 = new Vehicle();
//abstract class

abstract class Vehicle2{
   abstract startEngine(): void 
   abstract stopEngine(): void 
    move(): void {
        console.log("I am moving Engine");
    }
    test(){
        console.log('I am for testing purpose');
    }
}

class Car extends Vehicle2{
    startEngine(): void {
        console.log("I am starting engine...");
    }
    stopEngine(): void {
        console.log("I am stopping engine..."); 
    }
}

