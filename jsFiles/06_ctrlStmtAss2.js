console.log(`\nstep-1 : Function result for check number even or odd`);
function evenOdd(num){
    if(num%2==0){
        console.log(`\n The number ${num} is Even`);
    }else{
        console.log(`\n The number ${num} is Odd`);

    }
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);
console.log("-------------------------------------------------------------------------------");
console.log(`\nstep-2 : Function result for check voter eligibility basis on age`);

function voteEligibility(age){
    if(age>=18){
        console.log(`\n Your age is ${age} , you are eligible for Vote`);

    }else{
        console.log(`\n Your age is ${age} , you are not eligible for Vote`);
    }
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);
console.log("-------------------------------------------------------------------------------");
console.log(`\nstep-3 : Function result for check given string length is greater than or not`);

function checkingCharLength(str){
    var strLength=str.length;
    if(strLength>10){
        console.log(`\n Yes the string  ${str} contains more than 10 characters`);
    }else{
        console.log(`\n No the string  ${str} contains more than 10 characters`);

    }
}
checkingCharLength('JavaScript - ES6');
console.log("-------------------------------------------------------------------------------");
console.log(`\nstep-4 : Function result for check string start with given keyword or not\n`);

function checkingStartWith(str){
    if(str.startsWith('Java')){
        console.log(`\n Yes the string  ${str} starts with Java\n`);
    }else{
        console.log(`\n No the string  ${str} doesn't starts with keyword "Java"\n`);

    }
}
checkingStartWith('JavaScript Language');