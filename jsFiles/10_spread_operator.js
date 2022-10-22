let person = {
    name: "Mohit",
    age : 31,
    city : "Pune",
    address: {
        pin: 431202,
        street: "Kanch pokali"
    }
}
console.log(person.name, person.age, person.city);
console.log(person);
//let student = {...person};
let student=JSON.parse(JSON.stringify(person))

student.city = "Mumbai";
person.age = 33;
console.log(student.city, person.city);
console.log(student.age, person.age);

student.address.street = "Khav Galli";
console.log(student.address.street);
console.log(person.address.street);

console.table(person);
console.table(student);
/**Abc.json  —> JS objection notation 
 {
    “Name” : “Mohit”,
    “age” : 32,
     “address” : {
         “pin”: 12345,
          “city”: “Pune”
      } 
    }
 */