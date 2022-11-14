let employee={
    firstName: 'shiv',
    lastName:'kale',
}
    function invite(greeting1,greeting2){
        console.log(greeting1," " +this.firstName+" "+this.lastName+" ",greeting2);//it will return hello  shiv kale  how r u
    }
    //call() used to invokes function with this value and argument provided one by one 
invite.call(employee,"hello","how r u");
console.log(`--------------------------------------------------------`);
//apply() used to invokes function with this value and allows you to pass argument as array
invite.apply(employee,["hello","how r u"]);
console.log(`--------------------------------------------------------`);
function invite2(greeting1,greeting2,bindArg){
    console.log(greeting1," " +this.firstName+" "+this.lastName+" ",greeting2," ",bindArg);//it will return hello  shiv kale  how r u
}
//bind() returns new function allowing you to pass any number of arguments
let inviteEmp=invite2.bind(employee);
inviteEmp('hello','how are you','welcome');

const unaryFunction=a=>console.log(a+10);
unaryFunction(2);