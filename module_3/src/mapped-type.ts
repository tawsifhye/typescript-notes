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

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];
  
    return item[key];
  
  }
  
  
  
  const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
  
  console.log(getArrayItem(users, 0, 'name'))