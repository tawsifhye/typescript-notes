type Volume ={
    item:string;
    height:number;
    width:number;
    depth:number;
}


type Area<T>= {
    // [key in keyof Volume ]: Volume[key]
   readonly [key in keyof T ]: T[key];
}


const item1:Area<Volume> = {
    item: 'Tank',
    height: 20,
    width: 30,
    depth:10
}

