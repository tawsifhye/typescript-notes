
interface Person{
    name:string;
    email:string;
    contactNo:string;
}

//Pick
type Email = Pick<Person, "email"|"contactNo">

//Omit

type Name = Omit<Person, "email"|"contactNo">

// Partial & Required

// To make all the property be optional type
type Optional = Partial<Person>;
type RequiredProps = Required<Person>;


// Record Type 

type myObj = Record<'a'|'b'|'c',string>;

// type myObj ={
//     a:string; 
//     b:string; 
//     c:string; 
// }

// unique indexing signature

// type myObj = {
//     [key: string]:string;
// }

const obj: myObj={
    a: '1',
    b: '2',
    c: '3',
}