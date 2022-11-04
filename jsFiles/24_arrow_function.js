
//anonymous function
(function (){
    console.log("anonymous function");
})();
//normal function

function add(num1,num2=5){
    console.log("Normal function",num1+num2);
}
add(10,2);



//function expression
let add2=function(num1,num2=5){
    console.log("function expression",num1+num2);
}
add2(10);
add2(5,3);


/**function display(){
    console.log("Hello");
}

let show =  () => {
    console.log("Hello");
}
show();


let add = function(n1, n2) {
    return n1 + n2;
}
console.log( add(10, 20));

let sum = (n1, n2) =>  n1 + n2; 

// let sum1 = (n1, n2) => {
//     return n1 + n2
// } 

console.log( sum(10, 20));
 */