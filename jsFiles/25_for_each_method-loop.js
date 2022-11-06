let display=(num,test)=>{
    console.log("hello i am from display function");
}
display(10,"Hello");

const arrayOfNumbers=[10,20,30,40,50,60,70];
// arrayOfNumbers.forEach(function(currentValue,index,array){
//     console.log(currentValue,index,array);
// });

//converting function into arrow function and traverse with forEach
// arrayOfNumbers.forEach((currentValue)=>{
//         console.log(currentValue);
//     });

//arrayOfNumbers.forEach((currentValue)=>console.log(currentValue))
arrayOfNumbers.forEach((currentValue,index)=>console.log(currentValue,index))

const setOfNumbers=new Set(arrayOfNumbers);
console.log(`Set traversed using forEach and arrow function`);

setOfNumbers.forEach((value)=>{
    console.log(value);
});
console.log(`Map traversed using forEach and arrow function`);

const myMap=new Map();
myMap.set(1,"abc");
myMap.set(2,"xyz");
myMap.set(3,"pqr");
myMap.set(4,"stu");
myMap.forEach((key,value)=>{
console.log(key,value);
});


