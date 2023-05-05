interface TestInterface<T>{
    name: string,
    id: T
  }
interface TestInterface2<T, U=null>{
    name: string,
    id: T,
    address?: U,
  }
  
  const interfaceObject:TestInterface<number>={
    name: 'Tawsif',
    id:1
  }
  const interfaceObject2:TestInterface2<number>={
    name: 'Tawsif',
    id:1
  }
  const interfaceObject2:TestInterface2<number>={
    name: 'Tawsif',
    id:1
  }