const arrayOfNumbers=[2,3,4,5,6,1];
const newArrayOfNumbers=arrayOfNumbers.map((value)=>{
    return value+5;
});
console.log(`modified array = `,newArrayOfNumbers);

console.log(`original array = `,arrayOfNumbers);