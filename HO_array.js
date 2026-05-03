// *** High Order Array Method ---------------------------------------------
//1. map():Creates and return new array by applying a function to each element of the original array.
let arr1 = [1, 2, 3];
let doubled = arr1.map((el) => el * 6);
console.log(doubled);

//2. filter():creates and returns a new arry with elements that pass a specified test condition.
let arr2 = [1, 2, 3, 4];
let even = arr2.filter((el) => el % 2 == 0);
console.log(even);

//3. reduce():reduces an array to a single value by applying a function to each element.
let arr3 = [1, 2, 3, 4, 5];
let sum = arr3.reduce((acc, el) => {//acc(accumulator):prev.
    console.log("acc=", acc, "el=", el);
    return acc + el;});
    console.log(sum);