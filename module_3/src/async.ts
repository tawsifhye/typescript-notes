
const makePromise = ()=>{
    return new Promise<string>((resolve,reject)=>{
        const data:string = "Data is fetched";
        if(data){
            resolve(data);
        }
        else{
            reject("Failed to fetch data");
        }
    })
}

const promiseRes = async():Promise<string>=>{
    const data = await makePromise();
    return data;
}

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchTodo = async():Promise<ITodo>=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   return await response.json();
}

const  getTodoData = async():Promise<void>=>{
    const result = await fetchTodo();
    console.log(result);
}


getTodoData();