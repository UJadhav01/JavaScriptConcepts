//given array --> cont array_nums=[20,3,4,56,90,400,49]
/**
 * Step-1 : perform shallow clone on array_nums,update cloned array with values-->55,66 using push()
 * and log origional and cloned array on console
 */
console.log(`Step-1 : `);
//given array --> 
const array_nums=[20,3,4,56,90,400,49];
const array_nums2=array_nums;
//let array_nums2=JSON.parse(JSON.stringify(array_nums))

array_nums2.push(55);
array_nums2.push(66);
console.log(`\nOriginal array array_nums : `);
console.table(array_nums);
console.log(`Cloned array array_nums2 : `);
console.table(array_nums2);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);

/**
 * Step-2 : perform deep clone using spread operator,update origional array i.e array_nums with values 10,25
 * at last position and log origional and cloned array on console
 */
 console.log(`Step-2 : \n`);

const array_nums3=[...array_nums];
array_nums.push(10);
array_nums.push(25);

console.log(`Original array array_nums : `);
console.table(array_nums);
console.log(`Cloned array array_nums3 : `);
console.table(array_nums3);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);

/**
 * Step-3 : given other array -->array_even=[2,30,14,8],merge or concat this array with array_nums 
 * using spread operator,log result on console after merge array operation
 */
 console.log(`Step-3 : \n`);

const array_even=[2,30,14,8];
let array_even2=[...array_even,...array_nums];
console.log(`Result of array_even after merge with array_nums :`);
console.table(array_even2);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);

/**
 * Step-4 : create the employee_info object as shown in snippet
 */
 console.log(`Step-4 : created the employee_info object as given in snippet`);

const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobile:["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"]
}
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);

/**
 * Step-5 : Log the employee details on console like
 * a. Address:Locality,city,state and country
 * b. Mobile numbers
 */
 console.log(`Step-5 :\n `);

console.log(`Employee details : `);
let result=employee_info.address.locality;
console.table(employee_info.address);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);

/**
 *Step-6 : Perform the deep clone using ... spread operator
 * a. Update cloned object street property
 * b. Update mobile number first value with your mobile no
 * c. log the cloned and original emp obj
 * d. Point out issue
 */
 console.log(`Step-6 : \n`);

 console.log(`deep clone using ...operator from employee_info object : `);

let employee_info2={...employee_info};
employee_info2.address.locality.street="Link Road,near K.B.P Collage";
employee_info2.address.mobile=["+91 9999 9999 99","1800-4567 32","+91-9096 5678 77"];
console.log(`\noriginal employee_info : `);
console.table(employee_info.address);
console.log(`Cloned employee_info : `);
console.table(employee_info2.address);
console.log(`Issue after cloning with ...operator when we update the values Cloned employee_info it also change the values in Original employee_info. `);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);


/**
 * Step-7 : then deep copy using JSON.stringfy()
 * a.update property july_month salary to 80k
 * b. update property country to United Kingdom
 * c. log(7.a,7 b) updated values for original and cloned object on console
*/
console.log(`Step-7 : \n`);

let employee_info3=JSON.parse(JSON.stringify(employee_info));//deep copy using JSON.stringfy()
console.log(`deep clone using JSON.stringfy() from employee_info object : `);

employee_info3.salary.july_month="80,000INR";
console.log(`Step-7.a :`);
console.log(`\nValues for july_month salary of Original object : `);
console.table(employee_info.salary);
console.log(`updated Values for july_month=80,000INR salary of cloned object : `);
console.table(employee_info3.salary);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`Step-7.b :`);

employee_info3.address.country="United Kingdom";
console.log(`Values for Country of Original object : `);
console.table(employee_info.address);
console.log(`updated Values for Country=United Kingdom of cloned object : `);
console.table(employee_info3.address);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------------------`);


