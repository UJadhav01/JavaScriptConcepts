var firstName,lastName,email,graduation,passoutYear,city,citizenship,phone,address;//variables declaration
console.log("Form controls used in registration form:");
firstName="Shivanshi";
lastName="Kale";
email="xyz@gmail.com";
graduation="Computer science and engineering";
passoutYear=2017;
city="Pandharpur";
citizenship="India";
phone=5555555555;
address="Pandharpur";

console.log("\nMy name is:\t"+firstName);
console.log("\nMy last name is:\t"+lastName);
console.log("\nMy mail address is:\t"+email);
console.log("\nI have completed my graduation in::\t"+graduation);
console.log("\nMy graduation pass out year is:\t"+passoutYear);
console.log("\nI am from:\t"+city);
console.log("\nMy citizenship is:\t"+citizenship);
console.log("\nMy working mobile number is:\t"+phone);
console.log("\nMy address is:\t"+address);


console.log("----------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("\nSwapping of two variables:");
var my_friend_name="Shiv";
var your_friend_name="Sandeep";
console.log("\nValues before swapping:\t"+"my_friend_name="+my_friend_name+"\tyour_friend_name="+your_friend_name+"\n");
var temporary_name=my_friend_name;
my_friend_name=your_friend_name;
your_friend_name=temporary_name;
console.log("Values after swapping:\t"+"my_friend_name="+my_friend_name+"\tyour_friend_name="+your_friend_name+"\n");
console.log("----------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("\nSwapping of three variables:\n");

var num1=100,num2=200,num3=300; //variable declaration and initialization
console.log("Values before swapping:\t num1="+num1+"\tnum2="+num2+"\tnum3="+num3+"\n");
var temp_num=num1;
num1=num2;
num2=num3;
num3=temp_num;
console.log("Values after swapping:\t num1="+num1+"\tnum2="+num2+"\tnum3="+num3+"\n");
