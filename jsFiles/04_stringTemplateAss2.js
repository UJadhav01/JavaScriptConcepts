// function expression for calculating string length square
console.log(`\nstep-1 : Function Expression with return value for calculating word length square of given string :`);
var wordLengthSquare=function(str){
    var strLength=str.length;       // for calculating string length
    return strLength;       // return the length of string
}
var firstStringLength=wordLengthSquare('JavaScript');         // function call for string JavaScript
var secondStringLength=wordLengthSquare('Google');             // function call for string Google
var thirdStringLength=wordLengthSquare('Developer');          // function call for string Developer
console.log(`\nLength of string JavaScript is = ${firstStringLength} and it's square is = ${firstStringLength*firstStringLength}`);// for calculate square of string length and display result
console.log(`\nLength of string Google is = ${secondStringLength} and it's square is = ${secondStringLength*secondStringLength}`);// for calculate square of string length and display result
console.log(`\nLength of string Developer is = ${thirdStringLength} and it's square is = ${thirdStringLength*thirdStringLength}`);// for calculate square of string length and display result
console.log(`------------------------------------------------------------------------------------------------------------------`);
console.log(`\nstep-2 : Function  for string reverse , \n\t find length of string after dividing with total words available in string ,\n\t multiple string length with total words available in string :`);

// function expression for 
function strReverse(){
    var str1="I am Angular Developer";
    var string1='I',string2='am',string3='Angular',string4='Developer';
    var reversestring2=string2.split("").reverse().join("");
    var reversestring3=string3.split("").reverse().join("");
    var reversestring4=string4.split("").reverse().join("");
    var reversedString=reversestring4+" "+reversestring3+" "+reversestring2+" "+string1;
    console.log(`\n2.1 : First way reversed string with words each character : `);
    console.log(`\nGiven String = ${str1}\n`);

    console.log(`Reversed string = ${reversedString}\n`);
    //console.log("\nhere i have stored each word in separate var and split each word using split(),\nafter that with the help of split array of each word and arrays reverse() method reversed each splitted word \n then join that reversed splitted  words with array join() method and finally make concatenation of each reversed word");

    console.log(`------------------------------------------------------------------------------------------------------------------`);

    console.log(`\n2.1 : Second way reversed given string : `);

    console.log(`\nGiven String = ${str1}`);
    // for splitting the given string used split()
        var splitStr1=str1.split(" ");
    // for reversing the array of string which gets after split used reverse()
    var reversedArrayofstr1=splitStr1.reverse();
    // for joining again array of reversed string word into single string used join();
    var joinArrayofstr1=reversedArrayofstr1.join(" ");

    // we can write above 3 steps into one step as 
    //var splitStr1=str1.split(" ").reverse().join(" "); 

    console.log(`\nReversed string ${str1}  = ${joinArrayofstr1}`);

   // console.log("\n And I have done this with array method as after splitting string with split() we get array of separated words\n and array has reverse() method which helps to reverse given array\n array also has another method join() which helps to join the array elements, using join i have joined reversed array");
    console.log(`------------------------------------------------------------------------------------------------------------------`);

    var str1Length=str1.length;
    var strWordCountAfterSplit=splitStr1.length;
    //var result=str1Length/strWordCountAfterSplit;
    console.log(`\nLength of Given string = ${str1Length} and words in string are = ${strWordCountAfterSplit}`);
    console.log(`\n2.2 : Result after dividing length of string with total no of words = ${str1Length/strWordCountAfterSplit}`);
    console.log(`\n2.3 : Result after multiply length of string with total no of words = ${str1Length*strWordCountAfterSplit}\n`);


}
strReverse();
