let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
arrayOfNumbers[4] = 11;
//console.log(arrayOfNumbers);
//unshift method used to insert 1 or more element at the beginning or start of array
arrayOfNumbers.unshift(5);
//console.log(arrayOfNumbers);

arrayOfNumbers.unshift(0,6);
//console.log(arrayOfNumbers);

//shift method used to remove first element at the beginning or start of array
let secondArray=[11,22,47,81];
console.log(`before remove element = ${secondArray}`);
secondArray.shift();
console.log("array after remove firs element ",secondArray);

//slice() used to get sub array from given array from given index
console.log("============ slice() ===========");
let arrayNumbers = [1, 3, 7, 8, 9, 3, 7];
//let slicedElements =  arrayNumbers.slice(2);
let slicedElements =  arrayNumbers.slice(2,3);// it will remove 3 element starting from index 2 
//that means second number is used to say how many numbers u want to remove
console.log(slicedElements);
let slicedValues = arrayNumbers.slice(1, 4);
console.log(slicedValues);

console.log("============ splice() ===========");

// splice() also used to insert element at before given index value
let arrayNumbers1 = [1, 3, 7, 8, 9, 3, 7];
//let slicedElements =  arrayNumbers.slice(2);
let slicedElements1 =  arrayNumbers.slice(2,3);// it will remove 3 element starting from index 2 
//that means second number is used to say how many numbers u want to remove
console.log(slicedElements1);
let slicedValues1 = arrayNumbers1.slice(2, 0,4);// add element before 2-second index
console.log(slicedValues1);
arrayNumbers1.slice(2, 1,4);// replace 2index with 4
arrayNumbers1.slice(2, 2,4);// replace 2 elements from 2nd index with 4
console.log("============++++++++++++++++++++++++ ===========");

arrayNumbers1.slice(2, 3,44,22,33);// replace 3 elements starting from 2nd index
arrayNumbers1.slice(2, 1,44,22,33);// replace 1 elements starting from 2nd index with 44 and add remaining elements


//splice() used to insert or delete element from array
console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers);// array before remove elements
let splicedElements =  array_numbers.splice(4);
console.log(splicedElements); // returns deleted elements
console.log(array_numbers);// returns remaining array after remove elements

console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));
// simple for loop
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; 
   // console.log(element);
}

//for in loop is used to traverse object ,we can use it array but its not recommended
for (const index in arrayOfNumbers) {
    const element = arrayOfNumbers[index];
   // console.log(element);
}

//traversing array in reverse order
let totalElements = arrayOfNumbers.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
   console.log(element);
    
}

