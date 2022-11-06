console.log(`Assignment C - for reduce( ) method`);
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given array = `,array_numbers);
console.log(`Step-1 : sum of all numbers`);
let sumOfElements=array_numbers.reduce((currentValue,currentTotal)=>{
    return currentValue+currentTotal;
});
console.log(`Sum of elements = `,sumOfElements);
console.log(`-----------------------------------------------------------------`);
console.log(`Step-2 : sum of all even numbers`) // Hint → filter first then use reduce( ) 
let sum=array_numbers.reduce((currentTotal,value,index)=>{
    if(array_numbers[index]%2==0){
        currentTotal=currentTotal+value;
    }
    return currentTotal;
});
console.log(`Sum of all even numbers = ${sum}`);