type PersonType = {
    name:string;
    age:number;
    address:string;
}

type test_type_union =  'name' | 'age' | 'number'; //manually created with union

type newTypeUsingKeyOf = keyof PersonType; 

const keyof_var_test1:test_type_union= "name";
const keyof_var_test2:newTypeUsingKeyOf= "name";

function getProperty<X,Y extends keyof X>(obj:X, key:Y){
   return obj[key] ;
}


const property_08 = getProperty({name: "tawsif", age:25}, "age")
  