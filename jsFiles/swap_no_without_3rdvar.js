function swapNumber(num1,num2){
    console.log(`swapping of numbers using + , - , i.e without third variable`);
    console.log(`before swap num1 = ${num1} & num2 = ${num2}`);
    //swapping of numbers using + , - i.e without third variable
    num1=num1+num2;  //100+200=300
    num2=num1-num2; //300-200=100
    num1=num1-num2  //300-100=200
    console.log(`after swap num1 = ${num1} & num2 = ${num2}`);

}
swapNumber(100,200);

function swapNumber1(num1,num2){
    console.log(`\nswapping of numbers using * , / , i.e without third variable`);

    console.log(`before swap num1 = ${num1} & num2 = ${num2}`);
    //swapping of numbers using * , / i.e without third variable
    num1=num1*num2;  //10*20=200
    num2=num1/num2; //200/20=10
    num1=num1/num2  //200/10=20
    console.log(`after swap num1 = ${num1} & num2 = ${num2}`);

}
swapNumber1(10,20);