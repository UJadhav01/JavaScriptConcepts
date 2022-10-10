console.log("\n Function expression for finding square of given number:");
//function expression for finding square of given number
var sqResult=function(num){                         //function expression also called unkown function or function without name
    console.log("\n Square of number ",num,":",(num*num));  // for display result on screen
}
sqResult(2);        // function calling
sqResult(3);        // function calling
sqResult(4);        // function calling
console.log("------------------------------------------------------------------");

//for display or check type of function in java script
console.log("Check type of function:");
console.log("\nType of function sqResult:",typeof(sqResult));   //for checking function type
console.log("------------------------------------------------------------------");
//function expression for calculating area of triangle
console.log("Function expression for finding area of triangle:");

var triangleArea=function(base,height){
    var area=1/2*(base*height);     // formula for calculating area of triangle
    console.log("\nArea of triangle with base=45 and height=34 is:",area);
}
triangleArea(45,34);
console.log("------------------------------------------------------------------");

//function expression for calculating area of rectangle land
console.log("Function expression for finding area of rectangle:");

var rectangleArea=function(length,width){
    var area=(length*width);     // formula for calculating area of triangle
    console.log("\nArea of rectangle land with length=499 and width=917 is:",area);
}
rectangleArea(499,917);
console.log("------------------------------------------------------------------");
console.log("Example of function expression for swapping a given value:");
// function for swapping given numbers or string
function swap_values(firstName,secondName){
console.log("\n Values before swapping:","firstName=",firstName,"\tsecondName=",secondName);
var tempName=firstName;
firstName=secondName;
secondName=tempName;
console.log("\n Values after swapping:","firstName=",firstName,"\tsecondName=",secondName);
}
swap_values('Virat','Anushka');
console.log("\n same function expression with different values:");
swap_values(1000,2000);
console.log("------------------------------------------------------------------",);
//function expression for performing operations on given string
var stringop="JavaScript the most popular language";
console.log("\nGiven String is: ",stringop);
console.log("\nTotal number of characters in given string are:",stringop.length);
console.log("\nIndex of character S:",stringop.indexOf('S'));
console.log("\nIndex of string lang:",stringop.indexOf("lang"));
console.log("\nLast character in given string is:",stringop.charAt(stringop.length-1));
console.log("\n3rd last character in given string is:",stringop.charAt(stringop.length-3),"\n");
