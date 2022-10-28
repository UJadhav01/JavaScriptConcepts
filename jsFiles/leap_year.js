/**Leap years are those years with 366 days instead of 365. A leap year must satisfy any one of the following two constraints:

It should be divisible by 400
It should be divisible by 4 and not by 100
or 1. Take integer variable year
2. Assign a value to the variable
3. Check if the year is divisible by 4 but not 100, DISPLAY "leap year"
4. Check if the year is divisible by 400, DISPLAY "leap year"
5. Otherwise, DISPLAY "not leap year" */

//function expression for checking year is leap year or not
let check_leap_year=function(leap_year){
if(leap_year%4===0 && leap_year!==null){
    console.log(`${leap_year} is a leap year`);
}else if(leap_year%400===0 && leap_year!==null){
    console.log(`${leap_year} is a leap year`);
}
else if(leap_year%100!==0){
    console.log(`${leap_year} is not a leap year`);
}
else{
    console.log(`${leap_year} is not a leap year`);
}
}
check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1945);
check_leap_year(null);
check_leap_year("Twenty Tewnty");
check_leap_year(undefined);
check_leap_year(NaN);
check_leap_year(1950);

// var isLeapYear=function(number){
// if(number%4==0 || number%400==0 && number%100!=0){
//     console.log(`\nThe year ${number} is leap year`);
// }else{
//     console.log(`\nThe year ${number} is not leap year`);
// }
// }
// isLeapYear(2000);
// isLeapYear(2005);
// isLeapYear(2006);
// console.log(`---------------------------------------------`);
// //normal function and using ternary operator for checking year is leap year or not
// function isLeapYear1(num){
//     var result= (num%4==0 || num%400==0 && num%100!=0)
//     ?`\nthe year ${num} is leap year`
//     :`\nthe year ${num} is not leap year`
// console.log(result);
// }
// isLeapYear1(2004);
// isLeapYear1(2003);
// isLeapYear1(2008);