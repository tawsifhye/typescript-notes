// Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own. 


let var_test:any;

var_test = 'test_me';

(var_test as string).toUpperCase();

var_test = 20;
<string>var_test .toFixed(3);
function kgToGram(param: string|number): string|number|undefined{
    if(typeof param === 'string'){
        const value =  parseFloat(param) * 1000;
        return `The converted result is: ${value} gram`;
    }
    if(typeof param === 'number'){
        const value =  param * 1000;
        return param;
    }
}


const kgToGramResult = kgToGram(20) as number;
const kgToGramResult2 = <string> kgToGram('20') ;
// console.log(kgToGramResult);


type CustomErrorType ={
    message: string
}

try{

}catch(err){
console.log((err as CustomErrorType).message);
}