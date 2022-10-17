var givenString = "I love JavaScript";
var totalChar = givenString.length;
var recerseStr="";
for (let index = totalChar-1; index >=0; index--) {
        var str=givenString.charAt(index); 
        recerseStr=recerseStr+str;
    }  
console.log(recerseStr);