//arrow function assignment
console.log(`Assignment 01 : Arrow function`);
let displayMessage =  () => {
    console.log(`Step-1 :\n"Good Evening , Today is Friday" \n`);
}
displayMessage();
console.log(`-------------------------------------------------------------------------------------------------------------------`);

console.log(`Step-2 :`);

let multiplication = function(num1, num2,num3=3) {
    console.log(`Multiplication of (${num1} * ${num2} * ${num3}) = ${num1*num2*num3}`);
}
multiplication(5,5,2);
console.log(`\nHere 3 is default value for 3rd argument of function`)
multiplication(10,4);
console.log(`--------------------------------------------------------------------------------------------------------------------------------`);
console.log(`\nStep-3 : `);
let addition = (num1, num2,num3,num4,num5) =>{
    return num1 + num2+num3+num4+num5; 
}  
 
console.log(`Addition of numbers (100 + 100 + 200 + 349 + 756 ) = `,addition(100,100, 200,349,756));
console.log(`Concatenation of string using + ("I am" , "learning" , "ES6" , 'features' , "in depth" ) = `,addition("I am" , " learning" , " ES6" , ' features' , " in depth"));

 