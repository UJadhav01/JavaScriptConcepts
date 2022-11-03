// Functions are known as first class citizens in JavaScript
// It is because of three reasons
//1.  Function can be stored in a variable ---> Function Expression
//2.  Function can be passed as an argument to another function ---> Callbacks
//3 . A function can return another function


// 3 . A function can return another function

function message() {
    console.log("Inside message function ");
    return function(){
        console.log("Inside inner function");
    }
}

message()();
