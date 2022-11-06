console.log(`Assignment B:  sorting employee objects in ascending and descending`);
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
let array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahesh];

console.log(`Step-1 :  Sort the 'array_employees' in ascending order of Employee Id's`);
// for (const iterator of array_employees) {
//     console.log(iterator);
// }

//sorting array of object
let sortedObjects=array_employees.sort((p1,p2)=>{
    (p1.emp_id > p2.emp_id) ? 1 :-1;
});
sortedObjects.forEach((obj)=>console.log(obj));

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-2 : Sort the 'array_employees' in ascending order of employee department & log Id, dept, & Company`);
array_employees.sort(function(a, b) {
    const nameA = a.emp_dept.toUpperCase(); // ignore upper and lowercase
    const nameB = b.emp_dept.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
    // names must be equal
    return 0;
  });
    
  array_employees.forEach((obj)=>console.log(`Id = ${obj.emp_id} , department = ${obj.emp_dept} , company = ${obj.emp_company}`));
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-3 : Sort the employee array in descending order of employee salary and log Name, Salary & Company`);
let descendingArray=array_employees.sort((p1,p2)=>{
    if (p1.emp_salary > p2.emp_salary) {
        return -1;
      }
      if (p1.emp_salary < p2.emp_salary) {
        return 1;
      }
      // names must be equal
      return 0;
    });
descendingArray.forEach((obj)=>console.log(`Name = ${obj.emp_name} , salary = ${obj.emp_salary} , company = ${obj.emp_company}`));
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-4 : Sort the employee array in ascending order of company name and log Company, Id, Name, Salary & dept`);
let ascendingArrayOfNames=array_employees.sort((p1,p2)=>{
    if (p1.emp_company> p2.emp_company) {
        return 1;
      }
      if (p1.emp_company < p2.emp_company) {
        return -1;
      }
      // names must be equal
      return 0;
    });
    ascendingArrayOfNames.forEach((obj)=>console.log(`company = ${obj.emp_company} , id = ${obj.emp_id} , name = ${obj.emp_name} , salary = ${obj.emp_salary} , department = ${obj.emp_dept}`));
