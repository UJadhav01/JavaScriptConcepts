function do_assignment(callback) {
    console.log("I am Doing assignment and it is done now...");
    callback();
}

function copy_assignment() {
    console.log("Hey bro.. Thank you. Let me copy");
}

do_assignment(copy_assignment);


function display() {
    console.log("display function");
}

setTimeout( display, 4000);// call only once after 4 seconds

setInterval(display, 2000);// call every time after interval of 2 seconds
