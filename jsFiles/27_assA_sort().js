console.log(`Assignment A: Sorting in Ascending / Descending order and reverse`);
const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ] ;
console.log(`Original array array_roll_numbers = `,array_roll_numbers);
console.log(`Step-1 : Reversed the array`);
array_roll_numbers.reverse();
console.log(`Reversed array array_roll_numbers = `,array_roll_numbers);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`Step-2 : Use the sort() method as it is without any custom sorting logic`);
array_roll_numbers.sort();
console.log(`Use the sort() method as it is without any custom sorting logic array array_roll_numbers  `)
console.log(`array_roll_numbers`,array_roll_numbers);
console.log(`Issue : It will sort the array but consider only first digit while sorting if element has more than 2 digits`);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`Step-3 : Sort the array in ascending order`);
array_roll_numbers.sort((num1,num2)=>{
    return num1>num2?1:-1;
});
console.log(`sorted array in ascending order  = ${array_roll_numbers}`);
console.log(`-----------------------------------------------------------------------------------------------------------------`);

console.log(`Step-4 : Sort the array in descending order without using reverse() method only used sort()`);
array_roll_numbers.sort((num1,num2)=>{
    return num1>num2?-1:1;
});
console.log(`sorted array in descending order  = `,array_roll_numbers);
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`Step-5 : Sort the array in descending order with using reverse() method `);
//[ Hint → sort array first using sort()]
array_roll_numbers.sort((num1,num2)=>{
    return num1>num2?1:-1;
});
console.log(`sorted array in descending order  = `,array_roll_numbers.reverse());
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`Step-6 : Greatest number from the array `);
//[ Hint → sort array first using sort()]
array_roll_numbers.sort((num1,num2)=>{
    return num1>num2?1:-1;
});
console.log(`greatest number from array_roll_numbers  = `,(array_roll_numbers[array_roll_numbers.length-1]));
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`Step-7: smallest number from the array`);
//[ Hint → sort array first using sort()]
array_roll_numbers.sort((num1,num2)=>{
    return num1>num2?1:-1;
});
console.log(`greatest number from array_roll_numbers  = `,(array_roll_numbers[0]));
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`Step-8: 8. Removed duplicates from array`);
//[ Hint → sort array first using sort()]
// array_roll_numbers.sort((num1,num2)=>{
//     return num1>num2?1:-1;
// });
console.log(`array after remove duplicates array_roll_numbers  = `,([...new Set(array_roll_numbers)]));
