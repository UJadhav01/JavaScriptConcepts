
function Person(firstName,lastName,age,city){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.city=city;
        
    }
let person1=new Person("Aditya","Patil",14,"Pune");// creation and initialization of object
console.log(person1);
let person2=new Person("Raj","Jadhav",12,"Mumbai");
console.log(person2);
console.log(person1 instanceof Person);// for check object is class of person or not
console.log(typeof person1);    // for check type of object
Person.prototype.country="India";// created prototype,it is work like inbuilt methods or properties
console.log("accessing country from prototype for first object",person1.country);
console.log(`------------------------------------------------------------`);
console.log("accessing country from prototype for second object",person2.country);


/**function Person(fullName, city, age, gender) {
    this.fullName = fullName;
    this.city = city;
    this.age = age;
    this.gender = gender;
}
Person.prototype.country = "India";
let sachin = new Person("Sachin Tendulkar", "Surat", 45, "Male");
let sharma = new Person("Rohit Sharma", "Pune", 32, "Male");
let riya = new Person("Riya", "Kolhapur", 22, "Female");
let sona = new Person("Sona", "Mumbai", 19, "Female");

console.log(sachin.country);
console.log(riya.country);
 */