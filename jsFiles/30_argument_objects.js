/*What is argument objects in javascript?
The JavaScript variable represents the arguments that can be passed to the function. 
By using, ‘type of’ operator we can represent the argument objects.*/

function argObjects(arg){
    console.log(typeof arg,arguments.length);
}
argObjects(7);
argObjects("2","3","4");
argObjects();