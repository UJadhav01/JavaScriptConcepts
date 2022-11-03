function do_assignment(callback) {
    console.log("I am Doing assignment and it is done now...");
    callback();
    return function() {
        console.log("Yahooo.. mai to ban gaya....");
    }
}

function copy_assignment() {
    console.log("Hey bro.. Thank you. Let me copy");
}

let returnFun = do_assignment(copy_assignment);
returnFun();
