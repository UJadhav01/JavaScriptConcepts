//step-1 create bank_sbi object with at least 4 properties
const bank_sbi={
//at least 4 properties
nameOf_holder:'xyz ',
account_number:1223434332,
typeOf_account:' saving ',
ifsc_no:'SBIN12345',
}
console.log(`Object bank_sbi = ${Object.entries(bank_sbi)}`);
//step-2 create bank_location object with given properties
const bank_location={
    street:"Station Road ",
    city:"Pandharpur ",
    PIN_Code:413304,
}
console.log(`Object bank_location = ${Object.entries(bank_location)}`);

//step-3 clone above two object using object.assign and spread operator
// cloned above objects using object.assign
let bank_detail=Object.assign({},bank_sbi,bank_location);
//console.log(`Object bank_sbi and bank_location after cloning in new object using Object.assign() = ${Object.entries(bank_detail)}`);
console.log(`\nObject bank_sbi and bank_location after cloning in new object using Object.assign() :`);

console.log(`Name of holder = ${bank_detail.nameOf_holder}\nAccount Number = ${bank_detail.account_number}\nType of Account = ${bank_detail.typeOf_account}\nIFSC Code = ${bank_detail.ifsc_no}\nStreet = ${bank_detail.street}\nCity = ${bank_detail.city}\nPIN Code = ${bank_detail.PIN_Code}`);
//cloned above objects using spread operator
let bank_detail1={...bank_sbi,...bank_location};
//console.log(`Object bank_sbi and bank_location after cloning in new object using ...spread operator = ${Object.entries(bank_detail1)}`);
console.log(`\nObject bank_sbi and bank_location after cloning in new object using ...spread operator :`);

console.log(`Name of holder = ${bank_detail.nameOf_holder}\nAccount Number = ${bank_detail.account_number}\nType of Account = ${bank_detail.typeOf_account}\nIFSC Code = ${bank_detail.ifsc_no}\nStreet = ${bank_detail.street}\nCity = ${bank_detail.city}\nPIN Code = ${bank_detail.PIN_Code}`);//step-4 create object using literals rate_of_interest
const rate_of_interest={
    home_loan_interest:'6.9% p.a',
    personal_loan_interest:'13.55% p.a',
    due_interst:'2% p.m'
}
console.log(`\nObject rate_of_interest = ${Object.entries(rate_of_interest)}`);

//step-5 merge bank_sbi,bank_location and rate of interest in new object named sbi_details
let sbi_details=Object.assign({},bank_sbi,bank_location,rate_of_interest);
console.log(`Object sbi_details data: `);
console.log(`Name of holder = ${sbi_details.nameOf_holder}\nAccount Number = ${sbi_details.account_number}\nType of Account = ${sbi_details.typeOf_account}\nIFSC Code = ${sbi_details.ifsc_no}\nStreet = ${sbi_details.street}\nCity = ${sbi_details.city}\nPIN Code = ${sbi_details.PIN_Code}\nHome loan interest rate = ${sbi_details.home_loan_interest}\nPersonal loan interest rate = ${sbi_details.personal_loan_interest}\nDue interest rate = ${sbi_details.due_interst}`);

//step-6 merger step5 object using loop
console.log(`\nObject sbi_details traversed using for of loop :`);
const array=[bank_sbi,bank_location,rate_of_interest];
for (const element of array) {
    console.log(`${Object.entries(element)}`);
}
