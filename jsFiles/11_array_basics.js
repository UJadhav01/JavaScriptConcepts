var arrayOfNumber=[1,2,3,4,5,6,7,8,2];
console.log(arrayOfNumber);
var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers);
 var arrayLength = arrayOfNumbers.length;

console.log(`Total number elements available in array: ${arrayLength}`);

console.log(`Element at 4th Index is: ${arrayOfNumbers[4]}`);

arrayOfNumbers[2] = 77;
console.log(arrayOfNumbers);
//console.log(typeof arrayOfNumbers);

/**
 * const array1 = [1, 3, 4];
const array2 = [5, 6, 7];
// const array3 = array1.concat(array2);
const array3 = [...array1, ...array2]
console.log(array3);
console.log("-----------------------------");

 * var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers);
arrayOfNumbers.push(99);
arrayOfNumbers.push(88);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
 var arrayLength = arrayOfNumbers.length;

console.log(`Total number elements available in array: ${arrayLength}`);

console.log(`Element at 4th Index is: ${arrayOfNumbers[4]}`);

//arrayOfNumbers[2] = 77;
console.log(arrayOfNumbers);

// let otherArray = arrayOfNumbers; // Shallow Copy
let otherArray = [...arrayOfNumbers];
arrayOfNumbers[3]  = 44;
console.table(arrayOfNumbers);
console.table(otherArray);
 */