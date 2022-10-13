console.log(`\nStep-1 : Function result for check maleMarriageEligibility using ternary Operator eligibility\n`);
function maleMarriageEligibility(gender,age,name){
    return  gender = 'Male' && age >= 25 && name  // false || true
    ? `Hey Congrats ${name} you are eligible for Marriage\n`
    : `Sorry ${name} your age is below 25 , you are not eligible for Marriage\n`;
}
var result=maleMarriageEligibility('Male',25,'Billgates');

var result1=maleMarriageEligibility('Male',17,'Stew Jobs');
console.log(result);

console.log(result1);

console.log(`-------------------------------------------------------------------------------------`);
console.log(`\nStep-2 : Function result for check FemaleMarriageEligibility using if block\n`);

function femaleMarriageEligibility(gender,age,name){
    if(gender='Female' && age>18 && name){
    console.log(`Hey congrats ${name} you are eligible for Marriage\n`);
    }
    else{
        console.log(`Sorry ${name} your age is below 18 , you are not eligible for Marriage\n`);
    }
}
femaleMarriageEligibility('Female',16,'Jenifer');
femaleMarriageEligibility('Female',27,'Malinda Gates');

