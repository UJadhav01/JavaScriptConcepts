//WAP for count total number of vowels using include() for string--> "Good Morning IT Champ"
console.log("\nStep-1 : Program for count total number of vowels using include() for string--> Good Morning IT Champ");
var givenString="Good Morning IT Champ";
var strLowerCase=givenString.toLowerCase();
var vowelsCount=0;
var noOfConstant="";
var vowels="aeiou";
for (let index = 0; index < strLowerCase.length; index++) {
if(vowels.includes(strLowerCase.charAt(index))){
    noOfConstant=index+"";      //for counting constants
    vowelsCount=vowelsCount+1;  // for counting vowels
}
}
console.log(`\nNumber of vowels in given string using include() = ${vowelsCount}`);
console.log(`--------------------------------------------------------`);


//WAP for count vowels from the string using function--> "I Love JavaScript"
console.log("\nStep-2 : Program for count total number of vowels using function for string--> I Love JavaScript");
function vowelsCounts(str){
    var strLowerCase1=str.toLowerCase();
    var vowelsCount1=0;
    var noOfConstant1=0;

    for (let index = 0; index < strLowerCase1.length; index++) {
        if(strLowerCase1.charAt(index)=='a' || strLowerCase1.charAt(index)=='e'|| strLowerCase1.charAt(index)=='i'|| strLowerCase1.charAt(index)=='o' ||
        strLowerCase1.charAt(index)=='u' ){
            
            noOfConstant1=index+"";     //for counting constants
            vowelsCount1=vowelsCount1+1;// for counting vowels
        }
    }
console.log(`\n Number of vowels in given string = ${vowelsCount1}`);
}
vowelsCounts("I Love JavaScript");

//Write a function expression to sum all numbers from 1 to 10
console.log("\nstep-3 : Program for sum of number from 1 to 10,using function expression");

var sunOFNumbers=function(number){
    var sumTotal=0;
    for (let index = 0; index <= number; index++) {
        sumTotal=sumTotal+index;
    }
    console.log(`\nSum of numbers from 1 to 10 = ${sumTotal}`);
}
sunOFNumbers(10);

//Write a function to get sum numbers square from 1 to 10
console.log("\nstep-4 : Program to get sum of numbers square from 1 to 10,using function");

var sunOFNumbers=function(number){
    var sumTotal=0;
    for (let index = 0; index <= number; index++) {
        sumTotal=sumTotal+(index*index);
    }
    console.log(`\nSum of numbers square from 1 to 10 = ${sumTotal}`);
}
sunOFNumbers(10);

//WAP for string1="Hard work always pays back" , string2="Soon I will be Angular IT Champ" using function
//print odd position characters and even position characters without considering space

console.log("\nStep-5 : Program for string1=Hard work always pays back ,\n string2=Soon I will be Angular IT Champ using function print odd position characters and even position characters without considering space");
//function for display even position characters
console.log(`\nGiven string is string1 = "Hard work always pays back" \n string2 = Soon I will be Angular IT Champ`);

function evenPositionChars(str2){
var evenPosChar="";
var lowerString=str2.toLowerCase();
for (let index = 0; index < lowerString.length; index++) {
if(index%2==0 && lowerString.charAt!=" ") {
   return evenPosChar=evenPosChar+lowerString.charAt(index);
}   
}
console.log(`---------------------------------------------------`);
console.log(`\n Even positioned characters are = ${evenPosChar}`);

}
evenPositionChars("Hard work always pays back");
evenPositionChars("Soon I will be Angular IT Champ");

// function for display odd position characters
function oddPositionChars(str1){
    var oddPosChar="";
    var str1Length=str1.length;
    for (let index = 0; index < str1Length; index++) {
    if(index%2!=0 && str1.charAt(index)!=" ") {
        oddPosChar=oddPosChar+str1.charAt(index);
        //console.log("String has odd char ", str1.charAt(index));
    }   
    }
    console.log(`---------------------------------------------------`);

    console.log(`\n Odd positioned characters are = ${oddPosChar}`);
}
oddPositionChars("Hard work always pays back");
oddPositionChars("Soon I will be Angular IT Champ");