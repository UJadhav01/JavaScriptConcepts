/**A palindrome is used to verify a sequence of numbers, strings, or letters that are read 
 * left to right and right to left to match the same as madam
 *  characters or return the same sequence of characters. */

// using function
var isPalindrome=function(string){

  if(typeof string=='number'){
    var string1=string.toString();
    var strReverse=string1.split("").reverse().join("");
  }else{
    var strReverse=string.split("").reverse().join("");
  }

if(string==strReverse)
{
    console.log(`Given string ${string} is palindrome`);
}else{
    console.log(`Given string ${string} is not palindrome`);
}
}
isPalindrome('java');
isPalindrome('madam');
isPalindrome('101');
isPalindrome('123456');
isPalindrome('121');
isPalindrome(1234);



