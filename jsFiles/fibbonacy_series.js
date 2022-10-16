//Fn = (Fn -1) + (Fn - 2)
//Fn represents the addition of the previous terms (Fn - 1) and (Fn - 2). Here Fn-1 is the first terms, 
//and Fn-2 is the second terms of the Fibonacci series.

//using third variable

var number=9;
var num1=0;
var num2=1;
var result="";
    for (let index = 0; index <number; index++) {
result+=num1+" ";
        var temp=num1+num2;
        num1=num2;
        num2=temp; 
    }
    console.log(result);

