const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];

console.log(`\nGiven array array_numbers = `,array_numbers);

//step-1:find the total elements available or length and log on console
console.log(`Step-1 : Total elements available in array array_numbers = `,array_numbers.length);

console.log(`---------------------------------------------------------------------------------------------------`);

//step-2:log the first element and last element in array_numbers and log on console
console.log(`Step-2.a : First element in array array_numbers = `,array_numbers[0]);
console.log(`Step-2.b : Last element in array array_numbers = `,array_numbers[array_numbers.length-1]);

console.log(`---------------------------------------------------------------------------------------------------`);

//step-3:log the third last element using length property and log on console
console.log(`Step-3 : Third last element in array array_numbers = `,array_numbers[array_numbers.length-3]);

console.log(`---------------------------------------------------------------------------------------------------`);

//step-4:find the all even numbers and log on console
let evenResult='';
for (let index = 0; index < array_numbers.length; index++) {
if(array_numbers[index]%2==0){
    evenResult+=array_numbers[index]+" ";
}    
}
console.log(`Step-4 : Even numbers in array array_numbers = `,evenResult);
console.log(`---------------------------------------------------------------------------------------------------`);

//step-5:find the odd numbers and log on console
let oddResult='';
for (let index = 0; index < array_numbers.length; index++) {
if(array_numbers[index]%2!=0){
    oddResult+=array_numbers[index]+" ";
}    
}
console.log(`Step-5 : Even numbers in array array_numbers = `,oddResult);
console.log(`---------------------------------------------------------------------------------------------------`);

//step-6:find the all even positioned elements from array_numbers,for loop
let evenPositionedElement='';
for (let index = 0; index < array_numbers.length; index++) {
if(index%2==0){
    evenPositionedElement+=array_numbers[index]+" ";
}    
}
console.log(`Step-6 : Even positioned elements in array array_numbers = `,evenPositionedElement);
console.log(`---------------------------------------------------------------------------------------------------`);

//step-7:find all odd positioned elements from array_numbers,log on console
let oddPositionedElement='';
for (let index = 0; index < array_numbers.length; index++) {
if(index%2!=0){
    oddPositionedElement+=array_numbers[index]+" ";
}    
}
console.log(`Step-7 : Even positioned elements in array array_numbers = `,oddPositionedElement);
console.log(`---------------------------------------------------------------------------------------------------`);
//step-8:find the sum of all elements from array_numbers,log on console
let sum=0;
for (let index = 0; index < array_numbers.length; index++) {
    sum=sum+array_numbers[index];
    
}
console.log(`Step-8 : Sum of all elements in array array_numbers = `,sum);

console.log(`---------------------------------------------------------------------------------------------------`);

//step-9:find the numbers which are multiple of 5
let multipleOfFive='';
for (let index = 0; index < array_numbers.length; index++) {
    if(array_numbers[index]%5==0){
        multipleOfFive+=array_numbers[index]+" ";
    }   
}
console.log(`Step-9 : Numbers from array array_numbers which are multiple of 5 = `,multipleOfFive);
console.log(`---------------------------------------------------------------------------------------------------`);

//step-10:is numbers 115 available in array_numbers?
console.log(`Step-10 : Is number 115 available in array_numbers = `,array_numbers.includes(115));
console.log(`---------------------------------------------------------------------------------------------------`);

//step-11:is number 23 available in array_numbers?
console.log(`Step-11 : Is number 23 available in array_numbers = `,array_numbers.includes(23));
