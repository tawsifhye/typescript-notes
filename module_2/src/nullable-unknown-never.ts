//when  there is possibility to pass null as argument, the function parameter should be typed null

//when the type of argument is unknown, the parameter is set to unknown.

//when a function will never ever return anything, the return type should be never

const searchName = (value: string|null)=>{
    if(value===null){
        console.log("There's Nothing to Search");
    }
    else{
     console.log("Searching");   
    }
}

// searchName('tawsif');
// searchName(null);

const getMyCarSpeed=(speed:unknown)=>{
    if(typeof speed === 'number'){
        const convertedSpeed =(speed*1000)/3600;
        console.log(convertedSpeed);
    }
    else if(typeof speed === 'string'){
        const [value, unit] = speed.split(" ");
        const convertedSpeed =(parseFloat(value)*1000)/3600;
        console.log(convertedSpeed );
    }
    else{
        console.log("There is wrong type");
    }
}

getMyCarSpeed(10);
getMyCarSpeed('100 kmh^-1');  

const throwError = (message:string):never=> {throw new Error(message)};

// throwError('An error occurred');