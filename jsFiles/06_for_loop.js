var s='';
for (let index = 5; index <=50; index=index+5) {
s+=index+" ";
console.log(s ); // shows data into triangular
}

console.log("Table of 5 : ",result);
 for (let index = 0; index <=10; index+=2) {
    // console.log(index);
 }

 // initialization: 1  update by 1;    condition <=10
 for (var test = 1; test <= 10; test++) { // test = 1  2  3
     // console.log(test); // 1 2  3
 }
 //0 2 4 6 8 10
 for (let index = 0; index <= 10; index=index+2) { // index++   index = index+2
     for (let i = 0; i <=10; index++) {
         console.log(index*i);
    }
 }

 //Program for print the multiplication table into one row
 var s = "";
 for(let i=1;i<=10;i=i+2)
 {
     s += i + " ";
 }
  console.log(s ); 

// // WAP to print numbers from 50 to 40 by decrementing by 1
 for (let index = 50; index > 40; index--) { // 51  52  53 
     console.log(index); // 50  51 52 
    
 }


//  WAP to find first 15 odd numbers
// intialization index=1 ; condition index<30;  update index= index+2 

 for (let index = 1; index < 30; index=index+2) {
     console.log(index);
    
 }


 for (let index = 1; index < 30; index++) {
     if(index%2!=0){
      //   console.log(index);
     }
    
 }

// //WAP to find first 15 odd numbers


//WAP to find first 43 even numbers
 var countEven = 0; // 2
 for (let index = 0; index < 1000; index++) { // 1  2
     if(index%2==0){
        console.log(index); // 0  2 
         countEven = countEven +1;
         if (countEven==43) {
             break;
         }
  }
    
 }
