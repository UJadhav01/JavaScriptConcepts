var myResult = 0/0;
console.log(myResult);
console.log(typeof myResult);

var myName = "TEST";
var myAge = "31";
console.log(typeof myName);
console.log(typeof myAge);

var myAgeInNumber = +myAge; 
console.log(myAgeInNumber, typeof myAgeInNumber);

var myNameString =  +myName
console.log(myNameString, typeof myNameString);
console.log("---------------------you can write also it as follows------------------------------");
var firstName="Name";
var myNameString = Number(firstName);
console.log(myNameString, typeof myNameString);
var firstNameage=7;
var myNameString = String(firstNameage);
console.log(myNameString, typeof myNameString);
console.log("---------------------Implicit conversion------------------------------");
console.log("4"-true); // 4-1

var operand2 = 200;
console.log(operand2, typeof operand2);
var operand2Str =  operand2.toString();
console.log(operand2Str, typeof operand2Str);

var operand1 = 100;
var operand2 = 200;
console.log(operand1 + operand2);

var operand1 = "100";
var operand2 = "200";
console.log(operand1 + operand2);
