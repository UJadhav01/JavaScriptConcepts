console.log(`Assignment D:  Using filter( ) and reduce( )`);
//created Employee class object
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        //Initializing the members of class Employee
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
//created objects of Employee class
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinayak=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahesh=new Employee(99,"Mahesh","HR",85000,"Infy");

// //displaying data of each object
// console.log(`\nData of object emp_anil    : emp_id = ${emp_anil.emp_id} , emp_name = ${emp_anil.emp_name} , emp_dept = ${emp_anil.emp_dept} , emp_salary = ${emp_anil.emp_salary} , emp_company = ${emp_anil.emp_company}`);
// console.log(`Data of object emp_radha   : emp_id = ${emp_radha.emp_id} , emp_name = ${emp_radha.emp_name} , emp_dept = ${emp_radha.emp_dept} , emp_salary = ${emp_radha.emp_salary} , emp_company = ${emp_radha.emp_company}`);
// console.log(`Data of object emp_rishi   : emp_id = ${emp_rishi.emp_id} , emp_name = ${emp_rishi.emp_name} , emp_dept = ${emp_rishi.emp_dept} , emp_salary = ${emp_rishi.emp_salary} , emp_company = ${emp_rishi.emp_company}`);
// console.log(`Data of object emp_sonali  : emp_id = ${emp_sonali.emp_id} , emp_name = ${emp_sonali.emp_name} , emp_dept = ${emp_sonali.emp_dept} , emp_salary = ${emp_sonali.emp_salary} , emp_company = ${emp_sonali.emp_company}`);
// console.log(`Data of object emp_monika  : emp_id = ${emp_monika.emp_id} , emp_name = ${emp_monika.emp_name} , emp_dept = ${emp_monika.emp_dept} , emp_salary = ${emp_monika.emp_salary} , emp_company = ${emp_monika.emp_company}`);
// console.log(`Data of object emp_vinayak : emp_id = ${emp_vinayak.emp_id} , emp_name = ${emp_vinayak.emp_name} , emp_dept = ${emp_vinayak.emp_dept} , emp_salary = ${emp_vinayak.emp_salary} , emp_company = ${emp_vinayak.emp_company}`);
// console.log(`Data of object emp_mahesh  : emp_id = ${emp_mahesh.emp_id} , emp_name = ${emp_mahesh.emp_name} , emp_dept = ${emp_mahesh.emp_dept} , emp_salary = ${emp_mahesh.emp_salary} , emp_company = ${emp_mahesh.emp_company}`);
// console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);

//stored all objects of Employee class into array
let array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahesh];
console.log(`Step-1 : All the employees from 'Wipro' company`);
array_emps.filter((value)=>{
    if(value.emp_company==="Wipro"){

        console.log(`Id : ${value.emp_id} ===> Name : ${value.emp_name} , Department : ${value.emp_dept} ,  Salary : ${value.emp_salary} , Company : ${value.emp_company}  `);
    }
});
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-2 : All the employees from 'IT' OR 'HR' dept`);
array_emps.filter((value)=>{
    if(value.emp_dept==="IT" || value.emp_dept==="HR"){

        console.log(`Id : ${value.emp_id} ===> Name : ${value.emp_name} , Department : ${value.emp_dept} ,  Salary : ${value.emp_salary} , Company : ${value.emp_company}  `);
    }
});
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-3 : All the employees whose emp id's are greater than 50`);
array_emps.filter((value)=>{
    if(value.emp_id>50){

        console.log(`Id : ${value.emp_id} ===> Name : ${value.emp_name} , Department : ${value.emp_dept} ,  Salary : ${value.emp_salary} , Company : ${value.emp_company}  `);
    }
});
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
//[ Hint→ startsWith( “A”) || startsWith( “V”) startsWith( “M”) inside if ( ) block as a condition ]
console.log(`Step-4 : All the employees whose names start with letter 'A' or 'V' or 'M'`);
array_emps.filter((value)=>{
    if(value.emp_name.startsWith('A') || value.emp_name.startsWith('V') || value.emp_name.startsWith('M')){

        console.log(`Id : ${value.emp_id} ===> Name : ${value.emp_name} , Department : ${value.emp_dept} ,  Salary : ${value.emp_salary} , Company : ${value.emp_company}  `);
    }
});
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-5 : the average salary of the employee for all the department`);
let averageSalary=0;
array_emps.filter((value)=>{
    averageSalary+=value.emp_salary;
});

console.log(`Average salary of all dept employees = `,(averageSalary/array_emps.length));

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
//[ Hint → Filter the ‘IT’ department employee using filter( ) which return new array with only ‘IT’ department employees and then use reduce( ) to get the average ]
console.log(`Step-6 : the average salary for 'IT' department`);
let arrayOfItDepEmp=[];
array_emps.filter((value)=>{
    if(value.emp_dept==='IT'){
        arrayOfItDepEmp.push(value);
    }
    return arrayOfItDepEmp;
});
let averageSalary2=0;
arrayOfItDepEmp.filter((value)=>{
    if(value.emp_dept==='IT'){
        averageSalary2+=value.emp_salary;
    }
    return averageSalary2;
});
console.log(`Average salary of IT dept employees = `,(averageSalary2/arrayOfItDepEmp.length));


// console.log("--------------------Average Salary of the Employee who is working in IT dept-------------------------");
// var array1=array.filter((value)=>{
//     return value.emp_dept==='IT';

// });
// console.log(array1);
// var array2=[];
// array1.forEach((value1)=>{
    
//     array2.push(value1.emp_salary);

// });
// console.log(array2);

// var array3=array2.reduce((a,b)=>{
//     return a+b;

// });
// console.log(array3/array1.length);