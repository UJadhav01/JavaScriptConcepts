//sort()
const array_names=['sunil','radha','zetty','jenny','andy','nancy'];
array_names.sort(); //this work fine for string array
console.log(array_names);

const array_numbers=[211,11,25,33,311,9,299,100];
// array_numbers.sort();//it works here but only for 1 or 2 numbers
// //if number is more than 2 digits it consider only first digit that is the problem to solve this we use second approach
// console.log(array_numbers);

//sorting number array using callback/inline function
array_numbers.sort(function(num1,num2){
    if(num1>num2){
return 1;
    }else if(num1<num2){
        return -1;
    }else{
        return 0;
    }
});
console.log(`array using callback/inline function `,array_numbers);

//sorting number array using arrow function
array_numbers.sort((num1,num2)=>{
    return num1>num2?1:-1;
});
console.log(`array using arrow function `,array_numbers);

//reverse() reverse the elements
const array_number=[1,41,4,16,2,292,117,9,271];
array_number.reverse();
console.log(`reversed array using reverse() `,array_number);

console.log(`reversed array_names = `,array_names.reverse());

//Sort the number array in descending order
array_number.sort((num1,num2)=>{
    return num1>num2?-1:1;
})
console.log(array_number);