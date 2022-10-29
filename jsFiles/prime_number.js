let num=10;
for(let i=2;i<Math.sqrt(num);i++){

    if((num%2)==0){
        console.log(`---------------------------------------------------`);
        console.log("not prime",i);
    }
        else{
        console.log(`---------------------------------------------------`);
        console.log("prime",i);
    }
}

//////
function primeNumber(numberToCheck){
    for (let index = 2; index < numberToCheck; index++) {
      if(numberToCheck%index==0) {
          return false;
      }
    }
    return true;
  }
  
  console.log(primeNumber(11));
  console.log(primeNumber(9));
  console.log(primeNumber(29));
  