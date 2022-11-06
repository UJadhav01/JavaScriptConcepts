const arrayOfNumbers=[1,2,3,4,5,6];
let newArrayOfNumbers=arrayOfNumbers.filter((element)=>{
    return element>=4;
});
console.log(newArrayOfNumbers);

console.log(`Addition of all elements from array using reduce() `);
let addition=arrayOfNumbers.reduce((value,runningTotal)=>{
return value+runningTotal;
});
console.log(addition);

// let addition2=arrayOfNumbers.reduce((value,runningTotal)=>{
//     return value+runningTotal;
//     },100);
//     console.log(addition2);