let teacher={};   // created empty object named teacher
console.log(teacher ,"\nInitial step This is empty object");
console.log(`------------------------------------------------------------------------------`);

//added properties that teacher can have
 teacher={
    firstName:"Namdev",
    lastName:"Sawant",
    designation:"Ass. professor",
    yearsOfExperience:"14",
 }
 console.log(`\nstep-1 : After adding properties in object teacher :`);
console.table(teacher);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);

 teacher={
    firstName:"Namdev",
    lastName:"Sawant",
    designation:"Ass. professor",
    yearsOfExperience:"14",


    //added nested object degree with some keys/properties

    degree:{
        engineering:"CSC",
        PHD:"Adv Computing",
        qualification:"MTech",
        quality:"Collaborative",
    },
}
console.log(`\nstep-2 : After adding nested object degree in object teacher :`);
console.table(teacher);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);

teacher={
    firstName:"Namdev",
    lastName:"Sawant",
    designation:"Ass. professor",
    yearsOfExperience:"14",
    //added nested object degree with some keys/properties

    degree:{
        engineering:"CSC",
        PHD:"Adv Computing",
        qualification:"MTech",
        quality:"Collaborative",
    },

 //added nested object degree with some keys/properties
    certification:{
        Certi1In:"Hacker",
        Certi2In:"IFE Course",
        Certi3In:"French",
        Certi4In:"Oracle Java SE",
        Certi5In:"C Language",
    },
    
}
console.log(`\nstep3 : After adding 2nd nested object certificate in object teacher :`);
console.table(teacher);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);

teacher={
    firstName:"Namdev",
    lastName:"Sawant",
    designation:"Ass. professor",
    yearsOfExperience:"14",
    //added nested object degree with some keys/properties

    degree:{
        engineering:"CSC",
        PHD:"Adv Computing",
        qualification:"MTech",
        quality:"Collaborative",
    },

 //added nested object degree with some keys/properties
    certification:{
        Certi1In:"Hacker",
        Certi2In:"IFE Course",
        Certi3In:"French",
        Certi4In:"Oracle Java SE",
        Certi5In:"C Language",
    },
totalDegrees:function(){
    console.log( `step-4 : Teacher degrees are : ${this.degree.engineering} ${this.degree.PHD} ${this.degree.qualification} ${this.degree.quality}`);
},

}
teacher.totalDegrees();
console.log("Teacher have total 4 ",Object.entries(teacher.degree)," degrees");

teacher.specialization="Programming";
console.log(`\nstep-5 : After adding new property specialization in object teacher :`);
console.table(teacher);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);
teacher.firstName="N.B";
console.log(`\nstep-6 : After modifying firstName property with value N.B in object teacher :`);
console.table(teacher);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);
delete teacher.certification.Certi2In;
console.log(`\nstep-7 : After deleting certi2In : IFE Course nested object certificate in object teacher :`);
console.table(teacher);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);
teacher.certification.Certi2In="Data Science";
console.log(`\nstep-8 : After adding certi2In : Data Science nested object certificate in object teacher :`);
console.table(teacher);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`\nStep-9 : logged the nested object certificate on console :`);
console.table(teacher.certification);