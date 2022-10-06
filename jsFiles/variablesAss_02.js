console.log("\nSwapping of two variables:");
var sweety="Sweety";
var cutie="Cutie";
console.log("\nValues before swapping:\t"+"my_friend_name="+sweety+"\tyour_friend_name="+cutie+"\n");
var temporary_name=sweety;
sweety=cutie;
cutie=temporary_name;
console.log("Values after swapping:\t"+"my_friend_name="+sweety+"\tyour_friend_name="+cutie+"\n");
console.log("----------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("\nSwapping of three variables:\n");

var num1=100,num2=200,num3=300; //variable declaration and initialization
console.log("Values before swapping:\t num1="+num1+"\tnum2="+num2+"\tnum3="+num3+"\n");
var temp_num=num1;
num1=num2;
num2=num3;
num3=temp_num;
console.log("Values after swapping:\t num1="+num1+"\tnum2="+num2+"\tnum3="+num3+"\n");
