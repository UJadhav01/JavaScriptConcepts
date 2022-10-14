//WAP to print numbers from 5 to 15 by incrementing 1
var result='';
for (let index = 5; index <=15;index++) {
    //console.log(index);               //display result vertically
    result+=index+" ";
}
console.log("\nnumbers from 5 to 15 incrementing by 1 :\n"+result);

 //WAP to print numbers from 50 to 40 by decrementing by 1
var result1='';
 for (let index = 50; index>=40; index--) {
    //console.log(index);               //display result vertically
    result1+=index+" ";
 }
 console.log("\nNumber from 50 to 40 decrementing by 1 : \n"+result1);      //display result horizontally

//  //WAP to find first 15 odd numbers
var result2='';
var countEven = 0; 
for (let index = 0; index < 40; index++) { 
    if(index%2!=0){
    //console.log(index);               //display result vertically
        result2+=index+" ";
        //for storing number count
        countEven = countEven +1;
        if (countEven==15) {
            break;
        }
    }  
}
console.log("\nFirst 15 odd numbers : \n"+result2);     //display result horizontally

 //WAP to first 10 even numbers
 var result3='';
 var countEven1 = 0;
 for (let index = 1; index<40; index++) {
    if(index%2==0){
    //console.log(index);               //display result vertically
    result3+=index+" ";
    countEven1 = countEven1 +1;
    if (countEven1==10) {
        break;
    }
 }
}
 console.log("\nFirst 10 even number : \n"+result3);    //display result horizontally

 //WAP to print table of 5 like 5,10,30,40....50
 var result1='';
 for (let index = 5; index<=50; index=index+5) {
    //console.log(index);               //display result vertically
    result1+=index+" ";
 }
 console.log("\nTable of 5 : \n"+result1);  //display result horizontally

 //WAP to print table of 10 like 10,20,30....100
 var result1='';
 for (let index = 10; index<=100;index=index+10) {
    //console.log(index);               //display result vertically
    result1+=index+" ";
 }
 console.log("\nNumber from 10 to 100 : \n"+result1);   //display result horizontally

 //WAP to print table of 10 in reverse order like 100,90,80...10
 var result1='';
 for (let index = 100; index>=10; index=index-10) {
    //console.log(index);               //display result vertically
    result1+=index+" ";
 }
 console.log("\nNumber from 100 to 10 : \n"+result1);   //display result horizontally
