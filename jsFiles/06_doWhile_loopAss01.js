//WAP to print numbers from 5 to 15 by incrementing 1
let result='';
let index=5;
do{
    result+=index+" ";
    index++;
}while(index <=15)
console.log("\nnumbers from 5 to 15 incrementing by 1 :\n"+result);


 //WAP to print numbers from 50 to 40 by decrementing by 1
let result11='';
let index1=50;
do {
    result11+=index1+" ";
    index1--;
}while (index1>=40)
console.log("\nNumber from 50 to 40 decrementing by 1 : \n"+result11);      //display result horizontally


//  //WAP to find first 15 odd numbers
let result2='';
let countEven = 0; 
let index3=0;
do {
    if(index3%2!=0){
        //console.log(index);               //display result vertically
            result2+=index3+" ";
            //for storing number count
            countEven = countEven +1;
            if (countEven==15) {
                break;
            }
        }  
        index3++;
}while (index3 < 40)
console.log("\nFirst 15 odd numbers : \n"+result2);     //display result horizontally


 //WAP to first 10 even numbers
 let result3='';
 let countEven1 = 0;
let index4=1;
 do {
    if(index4%2==0){
        //console.log(index);               //display result vertically
        result3+=index4+" ";
        countEven1 = countEven1 +1;
        if (countEven1==10) {
            break;
        }
     }
     index4++; 
 }while (index4<40)
 console.log("\nFirst 10 even number : \n"+result3);    //display result horizontally

 
 //WAP to print table of 5 like 5,10,30,40....50
 let result4='';
 let index5=5;
 do {
    result4+=index5+" ";
        //console.log(index);               //display result vertically
        index5=index5+5;
 }while (index5<=50)
 console.log("\nTable of 5 : \n"+result4);  //display result horizontally

 //WAP to print table of 10 like 10,20,30....100
 let result5='';
 let index6=10;
 do {
    //console.log(index);               //display result vertically
    result5+=index6+" ";
    index6=index6+10;
 }while (index6<=100)
 console.log("\nNumber from 10 to 100 : \n"+result5);   //display result horizontally

 //WAP to print table of 10 in reverse order like 100,90,80...10
 let result7='';
 let index7=100;
do {
   //console.log(index);               //display result vertically
   result7+=index7+" ";
   index7=index7-10;
 } while (index7>=10)
 console.log("\nNumber from 100 to 10 : \n"+result7);   //display result horizontally
 console.log(`\n`);


