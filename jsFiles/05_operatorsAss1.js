console.log(`\nstep-1 : Function expression for check greatest number given number is even or odd:`);

var greatestNumber=function(num1,num2){
var result= (num1>num2)?"number1":"number2"; // ternary operator for checking greatest number
console.log(`\nGreatest number = ${result}`);
}
greatestNumber(10,-10); // function call
greatestNumber(800,899);
console.log(`-------------------------------------------------------------------------------------------------------------------------`);

console.log(`\nstep-2 : Function expression for check given number is even or odd:`);
var evenOrOddNumber=function(num1){
    var result= (num1%2)===0?true:false;    //ternary operator for checking even or odd number
    console.log(`\nThe given number is = ${result}`);
    }
    evenOrOddNumber(29);    //function call
    evenOrOddNumber(44);
    evenOrOddNumber(0);
    evenOrOddNumber(101);


console.log(`-------------------------------------------------------------------------------------------------------------------------`);
console.log(`\nstep-3 : Function expression for check length of given string and check it is even or odd basis on string length:`);
var evenOrOddWord=function(str){
    var strLength=str.length;
    var result=(strLength%2)===0?"Even":"Odd";
    console.log(`\nThe given string is = ${result}`);
}
evenOrOddWord("JavaScript");
evenOrOddWord("developer");
evenOrOddWord("Google");
console.log(`\n`);