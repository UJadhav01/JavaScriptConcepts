const person={
    firstName:"shivanshi",
    lastName:"kale",
    age:"2",

}
person.city="pandharpur";// adding properties to object
person.age=4; // for updating proprties
delete person.age;// for deleting 

const person2={
    firstName:"Sharavni",
    lastName:"jadhav",
    age:"3",
    address:{   // adding object under object
        street:"jeur",
        state:"MH",
        country:"india"
    },
    eat:function(){console.log(`eat a mango`);},     // for adding method or function
    details:function(){
        console.log(`${this.firstName} ${this.lastName}`);//use of this
    }
}
person2.city="wangi";   //for adding properties in object
//Object.keys(person); // for get total no of keys in object
//Object.values(person);// for get total no of values in object
//Object.entries(person);// for get total no of entries in object
console.log(person.firstName,person.lastName,person.age);// access obkect using dot . operator
console.log(person2["firstName"],person2["lastName"],person2["age"]); // you can access object as this also using []
console.log(typeof(person));
console.table(person);
console.table(person2);
console.log(`-------------------------------------------------------`);
console.table(person2.address.country);
console.log(`-------------------------------------------------------`);
person2.eat();
person2.details();