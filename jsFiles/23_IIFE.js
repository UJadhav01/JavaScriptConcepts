//IIF immediate invoke/call function or self calling function
(function multi(num1,num2=5){
    console.log(num1*num2);
})(10);

//function without name we call it anonymous function
(function (num1,num2=5){
    console.log(num1+num2);
})(10,2);
