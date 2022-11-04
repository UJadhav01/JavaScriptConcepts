const person={
    firstName:'shiv',
    lastName:'kale',
    age:3,
    PIN:413304,
    city:'pandharpur'
}
// console.log(person.firstName); //this used to extract properties from object
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.PIN);

//above functionality we can access in one line using distructuring
let {firstName,lastName,age,PIN}=person;
console.log(firstName,lastName,age,PIN);

let {city2}=person;// when we access wrong property name it will give result undefined
console.log(firstName,lastName,age,PIN,city2);

// array destructuring
let arrayOfNames = ["Monu", "Golu", "Chottu", "Ponu", "dholu"]
//  let ele0 =  arrayOfNames[0];
//  let ele1 =  arrayOfNames[1];
//  let ele2 =  arrayOfNames[2];
//  let ele3 =  arrayOfNames[3];
//  let ele4 =  arrayOfNames[4];
//  let ele5 =  arrayOfNames[5];
//destructuring with default value 
 let [ele0, ele1, ele2, ele3, ele4 ,elem5='shiv'] = arrayOfNames;
 console.log(ele0, ele1, ele2, ele3, ele4,elem5);
