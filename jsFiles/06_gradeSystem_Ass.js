function gradeSystem(score) {
    
    switch (true) {
        case (score > 0 && score <35 && score!=+"" && score!==null):
        console.log("Sorry your fail");
        break;

        case (score == 35):
        console.log("congrats...! You are pass");
        break;

        case (score >= 35 && score < 60):
        console.log("congrats...! You are pass , Your get grade C");
        break;

        case (score >= 60 && score < 75):
        console.log(`congrats...! You are pass , Your get grade B`);
        break;

        case (score >= 75 && score <= 90):
        console.log(`congrats...! You are pass , Your get grade A`);
        break;

        case (score >= 90 && score <= 100):
         console.log(`congrats...! You are pass , Your get grade A+`);
        break;

        default:
            console.log("Invalid Intput");
            break;
    }

}

console.log("\nYour Score is 66")
gradeSystem(66);
console.log(`-----------------------------------------------------`);

console.log("Your Score is 13")
gradeSystem(13);
console.log(`-----------------------------------------------------`);

console.log(`you entered "" please enter valid input`)
gradeSystem(" ");
console.log(`-----------------------------------------------------`);

console.log("Your Score is 98")
gradeSystem(98);
console.log(`-----------------------------------------------------`);

console.log(`you entered string "fifty five" please enter valid input`)
gradeSystem("fifty five");
console.log(`-----------------------------------------------------`);

console.log(" Your Score is 35")
gradeSystem(35);
console.log(`-----------------------------------------------------`);

console.log("Your Score is 75")
gradeSystem(75);
console.log(`-----------------------------------------------------`);

console.log(`you entered "null" please enter valid input`)
gradeSystem(null);

console.log(`-----------------------------------------------------`);

console.log(`you entered "undefined" please enter valid input`)
gradeSystem(undefined);
console.log(`-----------------------------------------------------`);

console.log(`you entered "-20" please enter valid input`)
gradeSystem(-20);
console.log(`-----------------------------------------------------`);

console.log("Your Score is 55")
gradeSystem(55);
console.log(`-----------------------------------------------------`);
console.log("Your Score is 82")
gradeSystem(82);
console.log(`\n`);


//var gradeSystem = function (score) {

//     if(score >= 0 && score < 35 && score!=+""){
//        console.log("\nSorry your fail");
//     }else if (score == 35) {
//         console.log("\ncongrats...! You are pass");

//     }else if (score >= 35 && score < 60) {
//         console.log("\ncongrats...! You are pass , Your get grade C");

//     }else if (score >= 60 && score < 75) {
//         console.log(`\ncongrats...! You are pass , Your get grade B`);

//     }else if (score >= 75 && score < 90) {
//         console.log(`\ncongrats...! You are pass , Your get grade A`);

//     }else if (score >= 90 && score <= 100) {
//         console.log(`\ncongrats...! You are pass , Your get grade A+`);

//     }else if(score!==null){
//         console.log(`\nInvalid Input`);
//     }
//     else{
//         console.log(`\nInvalid Input`);
//     }
// }
// gradeSystem(66);
// console.log(`-----------------------------------------------------`);
// gradeSystem(13);
// console.log(`-----------------------------------------------------`);

// gradeSystem(" ");
// console.log(`-----------------------------------------------------`);

// gradeSystem(98);
// console.log(`-----------------------------------------------------`);

// gradeSystem("fifty five");
// console.log(`-----------------------------------------------------`);

// gradeSystem(35);
// console.log(`-----------------------------------------------------`);

// gradeSystem(75);
// console.log(`-----------------------------------------------------`);

// gradeSystem(null);
// console.log(`-----------------------------------------------------`);

// gradeSystem(undefined);
// console.log(`-----------------------------------------------------`);

// gradeSystem(-20);
// console.log(`-----------------------------------------------------`);

// gradeSystem(55);
// console.log(`-----------------------------------------------------`);

//gradeSystem(82);
// console.log(`\n`);


//}