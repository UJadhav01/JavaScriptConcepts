console.log("\nStep-1 : Program for reverse given string1=Hard work always pays back ,\n\t string2=Soon I will be Angular IT Champ using only charAt()");
//function for display even position characters
//console.log(`\nGiven string is string1 = "Hard work always pays back" \n\t\tstring2 = Soon I will be Angular IT Champ`);
function reverseString(str){
    var reverseStringResult="";
    for (let index = str.length-1; index >=0; index--) {
        var reverseStr=str.charAt(index); 
        reverseStringResult=reverseStringResult+reverseStr;        
    }
console.log(`\n Reverse given string using function and only charAt() = ${reverseStringResult}`);
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");
console.log(`---------------------------------------------------------------------------------`);
console.log(`Program for reverse first word from string : "Good Morning" `);
var string1="Good Morning";
var splitedString=string1.split("");
var firstWord=splitedString.slice(0,4).join("");
var reverseResult="";
for (let index = firstWord.length-1; index >=0; index--) {
    var reverseStr1=firstWord.charAt(index);
    reverseResult=reverseResult+reverseStr1;  
    finalString= reverseResult+" "+splitedString.slice(5).join("") ;
}
console.log("\n string before reverse first word =",string1);
console.log(`\nString after reverse first word = ${finalString}`);
console.log(`\n`);