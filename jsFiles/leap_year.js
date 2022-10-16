/**Leap years are those years with 366 days instead of 365. A leap year must satisfy any one of the following two constraints:

It should be divisible by 400
It should be divisible by 4 and not by 100
or 1. Take integer variable year
2. Assign a value to the variable
3. Check if the year is divisible by 4 but not 100, DISPLAY "leap year"
4. Check if the year is divisible by 400, DISPLAY "leap year"
5. Otherwise, DISPLAY "not leap year" */

//function expression for checking year is leap year or not
var isLeapYear=function(number){
if(number%4==0 || number%400==0 && number%100!=0){
    console.log(`\nThe year ${number} is leap year`);
}else{
    console.log(`\nThe year ${number} is not leap year`);
}
}
isLeapYear(2000);
isLeapYear(2005);
isLeapYear(2006);
console.log(`---------------------------------------------`);
//normal function and using ternary operator for checking year is leap year or not
function isLeapYear1(num){
    var result= (num%4==0 || num%400==0 && num%100!=0)
    ?`\nthe year ${num} is leap year`
    :`\nthe year ${num} is not leap year`
console.log(result);
}
isLeapYear1(2004);
isLeapYear1(2003);
isLeapYear1(2008);