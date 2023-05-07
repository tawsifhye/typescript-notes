
 const conObject1 = <T extends{name:string, age:number}>(myInfo:T) =>{
    const companyName = "Staff Asia";
    return ({
        ...myInfo,
        companyName
    })
}


const myInfo_t = {
    name: "Tawsif",
    salary: 2000,
    city: 'Sylhet',
    age: 25
}


const res2= conObject1(myInfo_t)
console.log(res2);