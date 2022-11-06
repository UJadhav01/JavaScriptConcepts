//created Employee class object using only forEach()
console.log(`Assignment C: Employee class object using only forEach()`);
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
console.log(`Step-1 : TCS employee details`);
array_employee.forEach((value)=>{
if(value.emp_company==="TCS"){
    console.log(`Employee Name : ${value.emp_name} , Company Name : ${value.emp_company}`);
}
});
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-2 : employee with salary greater than or equal 50000`);
array_employee.forEach((value)=>{
    if(value.emp_salary>=50000){
        console.log(`Employee Id : ${value.emp_id} , Name : ${value.emp_name} , Department : ${value.emp_dept} , Salary : ${value.emp_salary} , Company : ${value.emp_company}`);
    }
});
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-3 : some of all employee salary`);
let sum=0;
array_employee.forEach((value)=>{
    sum+=value.emp_salary;
});
console.log(`Sum of all employee salary = ${sum}`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-4 : some of all employee salary`);
let averageSalary=0;
let averageSalaryResult;
array_employee.forEach((value)=>{
    averageSalary+=value.emp_salary;
});
console.log(`Sum of all employee salary = ${(averageSalary)/array_employee.length}`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-5 : IT and HR department employee whose salary greater than or equal 75000`);
array_employee.forEach((value)=>{
    if((value.emp_dept==="IT" && value.emp_salary>=75000) || (value.emp_dept==="HR" && value.emp_salary>=75000)){
        console.log(`Employee Id : ${value.emp_id} , Name : ${value.emp_name} , Department : ${value.emp_dept} , Salary : ${value.emp_salary} , Company : ${value.emp_company}`);
    }
});