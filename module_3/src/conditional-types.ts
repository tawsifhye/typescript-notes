// a type is dependent on another type 

type a1 = null;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : number;

//nested conditional type 
type d = a1 extends null ? null :a3 extends number ? number : a4 extends null? null : never;

type StudentCon = {
    id:number;
    name: string;
}

type CheckStudent<T,K> =  K extends keyof T? true : false;

type CheckProp = CheckStudent<StudentCon, 'id'>;

type MyFriendsCon = 'Monika' | 'Rachel' | 'Pheobe';


type RemoveFriend<T, K> = T extends K ? never : T;

type CurrentFriendsCon = RemoveFriend<MyFriendsCon, 'Monika'>

