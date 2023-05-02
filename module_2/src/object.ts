
type Person = {
    company: "Programming Hero",    //when a fixed value is assigned to a type, it is called literal type
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string    // ? is used to indicate optional type 
}


 const user: {
    company: "Programming Hero",    //when a fixed value is assigned to a type, it is called literal type
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string    // ? is used to indicate optional type 
}={
    company: "Programming Hero",
    name: "Shahin",
    age: 35, 
    isMarried: false,
}



const profile:Person = {
    company: "Programming Hero",
    name: "John",
    age: 40, 
    isMarried: true,
    wife: "Marrie"
}
