
console.log(`Assignment B : using forEach() with arrow function and callback`);
const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Step-1 : Array elements with it's index using forEach() with arrow function`);
array_numbers.forEach((element,index)=>{
   console.log(`element = ${element} index = ${index}`);
});
console.log(`---------------------------------------------------------------------------------------------------------`);
console.log(`Step-2 : Positive numbers in given array array_numbers using forEach() with arrow function`);
let result='';
array_numbers.forEach(function(element,index){ //callback
    if(element>0){
        result+=array_numbers[index]+" ";
    }
});
console.log(`${result}`);

console.log(`-----------------------------------------------------------------------------------------------------`);
console.log(`Step-3 : Negative numbers in given array array_numbers using forEach() with arrow function`);
let result1='';
array_numbers.forEach((element,index)=>{
    if(element%2!==0 && element<0){
        result1+=array_numbers[index]+" ";
    }
});
console.log(`${result1}`);

console.log(`--------------------------------------------------------------------------------------------------------------`);
console.log(`Step-4 : Even numbers in given array array_numbers using forEach() with arrow function`);
let result2='';
array_numbers.forEach((element,index)=>{
    if(element%2==0 && element>0){
        result2+=array_numbers[index]+" ";
    }
});
console.log(`${result2}`);

console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log(`Step-5 : sum of all elements from array array_numbers using forEach() with arrow function`);
let addition=0;
array_numbers.forEach((element)=>{
   addition+=element;
   return addition;
});
console.log(`Some of elements = `,addition);
console.log(`---------------------------------------------------------------------------------------------------------------------`);

console.log(`Step-6 : Even positioned array values from array array_numbers using forEach() with arrow function`);
let result3='';
array_numbers.forEach((element,index)=>{
if(index%2==0){
result3+=array_numbers[index]+" ";
}
});
console.log(`${result3}`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------`);
let result4='';
console.log(`Step-7 : Odd positioned array values and if it is negative from array array_numbers using forEach() with arrow function`);
array_numbers.forEach((element,index)=>{
if(index%2!==0 && element<0){
    result4+=array_numbers[index]+" ";
}
});
console.log(`${result4}`);

