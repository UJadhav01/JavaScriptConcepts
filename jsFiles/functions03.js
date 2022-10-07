console.log("\n Example of functions no argument and no return type:");
console.log("--------------------------------------------------------------------------------------------");
var num1=10,num2=5;
console.log("\n Function-1:");
// function for multiplication
function mul(){
console.log("\n Result of multiplication of two numbers num1=10,num2=5 is:",num1*num2);
}
mul();
console.log("\n Function-2:");
// function for subtraction
function sub(){
    console.log("\n Result of subtraction of two numbers num1=10,num2=5 is:",(num1-num2));
    }
    sub();
console.log("---------------------------------------------------------------------------------------------");
console.log("\n Example of function for concatenation:");
//function for concatenation
function concat(firstName,lastName){
    console.log("\nResult of concatenation of two arguments firstName=shiv,lastName=kale is:",("shiv "+"kale"));
}
concat("shiv","kale");
console.log("--------------------------------------------------------------------------------------------");
console.log("\n Example of function for swapping a given value:");
// function for swapping given numbers or string
function swap_values(firstName,secondName){
console.log("\n Values before swapping:","firstName=",firstName,"\tsecondName=",secondName);
var tempName=firstName;
firstName=secondName;
secondName=tempName;
console.log("\n Values after swapping:","firstName=",firstName,"\tsecondName=",secondName);
}
swap_values('Virat','Anushka');
console.log("\n same function with different values:");

swap_values(1000,2000);
console.log("--------------------------------------------------------------------------------------------");
console.log("\n Example of function with multiple parameters:");
//function for add three numbers
function add_three_numbers(num1,num2,num3){
    console.log("\n Addition of three numbers (num1=10.23,num2=600,num3=40) is:",(num1+num2+num3),"\n");
}
// arg for addition of 3 numbers
add_three_numbers(10.23,600,40);
console.log("\n same function with different values:");
//arg for concatenation
add_three_numbers("Hello ","Good ","Morning");
// function sample(){
//     console.log("this is function body");
//     return "body",22;
// }
// var s=sample();
// console.log(s);