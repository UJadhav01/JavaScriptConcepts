class Vehicle{
    constructor(type,regNo,modelNo,noOfSit){
        this.type=type;
        this.regNo=regNo;
        this.modelNo=modelNo;
        this.noOfSit=noOfSit;
    }
    display(){
        console.log(`\nType of Vehical = ${this.type} , Registration_No = ${this.regNo} , Model_No = ${this.modelNo} , No_Of_Sits = ${this.noOfSit}`);
    }
}
console.log(`Output of Vehicle class Object : `);

let vehicalObject1=new Vehicle("2 Wheeler TV's","SN51",1,2);
vehicalObject1.display();
let vehicalObject2=new Vehicle("3 Wheeler Auto","TN71",3,5);
vehicalObject2.display();
let vehicalObject3=new Vehicle("4 Wheeler","TN35",2,7);
vehicalObject3.display();
let vehicalObject4=new Vehicle("2 Wheeler Glamor","TN33",1,2);
vehicalObject4.display();
let vehicalObject5=new Vehicle("4 Wheeler","ST44",1,6);
vehicalObject5.display();
console.log(`------------------------------------------------------------------------------------------------------------------`);
class College{
    constructor(collageName,collageType,city,NIRF_Rank){
        this.collageName=collageName;
        this.collageType=collageType;
        this.city=city;
        this.NIRF_Rank=NIRF_Rank;
    }
    display(){
        console.log(`\nCollage Name = ${this.collageName} , Ownership_Type = ${this.collageType} , City = ${this.city} , NIRF_Rank = ${this.NIRF_Rank}`);
    }
}
console.log(`Output of Collage class Object : `);

let collegeObj1=new College("Sveri College of Eng.","Private","Pandharpur",123);
collegeObj1.display();

let collegeObj2=new College("SKNSCOE","Private","Pandharpur",122);
collegeObj2.display();

let collegeObj3=new College("SPIT","Private","Mumbai",167);
collegeObj3.display();

let collegeObj4=new College("AIT","Army","Pune",172);
collegeObj4.display();

// let collegeObj5=new College("VIT","Private","Pune",142);
// collegeObj5.display();
console.log(`------------------------------------------------------------------------------------------------------------------`);

function travrese_Object(obj){
   
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(`${key} ${element} `);
        }
    }
}
console.log(`Output of traverse_object function for all instance of Collage class : `);
console.log(`\ntraverse_object function for 1st instance of Collage class : `);
travrese_Object(collegeObj1);
console.log(`------------------------------------------------------------------------------------------------------------------`);
console.log(`\ntraverse_object function for 2nd instance of Collage class : `);
travrese_Object(collegeObj2);
console.log(`------------------------------------------------------------------------------------------------------------------`);
console.log(`\ntraverse_object function for 3rd instance of Collage class : `);
travrese_Object(collegeObj3);
console.log(`------------------------------------------------------------------------------------------------------------------`);
console.log(`\ntraverse_object function for 4th instance of Collage class : `);
travrese_Object(collegeObj4);
console.log(`------------------------------------------------------------------------------------------------------------------`);
console.log(`\nProgram for fibonacci series : `);
let number=7;
let num1=0;
let num2=1;
let result="";
for (let index = 0; index <number; index++) {
result+=num1+" ";   
let temp=num1+num2;
num1=num2;
num2=temp; 
}
console.log(`\nFibonacci series up to number 7 = ${result}`);
