const student={
    name:"shiv",
    rollno:1
}
Object.freeze(student);
const person=student;
console.log(person);
person.age=3;
console.log(person);
