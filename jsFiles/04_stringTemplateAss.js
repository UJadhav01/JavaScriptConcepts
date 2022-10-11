// string template assignment
// function for declare and display data on console
console.log("Assignment 01:");

function stringTemplateAssignment(){
    console.log(`\nMy dream company is "TCS"`);
    console.log(`------------------------------------------------------------------------`);
    var hobby1='Internet Surfing',hobby2='Cooking',hobby3='Gardening';
    console.log(`\nMy hobbies are:`);
    console.log(`\n1 : "${hobby1}"`);
    console.log(`\n2 : "${hobby2}"`);
    console.log(`\n3 : "${hobby3}"`);
    var concatHobbies=hobby1+" , "+hobby2+" , "+hobby3;
    console.log(`\nMy hobbies are : ${concatHobbies}\n`);
}
stringTemplateAssignment();
console.log(`------------------------------------------------------------------------------------`);
console.log("Assignment 02:");
//function expression for string methods
var stringHandsOn=function(){
    str="  Hey you are doing good, keep it up   ";
console.log(`\nstep-1 : Given string is = "${str}"`);
console.log(`\nstep-2 : Length of string str is = ${str.length}`);
console.log(`------------------------------------------------------------------------`);

var trimStr=str.trim();
console.log(`\nString after remove leading and trailing extra spaces = "${trimStr}"`);

var trimStrLength=(str.length)-(str.trim().length);
console.log(`\nstep-3 & 4 : Total number of removed extra spaces in step 3 = ${trimStrLength}`);
console.log(`\n\t Length of string after trim is = ${trimStr.length}`);

console.log(`------------------------------------------------------------------------`);

var firstChar=(str.trim()).charAt(0);
var lastChar=(str.trim()).charAt(trimStr.length-1);
console.log(`\nstep-5 : First character in string after trim is = ${firstChar}`,`\tand last character is = ${lastChar}`);

var totalStrAfterTrim=trimStr.split(" ").length;
console.log(`\nstep-6 : Count of total words available in the string after step 3 = ${totalStrAfterTrim}`);
console.log(`\nstep-7 : Index of word good = ${trimStr.indexOf("good")}`);

console.log(`\nstep-8 : Substring starting from 22 using substring() = ${trimStr.substring(22)} and using slice = ${trimStr.slice(22)}`);

console.log(`\nstep-9 : Is string end with up = ${trimStr.endsWith("up")}`);
console.log(`\nstep-10 : Is string start with Hey = ${trimStr.startsWith("Hey")}\n`);

}
stringHandsOn();