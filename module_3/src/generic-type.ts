type GenericArray<T> = Array<T>;
type GenericTuple<X,Y> = [X,Y];

const relation:GenericTuple<string, string>=['Bangladesh', 'Sheikh Hasina']

const randomNumbers: Array<number> = [20,50,40,60];
const randomStrings: Array<string> = ['t','a','w'];

type typeObject= {name: string, id: number} 

const arrayOfObjects: Array<{name:string, id:number}> =[
    {
        name:"x",
        id:20
},{
  name:"y",
  id:10  
}
]


const myArr: GenericArray<typeObject> = [
    {
        name:"x",
        id:20
},{
  name:"y",
  id:10  
}
]