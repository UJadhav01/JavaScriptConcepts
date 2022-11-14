// Currying is the process of taking a function with multiple arguments and turning it into a sequence of 
// functions each with only a single argument.Currying is named after a mathematician Haskell curry.
// by applying it a-array function turns into a unary function

const multiArgFun=(a,b,c)=>a+b+c;
console.log("multi argument function result = ",multiArgFun(1,2,3));
const curryFunction=a=>b=>c=>a+b+c;
console.log("currying function result = ",curryFunction(1));//returns function b=>c=>1+b+c
console.log("currying function result = ",curryFunction(1)(2));//returns function c=>3+c
console.log("currying function result = ",curryFunction(1)(2)(3)); //returns number 6