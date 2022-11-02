let primeNumbers = "";
let primeNumbersCount = 0;
let notPrimeNumbers = "";
let notPrimeNumbersCount = 0;

let sumOFEvenPositionPrimeNumber = 0; // to store even position prime number addition
let sumOFOddPositionPrimeNumber = 0; // to store odd position prime number addition
let arrayOfPrimeNumbers = []; // to store prime numbers
let arrayOfNonPrimeNumbers=[]; // to store non prime numbers

for (let i = 2; i <= 100; i++) {
  //condition for check number is prime or not,only even number 2 is prime number,number is greater and 3 and 5 and number not divisible by 2,3,5 are prime numbers
  //number which divisible by 1 and number itself is prime number
  if ((i % 2 == 0 && i > 2) || (i % 3 == 0 && i > 3) || (i % 5 == 0 && i > 5) || (i % 7 == 0 && i > 7)) {
    notPrimeNumbers += i + " ";
    notPrimeNumbersCount = notPrimeNumbersCount + 1;
    arrayOfNonPrimeNumbers.push(i);
  } else {
    primeNumbers += i + " ";
    primeNumbersCount = primeNumbersCount + 1;
    arrayOfPrimeNumbers.push(i);
  }
}
console.log(`number of prime numbers count and numbers still 30 count=${primeNumbersCount} Numbers = ${primeNumbers}`);

console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);

console.log(`number of non prime numbers count and numbers still 30 count=${notPrimeNumbersCount} Numbers = ${notPrimeNumbers}`);
console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);

console.log(`Prime numbers from 2 to 100`,arrayOfPrimeNumbers);
for (let i = 0; i < arrayOfPrimeNumbers.length; i++) {
  if (i % 2 == 0) {
    sumOFEvenPositionPrimeNumber += arrayOfPrimeNumbers[i];
  } else {
    sumOFOddPositionPrimeNumber += arrayOfPrimeNumbers[i];
  }
}

console.log(`Sum of even positioned prime numbers = ${sumOFEvenPositionPrimeNumber}`);
console.log(`Sum of odd positioned prime numbers = ${sumOFOddPositionPrimeNumber}`);

console.log(`Non prime numbers from 2 to 100`,arrayOfNonPrimeNumbers);
// //////
// function primeNumber(numberToCheck){
//     for (let index = 2; index < numberToCheck; index++) {
//       if(numberToCheck%index==0) {
//           return false;
//       }
//     }
//     return true;
//   }

//   console.log(primeNumber(11));
//   console.log(primeNumber(9));
//   console.log(primeNumber(29));
