console.log(`Assignment A : map()`);
const array_numbers=[20,11,40,25,23,11,9,31,60,2,19];

console.log(`Given array = `,array_numbers);
//add 10 to each element and log new array on console using map()
console.log(`Step-1 : add 10 to each element and log new array on console using map()`);
let newArray_numbers=array_numbers.map((value)=>{
    return value+10;
});
console.log(`New array after add 10 to each element = `,newArray_numbers);
//square the each array element and log on console
console.log(`Step-2 : square the each array element and log on console`);
let squareTheArrayNumbers=array_numbers.map((value)=>{
    return value*value;
});
console.log(`Square of each array element = `,squareTheArrayNumbers);
//add the index value into its corresponding each array element and log new array on console
console.log(`Step-3 : add the index value into its corresponding each array element and log new array on console`);
let addIndexToEachElement=array_numbers.map((value,index)=>{
    return value+index;
});
console.log(`Square of each array element = `,addIndexToEachElement);