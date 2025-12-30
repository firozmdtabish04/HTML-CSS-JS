const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2]; // [1, 2, 3, 4]

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }
