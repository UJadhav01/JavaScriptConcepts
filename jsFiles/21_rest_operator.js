'use strict'
//rest operator we can use ... for stoare multiple values into single var
function display(name, ...myName) {
    console.log(name, myName);
    console.log(typeof myName);
}
display("Anil", 31, "city", true,413304);

//default values
//function with default value
function add(num,num2=4){
    console.log(num+num2);
}
add(5);
add(10,2);