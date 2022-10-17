//WAP for check vowels and constants in string,for accurate result string should be in lower case
var str1="Hello i am from Pandharpurp";
var str=str1.toLowerCase();     // convert given string into lower case
var vowelsCount=0;
var constantCount=0;
//Checks whether a character is a vowel    
for (let index = 0; index < str.length; index++) {
if(str.charAt(index) == 'a' || str.charAt(index) == 'e' || str.charAt(index) == 'i' 
|| str.charAt(index) == 'o' || str.charAt(index) =='u' || str.charAt(index) == 'A' 
|| str.charAt(index) == 'E' || str.charAt(index) == 'I' 
|| str.charAt(index) == 'O' || str.charAt(index) =='U'){
    console.log("String has ", str.charAt(index)," at index " ,index);
    //Increments the vowel counter    
    vowelsCount=vowelsCount+1;
}  
//Checks whether a character is a consonant    
else if(str.charAt(index) >= 'a' && str.charAt(index)<='z') {      
    //Increments the consonant counter    
    constantCount=constantCount+1;    
}   
}
console.log(`\nThe given string contains total ${vowelsCount} vowels`);
console.log(`----------------------------------------------------`);
console.log(`\nThe given string contains total ${constantCount} constant`);

/*var vowels="aeiou";
if(charAt(index)==vowels){}
*var givenString = "I love JavaScript";
var totalChar = givenString.length;
for (let index = 0; index <totalChar; index++) {
    if (index%2==0) {
        var charAt = givenString.charAt(index);
        console.log(charAt); 
    }  
}
 */

