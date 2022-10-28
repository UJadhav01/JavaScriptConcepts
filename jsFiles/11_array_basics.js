var arrayOfNumber=[1,2,3,4,5,6,7,8,2];
console.log(arrayOfNumber);
var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers);
 var arrayLength = arrayOfNumbers.length;
 var mergedArray=arrayOfNumber.concat(arrayOfNumbers);
 //remove duplicate elements from array
/**A Set is a collection of unique values. To remove duplicates from an array:

First, convert an array of duplicates to a Set. The new Set will implicitly remove duplicate elements.
Then, convert the set back to an array.
The following example uses a Set to remove duplicate */
var arrayConvertedToSet=new Set(arrayOfNumber);
//var uniqueArray=[...new Set(arrayOfNumber)]; instead of above u can write this way
console.log(`uniq elements of arrayOfNumber array using set ${[...arrayConvertedToSet]}`);
console.log(`uniq elements of arrayOfNumber array using set ${[...new Set(arrayOfNumbers)]}`);
console.log(`-----------------------------------------------------------------------------------------------------------`);

//The following example uses a indexof()to remove duplicate */
let uniqrry=[];
function getUniqueEle(data){
    for (let index = 1; index < data.length; index++) {
        if(uniqrry.indexOf(index)==-1){
        uniqrry.push(index);}
    }
return uniqrry;
}
console.log(`uniq elements of arrayOfNumber array using indexof ${[...getUniqueEle(arrayOfNumber)]}`);
console.log(`-----------------------------------------------------------------------------------------------------------`);
   
// WAP to find largest number from given array
console.log(`-----------------------------------------------------------------------------------------------------------`);

// WAP to find second largest number from given array
console.log(`-----------------------------------------------------------------------------------------------------------`);
// Addition of all elements in array using for loop
function elementAdd(data){
    var count=0;

        for (let index = 0; index < data.length; index+=1) {
                count+=data[index];
        }
    return count;
    }
    console.log(`addition of elements in array using simple for loop = ${elementAdd(arrayOfNumber)}`);

    // 2nd way addition of array using for each
    function sumArray(array) {
        let sum = 0;
       /*3rd way loop over array and add each item to sum
  for (const item of array) {
    sum += item;
  } */
        array.forEach(item => {
          sum += item;
        });
      
        console.log(`Addition of array using for each loop = `,sum);
        return sum;
      }
      
      sumArray([1, 4, 0, 9, -3]);

console.log(`-----------------------------------------------------------------------------------------------------------`);

// WAP to reverse given array
let reversedArray=arrayOfNumber.reverse();
console.log(`reversed array using reverse() = ${[...reversedArray]}`);
console.log(`-----------------------------------------------------------------------------------------------------------`);

// merge the two arrays
console.log(`Array after merge using concat()\n arrayOfNumber with arrayOfNumbers = ${mergedArray}`);
console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`Array after merge using ...spread operator\narrayOfNumber with arrayOfNumbers = ${[...arrayOfNumber,...arrayOfNumbers]}`);

// console.log(`Total number elements available in array: ${arrayLength}`);

// console.log(`Element at 4th Index is: ${arrayOfNumbers[4]}`);

// arrayOfNumbers[2] = 77;
// console.log(arrayOfNumbers);



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