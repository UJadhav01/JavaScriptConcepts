//created Employee class
console.log(`Assignment on Employee class`);
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

//displaying data of each object
console.log(`\nData of object emp_anil    : emp_id = ${emp_anil.emp_id} , emp_name = ${emp_anil.emp_name} , emp_dept = ${emp_anil.emp_dept} , emp_salary = ${emp_anil.emp_salary} , emp_company = ${emp_anil.emp_company}`);
console.log(`Data of object emp_radha   : emp_id = ${emp_radha.emp_id} , emp_name = ${emp_radha.emp_name} , emp_dept = ${emp_radha.emp_dept} , emp_salary = ${emp_radha.emp_salary} , emp_company = ${emp_radha.emp_company}`);
console.log(`Data of object emp_rishi   : emp_id = ${emp_rishi.emp_id} , emp_name = ${emp_rishi.emp_name} , emp_dept = ${emp_rishi.emp_dept} , emp_salary = ${emp_rishi.emp_salary} , emp_company = ${emp_rishi.emp_company}`);
console.log(`Data of object emp_sonali  : emp_id = ${emp_sonali.emp_id} , emp_name = ${emp_sonali.emp_name} , emp_dept = ${emp_sonali.emp_dept} , emp_salary = ${emp_sonali.emp_salary} , emp_company = ${emp_sonali.emp_company}`);
console.log(`Data of object emp_monika  : emp_id = ${emp_monika.emp_id} , emp_name = ${emp_monika.emp_name} , emp_dept = ${emp_monika.emp_dept} , emp_salary = ${emp_monika.emp_salary} , emp_company = ${emp_monika.emp_company}`);
console.log(`Data of object emp_vinayak : emp_id = ${emp_vinayak.emp_id} , emp_name = ${emp_vinayak.emp_name} , emp_dept = ${emp_vinayak.emp_dept} , emp_salary = ${emp_vinayak.emp_salary} , emp_company = ${emp_vinayak.emp_company}`);
console.log(`Data of object emp_mahesh  : emp_id = ${emp_mahesh.emp_id} , emp_name = ${emp_mahesh.emp_name} , emp_dept = ${emp_mahesh.emp_dept} , emp_salary = ${emp_mahesh.emp_salary} , emp_company = ${emp_mahesh.emp_company}`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
//stored all objects of Employee class into array
let array_employee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahesh];

console.log(`Step-1 : employee working in tcs with name`);
for (const iterator of array_employee) {
    if(iterator.emp_company==="TCS"){
        console.log(`Employee Name = ${iterator.emp_name} , Company Name = ${iterator.emp_company}`);
    }
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-2 : finance department employees with name`);
for (const iterator of array_employee) {
    if(iterator.emp_dept==="Finance"){
        console.log(`Employee Department = ${iterator.emp_dept} , Employee Name = ${iterator.emp_name}`);
    }
}
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-3 : employees whose name start with "R" `);
for (const iterator of array_employee) {
    //let empNameStartR=iterator.emp_name.startsWith('R');
    if(iterator.emp_name.startsWith('R')){
        console.log(`Employee Id = ${iterator.emp_id} , Employee name = ${iterator.emp_name} , Employee department = ${iterator.emp_dept} , Employee salary = ${iterator.emp_salary} , Company name = ${iterator.emp_company}`);

    }
}
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-4 : employees whose salary>70k with name , company and salary `);
for (const iterator of array_employee) {
    if(iterator.emp_salary>70000){
        console.log(`Employee name = ${iterator.emp_name} ,Company name = ${iterator.emp_company} , Employee salary = ${iterator.emp_salary}`);
    }
}
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-5 : employees whose salary>=50k and from IT department`);
for (const iterator of array_employee) {
    if(iterator.emp_salary>=50000 && iterator.emp_dept==="IT"){
        console.log(`Employee Id = ${iterator.emp_id} , Employee name = ${iterator.emp_name} , Employee department = ${iterator.emp_dept} , Employee salary = ${iterator.emp_salary} , Company name = ${iterator.emp_company}`);
    }
}
console.log(`------------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-6 : employees from company Infy`);
for (const iterator of array_employee) {
    if(iterator.emp_company==="Infy"){
        console.log(`Employee Id = ${iterator.emp_id} , Employee name = ${iterator.emp_name} , Employee department = ${iterator.emp_dept} , Employee salary = ${iterator.emp_salary} , Company name = ${iterator.emp_company}`);
    }
}