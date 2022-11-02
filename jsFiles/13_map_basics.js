let map=new Map();
map.set(1,"sachin");
map.set(2,"xyz");
map.set(3,"abc");
map.set(4,"cde");
map.set(5,"pqr");
//map.set(5,"pr"); when we add duplicate key it will override with first occurrence or key 

console.log(map);
console.log(`=======================adding duplicate values========================`);
console.log("before adding duplicate element or key",map);
map.set(5,"pr");
console.log("after adding duplicate element or key",map);
console.log(`=======================adding duplicate values and key========================`);
map.set(2,"xyz");// it will override the both key and values
console.log("after adding duplicate element or key",map);
console.log(`=======================get/retrieve values from particular key========================`);
map.get(3); // it returns value of key 3
console.log("get value of map we can use key ",map.get(3));
console.log("get value of map we can use key ",map.get(7));// undefined because it dosent exit in map


console.log(`=======================delete records from map========================`);
console.log(map.delete(1),"after delete record from map",map);

console.log(`======================to check is key avialanle in map=========================`);
console.log(map.has(3));
console.log(`======================to traversing in map=========================`);
let setOfKeys=map.keys();
for (const key of setOfKeys) {
    console.log(map.get(key));
}

console.log(`==========================================================================`);
class Person {
    constructor(rollNo, fullName, city, age, gender){
        this.rollNo = rollNo;
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.rollNo}  ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person(22,"Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person(33, "Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person(44, "Billgates", "USA", 67, "Male");

let mapOfPersons = new Map();
mapOfPersons.set(22, personAnil);
mapOfPersons.set(33, personAnita);
mapOfPersons.set(44, personBill);

let mapKeys = mapOfPersons.keys(); // 22   33   44
for (const key of mapKeys) {
     let personObject = mapOfPersons.get(key);
     personObject.details();

}
