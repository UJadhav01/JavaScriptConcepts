const person={
    name:"shiv",
    roll_no:11,
}
//object freezing is used to make object read only
Object.freeze(person);
person.name = "Mohit Sharma";// Modification not considered as person object is freezed
person.street = "AS CLUB"; // Adding new property is not considered as person object is freezed
console.log(person);

//array freezing

const array=[1,2,3,4];
//array=[5,6,7];
Object.freeze(array);// it makes array immutable that means we can not change array value after creation or define
//array.push(99);// not allowed as object is freezed
console.log(array);

//3rd way to copy or clone object or merge object 
const student = {
    name: "Mohit",
    rollNo : 1234
}

const address={
    city:"pune",
    street:"link road"
}
let studentClone = Object.assign({}, student);//used to copy object it make deep cloning
console.log(studentClone);
console.log(student);

let studentClone1=Object.assign({},student,address);//here merged two objects
console.log(studentClone1);



