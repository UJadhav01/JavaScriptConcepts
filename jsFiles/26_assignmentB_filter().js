console.log(`Assignment B - for filter( ) method`);

const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given array = `,array_numbers);
console.log(`Step-1 : all the numbers which are greater than 50`);
let result='';
array_numbers.filter((value,index)=>{
    if(value>50){
result+=array_numbers[index]+" ";
    }
});
console.log(result);

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-2 : all the even number`);
let result1='';
array_numbers.filter((value,index)=>{
    if(value%2==0){
result1+=array_numbers[index]+" ";
    }
});
console.log(result1);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-3 : all the odd numbers`);
let result2='';
array_numbers.filter((value,index)=>{
    if(value%2!==0){
result2+=array_numbers[index]+" ";
    }
});
console.log(result2);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-4 :  all the numbers which are multiple of 5`);
let result3='';
array_numbers.filter((value,index)=>{
    if(value%5==0){
result3+=array_numbers[index]+" ";
    }
});
console.log(result3);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-5 : all numbers which are between 20 and 50`);
let result4='';
array_numbers.filter((value,index)=>{
    if(value>20 && value<50){
result4+=array_numbers[index]+" ";
    }
});
console.log(result4);