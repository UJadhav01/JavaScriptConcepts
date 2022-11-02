console.log(myName);

// console.log(rollNo); // Not allowed to access as variable declared using let doesn't hoisted

// console.log(PIN_CODE); // // Not allowed to access as variable declared using const doesn't hoisted

var myName = "Mohit Sharma";

let rollNo = 1234;

const PIN_CODE = 431202;

show();

function show() {
    console.log("Show function");
}


// display();// Not allowed

var display = function() {
    console.log("Inside display function expression");
}

display();



