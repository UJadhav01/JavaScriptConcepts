let setOfNumbers = new Set();
console.log(typeof setOfNumbers);
//array_numbers=0; used to make array empty
console.log("====== Adding element into the set collection=======");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);

console.log("====== Adding duplicate element =======");
setOfNumbers.add(7);
console.log(setOfNumbers);

console.log("====== Checking number elements available into set =======");
console.log(setOfNumbers.size);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log("====== Deleting element 9 =======");
setOfNumbers.delete(9);
console.log(`after delete = `,setOfNumbers);


console.log("====== Check whether element 7 available into set or not =======");
let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));
//setOfNumbers.clear() this used to make set empty 
console.log("====== Traversing set =======");
for (const element of setOfNumbers) {
    console.log(element);
}

console.log(`=======================remove duplicate elements from array=================`);
let arrayNum=[1,2,3,4,5,3,5];
let arrayUniqElement=[...new Set(arrayNum)];
console.log(`array before unique elements = `,arrayNum);
console.log(`array after unique elements = `,arrayUniqElement);
