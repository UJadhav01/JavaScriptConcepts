/**Factorial of n is the product of all positive descending integers. Factorial of n is denoted by n!. For example:

4! = 4*3*2*1 = 24  
5! = 5*4*3*2*1 = 120  
Here, 4! is pronounced as "4 factorial", it is also called "4 bang" or "4 shriek". */

//WAP for find out factorial of given number
var fact=1;
var num=7;
for (let index = 1; index <= num; index++) {
 fact=fact*index;    
}
console.log("Factorial of 7 using loop = ",fact);

//using function
var result;

function factorial(number){
fact=1;
for (let index = 1; index <=number; index++) {
fact=fact*index;    
}
return fact;
}
fact=factorial(5);
console.log("factorial of 5 using function =",fact);
