//Arrow Function
const createArray = <T>(param:T):T[]=>{
    return [param];
}
const createArray2 = <X,Y>(param1:X, param2:Y):[X,Y]=>{
    return [param1, param2];
}


createArray<string>('Bangladesh')
createArray<number>(20)
createArray<{name:string}>({name:'Bangladesh'})

createArray2<string, number>('Bangladesh', 1971)

//Spread Operator

const createSpreadObject = <T>(myInfo:T) =>{
    const companyName = "Staff Asia";
    return ({
        ...myInfo,
        companyName
    })
}

const myInfo = {
    name: "Tawsif",
    salary: 2000,
    city: 'Sylhet'
}

const res = createSpreadObject(myInfo)
console.log(res);
