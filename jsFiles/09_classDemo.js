class Person{
    constructor(firstname,lastname,age,city){
        this.firstName=firstname;
        this.lastName=lastname;
        this.age=age;
        this.city=city;
        //console.log(`First Name = ${firstName} Last Name = ${lastName} Age = ${age} city = ${city}`);

    }
    details(){
        console.log(`First Name = ${this.firstName} Last Name = ${this.lastName} Age = ${this.age} city = ${this.city}`);
    }
}
let p=new Person();
p=new Person("Shiv","Kale",2,"pune");
q=new Person("Shravani","Jadhav",4,"mumbai");
p.details();
q.details();